<template>
  <div class="container">
    <h3 class="title">Referral Options</h3>

    <b-button
      pill
      class="mb-3"
      variant="blue"
      @click="$router.push('/admin-option-referral-create')"
    >
      <i class="fas fa-plus" />
      Create new referral option
    </b-button>

    <div class="card">
      <div class="card-body">
        <div
          id="DataTables_Table_0_wrapper"
          class="dataTables_wrapper dt-bootstrap4 no-footer"
        >
          <div class="row">
            <div class="col-sm-12">
              <table
                class="clickable zebra table mt-4 schedule dataTable no-footer"
                id="DataTables_Table_0"
                role="grid"
                aria-describedby="DataTables_Table_0_info"
                style="width: 1275px;"
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
                      aria-label="Group: activate to sort column descending"
                      style="width: 211.4px;"
                    >
                      Group
                    </th>
                    <th
                      class="dt-center sorting"
                      tabindex="0"
                      aria-controls="DataTables_Table_0"
                      rowspan="1"
                      colspan="1"
                      aria-label="Option: activate to sort column ascending"
                      style="width: 718.4px;"
                    >
                      Option
                    </th>
                    <th
                      class="dt-center sorting"
                      tabindex="0"
                      aria-controls="DataTables_Table_0"
                      rowspan="1"
                      colspan="1"
                      aria-label="Active: activate to sort column ascending"
                      style="width: 214.4px;"
                    >
                      Active
                    </th>
                    <th
                      class="dt-center sorting"
                      tabindex="0"
                      aria-controls="DataTables_Table_0"
                      rowspan="1"
                      colspan="1"
                      aria-label="Active: activate to sort column ascending"
                      style="width: 214.4px;"
                    >
                      Edit
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <AdminReferralTableRow
                    :key="index"
                    v-for="(row, index) of rows"
                    :active="row.active === 1"
                    :group="row.group"
                    :option="row.name"
                    :id="row.id"
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
import Api from "@/services/api/Api";
import Table from "../../components/shared/Table.vue";
export default {
  components: { Table },
  async asyncData(context) {
    const api = new Api(context);
    const rows = await api.getReferralOptions();
    return {
      rows
    };
  },
  data: () => ({}),
  mounted() {
    if (!this.$store.state.permissions.includes("View Referral Options")) {
      this.$router.push("/unauthorized");
    }
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
      $("#DataTables_Table_0").DataTable({
        responsive: true,
        sScrollX: "100%",
        sScrollXInner: "110%"
      });
    });
  },
  methods: {
    handleRowClicked(record, index) {
      this.$router.push({
        name: "admin-option-referral-edit-id",
        params: { id: `${record.id}`, record }
      });
    }
  }
};
</script>

<style lang="scss" scoped></style>
