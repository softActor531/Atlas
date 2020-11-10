<template>
  <div class>
    <div class="row">
      <div class="col-md-3 mt-3">
        <Studentsidenav :student-id="$route.params.id" />
      </div>
      <div class="col-md-9 col-xs-12">
        <div class="page-title-box">
          <div class="page-title-right">
            <nuxt-link
              class="btn btn-info waves-effect waves-light"
              :to="`/grad-calc/${$route.params.id}`"
            >
              <span class="btn-label">
                <i class="mdi mdi-calculator" />
              </span>
              Grad Calculator
            </nuxt-link>
          </div>
          <h4 class="page-title">
            {{ first_name + " " + last_name }} | Student's Diplomas
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
                      <span>{{ status ? status.phase.name : "N/A" }}</span>
                      <span>{{ status ? " /" + status.name : "" }}</span>
                    </h5>
                  </div>
                </div>

                <GcIconBox
                  label="GCA"
                  :value="
                    graduate_candidate_advocate
                      ? graduate_candidate_advocate.first_name +
                        ' ' +
                        graduate_candidate_advocate.last_name
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

        <div class="card">
          <div class="card-body">
            <h4 class="mb-3 header-title" />
            <div class="row">
              <div class="col-12 mb-2">
                <nuxt-link
                  class="btn btn-primary btn-rounded waves-effect waves-light float-right"
                  :to="`/plp/student/${$route.params.id}/add-new-plan`"
                >
                  <i class="fa fa-plus-circle" aria-hidden="true" /> Select New
                  Diploma
                </nuxt-link>
              </div>
            </div>
            <Table
              :items="plans"
              :fields="fields"
              active-edit-btn
              view-btn
              disable-delete-btn
              export-btn
              @view-entry="handleViewEntry"
              @edit-entry="handleEditEntry"
            >
              <template v-slot:cell(active)="data">
                {{ data.value === 1 ? "active" : "archived" }}
              </template>
              <template v-slot:cell(actions)="data">
                {{ data.value === 1 ? "edit-btn" : "active-btn" }}
              </template>
            </Table>
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
// import GcSideBar from '../../../../components/student-contact/GcSideBar'
import Table from "../../../../components/shared/Table";

import Api from "../../../../services/api/Api";

export default {
  components: {
    // GcSideBar,
    Table,
  },
  async asyncData(context) {
    const api = new Api(context);
    const student = await api.getStudent(context.route.params.id);
    const plans = await api.getStudentPlpPlans(context.route.params.id);

    return {
      ...student,
      plans,
    };
  },
  data() {
    return {
      fields: [
        { key: "id", label: "ID", sortable: true },
        { key: "name", label: "Plan Name", sortable: true },
        { key: "actions", label: "Controls" },
        { key: "active", label: "Status", sortable: true },
      ],
    };
  },
  methods: {
    handleViewEntry(record, index) {
      this.$router.push(`/plp/student-view/${record.student.id}/${record.id}`);
    },
    handleEditEntry(record, index) {
      this.$router.push(`/plp/student-edit/${record.student.id}/${record.id}`);
    },
  },
  mounted() {
    // if (!this.$store.state.modules.includes("plp")) {
    //   throw new Error();
    // }
    const script = document.createElement("script");
    script.setAttribute(
      "src",
      "https://cdn.datatables.net/1.10.21/js/jquery.dataTables.min.js"
    );
    document.head.appendChild(script);

    const script2 = document.createElement("script");
    script2.setAttribute(
      "src",
      "https://cdn.datatables.net/1.10.21/js/dataTables.bootstrap4.min.js"
    );
    document.head.appendChild(script2);

    const script3 = document.createElement("script");
    script3.setAttribute(
      "src",
      "https://cdn.datatables.net/responsive/2.1.0/js/dataTables.responsive.js"
    );
    document.head.appendChild(script3);

    $(document).ready(function () {
      $("#DataTables_Table_0").DataTable({
        responsive: true,
      });
    });
  },
};
</script>
