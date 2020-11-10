<template>
  <b-form-group
    :id="'group' + id"
    :label-for="id"
    :label="`customlabel`"
    :invalid-feedback="errorMessage"
  >
    <template v-slot:label>
      {{ label }}
      <span v-if="required" class="text-danger">*</span>
    </template>
    <!-- <b-form-datepicker :id="id" v-model="date" :state="validateState" @input="handleSelect"></b-form-datepicker> -->
    <flat-pickr
      class="date-picker form-control flatpickr-input"
      v-model="date"
      :config="config"
      :state="validateState"
      @change="inputChanged"
    ></flat-pickr>
  </b-form-group>
</template>

<script>
import flatPickr from "vue-flatpickr-component";

export default {
  props: {
    id: String,
    label: String,
    required: Boolean,
    value: String,
    v: Object
  },

  data() {
    return {
      date: this.value,
      config: {
        dateFormat: "d/m/Y"
      }
    };
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
        return "Please choose date.";
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
  },
  components: {
    flatPickr
  }
};
</script>