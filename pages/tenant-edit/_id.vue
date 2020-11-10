<template>
  <div class="">
    <h1>Edit Tenant</h1>
    <div class="page-title-box">
      <div class="page-title-right">
        <nuxt-link
          class="btn btn-danger waves-effect waves-light"
          :to="`/tenant-view/${$route.params.id}`"
        >
          <span class="btn-label">
            <i class="mdi mdi-cancel" />
          </span>
          Cancel
        </nuxt-link>
      </div>
    </div>
    <div class="form-group col-xs-12 col-md-4 mb-3">
      <label for="scheduled-date" class="required bolder">
        Tenant Name:
      </label>
      <b-form-input
        id="input-9"
        v-model="form.name"
        type="text"
        :state="validateState($v.form.name)"
      ></b-form-input>
    </div>
    <div class="card">
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
                      v-model="form.system_hierarchy.levels"
                      type="number"
                      min="1"
                      max="3"
                    ></b-form-input>
                  </div>
                  <div
                    class="col-md-3"
                    :key="level"
                    v-for="(level, index) in parseInt(
                      form.system_hierarchy.levels
                    )"
                  >
                    <b-form-select
                      v-model="form.system_hierarchy.level_names[index]"
                      type="text"
                    >
                      <b-form-select-option disabled value>
                        Level {{ level }} Name
                      </b-form-select-option>
                      <b-form-select-option
                        :value="option"
                        :key="index"
                        v-for="(option, index) of form.system_hierarchy
                          .levels === 1
                          ? level1Options
                          : form.system_hierarchy.levels === 2
                          ? level === 1
                            ? level2Options
                            : level3Options
                          : level === 1
                          ? ['District']
                          : level === 2
                          ? ['Region', 'Network']
                          : ['Site', 'School']"
                      >
                        {{ option }}
                      </b-form-select-option>
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
            v-model="form.dashboard.active"
            @change="dashboardChanged"
            >Active</b-form-checkbox
          >
          <div v-if="form.dashboard.active" class="mt-3">
            <div class="col-md-3">
              <v-select
                multiple
                :options="widgets"
                v-model="form.dashboard.kpis"
                placeholder="Choose KPIs"
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
            v-model="form.reports.active"
            @change="reportsChanged"
            >Active</b-form-checkbox
          >
          <div v-if="form.reports.active" class="mt-3">
            <div class="col-md-3">
              <v-select
                multiple
                :options="all_reports"
                v-model="form.reports.available"
                placeholder="Available Reports"
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
          v-model="form.student_profile_management.active"
          @change="studentProfileManagementChanged"
          >Active</b-form-checkbox
        >
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <h2>PLP</h2>
        <b-form-checkbox
          v-model="form.plp.active"
          @change="plpChanged"
          :disabled="form.reports.active == 1"
          value="1"
          unchecked-value="0"
          >Active</b-form-checkbox
        >
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <h2>Courseware Integration</h2>
        <b-form-checkbox
          v-model="form.courseware_integration.active"
          :disabled="
            form.dashboard.active == 1 ||
              form.reports.active == 1 ||
              form.student_profile_management.active == 1 ||
              form.plp.active == 1
          "
          value="1"
          unchecked-value="0"
          >Active</b-form-checkbox
        >
        <div v-if="form.courseware_integration.active" class="mt-3">
          <div class="row">
            <div class="col-md-3">
              <v-select
                multiple
                :options="all_services"
                v-model="form.courseware_integration.services"
                placeholder="Services"
              ></v-select>
            </div>
            <div
              class="col-md-3"
              :key="index"
              v-for="(service, index) of form.courseware_integration.services"
            >
              <b-form-input
                v-model="form.courseware_integration.services_keys[index]"
                type="text"
                :placeholder="`${service} API Key`"
              >
              </b-form-input>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <h2>Graduation Calculator</h2>
        <b-form-checkbox v-model="form.graduation_calculator.active"
          >Active</b-form-checkbox
        >
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <h2>Automated Workflow</h2>
        <b-form-checkbox
          v-model="form.automated_workflow.active"
          :disabled="
            form.dashboard.active == 1 ||
              form.reports.active == 1 ||
              form.student_profile_management.active == 1
          "
          value="1"
          unchecked-value="0"
          >Active</b-form-checkbox
        >
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <h2>Document Storage</h2>
        <b-form-checkbox v-model="form.document_storage.active"
          >Active</b-form-checkbox
        >
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <h2>Case Management Notes</h2>
        <b-form-checkbox
          v-model="form.case_management_notes.active"
          :disabled="form.dashboard.active == 1"
          value="1"
          unchecked-value="0"
          >Active</b-form-checkbox
        >
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <h2>Scheduling</h2>
        <b-form-checkbox
          v-model="form.scheduling.active"
          :disabled="
            form.reports.active == 1 ||
              form.student_profile_management.active == 1
          "
          value="1"
          unchecked-value="0"
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
              v-model="form.apps.compass_web"
              :disabled="form.reports.active == 1"
              value="1"
              unchecked-value="0"
              >Active</b-form-checkbox
            >
          </div>
          <div class="col-md-4">
            <h4>Compass Mobile</h4>
            <b-form-checkbox
              v-model="form.apps.compass_mobile"
              :disabled="form.reports.active == 1"
              value="1"
              unchecked-value="0"
              >Active</b-form-checkbox
            >
          </div>
          <div class="col-md-4">
            <h4>Navigator Mobile</h4>
            <b-form-checkbox
              v-model="form.apps.navigator_mobile"
              :disabled="
                form.reports.active == 1 ||
                  form.student_profile_management.active == 1
              "
              value="1"
              unchecked-value="0"
              >Active</b-form-checkbox
            >
          </div>
        </div>
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
            v-model="form.attendance_swipe_points"
            type="number"
            :state="validateState($v.form.attendance_swipe_points)"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="fieldset-2" label="Badge Points" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.badge_points"
            type="number"
            :state="validateState($v.form.badge_points)"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="fieldset-3" label="Email Reply" label-for="input-3">
          <b-form-input
            id="input-3"
            v-model="form.email_reply"
            type="text"
            :state="validateState($v.form.email_reply)"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="fieldset-4"
          label="Google Analytic Tracking id"
          label-for="input-4"
        >
          <b-form-input
            id="input-4"
            v-model="form.google_analytic_tracking_id"
            type="text"
            :state="validateState($v.form.google_analytic_tracking_id)"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="fieldset-5"
          label="Points to Dollars Factor"
          label-for="input-5"
        >
          <b-form-input
            id="input-5"
            v-model="form.points_to_dollars_factor"
            type="text"
            :state="validateState($v.form.points_to_dollars_factor)"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="fieldset-6"
          label="Progress Points"
          label-for="input-6"
        >
          <b-form-input
            id="input-6"
            v-model="form.progress_points"
            type="number"
            :state="validateState($v.form.progress_points)"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="fieldset-7"
          label="Referring Points"
          label-for="input-7"
        >
          <b-form-input
            id="input-7"
            v-model="form.referring_points"
            type="number"
            :state="validateState($v.form.referring_points)"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="fieldset-8"
          label="Site Description"
          label-for="input-8"
        >
          <b-form-input
            id="input-8"
            v-model="form.site_description"
            type="text"
            :state="validateState($v.form.site_description)"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="fieldset-9" label="Site Name" label-for="input-9">
          <b-form-input
            id="input-9"
            v-model="form.site_name"
            type="text"
            :state="validateState($v.form.site_name)"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="fieldset-9" label="Valid Domains" label-for="input-9">
          <b-form-input
            id="input-9"
            v-model="form.valid_domains"
            type="text"
            :state="validateState($v.form.valid_domains)"
          ></b-form-input>
        </b-form-group>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <h2>Custom Field Names</h2>
        <b-form-group id="fieldset-1" label="Code Word" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="form.code_word"
            type="text"
            :state="validateState($v.form.code_word)"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="fieldset-1" label="District" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="form.district"
            type="text"
            :state="validateState($v.form.district)"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="fieldset-1" label="Site" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="form.site"
            type="text"
            :state="validateState($v.form.site)"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="fieldset-1" label="Date Enrolled" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="form.date_enrolled"
            type="text"
            :state="validateState($v.form.date_enrolled)"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="fieldset-1"
          label="Date Graduated"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="form.date_graduated"
            type="text"
            :state="validateState($v.form.date_graduated)"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="fieldset-1"
          label="Date Withdrawn"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="form.date_withdrawn"
            type="text"
            :state="validateState($v.form.date_withdrawn)"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="fieldset-1" label="Content Coach" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="form.content_coach"
            type="text"
            :state="validateState($v.form.content_coach)"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="fieldset-1"
          label="Career Life Coach"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="form.career_life_coach"
            type="text"
            :state="validateState($v.form.career_life_coach)"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="fieldset-1" label="GCA" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="form.gca"
            type="text"
            :state="validateState($v.form.gca)"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="fieldset-1"
          label="Addintional Staff Assignments"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="form.addintional_staff_assignments"
            type="text"
            :state="validateState($v.form.addintional_staff_assignments)"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="fieldset-1"
          label="Transportation"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="form.transportaion"
            type="text"
            :state="validateState($v.form.transportaion)"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="fieldset-1" label="Alternate Id" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="form.alternate_id"
            type="text"
            :state="validateState($v.form.alternate_id)"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="fieldset-1"
          label="Emergency Contact 1 Name"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="form.emergency_contact_1_name"
            type="text"
            :state="validateState($v.form.emergency_contact_1_name)"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="fieldset-1"
          label="Emergency Contact 1 Phone"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="form.emergency_contact_1_phone"
            type="text"
            :state="validateState($v.form.emergency_contact_1_phone)"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="fieldset-1"
          label="Emergency Contact 1 Email"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="form.emergency_contact_1_email"
            type="text"
            :state="validateState($v.form.emergency_contact_1_email)"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="fieldset-1"
          label="Emergency Contact 1 relation"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="form.emergency_contact_1_relation"
            type="text"
            :state="validateState($v.form.emergency_contact_1_relation)"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="fieldset-1"
          label="Emergency Contact 2 name"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="form.emergency_contact_2_name"
            type="text"
            :state="validateState($v.form.emergency_contact_2_name)"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="fieldset-1"
          label="Emergency Contact 2 email"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="form.emergency_contact_2_email"
            type="text"
            :state="validateState($v.form.emergency_contact_2_email)"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="fieldset-1"
          label="Emergency Contact 2 relation"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="form.emergency_contact_2_relation"
            type="text"
            :state="validateState($v.form.emergency_contact_2_relation)"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="fieldset-1"
          label="Parole Officer Name"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="form.parole_officer_name"
            type="text"
            :state="validateState($v.form.parole_officer_name)"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="fieldset-1"
          label="Parole Officer Email"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="form.parole_officer_email"
            type="text"
            :state="validateState($v.form.parole_officer_email)"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="fieldset-1"
          label="Parole Officer Phone"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="form.parole_officer_phone"
            type="text"
            :state="validateState($v.form.parole_officer_phone)"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="fieldset-1" label="Allergies" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="form.allergies"
            type="text"
            :state="validateState($v.form.allergies)"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="fieldset-1"
          label="Last Date Onsite"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="form.last_date_onsite"
            type="text"
            :state="validateState($v.form.last_date_onsite)"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="fieldset-1"
          label="Next Date Scheduled"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="form.next_date_scheduled"
            type="text"
            :state="validateState($v.form.next_date_scheduled)"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="fieldset-1"
          label="Last Date Online"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="form.last_date_online"
            type="text"
            :state="validateState($v.form.last_date_online)"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="fieldset-1"
          label="Current Courses"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="form.current_courses"
            type="text"
            :state="validateState($v.form.current_courses)"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="fieldset-1" label="Time Online" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="form.time_online"
            type="text"
            :state="validateState($v.form.time_online)"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="fieldset-1"
          label="Current Progress"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="form.course_progress"
            type="text"
            :state="validateState($v.form.course_progress)"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="fieldset-1" label="Target Date" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="form.target_date"
            type="text"
            :state="validateState($v.form.target_date)"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="fieldset-1"
          label="Courseware Log"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="form.courseware_log"
            type="text"
            :state="validateState($v.form.courseware_log)"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="fieldset-1"
          label="Post Grad Pathway"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="form.post_grad_pathway"
            type="text"
            :state="validateState($v.form.post_grad_pathway)"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="fieldset-1" label="Total Credits" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="form.total_credits"
            type="text"
            :state="validateState($v.form.total_credits)"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="fieldset-1" label="Course Name" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="form.course_name"
            type="text"
            :state="validateState($v.form.course_name)"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="fieldset-1"
          label="Credit Per Course"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="form.credit_per_course"
            type="text"
            :state="validateState($v.form.credit_per_course)"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="fieldset-1"
          label="Completed With"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="form.completed_with"
            type="text"
            :state="validateState($v.form.completed_with)"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="fieldset-1"
          label="Last Date Onsite"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="form.last_date_onsite"
            type="text"
            :state="validateState($v.form.last_date_onsite)"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="fieldset-1" label="Tier Level" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="form.tier_level"
            type="text"
            :state="validateState($v.form.tier_level)"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="fieldset-1" label="AA" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="form.aa"
            type="text"
            :state="validateState($v.form.aa)"
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
            v-model="form.first_name"
            type="text"
            :state="validateState($v.form.first_name)"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="fieldset-2" label="Last Name" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.last_name"
            type="text"
            :state="validateState($v.form.last_name)"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="fieldset-4" label="Title" label-for="input-4">
          <b-form-input
            id="input-4"
            v-model="form.title"
            type="text"
            :state="validateState($v.form.title)"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="fieldset-4" label="Initial Role" label-for="input-4">
          <b-form-input
            id="input-4"
            v-model="form.initial_role"
            type="text"
            :state="validateState($v.form.initial_role)"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="fieldset-3" label="Username" label-for="input-3">
          <b-form-input
            id="input-3"
            v-model="form.username"
            type="text"
            :state="validateState($v.form.username)"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="fieldset-4" label="Password" label-for="input-4">
          <b-form-input
            id="input-4"
            v-model="form.password"
            type="password"
            :state="validateState($v.form.password)"
          ></b-form-input>
        </b-form-group>
      </div>
    </div>
    <br />
    <br />
    <div class="form-group col-xs-12 col-md-12 mb-3 clear">
      <input
        class="btn btn-primary waves-effect waves-light save_btn"
        type="submit"
        value="Save"
        name="submit"
        @click="submit"
      />
    </div>
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
      ...tenant
    };
  },
  created() {
    if(!this.$store.state.can_edit){
      this.$router.push("/unauthorized");
    }
    this.form.name = this.name;
    this.form.system_hierarchy.levels = this.config.system_hierarchy.length;
    this.form.system_hierarchy.level_names = this.config.system_hierarchy.map(
      element => element.name
    );
    this.form.dashboard.active = this.config.modules.dashboard.active;
    this.form.dashboard.kpis = this.config.modules.dashboard.kpis.map(
      element => element.name
    );
    this.form.reports.active = this.config.modules.reports.active;
    this.form.reports.available = this.config.modules.reports.available.map(
      element => element.name
    );
    this.form.student_profile_management.active = this.config.modules.student_profile_management.active;
    this.form.plp.active = this.config.modules.plp.active;
    this.form.courseware_integration.active = this.config.modules.courseware_integration.active;
    this.form.courseware_integration.services = this.config.modules.courseware_integration.services.map(
      element => element.name
    );
    this.form.courseware_integration.services_keys = this.config.modules.courseware_integration.services.map(
      element => element.api_key
    );
    this.form.graduation_calculator.active = this.config.modules.graduation_calculator.active;
    this.form.automated_workflow.active = this.config.modules.automated_workflow.active;
    this.form.scheduling.active = this.config.modules.scheduling.active;
    this.form.document_storage.active = this.config.modules.document_storage.active;
    this.form.case_management_notes.active = this.config.modules.case_management_notes.active;
    this.form.apps.compass_web = this.config.modules.apps.compass_web.active;
    this.form.apps.compass_mobile = this.config.modules.apps.compass_mobile.active;
    this.form.apps.navigator_mobile = this.config.modules.apps.navigator_mobile.active;
    this.form.attendance_swipe_points = this.config.site_settings.attendance_swipe_pointes;
    this.form.badge_points = this.config.site_settings.badge_points;
    this.form.email_reply = this.config.site_settings.email_reply;
    this.form.google_analytic_tracking_id = this.config.site_settings.google_analytic_tracking_id;
    this.form.points_to_dollars_factor = this.config.site_settings.points_to_dollars_factor;
    this.form.progress_points = this.config.site_settings.progress_points;
    this.form.referring_points = this.config.site_settings.referring_points;
    this.form.site_description = this.config.site_settings.site_description;
    this.form.site_name = this.config.site_settings.site_name;
    this.form.valid_domains = this.config.site_settings.valid_domains;

    this.form.first_name = this.initial_user.first_name;
    this.form.last_name = this.initial_user.last_name;
    this.form.username = this.initial_user.username;
    this.form.password = this.initial_user.password;
    this.form.title = this.initial_user.title;
    this.form.initial_role = this.initial_user.initial_role;

    this.form.code_word = this.config.fields.find(element => {
      return element.base_name == "Code Word";
    }).custom_name;
    this.form.district = this.config.fields.find(element => {
      return element.base_name == "District";
    }).custom_name;
    this.form.site = this.config.fields.find(element => {
      return element.base_name == "Site";
    }).custom_name;
    this.form.date_enrolled = this.config.fields.find(element => {
      return element.base_name == "Date Enrolled";
    }).custom_name;
    this.form.date_graduated = this.config.fields.find(element => {
      return element.base_name == "Date Graduated";
    }).custom_name;
    this.form.date_withdrawn = this.config.fields.find(element => {
      return element.base_name == "Date Withdrawn";
    }).custom_name;
    this.form.content_coach = this.config.fields.find(element => {
      return element.base_name == "Teacher (Content Coach)";
    }).custom_name;
    this.form.career_life_coach = this.config.fields.find(element => {
      return element.base_name == "Counselor (Career Life Coach)";
    }).custom_name;
    this.form.gca = this.config.fields.find(element => {
      return element.base_name == "Para-Professional (GCA)";
    }).custom_name;
    this.form.addintional_staff_assignments = this.config.fields.find(
      element => {
        return element.base_name == "Additional Staff Assignment(s)";
      }
    ).custom_name;
    this.form.transportaion = this.config.fields.find(element => {
      return element.base_name == "Transportation";
    }).custom_name;
    this.form.alternate_id = this.config.fields.find(element => {
      return element.base_name == "Alternate ID";
    }).custom_name;
    this.form.emergency_contact_1_name = this.config.fields.find(element => {
      return element.base_name == "Emergency Contact 1 - Name";
    }).custom_name;
    this.form.emergency_contact_1_phone = this.config.fields.find(element => {
      return element.base_name == "Emergency Contact 1 - Phone 1";
    }).custom_name;
    this.form.emergency_contact_1_email = this.config.fields.find(element => {
      return element.base_name == "Emergency Contact 1 - Email";
    }).custom_name;
    this.form.emergency_contact_1_relation = this.config.fields.find(
      element => {
        return element.base_name == "Emergency Contact 1 - Relationship";
      }
    ).custom_name;
    this.form.emergency_contact_2_name = this.config.fields.find(element => {
      return element.base_name == "Emergency Contact 2 - Name";
    }).custom_name;
    this.form.emergency_contact_2_email = this.config.fields.find(element => {
      return element.base_name == "Emergency Contact 2 - Email";
    }).custom_name;
    this.form.emergency_contact_2_relation = this.config.fields.find(
      element => {
        return element.base_name == "Emergency Contact 2 - Relationship";
      }
    ).custom_name;
    this.form.parole_officer_name = this.config.fields.find(element => {
      return element.base_name == "Parole Officer Name";
    }).custom_name;
    this.form.parole_officer_email = this.config.fields.find(element => {
      return element.base_name == "Parole Officer Email";
    }).custom_name;
    this.form.parole_officer_phone = this.config.fields.find(element => {
      return element.base_name == "Parole Officer Phone";
    }).custom_name;
    this.form.allergies = this.config.fields.find(element => {
      return element.base_name == "Allergies";
    }).custom_name;
    this.form.last_date_onsite = this.config.fields.find(element => {
      return element.base_name == "Last Date Onsite";
    }).custom_name;
    this.form.next_date_scheduled = this.config.fields.find(element => {
      return element.base_name == "Next Date Scheduled";
    }).custom_name;
    this.form.last_date_online = this.config.fields.find(element => {
      return element.base_name == "Last Date Online";
    }).custom_name;
    this.form.current_courses = this.config.fields.find(element => {
      return element.base_name == "Current Course";
    }).custom_name;
    this.form.time_online = this.config.fields.find(element => {
      return element.base_name == "Time Online";
    }).custom_name;
    this.form.course_progress = this.config.fields.find(element => {
      return element.base_name == "Course Progress";
    }).custom_name;
    this.form.target_date = this.config.fields.find(element => {
      return element.base_name == "Target Date";
    }).custom_name;
    this.form.courseware_log = this.config.fields.find(element => {
      return element.base_name == "Courseware Log";
    }).custom_name;
    this.form.post_grad_pathway = this.config.fields.find(element => {
      return element.base_name == "Post Grad Pathway";
    }).custom_name;
    this.form.total_credits = this.config.fields.find(element => {
      return element.base_name == "Total Credits";
    }).custom_name;
    this.form.course_name = this.config.fields.find(element => {
      return element.base_name == "Course Name(s)";
    }).custom_name;
    this.form.credit_per_course = this.config.fields.find(element => {
      return element.base_name == "Credit per Course";
    }).custom_name;
    this.form.completed_with = this.config.fields.find(element => {
      return element.base_name == "Completed With";
    }).custom_name;
    this.form.last_date_onsite = this.config.fields.find(element => {
      return element.base_name == "Last Date Onsite";
    }).custom_name;
    this.form.completed_with = this.config.fields.find(element => {
      return element.base_name == "Completed With";
    }).custom_name;
    this.form.tier_level = this.config.fields.find(element => {
      return element.base_name == "Tier Level";
    }).custom_name;
    this.form.aa = this.config.fields.find(element => {
      return element.base_name == "AA";
    }).custom_name;
  },
  data() {
    return {
      form: {
        name: "",
        system_hierarchy: {
          levels: 1,
          level_names: ["", "", ""]
        },
        dashboard: {
          active: 0,
          kpis: []
        },
        reports: {
          active: 0,
          available: []
        },
        student_profile_management: {
          active: 0
        },
        plp: {
          active: 0
        },
        courseware_integration: {
          active: 0,
          services: [],
          services_keys: []
        },
        graduation_calculator: {
          active: 0
        },
        automated_workflow: {
          active: 0
        },
        scheduling: {
          active: 0
        },
        document_storage: {
          active: 0
        },
        case_management_notes: {
          active: 0
        },
        apps: {
          compass_web: 0,
          compass_mobile: 0,
          navigator_mobile: 0
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
        title: "",
        initial_role: "",
        username: "",
        password: "",
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
        aa: ""
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
        "Report 15"
      ],

      all_services: ["Edgenuity", "Edmentum"]
    };
  },
  validations: {
    form: {
      name: {
        required
      },
      attendance_swipe_points: {
        required
      },
      badge_points: {
        required
      },
      email_reply: {
        required
      },
      google_analytic_tracking_id: {
        required
      },
      points_to_dollars_factor: {
        required
      },
      progress_points: {
        required
      },
      referring_points: {
        required
      },
      site_description: {
        required
      },
      site_name: {
        required
      },
      valid_domains: {
        required
      },
      first_name: {
        required
      },
      last_name: {
        required
      },
      username: {
        required
      },
      title: {
        required
      },
      initial_role: {
        required
      },
      password: {
        required
      },
      code_word: {
        required
      },
      district: {
        required
      },
      site: {
        required
      },
      date_enrolled: {
        required
      },
      date_graduated: {
        required
      },
      date_withdrawn: {
        required
      },
      content_coach: {
        required
      },
      career_life_coach: {
        required
      },
      gca: {
        required
      },
      addintional_staff_assignments: {
        required
      },
      transportaion: {
        required
      },
      alternate_id: {
        required
      },
      emergency_contact_1_name: {
        required
      },
      emergency_contact_1_phone: {
        required
      },
      emergency_contact_1_email: {
        required
      },
      emergency_contact_1_relation: {
        required
      },
      emergency_contact_2_name: {
        required
      },
      emergency_contact_2_email: {
        required
      },
      emergency_contact_2_relation: {
        required
      },
      parole_officer_name: {
        required
      },
      parole_officer_email: {
        required
      },
      parole_officer_phone: {
        required
      },
      allergies: {
        required
      },
      last_date_onsite: {
        required
      },
      next_date_scheduled: {
        required
      },
      last_date_online: {
        required
      },
      current_courses: {
        required
      },
      time_online: {
        required
      },
      course_progress: {
        required
      },
      target_date: {
        required
      },
      courseware_log: {
        required
      },
      post_grad_pathway: {
        required
      },
      total_credits: {
        required
      },
      course_name: {
        required
      },
      credit_per_course: {
        required
      },
      completed_with: {
        required
      },
      last_date_onsite: {
        required
      },
      tier_level: {
        required
      },
      aa: {
        required
      }
    }
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
    submit() {
      this.$v.form.$touch();
      console.log(this.$v.form);
      if (this.$v.form.$anyError) return false;

      let levels = [];

      for (let level of this.form.system_hierarchy.level_names) {
        if (level !== "") {
          levels.push({ name: level });
        }
      }

      let kpis = [];

      for (let kpi of this.form.dashboard.kpis) {
        if (kpi !== "") {
          kpis.push({ name: kpi });
        }
      }

      let available = [];

      for (let r of this.form.reports.available) {
        if (r !== "") {
          available.push({ name: r });
        }
      }

      let services = [];

      for (let index in this.form.courseware_integration.services) {
        if (this.form.courseware_integration.services[index] !== "") {
          services.push({
            name: this.form.courseware_integration.services[index],
            api_key: this.form.courseware_integration.services_keys[index]
          });
        }
      }

      const payload = {
        id: this.$route.params.id,
        type: "tenants",
        attributes: {
          name: this.form.name,
          config: {
            system_hierarchy: levels,
            modules: {
              dashboard: {
                active: this.form.dashboard.active,
                kpis: kpis
              },
              reports: {
                active: this.form.reports.active,
                available: available
              },
              student_profile_management: {
                active: this.form.student_profile_management.active
              },
              plp: {
                active: this.form.plp.active
              },
              courseware_integration: {
                active: this.form.courseware_integration.active,
                services: services
              },
              graduation_calculator: {
                active: this.form.graduation_calculator.active
              },
              automated_workflow: {
                active: this.form.automated_workflow.active
              },
              scheduling: {
                active: this.form.scheduling.active
              },
              document_storage: {
                active: this.form.document_storage.active
              },
              case_management_notes: {
                active: this.form.case_management_notes.active
              },
              apps: {
                compass_web: {
                  active: this.form.apps.compass_web
                },
                compass_mobile: {
                  active: this.form.apps.compass_mobile
                },
                navigator_mobile: {
                  active: this.form.apps.navigator_mobile
                }
              }
            },
            fields: [
              { base_name: "Code Word", custom_name: this.form.code_word },
              { base_name: "District", custom_name: this.form.district },
              { base_name: "Site", custom_name: this.form.site },
              {
                base_name: "Date Enrolled",
                custom_name: this.form.date_enrolled
              },
              {
                base_name: "Date Graduated",
                custom_name: this.form.date_graduated
              },
              {
                base_name: "Date Withdrawn",
                custom_name: this.form.date_withdrawn
              },
              {
                base_name: "Teacher (Content Coach)",
                custom_name: this.form.content_coach
              },
              {
                base_name: "Counselor (Career Life Coach)",
                custom_name: this.form.career_life_coach
              },
              {
                base_name: "Para-Professional (GCA)",
                custom_name: this.form.gca
              },
              {
                base_name: "Additional Staff Assignment(s)",
                custom_name: this.form.addintional_staff_assignments
              },
              {
                base_name: "Transportation",
                custom_name: this.form.transportaion
              },
              {
                base_name: "Alternate ID",
                custom_name: this.form.alternate_id
              },
              {
                base_name: "Emergency Contact 1 - Name",
                custom_name: this.form.emergency_contact_1_name
              },
              {
                base_name: "Emergency Contact 1 - Phone 1",
                custom_name: this.form.emergency_contact_1_phone
              },
              {
                base_name: "Emergency Contact 1 - Phone 2",
                custom_name: "Emergency Contact 1 - Phone 2"
              },
              {
                base_name: "Emergency Contact 1 - Email",
                custom_name: this.form.emergency_contact_1_email
              },
              {
                base_name: "Emergency Contact 1 - Relationship",
                custom_name: this.form.emergency_contact_1_relation
              },
              {
                base_name: "Emergency Contact 2 - Name",
                custom_name: this.form.emergency_contact_2_name
              },
              {
                base_name: "Emergency Contact 2 - Phone 1",
                custom_name: this.form.emergency_contact_2_phone
              },
              {
                base_name: "Emergency Contact 2 - Phone 2",
                custom_name: "Emergency Contact 2 - Phone 2"
              },
              {
                base_name: "Emergency Contact 2 - Email",
                custom_name: this.form.emergency_contact_2_email
              },
              {
                base_name: "Emergency Contact 2 - Relationship",
                custom_name: this.form.emergency_contact_2_relation
              },
              {
                base_name: "Parole Officer Name",
                custom_name: this.form.parole_officer_name
              },
              {
                base_name: "Parole Officer Phone",
                custom_name: this.form.parole_officer_phone
              },
              {
                base_name: "Parole Officer Email",
                custom_name: this.form.parole_officer_email
              },
              { base_name: "Allergies", custom_name: this.form.allergies },
              {
                base_name: "Last Date Onsite",
                custom_name: this.form.last_date_onsite
              },
              {
                base_name: "Next Date Scheduled",
                custom_name: this.form.next_date_scheduled
              },
              {
                base_name: "Last Date Online",
                custom_name: this.form.last_date_online
              },
              {
                base_name: "Current Course",
                custom_name: this.form.current_courses
              },
              { base_name: "Time Online", custom_name: this.form.time_online },
              {
                base_name: "Course Progress",
                custom_name: this.form.course_progress
              },
              { base_name: "Target Date", custom_name: this.form.target_date },
              {
                base_name: "Courseware Log",
                custom_name: this.form.courseware_log
              },
              {
                base_name: "Post Grad Pathway",
                custom_name: this.form.post_grad_pathway
              },
              {
                base_name: "Total Credits",
                custom_name: this.form.total_credits
              },
              {
                base_name: "Course Name(s)",
                custom_name: this.form.course_name
              },
              {
                base_name: "Credit per Course",
                custom_name: this.form.credit_per_course
              },
              {
                base_name: "Completed With",
                custom_name: this.form.completed_with
              },
              {
                base_name: "Last Date Onsite",
                custom_name: this.form.last_date_onsite
              },
              {
                base_name: "Next Date Scheduled",
                custom_name: this.form.next_date_scheduled
              },
              { base_name: "Tier Level", custom_name: this.form.tier_level },
              { base_name: "AA", custom_name: this.form.aa }
            ],
            site_settings: {
              attendance_swipe_pointes: this.form.attendance_swipe_points,
              badge_points: this.form.badge_points,
              email_reply: this.form.email_reply,
              google_analytic_tracking_id: this.form
                .google_analytic_tracking_id,
              points_to_dollars_factor: this.form.points_to_dollars_factor,
              progress_points: this.form.progress_points,
              referring_points: this.form.referring_points,
              site_description: this.form.site_description,
              site_name: this.form.site_name,
              valid_domains: this.form.valid_domains
            },
            initial_user: {
              first_name: this.form.first_name,
              last_name: this.form.last_name,
              username: this.form.username,
              password: this.form.password,
              title: this.form.title,
              lookup_timezone_id: "1"
            },
            initial_role: {
              name: this.form.initial_role
            }
          }
        }
      };

      this.api
        .updateTenant(this.$store.state.token, this.$route.params.id, payload)
        .then(data => {
          console.log(data);
          this.$router.push(`/tenant-view/${this.$route.params.id}`);
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
};
</script>
