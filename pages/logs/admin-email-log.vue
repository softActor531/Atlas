<template>
  <div class>
    <div class="row">
      <div class="col-12">
        <div class="page-title-box">
          <h4 class="page-title">Email Log</h4>
        </div>
      </div>
    </div>
    <p>
      <em>Showing the last 1,000 sent emails from Atlas.</em>
    </p>
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
                      class="dt-center sorting_asc"
                      tabindex="0"
                      aria-controls="DataTables_Table_0"
                      rowspan="1"
                      colspan="1"
                      aria-sort="ascending"
                      aria-label="Datetime: activate to sort column descending"
                      style="width: 224px;"
                    >Datetime</th>
                    <th
                      class="dt-center sorting"
                      tabindex="0"
                      aria-controls="DataTables_Table_0"
                      rowspan="1"
                      colspan="1"
                      aria-label="Script/Page: activate to sort column ascending"
                      style="width: 131px;"
                    >Script/Page</th>
                    <th
                      class="dt-center sorting"
                      tabindex="0"
                      aria-controls="DataTables_Table_0"
                      rowspan="1"
                      colspan="1"
                      aria-label="User: activate to sort column ascending"
                      style="width: 101px;"
                    >User</th>
                    <th
                      class="dt-center sorting"
                      tabindex="0"
                      aria-controls="DataTables_Table_0"
                      rowspan="1"
                      colspan="1"
                      aria-label="To: activate to sort column ascending"
                      style="width: 211px;"
                    >To</th>
                    <th
                      class="dt-center sorting"
                      tabindex="0"
                      aria-controls="DataTables_Table_0"
                      rowspan="1"
                      colspan="1"
                      aria-label="From: activate to sort column ascending"
                      style="width: 236px;"
                    >From</th>
                    <th
                      class="dt-center sorting"
                      tabindex="0"
                      aria-controls="DataTables_Table_0"
                      rowspan="1"
                      colspan="1"
                      aria-label="Subject: activate to sort column ascending"
                      style="width: 188px;"
                    >Subject</th>
                  </tr>
                </thead>
                <tbody>
                  <EmailTableRow
                    :key="index"
                    v-for="(log, index) in emailLogs"
                    :to="log.payload.email.to"
                    :from="log.payload.email.from"
                    :datetime="log.created_at"
                    :subject="log.payload.email.subject"
                    :page="log.payload.script"
                    :user="log.payload.user"
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
    const emailLogs = await api.getEmails();

    return { emailLogs };
  },
  created() {
    console.log(this.emailLogs);
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
