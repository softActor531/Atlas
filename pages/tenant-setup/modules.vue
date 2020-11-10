<template>
  <div class>
    <h1>Setup Tenant's Modules</h1>
    <div class="card">
      <div class="card-body">
        <h2>System Hierarchy</h2>
        <b-form-group>
          <div class="mt-3">
            <div class="ml-4">
              <b-form-group label="Number of levels">
                <div class="row">
                  <div class="col-md-3">
                    <b-form-input
                      id="input-1"
                      v-model="form.system_hierarchy.levels"
                      type="number"
                      min="1"
                      max="3"
                    ></b-form-input>
                  </div>
                  <div
                    class="col-md-3"
                    :key="level"
                    v-for="(level, index) in parseInt(
                      form.system_hierarchy.levels
                    )"
                  >
                    <b-form-select
                      v-model="form.system_hierarchy.level_names[index]"
                      type="text"
                    >
                      <b-form-select-option disabled value
                        >Level {{ level }} Name</b-form-select-option
                      >
                      <b-form-select-option
                        :value="option"
                        :key="index"
                        v-for="(option, index) of form.system_hierarchy
                          .levels === 1
                          ? level1Options
                          : form.system_hierarchy.levels === 2
                          ? level === 1
                            ? level2Options
                            : level3Options
                          : level === 1
                          ? ['District']
                          : level === 2
                          ? ['Region', 'Network']
                          : ['Site', 'School']"
                        >{{ option }}</b-form-select-option
                      >
                    </b-form-select>
                  </div>
                </div>
              </b-form-group>
            </div>
          </div>
        </b-form-group>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <h2>Dashboard</h2>
        <b-form-group>
          <b-form-checkbox
            v-model="form.dashboard.active"
            @change="dashboardChanged"
            >Active</b-form-checkbox
          >
          <div v-if="form.dashboard.active" class="mt-3">
            <div class="col-md-3">
              <v-select
                multiple
                :options="widgets"
                v-model="form.dashboard.kpis"
                placeholder="Choose KPIs"
              ></v-select>
            </div>
          </div>
        </b-form-group>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <h2>Reports</h2>
        <b-form-group>
          <b-form-checkbox
            v-model="form.reports.active"
            @change="reportsChanged"
            >Active</b-form-checkbox
          >
          <div v-if="form.reports.active" class="mt-3">
            <div class="col-md-3">
              <v-select
                multiple
                :options="all_reports"
                v-model="form.reports.available"
                placeholder="Available Reports"
              ></v-select>
            </div>
          </div>
        </b-form-group>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <h2>Student Profile Management</h2>
        <b-form-checkbox
          v-model="form.student_profile_management.active"
          @change="studentProfileManagementChanged"
          >Active</b-form-checkbox
        >
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <h2>PLP</h2>
        <b-form-checkbox
          v-model="form.plp.active"
          @change="plpChanged"
          :disabled="form.reports.active == 1"
          value="1"
          unchecked-value="0"
          >Active</b-form-checkbox
        >
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <h2>Courseware Integration</h2>
        <b-form-checkbox
          v-model="form.courseware_integration.active"
          :disabled="
            form.dashboard.active == 1 ||
            form.reports.active == 1 ||
            form.student_profile_management.active == 1 ||
            form.plp.active == 1
          "
          value="1"
          unchecked-value="0"
          >Active</b-form-checkbox
        >
        <div v-if="form.courseware_integration.active" class="mt-3">
          <div class="row">
            <div class="col-md-3">
              <v-select
                multiple
                :options="all_services"
                v-model="form.courseware_integration.services"
                placeholder="Services"
              ></v-select>
            </div>
            <div
              class="col-md-3"
              :key="index"
              v-for="(service, index) of form.courseware_integration.services"
            >
              <b-form-input
                v-model="form.courseware_integration.services_keys[index]"
                type="text"
                :placeholder="`${service} API Key`"
              ></b-form-input>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <h2>Graduation Calculator</h2>
        <b-form-checkbox v-model="form.graduation_calculator.active"
          >Active</b-form-checkbox
        >
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <h2>Automated Workflow</h2>
        <b-form-checkbox
          v-model="form.automated_workflow.active"
          :disabled="
            form.dashboard.active == 1 ||
            form.reports.active == 1 ||
            form.student_profile_management.active == 1
          "
          value="1"
          unchecked-value="0"
          >Active</b-form-checkbox
        >
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <h2>Document Storage</h2>
        <b-form-checkbox v-model="form.document_storage.active"
          >Active</b-form-checkbox
        >
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <h2>Case Management Notes</h2>
        <b-form-checkbox
          v-model="form.case_management_notes.active"
          :disabled="form.dashboard.active == 1"
          value="1"
          unchecked-value="0"
          >Active</b-form-checkbox
        >
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <h2>Scheduling</h2>
        <b-form-checkbox
          v-model="form.scheduling.active"
          :disabled="
            form.reports.active == 1 ||
            form.student_profile_management.active == 1
          "
          value="1"
          unchecked-value="0"
          >Active</b-form-checkbox
        >
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <h2>Apps</h2>
        <div class="row">
          <div class="col-md-4">
            <h4>Compass Web</h4>
            <b-form-checkbox
              v-model="form.apps.compass_web"
              :disabled="form.reports.active == 1"
              value="1"
              unchecked-value="0"
              >Active</b-form-checkbox
            >
          </div>
          <div class="col-md-4">
            <h4>Compass Mobile</h4>
            <b-form-checkbox
              v-model="form.apps.compass_mobile"
              :disabled="form.reports.active == 1"
              value="1"
              unchecked-value="0"
              >Active</b-form-checkbox
            >
          </div>
          <div class="col-md-4">
            <h4>Navigator Mobile</h4>
            <b-form-checkbox
              v-model="form.apps.navigator_mobile"
              :disabled="
                form.reports.active == 1 ||
                form.student_profile_management.active == 1
              "
              value="1"
              unchecked-value="0"
              >Active</b-form-checkbox
            >
          </div>
        </div>
      </div>
    </div>
    <br />
    <br />
    <div class="form-group col-xs-12 col-md-12 mb-3 clear">
      <input
        class="btn btn-primary waves-effect waves-light save_btn"
        type="submit"
        value="Continue"
        name="submit"
        @click="submit"
      />
    </div>
  </div>
</template>

<script>
import Api from "../../services/api/Api";

export default {
  async asyncData(context) {
    const api = new Api(context);
    return {
      api,
    };
  },
  mounted() {
    if (!this.$store.state.can_edit) {
      this.$router.push("/unauthorized");
    }
  },
  data() {
    return {
      form: {
        system_hierarchy: {
          levels: 1,
          level_names: ["", "", ""],
        },
        dashboard: {
          active: 0,
          kpis: [],
        },
        reports: {
          active: 0,
          available: [],
        },
        student_profile_management: {
          active: 0,
        },
        plp: {
          active: 0,
        },
        courseware_integration: {
          active: 0,
          services: [],
          services_keys: [],
        },
        graduation_calculator: {
          active: 0,
        },
        automated_workflow: {
          active: 0,
          flows: ["", "", ""],
        },
        scheduling: {
          active: 0,
        },
        document_storage: {
          active: 0,
        },
        case_management_notes: {
          active: 0,
        },
        apps: {
          compass_web: 0,
          compass_mobile: 0,
          navigator_mobile: 0,
        },
      },
      widgets: ["Widget 1", "Widget 2", "Widget 3", "Widget 4", "Widget 5"],

      all_reports: [
        "Report 1",
        "Report 2",
        "Report 3",
        "Report 4",
        "Report 5",
        "Report 6",
        "Report 7",
        "Report 8",
        "Report 9",
        "Report 10",
        "Report 11",
        "Report 12",
        "Report 13",
        "Report 14",
        "Report 15",
      ],

      all_services: ["Edgenuity", "Edmentum"],
    };
  },
  methods: {
    plpChanged() {
      this.form.courseware_integration.active = 1;
    },
    studentProfileManagementChanged() {
      this.form.courseware_integration.active = 1;
      this.form.scheduling.active = 1;
      this.form.automated_workflow.active = 1;
      this.form.apps.navigator_mobile = 1;
    },
    reportsChanged() {
      this.form.courseware_integration.active = 1;
      this.form.scheduling.active = 1;
      this.form.automated_workflow.active = 1;
      this.form.plp.active = 1;
      this.form.apps.compass_web = 1;
      this.form.apps.compass_mobile = 1;
      this.form.apps.navigator_mobile = 1;
    },
    dashboardChanged() {
      this.form.courseware_integration.active = 1;
      this.form.case_management_notes.active = 1;
      this.form.automated_workflow.active = 1;
    },
    submit() {
      let levels = [];

      for (let level of this.form.system_hierarchy.level_names) {
        if (level !== "") {
          levels.push({ name: level });
        }
      }

      let kpis = [];

      for (let kpi of this.form.dashboard.kpis) {
        if (kpi !== "") {
          kpis.push({ name: kpi });
        }
      }

      let available = [];

      for (let r of this.form.reports.available) {
        if (r !== "") {
          available.push({ name: r });
        }
      }

      let services = [];

      for (let index in this.form.courseware_integration.services) {
        if (this.form.courseware_integration.services[index] !== "") {
          services.push({
            name: this.form.courseware_integration.services[index],
            api_key: this.form.courseware_integration.services_keys[index],
          });
        }
      }
      const payload = {
        type: "tenants",
        id: "6131e499-9358-4e4a-b54e-bab15211e59c",
        attributes: {
          name: "Tenant 101 - Step 2",
          config: {
            modules: {
              dashboard: {
                active: this.form.dashboard.active,
                kpis: kpis,
              },
              reports: {
                active: this.form.reports.active,
                available: available,
              },
              student_profile_management: {
                active: this.form.student_profile_management.active,
              },
              plp: {
                active: this.form.plp.active,
              },
              courseware_integration: {
                active: this.form.courseware_integration.active,
                services: services,
              },
              graduation_calculator: {
                active: this.form.graduation_calculator.active,
              },
              automated_workflow: {
                active: this.form.automated_workflow.active,
              },
              scheduling: {
                active: this.form.scheduling.active,
              },
              document_storage: {
                active: this.form.document_storage.active,
              },
              case_management_notes: {
                active: this.form.case_management_notes.active,
              },
              apps: {
                compass_web: {
                  active: this.form.apps.compass_web,
                },
                compass_mobile: {
                  active: this.form.apps.compass_mobile,
                },
                navigator_mobile: {
                  active: this.form.apps.navigator_mobile,
                },
              },
            },
          },
        },
      };
      // this.$router.push("/tenant-setup/phases");
    },
  },
};
</script>