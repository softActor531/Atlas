<template>
  <div class="card">
    <div class="card-header bg-white">
      <div class="row">
        <div class="col-md-6">
          <h4 class="float-left">
            Schedule for
            <mark>{{ staff }}</mark> at
            <mark>{{ district.name }}</mark>
            <a href="#">
              <i class="mdi mdi-account-edit" />
            </a>
          </h4>
        </div>
        <div class="col-md-6 mt-2">
          <div class="form-group float-right">
            <input id="keep_schedule" type="checkbox" name="keep_schedule" value="1" />
            <label>Keep Schedule</label>
          </div>
        </div>
      </div>
    </div>
    <div class="card-body">
      <div class="table-responsive">
        <table class="table table-bordered basic-table staff-schedule-table table-striped">
          <thead class="text-center bg-primary text-white">
            <tr>
              <th>Week Of</th>
              <th v-for="day in days" :key="day">{{ day }}</th>
            </tr>
          </thead>
          <tbody>
            <Fragment :key="index" v-for="(week_day, index) of days">
              <template v-for="row in schedule_type.length">
                <tr :key="row">
                  <td>
                    <div class="full-width mb-2 text-center">{{ myddd(index) }}</div>
                    <div class="full-width mb-2 text-center">
                      <b>{{ schedule_type[ row - 1 ] }}</b>
                    </div>
                    <div class="full-width mb-2 text-center">
                      <button
                        class="btn btn-blue waves-effect waves-light repeat"
                        type="button"
                      >Repeat</button>
                    </div>
                  </td>
                  <td v-for="(pastday, index) in dayofweek" :key="index">
                    <div class="form-group" />
                  </td>
                  <!-- <td v-for="(pastday, index) in days.length - dayofweek" :key="index">
                    <div class="form-group my-1">
                      <select2
                        class="schedules"
                        :options="schedules"
                        placeholder="Schedule Blocks"
                        @change="(value) => onChangeSchedules( row-1+index*5, value)"
                      />
                    </div>
                    <div class="form-group my-1">
                      <select2-multiple-control
                        :options="myOptions"
                        @change="(value) => onChangeOptions( row-1+index*5, value)"
                      />
                    </div>
                    <div class="form-group my-1">
                      <select2 :options="times" placeholder="Repeat" />
                    </div>
                  </td>-->
                  <!-- <td>
                  <div class="form-group" />
                  </td>-->
                </tr>
                <!-- <tr>
                <td>
                  <div class="full-width mb-2 text-center">
                    {{ date }}
                  </div>
                  <div class="full-width mb-2 text-center">
                    <b>Virtual </b>
                  </div>
                  <div class="full-width mb-2 text-center">
                    <button
                      class="btn btn-blue waves-effect waves-light repeat"
                      type="button"
                    >
                      Repeat
                    </button>
                  </div>
                </td>
                <td>
                  <div class="form-group" />
                </td>
                <td v-for="day in days">
                  <div class="form-group my-1">
                    <select2
                      class="schedules"
                      :options="schedules"
                      placeholder="Schedule Blocks"
                    />
                  </div>
                  <div class="form-group my-1">
                    <select2-multiple-control
                      v-model="myValue"
                      :options="myOptions"
                    />
                  </div>
                  <div class="form-group my-1">
                    <select2 :options="times" placeholder="Repeat" />
                  </div>
                </td>
                <td>
                  <div class="form-group" />
                </td>
                </tr>-->
              </template>
            </Fragment>
          </tbody>
        </table>
      </div>
    </div>
    <div class="card-footer text-center">
      <button class="btn btn-success" type="submit" @click="handleSave">
        <i class="mdi mdi-content-save-all" /> Save
      </button>
    </div>
  </div>
</template>

<script>
import Select2 from "v-select2-component";
import { Fragment } from "vue-fragment";
import Select2MultipleControl from "v-select2-multiple-component";
export default {
  name: "StaffScheduleTable",
  components: {
    Select2,
    Select2MultipleControl,
    Fragment
  },
  props: {
    staff: {
      type: String,
      default: ""
    },
    district: {
      type: Object,
      default: {}
    },
    districtSelectedIndex: {
      type: Number
    },
    staffSelectedIndex: {
      type: Number
    }
  },
  data() {
    return {
      days: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      dayofweek: Number,
      myOptions: [
        "Test Cat",
        " Onsite Registration",
        " Technology Support",
        " Case Managment",
        " Plb Meeting",
        " Social Emotional Support",
        " MAth Coaching",
        " Ela Coaching",
        " Science Coaching"
      ],
      schedules: [
        "08:00AM - 12:00PM",
        "12:00PM - 04:00PM",
        "08:00AM - 12:00PM"
      ],
      times: ["Never", "All Week", "All Month", "Every same Day"],
      form: { weeks: {} },
      schedule_type: ["on-site", "virtual"],
      items: []
    };
  },
  computed: {
    date() {
      let today = new Date();
      this.dayofweek = today.getDay();
      return `${today.getDate()}/${(today.getMonth() % 12) +
        1}/${today.getFullYear()}`;
    },
    getDayDate(index) {
      let today = new Date();
      return `${today.getDate() + index}/${(today.getMonth() % 12) +
        1}/${today.getFullYear()}`;
    }
    // form: function() {

    //   return 1;
    // }
  },
  mounted() {
    let today = new Date();
    this.dayofweek = today.getDay();

    for (let week = 0; week < this.days.length - this.dayofweek; week++) {
      let newDate = new Date();

      newDate.setDate(today.getDate() + week);
      newDate = `${newDate.getDate()}/${(newDate.getMonth() % 12) +
        1}/${newDate.getFullYear()}`;

      this.form.weeks[newDate] = {};

      //////////////////////////
      for (let index = 0; index < this.schedule_type.length; index++) {
        this.items.push({
          data: {
            type: "staff-schedule-entries",
            attributes: {
              schedule_type: this.schedule_type[index],
              date: newDate
            },
            relationships: {
              staff_schedule: {
                data: { type: "staff-schedules", id: "" }
              },
              schedule_block: {
                data: { type: "schedule-blocks", id: "" }
              },
              appointment_categories: {
                data: []
              }
            }
          }
        });
      }
    }
  },

  // method: {
  //   myChangeEvent(val) {
  //     console.log(val);
  //   },
  //   mySelectEvent({ id, text }) {
  //     console.log({ id, text });
  //   },
  //   getDate() {
  //     console.log(this.date.substr(0, this.date.indexOf("/")));
  //   }
  // },
  methods: {
    getDayDate(index) {
      let today = new Date();
      return `${today.getDate() + index}/${(today.getMonth() % 12) +
        1}/${today.getFullYear()}`;
    },
    myddd: function() {
      let today = new Date();
      return `${today.getDate() + index}/${(today.getMonth() % 12) +
        1}/${today.getFullYear()}`;
    },
    createStaffSchedule: async function() {
      return await this.$axios.post(
        "http://atlas-rebuild-api.mtcdevsite.com/api/v1/staff-schedules",
        {
          data: {
            type: "staff-schedules",
            attributes: {
              keep_schedule: 1
            },
            relationships: {
              site: {
                data: {
                  type: "sites",
                  id: this.districtSelectedIndex.toString()
                }
              },
              staff: {
                data: { type: "users", id: this.staffSelectedIndex.toString() }
              }
            }
          }
        },
        {
          headers: {
            "Content-Type": "application/vnd.api+json",
            Accept: "application/vnd.api+json"
          }
        }
      );
    },

    handleSave: async function() {
      for (
        let i = 0;
        i < (this.days.length - this.dayofweek) * this.schedule_type.length;
        i++
      ) {
        let newStaffSchedule = await this.createStaffSchedule();
        console.log(newStaffSchedule);
        this.items[i].data.relationships.staff_schedule.data.id =
          newStaffSchedule.data.data.id;
        let newStaffScheduleEntry = await this.$axios.post(
          "http://atlas-rebuild-api.mtcdevsite.com/api/v1/staff-schedule-entries",
          this.items[i],
          {
            headers: {
              "Content-Type": "application/vnd.api+json",
              Accept: "application/vnd.api+json"
            }
          }
        );
        console.log("new staff schedule entry created with index : ", i);
      }
    },
    onChangeSchedules: function(index, val) {
      this.items[index].data.relationships.schedule_block.data.id =
        this.schedules.indexOf(val) + 1;
    },
    onChangeOptions: function(index, val) {
      this.items[index].data.relationships.appointment_categories.data = [];
      for (let i = 0; i < val.length; i++) {
        this.items[index].data.relationships.appointment_categories.data.push({
          type: "appointment_categories",
          id: (this.myOptions.indexOf(val[i]) + 1).toString()
        });
      }
    }
  }
};
</script>

<style>
@import url("vue-multiselect/dist/vue-multiselect.min.css");
td .form-group {
  width: 200px;
}
.basic-table tbody tr td,
.basic-table thead tr th {
  border: 1px solid #ada8a8;
}
.multiselect__tag {
  background: #6658dd !important;
}
</style>
