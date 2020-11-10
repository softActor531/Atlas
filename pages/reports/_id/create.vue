<template>
  <div>
    <b-form @submit.stop.prevent="onSubmit">
      <h1>Create {{ reports[id] }}</h1>
      <b-button
        pill
        type="button"
        variant="success"
        @click="goDownloadPage"
      >
        <i class="fas fa-eye fa-sm" />
        View {{ reports[id] }}
      </b-button>
      <h3 class="mb-2">Options</h3>
      <default-report
        v-if="defaults.includes(id)"
        :districts="districts"
        :id="id"
        :form="defaultForm"
        :v="$v.defaultForm"
        @handleChange="handleChange"
      />
      <other-report
        v-if="others.includes(id)"
        :districts="districts"
        :phases="phases"
        :statuses="statuses"
        :id="id"
        :form="otherForm"
        :v="$v.otherForm"
        @handleChange="handleChange"
      />
      <div class="mb-3">
        <v-md-date-range-picker
          :autoApply="false"
          show-year-select
          @change="onChange"
        >
        </v-md-date-range-picker>
      </div>
      <b-button type="submit" variant="success">
        Generate {{ reports[id] }}
      </b-button>
    </b-form>
  </div>
</template>

<script>
import DefaultReport from "@/components/report/DefaultReport";
import OtherReport from "@/components/report/OtherReport";
import VMdDateRangePicker from "v-md-date-range-picker";
import moment from "moment";
import { REPORTS_NAME } from "@/store/constants/defaultValues";
import { validationMixin } from "vuelidate";
import {
  required,
  email,
  numeric,
  minLength,
  maxLength,
  helpers
} from "vuelidate/lib/validators";
import Api from "@/services/api/Api.js";

export default {
  mixins: [validationMixin],
  components: {
    DefaultReport,
    OtherReport
  },
  async asyncData(context) {
    const api = new Api(context);
    const districts = await api.getDistricts();
    const phases = await api.getPhases();
    const statuses = await api.getStatuses();
    return {
      api,
      districts,
      phases,
      statuses,
    }
  },
  data: () => ({
    startDate: moment(new Date()).format("YYYY-MM-DD"),
    endDate: moment(new Date()).format("YYYY-MM-DD"),
    reports: REPORTS_NAME,
    id: "",
    defaultForm: {
      district: null,
    },
    otherForm: {
      district: null,
      site: null,
      phase: null,
      status: null,
    },
    defaults: [
      "contact-report",
      "referred-report",
      "student-info-report",
      "user-permission-report",
      "engagement-report",
    ],
    others: [
      "case-management-report",
      "note-report",
      "gc-navigator-points-report",
      "gc-navigator-redemption-report",
      "gc-navigator-report",
      "academic-progress-report",
    ]
  }),
  validations: {
    defaultForm: {
    },
    otherForm: {
      district: { required },
      site: { required },
      phase: { required },
      status: { required }
    }
  },
  methods: {
    onChange(value) {
      this.startDate = moment(value[0]).format("YYYY-MM-DD");
      this.endDate = moment(value[1]).format("YYYY-MM-DD");
    },

    handleChange(data) {
      const { parent, variable_name, event } = data;
      if (parent === "default") {
        this.defaultForm[variable_name] = event;
      } else {
        this.otherForm[variable_name] = event;
      }
    },

    onSubmit: async function() {
      if (this.defaults.includes(this.id)) {
        this.$v.defaultForm.$touch();

        if (this.$v.defaultForm.$anyError) {
          return;
        } else {
          const payload = {
            "type": "reports",
            "attributes": {
              "district": this.defaultForm.district,
              "range": {
                "from": this.startDate,
                "to": this.endDate
              }
            },
            "relationships": {
              "report_type": {
                "data": {"type": "report-types", "id": this.id}
              }
            }
          };

          this.api
            .createReports(payload)
            .then(data => {
              this.$router.push({ name: 'reports-type', params: { type: this.id } })
            })
            .catch(error => {
              console.log(error);
            });
        }
      } else if (this.others.includes(this.id)) {
        if (this.$v.otherForm.$anyError) {
          return;
        } else {
          const start = this.startDate.split("-");
          const end = this.endDate.split("-");

          const payload = {
            "type": "reports",
            "attributes": {
              "district": this.otherForm.district,
              "phase": this.otherForm.phase,
              "status": this.otherForm.status,
              "site": this.otherForm.site,
              "range": {
                "from": {
                  "day": start[2],
                  "month": start[1],
                  "year": start[0] 
                },
                "to": {
                  "day": end[2],
                  "month": end[1],
                  "year": end[0]
                }
              }
            },
            "relationships": {
              "report_type": {
                "data": {"type": "report-types", "id": this.id}
              }
            }
          };

          this.api
            .createReports(payload)
            .then(data => {
              this.$router.push({ name: 'reports-type', params: { type: this.id } })
            })
            .catch(error => {
              console.log(error);
            });
        }
      }
    },

    goDownloadPage() {
      this.$router.push({ name: 'reports-type', params: { type: this.id } })
    }
  },

  created() {
    this.id = this.$router.history.current.params.id;
  }
};
</script>
