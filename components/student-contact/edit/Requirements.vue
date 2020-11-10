<template>
  <b-card class="student-setup-card">
    <b-card-text class="text-uppercase">
      requirements
      <code>*</code>
    </b-card-text>
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
          @last_nameChanged="handleChange('requirements', `last_name`, $event)"
        />
      </b-col>
      <b-col md="4" sm="12">
        <VInputGroup
          id="username"
          label="GC Username"
          type="text"
          :value="username"
          :v="v['username']"
          required
          @usernameChanged="handleChange('requirements', `username`, $event)"
        />
      </b-col>
      <b-col md="4" sm="12">
        <VInputGroup
          id="password"
          label="GC password"
          type="password"
          :value="password"
          :v="v['password']"
          required
          @passwordChanged="handleChange('requirements', `password`, $event)"
        />
      </b-col>
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
        <VInputGroup
          id="district_id"
          label="District ID"
          type="text"
          :value="district_id"
          :v="v['district_id']"
          @district_idChanged="
            handleChange('requirements', 'district_id', $event)
          "
          required
        />
      </b-col>

      <b-col md="4" sm="12">
        <VSelectGroup
          id="workflow_exception"
          label="workflow_exception"
          placeholder="Choose Workflow Exception"
          text-field="text"
          value-field="value"
          :options="[
            { value: 0, text: 'no' },
            { value: 1, text: 'yes' },
          ]"
          :selected="workflowException"
          :v="v['workflow_exception']"
          @workflow_exceptionChanged="
            handleChange('requirements', `status`, $event)
          "
        />
      </b-col>

      <!-- file -->
      <b-col>
        <b-form-group
          id="file-uploader"
          label="G.C. Image"
          label-for="file-uploader"
        >
          <b-form-file
            id="file-uploader"
            v-model="gcImage"
            accept="image/x-png,image/gif,image/jpeg"
            placeholder="Choose a file or drop it here..."
            drop-placeholder="Drop file here..."
            @input="handleChange('requirements', 'gcImage', $event)"
          ></b-form-file>
        </b-form-group>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import { ValidateInputMixin } from "~/mixin/validateInput";

export default {
  name: "requirements",

  mixins: [ValidateInputMixin],
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

<style lang="scss" scoped></style>
