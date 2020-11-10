<template>
  <div class="page-wrapper">
    <div class="row">
      <div class="col-12">
        <div class="page-title-box">
          <h4 class="page-title">
            Contact:
            <mark>{{ $route.params.id }}</mark>
          </h4>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h4 class="mb-3 header-title">{{ first_name + " " + middle_name + " " + last_name }}</h4>
            <div class="row right-to-left">
              <div class="col-xs-12 col-md-8 text-right">
                <nuxt-link
                  class="btn btn-primary waves-effect waves-light"
                  :to="`/contacts/${$route.params.id}/edit`"
                >
                  <i class="fas fa-pencil"></i> Edit Contact
                </nuxt-link>
              </div>
              <div class="col-xs-12 col-md-4 left-to-right">
                <p class="m-b-10">
                  <strong>{{district_label}} :</strong>
                  <span class="float-right">{{ site ? site.district.name : "" }}</span>
                </p>
                <p class="m-b-10">
                  <strong>District ID:</strong>
                  <span class="float-right">{{ district_id }}</span>
                </p>
                <p class="m-b-10">
                  <strong>Academy ID:</strong>
                  <span class="float-right">{{ academy_id }}</span>
                </p>
                <p class="m-b-10">
                  <strong>Phase:</strong>
                  <span class="float-right">
                    {{
                    status ? status.phase.name : ""
                    }}
                  </span>
                </p>
                <p class="m-b-10">
                  <strong>Status:</strong>
                  <span class="float-right">{{ status ? status.name : "" }}</span>
                </p>
                <p class="m-b-10">
                  <strong>Priority:</strong>
                  <span class="float-right">{{ priority }}</span>
                </p>
                <p class="m-b-10">
                  <strong>Created Date:</strong>
                  <span class="float-right">{{ created_date }}</span>
                </p>
                <p class="m-b-10">
                  <strong>Duplicated:</strong>
                  <span class="float-right">{{ duplicated }}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h4 class="mb-3 header-title">Action Log</h4>

            <div class="float-right">
              <nuxt-link
                class="btn btn-success waves-effect waves-light"
                :to="`/contacts/${$route.params.id}/new-action`"
              >
                <span class="btn-label">
                  <i class="fa fa-plus"></i>
                </span>
                Add Action
              </nuxt-link>
            </div>
            <br />
            <br />
            <br />
            <div class="table-responsive">
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
                            style="width: 211.4px;"
                            aria-sort="ascending"
                            aria-label="Date: activate to sort column descending"
                          >Date</th>
                          <th
                            class="header dt-center sorting"
                            tabindex="0"
                            aria-controls="DataTables_Table_0"
                            rowspan="1"
                            colspan="1"
                            style="width: 119.4px;"
                            aria-label="Action: activate to sort column ascending"
                          >Action</th>
                          <th
                            class="header dt-center sorting"
                            tabindex="0"
                            aria-controls="DataTables_Table_0"
                            rowspan="1"
                            colspan="1"
                            style="width: 96.4px;"
                            aria-label="Note: activate to sort column ascending"
                          >Note</th>
                          <th
                            class="header dt-center sorting"
                            tabindex="0"
                            aria-controls="DataTables_Table_0"
                            rowspan="1"
                            colspan="1"
                            style="width: 116.4px;"
                            aria-label="Phase: activate to sort column ascending"
                          >Phase</th>
                          <th
                            class="header dt-center sorting"
                            tabindex="0"
                            aria-controls="DataTables_Table_0"
                            rowspan="1"
                            colspan="1"
                            style="width: 117.4px;"
                            aria-label="Status: activate to sort column ascending"
                          >Status</th>
                          <th
                            class="header dt-center sorting"
                            tabindex="0"
                            aria-controls="DataTables_Table_0"
                            rowspan="1"
                            colspan="1"
                            style="width: 176.4px;"
                            aria-label="Created By: activate to sort column ascending"
                          >Created By</th>
                          <th
                            class="header dt-center sorting"
                            tabindex="0"
                            aria-controls="DataTables_Table_0"
                            rowspan="1"
                            colspan="1"
                            style="width: 133.4px;"
                            aria-label="Sent To: activate to sort column ascending"
                          >Sent To</th>
                        </tr>
                      </thead>
                      <tbody>
                        <ContactTableRow2
                          :key="index"
                          v-for="(action, index) in actions"
                          :date="action.scheduled_date"
                          :action="action.category"
                          :note="action.note"
                          :phase="action.status.phase.name"
                          :status="action.status.name"
                          :created_by="
                            action.creator.first_name + action.creator.last_name
                          "
                          :sent_to="
                            action.contact.first_name + action.contact.last_name
                          "
                        />
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xs-12 col-md-6">
        <div class="card">
          <div class="card-body">
            <h4 class="mb-3 header-title">Contact Info</h4>
            <p class="m-b-10">
              <strong>Phone 1:</strong>
              <span class="float-right">{{ phone_1 }}</span>
            </p>
            <p class="m-b-10">
              <strong>Phone 2:</strong>
              <span class="float-right">{{ phone_2 }}</span>
            </p>
            <p class="m-b-10">
              <strong>Email:</strong>
              <span class="float-right">{{ email }}</span>
            </p>
            <p class="m-b-10">
              <strong>Street Address Line 1:</strong>
              <span class="float-right">{{ street_address_1 }}</span>
            </p>
            <p class="m-b-10">
              <strong>Street Address Line 2:</strong>
              <span class="float-right">{{ street_address_2 }}</span>
            </p>
          </div>
        </div>
      </div>
      <div class="col-xs-12 col-md-6">
        <div class="card">
          <div class="card-body">
            <h4 class="mb-3 header-title">PAST SCHOOL INFO</h4>
            <p class="m-b-10">
              <strong>Cohort Year:</strong>
              <span class="float-right">{{ cohort_year }}</span>
            </p>
            <p class="m-b-10">
              <strong>Grade Level:</strong>
              <span class="float-right">{{ grade_level }}</span>
            </p>
            <p class="m-b-10">
              <strong>Past School Attended:</strong>
              <span class="float-right">{{ past_school_attended }}</span>
            </p>
            <p class="m-b-10">
              <strong>Withdrawal Code:</strong>
              <span class="float-right">{{ withdrawal_code }}</span>
            </p>
            <p class="m-b-10">
              <strong>Withdrawal Date:</strong>
              <span class="float-right">{{ withdrawal_date }}</span>
            </p>
          </div>
        </div>
      </div>
      <div class="col-xs-12 col-md-6">
        <div class="card">
          <div class="card-body">
            <h4 class="mb-3 header-title">Assignees</h4>
            <p class="m-b-10">
              <strong>Community Outreach Advocate:</strong>
              <span class="float-right">
                {{
                community_outreach_advocate
                ? `${community_outreach_advocate.first_name +
                " " +
                community_outreach_advocate.last_name}`
                : ""
                }}
              </span>
            </p>
            <p class="m-b-10">
              <strong>Outreach Advocate:</strong>
              <span class="float-right">
                {{
                outreach_resource_advocate
                ? `${outreach_resource_advocate.first_name +
                " " +
                outreach_resource_advocate.last_name}`
                : ""
                }}
              </span>
            </p>
          </div>
        </div>
      </div>
      <div class="col-xs-12 col-md-6">
        <div class="card">
          <div class="card-body">
            <h4 class="mb-3 header-title">Additional Info</h4>
            <strong>Note</strong>
            <p>{{ notes }}</p>
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h4 class="mb-3 header-title">Import History</h4>
            <Table :items="[]" :fields="['Date', 'Field', 'Old Value', 'New Value']" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.left-to-right {
  direction: ltr;
}

.right-to-left {
  direction: rtl;
}
</style>

<script>
import Table from "../../../components/shared/Table";

import Api from "../../../services/api/Api.js";

export default {
  data() {
    return {
      district_label: this.$store.state.fields.length > 0 ? this.$store.state.fields.find(element => {
        return element.base_name == "District";
      }).custom_name : "District"
      // district_label: "District"
    };
  },
  async asyncData(context) {
    const api = new Api(context);
    const contact = await api.getContact(context.params.id);
    const actions = await api.getContactActions(context.params.id);

    return {
      ...contact,
      actions
    };
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
        sScrollXInner: "110%"
      });
    });
  }
};
</script>
