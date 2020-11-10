<template>
  <div class>
    <div class="row">
      <div class="col-12">
        <div class="page-title-box">
          <h4 class="page-title">User Info / Access</h4>
        </div>
      </div>
    </div>
    <nuxt-link class="btn btn-primary btn-rounded waves-effect waves-light" to="/users/edit">
      <i class="fa fa-plus-circle" aria-hidden="true"></i> Create New User
    </nuxt-link>
    <br />
    <br />
    <div class="card">
      <div class="card-body">
        <div id="DataTables_Table_1_wrapper" class="dataTables_wrapper dt-bootstrap4 no-footer">
          <div class="row">
            <div class="col-sm-12">
              <table
                class="clickable zebra table mt-4 table-centered dataTable no-footer"
                id="DataTables_Table_1"
                role="grid"
                aria-describedby="DataTables_Table_0_info"
                style="width: 1276px;"
              >
                <thead>
                  <tr role="row">
                    <th
                      class="dt-center sorting_asc"
                      tabindex="0"
                      aria-controls="DataTables_Table_0"
                      rowspan="1"
                      colspan="1"
                      aria-sort="ascending"
                      aria-label="First: activate to sort column descending"
                    >First</th>
                    <th
                      class="dt-center sorting"
                      tabindex="0"
                      aria-controls="DataTables_Table_0"
                      rowspan="1"
                      colspan="1"
                      aria-label="Last: activate to sort column ascending"
                    >Last</th>
                    <th
                      class="dt-center sorting"
                      tabindex="0"
                      aria-controls="DataTables_Table_0"
                      rowspan="1"
                      colspan="1"
                      aria-label="Email: activate to sort column ascending"
                    >Email</th>
                    <th
                      class="dt-center sorting"
                      tabindex="0"
                      aria-controls="DataTables_Table_0"
                      rowspan="1"
                      colspan="1"
                      aria-label="District: activate to sort column ascending"
                    >District</th>
                    <th
                      class="dt-center sorting"
                      tabindex="0"
                      aria-controls="DataTables_Table_0"
                      rowspan="1"
                      colspan="1"
                      aria-label="User Role: activate to sort column ascending"
                    >User Role</th>
                    <th
                      class="dt-center sorting"
                      tabindex="0"
                      aria-controls="DataTables_Table_0"
                      rowspan="1"
                      colspan="1"
                      aria-label="Title: activate to sort column ascending"
                    >Title</th>
                    <th
                      class="dt-center sorting"
                      tabindex="0"
                      aria-controls="DataTables_Table_0"
                      rowspan="1"
                      colspan="1"
                      aria-label="Active: activate to sort column ascending"
                    >Active</th>
                  </tr>
                </thead>
                <tbody>
                  <AdminTableRow
                    v-for="user in users"
                    :key="user.id"
                    :first="user.first_name"
                    :last="user.last_name"
                    :email="user.email"
                    :district="user.districts.length > 0 ? user.districts[0].name : ''"
                    :userRole="user.role ? user.role.name : ''"
                    :title="user.title"
                    :active="user.active"
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

<style>
@import url("https://cdn.datatables.net/responsive/2.1.1/css/dataTables.responsive.css");
@import url("https://cdn.datatables.net/1.10.21/css/jquery.dataTables.min.css");
@import url("https://cdn.datatables.net/1.10.21/css/dataTables.bootstrap4.min.css");
</style>

<script>
import AdminTableRow from "@/components/admin-users/AdminTableRow";
import Api from "../../services/api/Api";

export default {
  async asyncData(context) {
    const api = new Api(context);
    const users = await api.getUsers();

    return {
      users
    };
  },
  mounted() {
    let script = document.createElement("script");
    script.setAttribute(
      "src",
      "https://cdn.datatables.net/1.10.21/js/jquery.dataTables.min.js"
    );
    document.head.appendChild(script);

    let script2 = document.createElement("script");
    script2.setAttribute(
      "src",
      "https://cdn.datatables.net/1.10.21/js/dataTables.bootstrap4.min.js"
    );
    document.head.appendChild(script2);

    let script3 = document.createElement("script");
    script3.setAttribute(
      "src",
      "https://cdn.datatables.net/responsive/2.1.0/js/dataTables.responsive.js"
    );
    document.head.appendChild(script3);

    $(document).ready(function() {
      $("#DataTables_Table_1").DataTable({
        responsive: true,
        sScrollX: "100%",
        sScrollXInner: "110%"
      });
    });
  },
  components: {
    AdminTableRow
  }
};
</script>
