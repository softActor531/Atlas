<template>
  <div class="page-wrapper">
    <PageTitle>Contacts</PageTitle>

    <div class="row">
      <div class="col-md-8 col-12">
        <div class="card">
          <div class="card-body">
            <h2>Filter Contacts</h2>
            <div class="row">
              <InputGroup
                :id="first_name"
                label="First Name"
                type="text"
                :width="4"
                name="first_name"
                @first_nameChanged="first_name = $event"
              />
              <InputGroup
                :id="last_name"
                label="Last Name"
                type="text"
                :width="4"
                name="last_name"
                @last_nameChanged="last_name = $event"
              />
              <InputGroup
                :id="academy_id"
                label="Academy Id"
                type="text"
                :width="4"
                name="academy_id"
                @academy_idChanged="academy_id = $event"
              />
              <InputSelectGroup2
                :id="phase.id"
                label="Phase"
                :array="phases"
                width="4"
                name="phase"
                placeholder="Choose Phase"
                @phaseChanged="phase.id = $event"
              />
              <InputSelectGroup2
                :id="status.id"
                label="Status"
                :array="statuses"
                width="4"
                name="selectedStatus"
                placeholder="Choose Status"
                @selectedStatusChanged="status.id = $event"
              />

              <InputSelectGroup2
                :id="district.id"
                :label="district_label"
                :array="districts"
                width="4"
                name="district"
                :placeholder="`Choose ${district_label}`"
                @districtChanged="district.id = $event"
              />
              <InputSelectGroup2
                :id="site.id"
                :label="site_label"
                :array="sites"
                width="4"
                name="site"
                :placeholder="`Choose ${site_label}`"
                @siteChanged="site.id = $event"
              />
              <InputGroup
                :id="district_id"
                label="District Id"
                type="text"
                :width="4"
                name="district_id"
                @district_idChanged="district_id = $event"
              />
              <DatePicker
                :id="created_from"
                label="Created Date (From)"
                :width="4"
                name="created_from"
                @created_fromChanged="created_from = $event"
              />
              <DatePicker
                :id="created_to"
                label="Created Date (To)"
                :width="4"
                name="created_to"
                @created_toChanged="created_to = $event"
              />
              <InputSelectGroup2
                :id="outreach_resource_advocate.id"
                label="Outreach Resource Advocate"
                :array="advocates"
                width="4"
                :user="true"
                name="outreach_resource_advocate"
                placeholder="Outreach Resource Advocate"
                @outreach_resource_advocateChanged="
                  outreach_resource_advocate.id = $event
                "
              />
              <InputSelectGroup2
                :id="community_outreach_advocate.id"
                label="Community Outreach Advocate"
                :array="communityAdvocates"
                width="4"
                :user="true"
                name="community_outreach_advocate"
                placeholder="Community Outreach Advocate"
                @community_outreach_advocateChanged="
                  community_outreach_advocate.id = $event
                "
              />

              <div class="col-xs-12 col-md-12">
                <h4 class="mb-3 header-title">Exclude</h4>
              </div>
              <div class="col-xs-12 col-md-4">
                <div class="custom-control custom-checkbox">
                  <input
                    id="invalid_address_filter"
                    v-model="bad_address"
                    class="custom-control-input"
                    type="checkbox"
                    value="1"
                    name="invalid_address"
                  />
                  <label
                    class="custom-control-label"
                    for="invalid_address_filter"
                    >Bad Address</label
                  >
                </div>
              </div>
              <div class="col-xs-12 col-md-4">
                <div class="custom-control custom-checkbox">
                  <input
                    id="invalid_address_filter"
                    v-model="bad_phone"
                    class="custom-control-input"
                    type="checkbox"
                    value="1"
                    name="invalid_address"
                  />
                  <label
                    class="custom-control-label"
                    for="invalid_address_filter"
                    >Bad Phone</label
                  >
                </div>
              </div>
              <div class="col-xs-12 col-md-4">
                <div class="custom-control custom-checkbox">
                  <input
                    id="invalid_address_filter"
                    v-model="none"
                    class="custom-control-input"
                    type="checkbox"
                    value="1"
                    name="invalid_address"
                  />
                  <label
                    class="custom-control-label"
                    for="invalid_address_filter"
                    >None</label
                  >
                </div>
              </div>

              <div class="col-md-12">
                <div class="float-right">
                  <button
                    type="button"
                    class="btn btn-primary waves-effect waves-light mb-2"
                    @click="filterContacts"
                  >
                    Filter
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 col-12">
        <div class="card">
          <div class="card-body">
            <h4>Bulk Import Contacts</h4>
            <a :href="csv" download>Download Import Contact Template</a>
            <VueDropify
              class="dropify-height mt-3"
              accept=".csv"
              message="Drop files here or click to upload"
              :multiple="false"
              @upload="upload"
            />
            <div class="clearfix text-right mt-3">
              <button
                type="submit"
                class="btn btn-info waves-effect waves-light"
                @click="importContacts"
              >
                <i class="mdi mdi-send mr-1" /> Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-8 col-12">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-xs-12 col-md-12">
                <h4 class="mb-3 header-title">Bulk Update Contacts</h4>
              </div>
              <div class="col-xs-12 col-md-12">
                <p class="sub-header">
                  Update the selected contacts to bulk update their phase and/or
                  status
                </p>
              </div>
            </div>

            <div class="inputs change-status">
              <div class="form-row align-items-center row">
                <InputSelectGroup2
                  :id="bulkPhase.id"
                  width="4"
                  label="Phase"
                  :array="phases"
                  name="bulkPhase"
                  @bulkPhaseChanged="bulkPhase.id = $event"
                />
                <InputSelectGroup2
                  :id="bulkStatus.id"
                  label="Status"
                  :array="statuses"
                  width="4"
                  name="bulkStatus"
                  @bulkStatusChanged="bulkStatus.id = $event"
                />
                <InputSelectGroup2
                  :id="bulkDistrict.id"
                  :label="district_label"
                  :array="districts"
                  width="4"
                  name="bulkDistrict"
                  @bulkDistrictChanged="bulkDistrict.id = $event"
                />
                <InputSelectGroup2
                  :id="bulkSite.id"
                  :label="site_label"
                  :array="sites"
                  width="4"
                  name="bulkSite"
                  @bulkSiteChanged="bulkSite.id = $event"
                />
                <InputSelectGroup2
                  :id="bulkOutreachResourceAdvocate.id"
                  label="Outreach Resource Advocate"
                  :array="advocates"
                  :user="true"
                  width="4"
                  name="bulkOutreachResourceAdvocate"
                  @bulkOutreachResourceAdvocateChanged="
                    bulkOutreachResourceAdvocate.id = $event
                  "
                />
                <InputSelectGroup2
                  :id="bulkCommunityOutreachAdvocates.id"
                  label="Community Outreach Advocate"
                  :array="communityAdvocates"
                  width="4"
                  :user="true"
                  name="bulkCommunityOutreachAdvocates"
                  @bulkCommunityOutreachAdvocatesChanged="
                    bulkCommunityOutreachAdvocates.id = $event
                  "
                />

                <div class="col-xs-12 col-md-2">
                  <button
                    class="btn-multiple-change-status btn btn-blue waves-effect waves-light mt-2"
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="card mt-3">
          <div id="headingOne" class="card-header">
            <h4 id="titleOne" class="mt-2 float-left">
              <a class="text-dark bold" @click="collapseContacts">
                <i class="mdi mdi-minus mr-1 text-primary" />
                Contacts
              </a>
            </h4>
            <div class="m-0 float-right">
              <nuxt-link
                to="#"
                class="btn btn-blue waves-effect waves-light"
                @click.native="exportContacts"
              >
                Export
              </nuxt-link>
              <nuxt-link
                class="btn btn-blue waves-effect waves-light"
                to="/contacts/create"
              >
                Add New Contact
              </nuxt-link>
              <button
                class="btn-multiple-delete btn btn-info waves-effect waves-light"
              >
                Delete
              </button>
            </div>
          </div>
          <div
            id="collapseOne"
            class="collapse"
            aria-labelledby="headingOne"
            style
          >
            <Table
              :items="contacts"
              selectable
              delete-btn
              edit-btn
              view-btn
              :fields="fields"
              @view-entry="handleViewEntry"
              @edit-entry="handleEditEntry"
              @delete-entry="handleDeleteEntry"
              @row-selected="handleRowSelected"
            >
              <template v-slot:cell(community_outreach_advocate)="data">
                {{ data.value.first_name }} {{ data.value.last_name }}
              </template>
              <template v-slot:cell(outreach_resource_advocate)="data">
                {{ data.value.first_name }} {{ data.value.last_name }}
              </template>
              <template v-slot:cell(county)="data">
                {{ data.value ? data.value : "N/A" }}
              </template>
            </Table>
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="mt-3">
          <div class="card">
            <div id="headingTwo" class="card-header">
              <h4 id="titleOne" class="m-0">
                <a class="text-dark bold" @click="collapseDuplicates">
                  <i class="mdi mdi-minus mr-1 text-primary" />
                  Duplicated Contacts
                </a>
              </h4>
            </div>
            <div id="duplicatesCollapse" class="collapse">
              <div class="card-body">
                <div
                  id="contacts-table"
                  class="table-responsive"
                  data-pattern="priority-columns"
                >
                  <div
                    id="DataTables_Table_0_wrapper"
                    class="dataTables_wrapper dt-bootstrap4 no-footer"
                  >
                    <div class="row">
                      <div class="col-sm-12">
                        <table
                          id="DataTables_Table_2"
                          class="table dt-responsive nowrap w-100 dataTable no-footer dtr-inline text-center"
                          role="grid"
                          aria-describedby="2_info"
                        >
                          <thead>
                            <tr role="row">
                              <th
                                class="header sorting_asc"
                                tabindex="0"
                                rowspan="1"
                                colspan="1"
                                aria-sort="ascending"
                                aria-label="First Name: activate to sort column descending"
                              >
                                First Name
                              </th>
                              <th
                                class="header sorting_asc"
                                tabindex="0"
                                rowspan="1"
                                colspan="1"
                                aria-label="Last Name: activate to sort column ascending"
                              >
                                Last Name
                              </th>
                              <th
                                class="header sorting"
                                tabindex="0"
                                rowspan="1"
                                colspan="1"
                                aria-label="Phase: activate to sort column ascending"
                              >
                                Phase
                              </th>
                              <th
                                class="header sorting"
                                tabindex="0"
                                rowspan="1"
                                colspan="1"
                                aria-label="Status: activate to sort column ascending"
                              >
                                Status
                              </th>
                              <th
                                class="header sorting"
                                tabindex="0"
                                rowspan="1"
                                colspan="1"
                                aria-label="Action Count: activate to sort column ascending"
                              >
                                Action Count
                              </th>
                              <th
                                class="header sorting"
                                tabindex="0"
                                rowspan="1"
                                colspan="1"
                                aria-label="District: activate to sort column ascending"
                              >
                                District
                              </th>
                              <th
                                class="header sorting"
                                tabindex="0"
                                rowspan="1"
                                colspan="1"
                                aria-label="District ID: activate to sort column ascending"
                              >
                                District ID
                              </th>
                              <th
                                class="header sorting"
                                tabindex="0"
                                rowspan="1"
                                colspan="1"
                                aria-label="Academy ID: activate to sort column ascending"
                              >
                                Academy ID
                              </th>
                              <th
                                class="header sorting"
                                tabindex="0"
                                rowspan="1"
                                colspan="1"
                                aria-label="Created Date: activate to sort column ascending"
                              >
                                Created Date
                              </th>
                              <th
                                class="header sorting"
                                tabindex="0"
                                rowspan="1"
                                colspan="1"
                                aria-label="Outreach Resource Advocate: activate to sort column ascending"
                                style="width: 0px"
                              >
                                Outreach Resource Advocate
                              </th>
                              <th
                                class="header sorting"
                                tabindex="0"
                                rowspan="1"
                                colspan="1"
                                aria-label="Community Outreach Advocate: activate to sort column ascending"
                              >
                                Community Outreach Advocate
                              </th>
                              <th
                                class="header sorting"
                                tabindex="0"
                                rowspan="1"
                                colspan="1"
                                aria-label="Priority: activate to sort column ascending"
                              >
                                Priority
                              </th>
                              <th
                                class="header sorting"
                                tabindex="0"
                                rowspan="1"
                                colspan="1"
                                aria-label="Control: activate to sort column ascending"
                              >
                                Control
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <ContactTableRow
                              v-for="(contact, index) in duplicateContacts"
                              :id="contact.id"
                              :key="index"
                              :first_name="contact.first_name"
                              :last_name="contact.last_name"
                              :phase="
                                contact.status ? contact.status.phase.name : ''
                              "
                              :status="
                                contact.status ? contact.status.name : ''
                              "
                              :action_count="contact.action_count"
                              :district="
                                contact.site ? contact.site.district.name : ''
                              "
                              :district_id="contact.district_id"
                              :academy_id="contact.academy_id"
                              :priority="contact.priority"
                              :created_at="contact.created_at"
                              :outreach_resource_advocate="
                                contact.outreach_resource_advocate
                                  ? contact.outreach_resource_advocate
                                      .first_name +
                                    contact.outreach_resource_advocate.last_name
                                  : ''
                              "
                              :community_outreach_advocate="
                                contact.community_outreach_advocate
                                  ? contact.community_outreach_advocate
                                      .first_name +
                                    contact.community_outreach_advocate
                                      .last_name
                                  : ''
                              "
                            />
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="multiple-buttons clearfix text-right mt-3">
                  <button
                    class="btn btn-multiple-override btn-primary waves-effect waves-light"
                  >
                    Override
                  </button>
                  <!-- <button class="btn btn-multiple-delete btn-danger waves-effect waves-light">Delete</button> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#titleOne:hover {
  cursor: pointer;
}
</style>

<script>
import VueDropify from "../../components/UI/CsvDropify";
// import VueDropify from "vue-dropify";
import Swal from "sweetalert2";
import Table from "../../components/shared/Table.vue";
import InputGroup from "../../components/UI/InputGroup";
import InputSelectGroup from "../../components/UI/InputSelectGroup";
import DatePicker from "../../components/UI/DatePicker";
import CheckboxGroup from "../../components/UI/CheckboxGroup";

import Api from "../../services/api/Api.js";

import ContactTableRow from "../../components/contacts/ContactTableRow";

import CsvFile from "../../static/contacts-import.csv";

export default {
  components: {
    VueDropify,
    ContactTableRow,
    Table
  },
  async asyncData(context) {
    const api = new Api(context);
    const contacts = await api.getContacts();
    const duplicateContacts = await api.getDuplicateContacts();
    const phases = await api.getPhases();
    const statuses = await api.getStatuses();
    const districts = await api.getDistricts();
    const sites = await api.getSites();
    const advocates = await api.getUsers();
    const communityAdvocates = await api.getUsers();
    const token = await api.uploadFile1({ type: "contact.import" });

    console.log("contacts", contacts);

    return {
      contacts,
      duplicateContacts,
      phases,
      statuses,
      districts,
      sites,
      advocates,
      communityAdvocates,
      token: token.id,
      api
    };
  },
  data() {
    let resElement;
    return {
      fields: [
        "selected",
        { key: "first_name", label: "First Name" },
        { key: "last_name", label: "Last Name" },
        { key: "status.phase.name", label: "Phase" },
        { key: "status.name", label: "Status" },
        { key: "county", label: "Action Count" },
        { key: "district_id", label: "District ID" },
        { key: "site.district.name", label: "District" },
        { key: "academy_id", label: "Academy ID" },
        {
          key: "outreach_resource_advocate",
          label: "Outreach Resource Advocate"
        },
        {
          key: "community_outreach_advocate",
          label: "Community Outreach Advocate"
        },
        { key: "priority", label: "Priority" },
        { key: "actions", label: "Control" }
      ],
      district_label:
        this.$store.state.fields.length > 0
          ? this.$store.state.fields.find(element => {
              return element.base_name == "District";
            }).custom_name
          : "District",
      site_label:
        this.$store.state.fields.length > 0
          ? this.$store.state.fields.find(element => {
              return element.base_name == "Site";
            }).custom_name
          : "Site",
      // district_label: ((resElement = this.$store.state.fields.find(element => {
      //   return element.base_name == "District";
      // })),
      // resElement === undefined)
      //   ? ""
      //   : resElement.custom_name,

      // site_label: ((resElement = this.$store.state.fields.find(element => {
      //   return element.base_name == "Site";
      // })),
      // resElement === undefined)
      //   ? ""
      //   : resElement.custom_name,
      csv: CsvFile,
      files: [],
      first_name: "",
      last_name: "",
      academy_id: "",
      phase: {
        name: "",
        id: ""
      },
      status: {
        name: "",
        id: ""
      },
      district: {
        name: "",
        id: ""
      },
      site: {
        name: "",
        id: ""
      },
      district_id: "",
      created_from: "",
      created_to: "",
      outreach_resource_advocate: {
        name: "",
        id: ""
      },
      community_outreach_advocate: {
        name: "",
        id: ""
      },
      bad_address: false,
      bad_phone: false,
      none: false,
      bulkPhase: {
        name: "",
        id: ""
      },
      bulkStatus: {
        name: "",
        id: ""
      },
      bulkDistrict: {
        name: "",
        id: ""
      },
      bulkSite: {
        name: "",
        id: ""
      },
      bulkOutreachResourceAdvocate: {
        name: "",
        id: ""
      },
      bulkCommunityOutreachAdvocates: {
        name: "",
        id: ""
      },
      datatable: null
    };
  },
  mounted() {
    if (!this.$store.state.permissions.includes("View Contacts")) {
      this.$router.push("/unauthorized");
    }
    const collapseOne = document.getElementById("collapseOne");
    const duplicatesCollapse = document.getElementById("duplicatesCollapse");

    collapseOne.classList.add("show");
    duplicatesCollapse.classList.add("show");

    const script = document.createElement("script");
    script.setAttribute(
      "src",
      "https://cdn.datatables.net/1.10.21/js/jquery.dataTables.min.js"
    );
    document.head.appendChild(script);

    const script2 = document.createElement("script");
    script2.setAttribute(
      "src",
      "https://cdn.datatables.net/1.10.21/js/dataTables.bootstrap4.min.js"
    );
    document.head.appendChild(script2);

    const script3 = document.createElement("script");
    script3.setAttribute(
      "src",
      "https://cdn.datatables.net/responsive/2.1.0/js/dataTables.responsive.js"
    );
    document.head.appendChild(script3);

    $(document).ready(function() {
      $("#DataTables_Table_1").DataTable({
        responsive: true,
        sScrollX: "100%",
        sScrollXInner: "110%"
      });
    });

    $(document).ready(function() {
      $("#DataTables_Table_2").DataTable({
        responsive: true,
        sScrollX: "100%",
        sScrollXInner: "110%"
      });
    });
  },
  methods: {
    handleRowSelected(x) {
      console.log(x);
    },
    handleViewEntry(record, index) {
      this.$router.push({ name: "contacts-id", params: { id: record.id } });
    },
    handleEditEntry(record, index) {
      this.$router.push({
        name: "contacts-id-edit",
        params: { id: record.id }
      });
    },
    async handleDeleteEntry(record, index) {
      console.log("delete Entry", record.id);
      await this.api.deleteContact(record.id);
      // this.$emit("getContacts", this.index);
      this.contacts = await this.api.getContacts();
      console.log("success", this.contacts);
    },
    collapseContacts() {
      const collapseOne = document.getElementById("collapseOne");
      if (collapseOne.classList.contains("show")) {
        collapseOne.classList.remove("show");
      } else {
        collapseOne.classList.add("show");
      }
    },
    collapseDuplicates() {
      const duplicatesCollapse = document.getElementById("duplicatesCollapse");
      if (duplicatesCollapse.classList.contains("show")) {
        duplicatesCollapse.classList.remove("show");
      } else {
        duplicatesCollapse.classList.add("show");
      }
    },
    async filterContacts() {
      let filters = "";
      if (this.first_name !== "") {
        filters += `filter[first-name]=${this.first_name}`;
      }
      if (this.last_name !== "") {
        filters += `&filter[last-name]=${this.last_name}`;
      }
      if (this.academy_id !== "") {
        filters += `&filter[academy-id]=${this.academy_id}`;
      }
      if (this.district_id !== "") {
        filters += `&filter[district-id]=${this.district_id}`;
      }
      if (this.created_from !== "") {
        filters += `&filter[created-from]=${this.created_from}`;
      }
      if (this.created_to !== "") {
        filters += `&filter[created-to]=${this.created_to}`;
      }
      filters += `&filter[bad-address]=${this.bad_address}&filter[bad-phone]=${this.bad_phone}&filter[none]=${this.none}`;
      this.contacts = await this.api.getFilteredContacts(filters);
    },
    async importContacts() {
      for (const file of this.files) {
        const formData = new FormData();
        formData.append("file", file);
        this.api
          .uploadFile2(this.token, formData)
          .then(data => {
            const file_id = data[0].id;
            const payload = {
              type: "contact.import",
              attributes: { file: file_id }
            };
            this.api
              .importContacts(payload)
              .then(data => {
                console.log(data);
              })
              .catch(e => {
                console.log(e);
                Swal.fire({
                  icon: "error",
                  title: "Oops...",
                  text: "Import Contacts failed!"
                });
              });
          })
          .catch(e => {
            console.log(e);
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Import Contacts failed!"
            });
          });
      }
    },
    upload(event) {
      for (const file of event) {
        this.files.push(file);
      }
    },
    async exportContacts() {
      const payload = {
        type: "contact-imports"
      };
      this.$api
        .exportContacts(payload)
        .then(data => {
          console.log(data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    async getContacts(index) {
      this.contacts = await this.api.getContacts();
    }
  }
};
</script>

<style scoped>
h1 {
  margin: 10px 0;
  font-size: 20px;
}
h2 {
  font-size: 15px !important;
  margin-bottom: 20px !important;
}
.dropify-height {
  height: 365px;
}
</style>
