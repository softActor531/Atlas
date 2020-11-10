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
          >
            <template v-slot:label>
              BirthDate
              <span class="text-danger">*</span>
            </template>
            <DatePicker
              id="birthdate"
              required
              v-model="birthdate"
              @input="handleDatePicker"
            />
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
            label="Primary Language"
            id="primary_language"
            placeholder="Choose Primary Language"
            :options="primaryLanguages"
            :selected="primary_language"
            :v="v['primary_language']"
            @primary_languageChanged="
              handleChange('eeocInfo', 'primary_language', $event)
            "
            required
          />
        </b-col>
      </b-row>
    </div>
  </b-card>
</template>

<script>
import VInputGroup from "@/components/UI/VInputGroup";
import VSelectGroup from "@/components/UI/VSelectGroup";
import DatePicker from "v-calendar/lib/components/date-picker.umd";
import { ValidateInputMixin } from "@/mixin/validateInput";

export default {
  mixins: [ValidateInputMixin],
  components: {
    VInputGroup,
    VSelectGroup,
    DatePicker,
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
      ...this.form,
    };
  },

  methods: {
    handleDatePicker: function ($event) {
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
