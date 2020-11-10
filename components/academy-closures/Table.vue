<template>
  <div class="card">
    <div class="card-header bg-white">
      <h4 class="m-0">
        <i class="mdi mdi-format-list-bulleted mr-1 text-primary" />
        Academy Closures
      </h4>
    </div>
    <div class="card-body">
      <div
        id="DataTables_Table_0_wrapper"
        class="dataTables_wrapper dt-bootstrap4 no-footer"
      >
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <div id="DataTables_Table_0_length" class="dataTables_length">
              <label
                >Show
                <select
                  name="DataTables_Table_0_length"
                  aria-controls="DataTables_Table_0"
                  class="custom-select custom-select-sm form-control form-control-sm"
                  ><option value="25">25</option
                  ><option value="50">50</option
                  ><option value="100">100</option></select
                >
                entries</label
              >
            </div>
          </div>
          <div class="col-sm-12 col-md-6" />
        </div>
        <div class="row">
          <div class="col-sm-12">
            <div class="dataTables_scroll overflow-auto">
              <div
                class="dataTables_scrollHead"
                style=" position: relative; border: 0px; width: 100%;"
              >
                <div
                  class="dataTables_scrollHeadInner"
                  style="box-sizing: content-box; width: 946.4px; padding-right: 17px;"
                >
                  <table
                    class="table table-sm contacts-table clickable zebra closures dataTable no-footer"
                    style="width: 946.4px; margin-left: 0px;"
                    role="grid"
                  >
                    <thead>
                      <tr role="row">
                        <th
                          class="header sorting_asc"
                          tabindex="0"
                          aria-controls="DataTables_Table_0"
                          rowspan="1"
                          colspan="1"
                          style="width: 56px;"
                          aria-sort="ascending"
                          aria-label="District: activate to sort column descending"
                        >
                          District
                        </th>
                        <th
                          class="header sorting"
                          tabindex="0"
                          aria-controls="DataTables_Table_0"
                          rowspan="1"
                          colspan="1"
                          style="width: 60px;"
                          aria-label="Site: activate to sort column ascending"
                        >
                          Site
                        </th>
                        <th
                          class="header sorting"
                          tabindex="0"
                          aria-controls="DataTables_Table_0"
                          rowspan="1"
                          colspan="1"
                          style="width: 46.4px;"
                          aria-label="Name: activate to sort column ascending"
                        >
                          Name
                        </th>
                        <th
                          class="header sorting"
                          tabindex="0"
                          aria-controls="DataTables_Table_0"
                          rowspan="1"
                          colspan="1"
                          style="width: 59.2px;"
                          aria-label="Type: activate to sort column ascending"
                        >
                          Type
                        </th>
                        <th
                          class="header sorting"
                          tabindex="0"
                          aria-controls="DataTables_Table_0"
                          rowspan="1"
                          colspan="1"
                          style="width: 32px;"
                          aria-label="Start Date: activate to sort column ascending"
                        >
                          Start Date
                        </th>
                        <th
                          class="header sorting"
                          tabindex="0"
                          aria-controls="DataTables_Table_0"
                          rowspan="1"
                          colspan="1"
                          style="width: 30.4px;"
                          aria-label="End Date: activate to sort column ascending"
                        >
                          End Date
                        </th>
                        <th
                          class="header sorting"
                          tabindex="0"
                          aria-controls="DataTables_Table_0"
                          rowspan="1"
                          colspan="1"
                          style="width: 32.8px;"
                          aria-label="Start Time: activate to sort column ascending"
                        >
                          Start Time
                        </th>
                        <th
                          class="header sorting"
                          tabindex="0"
                          aria-controls="DataTables_Table_0"
                          rowspan="1"
                          colspan="1"
                          style="width: 32.8px;"
                          aria-label="End Time: activate to sort column ascending"
                        >
                          End Time
                        </th>
                        <th
                          class="header sorting"
                          tabindex="0"
                          aria-controls="DataTables_Table_0"
                          rowspan="1"
                          colspan="1"
                          style="width: 34.4px;"
                          aria-label="All Day?: activate to sort column ascending"
                        >
                          All Day?
                        </th>
                        <th
                          class="header sorting"
                          tabindex="0"
                          aria-controls="DataTables_Table_0"
                          rowspan="1"
                          colspan="1"
                          style="width: 61.6px;"
                          aria-label="Available On-Site?: activate to sort column ascending"
                        >
                          Available On-Site?
                        </th>
                        <th
                          class="header sorting"
                          tabindex="0"
                          aria-controls="DataTables_Table_0"
                          rowspan="1"
                          colspan="1"
                          style="width: 64px;"
                          aria-label="Available Virtually?: activate to sort column ascending"
                        >
                          Available Virtually?
                        </th>
                        <th
                          class="header sorting"
                          tabindex="0"
                          aria-controls="DataTables_Table_0"
                          rowspan="1"
                          colspan="1"
                          style="width: 51.2px;"
                          aria-label="Active?: activate to sort column ascending"
                        >
                          Active?
                        </th>
                        <th
                          class="header sorting_disabled"
                          rowspan="1"
                          colspan="1"
                          style="width: 21.6px;"
                          aria-label=""
                        >
                          Actions
                        </th>
                      </tr>
                    </thead>
                  </table>
                </div>
              </div>
              <div
                class="dataTables_scrollBody"
                style="position: relative; width: 100%;"
              >
                <table
                  id="DataTables_Table_0"
                  class="table table-sm contacts-table clickable zebra closures dataTable no-footer"
                  style="width: 100%;"
                  role="grid"
                  aria-describedby="DataTables_Table_0_info"
                >
                  <tbody>
                    <div
                      v-for="(closure, index) in academyClosures"
                      :key="index"
                    >
                      <tr
                        role="row"
                        class="odd"
                        v-for="site in closure.sites"
                        :key="site.id"
                      >
                        <td class="sorting_1">
                          {{ site.district.name }}
                        </td>
                        <td>
                          {{ site.name }}
                        </td>
                        <td>{{ closure.name }}</td>
                        <td>{{ closure.closure_type }}</td>
                        <td>{{ closure.start_date }}</td>
                        <td>{{ closure.end_date }}</td>
                        <td>{{ closure.start_time }}</td>
                        <td>{{ closure.end_time }}</td>
                        <td class="pl-2 pr-2">
                          {{ closure.all_day ? "true" : "false" }}
                        </td>
                        <td class="pl-2 pr-2">
                          {{ closure.available_on_site ? "true" : "false" }}
                        </td>
                        <td class="pl-3 pr-2">
                          {{ closure.available_virtually ? "true" : "false" }}
                        </td>
                        <td class="pl-4 pr-3">
                          <i
                            :class="
                              `icon active fas fa-circle
                           $  {closure.active ? 'text-success' : ''}
                           `
                            "
                          />
                        </td>
                        <td>
                          <a
                            class="btn btn-primary btn-xs btn-confirmed"
                            @click.prevent="editAppointment(1)"
                            href="#"
                          >
                            <i class="mdi mdi-square-edit-outline" />
                          </a>
                          <a
                            class="btn btn-danger btn-xs btn-confirmed btn-delete-closure"
                            data-closure-id="56"
                            href="#"
                          >
                            <i class="fa fa-trash" />
                          </a>
                        </td>
                      </tr>
                    </div>
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
              Showing 1 to 25 of 28 entries
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
                    ><i class="mdi mdi-chevron-left"
                  /></a>
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
                <li class="paginate_button page-item ">
                  <a
                    href="#"
                    aria-controls="DataTables_Table_0"
                    data-dt-idx="2"
                    tabindex="0"
                    class="page-link"
                    >2</a
                  >
                </li>
                <li
                  id="DataTables_Table_0_next"
                  class="paginate_button page-item next"
                >
                  <a
                    href="#"
                    aria-controls="DataTables_Table_0"
                    data-dt-idx="3"
                    tabindex="0"
                    class="page-link"
                    ><i class="mdi mdi-chevron-right"
                  /></a>
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
  name: "Table",

  props: {
    academyClosures: {
      type: Object,
      default: {}
    }
  },

  methods: {
    editAppointment(closureId) {
      const path = `/academy-closures/${closureId}/edit`;
      this.$router.push({ path });
    }
  }
};
</script>

<style>
.hide {
  display: none;
}
td {
  min-width: 60px;
}
</style>
