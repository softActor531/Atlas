<template>
  <div>
    <h1>Add New Plan</h1>
    <form>
      <b-col md="6" sm="12">
        <VSelectGroup
          :label="district_label"
          id="district"
          :options="districts"
          valueField="name"
          textField="id"
          placeholder="Choose District"
          :selected="form.district"
          :v="$v.form.district"
          :required="true"
          @districtChanged="districtChanged"
        />
      </b-col>
      <b-col md="6" sm="12">
        <VInputGroup
          label="Diploma Name"
          id="diploma_name"
          type="text"
          :value="form.diploma_name"
          :v="$v.form.diploma_name"
          :required="true"
          @diploma_nameChanged="form.diploma_name = $event"
        />
      </b-col>
      <b-col md="6" sm="12">
        <VInputGroup
          label="Number Of Credits"
          id="numberOfCredits"
          type="number"
          :value="form.numberOfCredits"
          :v="$v.form.numberOfCredits"
          :required="true"
          @numberOfCreditsChanged="form.numberOfCredits = $event"
        />
      </b-col>
      <b-col md="6" sm="12">
        <VSelectGroup
          label="Tier System"
          id="tierSystem"
          :options="
            tiers.map(element => {
              return { name: element, value: element };
            })
          "
          placeholder="Choose Tier"
          textField="name"
          valueField="value"
          :selected="form.tierSystem"
          :v="$v.form.tierSystem"
          :required="true"
          @tierSystemChanged="form.tierSystem = $event"
        />
      </b-col>
      <b-col md="6" sm="12">
        <VSelectGroup
          label="Credit System"
          id="creditSystem"
          :options="
            creditSystems.map(element => {
              return { name: element, value: element };
            })
          "
          placeholder="Choose Credit System"
          textField="name"
          valueField="value"
          :selected="form.creditSystem"
          :v="$v.form.creditSystem"
          :required="true"
          @creditSystemChanged="form.creditSystem = $event"
        />
      </b-col>
      <b-col md="6" sm="12">
        <VSelectGroup
          label="Status"
          id="planStatus"
          :options="
            statuses.map(element => {
              return { name: element, value: element };
            })
          "
          placeholder="Choose Statuses"
          textField="name"
          valueField="value"
          :selected="form.status"
          :v="$v.form.status"
          :required="true"
          @planStatusChanged="form.status = $event"
        />
      </b-col>
      <br />
      <div class="col-md-12" :key="index" v-for="(group, index) of groups">
        <h2>
          <br />
          {{ group.name }}
        </h2>
        <div>
          <div
            class="form-group col-md-6 firstname"
            v-if="group.credits !== null"
          >
            <label for="name">
              <strong>Minimum Number Of Credits Required ::</strong>
            </label>

            <input
              class="form-control"
              type="number"
              step="any"
              placeholder
              maxlength="50"
              v-model="group.credits"
            />
          </div>
        </div>
        <b-col cols="12">
          <CardWidget
            v-if="group.credits !== null"
            wrapper="div"
            name="english"
            :options="group.items.map(element => element.name)"
            @englishUpdated="group.choices = $event"
          />
          <CardWidget
            v-if="group.credits === null"
            wrapper="div"
            name="english"
            :assessment="true"
            :options="group.items.map(element => element.name)"
            @englishUpdated="group.choices = $event"
          />
        </b-col>
      </div>
      <div class="clear"></div>
      <div class="clear"></div>
      <input
        class="btn btn-primary waves-effect waves-light"
        type="submit"
        value="Save"
        name="plan[submit]"
        @click="addPlan"
      />
    </form>
  </div>
</template>

<style scoped>
.general-input {
  margin-top: 24px !important;
}
.assessment-input {
  width: 60% !important;
  margin-bottom: 4px !important;
}
form input[type="submit"] {
  position: fixed;
  right: 30px;
  bottom: 40px;
  z-index: 99;
  box-shadow: 0 0 5px #000;
  border: 1px solid #ccc;
}
.whit-color {
  color: #fff;
}
button {
  margin-top: 10px;
}
</style>

<script>
import InputSelectGroup from "../../../components/UI/InputSelectGroup";
import InputGroup from "../../../components/UI/InputGroup";

import Api from "../../../services/api/Api";

import Swal from "sweetalert2";

import VInputGroup from "../../../components/UI/VInputGroup";
import VSelectGroup from "../../../components/UI/VSelectGroup";
import { validationMixin } from "vuelidate";
import { required, integer, between } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  components: {
    VInputGroup,
    VSelectGroup
  },
  async asyncData(context) {
    const api = new Api(context);
    const districts = await api.getDistricts();
    const allCourses = await api.getPlpCourses();

    return {
      districts,
      allCourses,
      api
    };
  },
  data() {
    return {
      district_label:this.$store.state.fields.length > 0 ? this.$store.state.fields.find(element => {
        return element.base_name == "District";
      }).custom_name : "District",
      groups: [],
      tiers: ["Tier 4", "Tier 5"],
      creditSystems: ["Quarter Credits", "Fractional Credits"],
      statuses: ["inactive", "active", "draft"],
      submitted: false,
      courses: [],
      form: {
        diploma_name: "",
        district: null,
        numberOfCredits: "",
        tierSystem: null,
        creditSystem: null,
        status: null
      }
    };
  },
  mounted() {
    // if (!this.$store.state.modules.includes("plp")) {
    //   throw new Error();
    // }

    for (let course of this.allCourses) {
      const plpGroups = this.groups.map(element => element.name);
      if (!plpGroups.includes(course.group.name)) {
        this.groups.push({
          name: course.group.name,
          id: course.group.id,
          items: [],
          credits: course.group.min_credit,
          choices: [],
          choices_ids: []
        });
      }
      // for (let group of this.groups) {
      //   if (course.group.name === group.name) {
      //     group.items.push(course);
      //     break;
      //   }
      // }
    }

    console.log(this.groups);

    $("form").submit(false);
  },
  validations: {
    form: {
      diploma_name: { required },
      district: { required },
      numberOfCredits: {
        required,
        integer,
        between: between(0, 1000)
      },
      tierSystem: { required },
      creditSystem: { required },
      status: { required }
    }
  },
  methods: {
    async districtChanged($event) {
      this.form.district = $event;
      const defaultPlan = await this.$api.getDefaultPlpPlan($event);
      this.updateCourses(defaultPlan);
    },
    tierChanged($event) {
      console.log($event);
    },
    updateCourses(defaultPlan) {
      for (let group of this.groups) {
        if (defaultPlan.content) {
          for (let group_plan of defaultPlan.content) {
            if (group_plan.group.name === group.name) {
              console.log(group_plan);
              group.credits = group_plan.group.min_credit;
              group.items = group_plan.courses;
            }
          }
        }
      }
      // for (let course of this.courses) {
      //   const plpGroups = this.groups.map(element => element.name);
      //   if (!plpGroups.includes(course.group.name)) {
      //     this.groups.push({
      //       name: course.group.name,
      //       items: [course],
      //       credits: course.group.min_credit,
      //       choices: [],
      //       choices_ids: []
      //     });
      //   }
      //   for (let group of this.groups) {
      //     if (course.group.name === group.name) {
      //       group.items.push(course);
      //       break;
      //     }
      //   }
      // }
      // console.log(this.groups);
    },
    addPlan: function() {
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }
      // for (let group of this.groups) {
      //   group.choices_ids = [];
      //   for (let choice of group.choices) {
      //     for (let course of this.courses) {
      //       if (course.name === choice && group.name === course.group.name) {
      //         group.choices_ids.push(course.id);
      //         break;
      //       }
      //     }
      //   }
      // }

      for (let group of this.groups) {
        for (let choice of group.choices) {
          if (choice.choice !== "Other") {
            if (choice.tier5) {
              group.choices_ids.push({
                choice: choice.choice,
                score: choice.score,
                tier5: choice.tier5
              });
            } else {
              if (choice.choice) {
                group.choices_ids.push({ choice: choice.choice });
              } else {
                group.choices_ids.push({ choice: choice });
              }
            }
          } else {
            if (choice.tier5) {
              group.choices_ids.push({
                choice: choice.other,
                score: choice.score,
                tier5: choice.tier5
              });
            } else {
              group.choices_ids.push({ choice: choice.other });
            }
          }
        }
      }
      console.log(this.groups);

      const payloadContent = [];
      for (let group of this.groups) {
        let coursesPayload = [];
        if (group.credits === null) {
          // ASSESSMENT
          for (let choice of group.choices_ids) {
            coursesPayload.push({
              name: choice.choice,
              tier_5: choice.tier5,
              min_score: choice.score
            });
          }
        } else {
          // Course
          for (let choice of group.choices_ids) {
            coursesPayload.push({
              name: choice.choice
            });
          }
        }
        if (coursesPayload.length > 0) {
          payloadContent.push({
            group: {
              name: group.name,
              min_credit: group.credits,
              assessment: group.credits === null ? 1 : 0
            },
            courses: coursesPayload
          });
        }
      }

      console.log(payloadContent);

      const payload = {
        type: "district-plp-plans",
        attributes: {
          name: this.form.diploma_name,
          tier_system: this.form.tierSystem,
          credit_system: this.form.creditSystem,
          credit: this.form.numberOfCredits,
          status: this.form.status,
          content: payloadContent
        },
        relationships: {
          district: { data: { type: "districts", id: this.form.district } }
        }
      };

      this.api
        .addPlpPlan(payload)
        .then(data => {
          console.log(data);
          Swal.fire(
            "Request successful!",
            `Created plan (${this.diploma})!`,
            "success"
          );
          this.$router.push("/plp");
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  components: {
    InputSelectGroup,
    InputGroup
  }
};
</script>
