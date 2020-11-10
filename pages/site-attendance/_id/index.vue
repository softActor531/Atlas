<template>
  <div class="row">
    <div class="card col-sm-12 mt-3">
      <div class="card-body">
        <h4 class="mb-3 header-title">
          <i class="mdi mdi-square-edit-outline" />
          Create Appointment Category
        </h4>
        <div class="row">
          <div class="col-xs-12 col-md-6">
            <div class="form-group input first_date">
              <label for="student_first_date">Check in</label>
              <flat-pickr
                v-model="data.attributes.check_in"
                class="date-picker form-control flatpickr-input"
              />
            </div>
          </div>
          <!-- <div class="col-xs-12 col-md-6">
            <div class="form-group input first_date">
              <label for="student_first_date">Check Out</label>
              <flat-pickr
                v-model="data.attributes.check_out"
                class="date-picker form-control flatpickr-input"
              />
            </div>
          </div>-->
          <!-- <div class="col-xs-12 col-md-6">
            <div class="form-group input first_date">
              <label for="student_first_date">Absence</label>
              <InputGroup
                :id="data.absence"
                name="absence"
                @input="data.absence = $event"
              />
            </div>
          </div>-->
          <div class="col-xs-12 col-md-6">
            <div class="form-group input note">
              <label for="note">Notes</label>
              <input class="form-control" v-model="data.attributes.note" name="note" />
            </div>
          </div>
          <!-- <div class="col-xs-12 col-md-6">
            <div class="form-group input first_date">
              <label for="student_first_date">Next Date Commited</label>
              <flat-pickr
                v-model="data.next_date_commited"
                class="date-picker form-control flatpickr-input"
              />
            </div>
          </div>-->
          <div class="col-xs-12 col-md-12">
            <div class="float-right">
              <button
                type="submit"
                class="btn btn-blue waves-effect waves-light mb-2"
                @click="create"
              >
                <i class="mdi mdi-circle-edit-outline" /> Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";
import InputGroup from "@/components/UI/InputGroup";

export default {
  components: { flatPickr, InputGroup },
  data() {
    return {
      slug: this.$route.params.id,

      data: {
        type: "student-attendance-entries",
        attributes: {
          check_in: "",
          // check_out: "",
          note: ""
        },
        relationships: {
          student: {
            data: { type: "students", id: this.$route.params.id }
          }
        }
      }
    };
  },

  methods: {
    create() {
      this.$axios
        .post(
          "http://atlas-rebuild-api.mtcdevsite.com/api/v1/student-attendance-entries?include=student",
          {
            data: this.data
          },
          {
            headers: {
              Accept: "application/vnd.api+json",
              "Content-Type": "application/vnd.api+json"
            }
          }
        )
        .then(() => {
          console.log(this.data);
        });
    }
  }
};
</script>





