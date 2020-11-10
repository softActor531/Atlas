<template>
  <b-card class="student-setup-card">
    <b-card-text class="text-uppercase">
      Requirments
      <code>*</code>
    </b-card-text>
    <div>
      <b-row>
        <b-col md="4" sm="12">
          <VInputGroup
            label="GC First Name"
            id="first_name"
            type="text"
            :value="first_name"
            :v="v['first_name']"
            @first_nameChanged="
              handleChange('requirements', 'first_name', $event)
            "
            required
          />
        </b-col>
        <b-col md="4" sm="12">
          <VInputGroup
            label="GC Middle Name"
            id="middle_name"
            type="text"
            :value="middle_name"
            :v="v['middle_name']"
            @middle_nameChanged="
              handleChange('requirements', `middle_name`, $event)
            "
          />
        </b-col>
        <b-col md="4" sm="12">
          <VInputGroup
            label="GC Last Name"
            id="last_name"
            type="text"
            :value="last_name"
            :v="v['last_name']"
            @last_nameChanged="
              handleChange('requirements', `last_name`, $event)
            "
            required
          />
        </b-col>
      </b-row>
      <b-row>
        <b-col md="4" sm="12">
          <VSelectGroup
            label="Phase"
            id="phase"
            placeholder="Choose Phase"
            :options="phases"
            :selected="phase"
            :v="v['phase']"
            @phaseChanged="phaseChanged($event)"
            required
          />
        </b-col>
        <b-col md="4" sm="12">
          <VSelectGroup
            label="Status"
            id="status"
            placeholder="Choose Status"
            :options="statuses"
            :selected="status"
            :v="v['status']"
            @statusChanged="handleChange('requirements', `status`, $event)"
            required
          />
        </b-col>
        <b-col md="4" sm="12">
          <VInputGroup
            label="District ID"
            id="district_id"
            type="text"
            :value="district_id"
            :v="v['district_id']"
            @district_idChanged="
              handleChange('requirements', 'district_id', $event)
            "
          />
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-form-group label="G.C. Image" label-for="file-uploader">
            <b-form-file
              id="file-uploader"
              v-model="gcImage"
              accept="image/x-png,image/gif,image/jpeg"
              placeholder="Choose a file..."
              drop-placeholder="Drop file here..."
              @input="handleChange('requirements', 'gcImage', $event)"
            ></b-form-file>
          </b-form-group>
        </b-col>
      </b-row>
    </div>
  </b-card>
</template>

<style scoped>
.custom-file-input {
  z-index: 9999 !important;
}
</style>

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
    phases: Array,
    form: Object,
    v: Object,
  },

  data() {
    return {
      ...this.form,
      statuses: [],
    };
  },
  async mounted() {
    if (this.form.phase) {
      this.statuses = await this.$api.getStatusesByPhase(
        this.form.phase,
        this.$store.state.token,
        this.$store.state.tenant_id
      );
    }
  },
  methods: {
    async phaseChanged($event) {
      this.handleChange("requirements", `phase`, $event);
      this.statuses = await this.$api.getStatusesByPhase(
        $event,
        this.$store.state.token,
        this.$store.state.tenant_id
      );
    },
  },
};
</script>


