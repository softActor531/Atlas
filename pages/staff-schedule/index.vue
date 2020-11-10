<template>
  <main>
    <div class="row mt-3">
      <div class="col-md-3">
        <Sidenav />
      </div>
      <div class="col-md-9">
        <h3 class="pt-0 pb-1 mt-0">Staff Schedule</h3>
        <div class="card">
          <div class="card-body">
            <div class="row mt-1 mb-3">
              <div class="col-md-4">
                <label>Districts</label>
                <select2
                  v-model="district.name"
                  :options="
                districts.map((district, index) => {
                  return district.name;
                })
              "
                />
              </div>
              <div class="col-md-4">
                <label for>Sites</label>
                <select2
                  v-model="district.site"
                  :options="
                districts.length > 0 ? 
                (districts.find(obj => obj.name === district.name) !== undefined)?districts.find(obj => obj.name === district.name).sites:[] :
                []
              "
                  @change="findIndexOfDistrict"
                />
              </div>
              <div class="col-md-4">
                <label>Staff</label>
                <select2
                  v-model="staffSelected"
                  :options="staff.map(element => `${element.first_name} ${element.last_name}`)"
                  @change="findIndexOfStaff"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="card" v-if="staffSelected !== '' && district.name !== ''">
          <div class="card-header bg-white">
            <div class="row">
              <div class="col-md-6">
                <h4 class="float-left">
                  Schedule for
                  <mark>{{ staffSelected }}</mark> at
                  <mark>{{ district.name }}</mark>
                  <a href="#">
                    <i class="mdi mdi-account-edit" />
                  </a>
                </h4>
              </div>
              <div class="col-md-6 mt-2">
                <div class="form-group float-right">
                  <input
                    id="keep_schedule"
                    type="checkbox"
                    name="keep_schedule"
                    v-model="keep_schedule"
                  />
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
                  <Fragment v-for="(week,i) in weeks" :key="i">
                    <tr>
                      <td>
                        <div class="full-width mb-2 text-center">{{ getDate(i) }}</div>
                        <div class="full-width mb-2 text-center">
                          <b>On-Site</b>
                        </div>
                        <div class="full-width mb-2 text-center">
                          <button
                            class="btn btn-blue waves-effect waves-light repeat"
                            type="button"
                            @click="repeat(i, 'onsite')"
                          >Repeat</button>
                        </div>
                      </td>
                      <td v-for="day in days" :key="day">
                        <div
                          v-if="day==='Saturday' || day === 'Sunday' || schedulingBlocks.length === 0"
                          class="form-group"
                        />
                        <div
                          v-if="!(day==='Saturday' || day === 'Sunday' || schedulingBlocks.length === 0)"
                          class="form-group"
                        >
                          <div class="form-group my-1">
                            <select2
                              class="schedules"
                              :options="schedulingBlocks.map(element => {
                                return {
                                  id: element.id,
                                  text: `${element[day].from} - ${element[day].to}`
                                }
                              })"
                              placeholder="Schedule Block"
                              v-model="week[day].onsite.schedule"
                            />
                          </div>
                          <div class="form-group my-1">
                            <v-select
                              multiple
                              class="col-xs-12 col-md-12 p-0"
                              :options="categories"
                              label="name"
                              :reduce="element => element.id"
                              v-model="week[day].onsite.categories"
                            />
                          </div>
                          <div class="form-group my-1">
                            <select2
                              :options="repeatOptions"
                              v-model="week[day].onsite.repeat"
                              @change="repeatChanged(i, day, 'onsite', $event)"
                            />
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="full-width mb-2 text-center">{{ getDate(i) }}</div>
                        <div class="full-width mb-2 text-center">
                          <b>Virtual</b>
                        </div>
                        <div class="full-width mb-2 text-center">
                          <button
                            class="btn btn-blue waves-effect waves-light repeat"
                            type="button"
                            @click="repeat(i, 'virtual')"
                          >Repeat</button>
                        </div>
                      </td>
                      <td v-for="day in days" :key="day">
                        <div
                          v-if="day==='Saturday' || day === 'Sunday' || schedulingBlocks.length === 0"
                          class="form-group"
                        />
                        <div
                          v-if="!(day==='Saturday' || day === 'Sunday' || schedulingBlocks.length === 0)"
                          class="form-group"
                        >
                          <div class="form-group my-1">
                            <select2
                              class="schedules"
                              :options="schedulingBlocks.map(element => {
                                return {
                                  id: element.id,
                                  text: `${element[day].from} - ${element[day].to}`
                                }
                              })"
                              placeholder="Schedule Block"
                              v-model="week[day].virtual.schedule"
                            />
                          </div>
                          <div class="form-group my-1">
                            <v-select
                              multiple
                              class="col-xs-12 col-md-12 p-0"
                              :options="categories"
                              label="name"
                              :reduce="element => element.id"
                              v-model="week[day].virtual.categories"
                            />
                          </div>
                          <div class="form-group my-1">
                            <select2
                              :options="repeatOptions"
                              v-model="week[day].virtual.repeat"
                              @change="repeatChanged(i, day, 'virtual', $event)"
                            />
                          </div>
                        </div>
                      </td>
                    </tr>
                  </Fragment>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="card-footer text-center" v-if="staffSelected !== '' && district.name !== ''">
          <button class="btn btn-success" type="submit" @click="createStaffScheduleEnteries">
            <i class="mdi mdi-content-save-all"></i> Save
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Sidenav from "@/components/schedule/Sidenav";
import Filters from "@/components/staff-schedules/Filters";

import Select2 from "v-select2-component";
import { Fragment } from "vue-fragment";
import moment from "moment";

export default {
  name: "OnHours",
  components: {
    Filters,
    Sidenav,
    Select2,
    Fragment
  },
  data() {
    return {
      district: { name: "", site: "" },
      districts: [],
      schedulingBlocks: [],
      staffSelected: "",
      staffSelectedIndex: 0,
      districtSelectedIndex: 0,
      keep_schedule: 0,
      staffSchedule: "",
      weeks: [
        {
          Sunday: {
            onsite: {
              repeat: "Never",
              categories: [],
              schedule: "",
              from: "",
              to: ""
            },
            virtual: {
              repeat: "Never",
              categories: [],
              schedule: "",
              from: "",
              to: ""
            }
          },
          Monday: {
            onsite: {
              repeat: "Never",
              categories: [],
              schedule: "",
              from: "",
              to: ""
            },
            virtual: {
              repeat: "Never",
              categories: [],
              schedule: "",
              from: "",
              to: ""
            }
          },
          Tuesday: {
            onsite: {
              repeat: "Never",
              categories: [],
              schedule: "",
              from: "",
              to: ""
            },
            virtual: {
              repeat: "Never",
              categories: [],
              schedule: "",
              from: "",
              to: ""
            }
          },
          Wednesday: {
            onsite: {
              repeat: "Never",
              categories: [],
              schedule: "",
              from: "",
              to: ""
            },
            virtual: {
              repeat: "Never",
              categories: [],
              schedule: "",
              from: "",
              to: ""
            }
          },
          Thursday: {
            onsite: {
              repeat: "Never",
              categories: [],
              schedule: "",
              from: "",
              to: ""
            },
            virtual: {
              repeat: "Never",
              categories: [],
              schedule: "",
              from: "",
              to: ""
            }
          },
          Friday: {
            onsite: {
              repeat: "Never",
              categories: [],
              schedule: "",
              from: "",
              to: ""
            },
            virtual: {
              repeat: "Never",
              categories: [],
              schedule: "",
              from: "",
              to: ""
            }
          },
          Saturday: {
            onsite: {
              repeat: "Never",
              categories: [],
              schedule: "",
              from: "",
              to: ""
            },
            virtual: {
              repeat: "Never",
              categories: [],
              schedule: "",
              from: "",
              to: ""
            }
          }
        },
        {
          Sunday: {
            onsite: {
              repeat: "Never",
              categories: [],
              schedule: "",
              from: "",
              to: ""
            },
            virtual: {
              repeat: "Never",
              categories: [],
              schedule: "",
              from: "",
              to: ""
            }
          },
          Monday: {
            onsite: {
              repeat: "Never",
              categories: [],
              schedule: "",
              from: "",
              to: ""
            },
            virtual: {
              repeat: "Never",
              categories: [],
              schedule: "",
              from: "",
              to: ""
            }
          },
          Tuesday: {
            onsite: {
              repeat: "Never",
              categories: [],
              schedule: "",
              from: "",
              to: ""
            },
            virtual: {
              repeat: "Never",
              categories: [],
              schedule: "",
              from: "",
              to: ""
            }
          },
          Wednesday: {
            onsite: {
              repeat: "Never",
              categories: [],
              schedule: "",
              from: "",
              to: ""
            },
            virtual: {
              repeat: "Never",
              categories: [],
              schedule: "",
              from: "",
              to: ""
            }
          },
          Thursday: {
            onsite: {
              repeat: "Never",
              categories: [],
              schedule: "",
              from: "",
              to: ""
            },
            virtual: {
              repeat: "Never",
              categories: [],
              schedule: "",
              from: "",
              to: ""
            }
          },
          Friday: {
            onsite: {
              repeat: "Never",
              categories: [],
              schedule: "",
              from: "",
              to: ""
            },
            virtual: {
              repeat: "Never",
              categories: [],
              schedule: "",
              from: "",
              to: ""
            }
          },
          Saturday: {
            onsite: {
              repeat: "Never",
              categories: [],
              schedule: "",
              from: "",
              to: ""
            },
            virtual: {
              repeat: "Never",
              categories: [],
              schedule: "",
              from: "",
              to: ""
            }
          }
        },
        {
          Sunday: {
            onsite: {
              repeat: "Never",
              categories: [],
              schedule: "",
              from: "",
              to: ""
            },
            virtual: {
              repeat: "Never",
              categories: [],
              schedule: "",
              from: "",
              to: ""
            }
          },
          Monday: {
            onsite: {
              repeat: "Never",
              categories: [],
              schedule: "",
              from: "",
              to: ""
            },
            virtual: {
              repeat: "Never",
              categories: [],
              schedule: "",
              from: "",
              to: ""
            }
          },
          Tuesday: {
            onsite: {
              repeat: "Never",
              categories: [],
              schedule: "",
              from: "",
              to: ""
            },
            virtual: {
              repeat: "Never",
              categories: [],
              schedule: "",
              from: "",
              to: ""
            }
          },
          Wednesday: {
            onsite: {
              repeat: "Never",
              categories: [],
              schedule: "",
              from: "",
              to: ""
            },
            virtual: {
              repeat: "Never",
              categories: [],
              schedule: "",
              from: "",
              to: ""
            }
          },
          Thursday: {
            onsite: {
              repeat: "Never",
              categories: [],
              schedule: "",
              from: "",
              to: ""
            },
            virtual: {
              repeat: "Never",
              categories: [],
              schedule: "",
              from: "",
              to: ""
            }
          },
          Friday: {
            onsite: {
              repeat: "Never",
              categories: [],
              schedule: "",
              from: "",
              to: ""
            },
            virtual: {
              repeat: "Never",
              categories: [],
              schedule: "",
              from: "",
              to: ""
            }
          },
          Saturday: {
            onsite: {
              repeat: "Never",
              categories: [],
              schedule: "",
              from: "",
              to: ""
            },
            virtual: {
              repeat: "Never",
              categories: [],
              schedule: "",
              from: "",
              to: ""
            }
          }
        },
        {
          Sunday: {
            onsite: {
              repeat: "Never",
              categories: [],
              schedule: "",
              from: "",
              to: ""
            },
            virtual: {
              repeat: "Never",
              categories: [],
              schedule: "",
              from: "",
              to: ""
            }
          },
          Monday: {
            onsite: {
              repeat: "Never",
              categories: [],
              schedule: "",
              from: "",
              to: ""
            },
            virtual: {
              repeat: "Never",
              categories: [],
              schedule: "",
              from: "",
              to: ""
            }
          },
          Tuesday: {
            onsite: {
              repeat: "Never",
              categories: [],
              schedule: "",
              from: "",
              to: ""
            },
            virtual: {
              repeat: "Never",
              categories: [],
              schedule: "",
              from: "",
              to: ""
            }
          },
          Wednesday: {
            onsite: {
              repeat: "Never",
              categories: [],
              schedule: "",
              from: "",
              to: ""
            },
            virtual: {
              repeat: "Never",
              categories: [],
              schedule: "",
              from: "",
              to: ""
            }
          },
          Thursday: {
            onsite: {
              repeat: "Never",
              categories: [],
              schedule: "",
              from: "",
              to: ""
            },
            virtual: {
              repeat: "Never",
              categories: [],
              schedule: "",
              from: "",
              to: ""
            }
          },
          Friday: {
            onsite: {
              repeat: "Never",
              categories: [],
              schedule: "",
              from: "",
              to: ""
            },
            virtual: {
              repeat: "Never",
              categories: [],
              schedule: "",
              from: "",
              to: ""
            }
          },
          Saturday: {
            onsite: {
              repeat: "Never",
              categories: [],
              schedule: "",
              from: "",
              to: ""
            },
            virtual: {
              repeat: "Never",
              categories: [],
              schedule: "",
              from: "",
              to: ""
            }
          }
        },
        {
          Sunday: {
            onsite: {
              repeat: "Never",
              categories: [],
              schedule: "",
              from: "",
              to: ""
            },
            virtual: {
              repeat: "Never",
              categories: [],
              schedule: "",
              from: "",
              to: ""
            }
          },
          Monday: {
            onsite: {
              repeat: "Never",
              categories: [],
              schedule: "",
              from: "",
              to: ""
            },
            virtual: {
              repeat: "Never",
              categories: [],
              schedule: "",
              from: "",
              to: ""
            }
          },
          Tuesday: {
            onsite: {
              repeat: "Never",
              categories: [],
              schedule: "",
              from: "",
              to: ""
            },
            virtual: {
              repeat: "Never",
              categories: [],
              schedule: "",
              from: "",
              to: ""
            }
          },
          Wednesday: {
            onsite: {
              repeat: "Never",
              categories: [],
              schedule: "",
              from: "",
              to: ""
            },
            virtual: {
              repeat: "Never",
              categories: [],
              schedule: "",
              from: "",
              to: ""
            }
          },
          Thursday: {
            onsite: {
              repeat: "Never",
              categories: [],
              schedule: "",
              from: "",
              to: ""
            },
            virtual: {
              repeat: "Never",
              categories: [],
              schedule: "",
              from: "",
              to: ""
            }
          },
          Friday: {
            onsite: {
              repeat: "Never",
              categories: [],
              schedule: "",
              from: "",
              to: ""
            },
            virtual: {
              repeat: "Never",
              categories: [],
              schedule: "",
              from: "",
              to: ""
            }
          },
          Saturday: {
            onsite: {
              repeat: "Never",
              categories: [],
              schedule: "",
              from: "",
              to: ""
            },
            virtual: {
              repeat: "Never",
              categories: [],
              schedule: "",
              from: "",
              to: ""
            }
          }
        }
      ],
      repeatOptions: ["Never", "All Week", "All Month", "Every Same Day"]
    };
  },
  computed: {
    days: function() {
      const date = moment();
      const day = date.day();
      let theDays = [];
      switch (day) {
        case 0:
          theDays = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ];
          break;
        case 1:
          theDays = [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          ];
          break;
        case 2:
          theDays = [
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
            "Monday"
          ];
          break;
        case 3:
          theDays = [
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
            "Monday",
            "Tuesday"
          ];
          break;
        case 4:
          theDays = [
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday"
          ];
          break;
        case 5:
          theDays = [
            "Friday",
            "Saturday",
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday"
          ];
          break;
        case 6:
          theDays = [
            "Saturday",
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
          ];
          break;
        default:
          null;
      }
      return theDays;
    }
  },
  methods: {
    findIndexOfDistrict: async function() {
      if (this.districts.length > 0) {
        if (
          this.districts.find(obj => obj.name === this.district.name) !==
          undefined
        ) {
          this.districtSelectedIndex =
            this.districts
              .find(obj => obj.name === this.district.name)
              .sites.indexOf(this.district.site) + 1;
        }
        const blocks = await this.$api.getSchedulingBlocks(this.district.site);
        for (let block of blocks) {
          let blockObject = {
            id: block.id,
            Friday: {
              from: block.days.fri.from,
              to: block.days.fri.to
            },
            Saturday: {
              from: block.days.sat.from,
              to: block.days.sat.to
            },
            Sunday: {
              from: block.days.sun.from,
              to: block.days.sun.to
            },
            Monday: {
              from: block.days.mon.from,
              to: block.days.mon.to
            },
            Tuesday: {
              from: block.days.tue.from,
              to: block.days.tue.to
            },
            Wednesday: {
              from: block.days.wed.from,
              to: block.days.wed.to
            },
            Thursday: {
              from: block.days.thu.from,
              to: block.days.thu.to
            }
          };
          this.schedulingBlocks.push(blockObject);
        }
      }
    },
    findIndexOfStaff: async function() {
      this.staffSelectedIndex = this.staff.find(
        element =>
          element.first_name + " " + element.last_name === this.staffSelected
      ).id;
      const found = this.staffSchedules.find(
        element =>
          element.site.id === this.district.site &&
          element.staff.id === this.staffSelectedIndex
      );
      if (!found) {
        await this.createStaffSchedule();
      } else {
        this.staffSchedule = found.id;
      }
      console.log(this.allStaffScheduleEntries);
      console.log(this.staffSchedule);
      const avalaibleEntries = this.allStaffScheduleEntries.filter(
        element => element.staff_schedule.id === this.staffSchedule
      );
      this.initiateSchdeule(avalaibleEntries);
    },
    initiateSchdeule(entries) {
      console.log(entries);
      for (let entry of entries) {
        for (let weekIndex in this.weeks) {
          for (let dayNumber in this.days) {
            let day = this.days[dayNumber];
            let daysDate = moment()
              .add(7 * weekIndex, "days")
              .add(dayNumber, "days")
              .format("MM/DD/YYYY");
            if (daysDate === entry.date) {
              if (entry.schedule_type === "on-site") {
                this.weeks[weekIndex][
                  day
                ].onsite.categories = entry.appointment_categories.map(
                  element => element.id
                );
                this.weeks[weekIndex][day].onsite.schedule =
                  entry.schedule_block.id;
                break;
              } else {
                this.weeks[weekIndex][
                  day
                ].virtual.categories = entry.appointment_categories.map(
                  element => element.id
                );
                this.weeks[weekIndex][day].virtual.schedule =
                  entry.schedule_block.id;
                break;
              }
            }
          }
        }
      }
      console.log(this.weeks);
    },
    getDate(i) {
      return moment()
        .add(7 * i, "days")
        .format("MM/DD/YYYY");
    },
    repeat(i, type) {
      let this_week = this.weeks[i];
      let next_week;
      if (i < 4) {
        next_week = this.weeks[i + 1];
      } else {
        next_week = this.weeks[0];
      }

      if (type === "onsite") {
        next_week["Sunday"].onsite.repeat = this_week["Sunday"].onsite.repeat;
        next_week["Sunday"].onsite.categories =
          this_week["Sunday"].onsite.categories;
        next_week["Sunday"].onsite.schedule =
          this_week["Sunday"].onsite.schedule;
        next_week["Monday"].onsite.repeat = this_week["Monday"].onsite.repeat;
        next_week["Monday"].onsite.categories =
          this_week["Monday"].onsite.categories;
        next_week["Monday"].onsite.schedule =
          this_week["Monday"].onsite.schedule;
        next_week["Tuesday"].onsite.repeat = this_week["Tuesday"].onsite.repeat;
        next_week["Tuesday"].onsite.categories =
          this_week["Tuesday"].onsite.categories;
        next_week["Tuesday"].onsite.schedule =
          this_week["Tuesday"].onsite.schedule;
        next_week["Wednesday"].onsite.repeat =
          this_week["Wednesday"].onsite.repeat;
        next_week["Wednesday"].onsite.categories =
          this_week["Wednesday"].onsite.categories;
        next_week["Wednesday"].onsite.schedule =
          this_week["Wednesday"].onsite.schedule;
        next_week["Thursday"].onsite.repeat =
          this_week["Thursday"].onsite.repeat;
        next_week["Thursday"].onsite.categories =
          this_week["Thursday"].onsite.categories;
        next_week["Thursday"].onsite.schedule =
          this_week["Thursday"].onsite.schedule;
        next_week["Friday"].onsite.repeat = this_week["Friday"].onsite.repeat;
        next_week["Friday"].onsite.categories =
          this_week["Friday"].onsite.categories;
        next_week["Friday"].onsite.schedule =
          this_week["Friday"].onsite.schedule;
        next_week["Saturday"].onsite.repeat =
          this_week["Saturday"].onsite.repeat;
        next_week["Saturday"].onsite.categories =
          this_week["Saturday"].onsite.categories;
        next_week["Saturday"].onsite.schedule =
          this_week["Saturday"].onsite.schedule;
      } else {
        next_week["Sunday"].virtual.repeat = this_week["Sunday"].virtual.repeat;
        next_week["Sunday"].virtual.categories =
          this_week["Sunday"].virtual.categories;
        next_week["Sunday"].virtual.schedule =
          this_week["Sunday"].virtual.schedule;
        next_week["Monday"].virtual.repeat = this_week["Monday"].virtual.repeat;
        next_week["Monday"].virtual.categories =
          this_week["Monday"].virtual.categories;
        next_week["Monday"].virtual.schedule =
          this_week["Monday"].virtual.schedule;
        next_week["Tuesday"].virtual.repeat =
          this_week["Tuesday"].virtual.repeat;
        next_week["Tuesday"].virtual.categories =
          this_week["Tuesday"].virtual.categories;
        next_week["Tuesday"].virtual.schedule =
          this_week["Tuesday"].virtual.schedule;
        next_week["Wednesday"].virtual.repeat =
          this_week["Wednesday"].virtual.repeat;
        next_week["Wednesday"].virtual.categories =
          this_week["Wednesday"].virtual.categories;
        next_week["Wednesday"].virtual.schedule =
          this_week["Wednesday"].virtual.schedule;
        next_week["Thursday"].virtual.repeat =
          this_week["Thursday"].virtual.repeat;
        next_week["Thursday"].virtual.categories =
          this_week["Thursday"].virtual.categories;
        next_week["Thursday"].virtual.schedule =
          this_week["Thursday"].virtual.schedule;
        next_week["Friday"].virtual.repeat = this_week["Friday"].virtual.repeat;
        next_week["Friday"].virtual.categories =
          this_week["Friday"].virtual.categories;
        next_week["Friday"].virtual.schedule =
          this_week["Friday"].virtual.schedule;
        next_week["Saturday"].virtual.repeat =
          this_week["Saturday"].virtual.repeat;
        next_week["Saturday"].virtual.categories =
          this_week["Saturday"].virtual.categories;
        next_week["Saturday"].virtual.schedule =
          this_week["Saturday"].virtual.schedule;
      }
      console.log(this.weeks);
    },
    repeatChanged(weekIndex, day, type, $event) {
      if ($event === "All Week") {
        for (let weekDay of this.days) {
          if (weekDay !== day) {
            if (type === "onsite") {
              this.weeks[weekIndex][weekDay].onsite.repeat = this.weeks[
                weekIndex
              ][day].onsite.repeat;
              this.weeks[weekIndex][weekDay].onsite.categories = this.weeks[
                weekIndex
              ][day].onsite.categories;
              this.weeks[weekIndex][weekDay].onsite.schedule = this.weeks[
                weekIndex
              ][day].onsite.schedule;
            } else {
              this.weeks[weekIndex][weekDay].virtual.repeat = this.weeks[
                weekIndex
              ][day].virtual.repeat;
              this.weeks[weekIndex][weekDay].virtual.categories = this.weeks[
                weekIndex
              ][day].virtual.categories;
              this.weeks[weekIndex][weekDay].virtual.schedule = this.weeks[
                weekIndex
              ][day].virtual.schedule;
            }
          }
        }
      } else if ($event === "All Month") {
        for (let weekNumber in this.weeks) {
          for (let weekDay of this.days) {
            if (!(weekNumber === weekIndex && weekDay === day)) {
              if (type === "onsite") {
                this.weeks[weekNumber][weekDay].onsite.repeat = this.weeks[
                  weekIndex
                ][day].onsite.repeat;
                this.weeks[weekNumber][weekDay].onsite.categories = this.weeks[
                  weekIndex
                ][day].onsite.categories;
                this.weeks[weekNumber][weekDay].onsite.schedule = this.weeks[
                  weekIndex
                ][day].onsite.schedule;
              } else {
                this.weeks[weekNumber][weekDay].virtual.repeat = this.weeks[
                  weekIndex
                ][day].virtual.repeat;
                this.weeks[weekNumber][weekDay].virtual.categories = this.weeks[
                  weekIndex
                ][day].virtual.categories;
                this.weeks[weekNumber][weekDay].virtual.schedule = this.weeks[
                  weekIndex
                ][day].virtual.schedule;
              }
            }
          }
        }
      } else if ($event === "Every Same Day") {
        for (let weekNumber in this.weeks) {
          if (weekNumber !== weekIndex) {
            if (type === "onsite") {
              this.weeks[weekNumber][day].onsite.repeat = this.weeks[weekIndex][
                day
              ].onsite.repeat;
              this.weeks[weekNumber][day].onsite.categories = this.weeks[
                weekIndex
              ][day].onsite.categories;
              this.weeks[weekNumber][day].onsite.schedule = this.weeks[
                weekIndex
              ][day].onsite.schedule;
            } else {
              this.weeks[weekNumber][day].virtual.repeat = this.weeks[
                weekIndex
              ][day].virtual.repeat;
              this.weeks[weekNumber][day].virtual.categories = this.weeks[
                weekIndex
              ][day].virtual.categories;
              this.weeks[weekNumber][day].virtual.schedule = this.weeks[
                weekIndex
              ][day].virtual.schedule;
            }
          }
        }
      }
    },
    async createStaffSchedule() {
      const payload = {
        type: "staff-schedules",
        attributes: { keep_schedule: this.keep_schedule },
        relationships: {
          site: { data: { type: "sites", id: this.district.site } },
          staff: { data: { type: "users", id: this.staffSelectedIndex } }
        }
      };
      const response = await this.$api.createStaffSchedule(payload);
      this.staffSchedule = response.id;
    },
    async createStaffScheduleEnteries() {
      const date = moment();
      const day = date.day();
      for (let index in this.weeks) {
        let week = this.weeks[index];
        let weekPayloads = [];
        for (let i in this.days) {
          let day = this.days[i];
          let daysDate = moment()
            .add(7 * index, "days")
            .add(i, "days")
            .format("MM/DD/YYYY");
          if (
            week[day].onsite.schedule !== "" &&
            week[day].onsite.categories !== []
          ) {
            weekPayloads.push({
              type: "staff-schedule-entries",
              attributes: {
                schedule_type: "on-site",
                date: daysDate,
                from: this.schedulingBlocks.find(
                  element => element.id === week[day].onsite.schedule
                )[day].from,
                to: this.schedulingBlocks.find(
                  element => element.id === week[day].onsite.schedule
                )[day].to
              },
              relationships: {
                staff_schedule: {
                  data: { type: "staff-schedules", id: this.staffSchedule }
                },
                schedule_block: {
                  data: {
                    type: "schedule-blocks",
                    id: week[day].onsite.schedule
                  }
                },
                appointment_categories: {
                  data: week[day].onsite.categories.map(element => {
                    return {
                      type: "appointment-categories",
                      id: element
                    };
                  })
                }
              }
            });
          }
          if (
            week[day].virtual.schedule !== "" &&
            week[day].virtual.categories !== []
          ) {
            weekPayloads.push({
              type: "staff-schedule-entries",
              attributes: {
                schedule_type: "virtual",
                date: daysDate,
                from: this.schedulingBlocks.find(
                  element => element.id === week[day].virtual.schedule
                )[day].from,
                to: this.schedulingBlocks.find(
                  element => element.id === week[day].virtual.schedule
                )[day].to
              },
              relationships: {
                staff_schedule: {
                  data: { type: "staff-schedules", id: this.staffSchedule }
                },
                schedule_block: {
                  data: {
                    type: "schedule-blocks",
                    id: week[day].virtual.schedule
                  }
                },
                appointment_categories: {
                  data: week[day].virtual.categories.map(element => {
                    return {
                      type: "appointment-categories",
                      id: element
                    };
                  })
                }
              }
            });
          }
        }
        console.log(weekPayloads);
        for (let payload of weekPayloads) {
          const response = await this.$api.createStaffScheduleEntry(payload);
          console.log(response);
        }
      }
    }
  },
  async asyncData(context) {
    const staff = await context.$api.getUsers();
    const categories = await context.$api.getAppointmentCategories();
    const allDistricts = await context.$api.getDistricts();
    const allSites = await context.$api.getSites();
    const staffSchedules = await context.$api.getStaffSchedules();
    const allStaffScheduleEntries = await context.$api.getStaffScheduleEntries();

    return {
      staff,
      categories,
      allDistricts,
      allSites,
      staffSchedules,
      allStaffScheduleEntries
    };
  },
  mounted() {
    let tmp = [];
    this.allDistricts.forEach((element, index) => {
      tmp.push({
        name: element.name,
        sites: []
      });
      if (element.sites.length > 0) {
        let tmp_sites = [];
        element.sites.forEach(dist_site => {
          this.allSites.forEach(site => {
            if (site.id === dist_site.id) {
              tmp_sites.push({
                text: site.name,
                id: dist_site.id
              });
            }
          });
        });
        tmp[index].sites = tmp_sites;
      }
    });
    this.districts = tmp;
  }
};
</script>
