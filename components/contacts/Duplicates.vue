<template>
  <div class="mt-3">
    <div id="duplicatesAccordion" class="card">
      <div id="headingTwo" class="card-header">
        <h4 class="m-0">
          <a
            class="text-dark bold"
            data-toggle="collapse"
            href="#duplicatesCollapse"
            aria-expanded="true"
          >
            <i class="mdi mdi-minus mr-1 text-primary" />
            Duplicated Contacts
          </a>
        </h4>
      </div>
      <div
        id="duplicatesCollapse"
        class="collapse"
        aria-labelledby="headingTow"
        data-parent="#duplicatesAccordion"
      >
        <div class="card-body">
          <div
            id="contacts-table"
            class="table-responsive"
            data-pattern="priority-columns"
          >
            <div
              id="DataTables_Table_0_wrapper"
              class="dataTables_wrapper dt-bootstrap4 no-footer"
            >
              <div class="row">
                <div class="col-sm-12 col-md-6">
                  <div id="1" class="dataTables_length">
                    <label>
                      Show entries
                      <select
                        name="1"
                        class="custom-select custom-select-sm form-control form-control-sm"
                      >
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                      </select>
                    </label>
                  </div>
                </div>
                <div class="col-sm-12 col-md-3 offset-md-3">
                  <div id="DataTables_Table_0_filter" class="dataTables_filter">
                    <label>
                      Search:
                      <input
                        type="search"
                        class="form-control form-control-sm"
                        placeholder="Search"
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12">
                  <table
                    id="2"
                    class="table dt-responsive nowrap w-100 dataTable no-footer dtr-inline text-center"
                    role="grid"
                    aria-describedby="2_info"
                  >
                    <thead>
                      <tr role="row">
                        <th
                          class="header sorting_asc"
                          tabindex="0"
                          rowspan="1"
                          colspan="1"
                          aria-sort="ascending"
                          aria-label="First Name: activate to sort column descending"
                          style="width: 0px;"
                        >
                          First Name
                        </th>
                        <th
                          class="header sorting_asc"
                          tabindex="0"
                          rowspan="1"
                          colspan="1"
                          aria-label="Last Name: activate to sort column ascending"
                          style="width: 0px;"
                        >
                          Last Name
                        </th>
                        <th
                          class="header sorting"
                          tabindex="0"
                          rowspan="1"
                          colspan="1"
                          aria-label="Phase: activate to sort column ascending"
                          style="width: 0px;"
                        >
                          Phase
                        </th>
                        <th
                          class="header sorting"
                          tabindex="0"
                          rowspan="1"
                          colspan="1"
                          aria-label="Status: activate to sort column ascending"
                          style="width: 0px;"
                        >
                          Status
                        </th>
                        <th
                          class="header sorting"
                          tabindex="0"
                          rowspan="1"
                          colspan="1"
                          aria-label="Action Count: activate to sort column ascending"
                          style="width: 0px;"
                        >
                          Action Count
                        </th>
                        <th
                          class="header sorting"
                          tabindex="0"
                          rowspan="1"
                          colspan="1"
                          aria-label="District: activate to sort column ascending"
                          style="width: 0px;"
                        >
                          District
                        </th>
                        <th
                          class="header sorting"
                          tabindex="0"
                          rowspan="1"
                          colspan="1"
                          aria-label="District ID: activate to sort column ascending"
                          style="width: 0px;"
                        >
                          District ID
                        </th>
                        <th
                          class="header sorting"
                          tabindex="0"
                          rowspan="1"
                          colspan="1"
                          aria-label="Academy ID: activate to sort column ascending"
                          style="width: 0px;"
                        >
                          Academy ID
                        </th>
                        <th
                          class="header sorting"
                          tabindex="0"
                          rowspan="1"
                          colspan="1"
                          aria-label="Created Date: activate to sort column ascending"
                          style="width: 0px;"
                        >
                          Created Date
                        </th>
                        <th
                          class="header sorting"
                          tabindex="0"
                          rowspan="1"
                          colspan="1"
                          aria-label="Outreach Resource Advocate: activate to sort column ascending"
                          style="width: 0px;"
                        >
                          Outreach Resource Advocate
                        </th>
                        <th
                          class="header sorting"
                          tabindex="0"
                          rowspan="1"
                          colspan="1"
                          aria-label="Community Outreach Advocate: activate to sort column ascending"
                          style="width: 0px;"
                        >
                          Community Outreach Advocate
                        </th>
                        <th
                          class="header sorting"
                          tabindex="0"
                          rowspan="1"
                          colspan="1"
                          aria-label="Priority: activate to sort column ascending"
                          style="width: 0px;"
                        >
                          Priority
                        </th>
                        <th
                          class="header sorting"
                          tabindex="0"
                          rowspan="1"
                          colspan="1"
                          aria-label="Control: activate to sort column ascending"
                          style="width: 0px;"
                        >
                          Control
                        </th>
                        <th
                          class="header sorting"
                          tabindex="0"
                          rowspan="1"
                          colspan="1"
                          aria-label="Select All: activate to sort column ascending"
                        >
                          <button
                            id="dupliacted-btn"
                            class="btn-select-all dupliacted"
                          >
                            Select All
                          </button>
                          <input id="select-all-btn" type="hidden" value="0" />
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr role="row" class="odd">
                        <td class="sorting_1">
                          <a href="#" class="text-secondary" target="_blank"
                            >Aaleeyah</a
                          >
                        </td>
                        <td>
                          <a href="#" class="text-secondary" target="_blank"
                            >Flores</a
                          >
                        </td>
                        <td>Recruitment</td>
                        <td>New</td>
                        <td>0</td>
                        <td>Clark County</td>
                        <td>11390771</td>
                        <td>CLA11390771</td>
                        <td>07/24/2020</td>
                        <td>Jesse Corona</td>
                        <td />
                        <td>Low</td>
                        <td class="d-flex">
                          <div class="btn-group btn-group-sm">
                            <a
                              href="#"
                              class="tabledit-edit-button btn-show text-secondary"
                            >
                              <i class="fas fa-eye" />
                            </a>
                          </div>
                          <div class="btn-group btn-group-sm">
                            <a
                              href="#"
                              class="tabledit-edit-button btn-edit text-secondary"
                            >
                              <i class="mdi mdi-pencil" />
                            </a>
                          </div>

                          <form action class="inline-form" method="post">
                            <button
                              type="submit"
                              class="btn-link icon-btn text-danger"
                            >
                              <i class="fas fa-trash" />
                            </button>
                          </form>
                        </td>

                        <td class="text-center">
                          <input
                            type="checkbox"
                            name="selected"
                            value="72680"
                            class="mt-1"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div class="multiple-buttons clearfix text-right mt-3">
            <button
              class="btn btn-multiple-override btn-primary waves-effect waves-light"
            >
              Override
            </button>
            <button
              class="btn btn-multiple-delete btn-danger waves-effect waves-light"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Duplicates"
};
</script>

<style scoped>
form {
  height: 0;
  margin-top: 10px;
}

.btn-link {
  border: none;
}
</style>
