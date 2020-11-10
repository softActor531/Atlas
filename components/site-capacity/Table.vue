<template>
  <div class="card">
    <div class="card-body">
      <h4 class="m-0 pt-0">
        <i class="mdi mdi-format-list-bulleted mr-1 text-primary" />
        Site Capacity
      </h4>
      <div class="text-right">
        <a class="btn btn-primary btn-rounded waves-effect waves-light" href="">
          <i class="fa fa-plus-circle" /> Add New
        </a>
      </div>
      <div
        id="DataTables_Table_0_wrapper"
        class="dataTables_wrapper dt-bootstrap4 no-footer"
      >
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <div id="DataTables_Table_0_length" class="dataTables_length">
              <label>
                Show
                <select
                  name="DataTables_Table_0_length"
                  aria-controls="DataTables_Table_0"
                  class="custom-select custom-select-sm form-control form-control-sm"
                >
                  <option value="25">25</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                </select>
                entries
              </label>
            </div>
          </div>
          <div class="col-sm-12 col-md-6" />
        </div>
        <div class="row">
          <div class="col-sm-12">
            <div class="dataTables_scroll">
              <div
                class="dataTables_scrollHead"
                style="overflow: hidden; position: relative; border: 0px; width: 100%;"
              >
                <div
                  class="dataTables_scrollHeadInner"
                  style="box-sizing: content-box; width: 936.8px; padding-right: 17px;"
                >
                  <table
                    class="table table-sm contacts-table clickable zebra capacity-table dataTable no-footer"
                    style="width: 936.8px; margin-left: 0px;"
                    role="grid"
                  >
                    <thead>
                      <tr role="row">
                        <th
                          class="sorting_asc"
                          tabindex="0"
                          aria-controls="DataTables_Table_0"
                          rowspan="1"
                          colspan="1"
                          aria-sort="ascending"
                          aria-label="District: activate to sort column descending"
                        >
                          District
                        </th>
                        <th
                          class="sorting"
                          tabindex="0"
                          aria-controls="DataTables_Table_0"
                          rowspan="1"
                          colspan="1"
                          style="width: 174.4px;"
                          aria-label="Site: activate to sort column ascending"
                        >
                          Site
                        </th>
                        <th
                          class="sorting"
                          tabindex="0"
                          aria-controls="DataTables_Table_0"
                          rowspan="1"
                          colspan="1"
                          style="width: 181.6px;"
                          aria-label="Persons Per Site: activate to sort column ascending"
                        >
                          Persons Per Site
                        </th>
                        <th
                          class="sorting"
                          tabindex="0"
                          aria-controls="DataTables_Table_0"
                          rowspan="1"
                          colspan="1"
                          style="width: 236.8px;"
                          aria-label="GC Appointment Limit: activate to sort column ascending"
                        >
                          GC Appointment Limit
                        </th>
                        <th
                          class="sorting_disabled"
                          rowspan="1"
                          colspan="1"
                          style="width: 100px;"
                          aria-label
                        />
                      </tr>
                    </thead>
                  </table>
                </div>
              </div>
              <div
                class="dataTables_scrollBody"
                style="position: relative; overflow: auto; width: 100%;"
              >
                <table
                  id="DataTables_Table_0"
                  class="table table-sm contacts-table clickable zebra capacity-table dataTable no-footer"
                  style="width: 100%;"
                  role="grid"
                  aria-describedby="DataTables_Table_0_info"
                >
                  <thead>
                    <tr role="row" style="height: 0px;">
                      <th
                        class="sorting_asc"
                        aria-controls="DataTables_Table_0"
                        rowspan="1"
                        colspan="1"
                        style="width: 104px; padding-top: 0px; padding-bottom: 0px; border-top-width: 0px; border-bottom-width: 0px; height: 0px;"
                        aria-sort="ascending"
                        aria-label="District: activate to sort column descending"
                      >
                        <div
                          class="dataTables_sizing"
                          style="height: 0px; overflow: hidden;"
                        >
                          District
                        </div>
                      </th>
                      <th
                        class="sorting"
                        aria-controls="DataTables_Table_0"
                        rowspan="1"
                        colspan="1"
                        style="width: 174.4px; padding-top: 0px; padding-bottom: 0px; border-top-width: 0px; border-bottom-width: 0px; height: 0px;"
                        aria-label="Site: activate to sort column ascending"
                      >
                        <div
                          class="dataTables_sizing"
                          style="height: 0px; overflow: hidden;"
                        >
                          Site
                        </div>
                      </th>
                      <th
                        class="sorting"
                        aria-controls="DataTables_Table_0"
                        rowspan="1"
                        colspan="1"
                        style="width: 181.6px; padding-top: 0px; padding-bottom: 0px; border-top-width: 0px; border-bottom-width: 0px; height: 0px;"
                        aria-label="Persons Per Site: activate to sort column ascending"
                      >
                        <div
                          class="dataTables_sizing"
                          style="height: 0px; overflow: hidden;"
                        >
                          Persons Per Site
                        </div>
                      </th>
                      <th
                        class="sorting"
                        aria-controls="DataTables_Table_0"
                        rowspan="1"
                        colspan="1"
                        style="width: 236.8px; padding-top: 0px; padding-bottom: 0px; border-top-width: 0px; border-bottom-width: 0px; height: 0px;"
                        aria-label="GC Appointment Limit: activate to sort column ascending"
                      >
                        <div
                          class="dataTables_sizing"
                          style="height: 0px; overflow: hidden;"
                        >
                          GC Appointment Limit
                        </div>
                      </th>
                      <th
                        class="sorting_disabled"
                        rowspan="1"
                        colspan="1"
                        style="width: 100px; padding-top: 0px; padding-bottom: 0px; border-top-width: 0px; border-bottom-width: 0px; height: 0px;"
                        aria-label
                      >
                        <div
                          class="dataTables_sizing"
                          style="height: 0px; overflow: hidden;"
                        />
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr role="row" class="odd">
                      <td class="sorting_1">
                        Bethel
                      </td>
                      <td>Bethel</td>
                      <td>20</td>
                      <td>2</td>
                      <td>
                        <nuxt-link
                          class="btn btn-primary btn-xs btn-confirmed"
                          to="/site-capacity/create"
                        >
                          <i class="mdi mdi-square-edit-outline" />
                        </nuxt-link>
                        <a
                          class="btn btn-danger btn-xs btn-confirmed btn-delete-capacity"
                          data-capacity-id="15"
                          href="https://dev.accelerationacademy.net/capacity/15/delete"
                        >
                          <i class="fa fa-trash" />
                        </a>
                      </td>
                    </tr>
                    <tr role="row" class="even">
                      <td class="sorting_1">
                        St Lucie
                      </td>
                      <td>Port St Lucie</td>
                      <td>100</td>
                      <td>20</td>
                      <td>
                        <nuxt-link
                          class="btn btn-primary btn-xs btn-confirmed"
                          to="/site-capacity/create"
                        >
                          <i class="mdi mdi-square-edit-outline" />
                        </nuxt-link>
                        <a
                          class="btn btn-danger btn-xs btn-confirmed btn-delete-capacity"
                          data-capacity-id="9"
                          href="https://dev.accelerationacademy.net/capacity/9/delete"
                        >
                          <i class="fa fa-trash" />
                        </a>
                      </td>
                    </tr>
                    <tr role="row" class="odd">
                      <td class="sorting_1">
                        Test District
                      </td>
                      <td>Test School</td>
                      <td>250</td>
                      <td>30</td>
                      <td>
                        <nuxt-link
                          class="btn btn-primary btn-xs btn-confirmed"
                          to="/site-capacity/create"
                        >
                          <i class="mdi mdi-square-edit-outline" />
                        </nuxt-link>
                        <a
                          class="btn btn-danger btn-xs btn-confirmed btn-delete-capacity"
                          data-capacity-id="22"
                          href="https://dev.accelerationacademy.net/capacity/22/delete"
                        >
                          <i class="fa fa-trash" />
                        </a>
                      </td>
                    </tr>
                    <tr role="row" class="even">
                      <td class="sorting_1">
                        Miami-Dade
                      </td>
                      <td>North Miami Beach</td>
                      <td>22</td>
                      <td>7</td>
                      <td>
                        <nuxt-link
                          class="btn btn-primary btn-xs btn-confirmed"
                          to="/site-capacity/create"
                        >
                          <i class="mdi mdi-square-edit-outline" />
                        </nuxt-link>
                        <a
                          class="btn btn-danger btn-xs btn-confirmed btn-delete-capacity"
                          data-capacity-id="23"
                          href="https://dev.accelerationacademy.net/capacity/23/delete"
                        >
                          <i class="fa fa-trash" />
                        </a>
                      </td>
                    </tr>
                    <tr role="row" class="odd">
                      <td class="sorting_1">
                        Miami-Dade
                      </td>
                      <td>Homestead</td>
                      <td>250</td>
                      <td>7</td>
                      <td>
                        <nuxt-link
                          class="btn btn-primary btn-xs btn-confirmed"
                          to="/site-capacity/create"
                        >
                          <i class="mdi mdi-square-edit-outline" />
                        </nuxt-link>
                        <a
                          class="btn btn-danger btn-xs btn-confirmed btn-delete-capacity"
                          data-capacity-id="25"
                          href="https://dev.accelerationacademy.net/capacity/25/delete"
                        >
                          <i class="fa fa-trash" />
                        </a>
                      </td>
                    </tr>
                    <tr role="row" class="even">
                      <td class="sorting_1">
                        Miami-Dade
                      </td>
                      <td>Le Jeune</td>
                      <td>No Restrictions</td>
                      <td>No Restrictions</td>
                      <td>
                        <nuxt-link
                          class="btn btn-primary btn-xs btn-confirmed"
                          to="/site-capacity/create"
                        >
                          <i class="mdi mdi-square-edit-outline" />
                        </nuxt-link>
                        <a
                          class="btn btn-danger btn-xs btn-confirmed btn-delete-capacity"
                          data-capacity-id="35"
                          href="https://dev.accelerationacademy.net/capacity/35/delete"
                        >
                          <i class="fa fa-trash" />
                        </a>
                      </td>
                    </tr>
                    <tr role="row" class="odd">
                      <td class="sorting_1">
                        Charleston
                      </td>
                      <td>Trident Tech</td>
                      <td>No Restrictions</td>
                      <td>2</td>
                      <td>
                        <nuxt-link
                          class="btn btn-primary btn-xs btn-confirmed"
                          to="/site-capacity/create"
                        >
                          <i class="mdi mdi-square-edit-outline" />
                        </nuxt-link>
                        <a
                          class="btn btn-danger btn-xs btn-confirmed btn-delete-capacity"
                          data-capacity-id="30"
                          href="https://dev.accelerationacademy.net/capacity/30/delete"
                        >
                          <i class="fa fa-trash" />
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12 col-md-5">
            <div
              id="DataTables_Table_0_info"
              class="dataTables_info"
              role="status"
              aria-live="polite"
            >
              Showing 1 to 7 of 7 entries (filtered from 33 total entries)
            </div>
          </div>
          <div class="col-sm-12 col-md-7">
            <div
              id="DataTables_Table_0_paginate"
              class="dataTables_paginate paging_simple_numbers"
            >
              <ul class="pagination pagination-rounded">
                <li
                  id="DataTables_Table_0_previous"
                  class="paginate_button page-item previous disabled"
                >
                  <a
                    href="#"
                    aria-controls="DataTables_Table_0"
                    data-dt-idx="0"
                    tabindex="0"
                    class="page-link"
                  >
                    <i class="mdi mdi-chevron-left" />
                  </a>
                </li>
                <li class="paginate_button page-item active">
                  <a
                    href="#"
                    aria-controls="DataTables_Table_0"
                    data-dt-idx="1"
                    tabindex="0"
                    class="page-link"
                    >1</a
                  >
                </li>
                <li
                  id="DataTables_Table_0_next"
                  class="paginate_button page-item next disabled"
                >
                  <a
                    href="#"
                    aria-controls="DataTables_Table_0"
                    data-dt-idx="2"
                    tabindex="0"
                    class="page-link"
                  >
                    <i class="mdi mdi-chevron-right" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Table"
};
</script>

<style scoped>
thead th:focus {
  outline: none;
}

.sorting_asc,
.sorting {
  background-image: none !important;
}
</style>
