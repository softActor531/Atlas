<template>
  <div class="card">
    <div class="card-body">
      <h4 class="mb-3 header-title">
        <i class="mdi mdi-square-edit-outline" />
        Create Appointment Category
      </h4>
      <div class="row">
        <InputSelectGroup
          :id="appointmentCategory.site"
          v-model="filter.included.site"
          width="3"
          :important="true"
          label="Sites"
          type="text"
          :array="sites"
        />
        <InputGroup
          :id="appointmentCategory.name"
          v-model="filter.attributes.name"
          width="3"
          :important="true"
          label="Name"
          type="text"
        />
        <InputSelectGroup
          :id="appointmentCategory.status"
          v-model="filter.attributes.status"
          width="3"
          :important="true"
          label="Status"
          :array="status"
        />
        <div class="col-md-3">
          <div class="form-group">
            <label>GC Can Select?</label>
            <div class="input-group">
              <div class="radio radio-info form-check-inline mr-4">
                <input
                  id="yesGCSelect"
                  type="radio"
                  value="yes"
                  name="gc_self_select"
                  :checked="
                    appointmentCategory.canSelect == 'yes' ? 'checked' : ''
                  "
                  @change="filter.attributes.canSelect = 'yes'"
                />
                <label for="yesGCSelect">Yes</label>
              </div>
              <div class="radio form-check-inline mr-4">
                <input
                  id="noGCSelect"
                  type="radio"
                  value="no"
                  name="gc_self_select"
                  :checked="
                    appointmentCategory.canSelect == 'no' ? 'checked' : ''
                  "
                  @change="filter.attributes.canSelect = 'no'"
                />
                <label for="noGCSelect">No</label>
              </div>
            </div>
          </div>
        </div>
        <div v-if="appointmentCategory.duration" class="col-xs-12 col-md-3">
          <div class="form-group">
            <label>Duration</label>
            <div class="input-group">
              <div class="radio radio-info form-check-inline mr-4">
                <input
                  type="radio"
                  class="duration"
                  value="in minutes"
                  name="duration"
                  :checked="
                    appointmentCategory.duration.type == 'in minutes'
                      ? 'checked'
                      : ''
                  "
                  @change="handleDurationType('in minutes')"
                />
                <label for="inMinutesDuration">In Minutes</label>
              </div>
              <div class="radio form-check-inline mr-4">
                <input
                  type="radio"
                  class="duration"
                  name="duration"
                  :checked="
                    appointmentCategory.duration.type == 'set time'
                      ? 'checked'
                      : ''
                  "
                  @change="handleDurationType('set time')"
                />
                <label for="setTimeDuration">Set Time</label>
              </div>
              <div class="radio radio-blue form-check-inline">
                <input
                  id="recurringDuration"
                  type="radio"
                  class="duration"
                  value="recurring"
                  name="duration"
                  :checked="
                    appointmentCategory.duration.type == 'recurring'
                      ? 'checked'
                      : ''
                  "
                  @change="handleDurationType('recurring')"
                />
                <label for="recurringDuration">Recurring</label>
              </div>
            </div>
          </div>
        </div>
        <div v-if="appointmentCategory.duration" class="col-md-9">
          <div class="row">
            <div
              v-if="filter.attributes.duration.type === 'in minutes'"
              class="col-md-4"
            >
              <div class="form-group">
                <label for="first-name">Minutes</label>
                <input
                  :value="appointmentCategory.duration.payload.minutes"
                  class="form-control"
                  type="text"
                  name="duration_minutes"
                  placeholder="Minutes"
                  @input="setDurationPayload($event, 'minutes')"
                />
              </div>
            </div>
          </div>
          <div v-if="appointmentCategory.duration.type === 'set time'">
            <div class="row">
              <div class="col-md-4">
                <div class="form-group input date">
                  <label for="student_birthdate">Date</label>
                  <flat-pickr
                    :value="appointmentCategory.duration.payload.date"
                    class="date-picker form-control flatpickr-input"
                    @input="setDurationPayload($event, 'date')"
                  />
                </div>
              </div>

              <div class="col-md-4">
                <div class="form-group">
                  <label>From</label>
                  <!--flat picker for time -->
                  <flat-pickr
                    :value="appointmentCategory.duration.payload.from"
                    class="date-picker form-control flatpickr-input"
                    :config="config"
                    @input="setDurationPayload($event, 'from')"
                  />
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <label>To</label>
                  <!--flat picker for time -->
                  <flat-pickr
                    :value="appointmentCategory.duration.payload.to"
                    class="date-picker form-control flatpickr-input"
                    :config="config"
                    @input="setDurationPayload($event, 'to')"
                  />
                </div>
              </div>
            </div>
          </div>
          <div v-if="appointmentCategory.duration.type === 'recurring'">
            <div class="row">
              <div class="col-md-4">
                <div class="form-group">
                  <label>Day</label>
                  <select
                    :value="appointmentCategory.duration.payload.day"
                    name="day"
                    class="form-control"
                    @input="setDurationPayload($event, 'day')"
                  >
                    <option value>
                      -- Select --
                    </option>
                    <option value="sunday">
                      Sunday
                    </option>
                    <option value="monday">
                      Monday
                    </option>
                    <option value="tuesday">
                      Tuesday
                    </option>
                    <option value="wednesday">
                      Wednesday
                    </option>
                    <option value="thursday">
                      Thursday
                    </option>
                    <option value="friday">
                      Friday
                    </option>
                    <option value="saturday">
                      Saturday
                    </option>
                  </select>
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <div class="form-group">
                    <label>From</label>
                    <!--flat picker for time -->
                    <flat-pickr
                      :value="appointmentCategory.duration.payload.from"
                      class="date-picker form-control flatpickr-input"
                      :config="config"
                      @input="setDurationPayload($event, 'from')"
                    />
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <label>To</label>
                  <!--flat picker for time -->
                  <flat-pickr
                    :value="appointmentCategory.duration.payload.to"
                    class="date-picker form-control flatpickr-input"
                    :config="config"
                    @input="setDurationPayload($event, 'to')"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xs-12 col-md-12">
          <div class="float-right">
            <button
              type="submit"
              class="btn btn-blue waves-effect waves-light mb-2"
              @click="edit"
            >
              <i class="mdi mdi-circle-edit-outline" /> Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import flatPickr from "vue-flatpickr-component";
// import vSelect from 'vue-select'
import InputGroup from ".././UI/InputGroup";
import InputSelectGroup from ".././UI/InputSelectGroup";
// Vue.component("v-select", vSelect);
import {
  getAppointmentSites,
  showAppointmentCategory,
  updateAppointmentCategory
} from "../../Api";
import appointmentFilterFormatter from "~/mixins/appointmentFilterFormatter";

export default {
  name: "CreateAppointmentCategory",

  components: {
    InputSelectGroup,
    InputGroup,
    flatPickr
  },

  mixins: [appointmentFilterFormatter],

  data() {
    return {
      x: "in minutes",
      date: "",
      config: {
        noCalendar: true,
        enableTime: true,
        dateFormat: "h:i K"
      },
      options: [
        "12.15",
        "12.30",
        "12.45",
        "01:00",
        "01:15",
        "01:30",
        "01:15",
        "01:30"
      ],
      appointmentCategory: [],
      sites: [],
      status: ["Active", "Inactive"],
      filter: {
        attributes: {
          name: "",
          status: "",
          duration: {
            type: "in minutes",
            payload: {}
          },
          canSelect: ""
        },
        included: {
          site: ""
        }
      }
    };
  },

  mounted() {
    this.getAppointmentSites();
    this.showAppointmentCategory();
  },

  methods: {
    setDurationPayload(e, key = "") {
      console.log(this.filter.attributes.duration.payload[key], key);
      if (this.filter.attributes.duration.type !== "in minutes") {
        this.filter.attributes.duration.payload[key] = e.target
          ? e.target.value
          : e;
      }

      this.filter.attributes.duration.payload[key] = e.target
        ? e.target.value
        : e;
    },
    getAppointmentSites() {
      return getAppointmentSites()
        .then(data => {
          const sites = this.$formatter().deserialize(data);
          this.sites = sites.map(site => site.name);
        })
        .catch(e => {
          $nuxt.error(new Error());
        });
    },
    showAppointmentCategory() {
      return showAppointmentCategory(this.$route.params.id)
        .then(res => {
          this.appointmentCategory = this.$formatter().deserialize(res)[0];
          this.appointmentCategory.site = this.appointmentCategory.site.name;
          this.filter.attributes.duration.type = this.appointmentCategory.duration.type;
        })
        .catch(e => {
          $nuxt.error(new Error());
        });
    },
    handleDurationType(type) {
      this.appointmentCategory.duration.type = type;
      this.filter.attributes.duration.type = type;
      this.filter.attributes.duration.payload =
        this.appointmentCategory.duration.payload || {};
    },
    edit() {
      const data = this.appintmentFilterFormat(this.filter);
      console.log(data);
      return updateAppointmentCategory()
        .then(res => {
          return console.log(res);
        })
        .catch(e => {
          $nuxt.error(new Error());
        });
    }
  }
};
</script>

<style scoped>
@import "flatpickr/dist/flatpickr.css";
/* @import "vue-select/dist/vue-select.css"; */
.vs__dropdown-toggle {
  height: 37px;
}
</style>
