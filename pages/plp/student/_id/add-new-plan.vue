<template>
  <div class>
    <div class="row">
      <div class="col-12">
        <div class="thinner-box card-box widget-inline">
          <div class="row">
            <div class="col-sm-6 col-xl-1" />
            <GcIconBox
              label="Acceleration ID"
              :value="id"
              icon-style="mdi mdi-account-key text-primary mdi-24px"
            />
            <GcIconBox
              label="Location"
              :value="site ? site.district.name : 'N/A'"
              icon-style="mdi mdi-map text-success mdi-24px"
            />
            <div class="col-sm-6 col-xl-2">
              <div class="p-2 text-center">
                <i
                  class="fas fa-spinner text-success mdi-24px text-warning"
                  style="font-size: 24px;margin-top:10px;"
                />
                <p class="text-muted font-15 mb-0">Phase/Status</p>
                <h5>
                  <span>{{ status ? status.phase.name : "N/A" }}</span>
                  <span>{{ status ? '/' + status.name : "" }}</span>
                </h5>
              </div>
            </div>

            <GcIconBox
              label="GCA"
              :value="
                graduate_candidate_advocate
                  ? graduate_candidate_advocate.first_name + ' ' + graduate_candidate_advocate.last_name
                  : 'N/A'
              "
              icon-style="mdi mdi-alert-circle text-info mdi-24px"
            />

            <GcIconBox
              label="GC Name"
              :value="first_name + ' ' + last_name"
              icon-style="mdi mdi-certificate text-blue mdi-24px"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-3">
        <Studentsidenav :student-id="$route.params.id" />
      </div>
      <div class="col-md-8">
        <form method="post" class="strict" enctype="multipart/form-data">
          <div id="choose">
            <center>
              <div class="input firstname">
                <label for="name">Select Diploma Type</label>
                <select name="plan_id" id="plan_id" v-model="diplomaType">
                  <option disabled value>Selct Plan</option>
                  <option :value="plan.id" :key="plan.id" v-for="plan of getPlans">{{ plan.name }}</option>
                </select>
              </div>
            </center>
          </div>
          <br />
          <center>
            <input
              class="save-btn"
              type="submit"
              value="Save &amp; Continue"
              name="plp[submit]"
              @click="addPlan"
            />
          </center>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
#choose {
  width: 500px;
  height: 100px;
  /* background-color: red; */
  position: relative;
  top: 50%;
  bottom: 0;
  left: 0%;
  right: 0;
  margin: auto;
  font-size: 1.3em;
  font-weight: bolder;
}
#choose option {
  font-size: 1em;
}
.thinner-box {
  padding: 0 !important;
}
</style>

<script>
import Api from "../../../../services/api/Api";

export default {
  data() {
    return {
      diplomaType: ""
    };
  },
  async asyncData(context) {
    const api = new Api(context);
    const student = await api.getStudent(context.route.params.id);
    const plans = await api.getPlpPlans();
    console.log(plans);

    return {
      ...student,
      plans,
      api
    };
  },
  computed: {
    getPlans: function() {
      return this.plans.filter(
        element =>
          element.district.id === this.site.district.id &&
          element.status === "active"
      );
    }
  },
  methods: {
    addPlan: function() {
      const payload = {
        type: "student-plp-plans",
        relationships: {
          district_plp_plan: {
            data: { type: "district-plp-plans", id: this.diplomaType }
          },
          student: { data: { type: "students", id: this.$route.params.id } }
        }
      };
      console.log(this.diplomaType);
      this.api
        .addStudentPlpPlan(payload)
        .then(data => {
          console.log(data);
          this.$router.push(`/plp/student/${this.$route.params.id}`);
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted: function() {
    // if (!this.$store.state.modules.includes("plp")) {
    //   throw new Error();
    // }
    $("form").submit(false);
  }
};
</script>
