<template>
  <div>
    <h1>Edit Plan</h1>
    <form>
      <div class="form-group col-md-6 firstname">
        <label for="name">District:</label>
        <strong>{{ plan.district.name }}</strong>
      </div>
      <b-col md="6" sm="12">
        <VInputGroup
          label="Diploma Name"
          id="diploma_name"
          type="text"
          :value="form.diploma_name"
          :v="$v.form.diploma_name"
          :required="true"
          :disabled="plan.status === 'active'"
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
          :disabled="plan.status === 'active'"
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
          :disabled="plan.status === 'active'"
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
          :disabled="plan.status === 'active'"
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
          :disabled="plan.status === 'active'"
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
              :disabled="plan.status === 'active'"
              v-model="group.credits"
            />
          </div>
        </div>
        <b-col cols="12" v-if="plan.status !== 'active'">
          <CardWidget
            v-if="group.credits !== null"
            wrapper="div"
            name="english"
            :options="group.items.map(element => element.name)"
            :chosenCards="group.choices"
            @englishUpdated="group.choices = $event"
          />
          <CardWidget
            v-if="group.credits === null"
            wrapper="div"
            name="english"
            :options="group.items.map(element => element.name)"
            :assessment="true"
            :chosenCards="group.choices"
            @englishUpdated="group.choices = $event"
          />
        </b-col>
        <b-col cols="12" v-if="plan.status === 'active'">
          <DisabledCardWidget
            v-if="group.credits !== null"
            wrapper="div"
            name="english"
            :options="group.items.map(element => element.name)"
            :chosenCards="group.choices"
          />
          <DisabledCardWidget
            v-if="group.credits === null"
            wrapper="div"
            name="english"
            :options="group.items.map(element => element.name)"
            :assessment="true"
            :chosenCards="group.choices"
          />
        </b-col>
      </div>
      <div class="clear"></div>
      <div class="clear"></div>
      <input
        v-if="plan.status !== 'active'"
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

import Swal from "sweetalert2";

import Api from "../../../services/api/Api";

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
    const courses = await api.getPlpCourses();
    const plan = await api.getPlpPlan(context.params.id);
    const defaultPlan = await api.getDefaultPlpPlan(plan.district.id);

    return {
      districts,
      courses,
      plan,
      defaultPlan,
      api,
      form: {
        diploma_name: plan.name,
        numberOfCredits: plan.credit,
        tierSystem: plan.tier_system,
        creditSystem: plan.credit_system,
        status: plan.status
      }
    };
  },
  data() {
    return {
      groups: [],
      tiers: ["Tier 4", "Tier 5"],
      creditSystems: ["Quarter Credits", "Fractional Credits"],
      statuses: ["inactive", "active", "draft"]
    };
  },
  validations: {
    form: {
      diploma_name: { required },
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
  mounted() {
    // if (!this.$store.state.permissions.includes("Edit PLP Master Plans")) {
    //   this.$router.push("/unauthorized");
    // }
    // if (!this.$store.state.modules.includes("plp")) {
    //   throw new Error();
    // }
    for (let course of this.courses) {
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

    if (this.plan) {
      for (let planGroup of this.plan.content) {
        for (let group of this.groups) {
          if (group.credits !== null) {
            if (group.name === planGroup.group.name) {
              group.choices = planGroup.courses.map(element => {
                return element.name;
              });
            }
          } else {
            if (group.name === planGroup.group.name) {
              group.choices = planGroup.courses.map(element => {
                return {
                  choice: element.name,
                  score: element.min_score,
                  tier5: element.tier_5
                };
              });
            }
          }
        }
      }
    }

    this.updateCourses();

    $("form").submit(false);
  },
  methods: {
    updateCourses() {
      for (let group of this.groups) {
        if (this.defaultPlan.content) {
          for (let group_plan of this.defaultPlan.content) {
            if (group_plan.group.name === group.name) {
              group.credits = group_plan.group.min_credit;
              group.items = group_plan.courses;
            }
          }
        }
      }
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
        id: this.$route.params.id,
        attributes: {
          name: this.form.diploma_name,
          tier_system: this.form.tierSystem,
          credit_system: this.form.creditSystem,
          credit: this.form.numberOfCredits,
          status: this.form.status,
          content: payloadContent
        },
        relationships: {
          district: { data: { type: "districts", id: this.plan.district.id } }
        }
      };

      this.api
        .updatePlpPlan(this.$route.params.id, payload)
        .then(data => {
          console.log(data);
          Swal.fire(
            "Request successful!",
            `Created plan (${this.plan.name})!`,
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
