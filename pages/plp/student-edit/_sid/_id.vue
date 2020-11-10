<template>
  <div class>
    <div class="row">
      <div class="col-md-3">
        <Studentsidenav :student-id="$route.params.sid" />
      </div>
      <div class="col-md-9 col-xs-12">
        <div class="page-title-box">
          <div class="page-title-right">
            <a
              class="btn btn-success waves-effect waves-light"
              @click="print"
              href
            >
              <span class="btn-label">
                <i class="mdi mdi-printer" aria-hidden="true"></i>
              </span>
              Print
            </a>
            <nuxt-link class="btn btn-primary waves-effect waves-light" to="#">
              <span class="btn-label">
                <i class="mdi mdi-file-export" aria-hidden="true"></i>
              </span>
              Export in CSV
            </nuxt-link>
          </div>
          <h4 class="page-title">
            <strong>DIPLOMA:</strong>
            {{ name }}
          </h4>
        </div>
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
                      style="font-size: 24px; margin-top: 10px"
                    />
                    <p class="text-muted font-15 mb-0">Phase/Status</p>
                    <h5>
                      <span>{{ status ? status.phase.name : "N/A" }}</span
                      >/
                      <span>{{ status ? status.name : "N/A" }}</span>
                    </h5>
                  </div>
                </div>

                <GcIconBox
                  label="GCA"
                  :value="
                    graduate_candidate_advocate
                      ? graduate_candidate_advocate.first_name
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
        <fieldset class="scheduler-border">
          <legend class="scheduler-border">
            <strong>GC Graduation Progress</strong>
          </legend>
          <div class="row">
            <div class="col-xs-12 col-md-8 col-xl-8 row">
              <div class="col-xs-12 col-md-6 col-xl-6">
                <div class="widget-rounded-circle card-box">
                  <div class="row">
                    <div class="col-4">
                      <div class="avatar-lg rounded-circle bg-hard-blue">
                        <i
                          class="fas fa-paperclip display-5 avatar-title text-"
                        ></i>
                      </div>
                    </div>
                    <div class="col-8">
                      <div class="text-right">
                        <h3 class="text-dark mt-1">
                          <span data-plugin="counterup">
                            {{ plan.content.total_diploma_credit }}
                          </span>
                        </h3>
                        <p class="text-muted mb-1 text-truncate">
                          Diploma Credits
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-xs-12 col-md-6 col-xl-6">
                <div class="widget-rounded-circle card-box">
                  <div class="row">
                    <div class="col-4">
                      <div class="avatar-lg rounded-circle bg-pink">
                        <i
                          class="far fa-check-circle display-5 avatar-title text-"
                        ></i>
                      </div>
                    </div>
                    <div class="col-8">
                      <div class="text-right">
                        <h3 class="text-dark mt-1">
                          <span data-plugin="counterup">
                            {{ plan.content.diploma_credits_earned }}
                          </span>
                        </h3>
                        <p class="text-muted mb-1 text-truncate">
                          Diploma Credits Earned
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-12col-md-6 col-xl-6">
                <div class="widget-rounded-circle card-box">
                  <div class="row">
                    <div class="col-4">
                      <div class="avatar-lg rounded-circle bg-info">
                        <i
                          class="fas fa-paperclip display-5 avatar-title text-"
                        ></i>
                      </div>
                    </div>
                    <div class="col-8">
                      <div class="text-right">
                        <h3 class="text-dark mt-1">
                          <span data-plugin="counterup">
                            {{ plan.content.diploma_credits_earned }}
                          </span>
                        </h3>
                        <p class="text-muted mb-1 text-truncate">
                          Diploma Credits Needed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-12 col-md-6 col-xl-6">
                <div class="widget-rounded-circle card-box">
                  <div class="row">
                    <div class="col-4">
                      <div class="avatar-lg rounded-circle bg-orange">
                        <i
                          class="mdi mdi-filter-variant vertical-flipped display-5 avatar-title text-"
                        ></i>
                      </div>
                    </div>
                    <div class="col-8">
                      <div class="text-right">
                        <h3 class="text-dark mt-1">
                          <span data-plugin="counterup">{{
                            plan.content.tier_level
                          }}</span>
                        </h3>
                        <p class="text-muted mb-1 text-truncate">Tier</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-sm-12 col-md-6 col-xl-6">
                <div class="form-group">
                  <label for="district">Status</label>
                  <select
                    class="form-control custom-select"
                    name="district"
                    id="district"
                  >
                    <option value="">active</option>
                    <option value="inactive">inactive</option>
                  </select>
                </div>
              </div>

              <div class="col-sm-12col-md-6 col-xl-6">&nbsp;&nbsp;</div>
              <div
                class="divider"
                style="
                  width: 98%;
                  height: 1px;
                  background: #ddd;
                  margin: 1rem 1rem 2rem 1rem;
                "
              ></div>
              <div class="col-md-12 col-xl-12 with-border"></div>
              <div class="clear"></div>
              <div class="col-md-6 col-xl-6" style="float: left">
                <label for="district">Cohort Year</label>
                <select
                  class="form-control custom-select"
                  name="cohort_year"
                  id="district"
                  :value="cohort_year"
                >
                  <option>{{ cohort_year }}</option>
                  <option value="2014">2014</option>
                  <option value="2014">2014</option>
                  <option value="2016">2016</option>
                  <option value="2017">2017</option>
                  <option value="2018">2018</option>
                  <option value="2019">2019</option>
                  <option value="2020">2020</option>
                  <option value="2021">2021</option>
                </select>
                <br />
                <br />
                <div>
                  <label for="district">Target Graduation Date</label>
                  <select
                    class="form-control custom-select"
                    name="district"
                    :value="plan.content.target_graduation.year"
                    id="district"
                  >
                    <option>{{ plan.content.target_graduation.year }}</option>
                    <option value="Fall">Fall</option>
                    <option value="Spring">Spring</option>
                    <option value="Summer">Summer</option>
                    <option value="Winter">Winter</option>
                  </select>
                  <br />
                  <br />
                </div>

                <div style="float: left">
                  <label for="district">Select Year</label>

                  <select
                    class="form-control custom-select"
                    name="district"
                    id="district"
                    :value="plan.content.target_graduation.season"
                  >
                    <option>{{ plan.content.target_graduation.season }}</option>
                    <option value="2014">2014</option>
                    <option value="2016">2016</option>
                    <option value="2017">2017</option>
                    <option value="2018">2018</option>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                  </select>
                  <br /><br />
                  <div class="widget-rounded-circle card-box">
                    <div class="row">
                      <div class="col-4">
                        <div class="avatar-lg rounded-circle bg-secondary">
                          <i
                            class="mdi mdi-file-document-box-outline display-5 avatar-title text-"
                          ></i>
                        </div>
                      </div>
                      <div class="col-8">
                        <input type="text" class="form-control" />
                        <div class="text-right">
                          <h3 class="text-dark mt-1">
                            <span data-plugin="counterup">
                              {{ plan.content.gpa }}
                            </span>
                          </h3>
                          <p class="text-muted mb-1 text-truncate">
                            Total Credits Earned
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-6 col-xl-6" style="float: right">
                <div class="form-group col-md-12 card-box">
                  <label for="credits">Special Programs</label>

                  <div class="custom-checkbox">
                    <input
                      type="checkbox"
                      name="special_programs[]"
                      :checked="special1"
                    />
                    <label>ELL/ESOL</label>
                  </div>

                  <div class="custom-checkbox">
                    <input
                      type="checkbox"
                      name="special_programs[]"
                      :checked="special2"
                    />
                    <label>NONE</label>
                  </div>

                  <div class="custom-checkbox">
                    <input
                      type="checkbox"
                      name="special_programs[]"
                      :checked="special3"
                    />
                    <label>NOT DISCLOSED</label>
                  </div>

                  <div class="custom-checkbox">
                    <input
                      type="checkbox"
                      name="special_programs[]"
                      :checked="special4"
                    />
                    <label>IEP</label>
                  </div>

                  <div class="custom-checkbox">
                    <input
                      type="checkbox"
                      name="special_programs[]"
                      :checked="special5"
                    />
                    <label>504 PLAN</label>
                  </div>

                  <div class="custom-checkbox">
                    <input
                      type="checkbox"
                      name="special_programs[]"
                      :checked="special6"
                    />
                    <label>FREE LUNCH</label>
                  </div>

                  <div class="custom-checkbox">
                    <input
                      type="checkbox"
                      name="special_programs[]"
                      :checked="special7"
                    />
                    <label>GT</label>
                  </div>
                  <br />
                  <div>
                    <label for="district">Post Grad Pathways</label>
                    <select
                      class="form-control custom-select"
                      name="district"
                      id="district"
                    >
                      <option>{{ plan.content.post_grad_pathway }}</option>
                      <option selected="" value="Career">Career</option>
                      <option value="2 Year College">2 Year College</option>
                      <option value="4 Year College">4 Year College</option>
                      <option value="Military">Military</option>
                      <option value="Trade School">Trade School</option>
                    </select>
                  </div>
                </div>

                <div class="widget-rounded-circle card-box">
                  <div class="row">
                    <div class="col-4">
                      <div class="avatar-lg rounded-circle bg-secondary">
                        <i
                          class="mdi mdi-file-document-box-outline display-5 avatar-title text-"
                        ></i>
                      </div>
                    </div>
                    <div class="col-8">
                      <input type="text" class="form-control" />
                      <div class="text-right">
                        <h3 class="text-dark mt-1">
                          <span data-plugin="counterup">
                            {{ plan.content.gpa }}
                          </span>
                        </h3>
                        <p class="text-muted mb-1 text-truncate">GPA</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xs-12 col-md-4 bg-white border-it">
              <div class="card-box text-center bg-secondary row">
                <div class="col-md-4">
                  <div class="col-12">
                    <div class="avatar-md rounded-circle bg-light text-muted">
                      <i
                        class="mdi mdi-filter-variant vertical-flipped display-5 text-muted"
                      ></i>
                    </div>
                  </div>
                </div>
                <div class="col-md-8">
                  <div class="text-right">
                    <h3 class="text-dark mt-1"></h3>
                    <p class="mb-1 text-truncate text-light">
                      Tier Definitions by
                      <br />Credits Needed
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-12">
                <div class="mt-3">
                  <p class="m-b-10 with-border">
                    <strong>Tier 1 =</strong>
                    <strong>&nbsp;&nbsp;&nbsp;&nbsp; {{ tier1Credits }}</strong>
                  </p>
                  <p class="m-b-10 with-border">
                    <strong>Tier 2 =</strong>
                    <strong>&nbsp;&nbsp;&nbsp;&nbsp; {{ tier2Credits }}</strong>
                  </p>
                  <p class="m-b-10 with-border">
                    <strong>Tier 3 =</strong>
                    <strong>&nbsp;&nbsp;&nbsp;&nbsp; {{ tier3Credits }}</strong>
                  </p>
                  <p class="m-b-10 with-border">
                    <strong>Tier 4 =</strong>
                    <strong>&nbsp;&nbsp;&nbsp;&nbsp; {{ tier4Credits }}</strong>
                  </p>
                  <p class="m-b-10 with-border">
                    <strong>Tier 5 =</strong>
                    <strong>&nbsp;&nbsp;&nbsp;&nbsp; {{ tier5Credits }}</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </fieldset>
        <fieldset class="scheduler-border">
          <legend>
            <strong>SECTION 1: COURSES</strong>
          </legend>
          <Fragment :key="index" v-for="(group, index) in groups">
            <fieldset class="scheduler-border" v-if="group.credits !== null">
              <legend>
                <strong>{{ group.name }}</strong>
                <em>
                  {{
                    group.min_credit -
                    (group.earned_credit === undefined
                      ? 0
                      : group.earned_credit) +
                    " out of " +
                    group.min_credit +
                    " credits Remaining"
                  }}
                </em>
              </legend>
              <b-col cols="12">
                <CardWidget
                  v-if="group.credits !== null"
                  wrapper="div"
                  :studentPlp="true"
                  name="english"
                  :options="group.items.map((element) => element.name)"
                  :chosenCards="group.choices"
                  @englishUpdated="group.choices = $event"
                />
              </b-col>
            </fieldset>
          </Fragment>
        </fieldset>
        <fieldset class="scheduler-border">
          <legend>
            <strong>SECTION 2: ASSESSMENTS</strong>
          </legend>
          <Fragment :key="index" v-for="(group, index) in groups">
            <fieldset class="scheduler-border" v-if="group.credits === null">
              <legend>
                <strong>{{ group.name }}</strong>
              </legend>
              <b-col cols="12">
                <CardWidget
                  v-if="group.credits === null"
                  wrapper="div"
                  :studentPlp="true"
                  name="english"
                  :assessment="true"
                  :options="group.items.map((element) => element.name)"
                  :chosenCards="group.choices"
                  @englishUpdated="group.choices = $event"
                />
              </b-col>
            </fieldset>
          </Fragment>
        </fieldset>
        <input
          class="btn btn-primary waves-effect waves-light"
          type="submit"
          value="Save"
          name="plan[submit]"
          @click="updatePlan"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
fieldset.scheduler-border {
  border: 1px groove #ddd !important;
  padding: 0 1.4em 1.4em 1.4em !important;
  margin: 0 0 1.5em 0 !important;
  -webkit-box-shadow: 0px 0px 0px 0px #000;
  box-shadow: 0px 0px 0px 0px #000;
}

legend.scheduler-border {
  font-size: 1.2em !important;
  font-weight: bold !important;
  text-align: left !important;
  width: auto;
  padding: 0 10px;
  border-bottom: none;
}
form.strict .input.firstname {
  width: 16%;
}
.input.firstname {
  width: 22%;
}
/* When the radio button is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: #2196f3;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the indicator (dot/circle) */
.container .checkmark:after {
  top: 9px;
  left: 9px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: white;
}
.card {
  width: 17.85rem;
}
.input-multiples {
  width: 40%;
  display: inline-block;
}
.input-multiples3 {
  width: 100%;
  display: inline-block;
}
.input-date {
  width: 33%;
  float: left;
}
.input-date label {
  display: block;
  clear: both;
  margin: 0 0 5px 0;
  font-weight: normal;
}
form input[type="submit"] {
  position: fixed;
  right: 30px;
  bottom: 40px;
  z-index: 99;
  box-shadow: 0 0 5px #000;
  border: 1px solid #ccc;
}
.card {
  padding-right: unset;
  padding-left: unset;
  margin-right: 12px;
  flex: 0 0 31.33333%;
  max-width: 31.33333%;
}

.thinner-box {
  padding: 0 !important;
}

.bg-hard-blue {
  background-color: #3f518b !important;
}

.display-5 {
  font-size: 3rem;
  line-height: 1.1;
}

.avatar-title {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  color: #fff;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: 100%;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 100%;
}

.bg-pink {
  background-color: #ca2bc5 !important;
}

.bg-info {
  background-color: #4fc6e1 !important;
}

.bg-orange {
  background-color: #ed9451 !important;
}

.vertical-flipped {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: 100%;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 100%;
  -moz-transform: scaleY(-1);
  -o-transform: scaleY(-1);
  -webkit-transform: scaleY(-1);
  transform: scaleY(-1);
  filter: FlipH;
  -ms-filter: "FlipH";
}
</style>

<script>
import DiplomaCard from "../../../../components/plp/DiplomaCard";
import Api from "../../../../services/api/Api";

import Swal from "sweetalert2";
import { Fragment } from "vue-fragment";

export default {
  components: {
    DiplomaCard,
    Fragment,
  },
  mounted() {
    // if (!this.$store.state.permissions.includes("View GC PLP")) {
    //   this.$router.push("/unauthorized");
    // }
    // if (!this.$store.state.modules.includes("plp")) {
    //   throw new Error();
    // }

    for (let course of this.courses) {
      const plpGroups = this.groups.map((element) => element.name);
      if (!plpGroups.includes(course.group.name)) {
        this.groups.push({
          name: course.group.name,
          id: course.group.id,
          items: [],
          credits: course.group.min_credit,
          choices: [],
          choices_ids: [],
          min_credit: 0,
          earned_credit: 0,
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
      for (let planGroup of this.plan.content.groups) {
        for (let group of this.groups) {
          if (group.credits !== null) {
            if (group.name === planGroup.group.name) {
              group.choices = planGroup.courses.map((element) => {
                return {
                  choice: element.name,
                  earned_credit: element.earned_credit,
                  completed_with: element.completed_with,
                };
              });
              group.min_credit = planGroup.group.min_credit;
              group.earned_credit = planGroup.group.earned_credit;
            }
          } else {
            if (group.name === planGroup.group.name) {
              group.choices = planGroup.courses.map((element) => {
                return {
                  choice: element.name,
                  earned_credit: element.earned_credit,
                  completed_with: element.completed_with,
                  score: element.min_score,
                  tier5: element.tier_5,
                };
              });
            }
          }
        }
      }
    }
    // this.updateCourses();

    console.log(this.groups);
  },
  async asyncData(context) {
    const api = new Api(context);
    const student = await api.getStudent(context.route.params.sid);
    const plan = await api.getStudentPlpPlan(context.route.params.id);
    const courses = await api.getPlpCourses();
    console.log(plan);

    return {
      ...student,
      plan,
      courses,
      api,
    };
  },
  data() {
    return {
      groups: [],
    };
  },
  methods: {
    print: function () {
      window.print();
    },
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
    updatePlan: function () {
      for (let group of this.groups) {
        for (let choice of group.choices) {
          if (choice.choice !== "Other") {
            if (choice.tier5) {
              group.choices_ids.push({
                choice: choice.choice,
                score: choice.score,
                tier5: choice.tier5,
                earned_credit: choice.earned_credit,
                completed_with: choice.completed_with,
              });
            } else {
              if (choice.choice) {
                group.choices_ids.push({
                  choice: choice.choice,
                  earned_credit: choice.earned_credit,
                  completed_with: choice.completed_with,
                });
              } else {
                group.choices_ids.push({
                  choice: choice,
                  earned_credit: choice.earned_credit,
                  completed_with: choice.completed_with,
                });
              }
            }
          } else {
            if (choice.tier5) {
              group.choices_ids.push({
                choice: choice.other,
                score: choice.score,
                tier5: choice.tier5,
                earned_credit: choice.earned_credit,
                completed_with: choice.completed_with,
              });
            } else {
              group.choices_ids.push({ choice: choice.other });
            }
          }
        }
      }
      const payloadContent = [];
      for (let group of this.groups) {
        const coursesPayload = [];
        if (group.credits === null) {
          // ASSESSMENT
          for (let choice of group.choices_ids) {
            coursesPayload.push({
              name: choice.choice,
              tier_5: choice.tier5,
              earned_credit: choice.earned_credit,
              completed_with: choice.completed_with,
              min_score: choice.earned_credit,
              primary: 1,
            });
          }
        } else {
          // Course
          for (let choice of group.choices_ids) {
            coursesPayload.push({
              name: choice.choice,
              tier_5: choice.tier5,
              earned_credit: choice.earned_credit,
              completed_with: choice.completed_with,
              min_score: choice.earned_credit,
              primary: 1,
            });
          }
        }
        if (coursesPayload.length > 0) {
          payloadContent.push({
            group: {
              name: group.name,
              min_credit: group.credits,
              assessment: group.credits === null ? 1 : 0,
              earned_credit: group.earned_credit,
              min_score: group.credits,
            },
            courses: coursesPayload,
          });
        }
      }

      console.log(payloadContent);

      const payload = {
        type: "student-plp-plans",
        id: this.$route.params.id,
        attributes: {
          name: this.plan.name,
          content: {
            gpa: this.plan.content.gpa,
            target_graduation: {
              season: this.plan.content.target_graduation.season,
              year: this.plan.content.target_graduation.year,
            },
            groups: payloadContent,
          },
          active: this.plan.active,
        },
      };

      this.api
        .updateStudentPlpPlan(this.$route.params.id, payload)
        .then((data) => {
          console.log(data);
          Swal.fire("Request successful!", `Updated plan`, "success");
          this.$router.push(
            `/plp/student-view/${this.$route.params.sid}/${this.$route.params.id}`
          );
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>
