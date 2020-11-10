<template>
  <div>
    <PageTitle title="Compass" />
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="block__content">
            <div class="filter__map">
              <div class="d-flex justify-content-between">
                <div class="title_section">
                  <h4>Filter</h4>
                </div>
                <div class="option_section">
                  <i class="fe-refresh-ccw" />
                  <i
                    class="fe-minus cursor-pointer"
                    @click="filterHidden = !filterHidden"
                  />
                </div>
              </div>
              <div v-if="!filterHidden" class="all__filter">
                <div class="row">
                  <div class="col-12 col-sm-3">
                    <div class="title_form_input">
                      <label for="district">District</label>
                    </div>
                  </div>
                  <div class="col-12 col-sm-9">
                    <select
                      id="district"
                      v-model="selectedDistrict"
                      class="custom-select mr-sm-2"
                      @change="applyFilter"
                    >
                      <option value="" disabled>
                        Select District
                      </option>
                      <option
                        v-for="district in districts"
                        :key="district.name"
                        :value="district.id"
                      >
                        {{ district.name }}
                      </option>
                    </select>
                  </div>
                  <div class="col-12 col-sm-3">
                    <div class="title_form_input">
                      <label for="site">Site</label>
                    </div>
                  </div>
                  <div class="col-12 col-sm-9">
                    <select
                      id="site"
                      v-model="selectedSites"
                      class="custom-select mr-sm-2"
                    >
                      <option value="" disabled>
                        Select Sites
                      </option>
                      <option
                        v-for="site in selectedDistrictSites"
                        :key="site.name"
                        :value="site.id"
                      >
                        {{ site.name }}
                      </option>
                    </select>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <div
                      class="all__filter_choose all__filter_choose pl-3 pr-3 pb-3"
                    >
                      <h6 class="cursor-pointer" @click="Phases = !Phases">
                        Phases/Statuses <i class="fe-minus" />
                      </h6>
                      <div v-if="!Phases">
                        <v-treeview
                          v-model="selection"
                          :items="items"
                          selection-type="leaf"
                          selectable
                          return-object
                          selected-color="red"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <button class="btn btn-primary" @click="getMapData">
                      Get
                    </button>
                    <button class="btn btn-primary">
                      Clear
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <GmapMap
              ref="gMap"
              :cluster="{ options: { styles: clusterStyle } }"
              :center="{ lat: lngLats[0].lat, lng: lngLats[0].lng }"
              :options="{
                fullscreenControl: true,
                disableDefaultUI: true,
                zoomControl: true,
                gestureHandling: 'cooperative'
              }"
              :zoom="6"
              map-type-id="terrain"
              style="width: 100%; height: 450px"
              @bounds_changed="checkForMarkers"
              @click="addContact"
            >
              <GmapCluster :zoom-on-click="true" :clickable="true">
                <GmapMarker
                  v-for="location in lngLats"
                  :key="location.id"
                  :position="{ lat: location.lat, lng: location.lng }"
                  :options="{
                    icon:
                      location === currentLocation
                        ? pins.selected
                        : pins.notSelected
                  }"
                  :zoom-on-click="true"
                  :clickable="true"
                  @click="editContact(location.id)"
                  @mouseover="toggleInfoWindow(location.id)"
                  @mouseout="toggleInfoWindow(location.id)"
                >
                  <gmap-info-window
                    :ref="`infoWindow${location.id}`"
                    :options="{ maxWidth: 200 }"
                    :opened="false"
                  >
                    <b>{{ location.name }}</b>
                    <br />
                    <br />
                    <code>
                      Lat: {{ location.lat }},
                      <br />
                      Lng: {{ location.lng }}
                    </code>
                  </gmap-info-window>
                </GmapMarker>
                <GmapMarker
                  :position="{ lat: 40, lng: -70 }"
                  @click="editContact(100)"
                />
              </GmapCluster>
            </GmapMap>
          </div>
        </div>
      </div>

      <!-- Create Modal -->
      <b-modal ref="create-contact-modal" hide-footer>
        <CreateContact
          :coordinates="newContactCoordinates"
          @toggleCreateModal="toggleModal"
        />
      </b-modal>

      <!-- Edit Modal -->
      <b-modal ref="edit-contact-modal" hide-footer>
        <EditContact
          :id="contactToEdit"
          :coordinates="newContactCoordinates"
          :form="form"
          :hear_about="hear_about"
          @toggleEditModal="toggleModal"
        />
      </b-modal>

      <!-- bulk Update Modal -->
      <b-modal
        id="bulkUpdateModal"
        ref="bulk-update-modal"
        hide-footer
        :title="
          polygonIncludedMarkers.length != 0
            ? `${polygonIncludedMarkers.length} Selected Contacts`
            : 'Error'
        "
      >
        <bulkEdit
          v-if="polygonIncludedMarkers.length != 0"
          :contacts-ids="polygonIncludedMarkers.map(marker => marker.id)"
          @toggleEditModal="toggleModal"
        />

        <p v-if="polygonIncludedMarkers.length == 0">
          No contacts selected!
        </p>
      </b-modal>
    </div>
  </div>
</template>

<script>
import Api from "@/services/api/Api";
import axios from "axios";

const components = {
  CreateContact: () => import("@/components/contacts/create/Main.vue"),
  EditContact: () => import("@/components/contacts/Edit.vue"),
  bulkEdit: () => import("@/components/contacts/bulkEdit.vue")
};

export default {
  components,
  async asyncData(context) {
    const api = new Api(context);
    const contacts = await api.getContacts();
    const phases = await api.getPhases();
    const children = phases.map((phase, index) => {
      return { id: index + 2, name: phase.name, value: phase.id };
    });
    const formatter = context.$formatter;
    const items = [
      {
        id: 1,
        name: "All",
        children
      }
    ];

    $nuxt.$store.dispatch("contact/getInitialData");

    return {
      contacts,
      items,
      formatter
    };
  },
  data() {
    return {
      hear_about: "",
      form: {},
      filterHidden: false,
      Phases: true,
      selectedDistrict: "",
      selectedId: 4,
      selected: null,
      leaveType: "",
      districts: [],
      selectedSites: "",
      selectedDistrictSites: [],
      currentLocation: {},
      locationsVisibleOnMap: "",
      locations: [],
      pins: {
        selected:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHUSURBVHgB5VU7SwNBEJ7LmZBgMC+UdKKx0MZCG2srwcbCB2glpFDQ3to/IegvSAIWPrBJIySlipUKKqYLaHJ3iWIelzu/DTk8j71H7MQPltmZnflmZ3b3juivQ3BzCIfDI4FAYBvTRV3XR7tBglCCOIP9oFwuv/46QSwWWwfZIaaDNi7vGOlqtZqhfhPE4/EViAy5V6ljE8uVSuXYc4JkMjncarUeMR0ib5Db7fZEvV6vWBd8PG+Q73LIFYyj3lAsa1G/37/D4+JWgPbcQkybd9jpdGYVRXlmSiQSSYmieMWmhgMuwI0kSTPkpQJgzKJnDfJuKYryBJH7sVNBSPGI7BKoFl3n+GguMY4JHiz6GtoybiisRczmEtPFAM+Ifl6i5DmTKYqeX+Nssj19lUz9N2J4XNxDTiQSkwi4oz6ADU3hLdxb7dwW9RyL5B0FHrltAgZUsEce4eRrmwB3ugCRJ3fk4VvsOwEDHtcWxKeDy4emaWmHdRKdFpvNphQKhdhFmOet42D3sftTJw7X/wHgw/U8h1ywkJ/gYJeI/wi/g8kdmqqqG5Alk62Er+emG7nXBFSr1aroNSNknwOVzZnNS6xIHtFoNF6CweAbpheyLOfo3+ALfrSuzJ1F8EsAAAAASUVORK5CYII=",
        notSelected:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABHElEQVR42uVVyw4BMRQdC98lsbPwG5YSH+BzWFtLZilh0oQgFh6J54IwBmGYtrfaBREdcTvDhpM0adrec3rb+7Csn8fRdrLg7VzBubhDzmHrudRuZ2KRs/miLd6AThfNaOTTGRFIsMm8bkSuXBeGoLVaGi0g39wLI4GTf1EjdE/+E1pAAGgEAenkb/tBo1vQFUDgBbSbny6al77uSQwB/6wJSNHoAo8xj30iaYMW4Lv9wfSTpc0eH6atXtE4TKWNUS4AY2hyddY4k/lwVEZncm9QilQuBGPwnp1B5GIXGi3P0eU0c7EqKrje5hU5d7fr2P2AEJIESkNqB1XJkvhI0/GrTuqZX619tLMF/VHlfnk5/0r7ZMvVWA3rr3AF6LIMZ7PmSlUAAAAASUVORK5CYII="
      },
      clusterStyle: [
        {
          url:
            "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m1.png",
          width: 56,
          height: 56,
          textColor: "#000"
        }
      ],
      selection: [],
      newContactCoordinates: {},
      contactToEdit: {},
      drawingManager: {},
      polygonIncludedMarkers: []
    };
  },
  computed: {
    lngLats() {
      if (this.contacts) {
        const location = this.contacts.map(contact => {
          return {
            lat: parseFloat(contact.lat),
            lng: parseFloat(contact.lng),
            name: contact.first_name,
            visible: null,
            id: contact.id
          };
        });

        return location;
      }
      return [];
    },
    editedContact() {
      return this.$store.getters["contact/contact"];
    }
  },

  watch: {
    selectedDistrict(val) {
      const selectedDistrict = this.districts.find(obj => {
        return obj.id === val;
      });

      this.selectedDistrictSites = selectedDistrict
        ? selectedDistrict.sites
        : [];
    },
    editedContact(val) {
      this.getContactData(val);
    }
  },

  mounted() {
    this.polygonIncludedMarkers = [];

    $nuxt.$store.dispatch("contact/getContactData", "");
    this.$refs.gMap.$mapPromise.then(() => this.setDrawingManager());
  },
  created() {
    this.getdistric();
  },
  methods: {
    setDrawingManager() {
      const drawingManager = new window.google.maps.drawing.DrawingManager({
        drawingControl: false,
        drawingControlOptions: {
          position: window.google.maps.ControlPosition.TOP_CENTER,
          drawingModes: ["polygon"]
        }
      });

      drawingManager.setMap(this.$refs.gMap.$mapObject);

      this.AddCustomControllers(drawingManager);

      setTimeout(this.googleDrawingAddListener(drawingManager), 10000);
    },
    AddCustomControllers(drawingManager) {
      this.styleCustomControllers(
        drawingManager,
        "Draw",
        "btn btn-primary drawBtn position-absolute",
        btn => {
          btn.addEventListener("click", () => {
            drawingManager.setDrawingMode(
              window.google.maps.drawing.OverlayType.POLYGON
            );
          });
        }
      );

      this.styleCustomControllers(
        drawingManager,
        "Cancel",
        "btn btn-secondary ml-1 cancelBtn position-absolute",
        btn => {
          btn.addEventListener("click", () => {
            drawingManager.setDrawingMode(null);
          });
        }
      );

      this.styleCustomControllers(
        drawingManager,
        "Bulk Update",
        "btn bg-white text-dark ml-1 bulkUpdateBtn position-absolute",
        btn => {
          btn.addEventListener("click", () => {
            this.toggleModal("bulk-update-modal");
          });
        }
      );
    },
    styleCustomControllers(drawingManager, btnText, className, callback) {
      const map = this.$refs.gMap;

      // Create Main DIv
      const btn = document.createElement("vid");

      // Create span to hold the text insde the draw controller
      const controllerText = document.createElement("span");
      controllerText.innerHTML = btnText;

      btn.appendChild(controllerText);

      // Set CSS for the Draw Controller
      btn.role = "button";
      btn.draggable = "false";
      btn.ariaPressed = "false";
      btn.ariaLabel = "Draw a shape";
      btn.title = "Draw a shape";
      btn.tabindex = "0";
      btn.className = className;

      map.$mapObject.controls[
        window.google.maps.ControlPosition.TOP_CENTER
      ].push(btn);

      callback(btn);
    },
    googleDrawingAddListener(drawingManager) {
      window.google.maps.event.addListener(
        drawingManager,
        "overlaycomplete",
        event => {
          const polygon = event.overlay;

          this.polygonIncludedMarkers = this.locationsVisibleOnMap.filter(
            location => {
              const marker = new window.google.maps.Marker({
                position: { lat: location.lat, lng: location.lng }
              });

              return window.google.maps.geometry.poly.containsLocation(
                marker.getPosition(),
                polygon
              );
            }
          );
        }
      );
    },
    toggleInfoWindow(contactId) {
      this.$refs[`infoWindow${contactId}`].opened = !this.$refs[
        `infoWindow${contactId}`
      ].opened;
    },
    toggleModal(btn) {
      this.$refs[btn].toggle("#toggle-btn");
    },
    addContact(e) {
      this.toggleModal("create-contact-modal");
      this.newContactCoordinates = {
        lng: e.latLng.lng().toString(),
        lat: e.latLng.lat().toString()
      };
    },
    editContact(locationId) {
      this.contactToEdit = locationId;
      $nuxt.$store.dispatch("contact/getContactData", locationId);

      this.toggleModal("edit-contact-modal");
    },
    checkForMarkers() {
      this.lngLats.forEach((location, i) => {
        location.visible = this.$refs.gMap.$mapObject
          .getBounds()
          .contains(
            this.$refs.gMap.$children[0].$clusterObject.markers_[1].getPosition()
          );
      });
      this.locationsVisibleOnMap = this.lngLats.filter(l => l.visible);
    },
    applyFilter(event) {
      this.$emit("triggerChange", (this.selected = event.target.value));
    },
    getContactData(editedContact) {
      this.hear_about = editedContact.hear_about;
      this.form = {
        requirements: {
          first_name: editedContact.first_name,
          middle_name: editedContact.middle_name,
          last_name: editedContact.last_name,
          district_id: editedContact.district_id,
          academy_id: editedContact.academy_id,
          referralName: editedContact.referred_by,
          district: editedContact.site.district.id,
          site: editedContact.site.id,
          phase: editedContact.status.phase.id,
          status: editedContact.status.id,
          priority: editedContact.priority,
          student_referred: null,
          student_referred_input: ""
        },
        contactInfo: {
          street_address: editedContact.street_address_1,
          street_address_line_2: editedContact.street_address_2,
          city: editedContact.city,
          state: editedContact.state,
          country: editedContact.county,
          zip_code: String(editedContact.zip_code),
          primary_phone: editedContact.phone_1,
          primary_phone_bad: editedContact.phone_1_bad,
          secondary_phone: editedContact.phone_2,
          secondary_phone_bad: editedContact.phone_2_bad,
          email: editedContact.email
        },
        eeocInfo: {
          birthdate: editedContact.birthdate
        },
        pastSchoolInfo: {
          cohort_year: editedContact.cohort_year,
          grade_level: editedContact.grade_level,
          past_school: editedContact.past_school_attended,
          withdrawal_code: editedContact.withdrawal_code,
          withdrawal_date: editedContact.withdrawal_date,
          community_outreach_advocate:
            editedContact.community_outreach_advocate.id,
          outreach_resource_advocate:
            editedContact.outreach_resource_advocate.id
        },
        additionalInfo: {
          notes: editedContact.notes
        }
      };
    },
    async getdistric() {
      this.districts = await $nuxt.$api.getDistricts();
    },
    // getsites() {
    //   if (this.selected) {
    //     axios
    //       .get(
    //         `//atlas-rebuild-api.mtcdevsite.com/api/v1/districts/${this.selected}/?include=sites`
    //       )
    //       .then(response => {
    //         this.sites = response.data.included;
    //       });
    //   }
    // },
    getMapData() {
      let query = "";
      this.selection.forEach((item, i) => {
        i < this.selection.length - 1
          ? (query = query + `filter[phase][]=${item.value}&`)
          : (query = query + `filter[phase][]=${item.value}`);
      });
      if (this.selectedSites) {
        query = query
          ? query + `&filter[site]=${this.selectedSites}`
          : query + `filter[site]=${this.selectedSites}`;
      }

      const apicall =
        "//atlas-rebuild-api.mtcdevsite.com/api/v1/contacts?include=community_outreach_advocate,outreach_resource_advocate,site.district,status.phase";

      if (query) {
        axios.get(`${apicall}&${query}`).then(response => {
          this.contacts = [...this.formatter.deserialize(response.data)];
        });
      } else {
        axios.get(`${apicall}&${query}`).then(response => {
          this.contacts = [...this.formatter.deserialize(response.data)];
        });
      }
    }
  }
};
</script>
<style lang="scss">
.block__content {
  background-color: #fff;
  padding: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
}
.filter__map {
  background-color: #fff;
  padding: 20px;
  position: absolute;
  z-index: 9;
  margin: 10px;
  width: 60%;
}
.title_form_input {
  label {
    font-weight: bold;
    font-size: 16px;
    line-height: 2.5rem;
  }
}
label small {
  font-weight: bold;
  font-size: 12px;
}
.cursor-pointer {
  cursor: pointer;
}
.GMap__Wrapper {
  width: 100%;
  height: 70vh;
}
.all__filter {
  .v-treeview-node__children {
    display: flex;
    flex-wrap: wrap;
  }
}
.modal {
  overflow-x: hidden;
  overflow-y: auto;
}
.layout {
  background-color: rgba(0, 0, 0, 0.3);
}
.modal-dialog {
  min-width: 700px;
}
.gm-fullscreen-control {
  width: 30px !important;
  height: 30px !important;
}
.drawBtn,
.cancelBtn,
.bulkUpdateBtn {
  top: 10px !important;
  left: unset !important;
  padding: 4px 15px !important;
}
.drawBtn {
  right: 50px !important;
}
.cancelBtn {
  right: 120px !important;
}
.bulkUpdateBtn {
  right: 200px !important;
}
#bulkUpdateModal .modal-dialog {
  top: 30vh;
}
</style>
