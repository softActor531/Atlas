<template>
  <b-card class="student-setup-card">
    <b-card-text class="text-uppercase">
      Requirements
      <code>*</code>
    </b-card-text>
    <div>
      <b-row>
        <b-col md="4" sm="12">
          <VInputGroup
            id="first_name"
            label="GC First Name"
            type="text"
            :value="first_name"
            :v="v['first_name']"
            required
            @first_nameChanged="
              handleChange('requirements', 'first_name', $event)
            "
          />
        </b-col>
        <b-col md="4" sm="12">
          <VInputGroup
            id="middle_name"
            label="GC Middle Name"
            type="text"
            :value="middle_name"
            :v="v['middle_name']"
            required
            @middle_nameChanged="
              handleChange('requirements', `middle_name`, $event)
            "
          />
        </b-col>
        <b-col md="4" sm="12">
          <VInputGroup
            id="last_name"
            label="GC Last Name"
            type="text"
            :value="last_name"
            :v="v['last_name']"
            required
            @last_nameChanged="
              handleChange('requirements', `last_name`, $event)
            "
          />
        </b-col>
      </b-row>
      <b-row>
        <b-col md="6" sm="12">
          <VSelectGroup
            id="district"
            :label="district_label"
            :placeholder="`Choose ${district_label}`"
            :options="districts"
            :selected="district"
            :v="v['district']"
            required
            @districtChanged="onDistrictChanged($event)"
          />
        </b-col>
        <b-col md="6" sm="12">
          <VSelectGroup
            id="site"
            :label="site_label"
            :placeholder="`Choose ${site_label}`"
            :options="sites"
            :selected="site"
            :v="v['site']"
            required
            @siteChanged="handleChange('requirements', 'site', $event)"
          />
        </b-col>
      </b-row>
      <b-row>
        <b-col md="6" sm="12">
          <VInputGroup
            id="district_id"
            label="District ID"
            type="text"
            :value="district_id"
            :v="v['district_id']"
            required
            @district_idChanged="
              handleChange('requirements', 'district_id', $event)
            "
          />
        </b-col>
        <b-col md="6" sm="12">
          <VInputGroup
            id="academy_id"
            label="Academy ID"
            type="text"
            :value="academy_id"
            :v="v['academy_id']"
            required
            @academy_idChanged="
              handleChange('requirements', 'academy_id', $event)
            "
          />
        </b-col>
      </b-row>
      <b-row>
        <b-col md="4" sm="12">
          <VSelectGroup
            id="phase"
            label="Phase"
            placeholder="Choose Phase"
            :options="phases"
            :selected="phase"
            :v="v['phase']"
            required
            @phaseChanged="phaseChanged($event)"
          />
        </b-col>
        <b-col md="4" sm="12">
          <VSelectGroup
            id="status"
            label="Status"
            placeholder="Choose Status"
            :options="statuses"
            :selected="status"
            :v="v['status']"
            required
            @statusChanged="handleChange('requirements', `status`, $event)"
          />
        </b-col>
        <b-col md="4" sm="12">
          <VSelectGroup
            id="priority"
            label="Priority"
            placeholder="Choose Priority"
            :options="priorities"
            :selected="priority"
            :v="v['priority']"
            required
            @priorityChanged="handleChange('requirements', `priority`, $event)"
          />
        </b-col>
      </b-row>
      <b-row>
        <b-col md="6" sm="12">
          <VSelectGroup
            id="student_referred"
            label="How did you find out about Acceleration Academies?"
            :options="options"
            :selected="student_referred"
            :v="v['student_referred']"
            @student_referredChanged="
              handleChange('requirements', 'student_referred', $event)
            "
            required
          />
          <b-form-input
            id="student_referred_input"
            v-model="student_referred_input"
            placeholder="If Other, Please input how you found out about us."
            style="margin-bottom: 1rem; margin-top: -1rem;"
            @input="
              handleChange('requirements', 'student_referred_input', $event)
            "
          />
        </b-col>
        <b-col md="6" sm="12">
          <VInputGroup
            id="referralName"
            label="Name of person who referred you:"
            type="text"
            :value="referralName"
            :v="v['referralName']"
            required
            @referralNameChanged="
              handleChange('requirements', 'referralName', $event)
            "
          />
        </b-col>
      </b-row>
    </div>
  </b-card>
</template>

<script>
import VInputGroup from "../../UI/VInputGroup";
import VSelectGroup from "../../UI/VSelectGroup";
import { ValidateInputMixin } from "../../../mixin/validateInput";

export default {
  components: {
    VInputGroup,
    VSelectGroup
  },
  mixins: [ValidateInputMixin],

  props: {
    phases: Array,
    districts: Array,
    sites: Array,
    statuses: Array,
    priorities: Array,
    form: Object,
    v: Object
  },

  data() {
    return {
      ...this.form,
      district_label: this.$store.state.fields.length > 0 ? this.$store.state.fields.find((element) => {
        return element.base_name == "District";
      }).custom_name : "District",
      site_label: this.$store.state.fields.length > 0 ? this.$store.state.fields.find((element) => {
        return element.base_name == "Site";
      }).custom_name : "Site",
      statuses: [],
      sites: [],
      options: [
        { value: null, text: "-- Choose An Option --" },
        {
          label: "Call",
          options: [{ value: "Call/Text", text: "Call/Text" }]
        },
        {
          label: "Digital Ad/Online",
          options: [
            { value: "Email Campaign", text: "Email Campaign" },
            { value: "Facebook", text: "Facebook" },
            { value: "Instagram", text: "Instagram" },
            { value: "Internet/Google", text: "Internet/Google" },
            { value: "Radio", text: "Radio" },
            { value: "Snapchat", text: "Snapchat" },
            { value: "Spotify", text: "Spotify" },
            { value: "TV", text: "TV" },
            { value: "Twitter", text: "Twitter" },
            { value: "YouTube", text: "YouTube" }
          ]
        },
        {
          label: "Home Visit",
          options: []
        },
        {
          label: "Local Event",
          options: [
            { value: "Community Event", text: "Community Event" },
            { value: "Mall", text: "Mall" },
            { value: "Movie Theater", text: "Movie Theater" },
            { value: "Parade", text: "Parade" }
          ]
        },
        {
          label: "Other",
          options: []
        },
        {
          label: "Print Ad",
          options: [
            { value: "Billboard", text: "Billboard" },
            { value: "Bus Ad", text: "Bus Ad" },
            { value: "Door Hanger", text: "Door Hanger" },
            { value: "Flyer", text: "Flyer" },
            { value: "Newspaper", text: "Newspaper" },
            { value: "Postcard/Letter", text: "Postcard/Letter" }
          ]
        },
        {
          label: "Referral",
          options: [
            { value: "AA Staff", text: "AA Staff" },
            {
              value: "Case Manager/Probation Officer/DJJ",
              text: "Case Manager/Probation Officer/DJJ"
            },
            { value: "District Staff/AO", text: "District Staff/AO" },
            { value: "Family/Friend", text: "Family/Friend" }
          ]
        }
      ]
    };
  },
  async mounted() {
    if (this.form.district) {
      this.sites = await this.$api.getSitesByDistrict(this.form.district);
    }
    if (this.form.phase) {
      this.statuses = await this.$api.getStatusesByPhase(this.form.phase);
    }
  },
  methods: {
    async phaseChanged($event) {
      this.handleChange("requirements", "phase", $event);
      this.statuses = await this.$api.getStatusesByPhase($event);
    },
    async onDistrictChanged($event) {
      this.handleChange("requirements", "district", $event);
      this.sites = await this.$api.getSitesByDistrict($event);
    }
  }
};
</script>
