<template>
  <div class="card">
    <div class="card-body">
      <h1 class="mb-3">Tenants</h1>
      <div class="row">
        <div class="col-12 mb-4">
          <nuxt-link
            class="btn btn-primary btn-rounded waves-effect waves-light float-right"
            to="#"
          >
            <i class="fa fa-plus-circle" aria-hidden="true" /> Create new Tenant
          </nuxt-link>
        </div>
      </div>
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
                      Tenant Name
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
                      Pick Tenant
                    </th>
                    <!-- <th
                      class="header dt-center sorting"
                      tabindex="0"
                      aria-controls="DataTables_Table_0"
                      rowspan="1"
                      colspan="1"
                      aria-label="System Hierarchy: activate to sort column ascending"
                      style="width: 96px"
                    >
                      System Hierarchy
                    </th> -->
                  </tr>
                </thead>
                <tbody>
                  <UserTenantRow
                    :key="index"
                    v-for="(tenant, index) of tenants"
                    :id="tenant.id"
                    :tenantName="tenant.name"
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
    const user = await api.getUserTenants(context.store.state.token);
    console.log(user);

    return {
      tenants: user.tenants,
      api,
    };
  },
  mounted() {
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
