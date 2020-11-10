<template>
  <div>
    <b-row>
      <b-col md="4" sm="12">
        <VSelectGroup
          label="District"
          id="district"
          placeholder="All/Any Districts"
          :options="districts"
          :selected="district"
          :v="v['district']"
          @districtChanged="changeDistrict($event)"
          required
        />
      </b-col>
    </b-row>
    <b-row>
      <b-col md="4" sm="12">
        <VSelectGroup
          label="Site"
          id="site"
          placeholder="-- Choose Site --"
          :options="sites"
          :selected="site"
          :v="v['site']"
          @siteChanged="handleChange('other', 'site', $event)"
          required
        />
      </b-col>
    </b-row>
    <b-row>
      <b-col md="4" sm="12">
        <VSelectGroup
          label="Phase"
          id="phase"
          placeholder="-- Choose Phase --"
          :options="phases"
          :selected="phase"
          :v="v['phase']"
          @phaseChanged="handleChange('other', 'phase', $event)"
          required
        />
      </b-col>
    </b-row>
    <b-row class="mb-4">
      <b-col md="4" sm="12">
        <VSelectGroup
          label="Status"
          id="status"
          placeholder="-- Choose Status --"
          :options="statuses"
          :selected="status"
          :v="v['status']"
          @statusChanged="handleChange('other', 'status', $event)"
          required
        />
      </b-col>
    </b-row>
  </div>
</template>
<script>
import VSelectGroup from "@/components/UI/VSelectGroup";
import { ValidateInputMixin } from "@/mixin/validateInput"

export default {
  mixins: [ValidateInputMixin],
  components: {
    VSelectGroup
  },
  props: {
    form: Object,
    v: Object,
    districts: Array,
    phases: Array,
    statuses: Array,
  },
  async asyncData() {

  },
  data() {
    return {
      ...this.form,
      sites: [],
    }
  },
  methods: {
    changeDistrict(event) {
      this.handleChange('other', 'district', event)
      this.sites = this.districts.find(item => item.id === event).sites;
    },
  },
}
</script>