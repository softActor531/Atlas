<template>
  <b-form-group
    :id="'group' + id"
    :label-for="id"
    :label="`customlabel`"
    :invalid-feedback="errorMessage + ''"
  >
    <template v-slot:label>
      {{ label }}
      <span v-if="required" class="text-danger">*</span>
    </template>
    <b-form-input
      :id="id"
      v-model="text"
      :type="type"
      :state="validateState"
      @change="handleInputUpdate"
      :disabled="disabled"
    />
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
    v: Object,
    disabled: Boolean
  },

  data() {
    return {
      text: this.value,
      required_message: "This field is required.",
      email_message: "This email is invalid."
    };
  },

  computed: {
    validateState() {
      if (this.v) {
        // console.log("validate state", this.v);
        const { $dirty, $error } = this.v;
        return $dirty ? !$error : null;
      }
      return 0;
    },

    errorMessage() {
      if (this.validateState) {
        return null;
      } else if (this.v) {
        if (this.v.required === true && this.v.email === false) {
          return this.email_message;
        } else if (this.v.numeric === false) {
          return "This must be numeric field.";
        } else if (this.v.integer === false) {
          return "This must be a positive integer";
        } else if (this.v.between === false) {
          return "This must be a positive integer";
        } else if (this.v.minLength === false) {
          return `This field must be ${this.v.$params.minLength.min} digits.`;
        } else if (this.v.maxLength === false) {
          return `This field cannot exceed ${this.v.$params.maxLength.max} characters`;
        } else if (this.v.alphaNum === false) {
          return "This field must be in alpha-numeric only (letters & numbers)";
        } else if (this.v.atLeast === false) {
          return "This field should be positive number";
        } else if (this.v.required === false) {
          return this.required_message
        } else if (this.v.alphaNumericWithSpace === false) {
          return 'this field should be alpha numeric'
        } else if (this.v.alphaWithSpecialCharacter === false) {
          return 'must have letters and special chars only (e.g. !@#$&()-`.+,/")'
        }
      }
      return 0;
    }
  },

  methods: {
    handleInputUpdate(event) {
      if (this.v) {
        this.v.$touch();
      }

      this.$emit(`${this.id}Changed`, this.text);
    }
  }
};
</script>
