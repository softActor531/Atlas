<template>
  <div>
    <h3 class="title">Document Template</h3>
    <!-- Main District Selector -->
    <card card-title="Add New Document Layout">
      <div class="form-group">
        <label>District</label>
        <SelectInput
          @notifyParent="getDistrictDocuments"
          :items="districts.map((element) => element.name)"
          placeholder="--Select--"
        />
      </div>
    </card>

    <Fragment v-if="district !== ''">
      <CardWidget
        wrapper="card"
        parent-title="Registration"
        widget-title="Add New Type"
        name="registration"
        :type="true"
        :options="registrationDocuments.map((element) => element.name)"
        :chosenCards="districtRegDocuments.map((element) => element.name)"
        @registrationUpdated="registrationChoices = $event"
      />
      <CardWidget
        wrapper="card"
        parent-title="Student Records"
        widget-title="Add New Type"
        name="studentRecords"
        :type="true"
        :options="studentRecordDocuments.map((element) => element.name)"
        :chosenCards="districtStuDocuments.map((element) => element.name)"
        @studentRecordsUpdated="studentRecordChoices = $event"
      />
      <CardWidget
        wrapper="card"
        parent-title="Assessments"
        widget-title="Add New Type"
        name="assessment"
        :type="true"
        :options="assessmentDocuments.map((element) => element.name)"
        :chosenCards="districtAssDocuments.map((element) => element.name)"
        @assessmentUpdated="assessmentChoices = $event"
      />
      <!-- Save btn -->
      <b-button variant="primary" class="mb-4" @click="saveResults"
        >Save</b-button
      >
    </Fragment>
  </div>
</template>

<script>
import CardWidget from "../../../components/shared/CardWidget.vue";
import Card from "@/components/shared/Card.vue";
import SelectInput from "@/components/shared/SelectInput.vue";

import Api from "../../../services/api/Api";

export default {
  components: { SelectInput, Card, CardWidget },
  data() {
    return {
      district: "",
      registrationChoices: [],
      studentRecordChoices: [],
      assessmentChoices: [],
      documents: [],
      districtRegDocuments: [],
      districtStuDocuments: [],
      districtAssDocuments: [],
    };
  },
  mounted() {
    // if (!this.$store.state.permissions.includes("Edit Documents Template")) {
    //   this.$router.push("/unauthorized");
    // }
    // if (!this.$store.state.modules.includes("document_storage")) {
    //   throw new Error();
    // }
  },
  async asyncData(context) {
    const api = new Api(context);
    const districts = await api.getDistricts();
    const registrationDocuments = await api.getDocuments("Registration");
    const studentRecordDocuments = await api.getDocuments("Student Records");
    const assessmentDocuments = await api.getDocuments("Assessments");

    return {
      districts,
      registrationDocuments,
      studentRecordDocuments,
      assessmentDocuments,
      api,
    };
  },
  methods: {
    async getDistrictDocuments($event) {
      this.district = $event;
      let district_id;
      for (let dis of this.districts) {
        if (this.district === dis.name) {
          district_id = dis.id;
          break;
        }
      }
      this.api.getDistrictDocuments(district_id).then((data) => {
        this.districtRegDocuments = [];
        this.districtStuDocuments = [];
        this.districtAssDocuments = [];
        this.documents = data;
        for (let doc of this.documents) {
          if (doc.group === "Registration") {
            this.districtRegDocuments.push(doc);
          } else if (doc.group === "Student Records") {
            this.districtStuDocuments.push(doc);
          } else {
            this.districtAssDocuments.push(doc);
          }
        }
        this.registrationChoices = this.districtRegDocuments.map((element) => {
          return { choice: element.name };
        });
        this.studentRecordChoices = this.districtStuDocuments.map((element) => {
          return { choice: element.name };
        });
        this.assessmentChoices = this.districtAssDocuments.map((element) => {
          return { choice: element.name };
        });
      });
    },
    async saveResults() {
      let district_id;
      let registrationChoices_ids = [];
      let studentRecordChoices_ids = [];
      let assessmentChoices_ids = [];

      for (let dis of this.districts) {
        if (this.district === dis.name) {
          district_id = dis.id;
          break;
        }
      }

      for (let choice of this.registrationChoices) {
        if (choice.choice !== "Other") {
          for (let reg of this.registrationDocuments) {
            if (choice.choice === reg.name) {
              registrationChoices_ids.push(reg.id);
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
            registrationChoices_ids.push(data.id);
          });
        }
      }
      for (let choice of this.studentRecordChoices) {
        if (choice.choice !== "Other") {
          for (let reg of this.studentRecordDocuments) {
            if (choice.choice === reg.name) {
              studentRecordChoices_ids.push(reg.id);
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
            studentRecordChoices_ids.push(data.id);
          });
        }
      }
      for (let choice of this.assessmentChoices) {
        if (choice.choice !== "Other") {
          for (let reg of this.assessmentDocuments) {
            if (choice.choice === reg.name) {
              assessmentChoices_ids.push(reg.id);
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
            assessmentChoices_ids.push(data.id);
          });
        }
      }

      const chosen = [].concat(
        registrationChoices_ids,
        studentRecordChoices_ids,
        assessmentChoices_ids
      );

      const old = this.documents.map((element) => element.id);

      const removedCards = old.filter((element) => !chosen.includes(element));
      const addedCards = chosen.filter((element) => !old.includes(element));

      let addedDocumentTypes = [];
      let removedDocumentTypes = [];

      for (let id of addedCards) {
        addedDocumentTypes.push({ type: "document-types", id: id });
      }
      for (let id of removedCards) {
        removedDocumentTypes.push({ type: "document-types", id: id });
      }

      await this.api
        .attachDocumentType(district_id, addedDocumentTypes)
        .then((data) => {
          // console.log(data);
        })
        .catch((e) => {
          console.log(e);
        });
      console.log("removedDocumentTypes", removedDocumentTypes);
      await this.api
        .detachDocumentType(district_id, removedDocumentTypes)
        .then((data) => {
          console.log(data);
          Swal.fire("Request Passed!", "Documents Updated!", "success");

          this.$router.push(`/dashboard`);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>
