<template>
  <b-form-group
    :id="'group' + id"
    :label-for="id"
    :label="`customlabel`"
  >
    <template v-slot:label>
      {{ label }} <span v-if="required" class="text-danger">*</span>
    </template>
    <b-input-group>
      <b-form-input
        :id="id"
        v-model="text"
        :type="type"
        :state="validateState"
        @input="handleInputUpdate"
      ></b-form-input>
      <b-button variant="primary">
        <i class="fa fa-phone"></i>
      </b-button>
      <b-form-invalid-feedback>
        {{ errorMessage }}
      </b-form-invalid-feedback>
    </b-input-group>
  </b-form-group>
</template>

<script>
export default {
  props: {
    id: String,
    label: String,
    value: String,
    placeholder: String,
    type: String,
    required: Boolean,
    v: Object
  },

  data() {
    return {
      text: this.value,
      required_message: "This field is required.",
      email_message: "This email is invalid."
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
      } else {
        if (this.v && this.v.required === true && this.v.email === false) {
          return this.email_message;
        }
        return this.required_message;
      }
    }
  },

  methods: {
    handleInputUpdate: function(event) {
      if (this.v) {
        this.v.$touch()
      }
      
      this.$emit(`${this.id}Changed`, this.text);
    },
  }
}
</script>