<template>
  <div class>
    <div class="row">
      <div class="col-12">
        <div class="page-title-box">
          <h4 class="page-title">Events Log</h4>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <div id="DataTables_Table_0_wrapper" class="dataTables_wrapper dt-bootstrap4 no-footer">
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
                      class="header dt-center sorting_asc"
                      tabindex="0"
                      aria-controls="DataTables_Table_0"
                      rowspan="1"
                      colspan="1"
                      aria-sort="ascending"
                      aria-label="Student : activate to sort column descending"
                      style="width: 211.4px;"
                    >Student</th>
                    <th
                      class="header dt-center sorting"
                      tabindex="0"
                      aria-controls="DataTables_Table_0"
                      rowspan="1"
                      colspan="1"
                      aria-label="Site: activate to sort column ascending"
                      style="width: 283.4px;"
                    >{{site_label}}</th>
                    <th
                      class="header dt-center sorting"
                      tabindex="0"
                      aria-controls="DataTables_Table_0"
                      rowspan="1"
                      colspan="1"
                      aria-label="Event: activate to sort column ascending"
                      style="width: 297.4px;"
                    >Event</th>
                    <th
                      class="header dt-center sorting"
                      tabindex="0"
                      aria-controls="DataTables_Table_0"
                      rowspan="1"
                      colspan="1"
                      aria-label="Created At: activate to sort column ascending"
                      style="width: 308.4px;"
                    >Created At</th>
                  </tr>
                </thead>
                <tbody>
                  <EventTableRow
                    :key="index"
                    v-for="(log, index) in eventLogs"
                    :created_at="log.created_at"
                    :event="log.payload.event_type"
                    :sent="log.payload.sent"
                    :site="log.payload.site"
                    :student="log.payload.student"
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
  data() {
    return {
      site_label: this.$store.state.fields.length > 0 ? this.$store.state.fields.find(element => {
        return element.base_name == "Site";
      }).custom_name : "Site"
    };
  },
  async asyncData(context) {
    const api = new Api(context);
    const eventLogs = await api.getEvents();

    return { eventLogs };
  },
  components: {
    Table
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
