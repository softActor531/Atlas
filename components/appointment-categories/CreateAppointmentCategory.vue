<template>
  <div class="card">
    <div class="card-body">
      <h4 class="mb-3 header-title">
        <i class="mdi mdi-square-edit-outline" />
        Create Appointment Category
      </h4>
      <b-form @submit.stop.prevent="onSubmit">
        <b-row>
          <b-col lg="3" md="6">
            <VSelectGroup
              label="Sites"
              id="site_normal"
              :options="sites"
              :selected="form.site"
              :v="$v.form.site"
              placeholder="-- Select Site --"
              @site_normalChanged="handleChange('site', $event)"
              required
            />
          </b-col>
          <b-col lg="3" md="6">
            <VInputGroup
              label="Name"
              id="name"
              type="text"
              :value="form.name"
              :v="$v.form.name"
              @nameChanged="handleChange('name', $event)"
              required
            />
          </b-col>
          <b-col lg="3" md="6">
            <VSelectGroup
              label="Status"
              id="status_normal"
              :options="statuses"
              :selected="form.status"
              :v="$v.form.status"
              placeholder="-- Select Status --"
              @status_normalChanged="handleChange('status', $event)"
              required
            />
          </b-col>
          <b-col lg="3" md="6">
            <VRadioGroup
              label="GC Can Select?"
              id="gc_select"
              :options="gc_selects"
              :selected="form.gc_select"
              :v="$v.form.gc_select"
              @gc_selectChanged="handleChange('gc_select', $event)"
              required
            />
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <VRadioGroup
              label="Duration"
              id="duration"
              :options="durations"
              :selected="form.duration"
              :v="$v.form.duration"
              @durationChanged="handleChange('duration', $event)"
              required
            />
          </b-col>
        </b-row>
        <b-row v-if="form.duration === 'in-minutes'">
          <b-col md="4" sm="6">
            <VInputGroup
              label="Minutes"
              id="minute"
              type="text"
              :value="form.minute"
              :v="$v.form.minute"
              @minuteChanged="handleChange('minute', $event)"
              required
            />
          </b-col>
        </b-row>
        <b-row v-if="form.duration === 'set-time' || form.duration === 'recurring'">
          <b-col md="4" sm="6" v-if="form.duration === 'recurring'">
            <VSelectGroup
              label="Day"
              id="day_normal"
              :options="days"
              :selected="form.day"
              :v="$v.form.day"
              placeholder="-- Select Day --"
              @day_normalChanged="handleChange('day', $event)"
              required
            />
          </b-col>
          <b-col md="4" sm="6" v-if="form.duration === 'set-time'">
            <VDateGroup
              label="Date"
              id="date"
              :value="form.date"
              :v="$v.form.date"
              @dateChanged="handleChange('date', $event)"
              required
            />
          </b-col>
          <b-col md="4" sm="6">
            <VTimerGroup
              label="From"
              id="from"
              :value="form.from"
              :v="$v.form.from"
              @fromChanged="handleChange('from', $event)"
              required
            />
          </b-col>
          <b-col md="4" sm="6">
            <VTimerGroup
              label="To"
              id="to"
              :value="form.to"
              :v="$v.form.to"
              @toChanged="handleChange('to', $event)"
              required
            />
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-button type="submit" variant="success" class="float-right">
              <i class="mdi mdi-circle-edit-outline" /> Create
            </b-button>
          </b-col>
        </b-row>
      </b-form>
    </div>
  </div>
</template>

<script>
import flatPickr from 'vue-flatpickr-component'
// import vSelect from 'vue-select'
import InputGroup from '.././UI/InputGroup'
import InputSelectGroup from '.././UI/InputSelectGroup'
// Vue.component("v-select", vSelect);
import { getAppointmentSites, createAppointmentCategory } from '../../Api'
import appointmentFilterFormatter from '~/mixins/appointmentFilterFormatter'

import { validationMixin } from "vuelidate";
import {
  required,
} from "vuelidate/lib/validators";
import moment from "moment";

export default {
  name: 'CreateAppointmentCategory',

  components: {
    InputSelectGroup,
    InputGroup,
    flatPickr
  },

  mixins: [appointmentFilterFormatter, validationMixin],

  data () {
    return {
      days: [
        { text: 'Sunday', value: 'sun' },
        { text: 'Monday', value: 'mon' },
        { text: 'Tuesday', value: 'tue' },
        { text: 'Wednesday', value: 'wed' },
        { text: 'Thursday', value: 'thu' },
        { text: 'Friday', value: 'fri' },
        { text: 'Saturday', value: 'sat' }
      ],
      gc_selects: [
        { text: 'Yes', value: "1" },
        { text: 'No', value: "0" },
      ],
      durations: [
        { text: 'In Minutes', value: 'in-minutes' },
        { text: 'Set Time', value: 'set-time' },
        { text: 'Recurring', value: 'recurring' },
      ],
      sites: [],
      statuses: [
        { value: "1", text: 'Active' },
        { value: "0", text: 'Inactive' }
      ],
      form: {
        name: '',
        site: null,
        site: null,
        status: null,
        gc_select: null,
        duration: null,
        minute: null,
        date: null,
        from: null,
        to: null,
        day: null,
      },
      site: null,
    }
  },

  validations()  {
    let v_form = {
      name: { required },
      site: { required },
      status: { required },
      gc_select: { required },
      duration: { required },
    };
    if (this.form.duration === "in-minutes") {
      v_form = {
        ...v_form,
        minute: { required }
      };
    } else if (this.form.duration === "set-time") {
      v_form = {
        ...v_form,
        date: { required },
        from: { required },
        to: { required }
      };
    } else if (this.form.duration === "recurring") {
      v_form = {
        ...v_form,
        day: { required },
        from: { required },
        to: { required }
      };
    }

    return { form: v_form };
  },

  mounted () {
    this.getAppointmentSites()
  },

  computed: {
    validateState() {
      if (this.v) {
        const { $dirty, $error } = this.v["date"];
        return $dirty ? !$error : null;
      }
    }
  },

  methods: {
    getAppointmentSites () {
      return getAppointmentSites()
        .then((data) => {
          const sites = this.$formatter.deserialize(data)
          this.sites = sites.map(site => {
            return { text: site.name, value: site.id }
          })
        })
        .catch((e) => {
          console.log(e)
        })
    },
    handleChange(variable_name, event) {
      this.form[variable_name] = event;
    },
    onSubmit() {
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      } else {
        console.log(this.form)
        const duration_payload =
          this.form.duration === "in-minutes" ? (
            { "minutes": parseInt(this.form.minute) }
          ) : this.form.duration === "set-time" ? (
            {
              "date": moment(this.form.date).format("MM/DD/YYYY"),
              "from": this.form.from.slice(0, 5),
              "to": this.form.to.slice(0, 5)
            }
          ) : (
            {
              "day": this.form.day,
              "from": this.form.from.slice(0, 5),
              "to": this.form.to.slice(0, 5)
            }
          );

        const data = {
          "type": "appointment-categories",
          "attributes": {
            "name": this.form.name,
            "active": parseInt(this.form.status),
            "gc_can_select": parseInt(this.form.gc_select),
            "duration": {
              "type": this.form.duration,
              "payload": {...duration_payload}
            }
          },
          "relationships": {
            "sites": {
              "data": [
                {"type": "sites", "id": this.form.site}
              ]
            }
          }
        }

        this.$axios({
          method: 'POST',
          url: 'http://atlas-rebuild-api.mtcdevsite.com/api/v1/appointment-categories',
          headers: {
            Accept: 'application/vnd.api+json',
            'Content-Type': 'application/vnd.api+json'
          },
          data: { data }
        })
          .then((res) => {
            console.log(res)
          })
          .catch((e) => {
            console.log(e)
          })
      }
    }
  }
}
</script>

<style scoped>
@import "flatpickr/dist/flatpickr.css";
/* @import "vue-select/dist/vue-select.css"; */
.vs__dropdown-toggle {
  height: 37px;
}
</style>
