<template>
  <div class>
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
        <h2>Custom Field Names</h2>
        <b-form-group label="Has Device">
          <div class="mt-3">
            <div class="col-md-3">
              <v-select
                multiple
                :options="hasDeviceOptions"
                v-model="form.has_device"
                placeholder="Choose Options"
              ></v-select>
            </div>
          </div>
        </b-form-group>
        <b-form-group label="Has Wifi">
          <div class="mt-3">
            <div class="col-md-3">
              <v-select
                multiple
                :options="hasWifiOptions"
                v-model="form.has_wifi"
                placeholder="Choose Options"
              ></v-select>
            </div>
          </div>
        </b-form-group>
        <b-form-group label="Special Programs">
          <div class="mt-3">
            <div class="col-md-3">
              <v-select
                multiple
                :options="specialProgramsOptions"
                v-model="form.special_programs"
                placeholder="Choose Options"
              ></v-select>
            </div>
          </div>
        </b-form-group>
        <b-form-group label="Note Statuses">
          <div class="mt-3">
            <div class="col-md-3">
              <v-select
                multiple
                :options="noteStatusesOptions"
                v-model="form.note_statuses"
                placeholder="Choose Options"
              ></v-select>
            </div>
          </div>
        </b-form-group>
        <b-form-group label="Tier Levels">
          <div class="mt-3">
            <div class="col-md-3">
              <v-select
                multiple
                :options="tierLevels"
                v-model="form.tier_levels"
                placeholder="Choose Options"
              ></v-select>
            </div>
          </div>
        </b-form-group>
        <b-form-group label="Emergency Contact Relation">
          <div class="mt-3">
            <div class="col-md-3">
              <v-select
                multiple
                :options="emergencyContactRelationOptions"
                v-model="form.emergency_contact_relations"
                placeholder="Choose Options"
              ></v-select>
            </div>
          </div>
        </b-form-group>
        <b-form-group label="Allergies">
          <div class="mt-3">
            <div class="col-md-3">
              <v-select
                multiple
                :options="allergiesOptions"
                v-model="form.allergies"
                placeholder="Choose Options"
              ></v-select>
            </div>
          </div>
        </b-form-group>
        <b-form-group label="Diseases">
          <div class="mt-3">
            <div class="col-md-3">
              <v-select
                multiple
                :options="diseasesOptions"
                v-model="form.diseases"
                placeholder="Choose Options"
              ></v-select>
            </div>
          </div>
        </b-form-group>
        <b-form-group label="Post Grad Pathways">
          <div class="mt-3">
            <div class="col-md-3">
              <v-select
                multiple
                :options="postGradOptions"
                v-model="form.post_grad_pathways"
                placeholder="Choose Options"
              ></v-select>
            </div>
          </div>
        </b-form-group>
        <b-form-group label="Hear About">
          <div class="mt-3">
            <div class="col-md-3">
              <v-select
                multiple
                :options="hearAboutOptions"
                v-model="form.hear_about"
                placeholder="Choose Options"
              ></v-select>
            </div>
          </div>
        </b-form-group>
        <b-form-group label="Completed With">
          <div class="mt-3">
            <div class="col-md-3">
              <v-select
                multiple
                :options="completedWithOptions"
                v-model="form.completed_with"
                placeholder="Choose Options"
              ></v-select>
            </div>
          </div>
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
    return {
      api,
    };
  },
  data() {
    return {
      form: {
        code_word: "Code Word",
        district: "District",
        site: "Site",
        date_enrolled: "Date Enrolled",
        date_graduated: "Date Graduated",
        date_withdrawn: "Date Withdrawn",
        content_coach: "Content Coach",
        career_life_coach: "Career Life Coach",
        gca: "Gca",
        addintional_staff_assignments: "Addintional Staff Assignments",
        transportaion: "Transportaion",
        alternate_id: "Alternate Id",
        emergency_contact_1_name: "Emergency Contact 1 name",
        emergency_contact_1_phone: "Emergency Contact 1 phone",
        emergency_contact_1_email: "Emergency contact 1 email",
        emergency_contact_1_relation: "Emergency Contact 1 relation",
        emergency_contact_2_name: "Emergency Contact 2 name",
        emergency_contact_2_phone: "Emergency Contact 2 phone",
        emergency_contact_2_email: "Emergency Contact 2 email",
        emergency_contact_2_relation: "Emergency Contact 2 relation",
        parole_officer_name: "Parole Officer name",
        parole_officer_email: "Parole Officer email",
        parole_officer_phone: "Parole Officer phone",
        allergies: "Allergies",
        last_date_onsite: "Last Date Onsite",
        next_date_scheduled: "Next Date Scheduled",
        last_date_online: "Last Date Online",
        current_courses: "Current Courses",
        time_online: "Time Online",
        course_progress: "Course Progress",
        target_date: "Target Date",
        courseware_log: "Courseware Log",
        post_grad_pathway: "Post Grad Pathway",
        total_credits: "Total Credits",
        course_name: "Course Name",
        credit_per_course: "Credit Per Course",
        completed_with: "Completed With",
        last_date_onsite: "Last Date Onsite",
        tier_level: "Tier Level",
        aa: "AA",
      },
    };
  },
  validations: {
    form: {
      code_word: {
        required,
      },
      district: {
        required,
      },
      site: {
        required,
      },
      date_enrolled: {
        required,
      },
      date_graduated: {
        required,
      },
      date_withdrawn: {
        required,
      },
      content_coach: {
        required,
      },
      career_life_coach: {
        required,
      },
      gca: {
        required,
      },
      addintional_staff_assignments: {
        required,
      },
      transportaion: {
        required,
      },
      alternate_id: {
        required,
      },
      emergency_contact_1_name: {
        required,
      },
      emergency_contact_1_phone: {
        required,
      },
      emergency_contact_1_email: {
        required,
      },
      emergency_contact_1_relation: {
        required,
      },
      emergency_contact_2_name: {
        required,
      },
      emergency_contact_2_phone: {
        required,
      },
      emergency_contact_2_email: {
        required,
      },
      emergency_contact_2_relation: {
        required,
      },
      parole_officer_name: {
        required,
      },
      parole_officer_email: {
        required,
      },
      parole_officer_phone: {
        required,
      },
      allergies: {
        required,
      },
      last_date_onsite: {
        required,
      },
      next_date_scheduled: {
        required,
      },
      last_date_online: {
        required,
      },
      current_courses: {
        required,
      },
      time_online: {
        required,
      },
      course_progress: {
        required,
      },
      target_date: {
        required,
      },
      courseware_log: {
        required,
      },
      post_grad_pathway: {
        required,
      },
      total_credits: {
        required,
      },
      course_name: {
        required,
      },
      credit_per_course: {
        required,
      },
      completed_with: {
        required,
      },
      last_date_onsite: {
        required,
      },
      tier_level: {
        required,
      },
      aa: {
        required,
      },
    },
  },
  mounted() {
    if (!this.$store.state.can_edit) {
      this.$router.push("/unauthorized");
    }
  },
  methods: {
    validateState(item) {
      const { $dirty, $error } = item;
      return $dirty ? !$error : null;
    },
    submit() {
      this.$v.form.$touch();
      if (this.$v.form.$anyError) return false;
      const payload = {
        type: "tenants",
        id: "6131e499-9358-4e4a-b54e-bab15211e59c",
        attributes: {
          config: {
            fields: [
              { base_name: "Code Word", custom_name: this.form.code_word },
              { base_name: "District", custom_name: this.form.district },
              { base_name: "Site", custom_name: this.form.site },
              {
                base_name: "Date Enrolled",
                custom_name: this.form.date_enrolled,
              },
              {
                base_name: "Date Graduated",
                custom_name: this.form.date_graduated,
              },
              {
                base_name: "Date Withdrawn",
                custom_name: this.form.date_withdrawn,
              },
              {
                base_name: "Teacher (Content Coach)",
                custom_name: this.form.content_coach,
              },
              {
                base_name: "Counselor (Career Life Coach)",
                custom_name: this.form.career_life_coach,
              },
              {
                base_name: "Para-Professional (GCA)",
                custom_name: this.form.gca,
              },
              {
                base_name: "Additional Staff Assignment(s)",
                custom_name: this.form.addintional_staff_assignments,
              },
              {
                base_name: "Transportation",
                custom_name: this.form.transportaion,
              },
              {
                base_name: "Alternate ID",
                custom_name: this.form.alternate_id,
              },
              {
                base_name: "Emergency Contact 1 - Name",
                custom_name: this.form.emergency_contact_1_name,
              },
              {
                base_name: "Emergency Contact 1 - Phone 1",
                custom_name: this.form.emergency_contact_1_phone,
              },
              {
                base_name: "Emergency Contact 1 - Phone 2",
                custom_name: "Emergency Contact 1 - Phone 2",
              },
              {
                base_name: "Emergency Contact 1 - Email",
                custom_name: this.form.emergency_contact_1_email,
              },
              {
                base_name: "Emergency Contact 1 - Relationship",
                custom_name: this.form.emergency_contact_1_relation,
              },
              {
                base_name: "Emergency Contact 2 - Name",
                custom_name: this.form.emergency_contact_2_name,
              },
              {
                base_name: "Emergency Contact 2 - Phone 1",
                custom_name: this.form.emergency_contact_2_phone,
              },
              {
                base_name: "Emergency Contact 2 - Phone 2",
                custom_name: "Emergency Contact 2 - Phone 2",
              },
              {
                base_name: "Emergency Contact 2 - Email",
                custom_name: this.form.emergency_contact_2_email,
              },
              {
                base_name: "Emergency Contact 2 - Relationship",
                custom_name: this.form.emergency_contact_2_relation,
              },
              {
                base_name: "Parole Officer Name",
                custom_name: this.form.parole_officer_name,
              },
              {
                base_name: "Parole Officer Phone",
                custom_name: this.form.parole_officer_phone,
              },
              {
                base_name: "Parole Officer Email",
                custom_name: this.form.parole_officer_email,
              },
              { base_name: "Allergies", custom_name: this.form.allergies },
              {
                base_name: "Last Date Onsite",
                custom_name: this.form.last_date_onsite,
              },
              {
                base_name: "Next Date Scheduled",
                custom_name: this.form.next_date_scheduled,
              },
              {
                base_name: "Last Date Online",
                custom_name: this.form.last_date_online,
              },
              {
                base_name: "Current Course",
                custom_name: this.form.current_courses,
              },
              { base_name: "Time Online", custom_name: this.form.time_online },
              {
                base_name: "Course Progress",
                custom_name: this.form.course_progress,
              },
              { base_name: "Target Date", custom_name: this.form.target_date },
              {
                base_name: "Courseware Log",
                custom_name: this.form.courseware_log,
              },
              {
                base_name: "Post Grad Pathway",
                custom_name: this.form.post_grad_pathway,
              },
              {
                base_name: "Total Credits",
                custom_name: this.form.total_credits,
              },
              {
                base_name: "Course Name(s)",
                custom_name: this.form.course_name,
              },
              {
                base_name: "Credit per Course",
                custom_name: this.form.credit_per_course,
              },
              {
                base_name: "Completed With",
                custom_name: this.form.completed_with,
              },
              {
                base_name: "Last Date Onsite",
                custom_name: this.form.last_date_onsite,
              },
              {
                base_name: "Next Date Scheduled",
                custom_name: this.form.next_date_scheduled,
              },
              { base_name: "Tier Level", custom_name: this.form.tier_level },
              { base_name: "AA", custom_name: this.form.aa },
            ],
            pick_lists: {
              has_device: ["Value 1", "Value 2"],
              has_wifi: ["Value 1", "Value 2"],
              special_programs: ["Special Program 1", "Special Program 1"],
              note_statuses: ["Status 1", "Status 2"],
              tier_levels: [
                {
                  from: 0,
                  to: 5,
                  level: 1,
                },
                {
                  from: 6,
                  to: 10,
                  level: 2,
                },
              ],
              emergency_contact_relations: ["Parent", "Legal Guardian"],
              allergies: ["Allergy 1", "Allergy 2"],
              diseases: ["Disease 1", "Disease 2"],
              post_grad_pathways: ["Pathway 1", "Pathway 2"],
              hear_about: ["Option 1", "Option 2"],
              completed_with: ["Option 1", "Option 2"],
            },
          },
        },
      };
    },
  },
};
</script>