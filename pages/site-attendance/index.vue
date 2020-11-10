<template>
  <div>
    <div>
      <div class="card">
        <div class="card-body">
          <div class="row mt-1 mb-3">
            <div class="col-md-4">
              <label>Student</label>

              <select v-model="selected">
                <option
                  v-for="item in students"
                  :value="{ id: item.id, text: item.name }"
                  :key="item.id"
                >
                  {{ item.name }}
                </option>
              </select>
              <!-- <InputSelectGroup2 v-model="students.id" :array="students" /> -->
            </div>
          </div>
          <div class="text-right">
            <button
              type="button"
              @click="getAttendace"
              class="btn btn-primary waves-effect waves-light mb-2"
            >
              Filter
            </button>
          </div>
        </div>
      </div>
    </div>

    <div v-if="selected.id > 0" class="text-right mt-3 mb-3">
      <b-button
        class="btn btn-primary"
        pill
        @click="$router.push(`/site-attendance/${selected.id}`)"
      >
        <i class="fas fa-plus-circle" aria-hidden="true" />
        Create New
      </b-button>
    </div>
    <Table :field="list" :items="list" :add-btn="'/site-attendance/create'">
      <template></template>
    </Table>
  </div>
</template>

<script>
import Table from "@/components/shared/Table";
// import { getAttendace } from "../../Api";

export default {
  components: { Table },

  data() {
    return {
      selected: "",
      list: [],
      students: [],
    };
  },

  async fetch() {
    await this.$axios
      .get(`http://atlas-rebuild-api.mtcdevsite.com/api/v1/students/`, {
        headers: {
          Accept: "application/vnd.api+json",
          "Content-Type": "application/vnd.api+json",
          "X-Tenant-Id": this.$store.state.tenant_id,
          Authorization: `Bearer ${this.$store.state.token}`,
        },
      })
      .then((res) => {
        this.students = res.data.data.map((item) => {
          return {
            id: item.id,
            name: item.attributes.first_name + " " + item.attributes.last_name,
          };
        });
        console.log(this.students.id);
      })
      .catch((err) => console.log(err));

    await this.$axios
      .get(
        `http://atlas-rebuild-api.mtcdevsite.com/api/v1/student-attendance-entries`,
        {
          headers: {
            Accept: "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json",
            "X-Tenant-Id": this.$store.state.tenant_id,
            Authorization: `Bearer ${this.$store.state.token}`,
          },
        }
      )
      .then((res) => {
        this.list = res.data.data.map((item) => {
          return {
            id: item.id,
            check_in: item.attributes.check_in,
            check_out: item.attributes.check_out,
            note: item.attributes.note,
          };
          this.id = id;
        });
        console.log(this.list);
      })
      .catch((err) => console.log(err));
  },

  methods: {
    setFields() {
      this.fields = [
        {
          key: "check_in",
          label: "Check In",
        },
        {
          key: "check_out",
          label: "Check Out",
        },
        {
          key: "notes",
          label: "Notes",
        },
        { key: "absence", label: "Absence" },
        { key: "next_date_committed", label: "Next Date Committed" },
      ];
    },

    async getAttendace() {
      // this.id = this.students.id;
      // console.log(this.students.id);
      await this.$axios
        .get(
          `http://atlas-rebuild-api.mtcdevsite.com/api/v1/student-attendance-entries?include=student.site.district&filter[student]=${this.selected.id}`,
          {
            headers: {
              Accept: "application/vnd.api+json",
              "Content-Type": "application/vnd.api+json",
              "X-Tenant-Id": this.$store.state.tenant_id,
              Authorization: `Bearer ${this.$store.state.token}`,
            },
          }
        )
        .then((res) => {
          this.list = res.data.data.map((item) => {
            return {
              id: item.id,
              check_in: item.attributes.check_in,
              check_out: item.attributes.check_out,
              note: item.attributes.note,
            };
            this.id = id;
          });
          console.log(this.list);
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>
