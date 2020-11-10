<template>
  <div class>
    <div class="row">
      <div class="col-md-3 mt-3">
        <Studentsidenav :student-id="$route.params.id" />
      </div>
      <div class="col-md-9 col-xs-12">
        <div class="page-title-box">
          <div class="page-title-right">
            <nuxt-link class="btn btn-success waves-effect waves-light" to="#">
              <span class="btn-label">
                <i class="mdi mdi-plus-circle" />
              </span>
              Add Note
            </nuxt-link>
          </div>
          <h4 class="page-title">
            {{ first_name }} {{ last_name }} | Documents &amp; Files
          </h4>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="thinner-box card-box widget-inline">
              <div class="row">
                <div class="col-sm-6 col-xl-1" />
                <div class="col-sm-6 col-xl-2">
                  <div class="p-2 text-center">
                    <i class="mdi mdi-account-key text-primary mdi-24px" />
                    <p class="text-muted font-15 mb-0">Acceleration ID</p>
                    <h5>
                      <span>{{ id }}</span>
                    </h5>
                  </div>
                </div>

                <div class="col-sm-6 col-xl-2">
                  <div class="p-2 text-center">
                    <i class="mdi mdi-map text-success mdi-24px" />
                    <p class="text-muted font-15 mb-0">Location</p>
                    <h5>
                      <span>
                        {{ site ? site.district.name : "N/A" }}/{{
                          site ? site.name : "N/A"
                        }}
                      </span>
                    </h5>
                  </div>
                </div>
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
                <div class="col-sm-6 col-xl-2">
                  <div class="p-2 text-center">
                    <i class="mdi mdi-alert-circle text-info mdi-24px" />
                    <p class="text-muted font-15 mb-0">GCA</p>
                    <h5>
                      <span>
                        {{
                          graduate_candidate_advocate
                            ? graduate_candidate_advocate.first_name
                            : "N/A"
                        }}
                        {{
                          graduate_candidate_advocate
                            ? graduate_candidate_advocate.last_name
                            : "N/A"
                        }}
                      </span>
                    </h5>
                  </div>
                </div>

                <div class="col-sm-6 col-xl-2">
                  <div class="p-2 text-center">
                    <i class="mdi mdi-certificate text-blue mdi-24px" />
                    <p class="text-muted font-15 mb-0">Tier</p>
                    <h5>
                      <span>N/A</span>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h4 class="mb-3 header-title">Documents</h4>
            <h5>
              <b>Registration</b>
            </h5>

            <CardWidget
              wrapper="card"
              parent-title
              widget-title="Add new document"
              has-file-upload
              :type="true"
              name="registration"
              :options="registrationDocuments.map((element) => element.name)"
              :chosenCards="registrationChoices"
              @registrationUpdated="registrationChoices = $event"
            />

            <h5>
              <b>Student-Records</b>
            </h5>
            <CardWidget
              wrapper="card"
              widget-title="Add new document"
              parent-title
              has-file-upload
              :type="true"
              name="records"
              :options="studentRecordDocuments.map((element) => element.name)"
              :chosenCards="studentRecordChoices"
              @recordsUpdated="studentRecordChoices = $event"
            />

            <h5>
              <b>Assessments</b>
            </h5>
            <CardWidget
              wrapper="card"
              widget-title="Add new document"
              parent-title
              has-file-upload
              :type="true"
              name="assessments"
              :options="assessmentDocuments.map((element) => element.name)"
              :chosenCards="assessmentChoices"
              @assessmentsUpdated="assessmentChoices = $event"
            />
            <b-button variant="primary" class="mb-4" @click="saveResults">
              Save
            </b-button>
          </div>
        </div>

        <!-- second section -->
        <div class="card">
          <div class="card-body">
            <h4 class="mb-3 header-title">General Documents</h4>
            <form
              ref="general"
              method="post"
              enctype="multipart/form-data"
              @submit.prevent="saveGeneralFile"
            >
              <b-form-file v-model="generalFile" class="mb-3" plain />
              <div class="form-group mb-3">
                <input
                  type="submit"
                  name="file[submit]"
                  class="btn btn-success waves-effect waves-light"
                  value="Upload"
                />
              </div>
            </form>

            <div class="row">
              <div class="table-responsive">
                <table class="table table-sm table-bordered history-table">
                  <thead>
                    <tr>
                      <th>Date Added</th>
                      <th>File Name</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(document, index) of generalDocuments"
                      :key="index"
                    >
                      <th>{{ new Date() | moment("MM/DD/YYYY") }}</th>
                      <th>{{ document.file.name }}</th>
                      <th></th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.thinner-box {
  padding: 0 !important;
}
</style>

<script>
import Swal from "sweetalert2";
import CardWidget from "../../components/shared/CardWidget.vue";
import GcSideBar from "../../components/student-contact/GcSideBar";
import Api from "../../services/api/Api";
import moment from "moment";

export default {
  components: {
    GcSideBar,
    CardWidget,
  },
  async asyncData(context) {
    const api = new Api(context);
    const student = await api.getStudent(context.params.id);
    const registrationDocuments = await api.getDocuments("Registration");
    const studentRecordDocuments = await api.getDocuments("Student Records");
    const assessmentDocuments = await api.getDocuments("Assessments");
    const studentDocuments = await api.getStudentDocument(context.params.id);
    const token = await api.uploadFile1({ type: "student.documents" });
    console.log(studentDocuments);

    return {
      ...student,
      studentDocuments,
      registrationDocuments,
      studentRecordDocuments,
      assessmentDocuments,
      token: token.id,
      api,
    };
  },
  data: () => ({
    registrationChoices: [],
    studentRecordChoices: [],
    assessmentChoices: [],
    generalDocuments: [],
    generalFile: {},
  }),
  mounted() {
    // if (!this.$store.state.permissions.includes("View GC Documents")) {
    //   this.$router.push("/unauthorized");
    // }
    // if (!this.$store.state.modules.includes("document_storage")) {
    //   throw new Error();
    // }
    for (let regDoc of this.registrationDocuments) {
      for (let studentDoc of this.studentDocuments) {
        if (studentDoc["document-type"] !== null) {
          if (studentDoc["document-type"]["id"] === regDoc.id) {
            // var blob = null;
            // var xhr = new XMLHttpRequest();
            // xhr.open("GET", studentDoc.file.url);
            // xhr.setRequestHeader("Content-Type", "application/json");
            // xhr.setRequestHeader(
            //   "Access-Control-Allow-Origin",
            //   "http://localhost:3000"
            // );
            // xhr.setRequestHeader("Access-Control-Allow-Credentials", "true");
            // xhr.responseType = "blob";
            // xhr.onload = function () {
            //   blob = xhr.response;
            //   LoadAndDisplayFile(blob);
            // };
            // xhr.send();
            this.registrationChoices.push({
              choice: studentDoc["document-type"]["name"],
              file: studentDoc.file,
            });
            break;
          }
        }
      }
    }
    for (let regDoc of this.studentRecordDocuments) {
      for (let studentDoc of this.studentDocuments) {
        if (studentDoc["document-type"] !== null) {
          if (studentDoc["document-type"]["id"] === regDoc.id) {
            this.studentRecordChoices.push({
              choice: studentDoc["document-type"]["name"],
              file: studentDoc.file.url,
            });
            break;
          }
        }
      }
    }
    for (let regDoc of this.assessmentDocuments) {
      for (let studentDoc of this.studentDocuments) {
        if (studentDoc["document-type"] !== null) {
          if (studentDoc["document-type"]["id"] === regDoc.id) {
            this.assessmentChoices.push({
              choice: studentDoc["document-type"]["name"],
              file: studentDoc.file,
            });
            break;
          }
        }
      }
    }
    for (let studentDoc of this.studentDocuments) {
      if (studentDoc["document-type"] === null) {
        this.generalDocuments.push(studentDoc);
      }
    }
  },
  methods: {
    createToken() {
      const payload = { type: "student.documents" };
      this.api
        .uploadFile1(payload)
        .then((data) => {
          const token = data.id;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    async saveGeneralFile() {
      const formData = new FormData();
      if (this.generalFile) {
        formData.append("file", this.generalFile);
      }

      await this.api.uploadFile2(this.token, formData).then((data) => {
        console.log(data);
        const fileId = data[0].id;
        const payload = {
          type: "student-documents",
          attributes: { file: fileId },
          relationships: {
            student: {
              data: { type: "students", id: this.$route.params.id },
            },
          },
        };
        this.api
          .createStudentDocument(payload)
          .then((data) => {
            Swal.fire(
              "Request passed!",
              "Successfully saved document!",
              "success"
            );
          })
          .catch((e) => {
            console.log(e);
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong!",
            });
          });
      });
    },
    async saveResults() {
      const registrationChoices_ids = [];
      const studentRecordChoices_ids = [];
      const assessmentChoices_ids = [];

      for (const choice of this.registrationChoices) {
        if (choice.choice !== "Other") {
          for (const reg of this.registrationDocuments) {
            if (choice.choice === reg.name) {
              registrationChoices_ids.push({ file: choice.file, id: reg.id });
              break;
            }
          }
        } else {
          const payload = {
            type: "document-types",
            attributes: {
              name: choice.other,
              group: "Registration",
            },
          };
          await this.$api.createDocumentType(payload).then((data) => {
            console.log(data.id);
            registrationChoices_ids.push({ file: choice.file, id: data.id });
          });
        }
      }
      for (const choice of this.studentRecordChoices) {
        if (choice.choice !== "Other") {
          for (const reg of this.studentRecordDocuments) {
            if (choice.choice === reg.name) {
              studentRecordChoices_ids.push({ file: choice.file, id: reg.id });
              break;
            }
          }
        } else {
          const payload = {
            type: "document-types",
            attributes: {
              name: choice.other,
              group: "Student Records",
            },
          };
          await this.$api.createDocumentType(payload).then((data) => {
            console.log(data.id);
            studentRecordChoices_ids.push({ file: choice.file, id: data.id });
          });
        }
      }
      for (const choice of this.assessmentChoices) {
        if (choice.choice !== "Other") {
          for (const reg of this.assessmentDocuments) {
            if (choice.choice === reg.name) {
              assessmentChoices_ids.push({ file: choice.file, id: reg.id });
              break;
            }
          }
        } else {
          const payload = {
            type: "document-types",
            attributes: {
              name: choice.other,
              group: "Assessments",
            },
          };
          await this.$api.createDocumentType(payload).then((data) => {
            console.log(data);
            assessmentChoices_ids.push({ file: choice.file, id: data.id });
          });
        }
      }

      const chosen = [].concat(
        registrationChoices_ids,
        studentRecordChoices_ids,
        assessmentChoices_ids
      );

      for (const item of chosen) {
        const formData = new FormData();
        formData.append("file", item.file);
        await this.api
          .uploadFile2(this.token, formData)
          .then((data) => {
            console.log(data);
            const file_id = data[0].id;
            const payload = {
              type: "student-documents",
              attributes: { file: file_id },
              relationships: {
                student: {
                  data: { type: "students", id: this.$route.params.id },
                },
                "document-type": {
                  data: { type: "document-types", id: item.id },
                },
              },
            };
            this.api
              .createStudentDocument(payload)
              .then((data) => {
                console.log(data);
              })
              .catch((e) => {
                console.log(e);
                Swal.fire({
                  icon: "error",
                  title: "Oops...",
                  text: "Something went wrong!",
                });
              });
          })
          .catch((e) => {
            console.log(e);
          });
      }
    },
  },
};
</script>
