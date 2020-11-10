<template>
  <div class>
    <div class="row">
      <div class="col-12">
        <div class="page-title-box">
          <h4 class="page-title">Notifications Logs</h4>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <div id="DataTables_Table_0_wrapper" class="dataTables_wrapper dt-bootstrap4 no-footer">
          <div class="row">
            <div class="col-sm-12">
              <table
                class="clickable table zebra mt-4 schedule dataTable no-footer"
                id="DataTables_Table_0"
                role="grid"
                aria-describedby="DataTables_Table_0_info"
                style="width: 1276px;"
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
                      aria-label="First Name: activate to sort column descending"
                    >Student</th>
                    <th
                      class="header dt-center sorting"
                      tabindex="0"
                      aria-controls="DataTables_Table_0"
                      rowspan="1"
                      colspan="1"
                      aria-label="Last Name : activate to sort column ascending"
                      style="width: 393.4px;"
                    >Site</th>
                    <th
                      class="header dt-center sorting"
                      tabindex="0"
                      aria-controls="DataTables_Table_0"
                      rowspan="1"
                      colspan="1"
                      aria-label="District: activate to sort column ascending"
                      style="width: 148.4px;"
                    >Notification Type</th>
                    <th
                      class="header dt-center sorting"
                      tabindex="0"
                      aria-controls="DataTables_Table_0"
                      rowspan="1"
                      colspan="1"
                      aria-label="School: activate to sort column ascending"
                      style="width: 201.4px;"
                    >Created At</th>
                    <th
                      class="header dt-center sorting"
                      tabindex="0"
                      aria-controls="DataTables_Table_0"
                      rowspan="1"
                      colspan="1"
                      aria-label="Action: activate to sort column ascending"
                      style="width: 103.4px;"
                    >Sent</th>
                  </tr>
                </thead>
                <tbody>
                  <NotificationTableRow
                    :key="index"
                    v-for="(notification, index) of notifications"
                    :student="notification.payload.student"
                    :created_at="notification.created_at"
                    :site="notification.payload.site"
                    :notification_type="notification.payload.notification_type"
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
import Table from "../../components/shared/Table";

import Api from "../../services/api/Api";

export default {
  components: {
    Table
  },
  async asyncData(context) {
    const api = new Api(context);
    const notifications = await api.getNotifications();

    return { notifications };
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
      $("#DataTables_Table_0").DataTable({
        responsive: true,
        sScrollX: "100%",
        sScrollXInner: "110%"
      });
    });
  }
};
</script>
