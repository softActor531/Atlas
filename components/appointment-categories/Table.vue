<template>
  <div class="card">
    <div class="card-header bg-white">
      <h4 class="m-0">
        <i class="mdi mdi-format-list-bulleted mr-1 text-primary" />
        Appointment Categories
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
                    class="table table-sm contacts-table clickable zebra appointments-types dataTable no-footer"
                    style="width: 936.8px; margin-left: 0px;"
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
                          style="width: 76px;"
                          aria-sort="ascending"
                          aria-label="Category Name: activate to sort column descending"
                        >
                          Category Name
                        </th>
                        <th
                          class="header sorting_disabled"
                          rowspan="1"
                          colspan="1"
                          style="width: 484.8px;"
                          aria-label="Location(s)"
                        >
                          Location(s)
                        </th>
                        <th
                          class="header sorting_disabled"
                          rowspan="1"
                          colspan="1"
                          style="width: 80.8px;"
                          aria-label="Duration"
                        >
                          Duration
                        </th>
                        <th
                          class="header sorting"
                          tabindex="0"
                          aria-controls="DataTables_Table_0"
                          rowspan="1"
                          colspan="1"
                          style="width: 50.4px;"
                          aria-label="GC Can Select?: activate to sort column ascending"
                        >
                          GC Can Select?
                        </th>
                        <th
                          class="header sorting"
                          tabindex="0"
                          aria-controls="DataTables_Table_0"
                          rowspan="1"
                          colspan="1"
                          style="width: 44px;"
                          aria-label="Status: activate to sort column ascending"
                        >
                          Status
                        </th>
                        <th
                          class="header sorting_disabled"
                          rowspan="1"
                          colspan="1"
                          style="width: 32.8px;"
                          aria-label=""
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
                  class="table table-sm contacts-table clickable zebra appointments-types dataTable no-footer"
                  style="width: 100%;"
                  role="grid"
                  aria-describedby="DataTables_Table_0_info"
                >
                  <thead>
                    <tr role="row" style="height: 0px;">
                      <th
                        class="header sorting_asc"
                        aria-controls="DataTables_Table_0"
                        rowspan="1"
                        colspan="1"
                        style="width: 76px; padding-top: 0px; padding-bottom: 0px; border-top-width: 0px; border-bottom-width: 0px; height: 0px;"
                        aria-sort="ascending"
                        aria-label="Category Name: activate to sort column descending"
                      >
                        <div
                          class="dataTables_sizing"
                          style="height: 0px; overflow: hidden;"
                        >
                          Category Name
                        </div>
                      </th>
                      <th
                        class="header sorting_disabled"
                        rowspan="1"
                        colspan="1"
                        style="width: 484.8px; padding-top: 0px; padding-bottom: 0px; border-top-width: 0px; border-bottom-width: 0px; height: 0px;"
                        aria-label="Location(s)"
                      >
                        <div
                          class="dataTables_sizing"
                          style="height: 0px; overflow: hidden;"
                        >
                          Location(s)
                        </div>
                      </th>
                      <th
                        class="header sorting_disabled"
                        rowspan="1"
                        colspan="1"
                        style="width: 80.8px; padding-top: 0px; padding-bottom: 0px; border-top-width: 0px; border-bottom-width: 0px; height: 0px;"
                        aria-label="Duration"
                      >
                        <div
                          class="dataTables_sizing"
                          style="height: 0px; overflow: hidden;"
                        >
                          Duration
                        </div>
                      </th>
                      <th
                        class="header sorting"
                        aria-controls="DataTables_Table_0"
                        rowspan="1"
                        colspan="1"
                        style="width: 50.4px; padding-top: 0px; padding-bottom: 0px; border-top-width: 0px; border-bottom-width: 0px; height: 0px;"
                        aria-label="GC Can Select?: activate to sort column ascending"
                      >
                        <div
                          class="dataTables_sizing"
                          style="height: 0px; overflow: hidden;"
                        >
                          GC Can Select?
                        </div>
                      </th>
                      <th
                        class="header sorting"
                        aria-controls="DataTables_Table_0"
                        rowspan="1"
                        colspan="1"
                        style="width: 44px; padding-top: 0px; padding-bottom: 0px; border-top-width: 0px; border-bottom-width: 0px; height: 0px;"
                        aria-label="Status: activate to sort column ascending"
                      >
                        <div
                          class="dataTables_sizing"
                          style="height: 0px; overflow: hidden;"
                        >
                          Status
                        </div>
                      </th>
                      <th
                        class="header sorting_disabled"
                        rowspan="1"
                        colspan="1"
                        style="width: 32.8px; padding-top: 0px; padding-bottom: 0px; border-top-width: 0px; border-bottom-width: 0px; height: 0px;"
                        aria-label=""
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
                        African American
                      </td>
                      <td>
                        Fort Pierce,Port St Lucie,Bethel,Test School,North Miami
                        Beach,Homestead,James Island,North County,Trident
                        Tech,Martin,Central,Le Jeune,East Las Vegas,North Las
                        Vegas
                      </td>
                      <td>Sunday; 01:45Am - 03:15Am</td>
                      <td>No</td>
                      <td>Inactive</td>
                      <td>
                        <a
                          class="btn-filter-contacts btn btn-blue waves-effect waves-light mb-2"
                          href="#"
                          @click="editAppointment(1)"
                        >
                          <i class="mdi mdi-square-edit-outline" />
                        </a>
                        <button
                          class="btn btn-danger waves-effect waves-light mb-2 delete-category"
                          data-id="47"
                          type="button"
                        >
                          <i class="mdi mdi-trash-can" />
                        </button>
                      </td>
                    </tr>
                    <tr role="row" class="even">
                      <td class="sorting_1">
                        Asian
                      </td>
                      <td>Fort Pierce</td>
                      <td>08/31/2020; 12:45Am - 01:45Am</td>
                      <td>Yes</td>
                      <td>Active</td>
                      <td>
                        <a
                          class="btn-filter-contacts btn btn-blue waves-effect waves-light mb-2"
                          href="#"
                          @click="editAppointment(1)"
                        >
                          <i class="mdi mdi-square-edit-outline" />
                        </a>
                        <button
                          class="btn btn-danger waves-effect waves-light mb-2 delete-category"
                          data-id="49"
                          type="button"
                        >
                          <i class="mdi mdi-trash-can" />
                        </button>
                      </td>
                    </tr>
                    <tr role="row" class="odd">
                      <td class="sorting_1">
                        Asian
                      </td>
                      <td>North Miami Beach,Homestead,Central,Le Jeune</td>
                      <td>15 Minutes</td>
                      <td>No</td>
                      <td>Active</td>
                      <td>
                        <a
                          class="btn-filter-contacts btn btn-blue waves-effect waves-light mb-2"
                          href="#"
                          @click="editAppointment(1)"
                        >
                          <i class="mdi mdi-square-edit-outline" />
                        </a>
                        <button
                          class="btn btn-danger waves-effect waves-light mb-2 delete-category"
                          data-id="52"
                          type="button"
                        >
                          <i class="mdi mdi-trash-can" />
                        </button>
                      </td>
                    </tr>
                    <tr role="row" class="even">
                      <td class="sorting_1">
                        Asian1
                      </td>
                      <td>East Las Vegas</td>
                      <td>Sunday; 01:30Am - 01:45Am</td>
                      <td>Yes</td>
                      <td>Active</td>
                      <td>
                        <a
                          class="btn-filter-contacts btn btn-blue waves-effect waves-light mb-2"
                          href="#"
                          @click="editAppointment(1)"
                        >
                          <i class="mdi mdi-square-edit-outline" />
                        </a>
                        <button
                          class="btn btn-danger waves-effect waves-light mb-2 delete-category"
                          data-id="50"
                          type="button"
                        >
                          <i class="mdi mdi-trash-can" />
                        </button>
                      </td>
                    </tr>
                    <tr role="row" class="odd">
                      <td class="sorting_1">
                        Career Planning
                      </td>
                      <td>
                        Fort Pierce,Port St Lucie,Test School,North Miami
                        Beach,Homestead,James Island,North County,Trident
                        Tech,Martin,Central,Le Jeune,East Las Vegas,North Las
                        Vegas
                      </td>
                      <td>90 Minutes</td>
                      <td>No</td>
                      <td>Active</td>
                      <td>
                        <a
                          class="btn-filter-contacts btn btn-blue waves-effect waves-light mb-2"
                          href="#"
                          @click="editAppointment(1)"
                        >
                          <i class="mdi mdi-square-edit-outline" />
                        </a>
                        <button
                          class="btn btn-danger waves-effect waves-light mb-2 delete-category"
                          data-id="33"
                          type="button"
                        >
                          <i class="mdi mdi-trash-can" />
                        </button>
                      </td>
                    </tr>
                    <tr role="row" class="even">
                      <td class="sorting_1">
                        Case Management
                      </td>
                      <td>
                        Fort Pierce,Port St Lucie,Bethel,Test School,North Miami
                        Beach,Homestead,James Island,North County,Trident
                        Tech,Martin,Central,Le Jeune,East Las Vegas,North Las
                        Vegas
                      </td>
                      <td>90 Minutes</td>
                      <td>No</td>
                      <td>Active</td>
                      <td>
                        <a
                          class="btn-filter-contacts btn btn-blue waves-effect waves-light mb-2"
                          href="#"
                          @click="editAppointment(1)"
                        >
                          <i class="mdi mdi-square-edit-outline" />
                        </a>
                        <button
                          class="btn btn-danger waves-effect waves-light mb-2 delete-category"
                          data-id="21"
                          type="button"
                        >
                          <i class="mdi mdi-trash-can" />
                        </button>
                      </td>
                    </tr>
                    <tr role="row" class="odd">
                      <td class="sorting_1">
                        College Planning
                      </td>
                      <td>
                        Fort Pierce,Port St Lucie,Bethel,Test School,North Miami
                        Beach,Homestead,James Island,North County,Trident
                        Tech,Martin,Central,Le Jeune,East Las Vegas,North Las
                        Vegas
                      </td>
                      <td>90 Minutes</td>
                      <td>Yes</td>
                      <td>Active</td>
                      <td>
                        <a
                          class="btn-filter-contacts btn btn-blue waves-effect waves-light mb-2"
                          href="#"
                          @click="editAppointment(1)"
                        >
                          <i class="mdi mdi-square-edit-outline" />
                        </a>
                        <button
                          class="btn btn-danger waves-effect waves-light mb-2 delete-category"
                          data-id="35"
                          type="button"
                        >
                          <i class="mdi mdi-trash-can" />
                        </button>
                      </td>
                    </tr>
                    <tr role="row" class="even">
                      <td class="sorting_1">
                        Edmentum Assessment
                      </td>
                      <td>
                        Fort Pierce,Port St Lucie,Bethel,Test School,North Miami
                        Beach,Homestead,James Island,North County,Trident
                        Tech,Martin,Central,Le Jeune,East Las Vegas,North Las
                        Vegas
                      </td>
                      <td>90 Minutes</td>
                      <td>Yes</td>
                      <td>Active</td>
                      <td>
                        <a
                          class="btn-filter-contacts btn btn-blue waves-effect waves-light mb-2"
                          href="#"
                          @click="editAppointment(1)"
                        >
                          <i class="mdi mdi-square-edit-outline" />
                        </a>
                        <button
                          class="btn btn-danger waves-effect waves-light mb-2 delete-category"
                          data-id="22"
                          type="button"
                        >
                          <i class="mdi mdi-trash-can" />
                        </button>
                      </td>
                    </tr>
                    <tr role="row" class="odd">
                      <td class="sorting_1">
                        ELA Coaching
                      </td>
                      <td>
                        Fort Pierce,Port St Lucie,Bethel,Test School,North Miami
                        Beach,Homestead,James Island,North County,Trident
                        Tech,Martin,Central,Le Jeune,East Las Vegas,North Las
                        Vegas
                      </td>
                      <td>180 Minutes</td>
                      <td>Yes</td>
                      <td>Active</td>
                      <td>
                        <a
                          class="btn-filter-contacts btn btn-blue waves-effect waves-light mb-2"
                          href="#"
                          @click="editAppointment(1)"
                        >
                          <i class="mdi mdi-square-edit-outline" />
                        </a>
                        <button
                          class="btn btn-danger waves-effect waves-light mb-2 delete-category"
                          data-id="28"
                          type="button"
                        >
                          <i class="mdi mdi-trash-can" />
                        </button>
                      </td>
                    </tr>
                    <tr role="row" class="even">
                      <td class="sorting_1">
                        Electives Coaching
                      </td>
                      <td>
                        Fort Pierce,Port St Lucie,Bethel,Test School,North Miami
                        Beach,Homestead,James Island,North County,Trident
                        Tech,Martin,Central,Le Jeune,East Las Vegas,North Las
                        Vegas
                      </td>
                      <td>180 Minutes</td>
                      <td>Yes</td>
                      <td>Active</td>
                      <td>
                        <a
                          class="btn-filter-contacts btn btn-blue waves-effect waves-light mb-2"
                          href="#"
                          @click="editAppointment(1)"
                        >
                          <i class="mdi mdi-square-edit-outline" />
                        </a>
                        <button
                          class="btn btn-danger waves-effect waves-light mb-2 delete-category"
                          data-id="31"
                          type="button"
                        >
                          <i class="mdi mdi-trash-can" />
                        </button>
                      </td>
                    </tr>
                    <tr role="row" class="odd">
                      <td class="sorting_1">
                        for test
                      </td>
                      <td>Port St Lucie</td>
                      <td>Sunday; 12:30Am - 01:45Am</td>
                      <td>No</td>
                      <td>Active</td>
                      <td>
                        <a
                          class="btn-filter-contacts btn btn-blue waves-effect waves-light mb-2"
                          href="#"
                          @click="editAppointment(1)"
                        >
                          <i class="mdi mdi-square-edit-outline" />
                        </a>
                        <button
                          class="btn btn-danger waves-effect waves-light mb-2 delete-category"
                          data-id="51"
                          type="button"
                        >
                          <i class="mdi mdi-trash-can" />
                        </button>
                      </td>
                    </tr>
                    <tr role="row" class="even">
                      <td class="sorting_1">
                        GC Schedule Demo
                      </td>
                      <td>
                        Fort Pierce,Port St Lucie,Bethel,Test School,North Miami
                        Beach,Homestead,James Island,North County,Trident
                        Tech,Martin,Central,Le Jeune,East Las Vegas,North Las
                        Vegas
                      </td>
                      <td>Wednesday; 10:00Am - 03:00Pm</td>
                      <td>No</td>
                      <td>Active</td>
                      <td>
                        <a
                          class="btn-filter-contacts btn btn-blue waves-effect waves-light mb-2"
                          href="#"
                          @click="editAppointment(1)"
                        >
                          <i class="mdi mdi-square-edit-outline" />
                        </a>
                        <button
                          class="btn btn-danger waves-effect waves-light mb-2 delete-category"
                          data-id="43"
                          type="button"
                        >
                          <i class="mdi mdi-trash-can" />
                        </button>
                      </td>
                    </tr>
                    <tr role="row" class="odd">
                      <td class="sorting_1">
                        Generic Orientation
                      </td>
                      <td>
                        Fort Pierce,Port St Lucie,Bethel,Test School,North Miami
                        Beach,Homestead,James Island,North County,Trident
                        Tech,Martin,Central,Le Jeune,East Las Vegas,North Las
                        Vegas
                      </td>
                      <td>Wednesday; 11:30Am - 03:00Pm</td>
                      <td>No</td>
                      <td>Active</td>
                      <td>
                        <a
                          class="btn-filter-contacts btn btn-blue waves-effect waves-light mb-2"
                          href='@click="editAppointment(1)""https://dev.accelerationacademy.net/appointments/categories/20/edit"'
                        >
                          <i class="mdi mdi-square-edit-outline" />
                        </a>
                        <button
                          class="btn btn-danger waves-effect waves-light mb-2 delete-category"
                          data-id="20"
                          type="button"
                        >
                          <i class="mdi mdi-trash-can" />
                        </button>
                      </td>
                    </tr>
                    <tr role="row" class="even">
                      <td class="sorting_1">
                        IEP Meeting
                      </td>
                      <td>
                        Fort Pierce,Port St Lucie,Bethel,Test School,North Miami
                        Beach,Homestead,James Island,North County,Trident
                        Tech,Martin,Central,Le Jeune,East Las Vegas,North Las
                        Vegas
                      </td>
                      <td>90 Minutes</td>
                      <td>No</td>
                      <td>Active</td>
                      <td>
                        <a
                          class="btn-filter-contacts btn btn-blue waves-effect waves-light mb-2"
                          href='@click="editAppointment(1)""https://dev.accelerationacademy.net/appointments/categories/32/edit"'
                        >
                          <i class="mdi mdi-square-edit-outline" />
                        </a>
                        <button
                          class="btn btn-danger waves-effect waves-light mb-2 delete-category"
                          data-id="32"
                          type="button"
                        >
                          <i class="mdi mdi-trash-can" />
                        </button>
                      </td>
                    </tr>
                    <tr role="row" class="odd">
                      <td class="sorting_1">
                        Math Coaching
                      </td>
                      <td>
                        Fort Pierce,Port St Lucie,Bethel,Test School,North Miami
                        Beach,Homestead,James Island,North County,Trident
                        Tech,Martin,Central,Le Jeune,East Las Vegas,North Las
                        Vegas
                      </td>
                      <td>180 Minutes</td>
                      <td>Yes</td>
                      <td>Active</td>
                      <td>
                        <a
                          class="btn-filter-contacts btn btn-blue waves-effect waves-light mb-2"
                          href='@click="editAppointment(1)""https://dev.accelerationacademy.net/appointments/categories/27/edit"'
                        >
                          <i class="mdi mdi-square-edit-outline" />
                        </a>
                        <button
                          class="btn btn-danger waves-effect waves-light mb-2 delete-category"
                          data-id="27"
                          type="button"
                        >
                          <i class="mdi mdi-trash-can" />
                        </button>
                      </td>
                    </tr>
                    <tr role="row" class="even">
                      <td class="sorting_1">
                        Meeting with Site Administrator
                      </td>
                      <td>
                        Fort Pierce,Port St Lucie,Bethel,Test School,North Miami
                        Beach,Homestead,James Island,North County,Trident
                        Tech,Martin,Central,Le Jeune,East Las Vegas,North Las
                        Vegas
                      </td>
                      <td>45 Minutes</td>
                      <td>Yes</td>
                      <td>Active</td>
                      <td>
                        <a
                          class="btn-filter-contacts btn btn-blue waves-effect waves-light mb-2"
                          href='@click="editAppointment(1)""https://dev.accelerationacademy.net/appointments/categories/34/edit"'
                        >
                          <i class="mdi mdi-square-edit-outline" />
                        </a>
                        <button
                          class="btn btn-danger waves-effect waves-light mb-2 delete-category"
                          data-id="34"
                          type="button"
                        >
                          <i class="mdi mdi-trash-can" />
                        </button>
                      </td>
                    </tr>
                    <tr role="row" class="odd">
                      <td class="sorting_1">
                        New for test
                      </td>
                      <td>Bethel</td>
                      <td>08/24/2020; 01:15Am - 01:45Am</td>
                      <td>Yes</td>
                      <td>Active</td>
                      <td>
                        <a
                          class="btn-filter-contacts btn btn-blue waves-effect waves-light mb-2"
                          href='@click="editAppointment(1)""https://dev.accelerationacademy.net/appointments/categories/45/edit"'
                        >
                          <i class="mdi mdi-square-edit-outline" />
                        </a>
                        <button
                          class="btn btn-danger waves-effect waves-light mb-2 delete-category"
                          data-id="45"
                          type="button"
                        >
                          <i class="mdi mdi-trash-can" />
                        </button>
                      </td>
                    </tr>
                    <tr role="row" class="even">
                      <td class="sorting_1">
                        new for test2
                      </td>
                      <td>Fort Pierce</td>
                      <td>90 Minutes</td>
                      <td>Yes</td>
                      <td>Active</td>
                      <td>
                        <a
                          class="btn-filter-contacts btn btn-blue waves-effect waves-light mb-2"
                          href='@click="editAppointment(1)""https://dev.accelerationacademy.net/appointments/categories/46/edit"'
                        >
                          <i class="mdi mdi-square-edit-outline" />
                        </a>
                        <button
                          class="btn btn-danger waves-effect waves-light mb-2 delete-category"
                          data-id="46"
                          type="button"
                        >
                          <i class="mdi mdi-trash-can" />
                        </button>
                      </td>
                    </tr>
                    <tr role="row" class="odd">
                      <td class="sorting_1">
                        Onsite Registration
                      </td>
                      <td>
                        Fort Pierce,Port St Lucie,Bethel,Test School,North Miami
                        Beach,Homestead,James Island,North County,Trident
                        Tech,Martin,Central,Le Jeune,East Las Vegas,North Las
                        Vegas
                      </td>
                      <td>90 Minutes</td>
                      <td>No</td>
                      <td>Active</td>
                      <td>
                        <a
                          class="btn-filter-contacts btn btn-blue waves-effect waves-light mb-2"
                          href='@click="editAppointment(1)""https://dev.accelerationacademy.net/appointments/categories/19/edit"'
                        >
                          <i class="mdi mdi-square-edit-outline" />
                        </a>
                        <button
                          class="btn btn-danger waves-effect waves-light mb-2 delete-category"
                          data-id="19"
                          type="button"
                        >
                          <i class="mdi mdi-trash-can" />
                        </button>
                      </td>
                    </tr>
                    <tr role="row" class="even">
                      <td class="sorting_1">
                        PLP Meeting
                      </td>
                      <td>
                        Fort Pierce,Port St Lucie,Bethel,Test School,North Miami
                        Beach,Homestead,James Island,North County,Trident
                        Tech,Martin,Central,Le Jeune,East Las Vegas,North Las
                        Vegas
                      </td>
                      <td>90 Minutes</td>
                      <td>Yes</td>
                      <td>Active</td>
                      <td>
                        <a
                          class="btn-filter-contacts btn btn-blue waves-effect waves-light mb-2"
                          href='@click="editAppointment(1)""https://dev.accelerationacademy.net/appointments/categories/25/edit"'
                        >
                          <i class="mdi mdi-square-edit-outline" />
                        </a>
                        <button
                          class="btn btn-danger waves-effect waves-light mb-2 delete-category"
                          data-id="25"
                          type="button"
                        >
                          <i class="mdi mdi-trash-can" />
                        </button>
                      </td>
                    </tr>
                    <tr role="row" class="odd">
                      <td class="sorting_1">
                        recurring
                      </td>
                      <td>
                        Fort Pierce,Port St Lucie,Bethel,Test School,North Miami
                        Beach,Homestead,James Island,North County,Trident
                        Tech,Martin,Central,Le Jeune,East Las Vegas,North Las
                        Vegas
                      </td>
                      <td>Tuesday; 01:30Pm - 05:00Pm</td>
                      <td>No</td>
                      <td>Active</td>
                      <td>
                        <a
                          class="btn-filter-contacts btn btn-blue waves-effect waves-light mb-2"
                          href='@click="editAppointment(1)""https://dev.accelerationacademy.net/appointments/categories/39/edit"'
                        >
                          <i class="mdi mdi-square-edit-outline" />
                        </a>
                        <button
                          class="btn btn-danger waves-effect waves-light mb-2 delete-category"
                          data-id="39"
                          type="button"
                        >
                          <i class="mdi mdi-trash-can" />
                        </button>
                      </td>
                    </tr>
                    <tr role="row" class="even">
                      <td class="sorting_1">
                        Recurring future
                      </td>
                      <td>
                        Fort Pierce,Port St Lucie,Bethel,Test School,North Miami
                        Beach,Homestead,James Island,North County,Trident
                        Tech,Martin,Central,Le Jeune,East Las Vegas,North Las
                        Vegas
                      </td>
                      <td>Friday; 10:00Am - 05:00Pm</td>
                      <td>No</td>
                      <td>Active</td>
                      <td>
                        <a
                          class="btn-filter-contacts btn btn-blue waves-effect waves-light mb-2"
                          href='@click="editAppointment(1)""https://dev.accelerationacademy.net/appointments/categories/40/edit"'
                        >
                          <i class="mdi mdi-square-edit-outline" />
                        </a>
                        <button
                          class="btn btn-danger waves-effect waves-light mb-2 delete-category"
                          data-id="40"
                          type="button"
                        >
                          <i class="mdi mdi-trash-can" />
                        </button>
                      </td>
                    </tr>
                    <tr role="row" class="odd">
                      <td class="sorting_1">
                        Science Coaching
                      </td>
                      <td>
                        Fort Pierce,Port St Lucie,Bethel,Test School,North Miami
                        Beach,Homestead,James Island,North County,Trident
                        Tech,Martin,Central,Le Jeune,East Las Vegas,North Las
                        Vegas
                      </td>
                      <td>180 Minutes</td>
                      <td>Yes</td>
                      <td>Active</td>
                      <td>
                        <a
                          class="btn-filter-contacts btn btn-blue waves-effect waves-light mb-2"
                          href='@click="editAppointment(1)""https://dev.accelerationacademy.net/appointments/categories/29/edit"'
                        >
                          <i class="mdi mdi-square-edit-outline" />
                        </a>
                        <button
                          class="btn btn-danger waves-effect waves-light mb-2 delete-category"
                          data-id="29"
                          type="button"
                        >
                          <i class="mdi mdi-trash-can" />
                        </button>
                      </td>
                    </tr>
                    <tr role="row" class="even">
                      <td class="sorting_1">
                        Social Emotional Support
                      </td>
                      <td>
                        Fort Pierce,Port St Lucie,Bethel,Test School,North Miami
                        Beach,Homestead,James Island,North County,Trident
                        Tech,Martin,Central,Le Jeune,East Las Vegas,North Las
                        Vegas
                      </td>
                      <td>90 Minutes</td>
                      <td>No</td>
                      <td>Active</td>
                      <td>
                        <a
                          class="btn-filter-contacts btn btn-blue waves-effect waves-light mb-2"
                          href='@click="editAppointment(1)""https://dev.accelerationacademy.net/appointments/categories/26/edit"'
                        >
                          <i class="mdi mdi-square-edit-outline" />
                        </a>
                        <button
                          class="btn btn-danger waves-effect waves-light mb-2 delete-category"
                          data-id="26"
                          type="button"
                        >
                          <i class="mdi mdi-trash-can" />
                        </button>
                      </td>
                    </tr>
                    <tr role="row" class="odd">
                      <td class="sorting_1">
                        Social Studies Coaching
                      </td>
                      <td>
                        Fort Pierce,Port St Lucie,Bethel,Test School,North Miami
                        Beach,Homestead,James Island,North County,Trident
                        Tech,Martin,Central,Le Jeune,East Las Vegas,North Las
                        Vegas
                      </td>
                      <td>180 Minutes</td>
                      <td>Yes</td>
                      <td>Active</td>
                      <td>
                        <a
                          class="btn-filter-contacts btn btn-blue waves-effect waves-light mb-2"
                          href='@click="editAppointment(1)""https://dev.accelerationacademy.net/appointments/categories/30/edit"'
                        >
                          <i class="mdi mdi-square-edit-outline" />
                        </a>
                        <button
                          class="btn btn-danger waves-effect waves-light mb-2 delete-category"
                          data-id="30"
                          type="button"
                        >
                          <i class="mdi mdi-trash-can" />
                        </button>
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
              Showing 1 to 25 of 30 entries
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
  name: "AppointmentCategories",

  mounted() {
    const script = document.createElement("script");
    script.setAttribute(
      "src",
      "https://cdn.datatables.net/1.10.21/js/jquery.dataTables.min.js"
    );
    document.head.appendChild(script);
    const script2 = document.createElement("script");
    script2.setAttribute(
      "src",
      "https://cdn.datatables.net/1.10.21/js/dataTables.bootstrap4.min.js"
    );
    document.head.appendChild(script2);
    const script3 = document.createElement("script");
    script3.setAttribute(
      "src",
      "https://cdn.datatables.net/responsive/2.1.0/js/dataTables.responsive.js"
    );
    document.head.appendChild(script3);
    // eslint-disable-next-line no-undef
    $(document).ready(function() {
      // eslint-disable-next-line no-undef
      $("#DataTables_Table_0").DataTable({
        responsive: true
      });
    });
  },

  methods: {
    editAppointment(categoryId) {
      const path = `/appointment-categories/${categoryId}/edit`;
      this.$router.push({ path });
    }
  }
};
</script>

<style>
thead th:focus {
  outline: none;
}
.sorting_asc,
.sorting {
  background-image: none !important;
}
.dataTables_wrapper .dataTables_paginate .paginate_button:hover {
  background: transparent !important;
  border: none !important;
}
</style>
