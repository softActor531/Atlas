<template>
  <div class>
    <h1>Setup Tenant</h1>
    <div class="form-group col-xs-12 col-md-4 mb-3">
      <label for="scheduled-date" class="required bolder">Tenant Name:</label>
      <b-form-input
        id="input-9"
        v-model="form.name"
        type="text"
        :state="validateState($v.form.name)"
      ></b-form-input>
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
        value="Continue"
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
  mounted() {
    if (!this.$store.state.can_edit) {
      this.$router.push("/unauthorized");
    }
  },
  data() {
    return {
      form: {
        name: "",
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
      },
      level1Options: ["District", "Region", "Network", "School", "Site"],
      level2Options: ["Region", "Network", "School", "Site"],
      level3Options: ["School", "Site"],
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
      title: {
        required,
      },
      initial_role: {
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
    validateState(item) {
      const { $dirty, $error } = item;
      return $dirty ? !$error : null;
    },
    async submit() {
      this.$v.form.$touch();
      if (this.$v.form.$anyError) return false;
      const payload = {
        type: "tenants",
        attributes: {
          name: this.form.name,
          config: {
            site_settings: {
              attendance_swipe_points: this.form.attendance_swipe_points,
              badge_points: this.form.badge_points,
              email_reply: this.form.email_reply,
              google_analytic_tracking_id: this.form
                .google_analytic_tracking_id,
              points_to_dollars_factor: this.form.points_to_dollars_factor,
              progress_points: this.form.progress_points,
              referring_points: this.form.referring_points,
              site_description: this.form.site_description,
              site_name: this.form.site_name,
              valid_domains: this.form.valid_domains,
            },
            initial_user: {
              first_name: this.form.first_name,
              last_name: this.form.last_name,
              email: this.form.email,
              password: this.form.password,
              title: this.form.title,
              lookup_timezone_id: "1",
            },
            initial_role: this.form.initial_role,
          },
        },
      };
      this.$router.push("/tenant-setup/modules");
    },
  },
};
</script>