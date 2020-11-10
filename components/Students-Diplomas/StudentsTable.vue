<template>
  <div class="card">
    <div class="card-body">
      <h4 class="mb-3 header-title" />
      <div class="row">
        <div class="col-12 mb-2">
          <a class="btn btn-primary btn-rounded waves-effect waves-light float-right" href="#">
            <i class="fa fa-plus-circle" aria-hidden="true" /> Select New Diploma
          </a>
        </div>
      </div>
      <div class="table-responsive">
        <div id="DataTables_Table_0_wrapper" class="dataTables_wrapper dt-bootstrap4 no-footer">
          <div class="row">
            <div class="col-sm-12 col-md-6">
              <div id="DataTables_Table_0_length" class="dataTables_length">
                <label>Show <select name="DataTables_Table_0_length" aria-controls="DataTables_Table_0" class="custom-select custom-select-sm form-control form-control-sm"><option value="10">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select> entries</label>
              </div>
            </div><div class="col-sm-12 col-md-6">
              <div id="DataTables_Table_0_filter" class="dataTables_filter">
                <label>Search:<input type="search" class="form-control form-control-sm" placeholder="" aria-controls="DataTables_Table_0"></label>
              </div>
            </div>
          </div><div class="row">
            <div class="col-sm-12">
              <table id="DataTables_Table_0" class="table table-sm table-bordered clickable zebra mt-4 schedule dataTable no-footer" role="grid" aria-describedby="DataTables_Table_0_info" style="width: 939px;">
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
                      style="width: 159px;"
                    >
                      ID
                    </th><th
                      class="header dt-center sorting"
                      tabindex="0"
                      aria-controls="DataTables_Table_0"
                      rowspan="1"
                      colspan="1"
                      aria-label="Plan Name: activate to sort column ascending"
                      style="width: 326px;"
                    >
                      Plan Name
                    </th><th
                      class="header dt-center sorting"
                      tabindex="0"
                      aria-controls="DataTables_Table_0"
                      rowspan="1"
                      colspan="1"
                      aria-label="Control: activate to sort column ascending"
                      style="width: 243px;"
                    >
                      Control
                    </th><th
                      class="header dt-center sorting"
                      tabindex="0"
                      aria-controls="DataTables_Table_0"
                      rowspan="1"
                      colspan="1"
                      aria-label="Status: activate to sort column ascending"
                      style="width: 95px;"
                    >
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr role="row" class="odd">
                    <td class="center dt-center sorting_1">
                      15
                    </td>
                    <td class="center dt-center">
                      <a href="#">MDAA 18 Credit Diploma </a>
                    </td>
                    <td class="center dt-center">
                      <a class="btn btn-success waves-effect waves-light" title="Activate Student's Plan." href="#"><i class="mdi mdi-check-circle-outline" /></a>
                      <a class="btn btn-blue waves-effect waves-light" title="Export Student's Plan in CSV." href="#"><i class="mdi mdi-file-export" /></a>
                      <a class="btn btn-info waves-effect waves-light" title="View Student's Plan." href="#"><i class="mdi mdi-eye" /></a>
                    </td>
                    <td class="center dt-center">
                      Archived
                    </td>
                  </tr>
                  <tr role="row" class="even">
                    <td class="center dt-center sorting_1">
                      18
                    </td>
                    <td class="center dt-center">
                      <a href="#">Clark County  </a>
                    </td>
                    <td class="center dt-center">
                      <a class="btn btn-success waves-effect waves-light" title="Activate Student's Plan." href="#"><i class="mdi mdi-check-circle-outline" /></a>
                      <a class="btn btn-blue waves-effect waves-light" title="Export Student's Plan in CSV." href="#"><i class="mdi mdi-file-export" /></a>
                      <a class="btn btn-info waves-effect waves-light" title="View Student's Plan." href="#"><i class="mdi mdi-eye" /></a>
                    </td>
                    <td class="center dt-center">
                      Archived
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div><div class="row">
            <div class="col-sm-12 col-md-5">
              <div id="DataTables_Table_0_info" class="dataTables_info" role="status" aria-live="polite">
                Showing 1 to 4 of 4 entries
              </div>
            </div><div class="col-sm-12 col-md-7">
              <div id="DataTables_Table_0_paginate" class="dataTables_paginate paging_simple_numbers">
                <ul class="pagination pagination-rounded">
                  <li id="DataTables_Table_0_previous" class="paginate_button page-item previous disabled">
                    <a href="#" aria-controls="DataTables_Table_0" data-dt-idx="0" tabindex="0" class="page-link"><i class="mdi mdi-chevron-left" /></a>
                  </li><li class="paginate_button page-item active">
                    <a href="#" aria-controls="DataTables_Table_0" data-dt-idx="1" tabindex="0" class="page-link">1</a>
                  </li><li id="DataTables_Table_0_next" class="paginate_button page-item next disabled">
                    <a href="#" aria-controls="DataTables_Table_0" data-dt-idx="2" tabindex="0" class="page-link"><i class="mdi mdi-chevron-right" /></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StudentsTable'
}
</script>

<style>
.thead th:focus {
  outline: none;
}
.sorting_asc,.sorting{
  background-image: none !important;
}
</style>
