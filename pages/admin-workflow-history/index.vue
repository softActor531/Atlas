<template>
  <div class>
    <div class="row">
      <div class="col-12">
        <div class="page-title-box">
          <h4 class="page-title">Workflow Change History</h4>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <form method="POST" @submit.prevent="submitFilters">
          <InputSelectGroup2
            :id="district.id"
            :label="district_label"
            :array="districts"
            :width="6"
            name="district"
            @districtChanged="district.id = $event"
          />
          <InputSelectGroup2
            :id="phase.id"
            label="Phase"
            :array="phases"
            :width="6"
            name="phase"
            @phaseChanged="phase.id = $event"
          />
          <InputSelectGroup2
            :id="status.id"
            label="Status"
            :array="statuses"
            :width="6"
            name="selectedStatus"
            @selectedStatusChanged="status.id = $event"
          />

          <b-col cols="6" class="mb-3">
            <label for="example-input">From</label>
            <b-form-datepicker
              id="datepicker-buttons"
              v-model="date_start"
              today-button
              reset-button
              close-button
              locale="en"
            />
          </b-col>

          <b-col cols="6" class="mb-3">
            <label for="example-input">to</label>
            <b-form-datepicker
              id="datepicker-buttons1"
              v-model="date_end"
              today-button
              reset-button
              close-button
              locale="en"
            />
          </b-col>
          <div class="form-group col-md-12 student_stage">
            <input
              class="btn btn-primary waves-effect waves-light mb-2"
              type="submit"
              name="schedule[submit]"
              value="Get Data"
            />
          </div>
        </form>
      </div>
    </div>

    <Table
      :items="items"
      :fields="fields"
      hoverable
      @row-clicked="handleRowClicked"
    >
      <template v-slot:cell(student)="data"
        >{{ data.item.student.first_name }}
        {{ data.item.student.last_name }}</template
      >

      <template v-slot:cell(user)="data"
        >{{ data.item.user ? data.item.user.first_name : "N/A" }}
        {{ data.item.user ? data.item.user.last_name : "" }}</template
      >

      <template v-slot:cell(exited_at)="data">{{
        data.item.exited_at | moment("YYYY-MM-DD")
      }}</template>
    </Table>
  </div>
</template>

<script>
import Table from "../../components/shared/Table.vue";

export default {
  components: { Table },
  async asyncData({ $api, $axios, $formatter }) {
    const api = $api;
    const districts = await api.getDistricts();
    const phases = await api.getPhases();
    const statuses = await api.getStatuses();
    const studentStatuses = await $axios
      .$get(
        "http://atlas-rebuild-api.mtcdevsite.com/api/v1/student-status-history?include=prev_status.phase,new_status.phase,student,user",
        {
          headers: {
            Accept: "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json"
          }
        }
      )
      .then(data => $formatter.deserialize(data))
      .catch(err => console.log(err));

    return {
      districts,
      phases,
      statuses,
      studentStatuses
    };
  },
  created() {
    console.log("studentStatuses", this.studentStatuses);
  },
  data() {
    return {
      district_label: this.$store.state.fields.length > 0 ? this.$store.state.fields.find(element => {
        return element.base_name == "District";
      }).custom_name : "District",
      district: {
        name: "",
        id: ""
      },
      status: {
        name: "",
        id: ""
      },
      phase: {
        name: "",
        id: ""
      },
      date_start: "",
      date_end: "",
      fields: [
        { key: "exited_at", label: "Date updated", sortable: true },
        { key: "student", label: "GC Name", sortable: true },
        { key: "user", label: "Edited by", sortable: true },
        { key: "prev_status.name", label: "Previous Status", sortable: true },
        {
          key: "prev_status.phase.name",
          label: "Previous Phase",
          sortable: true
        },
        { key: "new_status.name", label: "New Status", sortable: true },
        { key: "new_status.phase.name", label: "New Phase", sortable: true }
      ],
      items: []
    };
  },
  mounted() {
    if (!this.$store.state.permissions.includes("View Status Change History")) {
      this.$router.push("/unauthorized");
    }
    if (this.studentStatuses) {
      this.items = this.studentStatuses;
    }
  },
  methods: {
    handleRowClicked(record, index) {
      this.$router.push({
        name: "student-record-id",
        params: { id: record.student.id }
      });
    },
    async submitFilters() {
      const url =
        "http://atlas-rebuild-api.mtcdevsite.com/api/v1/student-status-history?include=prev_status.phase,new_status.phase,student,user";
      await this.$axios
        .$get(
          url +
            `
        ${
          this.district.id
            ? `&filter[district]=${this.district.id}`
            : this.status.id
            ? `&filter[status]=${this.status.id}`
            : this.phase.id
            ? `&filter[phase]=${this.phase.id}`
            : this.date_start
            ? `&filter[created-at-from]=${this.date_start}`
            : this.date_end
            ? `&filter[created-at-to]=${this.date_end}`
            : null
        }
        `
        )
        .then(data => {
          const deserialized = this.$formatter.deserialize(data);
          console.log(deserialized);
          this.items = deserialized;
        });
    }
  }
};
</script>
