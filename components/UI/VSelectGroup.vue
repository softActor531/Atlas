<template>
  <b-form-group
    :id="'group' + id"
    :label-for="id"
    :label="`customLabel`"
    :invalid-feedback="!validateState ? required_message : ''"
  >
    <template v-slot:label>
      {{ label }}
      <span v-if="required" class="text-danger">*</span>
    </template>
    <b-form-select
      :disabled="disabled"
      v-model="option"
      :options="list"
      :state="validateState"
      @input="handleSelect"
    />
  </b-form-group>
</template>

<script>
export default {
  props: {
    id: String,
    label: String,
    selected: String,
    options: Array,
    placeholder: String,
    required: Boolean,
    v: Object,
    valueField: String,
    textField: String,
    disabled: Boolean
  },

  data() {
    return {
      option: this.selected,
      required_message: "This field is required."
    };
  },

  computed: {
    list() {
      let option_array = [];
      if (this.placeholder) {
        option_array = [
          { value: null, text: this.placeholder },
          ...option_array
        ];
      }
      if (this.options) {
        let array = [];

        if (
          this.id === "graduate_candidate_advocate" ||
          this.id === "content_coach" ||
          this.id === "career_life_coach" ||
          this.id === "community_outreach_advocate" ||
          this.id === "outreach_resource_advocate"
        ) {
          array = this.options.map((option, i) => {
            return {
              ...option,
              value: option.id,
              text: option.first_name + " " + option.last_name
            };
          });
        } else if (this.id === "state" || this.id === "has_issues") {
          array = this.options.map(option => {
            return {
              value: option,
              text: option
            };
          });
        } else if (
          this.id === "student_referred" ||
          this.id === "workflow_exception" ||
          this.id.includes("normal")
        ) {
          array = [...this.options];
        } else if (
          this.id === "transportation" ||
          this.id === "tierSystem" ||
          this.id === "creditSystem" ||
          this.id === "planStatus"
        ) {
          array = this.options.map(element => {
            return {
              value: element.name,
              text: element.name
            };
          });
        } else {
          array = this.options.map((option, i) => {
            return {
              ...option,
              value: option.id,
              text: option.name
            };
          });
        }
        option_array = [...option_array, ...array];
      }
      return option_array;
    },

    validateState() {
      if (this.v) {
        const { $dirty, $error } = this.v;
        return $dirty ? !$error : null;
      }
    }
  },

  methods: {
    handleSelect(event) {
      if (this.v) {
        this.v.$touch();
      }

      this.$emit(`${this.id}Changed`, event);
    }
  }
};
</script>
