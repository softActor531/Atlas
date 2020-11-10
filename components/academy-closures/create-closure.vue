<template>
  <div class="card">
    <div class="card-body">
      <h4 class="mb-3 header-title">
        <i class="fa fa-plus-circle" />
        Create New Closure
      </h4>
      <div class="row">
        <div class="col-md-6 mb-2">
          <label>Districts</label>
          <v-select
            v-model="selectedDistrict"
            :options="
              districts.map((district, index) => {
                return district.name;
              })
            "
          />
        </div>
        <div class="col-md-6 mb-2">
          <label>Sites</label>
          <v-select
            v-model="selectedSites"
            :options="
              selectedDistrictSites.map(site => {
                return site.name;
              })
            "
            taggable
            multiple
          />
        </div>
        <InputSelectGroup
          width="6"
          :important="true"
          label="Type"
          type="text"
          name="closure_type"
          :array="closureTypes"
          @closure_typeChanged="filter.attributes.closure_type = $event"
        />
        <InputGroup
          :id="filter.name"
          width="6"
          :important="true"
          label="Name"
          type="text"
          name="closure_name"
          placeholder="please insert the name"
          @closure_nameChanged="filter.attributes.name = $event"
        />
        <div class="col-md-6">
          <div class="form-group mb-0">
            <label>Start Date</label>
            <!--flat picker for time -->
            <flat-pickr
              v-model="filter.attributes.start_date"
              :config="dateConfig"
              class="date-picker form-control flatpickr-input"
            />
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label>End Date</label>
            <!--flat picker for time -->
            <flat-pickr
              v-model="filter.attributes.end_date"
              :config="dateConfig"
              class="date-picker form-control flatpickr-input"
            />
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label>Start Time</label>
            <!--flat picker for time -->
            <flat-pickr
              v-model="filter.attributes.start_time"
              class="date-picker form-control flatpickr-input"
              :config="config"
            />
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group mb-0">
            <label>End Time</label>
            <!--flat picker for time -->
            <flat-pickr
              v-model="filter.attributes.end_time"
              class="date-picker form-control flatpickr-input"
              :config="config"
            />
          </div>
        </div>
        <div class="col-md-12 mt-3">
          <div class="form-group">
            <label for="name">Reason</label>
            <textarea
              v-model="filter.attributes.reason"
              class="form-control"
              name="reason"
              spellcheck="false"
            />
          </div>
        </div>
        <div class="col-xs-12 col-md-3">
          <div class="form-group pt-2">
            <input
              id="filtercheckbox3"
              v-model="filter.attributes.active"
              type="checkbox"
              name="active"
              value="1"
            />
            <label for="filtercheckbox3">Active?</label>
          </div>
        </div>
        <div class="col-xs-12 col-md-3">
          <div class="form-group pt-2">
            <input
              id="filtercheckbox"
              v-model="filter.attributes.allDay"
              type="checkbox"
              name="all_day"
              value="1"
            />
            <label for="filtercheckbox">All-Day?</label>
          </div>
        </div>
        <div class="col-xs-12 col-md-3">
          <div class="form-group pt-2">
            <input
              id="filtercheckbox"
              v-model="filter.attributes.availableOnSite"
              type="checkbox"
              name="Available-On-Site"
              value="1"
            />
            <label for="filtercheckbox"> Available On-Site?</label>
          </div>
        </div>
        <div class="col-xs-12 col-md-3">
          <div class="form-group pt-2">
            <input
              id="filtercheckbox"
              v-model="filter.attributes.availableVirtually"
              type="checkbox"
              name="Available_Virtually"
              value="1"
            />
            <label for="filtercheckbox"> Available Virtually?</label>
          </div>
        </div>
        <div class="col-xs-12 col-md-12">
          <div class="float-right">
            <button
              type="submit"
              class="btn btn-blue waves-effect waves-light mb-2"
              @click="save"
            >
              <i class="mdi mdi-circle-edit-outline" /> Save
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
const components = {
  flatPickr: () => import("vue-flatpickr-component"),
  InputGroup: () => import("@/components/UI/InputGroup.vue"),
  SelectInput: () => import("@/components/shared/SelectInput.vue"),
  InputSelectGroup: () => import("@/components/UI/InputSelectGroup.vue")
};

export default {
  name: "CreateClosure",

  components,

  data() {
    return {
      date: "",
      startTime: "",
      endTime: "",
      config: {
        noCalendar: true,
        enableTime: true,
        dateFormat: "H:i"
      },
      dateConfig: {
        dateFormat: "d/m/Y"
      },
      filter: {
        attributes: {
          name: "",
          closure_type: "",
          end_date: "",
          start_date: "",
          start_time: "",
          end_time: "",
          reason: "",
          active: 0,
          allDay: 0,
          availableOnSite: 0,
          availableVirtually: 0
        }
      },
      selectedDistrict: [],
      selectedSites: [],
      selectedDistrictSites: [],
      sites: []
    };
  },

  computed: {
    districts() {
      return this.$store.getters["academyClosures/districts"];
    },
    closureTypes() {
      return this.$store.getters["academyClosures/closureTypes"];
    }
  },

  watch: {
    selectedDistrict(val) {
      const selectedDistrict = this.districts.find(obj => {
        return obj.name === val;
      });
      this.selectedDistrictSites = selectedDistrict
        ? selectedDistrict.sites
        : [];
    },
    selectedSites(val) {
      this.$store.dispatch("academyClosures/getSelectedSitedIds", {
        val,
        sites: this.sites
      });

      this.filter.sites = this.$store.getters[
        "academyClosures/selectedSitedIds"
      ];
    },
    districts() {
      this.setInitialSites();
    }
  },

  mounted() {
    this.getAcademyClosureDistrects();
  },

  methods: {
    setInitialSites() {
      this.sites = this.districts.map(district => district.sites);
      this.sites = [].concat(...this.sites);
    },
    getAcademyClosureDistrects() {
      this.$store.dispatch("academyClosures/getDistricts");
    },
    save() {
      let { sites, attributes } = this.filter;

      sites = sites.map(site => {
        return {
          type: "sites",
          id: site
        };
      });

      const data = {
        data: {
          type: "academy-closures",
          attributes,
          relationships: {
            sites: {
              data: sites
            }
          }
        }
      };

      this.$axios
        .post(
          "http://atlas-rebuild-api.mtcdevsite.com/api/v1/academy-closures",
          data
        )
        .then(res => {
          Swal.fire("Request passed!", "Created Closure!", "success");
        })
        .catch(e => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: e.message
          });
        });
    }
  }
};
</script>

<style>
@import url("https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css");
</style>
