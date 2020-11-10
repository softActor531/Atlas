<template>
  <div class>
    <div class="row">
      <div class="col-md-3 mt-3">
        <Studentsidenav :student-id="$route.params.id" />
      </div>
      <div class="col-md-9 col-xs-12">
        <div class="page-title-box">
          <div class="page-title-right">
            <nuxt-link
              class="btn btn-danger waves-effect waves-light"
              :to="`/student-attendance/${$route.params.id}`"
            >
              <span class="btn-label">
                <i class="fa fa-ban"></i>
              </span>
              Cancel
            </nuxt-link>
          </div>
          <h1 class="page-title">New Note: {{ first_name }} {{ last_name }}</h1>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="thinner-box card-box widget-inline">
              <div class="row">
                <div class="col-sm-6 col-xl-1"></div>
                <GcIconBox
                  label="Acceleration ID"
                  :value="id"
                  iconStyle="mdi mdi-account-key text-primary mdi-24px"
                />
                <div class="col-sm-6 col-xl-2">
                  <div class="p-2 text-center">
                    <i class="mdi mdi-map text-success mdi-24px" />
                    <p class="text-muted font-15 mb-0">Location</p>
                    <h5>
                      <span>
                        {{ site ? site.district.name + "/" : ""
                        }}{{ site ? site.name : "N/A" }}
                      </span>
                    </h5>
                  </div>
                </div>
                <div class="col-sm-6 col-xl-2">
                  <div class="p-2 text-center">
                    <i
                      class="fas fa-spinner text-success mdi-24px text-warning"
                      style="font-size: 24px; margin-top: 10px"
                    ></i>
                    <p class="text-muted font-15 mb-0">Phase/Status</p>
                    <h5>
                      <span>{{ status ? status.phase.name + "/" : "" }}</span>
                      <span>{{ status ? status.name : "N/A" }}</span>
                    </h5>
                  </div>
                </div>

                <div class="col-sm-6 col-xl-2">
                  <div class="p-2 text-center">
                    <i class="mdi mdi-alert-circle text-info mdi-24px" />
                    <p class="text-muted font-15 mb-0">GCA</p>
                    <h5>
                      <span>
                        {{
                          graduate_candidate_advocate
                            ? graduate_candidate_advocate.first_name
                            : ""
                        }}
                        {{
                          graduate_candidate_advocate
                            ? graduate_candidate_advocate.last_name
                            : "N/A"
                        }}
                      </span>
                    </h5>
                  </div>
                </div>

                <GcIconBox
                  label="GC Name"
                  :value="first_name + ' ' + last_name"
                  iconStyle="mdi mdi-certificate text-blue mdi-24px"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="card-box">
          <form action>
            <fieldset>
              <legend>Check In Date/Time</legend>
              <div class="col-xs-12">
                <div class="form-group input birthdate">
                  <label for="check_in">Check in date</label> <code>*</code>

                  <flat-pickr
                    class="date-picker form-control flatpickr-input"
                    v-model="check_in"
                    :config="config"
                    :class="
                      check_in === '' && submitted === 'true'
                        ? 'is-invalid'
                        : ''
                    "
                    @input="date"
                  ></flat-pickr>
                </div>
              </div>

              <div class="col-xs-12">
                <div class="form-group input birthdate">
                  <label for="check_in">Check in time</label> <code>*</code>

                  <flat-pickr
                    class="date-picker form-control flatpickr-input"
                    :config="config2"
                    v-model="check_in_time"
                    :class="
                      check_out === '' && submitted === 'true'
                        ? 'is-invalid'
                        : ''
                    "
                  ></flat-pickr>
                </div>
              </div>
              <fieldset>
                <b-form-group>
                  <label>Today's Goals</label>
                  <b-textarea
                    name="today_goals_in"
                    v-model="today_goals"
                  ></b-textarea>
                </b-form-group>
              </fieldset>

              <fieldset>
                <b-form-group>
                  <label id="excuse_type_label">Attendance Exception</label>
                  <code>*</code>

                  <b-select
                    class="form-control"
                    name="excuse_type"
                    id="excuse_type"
                    v-model="form.attendance_exception"
                    :state="validateState($v.form.attendance_exception)"
                  >
                    <option value>Select an option</option>
                    <option value="1">GC Forgot to Scan</option>

                    <option value="2">Atlas System Issue</option>

                    <option value="0">Other</option>
                  </b-select>
                </b-form-group>
              </fieldset>

              <div class="form-group">
                <label>Exception Reason</label>
                <textarea
                  class="form-control"
                  name="exception_reason"
                  v-model="exception_reason"
                  :class="
                    form.attendance_exception == '0' && submitted === 'true'
                      ? exception_reason == ''
                        ? 'is-invalid'
                        : ''
                      : ''
                  "
                ></textarea>
              </div>
            </fieldset>
            <fieldset>
              <legend>Check Out Date/Time</legend>
              <div class="col-xs-12">
                <div class="form-group input birthdate">
                  <label for="check_in">Check out date</label>

                  <code>*</code>
                  <flat-pickr
                    class="date-picker form-control flatpickr-input"
                    :config="config"
                    v-model="check_out"
                    :class="
                      check_out === '' && submitted === 'true'
                        ? 'is-invalid'
                        : ''
                    "
                  ></flat-pickr>
                </div>
              </div>

              <div class="col-xs-12">
                <div class="form-group input birthdate">
                  <label for="check_in">Check out time</label> <code>*</code>

                  <flat-pickr
                    class="date-picker form-control flatpickr-input"
                    :config="config2"
                    v-model="check_out_time"
                    :class="
                      check_out_time === '' && submitted === 'true'
                        ? 'is-invalid'
                        : ''
                    "
                  ></flat-pickr>
                </div>
              </div>

              <div class="form-group">
                <label>Today's Goals</label>
                <textarea
                  class="form-control"
                  name="todays_goals_in"
                  v-model="today_goals2"
                ></textarea>
              </div>
            </fieldset>
            <fieldset>
              <legend>Attendance / Notes</legend>
              <div class="form-group">
                <label>Absence</label>
                <select class="form-control" name="absence" v-model="absence">
                  <option value="0" selected="selected">
                    -- Select an option --
                  </option>
                  <option value="1">Excused</option>
                  <option value="2">Unexcused</option>
                </select>
              </div>
              <b-form-group>
                <label>Note</label>
                <code>*</code>

                <b-textarea
                  v-model="form.note"
                  :state="validateState($v.form.note)"
                ></b-textarea>
              </b-form-group>

              <div class="form-group">
                <label>Next Committed Attendance Date</label>
                <input
                  type="text"
                  class="form-control flatpickr-input"
                  name="next_attendance"
                  v-model="next_date"
                />
              </div>
            </fieldset>
            <input
              type="submit"
              class="btn btn-success"
              name="save"
              value="Save Check-In"
              @click="submit"
            />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.thinner-box {
  padding: 0 !important;
}
</style>

<script>
import GcSideBar from "../../../components/student-contact/GcSideBar";
import flatPickr from "vue-flatpickr-component";

import Api from "../../../services/api/Api";

import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],

  components: {
    flatPickr,
    GcSideBar,
  },

  async asyncData(context) {
    const api = new Api(context);
    const student = await api.getStudent(context.route.params.id);

    return {
      ...student,
      api,
    };
  },
  data() {
    return {
      submitted: false,
      config: {
        dateFormat: "m/d/Y",
      },
      config2: {
        noCalendar: true,
        enableTime: true,
        dateFormat: "h:i K",
      },
      check_in: "",
      check_in_time: "",
      today_goals: "",
      exception_reason: "",
      check_out: "",
      check_out_time: "",
      today_goals2: "",
      absence: "",
      next_date: "",
      form: {
        note: "",
        attendance_exception: "",
      },
    };
  },
  validations: {
    form: {
      note: {
        required,
      },
      attendance_exception: {
        required,
      },
    },
  },
  methods: {
    validateState(item) {
      const { $dirty, $error } = item;
      return $dirty ? !$error : null;
    },
    date() {
      console.log(this.check_in);
    },
    submit() {
      this.submitted = "true";
      this.$v.form.$touch();
      if (this.$v.form.$anyError) return false;
      if (
        this.check_in === "" ||
        this.check_in_time === "" ||
        this.check_out === "" ||
        this.check_out_time === ""
      )
        return false;

      if (this.form.attendance_exception == "0") {
        if (this.exception_reason === "") return false;
      }
      
      const payload = {
        type: "student-attendance-entries",
        attributes: {
          note: this.form.note,
          check_in:
            this.check_in + " " + this.check_in_time.split(" ")[0] + ":00",
          check_out:
            this.check_out + " " + this.check_out_time.split(" ")[0] + ":00",
          attendance_exception: this.form.attendance_exception,
          exception_reason: this.exception_reason,
        },
        relationships: {
          student: { data: { type: "students", id: this.$route.params.id } },
        },
      };

      this.$api
        .createAttendanceEntry(payload)
        .then((data) => {
          console.log(data);
          // this.$router.push(`/student-attendance/${this.$route.params.id}`);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted: function () {
    $("form").submit(false);
  },
};
</script>
