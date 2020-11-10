<template>
  <b-form-group
    :id="'group' + id"
    :label-for="id"
    :label="`customlabel`"
    :invalid-feedback="errorMessage"
  >
    <template v-slot:label>
      {{ label }} <span v-if="required" class="text-danger">*</span>
    </template>
    <b-form-timepicker
      :id="id"
      v-model="time"
      minutes-step="5"
      :state="validateState"
      @input="handleSelect"
    ></b-form-timepicker>
  </b-form-group>
</template>

<script>
export default {
  props: {
    id: String,
    label: String,
    required: Boolean,
    value: String,
    v: Object,
  },

  data() {
    return {
      time: this.value,
    }
  },

  computed: {
    validateState() {
      if (this.v) {
        const { $dirty, $error } = this.v;
        return $dirty ? !$error : null;
      }
    },

    errorMessage() {
      if (this.validateState) {
        return null;
      } else if (this.v) {
        return "Please select one."
      }
    }
  },

  methods: {
    handleSelect (event) {
      if (this.v) {
        this.v.$touch()
      }

      this.$emit(`${this.id}Changed`, event)
    }
  }
}
</script>