<template>
  <div>
    <h1>Edit Plan</h1>
    <form>
      <div class="form-group col-md-6 firstname">
        <label for="name">{{ district_label }}:</label>
        <strong>{{ getDistrictName() }}</strong>
      </div>
      <br />
      <div class="col-md-12" :key="index" v-for="(group, index) of groups">
        <h2>
          <br />
          {{ group.name }}
        </h2>
        <div v-if="group.credits !== null">
          <div class="form-group col-md-6 firstname">
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
            v-if="group.credits === null"
            wrapper="div"
            name="english"
            :assessment="true"
            :options="group.items.map(element => element.name)"
            :chosenCards="group.choices"
            @englishUpdated="group.choices = $event"
          />
          <CardWidget
            v-if="group.credits !== null"
            wrapper="div"
            name="english"
            :options="group.items.map(element => element.name)"
            :chosenCards="group.choices"
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

import Swal from "sweetalert2";

import Api from "../../../services/api/Api";

export default {
  async asyncData(context) {
    const api = new Api(context);
    const districts = await api.getDistricts();
    const courses = await api.getPlpCourses();
    const plan = await api.getDefaultPlpPlan(context.params.id);

    return {
      districts,
      courses,
      plan,
      api
    };
  },
  data() {
    return {
      district_label: this.$store.state.fields.length > 0 ? this.$store.state.fields.find(element => {
        return element.base_name == "District";
      }).custom_name : "District",
      groups: [],
      district: "",
      tiers: ["Tier 4", "Tier 5"],
      creditSystems: ["Quarter Credits", "Fractional Credits"],
      statuses: ["inactive", "active", "draft"]
    };
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
          items: [course],
          credits: course.group.min_credit,
          choices: [],
          choices_ids: []
        });
      }
      for (let group of this.groups) {
        if (course.group.name === group.name) {
          group.items.push(course);
          break;
        }
      }
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
    console.log(this.groups);
    $("form").submit(false);
  },
  methods: {
    getDistrictName() {
      for (let district of this.districts) {
        if (district.id === this.$route.params.id) {
          return district.name;
        }
      }
    },
    addPlan: async function() {
      // let new_courses = [];
      // for (let group of this.groups) {
      //   for (let choice of group.choices) {
      //     if (choice !== undefined) {
      //       if (choice.other && choice.other !== "") {
      //         if (choice.tier5) {
      //           new_courses.push({
      //             choice: choice.other,
      //             tier5: choice.tier5,
      //             score: choice.score,
      //             id: group.id
      //           });
      //         } else {
      //           new_courses.push({ choice: choice.other, id: group.id });
      //         }
      //       }
      //     }
      //   }
      // }
      // for (let course of new_courses) {
      //   let course_payload;
      //   if (course.choice) {
      //     course_payload = {
      //       type: "plp-courses",
      //       attributes: {
      //         name: course.choice,
      //         min_score: course.score,
      //         tier_5: course.tier5
      //       },
      //       relationships: {
      //         group: { data: { type: "plp-course-groups", id: course.id } }
      //       }
      //     };
      //   } else {
      //     course_payload = {
      //       type: "plp-courses",
      //       attributes: {
      //         name: course.choice
      //       },
      //       relationships: {
      //         group: { data: { type: "plp-course-groups", id: course.id } }
      //       }
      //     };
      //   }
      //   await this.$api
      //     .createCourse(course_payload)
      //     .then(data => {
      //       new_courses_ids.push({ id: data.id, group: course.id });
      //     })
      //     .catch(e => {
      //       console.log(e);
      //     });
      // }

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
      // for (let course of new_courses_ids) {
      //   for (let group of this.groups) {
      //     if (course.group === group.id) {
      //       group.choices_ids = group.choices.concat([course]);
      //       break;
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
        type: "district-default-plp-plans",
        id: this.$route.params.id,
        attributes: {
          content: payloadContent
        },
        relationships: {
          district: { data: { type: "districts", id: this.$route.params.id } }
        }
      };

      this.api
        .updateDefaultPlpPlan(this.$route.params.id, payload)
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
