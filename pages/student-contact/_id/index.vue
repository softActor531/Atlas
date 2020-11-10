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
            {{ first_name + " " + last_name }} | Profile
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
                <div class="col-sm-6 col-xl-2">
                  <div class="p-2 text-center">
                    <i class="mdi mdi-map text-success mdi-24px" />
                    <p class="text-muted font-15 mb-0">Location</p>
                    <h5>
                      <span>
                        {{ site ? site.district.name + "/" : ""
                        }}{{ site ? site.name : "N/A" }}
                      </span>
                    </h5>
                  </div>
                </div>
                <div class="col-sm-6 col-xl-2">
                  <div class="p-2 text-center">
                    <i
                      class="fas fa-spinner text-success mdi-24px text-warning"
                      style="font-size: 24px; margin-top: 10px"
                    />
                    <p class="text-muted font-15 mb-0">Phase/Status</p>
                    <h5>
                      <span>{{ status ? status.phase.name + "/" : "" }}</span>
                      <span>{{ status ? status.name : "N/A" }}</span>
                    </h5>
                  </div>
                </div>
                <div class="col-sm-6 col-xl-2">
                  <div class="p-2 text-center">
                    <i class="mdi mdi-alert-circle text-info mdi-24px" />
                    <p class="text-muted font-15 mb-0">GCA</p>
                    <h5>
                      <span>
                        {{
                          graduate_candidate_advocate
                            ? graduate_candidate_advocate.first_name
                            : ""
                        }}
                        {{
                          graduate_candidate_advocate
                            ? graduate_candidate_advocate.last_name
                            : "N/A"
                        }}
                      </span>
                    </h5>
                  </div>
                </div>
                <GcIconBox
                  label="Tier"
                  value="N/A"
                  icon-style="mdi mdi-certificate text-blue mdi-24px"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="card-box">
          <h4 class="mb-3 header-title">Contact Info</h4>
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
          <div class="row">
            <div class="col-xs-12 col-md-6">
              <div class="text-left mt-3">
                <GcInfo
                  :id="`${first_name}${
                    middle_name ? ' ' + middle_name : ''
                  } ${last_name}`"
                  label="Name"
                />
                <GcInfo :id="phone_1" label="Phone 1" />
                <GcInfo :id="phone_2 ? phone_2 : 'N/A'" label="Phone 2" />
                <GcInfo :id="has_wifi" label="Has WIFI?" />
                <GcInfo :id="has_device" label="Has a device?" />
              </div>
            </div>
            <div class="col-xs-12 offset-md-2 col-md-4">
              <div class="text-left mt-3">
                <GcInfo
                  :id="code_word ? code_word : 'N/A'"
                  :label="code_word_label"
                />
                <GcInfo :id="email" label="Email" />
                <GcInfo :id="street_address" label="Address" />
                <GcInfo :id="county" label="County" />
              </div>
            </div>
          </div>
        </div>
        <div class="card-box">
          <h4 class="mb-3 header-title">Demographics</h4>
          <div class="row">
            <div class="col-xs-12 col-md-6">
              <div class="text-left mt-3">
                <GcInfo
                  :id="`${
                    new Date().getFullYear() - new Date(birthdate).getFullYear()
                  }`"
                  label="Age"
                />
                <GcInfo :id="birthdate" label="Date of Birth" />
                <GcInfo :id="gender" label="Gender" />
                <GcInfo :id="race ? race.value : 'N/A'" label="Race" />
                <GcInfo
                  :id="primary_language ? primary_language.name : 'N/A'"
                  label="Primary Language"
                />
                <GcInfo :id="minor ? 'True' : 'False'" label="Minor" />
              </div>
            </div>
            <div class="col-xs-12 offset-md-2 col-md-4">
              <div class="text-left mt-3">
                <GcInfo :id="marital_status" label="Marital Status" />
                <GcInfo :id="has_children" label="Children" />
                <GcInfo
                  :id="legal_status ? legal_status.value : 'N/A'"
                  label="Legal Status"
                />
                <GcInfo
                  :id="living_situation ? living_situation.value : 'N/A'"
                  label="Living Situation"
                />
                <GcInfo
                  :id="parole_officer_name ? parole_officer_name : 'N/A'"
                  :label="parole_officer_name_label"
                />
              </div>
              <GcInfo
                :id="parole_officer_phone ? parole_officer_phone : 'N/A'"
                :label="parole_officer_phone_label"
              />
              <GcInfo
                :id="parole_officer_email ? parole_officer_email : 'N/A'"
                :label="parole_officer_email_label"
              />
            </div>
          </div>
        </div>
        <div class="card-box">
          <h4 class="mb-3 header-title">Medical</h4>
          <div class="row">
            <div class="col-xs-12 col-md-12">
              <div class="text-left mt-3">
                <GcInfo
                  :id="has_medical_issues ? has_medical_issues : 'N/A'"
                  label="Issues/Concerns"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="card-box">
          <h4 class="mb-3 header-title">Academy Info</h4>
          <div class="row">
            <div class="col-xs-12 col-md-6">
              <div class="text-left mt-3">
                <GcInfo
                  :id="
                    graduate_candidate_advocate
                      ? graduate_candidate_advocate.first_name +
                        ' ' +
                        graduate_candidate_advocate.last_name
                      : 'N/A' + ' '
                  "
                  :label="gca_label"
                />
                <GcInfo
                  :id="
                    content_coach
                      ? content_coach.first_name + ' ' + content_coach.last_name
                      : 'N/A'
                  "
                  :label="content_coach_label"
                />
                <GcInfo
                  :id="
                    career_life_coach
                      ? career_life_coach.first_name +
                        ' ' +
                        career_life_coach.last_name
                      : 'N/A' + ' '
                  "
                  :label="career_life_coach_label"
                />
                <GcInfo
                  :id="`${last_year_enrolled ? last_year_enrolled : 'N/A'}`"
                  label="Date Enrolled"
                />
              </div>
            </div>
            <div class="col-xs-12 offset-md-2 col-md-4">
              <div class="text-left mt-3">
                <!-- <GcInfo :id="specialProgram" label="Special Program" />
                <GcInfo :id="transportation" label="Transportation" />-->
              </div>
            </div>
          </div>
        </div>
        <div class="card-box">
          <h4 class="mb-3 header-title">Past School Info</h4>
          <div class="row">
            <div class="col-xs-12 col-md-6">
              <div class="text-left mt-3">
                <GcInfo
                  :id="`${cohort_year ? cohort_year : 'N/A'}`"
                  label="Cohort Year"
                />
                <GcInfo
                  :id="`${last_year_enrolled ? last_year_enrolled : 'N/A'}`"
                  label="Last Year Enrolled"
                />
                <GcInfo
                  :id="last_school_attended ? last_school_attended : 'N/A'"
                  label="Last School Attended"
                />
              </div>
            </div>
            <div class="col-xs-12 offset-md-2 col-md-4">
              <div class="text-left mt-3">
                <GcInfo
                  :id="last_grade_completed ? last_grade_completed : 'N/A'"
                  label="Last Grade Completed"
                />
                <GcInfo
                  :id="district_id ? district_id : 'N/A'"
                  label="District ID"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="card-box">
          <h4 class="mb-3 header-title">Other Contacts</h4>
          <div class="row">
            <div class="col-xs-12 col-md-6">
              <div class="text-left mt-3">
                <GcInfo
                  :id="
                    emergency_contact_1_name ? emergency_contact_1_name : 'N/A'
                  "
                  :label="emergency_name_label"
                />
                <GcInfo
                  :id="
                    emergency_contact_1_phone_1
                      ? emergency_contact_1_phone_1
                      : 'N/A'
                  "
                  :label="emergency_phone_1_label"
                />
                <GcInfo
                  :id="
                    emergency_contact_1_phone_2
                      ? emergency_contact_1_phone_2
                      : 'N/A'
                  "
                  :label="emergency_phone_2_label"
                />
                <GcInfo
                  :id="`${
                    emergency_contact_1_legal_guardian
                      ? emergency_contact_1_legal_guardian
                      : 'N/A'
                  }`"
                  label="Legal Guardian 1"
                />
              </div>
            </div>
            <div class="col-xs-12 offset-md-2 col-md-4">
              <div class="text-left mt-3">
                <GcInfo
                  :id="
                    emergency_contact_2_name ? emergency_contact_2_name : 'N/A'
                  "
                  :label="emergency_name_label_2"
                />
                <GcInfo
                  :id="
                    emergency_contact_2_phone_1
                      ? emergency_contact_2_phone_1
                      : 'N/A'
                  "
                  :label="emergency_phone_1_label_2"
                />
                <GcInfo
                  :id="
                    emergency_contact_2_phone_2
                      ? emergency_contact_2_phone_2
                      : 'N/A'
                  "
                  :label="emergency_phone_2_label_2"
                />
                <GcInfo
                  :id="`${
                    emergency_contact_2_legal_guardian
                      ? emergency_contact_2_legal_guardian
                      : 'N/A'
                  }`"
                  label="Legal Guardian 2"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="card-box">
          <div class="card-header bg-white">
            <div class="float-left">
              <h4 class="mb-3 header-title">GC Schedule</h4>
            </div>
            <div class="float-right">
              <nuxt-link to="#" class="btn btn-blue waves-effect waves-light">
                <i class="mdi mdi-plus-box-outline" /> New GC Schedule
              </nuxt-link>
            </div>
          </div>
          <div class="card-body" style="clear: both">
            <div
              id="DataTables_Table_0_wrapper"
              class="dataTables_wrapper dt-bootstrap4 no-footer"
            >
              <div class="row">
                <div class="col-sm-12">
                  <Table
                    :items="[]"
                    :fields="[
                      'Date',
                      'From Time',
                      'To Time',
                      'Reason',
                      'Action',
                    ]"
                  />
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
@import url("https://cdn.datatables.net/responsive/2.1.1/css/dataTables.responsive.css");
@import url("https://cdn.datatables.net/1.10.21/css/jquery.dataTables.min.css");
@import url("https://cdn.datatables.net/1.10.21/css/dataTables.bootstrap4.min.css");

.thinner-box {
  padding: 0 !important;
}
</style>

<script>
import GcSideBar from "../../../components/student-contact/GcSideBar";
// import GcIconBox from '../../../components/student-contact/GcIconBox'
import GcInfo from "../../../components/student-contact/GcInfo";
// import TableRow from '../../../components/UI/TableRow'
import Table from "../../../components/shared/Table";

import Api from "../../../services/api/Api.js";

export default {
  components: {
    GcSideBar,
    // GcIconBox,
    GcInfo,
    // TableRow,
    Table,
  },
  async asyncData(context) {
    const api = new Api(context);
    return await api.getStudent(context.params.id).then((data) => {
      // if (data.profile_picture) {
      //   this.profile_picture = data.profile_picture;
      //   console.log(this.profile_picture);
      // }

      // console.log({ ...data });
      return {
        ...data,
      };
    });
  },
  data() {
    return {
      code_word_label:
        this.$store.state.fields.length > 0
          ? this.$store.state.fields.find((element) => {
              return element.base_name == "Code Word";
            }).custom_name
          : "Code Word",
      parole_officer_name_label:
        this.$store.state.fields.length > 0
          ? this.$store.state.fields.find((element) => {
              return element.base_name == "Parole Officer Name";
            }).custom_name
          : "Parole Officer Name",
      parole_officer_phone_label:
        this.$store.state.fields.length > 0
          ? this.$store.state.fields.find((element) => {
              return element.base_name == "Parole Officer Phone";
            }).custom_name
          : "Parole Officer Phone",
      parole_officer_email_label:
        this.$store.state.fields.length > 0
          ? this.$store.state.fields.find((element) => {
              return element.base_name == "Parole Officer Email";
            }).custom_name
          : "Parole Officer Email",
      gca_label:
        this.$store.state.fields.length > 0
          ? this.$store.state.fields.find((element) => {
              return element.base_name == "Para-Professional (GCA)";
            }).custom_name
          : "Para-Professional (GCA)",
      content_coach_label:
        this.$store.state.fields.length > 0
          ? this.$store.state.fields.find((element) => {
              return element.base_name == "Teacher (Content Coach)";
            }).custom_name
          : "Teacher (Content Coach)",
      career_life_coach_label:
        this.$store.state.fields.length > 0
          ? this.$store.state.fields.find((element) => {
              return element.base_name == "Counselor (Career Life Coach)";
            }).custom_name
          : "Counselor (Career Life Coach)",
      emergency_name_label:
        this.$store.state.fields.length > 0
          ? this.$store.state.fields.find((element) => {
              return element.base_name == "Emergency Contact 1 - Name";
            }).custom_name
          : "Emergency Contact 1 - Name",
      emergency_phone_1_label:
        this.$store.state.fields.length > 0
          ? this.$store.state.fields.find((element) => {
              return element.base_name == "Emergency Contact 1 - Phone 1";
            }).custom_name
          : "Emergency Contact 1 - Phone 1",
      emergency_phone_2_label:
        this.$store.state.fields.length > 0
          ? this.$store.state.fields.find((element) => {
              return element.base_name == "Emergency Contact 1 - Phone 2";
            }).custom_name
          : "Emergency Contact 1 - Phone 2",
      emergency_email_label_2:
        this.$store.state.fields.length > 0
          ? this.$store.state.fields.find((element) => {
              return element.base_name == "Emergency Contact 2 - Email";
            }).custom_name
          : "Emergency Contact 2 - Email",
      emergency_name_label_2:
        this.$store.state.fields.length > 0
          ? this.$store.state.fields.find((element) => {
              return element.base_name == "Emergency Contact 2 - Name";
            }).custom_name
          : "Emergency Contact 2 - Name",
      emergency_phone_1_label_2:
        this.$store.state.fields.length > 0
          ? this.$store.state.fields.find((element) => {
              return element.base_name == "Emergency Contact 2 - Phone 1";
            }).custom_name
          : "Emergency Contact 2 - Phone 1",
      emergency_phone_2_label_2:
        this.$store.state.fields.length > 0
          ? this.$store.state.fields.find((element) => {
              return element.base_name == "Emergency Contact 2 - Phone 2";
            }).custom_name
          : "Emergency Contact 2 - Phone 2",
      emergency_email_label_2:
        this.$store.state.fields.length > 0
          ? this.$store.state.fields.find((element) => {
              return element.base_name == "Emergency Contact 2 - Email";
            }).custom_name
          : "Emergency Contact 2 - Email",
    };
  },

  created() {
    console.log("student log", this.student);
  },

  mounted() {
    if (!this.$store.state.permissions.includes("View GC Profile")) {
      this.$router.push("/unauthorized");
    }

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

    $(document).ready(function () {
      $("#DataTables_Table_0").DataTable({
        responsive: true,
      });
    });
  },
};
</script>
