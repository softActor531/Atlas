<template>
  <div class="card">
    <div class="card-body">
      <h1 class="mb-3">{{ name }}</h1>

      <div class="table-responsive">
        <div
          id="DataTables_Table_0_wrapper"
          class="dataTables_wrapper dt-bootstrap4 no-footer"
        >
          <div class="row">
            <div class="col-sm-12">
              <table
                id="DataTables_Table_0"
                class="table table-sm table-bordered clickable zebra mt-4 schedule dataTable no-footer"
                role="grid"
                aria-describedby="DataTables_Table_0_info"
              >
                <thead>
                  <tr role="row">
                    <th
                      class="header dt-center sorting_asc"
                      tabindex="0"
                      aria-controls="DataTables_Table_0"
                      rowspan="1"
                      colspan="1"
                      aria-sort="ascending"
                      aria-label="ID: activate to sort column descending"
                      style="width: 159px"
                    >
                      ID
                    </th>
                    <th
                      class="header dt-center sorting"
                      tabindex="0"
                      aria-controls="DataTables_Table_0"
                      rowspan="1"
                      colspan="1"
                      aria-label="Tenant Name: activate to sort column ascending"
                      style="width: 321px"
                    >
                      Name
                    </th>
                    <th
                      class="header dt-center sorting"
                      tabindex="0"
                      aria-controls="DataTables_Table_0"
                      rowspan="1"
                      colspan="1"
                      aria-label="Initial User: activate to sort column ascending"
                      style="width: 246px"
                    >
                      Email
                    </th>
                    <th
                      class="header dt-center sorting"
                      tabindex="0"
                      aria-controls="DataTables_Table_0"
                      rowspan="1"
                      colspan="1"
                      aria-label="System Hierarchy: activate to sort column ascending"
                      style="width: 96px"
                    >
                      Impersonate
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <TenantUserRow
                    :key="index"
                    v-for="(user, index) of users"
                    :id="user.id"
                    :name="user.first_name + ' ' + user.last_name"
                    :email="user.email"
                    :api="api"
                  />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Api from "../../services/api/Api";
export default {
  async asyncData(context) {
    const api = new Api(context);
    const tenant = await api.getTenant(
      context.store.state.token,
      context.route.params.id
    );
    const users = await api.getTenantUsers(
      context.route.params.id,
      context.store.state.token
    );

    return {
      ...tenant,
      users,
      api,
    };
  },
  computed: {
    getModules() {
      const modules = [];
      if (this.config.modules.dashboard.active) {
        modules.push("dashboard");
      }
      if (this.config.modules.reports.active) {
        modules.push("reports");
      }
      if (this.config.modules.student_profile_management.active) {
        modules.push("student_profile_management");
      }
      if (this.config.modules.plp.active) {
        modules.push("plp");
      }
      if (this.config.modules.courseware_integration.active) {
        modules.push("courseware_integration");
      }
      if (this.config.modules.graduation_calculator.active) {
        modules.push("graduation_calculator");
      }
      if (this.config.modules.automated_workflow.active) {
        modules.push("automated_workflow");
      }
      if (this.config.modules.scheduling.active) {
        modules.push("scheduling");
      }
      if (this.config.modules.document_storage.active) {
        modules.push("document_storage");
      }
      if (this.config.modules.case_management_notes.active) {
        modules.push("case_management_notes");
      }
      if (this.config.modules.apps.compass_web) {
        modules.push("compass_web");
      }
      if (this.config.modules.apps.compass_mobile) {
        modules.push("compass_mobile");
      }
      if (this.config.modules.apps.navigator_mobile) {
        modules.push("navigator_mobile");
      }
      console.log(modules);
      return modules;
    },
  },
  mounted() {
    this.$store.dispatch("setTenantId", this.$route.params.id);
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
