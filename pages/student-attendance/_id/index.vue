<template>
  <div class="row">
    <div class="col-md-3 mt-3">
      <Studentsidenav :student-id="$route.params.id" />
    </div>
    <div class="col-md-9 col-xs-12">
      <div class="page-title-box">
        <div class="page-title-right">
          <nuxt-link
            class="btn btn-success waves-effect waves-light"
            :to="`/student-attendance/${$route.params.id}/check-in`"
          >
            <span class="btn-label">
              <i class="mdi mdi-fingerprint" />
            </span>
            New Check In
          </nuxt-link>
          <a
            class="btn btn-blue waves-effect waves-light"
            href="#"
            @click="print"
          >
            <span class="btn-label">
              <i class="mdi mdi-printer" />
            </span>
            Print Page
          </a>
        </div>
        <h4 class="page-title">
          {{ first_name + " " + last_name }} | Engagement
        </h4>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="thinner-box card-box widget-inline">
            <div class="row">
              <div class="col-sm-6 col-xl-1" />
              <div class="col-sm-6 col-xl-2">
                <div class="p-2 text-center">
                  <i class="mdi mdi-account-key text-primary mdi-24px" />
                  <p class="text-muted font-15 mb-0">Acceleration ID</p>
                  <h5>
                    <span>{{ id }}</span>
                  </h5>
                </div>
              </div>

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
                  />
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

              <div class="col-sm-6 col-xl-2">
                <div class="p-2 text-center">
                  <i class="mdi mdi-certificate text-blue mdi-24px" />
                  <p class="text-muted font-15 mb-0">Tier</p>
                  <h5>
                    <span>{{ tier }}</span>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card-box widget-inline">
        <h4 class="mb-3 header-title">
          Attendance
          <mark>{{ first_name }} {{ last_name }}</mark>
        </h4>
        <div class="row">
          <div class="col-xs-12 col-md-4">
            <div class="p-2 text-center">
              <i class="mdi mdi-alert-circle text-info mdi-24px" />
              <p class="text-muted font-15 mb-0">
                {{ last_date_onsite_label }}
              </p>

              <h5></h5>
            </div>
          </div>

          <div class="col-xs-12 col-md-4">
            <div class="p-2 text-center">
              <i class="mdi mdi-alert-circle text-info mdi-24px" />
              <p class="text-muted font-15 mb-0">Days Lapsed</p>
              <h5>
                <span>{{ daysLapsed }}</span>
              </h5>
            </div>
          </div>
          <div class="col-xs-12 col-md-4">
            <div class="p-2 text-center">
              <i class="mdi mdi-alert-circle text-info mdi-24px" />
              <p class="text-muted font-15 mb-0">
                {{ next_date_scheduled_label }}
              </p>
              <h5>
                <span>{{ nextDateExpected }}</span>
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h4 class="mb-3 header-title">Attendance Log</h4>
          <div class="row">
            <div class="table-responsive">
              <b-table-simple hover small caption-top responsive bordered>
                <b-thead>
                  <b-tr>
                    <b-th>Check In</b-th>
                    <b-th>Check Out</b-th>
                    <b-th>Absence</b-th>
                    <b-th>Next Date Committed</b-th>
                  </b-tr>
                </b-thead>
                <b-tbody v-for="item in attendanceEnteries" :key="item">
                  <b-tr>
                    <b-td>
                      {{ item.check_in }}
                    </b-td>
                    <b-td>
                      {{ item.check_out }}
                    </b-td>
                    <b-td></b-td>
                    <b-td></b-td>
                  </b-tr>
                  <b-tr>
                    <b-th colspan="12">Note: {{ item.note }}</b-th>
                  </b-tr>
                </b-tbody>
              </b-table-simple>
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h4 class="mb-3 header-title">Schedule</h4>
          <div class="row">
            <form method="post" action class="noSearch">
              <div class="table-responsive">
                <table
                  class="schedule history-table table table-sm table-bordered"
                >
                  <thead>
                    <tr>
                      <th />
                      <th>Sunday</th>
                      <th>Monday</th>
                      <th>Tuesday</th>
                      <th>Wednesday</th>
                      <th>Thursday</th>
                      <th>Friday</th>
                      <th>Saturday</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>In</td>
                      <td>
                        <select
                          v-model="sunday.in"
                          class="form-control"
                          name="schedule[sunday_in]"
                        >
                          <option
                            v-for="item in timeOptions"
                            :key="item.name"
                            :value="item.value"
                          >
                            {{ item.name }}
                          </option>
                        </select>
                      </td>
                      <td>
                        <select
                          v-model="monday.in"
                          class="form-control"
                          name="schedule[monday_in]"
                        >
                          <option
                            v-for="item in timeOptions"
                            :key="item.name"
                            :value="item.value"
                          >
                            {{ item.name }}
                          </option>
                        </select>
                      </td>
                      <td>
                        <select
                          v-model="tuesday.in"
                          class="form-control"
                          name="schedule[tuesday_in]"
                        >
                          <option
                            v-for="item in timeOptions"
                            :key="item.name"
                            :value="item.value"
                          >
                            {{ item.name }}
                          </option>
                        </select>
                      </td>
                      <td>
                        <select
                          v-model="wednesday.in"
                          class="form-control"
                          name="schedule[wednesday_in]"
                        >
                          <option
                            v-for="item in timeOptions"
                            :key="item.name"
                            :value="item.value"
                          >
                            {{ item.name }}
                          </option>
                        </select>
                      </td>
                      <td>
                        <select
                          v-model="thursday.in"
                          class="form-control"
                          name="schedule[thursday_in]"
                        >
                          <option
                            v-for="item in timeOptions"
                            :key="item.name"
                            :value="item.value"
                          >
                            {{ item.name }}
                          </option>
                        </select>
                      </td>
                      <td>
                        <select
                          v-model="friday.in"
                          class="form-control"
                          name="schedule[friday_in]"
                        >
                          <option
                            v-for="item in timeOptions"
                            :key="item.name"
                            :value="item.value"
                          >
                            {{ item.name }}
                          </option>
                        </select>
                      </td>
                      <td>
                        <select
                          v-model="saturday.in"
                          class="form-control"
                          name="schedule[saturday_in]"
                        >
                          <option
                            v-for="item in timeOptions"
                            :key="item.name"
                            :value="item.value"
                          >
                            {{ item.name }}
                          </option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td>Out</td>
                      <td>
                        <select
                          v-model="sunday.out"
                          class="form-control"
                          name="schedule[sunday_out]"
                        >
                          <option
                            v-for="item in timeOptions"
                            :key="item.name"
                            :value="item.value"
                          >
                            {{ item.name }}
                          </option>
                        </select>
                      </td>
                      <td>
                        <select
                          v-model="monday.out"
                          class="form-control"
                          name="schedule[monday_out]"
                        >
                          <option
                            v-for="item in timeOptions"
                            :key="item.name"
                            :value="item.value"
                          >
                            {{ item.name }}
                          </option>
                        </select>
                      </td>
                      <td>
                        <select
                          v-model="tuesday.out"
                          class="form-control"
                          name="schedule[tuesday_out]"
                        >
                          <option
                            v-for="item in timeOptions"
                            :key="item.name"
                            :value="item.value"
                          >
                            {{ item.name }}
                          </option>
                        </select>
                      </td>
                      <td>
                        <select
                          v-model="wednesday.out"
                          class="form-control"
                          name="schedule[wednesday_out]"
                        >
                          <option
                            v-for="item in timeOptions"
                            :key="item.name"
                            :value="item.value"
                          >
                            {{ item.name }}
                          </option>
                        </select>
                      </td>
                      <td>
                        <select
                          v-model="thursday.out"
                          class="form-control"
                          name="schedule[thursday_out]"
                        >
                          <option
                            v-for="item in timeOptions"
                            :key="item.name"
                            :value="item.value"
                          >
                            {{ item.name }}
                          </option>
                        </select>
                      </td>
                      <td>
                        <select
                          v-model="friday.out"
                          class="form-control"
                          name="schedule[friday_out]"
                        >
                          <option
                            v-for="item in timeOptions"
                            :key="item.name"
                            :value="item.value"
                          >
                            {{ item.name }}
                          </option>
                        </select>
                      </td>
                      <td>
                        <select
                          v-model="saturday.out"
                          class="form-control"
                          name="schedule[saturday_out]"
                        >
                          <option
                            v-for="item in timeOptions"
                            :key="item.name"
                            :value="item.value"
                          >
                            {{ item.name }}
                          </option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td>Transport</td>
                      <td>
                        <select
                          id="sunday_transportation"
                          v-model="sunday.transport"
                          name="schedule[sunday_transportation]"
                        >
                          <option value="0">No</option>

                          <option value="1">Yes</option>
                        </select>
                      </td>
                      <td>
                        <select
                          id="monday_transportation"
                          v-model="monday.transport"
                          name="schedule[monday_transportation]"
                        >
                          <option selected value="0">No</option>

                          <option value="1">Yes</option>
                        </select>
                      </td>
                      <td>
                        <select
                          id="tuesday_transportation"
                          v-model="tuesday.transport"
                          name="schedule[tuesday_transportation]"
                        >
                          <option selected value="0">No</option>

                          <option value="1">Yes</option>
                        </select>
                      </td>
                      <td>
                        <select
                          id="wednesday_transportation"
                          v-model="wednesday.transport"
                          name="schedule[wednesday_transportation]"
                        >
                          <option selected value="0">No</option>

                          <option value="1">Yes</option>
                        </select>
                      </td>
                      <td>
                        <select
                          id="thursday_transportation"
                          v-model="thursday.transport"
                          name="schedule[thursday_transportation]"
                        >
                          <option selected value="0">No</option>

                          <option value="1">Yes</option>
                        </select>
                      </td>
                      <td>
                        <select
                          id="friday_transportation"
                          v-model="friday.transport"
                          name="schedule[friday_transportation]"
                        >
                          <option selected value="0">No</option>

                          <option value="1">Yes</option>
                        </select>
                      </td>
                      <td>
                        <select
                          id="saturday_transportation"
                          v-model="saturday.transport"
                          name="schedule[saturday_transportation]"
                        >
                          <option selected value="0">No</option>

                          <option value="1">Yes</option>
                        </select>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="col-xs-12">
                <button
                  type="submit"
                  class="btn btn-success waves-effect waves-light float-right"
                >
                  Save Schedule
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h4 class="mb-3 header-title">Academic Notes</h4>
          <div class="row">
            <table class="table table-sm table-bordered history-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Note</th>
                  <th>Starting</th>
                  <th>Ending</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colspan="5" align="center">No notes available</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h4 class="mb-3 header-title">Retention Notes</h4>
          <div class="row">
            <table class="wrap table table-sm table-bordered history-table">
              <thead>
                <tr>
                  <th>Day</th>
                  <th>Date Submitted</th>
                  <th>Follow-up Date</th>
                  <th>Commit Date</th>
                  <th>Retention Action</th>
                  <th>Special Follow-up</th>
                  <th>Created By</th>
                  <th>Sent To</th>
                </tr>
              </thead>
              <tbody>
                <RetentionTableRow
                  v-for="item in retentionNotes"
                  :key="item"
                  :day="item.day"
                  :follow-up-date="item.followUpDate"
                  :date-submitted="item.dateSubmitted"
                  :commit-date="item.commitDate"
                  :retention-action="item.retentionAction"
                  :created-by="item.createdBy"
                  :sent-to="item.sentTo"
                  :note="item.note"
                />
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h4 class="mb-3 header-title">Recruitment History</h4>
          <div class="row">
            <div class="col-xs-12 col-md-12">
              <div class="text-left mt-3">
                <p class="text-muted mb-2 font-13">
                  <strong>How did you find out about AA?:</strong>
                  <span class="ml-2">{{ hear_about }}</span>
                </p>
                <p class="text-muted mb-2 font-13">
                  <strong>Name of person who referred:</strong>
                  <span class="ml-2">{{ referred_by_name }}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h4 class="mb-3 header-title">Recruitment Log</h4>
          <div class="row">
            <div class="col-xs-12 col-md-12">
              <div class="text-left mt-3">
                <p class="text-muted mb-2 font-13">
                  <strong>Community Outreach Advocate:</strong>

                  <span class="ml-2">{{community_outreach_advoacte}}</span>
                </p>
                <p class="text-muted mb-2 font-13">
                  <strong>Outreach Advocate:</strong>
                  <span class="ml-2">{{ outreach_advocate }}</span>
                </p>
                <p class="text-muted mb-2 font-13">
                  <strong>Notes:</strong>
                  <span class="ml-2">{{ special_instructions }}</span>
                </p>
                <p class="text-muted mb-2 font-13">
                  <strong>RDB Status Changed Times :</strong>
                  <span class="ml-2">{{ rdbStatusChangedTimes }}</span>
                </p>
                <p class="text-muted mb-2 font-13">
                  <strong>System Status Changed Times :</strong>
                  <span class="ml-2">{{ systemStatusChangedTimes }}</span>
                </p>
              </div>
            </div>
          </div>
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
import moment from "moment";
import GcSideBar from "../../../components/student-contact/GcSideBar";
import AttendanceTableRow from "../../../components/student-attendance/AttendanceTableRow";
import RetentionTableRow from "../../../components/student-attendance/RetentionTableRow";

import { getAttendace } from "../../../Api";

import Api from "../../../services/api/Api";

export default {
  components: {
    GcSideBar,
    AttendanceTableRow,
    RetentionTableRow,
  },
  async asyncData(context) {
    const api = new Api(context);
    const attendanceLogs = await api.getStudentAttendance();
    const student = await api.getStudent(context.params.id);
    const attendanceEnteries = await api.getAttendanceEnteries(
      context.params.id
    );

    console.log(attendanceEnteries);

    return {
      ...student,
      attendanceLogs,
      attendanceEnteries,
    };
  },
  data() {
    return {
      last_date_onsite_label: this.$store.state.fields.length > 0 ? this.$store.state.fields.find((element) => {
        return element.base_name == "Last Date Onsite";
      }).custom_name : "Last Date Onsite",
      next_date_scheduled_label: this.$store.state.fields.length > 0 ? this.$store.state.fields.find((element) => {
        return element.base_name == "Next Date Scheduled";
      }).custom_name : "Next Date Scheduled",
      timeOptions: [
        {
          name: "Option",
          value: "",
        },
        {
          name: "12:00 am",
          value: "00:00:00",
        },
        {
          name: "12:15 am",
          value: "00:15:00",
        },
        {
          name: "12:30 am",
          value: "00:30:00",
        },
        {
          name: "12:45 am",
          value: "00:45:00",
        },
        {
          name: "01:00 am",
          value: "01:00:00",
        },
        {
          name: "01:15 am",
          value: "01:15:00",
        },
        {
          name: "01:30 am",
          value: "01:30:00",
        },
        {
          name: "01:45 am",
          value: "01:45:00",
        },
        {
          name: "02:00 am",
          value: "02:00:00",
        },
        {
          name: "02:15 am",
          value: "02:15:00",
        },
        {
          name: "02:30 am",
          value: "02:30:00",
        },
        {
          name: "02:45 am",
          value: "02:45:00",
        },
        {
          name: "03:00 am",
          value: "03:00:00",
        },
        {
          name: "03:15 am",
          value: "03:15:00",
        },
        {
          name: "03:30 am",
          value: "03:30:00",
        },
        {
          name: "03:45 am",
          value: "03:45:00",
        },
        {
          name: "04:00 am",
          value: "04:00:00",
        },
        {
          name: "04:15 am",
          value: "04:15:00",
        },
        {
          name: "04:45 am",
          value: "04:45:00",
        },
        {
          name: "05:00 am",
          value: "05:00:00",
        },
        {
          name: "05:15 am",
          value: "05:15:00",
        },
        {
          name: "05:30 am",
          value: "05:30:00",
        },
        {
          name: "05:45 am",
          value: "05:45:00",
        },
        {
          name: "06:00 am",
          value: "06:00:00",
        },
        {
          name: "06:15 am",
          value: "06:15:00",
        },
        {
          name: "06:30 am",
          value: "06:30:00",
        },
        {
          name: "06:45 am",
          value: "06:45:00",
        },
        {
          name: "07:00 am",
          value: "07:00:00",
        },
        {
          name: "07:15 am",
          value: "07:15:00",
        },
        {
          name: "07:30 am",
          value: "07:30:00",
        },
        {
          name: "07:45 am",
          value: "07:45:00",
        },
        {
          name: "08:00 am",
          value: "08:00:00",
        },
        {
          name: "08:15 am",
          value: "08:15:00",
        },
        {
          name: "08:30 am",
          value: "08:30:00",
        },
        {
          name: "08:45 am",
          value: "08:45:00",
        },
        {
          name: "09:00 am",
          value: "09:00:00",
        },
        {
          name: "09:15 am",
          value: "09:15:00",
        },
        {
          name: "09:30 am",
          value: "09:30:00",
        },
        {
          name: "09:45 am",
          value: "09:45:00",
        },
        {
          name: "10:00 am",
          value: "10:00:00",
        },
        {
          name: "10:15 am",
          value: "10:15:00",
        },
        {
          name: "10:30 am",
          value: "10:30:00",
        },
        {
          name: "10:45 am",
          value: "10:45:00",
        },
        {
          name: "11:00 am",
          value: "11:00:00",
        },
        {
          name: "11:15 am",
          value: "11:15:00",
        },
        {
          name: "11:30 am",
          value: "11:30:00",
        },
        {
          name: "11:45 am",
          value: "11:45:00",
        },
        {
          name: "12:00 pm",
          value: "12:00:00",
        },
        {
          name: "12:15 pm",
          value: "12:15:00",
        },
        {
          name: "12:30 pm",
          value: "12:30:00",
        },
        {
          name: "12:45 pm",
          value: "12:45:00",
        },
        {
          name: "01:00 pm",
          value: "13:00:00",
        },
        {
          name: "01:15 pm",
          value: "13:15:00",
        },
        {
          name: "01:30 pm",
          value: "13:30:00",
        },
        {
          name: "01:45 pm",
          value: "13:45:00",
        },
        {
          name: "02:00 pm",
          value: "14:00:00",
        },
        {
          name: "02:15 pm",
          value: "14:15:00",
        },
        {
          name: "02:30 pm",
          value: "14:30:00",
        },
        {
          name: "02:45 pm",
          value: "14:45:00",
        },
        {
          name: "03:00 pm",
          value: "15:00:00",
        },
        {
          name: "03:15 pm",
          value: "15:15:00",
        },
        {
          name: "03:30 pm",
          value: "15:30:00",
        },
        {
          name: "03:45 pm",
          value: "15:45:00",
        },
        {
          name: "04:00 pm",
          value: "16:00:00",
        },
        {
          name: "04:15 pm",
          value: "16:15:00",
        },
        {
          name: "04:15 pm",
          value: "16:15:00",
        },
        {
          name: "04:30 pm",
          value: "16:30:00",
        },
        {
          name: "04:45 pm",
          value: "16:45:00",
        },
        {
          name: "05:00 pm",
          value: "17:00:00",
        },
        {
          name: "05:15 pm",
          value: "17:15:00",
        },
        {
          name: "05:30 pm",
          value: "17:30:00",
        },
        {
          name: "05:45 pm",
          value: "17:45:00",
        },
        {
          name: "06:00 pm",
          value: "18:00:00",
        },
        {
          name: "06:15 pm",
          value: "18:15:00",
        },
        {
          name: "06:30 pm",
          value: "18:30:00",
        },
        {
          name: "06:45 pm",
          value: "18:45:00",
        },
        {
          name: "07:00 pm",
          value: "19:00:00",
        },
        {
          name: "07:15 pm",
          value: "19:15:00",
        },
        {
          name: "07:30 pm",
          value: "19:30:00",
        },
        {
          name: "07:45 pm",
          value: "19:45:00",
        },
        {
          name: "08:00 pm",
          value: "20:00:00",
        },
        {
          name: "08:15 pm",
          value: "20:15:00",
        },
        {
          name: "08:30 pm",
          value: "20:30:00",
        },
        {
          name: "08:45 pm",
          value: "20:45:00",
        },
        {
          name: "09:00 pm",
          value: "21:00:00",
        },
        {
          name: "09:15 pm",
          value: "21:15:00",
        },
        {
          name: "09:30 pm",
          value: "21:30:00",
        },
        {
          name: "09:45 pm",
          value: "21:45:00",
        },
        {
          name: "10:00 pm",
          value: "22:00:00",
        },
        {
          name: "10:15 pm",
          value: "22:15:00",
        },
        {
          name: "10:30 pm",
          value: "22:30:00",
        },
        {
          name: "10:45 pm",
          value: "22:45:00",
        },
        {
          name: "11:00 pm",
          value: "23:00:00",
        },
        {
          name: "11:15 pm",
          value: "23:15:00",
        },
        {
          name: "11:30 pm",
          value: "23:30:00",
        },
        {
          name: "11:45 pm",
          value: "23:45:00",
        },
      ],
      sunday: {
        in: "",
        out: "",
        transport: "0",
      },
      monday: {
        in: "",
        out: "",
        transport: "0",
      },
      tuesday: {
        in: "",
        out: "",
        transport: "0",
      },
      wednesday: {
        in: "",
        out: "",
        transport: "0",
      },
      thursday: {
        in: "",
        out: "",
        transport: "0",
      },
      friday: {
        in: "",
        out: "",
        transport: "0",
      },
      saturday: {
        in: "",
        out: "",
        transport: "0",
      },
    };
  },
  mounted() {
    if (!this.$store.state.permissions.includes("View GC Attendance")) {
      this.$router.push("/unauthorized");
    }
    console.log(this.attendanceEnteries);
  },
  methods: {
    print() {
      window.print();
    },
    getDate(date) {
      if (date !== null) {
        return moment(date).format("MM/DD/YYYY");
      } else {
        return "";
      }
    },
  },
};
</script>
