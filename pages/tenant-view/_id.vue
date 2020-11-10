<template>
  <div class>
    <h1>View Tenant</h1>
    <div class="page-title-box">
      <div class="page-title-right">
        <nuxt-link
          class="btn btn-info waves-effect waves-light"
          :to="`/tenant-users/${$route.params.id}`"
        >
          <span class="btn-label">
            <i class="mdi mdi-account" />
          </span>
          Impersonate
        </nuxt-link>
        <nuxt-link
          class="btn btn-success waves-effect waves-light"
          :to="`/tenant-edit/${$route.params.id}`"
        >
          <span class="btn-label">
            <i class="mdi mdi-account-edit" />
          </span>
          Edit Tenant
        </nuxt-link>
      </div>
    </div>
    <div class="form-group col-xs-12 col-md-4 mb-3">
      <label for="scheduled-date" class="required bolder">Tenant Name:</label>
      <b-form-input
        id="input-9"
        disabled
        v-model="name"
        type="text"
      ></b-form-input>
    </div>
    <div class="card" v-if="config">
      <div class="card-body">
        <h2>System Hierarchy</h2>
        <b-form-group>
          <div class="mt-3">
            <div class="ml-4">
              <b-form-group label="Number of levels">
                <div class="row">
                  <div class="col-md-3">
                    <b-form-input
                      id="input-1"
                      v-model="config.system_hierarchy.length"
                      type="number"
                      min="1"
                      max="3"
                      disabled
                    ></b-form-input>
                  </div>
                  <div
                    class="col-md-3"
                    :key="level"
                    v-for="(level, index) in parseInt(
                      config.system_hierarchy.length
                    )"
                  >
                    <b-form-select
                      v-model="config.system_hierarchy[index].name"
                      disabled
                      type="text"
                    >
                      <b-form-select-option disabled value
                        >Level {{ level }} Name</b-form-select-option
                      >
                      <b-form-select-option
                        :value="option"
                        :key="index"
                        v-for="(option, index) of config.system_hierarchy
                          .length === 1
                          ? level1Options
                          : form.system_hierarchy.length === 2
                          ? level === 1
                            ? level2Options
                            : level3Options
                          : level === 1
                          ? ['District']
                          : level === 2
                          ? ['Region', 'Network']
                          : ['Site', 'School']"
                        >{{ option }}</b-form-select-option
                      >
                    </b-form-select>
                  </div>
                </div>
              </b-form-group>
            </div>
          </div>
        </b-form-group>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <h2>Dashboard</h2>
        <b-form-group>
          <b-form-checkbox
            v-model="config.modules.dashboard.active"
            disabled
            value="1"
            unchecked-value="0"
            >Active</b-form-checkbox
          >
          <div v-if="config.modules.dashboard.active" class="mt-3">
            <div class="col-md-3">
              <v-select
                multiple
                :options="widgets"
                :value="
                  config.modules.dashboard.kpis.map((element) => element.name)
                "
                placeholder="Choose KPIs"
                disabled
              ></v-select>
            </div>
          </div>
        </b-form-group>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <h2>Reports</h2>
        <b-form-group>
          <b-form-checkbox
            v-model="config.modules.reports.active"
            disabled
            value="1"
            unchecked-value="0"
            >Active</b-form-checkbox
          >
          <div v-if="config.modules.reports.active" class="mt-3">
            <div class="col-md-3">
              <v-select
                multiple
                :options="all_reports"
                :value="
                  config.modules.reports.available.map(
                    (element) => element.name
                  )
                "
                placeholder="Available Reports"
                disabled
              ></v-select>
            </div>
          </div>
        </b-form-group>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <h2>Student Profile Management</h2>
        <b-form-checkbox
          v-model="config.modules.student_profile_management.active"
          disabled
          value="1"
          unchecked-value="0"
          >Active</b-form-checkbox
        >
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <h2>PLP</h2>
        <b-form-checkbox v-model="config.modules.plp.active" disabled
          >Active</b-form-checkbox
        >
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <h2>Courseware Integration</h2>
        <b-form-checkbox
          v-model="config.modules.courseware_integration.active"
          value="1"
          unchecked-value="0"
          disabled
          >Active</b-form-checkbox
        >
        <div v-if="config.modules.courseware_integration.active" class="mt-3">
          <div class="row">
            <div class="col-md-3">
              <v-select
                multiple
                :options="all_services"
                :value="
                  config.modules.courseware_integration.services.map(
                    (element) => element.name
                  )
                "
                placeholder="Services"
                disabled
              ></v-select>
            </div>
            <div
              class="col-md-3"
              :key="index"
              v-for="(service, index) of config.modules.courseware_integration
                .services"
            >
              <b-form-input
                v-model="
                  config.modules.courseware_integration.services[index].api_key
                "
                type="text"
                :placeholder="`${service} API Key`"
              ></b-form-input>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <h2>Graduation Calculator</h2>
        <b-form-checkbox
          v-model="config.modules.graduation_calculator.active"
          value="1"
          unchecked-value="0"
          disabled
          >Active</b-form-checkbox
        >
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <h2>Automated Workflow</h2>
        <b-form-checkbox
          v-model="config.modules.automated_workflow.active"
          value="1"
          unchecked-value="0"
          disabled
          >Active</b-form-checkbox
        >
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <h2>Document Storage</h2>
        <b-form-checkbox
          v-model="config.modules.document_storage.active"
          value="1"
          unchecked-value="0"
          disabled
          >Active</b-form-checkbox
        >
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <h2>Case Management Notes</h2>
        <b-form-checkbox
          v-model="config.modules.case_management_notes.active"
          value="1"
          unchecked-value="0"
          disabled
          >Active</b-form-checkbox
        >
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <h2>Scheduling</h2>
        <b-form-checkbox
          v-model="config.modules.scheduling.active"
          value="1"
          unchecked-value="0"
          disabled
          >Active</b-form-checkbox
        >
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <h2>Apps</h2>
        <div class="row">
          <div class="col-md-4">
            <h4>Compass Web</h4>
            <b-form-checkbox
              v-model="config.modules.apps.compass_web"
              value="1"
              unchecked-value="0"
              disabled
              >Active</b-form-checkbox
            >
          </div>
          <div class="col-md-4">
            <h4>Compass Mobile</h4>
            <b-form-checkbox
              v-model="config.modules.apps.compass_mobile"
              value="1"
              unchecked-value="0"
              disabled
              >Active</b-form-checkbox
            >
          </div>
          <div class="col-md-4">
            <h4>Navigator Mobile</h4>
            <b-form-checkbox
              v-model="config.modules.apps.navigator_mobile"
              value="1"
              unchecked-value="0"
              disabled
              >Active</b-form-checkbox
            >
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <h2>Custom Field Names</h2>
        <b-form-group id="fieldset-1" label="Code Word" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="code_word"
            type="text"
            disabled
          ></b-form-input>
        </b-form-group>
        <b-form-group id="fieldset-1" label="District" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="district"
            type="text"
            disabled
          ></b-form-input>
        </b-form-group>
        <b-form-group id="fieldset-1" label="Site" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="site"
            type="text"
            disabled
          ></b-form-input>
        </b-form-group>
        <b-form-group id="fieldset-1" label="Date Enrolled" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="date_enrolled"
            type="text"
            disabled
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="fieldset-1"
          label="Date Graduated"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="date_graduated"
            type="text"
            disabled
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="fieldset-1"
          label="Date Withdrawn"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="date_withdrawn"
            type="text"
            disabled
          ></b-form-input>
        </b-form-group>
        <b-form-group id="fieldset-1" label="Content Coach" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="content_coach"
            type="text"
            disabled
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="fieldset-1"
          label="Career Life Coach"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="career_life_coach"
            type="text"
            disabled
          ></b-form-input>
        </b-form-group>
        <b-form-group id="fieldset-1" label="GCA" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="gca"
            type="text"
            disabled
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="fieldset-1"
          label="Addintional Staff Assignments"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="addintional_staff_assignments"
            type="text"
            disabled
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="fieldset-1"
          label="Transportation"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="transportaion"
            type="text"
            disabled
          ></b-form-input>
        </b-form-group>
        <b-form-group id="fieldset-1" label="Alternate Id" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="alternate_id"
            type="text"
            disabled
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="fieldset-1"
          label="Emergency Contact 1 Name"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="emergency_contact_1_name"
            type="text"
            disabled
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="fieldset-1"
          label="Emergency Contact 1 Phone"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="emergency_contact_1_phone"
            type="text"
            disabled
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="fieldset-1"
          label="Emergency Contact 1 Email"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="emergency_contact_1_email"
            type="text"
            disabled
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="fieldset-1"
          label="Emergency Contact 1 relation"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="emergency_contact_1_relation"
            type="text"
            disabled
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="fieldset-1"
          label="Emergency Contact 2 name"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="emergency_contact_2_name"
            type="text"
            disabled
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="fieldset-1"
          label="Emergency Contact 2 email"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="emergency_contact_2_email"
            type="text"
            disabled
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="fieldset-1"
          label="Emergency Contact 2 relation"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="emergency_contact_2_relation"
            type="text"
            disabled
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="fieldset-1"
          label="Parole Officer Name"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="parole_officer_name"
            type="text"
            disabled
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="fieldset-1"
          label="Parole Officer Email"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="parole_officer_email"
            type="text"
            disabled
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="fieldset-1"
          label="Parole Officer Phone"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="parole_officer_phone"
            type="text"
            disabled
          ></b-form-input>
        </b-form-group>
        <b-form-group id="fieldset-1" label="Allergies" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="allergies"
            type="text"
            disabled
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="fieldset-1"
          label="Last Date Onsite"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="last_date_onsite"
            type="text"
            disabled
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="fieldset-1"
          label="Next Date Scheduled"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="next_date_scheduled"
            type="text"
            disabled
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="fieldset-1"
          label="Last Date Online"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="last_date_online"
            type="text"
            disabled
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="fieldset-1"
          label="Current Courses"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="current_courses"
            type="text"
            disabled
          ></b-form-input>
        </b-form-group>
        <b-form-group id="fieldset-1" label="Time Online" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="time_online"
            type="text"
            disabled
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="fieldset-1"
          label="Current Progress"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="course_progress"
            type="text"
            disabled
          ></b-form-input>
        </b-form-group>
        <b-form-group id="fieldset-1" label="Target Date" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="target_date"
            type="text"
            disabled
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="fieldset-1"
          label="Courseware Log"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="courseware_log"
            type="text"
            disabled
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="fieldset-1"
          label="Post Grad Pathway"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="post_grad_pathway"
            type="text"
            disabled
          ></b-form-input>
        </b-form-group>
        <b-form-group id="fieldset-1" label="Total Credits" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="total_credits"
            type="text"
            disabled
          ></b-form-input>
        </b-form-group>
        <b-form-group id="fieldset-1" label="Course Name" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="course_name"
            type="text"
            disabled
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="fieldset-1"
          label="Credit Per Course"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="credit_per_course"
            type="text"
            disabled
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="fieldset-1"
          label="Completed With"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="completed_with"
            type="text"
            disabled
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="fieldset-1"
          label="Last Date Onsite"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="last_date_onsite"
            type="text"
            disabled
          ></b-form-input>
        </b-form-group>
        <b-form-group id="fieldset-1" label="Tier Level" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="tier_level"
            type="text"
            disabled
          ></b-form-input>
        </b-form-group>
        <b-form-group id="fieldset-1" label="AA" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="aa"
            type="text"
            disabled
          ></b-form-input>
        </b-form-group>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <h2>Site Settings</h2>
        <b-form-group
          id="fieldset-1"
          label="Attendance Swipe Points"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="config.site_settings.attendance_swipe_pointes"
            type="number"
            disabled
          ></b-form-input>
        </b-form-group>
        <b-form-group id="fieldset-2" label="Badge Points" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="config.site_settings.badge_points"
            type="number"
            disabled
          ></b-form-input>
        </b-form-group>
        <b-form-group id="fieldset-3" label="Email Reply" label-for="input-3">
          <b-form-input
            id="input-3"
            v-model="config.site_settings.email_reply"
            type="text"
            disabled
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="fieldset-4"
          label="Google Analytic Tracking id"
          label-for="input-4"
        >
          <b-form-input
            id="input-4"
            v-model="config.site_settings.google_analytic_tracking_id"
            type="text"
            disabled
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="fieldset-5"
          label="Points to Dollars Factor"
          label-for="input-5"
        >
          <b-form-input
            id="input-5"
            v-model="config.site_settings.points_to_dollars_factor"
            type="text"
            disabled
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="fieldset-6"
          label="Progress Points"
          label-for="input-6"
        >
          <b-form-input
            id="input-6"
            v-model="config.site_settings.progress_points"
            type="number"
            disabled
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="fieldset-7"
          label="Referring Points"
          label-for="input-7"
        >
          <b-form-input
            id="input-7"
            v-model="config.site_settings.referring_points"
            type="number"
            disabled
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="fieldset-8"
          label="Site Description"
          label-for="input-8"
        >
          <b-form-input
            id="input-8"
            v-model="config.site_settings.site_description"
            type="text"
            disabled
          ></b-form-input>
        </b-form-group>
        <b-form-group id="fieldset-9" label="Site Name" label-for="input-9">
          <b-form-input
            id="input-9"
            v-model="config.site_settings.site_name"
            type="text"
            disabled
          ></b-form-input>
        </b-form-group>
        <b-form-group id="fieldset-9" label="Valid Domains" label-for="input-9">
          <b-form-input
            id="input-9"
            v-model="config.site_settings.valid_domains"
            type="text"
            disabled
          ></b-form-input>
        </b-form-group>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <h2>Initial User</h2>
        <b-form-group id="fieldset-1" label="First Name" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="initial_user.first_name"
            type="text"
            disabled
          ></b-form-input>
        </b-form-group>
        <b-form-group id="fieldset-2" label="Last Name" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="initial_user.last_name"
            type="text"
            disabled
          ></b-form-input>
        </b-form-group>
        <b-form-group id="fieldset-3" label="Username" label-for="input-3">
          <b-form-input
            id="input-3"
            v-model="initial_user.title"
            type="text"
            disabled
          ></b-form-input>
        </b-form-group>
        <b-form-group id="fieldset-3" label="Username" label-for="input-3">
          <b-form-input
            id="input-3"
            v-model="initial_user.username"
            type="text"
            disabled
          ></b-form-input>
        </b-form-group>
        <b-form-group id="fieldset-4" label="Password" label-for="input-4">
          <b-form-input
            id="input-4"
            v-model="initial_user.password"
            type="password"
            disabled
          ></b-form-input>
        </b-form-group>
      </div>
    </div>
    <br />
    <br />
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";

import Api from "../../services/api/Api";

export default {
  mixins: [validationMixin],

  async asyncData(context) {
    const api = new Api(context);
    const tenant = await api.getTenant(
      context.store.state.token,
      context.route.params.id
    );
    return {
      api,
      ...tenant,
      tenant,
    };
  },
  created() {
    console.log(this.tenant);
    this.code_word = this.config.fields.find((element) => {
      return element.base_name == "Code Word";
    }).custom_name;
    this.district = this.config.fields.find((element) => {
      return element.base_name == "District";
    }).custom_name;
    this.site = this.config.fields.find((element) => {
      return element.base_name == "Site";
    }).custom_name;
    this.date_enrolled = this.config.fields.find((element) => {
      return element.base_name == "Date Enrolled";
    }).custom_name;
    this.date_graduated = this.config.fields.find((element) => {
      return element.base_name == "Date Graduated";
    }).custom_name;
    this.date_withdrawn = this.config.fields.find((element) => {
      return element.base_name == "Date Withdrawn";
    }).custom_name;
    this.content_coach = this.config.fields.find((element) => {
      return element.base_name == "Teacher (Content Coach)";
    }).custom_name;
    this.career_life_coach = this.config.fields.find((element) => {
      return element.base_name == "Counselor (Career Life Coach)";
    }).custom_name;
    this.gca = this.config.fields.find((element) => {
      return element.base_name == "Para-Professional (GCA)";
    }).custom_name;
    this.addintional_staff_assignments = this.config.fields.find((element) => {
      return element.base_name == "Additional Staff Assignment(s)";
    }).custom_name;
    this.transportaion = this.config.fields.find((element) => {
      return element.base_name == "Transportation";
    }).custom_name;
    this.alternate_id = this.config.fields.find((element) => {
      return element.base_name == "Alternate ID";
    }).custom_name;
    this.emergency_contact_1_name = this.config.fields.find((element) => {
      return element.base_name == "Emergency Contact 1 - Name";
    }).custom_name;
    this.emergency_contact_1_phone = this.config.fields.find((element) => {
      return element.base_name == "Emergency Contact 1 - Phone 1";
    }).custom_name;
    this.emergency_contact_1_email = this.config.fields.find((element) => {
      return element.base_name == "Emergency Contact 1 - Email";
    }).custom_name;
    this.emergency_contact_1_relation = this.config.fields.find((element) => {
      return element.base_name == "Emergency Contact 1 - Relationship";
    }).custom_name;
    this.emergency_contact_2_name = this.config.fields.find((element) => {
      return element.base_name == "Emergency Contact 2 - Name";
    }).custom_name;
    this.emergency_contact_2_email = this.config.fields.find((element) => {
      return element.base_name == "Emergency Contact 2 - Email";
    }).custom_name;
    this.emergency_contact_2_relation = this.config.fields.find((element) => {
      return element.base_name == "Emergency Contact 2 - Relationship";
    }).custom_name;
    this.parole_officer_name = this.config.fields.find((element) => {
      return element.base_name == "Parole Officer Name";
    }).custom_name;
    this.parole_officer_email = this.config.fields.find((element) => {
      return element.base_name == "Parole Officer Email";
    }).custom_name;
    this.parole_officer_phone = this.config.fields.find((element) => {
      return element.base_name == "Parole Officer Phone";
    }).custom_name;
    this.allergies = this.config.fields.find((element) => {
      return element.base_name == "Allergies";
    }).custom_name;
    this.last_date_onsite = this.config.fields.find((element) => {
      return element.base_name == "Last Date Onsite";
    }).custom_name;
    this.next_date_scheduled = this.config.fields.find((element) => {
      return element.base_name == "Next Date Scheduled";
    }).custom_name;
    this.last_date_online = this.config.fields.find((element) => {
      return element.base_name == "Last Date Online";
    }).custom_name;
    this.current_courses = this.config.fields.find((element) => {
      return element.base_name == "Current Course";
    }).custom_name;
    this.time_online = this.config.fields.find((element) => {
      return element.base_name == "Time Online";
    }).custom_name;
    this.course_progress = this.config.fields.find((element) => {
      return element.base_name == "Course Progress";
    }).custom_name;
    this.target_date = this.config.fields.find((element) => {
      return element.base_name == "Target Date";
    }).custom_name;
    this.courseware_log = this.config.fields.find((element) => {
      return element.base_name == "Courseware Log";
    }).custom_name;
    this.post_grad_pathway = this.config.fields.find((element) => {
      return element.base_name == "Post Grad Pathway";
    }).custom_name;
    this.total_credits = this.config.fields.find((element) => {
      return element.base_name == "Total Credits";
    }).custom_name;
    this.course_name = this.config.fields.find((element) => {
      return element.base_name == "Course Name(s)";
    }).custom_name;
    this.credit_per_course = this.config.fields.find((element) => {
      return element.base_name == "Credit per Course";
    }).custom_name;
    this.completed_with = this.config.fields.find((element) => {
      return element.base_name == "Completed With";
    }).custom_name;
    this.last_date_onsite = this.config.fields.find((element) => {
      return element.base_name == "Last Date Onsite";
    }).custom_name;
    this.completed_with = this.config.fields.find((element) => {
      return element.base_name == "Completed With";
    }).custom_name;
    this.tier_level = this.config.fields.find((element) => {
      return element.base_name == "Tier Level";
    }).custom_name;
    this.aa = this.config.fields.find((element) => {
      return element.base_name == "AA";
    }).custom_name;
  },
  data() {
    return {
      form: {
        name: "",
        system_hierarchy: {
          levels: 1,
          level_names: ["", "", ""],
        },
        dashboard: {
          active: 0,
          kpis: [],
        },
        reports: {
          active: 0,
          available: [],
        },
        student_profile_management: {
          active: 0,
        },
        plp: {
          active: 0,
        },
        courseware_integration: {
          active: 0,
          services: [],
          services_keys: [],
        },
        graduation_calculator: {
          active: 0,
        },
        automated_workflow: {
          active: 0,
        },
        scheduling: {
          active: 0,
        },
        document_storage: {
          active: 0,
        },
        case_management_notes: {
          active: 0,
        },
        apps: {
          compass_web: 0,
          compass_mobile: 0,
          navigator_mobile: 0,
        },
        attendance_swipe_points: "",
        badge_points: "",
        email_reply: "",
        google_analytic_tracking_id: "",
        points_to_dollars_factor: "",
        progress_points: "",
        referring_points: "",
        site_description: "",
        site_name: "",
        valid_domains: "",
        first_name: "",
        last_name: "",
        username: "",
        password: "",
      },
      level1Options: ["District", "Region", "Network", "School", "Site"],
      level2Options: ["Region", "Network", "School", "Site"],
      level3Options: ["School", "Site"],

      widgets: ["Widget 1", "Widget 2", "Widget 3", "Widget 4", "Widget 5"],

      all_reports: [
        "Report 1",
        "Report 2",
        "Report 3",
        "Report 4",
        "Report 5",
        "Report 6",
        "Report 7",
        "Report 8",
        "Report 9",
        "Report 10",
        "Report 11",
        "Report 12",
        "Report 13",
        "Report 14",
        "Report 15",
      ],

      all_services: ["Edgenuity", "Edmentum"],
      code_word: "",
      district: "",
      site: "",
      date_enrolled: "",
      date_graduated: "",
      date_withdrawn: "",
      content_coach: "",
      career_life_coach: "",
      gca: "",
      addintional_staff_assignments: "",
      transportaion: "",
      alternate_id: "",
      emergency_contact_1_name: "",
      emergency_contact_1_phone: "",
      emergency_contact_1_email: "",
      emergency_contact_1_relation: "",
      emergency_contact_2_name: "",
      emergency_contact_2_phone: "",
      emergency_contact_2_email: "",
      emergency_contact_2_relation: "",
      parole_officer_name: "",
      parole_officer_email: "",
      parole_officer_phone: "",
      allergies: "",
      last_date_onsite: "",
      next_date_scheduled: "",
      last_date_online: "",
      current_courses: "",
      time_online: "",
      course_progress: "",
      target_date: "",
      courseware_log: "",
      post_grad_pathway: "",
      total_credits: "",
      course_name: "",
      credit_per_course: "",
      completed_with: "",
      last_date_onsite: "",
      tier_level: "",
      aa: "",
    };
  },
  validations: {
    form: {
      name: {
        required,
      },
      attendance_swipe_points: {
        required,
      },
      badge_points: {
        required,
      },
      email_reply: {
        required,
      },
      google_analytic_tracking_id: {
        required,
      },
      points_to_dollars_factor: {
        required,
      },
      progress_points: {
        required,
      },
      referring_points: {
        required,
      },
      site_description: {
        required,
      },
      site_name: {
        required,
      },
      valid_domains: {
        required,
      },
      first_name: {
        required,
      },
      last_name: {
        required,
      },
      username: {
        required,
      },
      password: {
        required,
      },
    },
  },
  methods: {
    plpChanged() {
      this.form.courseware_integration.active = 1;
    },
    studentProfileManagementChanged() {
      this.form.courseware_integration.active = 1;
      this.form.scheduling.active = 1;
      this.form.automated_workflow.active = 1;
      this.form.apps.navigator_mobile = 1;
    },
    reportsChanged() {
      this.form.courseware_integration.active = 1;
      this.form.scheduling.active = 1;
      this.form.automated_workflow.active = 1;
      this.form.plp.active = 1;
      this.form.apps.compass_web = 1;
      this.form.apps.compass_mobile = 1;
      this.form.apps.navigator_mobile = 1;
    },
    dashboardChanged() {
      this.form.courseware_integration.active = 1;
      this.form.case_management_notes.active = 1;
      this.form.automated_workflow.active = 1;
    },
    validateState(item) {
      const { $dirty, $error } = item;
      return $dirty ? !$error : null;
    },
  },
};
</script>
