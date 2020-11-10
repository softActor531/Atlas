<template>
  <div class="row mt-3">
    <div class="col-md-3">
      <Sidenav />
    </div>
    <div class="col-md-9">
      <h1 class="mt-0 pt-0">Gc Schedule</h1>
      <div class="card">
        <div class="card-body">
          <div class="row">
            <InputSelectGroup
              :id="form.student"
              width="4"
              :important="true"
              label="Select a GC "
              type="text"
              name="gc"
              class="col-xs-12 col-md-6"
              :array="
                students.map(student => student.first_name + student.last_name)
              "
              @gcChanged="form.student = $event"
            />

            <div class="question col-xs-12 col">
              <div class="row">
                <div class="col-xs-12 col-md-6">
                  <div class="form-group p-2">
                    <label>Appointment Type</label>
                    <div class="input-group">
                      <div class="radio radio-info form-check-inline mr-4">
                        <input
                          type="radio"
                          id="on-site"
                          class="fetch-data appointment-type"
                          value="on-site"
                          name="appointment_type"
                          v-model="form.appointment_type"
                        />

                        <label for="on-site">On Site</label>
                      </div>
                      <div class="radio radio-info form-check-inline">
                        <input
                          type="radio"
                          class="fetch-data appointment-type"
                          id="virtual"
                          value="virtual"
                          name="appointment_type"
                          v-model="form.appointment_type"
                        />
                        <label for="virtual">Virtual</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xs-12 col-md-6">
                  <div class="form-group">
                    <label>What are you looking to schedule?</label>
                    <div class="input-group">
                      <div class="radio radio-info form-check-inline mr-3">
                        <input
                          type="radio"
                          id="reason1"
                          class="reason fetch-data"
                          value="1"
                          name="reason"
                          v-model="form.schedule_subject"
                          @change="getStaff"
                        />
                        <label for="reason1">I want to meet with...</label>
                      </div>
                      <div class="radio radio-info form-check-inline mr-3">
                        <input
                          type="radio"
                          id="reason2"
                          class="reason fetch-data"
                          value="2"
                          name="reason"
                          v-model="form.schedule_subject"
                          @change="getStaff"
                        />
                        <label for="reason2">I need to work on...</label>
                      </div>
                      <div class="radio radio-info form-check-inline mr-3">
                        <input
                          type="radio"
                          id="reason3"
                          class="reason fetch-data"
                          value="3"
                          name="reason"
                          v-model="form.schedule_subject"
                          @change="getStaff"
                        />
                        <label for="reason3">I want to come in on...</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="form-group col-xs-12 col-md-12" v-if="form.schedule_subject != ''">
              <label for>
                Select a Staff
                <code>*</code>
              </label>
              <v-select
                class="col-xs-12 col-md-12 p-0"
                v-model="form.staff"
                :options="
                  staff.map(person => person.first_name + person.last_name)
                "
              />
            </div>
            <div class="form-group col-xs-12 col-md-12" v-if="form.staff != ''">
              <label for>
                Select Categories
                <code>*</code>
              </label>
              <v-select
                multiple
                tagable
                class="col-xs-12 col-md-12 p-0"
                v-model="form.categories"
                :options="categories.map(category => category.name)"
              />
            </div>
          </div>
          <div class="card-footer text-center bg-transparent mt-3">
            <button type="submit" class="btn btn-success" @click="save">
              <i class="mdi mdi-content-save-all"></i> Save
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidenav from "@/components/schedule/Sidenav";
import InputSelectGroup from "@/components/UI/InputSelectGroup";
import appointmentCategory from "../services/api/mock/appointment-category";

export default {
  data() {
    return {
      staff: [],
      categories: [],
      students: [],
      form: {
        student: "",
        appointment_type: "",
        schedule_subject: "",
        staff: "",
        categories: []
      }
    };
  },

  components: {
    Sidenav,
    InputSelectGroup
  },

  beforeMount() {
    this.getStudents();
  },

  mounted() {},

  watch: {
    "form.staff": function() {
      this.getCategories();
    }
  },

  methods: {
    getStudents() {
      this.$axios
        .get("http://atlas-rebuild-api.mtcdevsite.com/api/v1/students")
        .then(res => (this.students = this.$formatter.deserialize(res.data)))
        .catch(err => console.log(err));
    },
    getStaff() {
      this.$axios
        .get("http://atlas-rebuild-api.mtcdevsite.com/api/v1/users")
        .then(res => (this.staff = this.$formatter.deserialize(res.data)))
        .catch(err => console.log(err));
    },
    getCategories() {
      this.$axios
        .get("http://atlas-rebuild-api.mtcdevsite.com/api/v1/appointment-categories")
        .then(res => (this.categories = this.$formatter.deserialize(res.data)))
        .catch(err => console.log(err));
    },
    save() {
      let appointmentCategories = this.form.categories.map(categoryName => {
        return {
          type: "appointment-categories",
          id: this.categories.find(category => category.name == categoryName).id
        };
      });

      let data = {
        data: {
          type: "student-schedule-entries",
          attributes: {
            appointment_type: this.form.appointment_type
          },
          relationships: {
            student: {
              data: {
                type: "students",
                id: this.students.find(
                  student =>
                    student.first_name + student.last_name == this.form.student
                ).id
              }
            },
            staff: {
              data: {
                type: "users",
                id: this.staff.find(
                  person =>
                    person.first_name + person.last_name == this.form.staff
                ).id
              }
            },
            appointment_categories: {
              data: appointmentCategories
            }
          }
        }
      };

      this.$axios
        .post("v1/student-schedule-entries", data)
        .then(res => {
          if (res.status == 201) {
            this.$router.back();
          }
        })
        .catch(e => {
          $nuxt.error(new Error());
        });
    }
  }
};
</script>

<style>
.vs--searchable .vs__dropdown-toggle {
  padding: 0.45rem 0.9rem !important;
}
</style>
