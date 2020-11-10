<template>
  <b-card class="student-setup-card">
    <b-card-text class="text-uppercase">PAST SCHOOL INFO</b-card-text>
    <div>
      <b-row>
        <b-col md="4" sm="12">
          <VSelectGroup
            label="Cohort Year"
            id="cohort_year"
            placeholder="Choose Cohort Year"
            :options="cohortYears"
            :selected="cohort_year"
            :v="v['cohort_year']"
            @cohort_yearChanged="
              handleChange('pastSchoolInfo', 'cohort_year', $event)
            "
            required
          />
        </b-col>
        <b-col md="4" sm="12">
          <VSelectGroup
            label="Grade Level"
            id="grade_level"
            placeholder="Choose Grade Level"
            :options="gradeLevels"
            :selected="grade_level"
            :v="v['grade_level']"
            @grade_levelChanged="
              handleChange('pastSchoolInfo', 'grade_level', $event)
            "
            required
          />
        </b-col>
        <b-col md="4" sm="12">
          <VInputGroup
            label="Past school attended"
            id="past_school"
            type="text"
            :value="past_school"
            :v="v['past_school']"
            @past_schoolChanged="
              handleChange('pastSchoolInfo', 'past_school', $event)
            "
            required
          />
        </b-col>
      </b-row>
      <b-row>
        <b-col md="6" sm="12">
          <VInputGroup
            label="Withdrawal Code"
            id="withdrawal_code"
            type="text"
            :value="withdrawal_code"
            :v="v['withdrawal_code']"
            @withdrawal_codeChanged="
              handleChange('pastSchoolInfo', 'withdrawal_code', $event)
            "
            required
          />
        </b-col>
        <b-col md="6" sm="12">
          <b-form-group
            id="groupwithdrawal_date"
            label-for="withdrawal_date"
            :label="`customlabel`"
            invalid-feedback="This field is required."
          >
            <template v-slot:label>
              Withdrawl Date
              <span class="text-danger">*</span>
            </template>
            <!-- <b-form-datepicker
              id="withdrawal_date"
              v-model="withdrawal_date"
              class="mb-2"
              :state="validateState"
              @input="handleDatePicker"
            ></b-form-datepicker>-->
            <!-- <DatePicker
              v-model="withdrawal_date"
              @input="handleDatePicker"
              :state="validateState"
            /> -->
            <flat-pickr
              class="date-picker form-control flatpickr-input"
              v-model="withdrawal_date"
              :config="config"
              @change="inputChanged"
            ></flat-pickr>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="6" sm="12">
          <VSelectGroup
            label="Community Outreach Advocate"
            id="community_outreach_advocate"
            :options="communityAdvocates"
            :selected="community_outreach_advocate"
            placeholder="Choose Community Outreach Advocate"
            :v="v['community_outreach_advocate']"
            @community_outreach_advocateChanged="
              handleChange(
                'pastSchoolInfo',
                'community_outreach_advocate',
                $event
              )
            "
            required
          />
        </b-col>
        <b-col md="6" sm="12">
          <VSelectGroup
            label="Outreach Resource Advocate"
            id="outreach_resource_advocate"
            :options="advocates"
            :selected="outreach_resource_advocate"
            placeholder="Choose Outreach Resource Advocate"
            :v="v['outreach_resource_advocate']"
            @outreach_resource_advocateChanged="
              handleChange(
                'pastSchoolInfo',
                'outreach_resource_advocate',
                $event
              )
            "
            required
          />
        </b-col>
      </b-row>
    </div>
  </b-card>
</template>

<script>
import VInputGroup from "../../UI/VInputGroup";
import VSelectGroup from "../../UI/VSelectGroup";
import { ValidateInputMixin } from "../../../mixin/validateInput";
import flatPickr from "vue-flatpickr-component";

export default {
  mixins: [ValidateInputMixin],
  components: {
    VInputGroup,
    VSelectGroup
  },

  props: {
    cohortYears: Array,
    gradeLevels: Array,
    advocates: Array,
    communityAdvocates: Array,
    form: Object,
    v: Object
  },

  data() {
    return {
      ...this.form,
      config: {
        dateFormat: "d/m/Y"
      }
    };
  },
  methods: {
    handleDatePicker: function($event) {
      this.withdrawal_date = this.withdrawal_date
        .toISOString()
        .substring(0, 10);
      this.withdrawal_date = this.withdrawal_date
        .split("-")
        .reverse()
        .join("-");
      this.v && this.v["withdrawal_date"].$touch();
      this.handleChange("pastSchoolInfo", "withdrawal_date", $event);
    }
  },
  computed: {
    validateState() {
      if (this.v) {
        const { $dirty, $error } = this.v["withdrawal_date"];
        return $dirty ? !$error : null;
      }
    }
  },
  components: {
    flatPickr
  }
};
</script>
