<template>
  <b-card class="student-setup-card">
    <b-card-text class="text-uppercase">EEOC Information</b-card-text>
    <div>
      <b-row>
        <b-col md="6" sm="12">
          <b-form-group
            id="groupbirthate"
            label-for="birthdate"
            :label="`customlabel`"
            invalid-feedback="This field is required."
            :state="validateState"
          >
            <template v-slot:label>
              BirthDate
              <span class="text-danger">*</span>
            </template>
            <!-- <b-form-datepicker
              label="Date Of Birth"
              id="birthdate"
              v-model="birthdate"
              class="mb-2"
              :state="validateState"
              @input="handleDatePicker"
            ></b-form-datepicker>-->
            <DatePicker
              id="birthdate"
              required
              v-model="birthdateUTC"
              @input="handleDatePicker"
            />
            <p class="text-blue-500 text-xs font-bold mt-1" v-if="birthdateUTC">
              We got it. Thanks!
            </p>
          </b-form-group>
        </b-col>
      </b-row>
    </div>
  </b-card>
</template>

<script>
import VInputGroup from "../../UI/VInputGroup";
import VSelectGroup from "../../UI/VSelectGroup";
import { ValidateInputMixin } from "../../../mixin/validateInput";
import DatePicker from "v-calendar/lib/components/date-picker.umd";
import flatPickr from "vue-flatpickr-component";

export default {
  mixins: [ValidateInputMixin],
  components: {
    VInputGroup,
    VSelectGroup,
    DatePicker,
    flatPickr,
  },

  props: {
    form: Object,
    v: Object,
  },

  data() {
    return {
      birthdateUTC: null,
      ...this.form,
    };
  },

  methods: {
    handleDatePicker: function ($event) {
      if (this.birthdateUTC) {
        this.birthdate = this.birthdateUTC.toISOString().substring(0, 10);
        this.birthdate = this.birthdate.split("-");
        this.birthdate =
          this.birthdate[1] + "-" + this.birthdateUTC.getDate() + "-" + this.birthdate[0];

        console.log(this.birthdate);
      }
      this.v && this.v["birthdate"].$touch();
      this.handleChange("eeocInfo", "birthdate", $event);
    },
  },

  computed: {
    validateState() {
      if (this.v) {
        const { $dirty, $error } = this.v["birthdate"];
        return $dirty ? !$error : null;
      }
    },
  },
};
</script>
