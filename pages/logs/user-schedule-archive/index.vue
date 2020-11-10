<template>
  <div class="container-fluid">
    <div
      id="categoryModal"
      class="modal fade"
      tabindex="-1"
      role="dialog"
      aria-labelledby="myCenterModalLabel"
      style="display: none;"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-l">
        <div class="modal-content">
          <div class="modal-header mb-4">
            <h4 id="alert-modal-label" class="modal-title">
              Filter by Category
            </h4>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-hidden="true"
            >
              ×
            </button>
          </div>
          <div class="modal-body mt-4">
            <form>
              <div class="row">
                <div class="col-xs-12 col-md-12">
                  <div class="form-group phase">
                    <label for="category_id">Choose Category</label>
                    <select
                      v-model="category"
                      class="form-control"
                      name="category_id"
                    >
                      <option
                        v-for="(item, index) in categories"
                        :key="index"
                      >
                        {{ item }}
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-xs-12 col-md-12">
                  <div class="form-group student_stage">
                    <input
                      class="btn btn-primary waves-effect waves-light mb-2"
                      type="submit"
                      name="schedule[submit]"
                      value="Get Data"
                      data-dismiss="modal"
                      @click="fetchSchedule"
                    >
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <Sidenav />
      <div class="col-xs-12 col-sm-12 col-md-9">
        <div class="page-title-box">
          <h4 class="page-title">
            My Schedule
          </h4>
        </div>
        <div class="row">
          <div class="col-sm-12 col-md-12">
            <div class="card">
              <div class="card-body">
                <h4 class="mb-3 header-title">
                  <i class="mdi mdi-filter" />
                  My Schedule
                </h4>
                <div class="row">
                  <div class="col-xs-12 col-md-3" />
                  &nbsp;&nbsp;
                  <button
                    class="btn btn-primary btn-rounded waves-effect waves-light col-xs-12 col-md-6"
                    data-toggle="modal"
                    data-target="#categoryModal"
                  >
                    Filter by Category
                  </button>
                  <div class="col-xs-12 col-md-3" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <FullCalendar :options="calendarOptions" />
      </div>

      <b-modal id="schedule-staff" hide-footer size="lg" centered>
        <template v-slot:modal-title>
          Schedule Details
        </template>
        <b-row>
          <b-col>
            <h5>Appointment Type: </h5>
            <h5>Date: </h5>
            <h4>Categories: </h4>
            <h5 class="ml-2">
              dummy category
            </h5>
          </b-col>
          <b-col>
            <h5>Site: </h5>
            <h5>Time: </h5>
          </b-col>
          <b-col>
            <b-avatar variant="primary" text="BV" />
            <b-avatar variant="info" src="https://placekitten.com/300/300" />
          </b-col>
        </b-row>
        <!-- <b-button class="mt-3" block @click="$bvModal.hide('schedule-staff')">
          Close Me
        </b-button> -->
      </b-modal>
    </div>
  </div>
</template>

<style>
.modal-content {
  height: 30vh;
  box-shadow: 0 2px 6px -2px rgba(0, 0, 0, 0.16),
    0 2px 6px 0 rgba(0, 0, 0, 0.12);
}

.fc-title {
  font-size: 0.9em;
}

@media only screen and (max-height: 700px) {
  .modal-content {
    height: 50vh;
  }
}
</style>

<script>
import moment from 'moment'
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import interactionPlugin from '@fullcalendar/interaction'
import LogsSideBar from '../../../components/logs/LogsSideBar'

import { fetchSchedule } from '../../../Api'

export default {
  components: {
    LogsSideBar,
    FullCalendar
  },
  async asyncData (context) {
    const staffSchedules = await context.$api.getStaffScheduleEntries()
    const districts = await context.$api.getDistricts()
    const categories = await context.$api.getAppointmentCategories()
    return {
      staffSchedules,
      districts,
      categories
    }
  },
  data () {
    return {
      category: '',
      district: '',
      site: '',
      sites: []
    }
  },
  computed: {
    getAppointmentCategories () {
      return [].concat
        .apply(
          [],
          this.staffSchedules.map(element => element.appointment_categories)
        )
        .map(element => element.name)
    },
    getEvents () {
      this.getAppointmentCategories.map((element, index) => {
        return {
          title: element,
          start: new Date(Date.now() + 3600 * 1000 * 24 * (index + 1))
        }
      })
    },
    calendarOptions () {
      return {
        plugins: [dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin],
        headerToolbar: {
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay,list'
        },
        editable: true,
        events: [].concat
          .apply(
            [],
            this.staffSchedules.map(element => element.appointment_categories)
          )
          .map(element => element.name)
          .map((element, index) => {
            return {
              title: element,
              start: new Date(Date.now() + 3600 * 1000 * 24 * (index + 1))
            }
          }),
        eventClick: (event) => {
          this.clickEvent(event.event)
          this.$bvModal.show('schedule-staff')
        },
        eventDragStart: (e) => {
          console.log(e)
        },
        eventDragStop: (e) => {
          console.log(e)
        }
      }
    }
  },
  methods: {
    clickEvent (x) {
      console.log(x)
    },
    fetchSchedule () {
      return fetchSchedule()
    },

    async districtChanged ($event) {
      this.district = $event
      this.sites = await this.$api.getSitesByDistrict($event)
    },
    async fetchScheduleByLocation () {
      this.staffSchedules = await this.$api.getStaffScheduleEnteriesBySite(
        this.site
      )
    },
    async fetchScheduleByCategory () {
      this.staffSchedules = await this.$api.getStaffScheduleEnteriesByCategory(
        this.category
      )
    }
  }
}
</script>
