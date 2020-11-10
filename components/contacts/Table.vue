<template>
  <div id="accordion" class="card mt-3">
    <div id="headingOne" class="card-header">
      <h4 class="mt-2 float-left">
        <a
          class="text-dark bold"
          data-toggle="collapse"
          href="#collapseOne"
          aria-expanded="true"
        >
          <i class="mdi mdi-minus mr-1 text-primary" />
          Contacts
        </a>
      </h4>
      <div class="m-0 float-right">
        <a
          href="#"
          class="btn btn-blue waves-effect waves-light"
          target="_blank"
        >Export</a>
        <a
          class="btn btn-blue waves-effect waves-light"
          href="#"
        >Add New Contact</a>
        <button
          class="btn-multiple-delete btn btn-info waves-effect waves-light"
        >
          Delete
        </button>
      </div>
    </div>
    <div
      id="collapseOne"
      class="collapse show"
      aria-labelledby="headingOne"
      data-parent="#accordion"
      style
    >
      <div class="card-body">
        <div
          id="contacts-table"
          class="table-responsive"
          data-pattern="priority-columns"
        >
          <div class="dataTables_wrapper">
            <div id="DataTables_Table_10_length" class="dataTables_length">
              <label>
                Show entries
                <select
                  class="custom-select custom-select-sm form-control form-control-sm contacts-length-menu"
                >
                  <option value="10">10</option>
                  <option selected="" value="25">25</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                </select>
              </label>
            </div>
          </div>
          <table class="table table-sm contacts-table text-center">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Phase</th>
                <th>Status</th>
                <th>Action Count</th>
                <th>District</th>
                <th>District ID</th>
                <th>Academy ID</th>
                <th>Created Date</th>
                <th>Outreach Resource Advocate</th>
                <th>Community Outreach Advocate</th>
                <th>Priority</th>
                <th>Control</th>

                <th>
                  <button id class="btn-select-all">
                    Select All
                  </button>
                  <input id="select-all-btn" type="hidden" value="0">
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="text-center">
                  <a href="#" class="text-secondary" target="_blank">Brandon</a>
                </td>
                <td class="text-center">
                  <a href="#" class="text-secondary" target="_blank">Waugh</a>
                </td>
                <td class="text-center">
                  Recruitment
                </td>
                <td class="text-center">
                  Scheduled
                </td>
                <td class="text-center">
                  0
                </td>
                <td class="text-center">
                  Sarasota
                </td>
                <td class="text-center" />
                <td class="text-center">
                  SAR
                </td>
                <td class="text-center">
                  07/24/2020
                </td>
                <td class="text-center">
                  Jesse Corona
                </td>
                <td class="text-center" />
                <td class="text-center">
                  Normal
                </td>
                <td class="text-center actions">
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
                </td>

                <td class="text-center">
                  <input type="checkbox" name="selected" value>
                </td>
              </tr>
              <tr>
                <td class="text-center">
                  <a href="#" class="text-secondary" target="_blank">Brandon</a>
                </td>
                <td class="text-center">
                  <a href="#" class="text-secondary" target="_blank">Waugh</a>
                </td>
                <td class="text-center">
                  Recruitment
                </td>
                <td class="text-center">
                  Scheduled
                </td>
                <td class="text-center">
                  0
                </td>
                <td class="text-center">
                  Sarasota
                </td>
                <td class="text-center" />
                <td class="text-center">
                  SAR
                </td>
                <td class="text-center">
                  07/24/2020
                </td>
                <td class="text-center">
                  Jesse Corona
                </td>
                <td class="text-center" />
                <td class="text-center">
                  Normal
                </td>
                <td class="text-center">
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
                </td>

                <td class="text-center actions">
                  <input type="checkbox" name="selected" value>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Table'
}
</script>

<style scoped></style>
