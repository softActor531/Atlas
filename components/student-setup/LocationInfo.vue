<template>
  <b-card class="student-setup-card">
    <b-card-text class="text-uppercase"
      >AA LOCATION & STAFF ASSIGNMENTS</b-card-text
    >
    <div>
      <b-row>
        <b-col md="6" sm="12">
          <VSelectGroup
            :label="district_label"
            id="district"
            :placeholder="`Choose ${district_label}`"
            :options="districts"
            :selected="district"
            :v="v['district']"
            @districtChanged="onDistrictChanged($event)"
            required
          />
        </b-col>
        <b-col md="6" sm="12">
          <VSelectGroup
            :label="site_label"
            id="site"
            :placeholder="`Choose ${site_label}`"
            :options="sites"
            :selected="site"
            :v="v['site']"
            @siteChanged="handleChange('locationInfo', 'site', $event)"
            required
          />
        </b-col>
      </b-row>
      <b-row>
        <b-col md="6" sm="12">
          <VSelectGroup
            :label="gca_label"
            id="graduate_candidate_advocate"
            :placeholder="`Choose ${gca_label}`"
            :options="advocates"
            :selected="graduate_candidate_advocate"
            @graduate_candidate_advocateChanged="
              handleChange(
                'locationInfo',
                'graduate_candidate_advocate',
                $event
              )
            "
          />
        </b-col>
        <b-col md="6" sm="12">
          <VSelectGroup
            :label="content_coach_label"
            id="content_coach"
            :placeholder="`Choose ${content_coach_label}`"
            :options="contentCoaches"
            :selected="content_coach"
            @content_coachChanged="
              handleChange('locationInfo', 'content_coach', $event)
            "
          />
        </b-col>
      </b-row>
      <b-row>
        <b-col md="6" sm="12">
          <VSelectGroup
            :label="career_life_coach_label"
            id="career_life_coach"
            :placeholder="`Choose ${career_life_coach_label}`"
            :options="lifeCoaches"
            :selected="career_life_coach"
            @career_life_coachChanged="
              handleChange('locationInfo', 'career_life_coach', $event)
            "
          />
        </b-col>
        <b-col md="6" sm="12">
          <VSelectGroup
            :label="transportation_label"
            id="transportation"
            :placeholder="`Choose ${transportation_label}`"
            :options="transportations"
            :selected="transportation"
            @transportationChanged="
              handleChange('locationInfo', 'transportation', $event)
            "
          />
        </b-col>
      </b-row>
    </div>
  </b-card>
</template>

<script>
import VInputGroup from "../UI/VInputGroup";
import VSelectGroup from "../UI/VSelectGroup";
import { ValidateInputMixin } from "../../mixin/validateInput";

export default {
  mixins: [ValidateInputMixin],
  components: {
    VInputGroup,
    VSelectGroup,
  },

  props: {
    districts: Array,
    advocates: Array,
    contentCoaches: Array,
    lifeCoaches: Array,
    transportations: Array,
    form: Object,
    v: Object,
  },

  data() {
    return {
      ...this.form,
      sites: [],

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

      transportation_label:
        this.$store.state.fields.length > 0
          ? this.$store.state.fields.find((element) => {
              return element.base_name == "Transportation";
            }).custom_name
          : "Transportation",
    };
  },
  async mounted() {
    if (this.form.district) {
      this.sites = await this.$api.getSitesByDistrict(
        this.form.district,
        this.$store.state.token,
        this.$store.state.tenant_id
      );
    }
  },
  methods: {
    async onDistrictChanged($event) {
      console.log($event);
      this.handleChange("locationInfo", "district", $event);
      this.sites = await this.$api.getSitesByDistrict(
        $event,
        this.$store.state.token,
        this.$store.state.tenant_id
      );
    },
  },
};
</script>
