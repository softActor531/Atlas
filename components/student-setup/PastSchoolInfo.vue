<template>
  <b-card class="student-setup-card">
    <b-card-text class="text-uppercase">PAST SCHOOL INFO</b-card-text>
    <div>
      <b-row>
        <b-col md="6" sm="12">
          <!-- <VSelectGroup
            label="Last year enrolled in school"
            id="last_year_enrolled"
            placeholder="Choose Last Year Enrolled"
            :options="lastYears"
            :selected="last_year_enrolled"
            :v="v['last_year_enrolled']"
            @last_year_enrolledChanged="
              handleChange('pastSchoolInfo', 'last_year_enrolled', $event)
            "
            required
          />-->

          <VSelectGroup
            label="Last year enrolled in school"
            id="last_year_enrolled"
            placeholder="Choose Cohort Year"
            :options="lastYears"
            :selected="last_year_enrolled"
            @last_year_enrolledChanged="
              handleChange('pastSchoolInfo', 'last_year_enrolled', $event)
            "
          />
        </b-col>
        <b-col md="6" sm="12">
          <VInputGroup
            label="Last school attended"
            id="last_school"
            type="text"
            :value="last_school"
            @last_schoolChanged="
              handleChange('pastSchoolInfo', 'last_school', $event)
            "
          />
        </b-col>
      </b-row>
      <b-row>
        <b-col md="6" sm="12">
          <VSelectGroup
            label="Last Grade Completed"
            id="last_grade_completed"
            :options="lastGrades"
            :selected="last_grade_completed"
            placeholder="Choose Last Grade Completed"
            @last_grade_completedChanged="
              handleChange('pastSchoolInfo', 'last_grade_completed', $event)
            "
          />
        </b-col>
        <b-col md="6" sm="12">
          <VInputGroup
            label="First date enrolled in A.A."
            id="enroll_date"
            type="text"
            :value="enroll_date"
            @enroll_dateChanged="
              handleChange('pastSchoolInfo', 'enroll_date', $event)
            "
          />
        </b-col>
      </b-row>
      <b-row>
        <b-col md="6" sm="12">
          <VSelectGroup
            label="Cohort Year"
            id="cohort_year"
            :options="cohortYears"
            :selected="cohort_year"
            placeholder="Choose Cohort Year"
            @cohort_yearChanged="
              handleChange('pastSchoolInfo', 'cohort_year', $event)
            "
          />
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-form-group label="Special Programs">
            <b-form-checkbox-group
              v-model="selectedPrograms"
              :options="options"
              name="flavour-1a"
              button-variant="success"
              @input="
                handleChange('pastSchoolInfo', 'selectedPrograms', $event)
              "
            ></b-form-checkbox-group>
          </b-form-group>
        </b-col>
      </b-row>
    </div>
  </b-card>
</template>

<script>
import VInputGroup from "../UI/VInputGroup";
import VSelectGroup from "../UI/VSelectGroup";
import { ValidateInputMixin } from "../../mixin/validateInput";

export default {
  mixins: [ValidateInputMixin],
  components: {
    VInputGroup,
    VSelectGroup,
  },

  props: {
    lastYears: Array,
    lastGrades: Array,
    cohortYears: Array,
    form: Object,
    v: Object,
  },
  async fetch() {
    await this.$axios
      .get("http://atlas-rebuild-api.mtcdevsite.com/api/v1/special-programs", {
        headers: {
          Accept: "application/vnd.api+json",
          "Content-Type": "application/vnd.api+json",
          "X-Tenant-Id": this.$store.state.tenant_id,
          Authorization: `Bearer ${this.$store.state.token}`,
        },
      })
      .then((res) => {
        this.options = res.data.data.map((item) => {
          return {
            text: item.attributes.value,
            value: item.id,
          };
        });
        console.log(this.options);
      })
      .catch((err) => console.log(err));
  },

  data() {
    return {
      ...this.form,
      selectedPrograms: [],
      options: [],
    };
  },
};
</script>
