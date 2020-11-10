<template>
  <div class>
    <div class="row">
      <div class="col-md-3 mt-3">
        <Studentsidenav :student-id="$route.params.id" />
      </div>
      <div class="col-md-9 col-xs-12">
        <div class="page-title-box">
          <div class="page-title-right">
            <nuxt-link
              class="btn btn-success waves-effect waves-light"
              :to="`/student-contact/${$route.params.id}/edit`"
            >
              <span class="btn-label">
                <i class="mdi mdi-account-edit" />
              </span>
              Edit GC
            </nuxt-link>
          </div>
          <h4 class="page-title">
            {{ first_name + " " + last_name }} | GC Record
          </h4>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="thinner-box card-box widget-inline">
              <div class="row">
                <div class="col-sm-6 col-xl-1" />
                <GcIconBox
                  label="Acceleration ID"
                  :value="id"
                  icon-style="mdi mdi-account-key text-primary mdi-24px"
                />
                <GcIconBox
                  label="Location"
                  :value="site ? site.district.name : 'N/A'"
                  icon-style="mdi mdi-map text-success mdi-24px"
                />
                <div class="col-sm-6 col-xl-2">
                  <div class="p-2 text-center">
                    <i
                      class="fas fa-spinner text-success mdi-24px text-warning"
                      style="font-size: 24px; margin-top: 10px"
                    />
                    <p class="text-muted font-15 mb-0">Phase/Status</p>
                    <h5>
                      <span>{{ status ? status.phase.name : "N/A" }}</span
                      >/
                      <span>{{ status ? status.name : "N/A" }}</span>
                    </h5>
                  </div>
                </div>
                <GcIconBox
                  label="GCA"
                  :value="
                    graduate_candidate_advocate
                      ? graduate_candidate_advocate.first_name +
                        ' ' +
                        graduate_candidate_advocate.last_name
                      : 'N/A'
                  "
                  icon-style="mdi mdi-alert-circle text-info mdi-24px"
                />
                <GcIconBox
                  label="Tier"
                  :value="tier"
                  icon-style="mdi mdi-certificate text-blue mdi-24px"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="card-box">
          <h4 class="mb-3 header-title">Basic Identifiers</h4>
          <div class="row">
            <div class="col-12 text-center">
              <div v-if="profile_picture">
                <img
                  :src="profile_picture"
                  alt="image"
                  class="img-fluid rounded-circle"
                  width="120"
                />
              </div>
              <div v-else><b-avatar></b-avatar></div>
            </div>
            <div class="col-xs-12 col-md-6">
              <div class="text-left mt-3">
                <p class="text-muted mb-2 font-13">
                  <strong>Acceleration ID:</strong>
                  {{ id }}
                </p>
                <p class="text-muted mb-2 font-13">
                  <strong>District ID:</strong>
                  <span class="ml-2">{{ district_id }}</span>
                </p>
                <p class="text-muted mb-2 font-13">
                  <strong>{{ district_label }}:</strong>
                  <span class="ml-2">{{
                    site ? site.district.name : "N/A"
                  }}</span>
                </p>
                <nuxt-link
                  class="btn btn-info waves-effect waves-light"
                  to="/plp/student"
                >
                  <span class="btn-label">
                    <i class="mdi mdi-format-list-checks" />
                  </span>
                  PLP Progress
                </nuxt-link>
              </div>
            </div>
            <div class="col-xs-12 offset-md-2 col-md-4">
              <div class="text-left mt-3">
                <p class="text-muted mb-2 font-13">
                  <strong>{{ site_label }}:</strong>
                  <span class="ml-2">{{ site ? site.name : "N/A" }}</span>
                </p>
                <p class="text-muted mb-2 font-13">
                  <strong>Phase:</strong>
                  <span class="ml-2">{{
                    status ? status.phase.name : "N/A"
                  }}</span>
                </p>
                <p class="text-muted mb-2 font-13">
                  <strong>Status:</strong>
                  <span class="ml-2">{{ status ? status.name : "N/A" }}</span>
                </p>
                <p class="text-muted mb-2 font-13">
                  <strong>Special Program:</strong>
                  <span class="ml-2">{{ specialProgram }}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12 col-md-12">
            <div class="card-box widget-inline">
              <h4 class="mb-3 header-title">OVERALL HEALTH</h4>
              <div class="row">
                <div class="col-xs-12 col-md-4">
                  <div class="p-2 text-center">
                    <i class="mdi mdi-alert-circle text-info mdi-24px" />
                    <p class="text-muted font-15 mb-0">
                      {{ last_date_onsite_label }}
                    </p>
                    <h5>
                      <span>{{ lastDateAttended }}</span>
                    </h5>
                  </div>
                </div>

                <div class="col-xs-12 col-md-4">
                  <div class="p-2 text-center">
                    <i class="mdi mdi-alert-circle text-info mdi-24px" />
                    <p class="text-muted font-15 mb-0">Days Lapsed</p>
                    <h5>
                      <span>{{ daysLapsed }}</span>
                    </h5>
                  </div>
                </div>
                <div class="col-xs-12 col-md-4">
                  <div class="p-2 text-center">
                    <i class="mdi mdi-alert-circle text-info mdi-24px" />
                    <p class="text-muted font-15 mb-0">
                      {{ next_date_scheduled_label }}
                    </p>
                    <h5>
                      <span>{{ nextDayExpected }}</span>
                    </h5>
                  </div>
                </div>
                <div class="col-xs-12 col-md-4">
                  <div class="p-2 text-center">
                    <i class="mdi mdi-alert-circle text-info mdi-24px" />
                    <p class="text-muted font-15 mb-0">
                      {{ last_date_online_label }}
                    </p>
                    <h5>
                      <span>{{ lastLogin }}</span>
                    </h5>
                  </div>
                </div>
                <div class="col-xs-12 col-md-4">
                  <div class="p-2 text-center">
                    <i class="mdi mdi-alert-circle text-info mdi-24px" />
                    <p class="text-muted font-15 mb-0">
                      {{ current_course_label }}
                    </p>
                    <h5>
                      <span>{{ currentCourse }}</span>
                    </h5>
                  </div>
                </div>
                <div class="col-xs-12 col-md-4">
                  <div class="p-2 text-center">
                    <i class="mdi mdi-alert-circle text-info mdi-24px" />
                    <p class="text-muted font-15 mb-0">
                      {{ time_online_label }}
                    </p>
                    <h5>
                      <span>{{ timeOnline }}</span>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xs-12 col-md-12">
            <div class="card">
              <div class="card-body">
                <h4 class="mb-3 header-title">G.C. BARCODE</h4>
                <input id="uid" type="hidden" name="uid" value="12499" />
                <div class="row">
                  <div class="co-xs-12 col-md-6">
                    <nuxt-link to="#">
                      <img
                        id="labelImage"
                        src="../../assets/images/barcode.png"
                        alt="Barcode Preview"
                      />
                    </nuxt-link>
                  </div>
                  <div class="col-xs-12 col-md-6">
                    <div class="form-group">
                      <label for="printersSelect">Printer:</label>
                      <select id="printersSelect" class="form-control" />
                    </div>
                    <button
                      id="printButton"
                      class="btn btn-blue waves-effect waves-light"
                    >
                      Print
                    </button>
                  </div>
                  <div class="col-xs-12 col-md-12">
                    <div class="box">
                      <nuxt-link
                        class="btn btn-blue waves-effect waves-light"
                        to="#"
                        target="_blank"
                        >Generate ID to print</nuxt-link
                      >
                      <a
                        class="btn btn-blue waves-effect waves-light"
                        to="#"
                        target="_blank"
                        >Label Print</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GcSideBar from "../../components/student-contact/GcSideBar";
import GcIconBox from "../../components/student-contact/GcIconBox";

import Api from "../../services/api/Api.js";

export default {
  components: {
    GcSideBar,
    GcIconBox,
  },
  async asyncData(context) {
    const api = new Api(context);
    var student = await api.getStudent(context.params.id);
    return {
      ...student,
    };
  },
  data() {
    return {
      profile_picture: '',
      district_label:
        this.$store.state.fields.length > 0
          ? this.$store.state.fields.find((element) => {
              return element.base_name == "District";
            }).custom_name
          : "District",
      site_label:
        this.$store.state.fields.length > 0
          ? this.$store.state.fields.find((element) => {
              return element.base_name == "Site";
            }).custom_name
          : "Site",
      last_date_onsite_label:
        this.$store.state.fields.length > 0
          ? this.$store.state.fields.find((element) => {
              return element.base_name == "Last Date Onsite";
            }).custom_name
          : "Last Date Onsite",
      next_date_scheduled_label:
        this.$store.state.fields.length > 0
          ? this.$store.state.fields.find((element) => {
              return element.base_name == "Next Date Scheduled";
            }).custom_name
          : "Next Date Scheduled",
      last_date_online_label:
        this.$store.state.fields.length > 0
          ? this.$store.state.fields.find((element) => {
              return element.base_name == "Last Date Online";
            }).custom_name
          : "Last Date Online",
      current_course_label:
        this.$store.state.fields.length > 0
          ? this.$store.state.fields.find((element) => {
              return element.base_name == "Current Course";
            }).custom_name
          : "Current Course",
      time_online_label:
        this.$store.state.fields.length > 0
          ? this.$store.state.fields.find((element) => {
              return element.base_name == "Time Online";
            }).custom_name
          : "Time Online",
    };
  },
};
</script>
