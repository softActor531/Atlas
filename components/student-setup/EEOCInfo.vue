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
            invalid-feedback="This field is required. "
            :state="validateState"
          >
            <template v-slot:label>
              BirthDate
              <span class="text-danger">*</span>
            </template>
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
        <b-col md="6" sm="12">
          <VSelectGroup
            label="Gender"
            id="gender"
            placeholder="Choose Gender"
            :options="genders"
            :selected="gender"
            :v="v['gender']"
            @genderChanged="handleChange('eeocInfo', 'gender', $event)"
            required
          />
        </b-col>
      </b-row>
      <b-row>
        <b-col md="6" sm="12">
          <VSelectGroup
            label="Race"
            id="race"
            placeholder="Choose Race"
            :options="races"
            :selected="race"
            :v="v['race']"
            @raceChanged="handleChange('eeocInfo', 'race', $event)"
            required
          />
        </b-col>
        <b-col md="6" sm="12">
          <VSelectGroup
            @primary_languageChanged="
              handleChange('eeocInfo', 'primary_language', $event)
            "
            label="Primary Language"
            id="primary_language"
            placeholder="Choose Primary Language"
            :options="primaryLanguages"
            :selected="primary_language"
            :v="v['primary_language']"
            required
          />
        </b-col>
      </b-row>
    </div>
  </b-card>
</template>

<script>
import VInputGroup from "../UI/VInputGroup";
import VSelectGroup from "../UI/VSelectGroup";
import { ValidateInputMixin } from "../../mixin/validateInput";
import { renderMicroColGroup } from "@fullcalendar/vue";
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
    genders: Array,
    primaryLanguages: Array,
    races: Array,
    form: Object,
    v: Object,
  },

  data() {
    return {
      birthdateUTC: null,
      ...this.form,
      config: {
        dateFormat: "d/m/Y",
      },
    };
  },

  methods: {
    handleDatePicker($event) {
      if (this.birthdateUTC) {
        this.birthdate = this.birthdateUTC.toISOString().substring(0, 10);
        this.birthdate = this.birthdate.split("-");
        this.birthdate =
          this.birthdate[1] +
          "-" +
          this.birthdateUTC.getDate() +
          "-" +
          this.birthdate[0];
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
    errorMessage() {
      if (!this.birthdateUTC) return "Date is required.";
      return "";
    },
  },
};
</script>
