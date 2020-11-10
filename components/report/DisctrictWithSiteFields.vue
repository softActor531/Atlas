<template>
  <div>
    <div class="district fields width-100">
      <div class="form-group col-xs-12 col-md-6 mb-3">
        <label class="required">District <code v-if="important">*</code></label>
        <select
          v-model="districtSelected"
          @change="onChangeDistrict($event)"
          class="form-control custom-select"
          :required="important"
        >
          <option value="" disabled>Choose District</option>
          <option
            v-for="district in districts"
            :key="district.id"
            :value="district.name"
          >
            {{ district.name }}
          </option>
        </select>
      </div>

      <div class="form-group col-xs-12 col-md-6 mb-3">
        <label class="">Site <code v-if="important">*</code></label>
        <select
          v-model="siteSelected"
          :required="important"
          class="form-control custom-select"
        >
          <option value="" disabled>Choose Site</option>
          <option
            v-for="site in sitesFromDistricts"
            :key="site.id"
            :value="site.name"
          >
            {{ site.name }}
          </option>
        </select>
      </div>
    </div>
    <div class="site">
      <div class="form-group col-xs-12 col-md-6 mb-3">
        <label class="">Site <code v-if="important">*</code></label>
        <select
          v-model="siteSelected"
          :required="important"
          class="form-control custom-select"
        >
          <option value="" disabled>Choose Site</option>
          <option
            v-for="site in sites"
            :key="site.id"
            :value="site.name"
          >
            {{ site.name }}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
const DISTRICT_ENDPOINT =
  "http://atlas-rebuild-api.mtcdevsite.com/api/v1/districts?include=sites";
const SITE_ENDPINT = "http://atlas-rebuild-api.mtcdevsite.com/api/v1/sites";
import DatePicker from "../UI/DatePicker";

export default {
  name: "disctrict-with-site-fields",
  props: ["important", "isSite", "isDistrict", "isDistrictWithSite"],
  components: {
    DatePicker
  },
  data: () => ({
    districts: [],
    sitesFromDistricts: [],
    sites: [],
    districtSelected: "",
    siteSelected: "",
  }),
  methods: {
    onChangeDistrict(event) {
      this.districts.forEach(value => {
        if (value.name === this.districtSelected) {
          this.sitesFromDistricts = value.sites;
        }
      });
    },
    async getDistrictWithSite() {
      const res = await this.$axios.get(`${DISTRICT_ENDPOINT}`, {
        headers: {
          Accept: "application/vnd.api+json",
          "Content-Type": "application/vnd.api+json"
        }
      });

      this.districts = this.$formatter.deserialize(res.data);
      this.sitesFromDistricts = this.districts[0].sites;
    },
    async getAllSites() {
      const res = await this.$axios.get(`${SITE_ENDPINT}`, {
        headers: {
          Accept: "application/vnd.api+json",
          "Content-Type": "application/vnd.api+json"
        }
      });

      this.sites = this.$formatter.deserialize(res.data);
    }
  },
  async mounted() {
    await Promise.all([this.getDistrictWithSite()]);
  }
};
</script>
