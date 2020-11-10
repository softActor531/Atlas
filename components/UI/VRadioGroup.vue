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
    <b-form-radio-group
      :id="id"
      v-model="option"
      :options="options"
      :type="type"
      :state="validateState"
      @input="handleSelect"
    ></b-form-radio-group>
  </b-form-group>
</template>

<script>
export default {
  props: {
    id: String,
    label: String,
    selected: String,
    type: String,
    required: Boolean,
    v: Object,
    options: Array
  },

  data() {
    return {
      option: this.selected,
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