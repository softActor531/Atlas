<template>
  <div>
    <div
      id="locationModal"
      class="modal fade"
      tabindex="-1"
      role="dialog"
      aria-labelledby="myCenterModalLabel"
      aria-hidden="true"
      style="display: none;"
    >
      <div class="modal-dialog modal-dialog-centered modal-l">
        <div class="modal-content">
          <div class="modal-header">
            <h4 id="alert-modal-label" class="modal-title">
              Filter by Location
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
          <div class="modal-body">
            <form>
              <div class="row">
                <InputSelectGroup2
                  label="District"
                  name="district"
                  :id="district"
                  width="6"
                  :array="districts"
                  placeholder="Choose District"
                  @districtChanged="districtChanged($event)"
                />
                <InputSelectGroup2
                  label="Site"
                  name="site"
                  :id="site"
                  width="6"
                  :array="sites"
                  placeholder="Choose Site"
                  @districtChanged="site = $event"
                />
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
                      @click="fetchScheduleByLocation"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <!-- /.modal-content -->
      </div>
      <!-- /.modal-dialog -->
    </div>
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
          <div class="modal-header">
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
          <div class="modal-body">
            <form>
              <div class="row">
                <InputSelectGroup2
                  label="Catergory"
                  name="category"
                  :id="category"
                  width="6"
                  :array="categories"
                  placeholder="Choose Category"
                  @categoryChanged="category = $event"
                />
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
                      @click="fetchScheduleByCategory"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-3 mt-3">
        <Sidenav />
      </div>
      <div class="col-xs-12 col-sm-12 col-md-9">
        <div class="page-title-box">
          <h4 class="page-title">My Schedule GCs</h4>
        </div>
        <div class="row">
          <div class="col-sm-12 col-md-12">
            <div class="card">
              <div class="card-body">
                <h4 class="mb-3 header-title">
                  <i class="mdi mdi-filter" />
                  My Schedule GCs
                </h4>
                <div class="row">
                  <div class="col-xs-12 col-md-3" />
                  <button
                    class="btn btn-primary btn-rounded waves-effect waves-light col-xs-12 col-md-3"
                    data-toggle="modal"
                    data-target="#locationModal"
                  >
                    Filter by Location
                  </button>
                  <!-- <div class="col-xs-12 col-md-1"></div> -->
                  &nbsp;&nbsp;
                  <button
                    class="btn btn-primary btn-rounded waves-effect waves-light col-xs-12 col-md-3"
                    data-toggle="modal"
                    data-target="#categoryModal"
                  >
                    Filter by Category
                  </button>
                  <div class="col-xs-12 col-md-3" />
                </div>

                <div class="text-right">
                  <nuxt-link
                    class="btn btn-primary btn-rounded waves-effect waves-light float-right"
                    to="#"
                  >
                    <i class="fa fa-plus-circle" aria-hidden="true" />
                    Schedule GC
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <FullCalendar :options="calendarOptions" />
      </div>
      <b-modal id="schedule-gc" hide-footer size="lg" centered>
        <template v-slot:modal-title>
          Schedule Details
        </template>
        <b-row>
          <b-col>
            <h5>Appointment Type:</h5>
            <h5>Date:</h5>
            <h4>Categories:</h4>
            <h5 class="ml-2">
              dummy category
            </h5>
          </b-col>
          <b-col>
            <h5>Site:</h5>
            <h5>Time:</h5>
          </b-col>
          <b-col>
            <b-avatar variant="primary" text="BV" />
            <b-avatar variant="info" src="https://placekitten.com/300/300" />
          </b-col>
        </b-row>
        <!-- <b-button class="mt-3" block @click="$bvModal.hide('schedule-gc')">
          Close Me
        </b-button> -->
      </b-modal>
    </div>
  </div>
</template>

<style>
#bv-modal-example {
  height: 40vh;
}

@media only screen and (max-height: 700px) {
  #bv-modal-example {
    height: 50vh;
  }
}

.modal-content {
  height: 30vh;
  box-shadow: 0 2px 6px -2px rgba(0, 0, 0, 0.16),
    0 2px 6px 0 rgba(0, 0, 0, 0.12);
}

.fc-title {
  font-size: 0.9em;
}
</style>

<script>
import FullCalendar from "@fullcalendar/vue";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import LogsSideBar from "@/components/logs/LogsSideBar";

const vm = this;

export default {
  components: {
    LogsSideBar,
    FullCalendar
  },
  async asyncData() {
    const studentSchedules = await $nuxt.$api.getStudentScheduleEnteries();
    const districts = await $nuxt.$api.getDistricts();
    const categories = await $nuxt.$api.getCategories();
    return {
      studentSchedules,
      districts,
      categories
    };
  },
  data() {
    return {
      category: "",
      district: "",
      site: "",
      sites: []
    };
  },
  computed: {
    getAppointmentCategories() {
      return [].concat(
        ...this.studentSchedules.map(schedule =>
          schedule.appointment_categories.map(category => category.name)
        )
      );
    },
    getEvents() {
      this.getAppointmentCategories.map((element, index) => {
        return {
          title: element,
          start: new Date(Date.now() + 3600 * 1000 * 24 * (index + 1))
        };
      });
    },
    calendarOptions() {
      return {
        plugins: [dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin],
        headerToolbar: {
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay,list"
        },
        editable: true,
        events: [].concat
          .apply(
            [],
            this.studentSchedules.map(element => element.appointment_categories)
          )
          .map(element => element.name)
          .map((element, index) => {
            return {
              title: element,
              start: new Date(Date.now() + 3600 * 1000 * 24 * (index + 1))
            };
          }),
        eventClick: event => {
          this.clickEvent(event);
          this.$bvModal.show("schedule-gc");
        },
        eventDragStart: e => {
          console.log(e);
        },
        eventDragStop: e => {
          console.log(e);
        }
      };
    }
  },
  methods: {
    clickEvent(x) {
      console.log(x);
    },
    async districtChanged($event) {
      this.district = $event;
      this.sites = await this.$api.getSitesByDistrict($event);
    },
    async fetchScheduleByLocation() {
      this.studentSchedules = await this.$api.getStudentScheduleEnteriesBySite(
        this.site
      );
    },
    async fetchScheduleByCategory() {
      this.studentSchedules = await this.$api.getStudentScheduleEnteriesByCategory(
        this.category
      );
    }
  }
};
</script>
