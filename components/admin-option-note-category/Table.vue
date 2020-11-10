<template>
  <div class="card mt-3 p-3">
    <div class="row">
      <div class="col-md-6">
        <b-button class="btn btn-primary" pill @click="$router.push('/admin-option-note-category-edit/new')">
          <i class="fas fa-plus-circle" aria-hidden="true" />
          Create New
        </b-button>
      </div>
      <div class="col-md-6">
        <div id="DataTables_Table_0_filter" class="dataTables_filter float-right">
          <label>Search:<input type="search" class="form-control form-control-sm" placeholder=""></label>
        </div>
      </div>
    </div>
    <table class="noSearch noSort clickable zebra table mt-4 schedule dataTable no-footer">
      <thead>
        <tr role="row">
          <th
            class="dt-center sorting_asc"
            tabindex="0"
            rowspan="1"
            colspan="1"
            aria-sort="ascending"
            aria-label="Category: activate to sort column descending"
            style="width: 262px;"
          >
            Category
          </th><th
            class="dt-center sorting"
            tabindex="0"
            rowspan="1"
            colspan="1"
            aria-label="Sub Category: activate to sort column ascending"
            style="width: 259.6px;"
          >
            Sub Category
          </th><th
            class="dt-center sorting"
            tabindex="0"
            rowspan="1"
            colspan="1"
            aria-label="Descriptor: activate to sort column ascending"
            style="width: 262px;"
          >
            Descriptor
          </th><th
            class="dt-center sorting"
            tabindex="0"
            rowspan="1"
            colspan="1"
            aria-label="Action: activate to sort column ascending"
            style="width: 210px;"
          >
            Action
          </th><th
            class="dt-center sorting"
            tabindex="0"
            rowspan="1"
            colspan="1"
            aria-label="Active: activate to sort column ascending"
            style="width: 62px;"
          >
            Active
          </th>
        </tr>
      </thead>
      <tbody>
        <tr role="row">
          <td class="dt-center sorting_1">
            <nuxt-link to="/admin-option-note-category-edit">
              Academics
            </nuxt-link>
          </td>
          <td class=" dt-center">
            <nuxt-link to="/admin-option-note-category-edit">
              Coursework
            </nuxt-link>
          </td>
          <td class=" dt-center">
            <nuxt-link to="/admin-option-note-category-edit">
              Progress
            </nuxt-link>
          </td>
          <td class=" dt-center">
            <nuxt-link to="/admin-option-note-category-edit">
              Goal setting
            </nuxt-link>
          </td>
          <td class=" dt-center">
            <span class="hide" style="display: none;">1</span><i class="icon active fas fa-circle" />
          </td>
        </tr>
        <tr role="row">
          <td class="dt-center sorting_1">
            <nuxt-link to="/admin-option-note-category-edit">
              Academics
            </nuxt-link>
          </td>
          <td class=" dt-center">
            <nuxt-link to="/admin-option-note-category-edit">
              Coursework
            </nuxt-link>
          </td>
          <td class=" dt-center">
            <nuxt-link to="/admin-option-note-category-edit">
              Progress
            </nuxt-link>
          </td>
          <td class=" dt-center">
            <nuxt-link to="/admin-option-note-category-edit">
              Goal setting
            </nuxt-link>
          </td>
          <td class=" dt-center">
            <span class="hide" style="display: none;">1</span><i class="icon active fas fa-circle" />
          </td>
        </tr>
        <tr role="row">
          <td class="dt-center sorting_1">
            <nuxt-link to="/admin-option-note-category-edit">
              Academics
            </nuxt-link>
          </td>
          <td class=" dt-center">
            <nuxt-link to="/admin-option-note-category-edit">
              Coursework
            </nuxt-link>
          </td>
          <td class=" dt-center">
            <nuxt-link to="/admin-option-note-category-edit">
              Progress
            </nuxt-link>
          </td>
          <td class=" dt-center">
            <nuxt-link to="/admin-option-note-category-edit">
              Goal setting
            </nuxt-link>
          </td>
          <td class=" dt-center">
            <span class="hide" style="display: none;">1</span><i class="icon active fas fa-circle" />
          </td>
        </tr>
        <tr role="row">
          <td class="dt-center sorting_1">
            <nuxt-link to="/admin-option-note-category-edit">
              Academics
            </nuxt-link>
          </td>
          <td class=" dt-center">
            <nuxt-link to="/admin-option-note-category-edit">
              Coursework
            </nuxt-link>
          </td>
          <td class=" dt-center">
            <nuxt-link to="/admin-option-note-category-edit">
              Progress
            </nuxt-link>
          </td>
          <td class=" dt-center">
            <nuxt-link to="/admin-option-note-category-edit">
              Goal setting
            </nuxt-link>
          </td>
          <td class=" dt-center">
            <span class="hide" style="display: none;">1</span><i class="icon active fas fa-circle" />
          </td>
        </tr>
        <tr role="row">
          <td class="dt-center sorting_1">
            <nuxt-link to="/admin-option-note-category-edit">
              Academics
            </nuxt-link>
          </td>
          <td class=" dt-center">
            <nuxt-link to="/admin-option-note-category-edit">
              Coursework
            </nuxt-link>
          </td>
          <td class=" dt-center">
            <nuxt-link to="/admin-option-note-category-edit">
              Progress
            </nuxt-link>
          </td>
          <td class=" dt-center">
            <nuxt-link to="/admin-option-note-category-edit">
              Goal setting
            </nuxt-link>
          </td>
          <td class=" dt-center">
            <span class="hide" style="display: none;">1</span><i class="icon active fas fa-circle" />
          </td>
        </tr>
        <tr role="row">
          <td class="dt-center sorting_1">
            <nuxt-link to="/">
              Academics
            </nuxt-link>
          </td>
          <td class=" dt-center">
            <nuxt-link to="/">
              Coursework
            </nuxt-link>
          </td>
          <td class=" dt-center">
            <nuxt-link to="/">
              Progress
            </nuxt-link>
          </td>
          <td class=" dt-center">
            <nuxt-link to="/">
              Goal setting
            </nuxt-link>
          </td>
          <td class=" dt-center">
            <span class="hide" style="display: none;">1</span><i class="icon active fas fa-circle" />
          </td>
        </tr>
        <tr role="row">
          <td class="dt-center sorting_1">
            <nuxt-link to="/">
              Academics
            </nuxt-link>
          </td>
          <td class=" dt-center">
            <nuxt-link to="/">
              Coursework
            </nuxt-link>
          </td>
          <td class=" dt-center">
            <nuxt-link to="/">
              Progress
            </nuxt-link>
          </td>
          <td class=" dt-center">
            <nuxt-link to="/">
              Goal setting
            </nuxt-link>
          </td>
          <td class=" dt-center">
            <span class="hide" style="display: none;">1</span><i class="icon active fas fa-circle" />
          </td>
        </tr>
        <tr role="row">
          <td class="dt-center sorting_1">
            <nuxt-link to="/">
              Academics
            </nuxt-link>
          </td>
          <td class=" dt-center">
            <nuxt-link to="/">
              Coursework
            </nuxt-link>
          </td>
          <td class=" dt-center">
            <nuxt-link to="/">
              Progress
            </nuxt-link>
          </td>
          <td class=" dt-center">
            <nuxt-link to="/">
              Goal setting
            </nuxt-link>
          </td>
          <td class=" dt-center">
            <span class="hide" style="display: none;">1</span><i class="icon active fas fa-circle" />
          </td>
        </tr>
        <tr role="row">
          <td class="dt-center sorting_1">
            <nuxt-link to="/">
              Academics
            </nuxt-link>
          </td>
          <td class=" dt-center">
            <nuxt-link to="/">
              Coursework
            </nuxt-link>
          </td>
          <td class=" dt-center">
            <nuxt-link to="/">
              Progress
            </nuxt-link>
          </td>
          <td class=" dt-center">
            <nuxt-link to="/">
              Goal setting
            </nuxt-link>
          </td>
          <td class=" dt-center">
            <span class="hide" style="display: none;">1</span><i class="icon active fas fa-circle" />
          </td>
        </tr>
        <tr role="row" class="odd">
          <td class="dt-center">
            <nuxt-link to="/">
              Accommodations
            </nuxt-link>
          </td><td class=" dt-center">
            <nuxt-link to="/" />
          </td>
          <td class=" dt-center">
            <nuxt-link to="" />
          </td>
          <td class=" dt-center">
            <nuxt-link to="/" />
          </td>
          <td class="dt-center sorting_1">
            <span class="hide" style="display: none;">0</span><i class="icon inactive fas fa-ban" />
          </td>
        </tr>
        <tr role="row" class="odd">
          <td class="dt-center">
            <nuxt-link to="/">
              Accommodations
            </nuxt-link>
          </td><td class=" dt-center">
            <nuxt-link to="/" />
          </td>
          <td class=" dt-center">
            <nuxt-link to="" />
          </td>
          <td class=" dt-center">
            <nuxt-link to="/" />
          </td>
          <td class="dt-center sorting_1">
            <span class="hide" style="display: none;">0</span><i class="icon inactive fas fa-ban" />
          </td>
        </tr>
        <tr role="row" class="odd">
          <td class="dt-center">
            <nuxt-link to="/">
              Accommodations
            </nuxt-link>
          </td><td class=" dt-center">
            <nuxt-link to="/" />
          </td>
          <td class=" dt-center">
            <nuxt-link to="" />
          </td>
          <td class=" dt-center">
            <nuxt-link to="/" />
          </td>
          <td class="dt-center sorting_1">
            <span class="hide" style="display: none;">0</span><i class="icon inactive fas fa-ban" />
          </td>
        </tr>
        <tr role="row" class="odd">
          <td class="dt-center">
            <nuxt-link to="/">
              Accommodations
            </nuxt-link>
          </td><td class=" dt-center">
            <nuxt-link to="/" />
          </td>
          <td class=" dt-center">
            <nuxt-link to="" />
          </td>
          <td class=" dt-center">
            <nuxt-link to="/" />
          </td>
          <td class="dt-center sorting_1">
            <span class="hide" style="display: none;">0</span><i class="icon inactive fas fa-ban" />
          </td>
        </tr>
        <tr role="row" class="odd">
          <td class="dt-center">
            <nuxt-link to="/">
              Accommodations
            </nuxt-link>
          </td><td class=" dt-center">
            <nuxt-link to="/" />
          </td>
          <td class=" dt-center">
            <nuxt-link to="" />
          </td>
          <td class=" dt-center">
            <nuxt-link to="/" />
          </td>
          <td class="dt-center sorting_1">
            <span class="hide" style="display: none;">0</span><i class="icon inactive fas fa-ban" />
          </td>
        </tr>
        <tr role="row" class="odd">
          <td class="dt-center">
            <nuxt-link to="/">
              Accommodations
            </nuxt-link>
          </td><td class=" dt-center">
            <nuxt-link to="/" />
          </td>
          <td class=" dt-center">
            <nuxt-link to="" />
          </td>
          <td class=" dt-center">
            <nuxt-link to="/" />
          </td>
          <td class="dt-center sorting_1">
            <span class="hide" style="display: none;">0</span><i class="icon inactive fas fa-ban" />
          </td>
        </tr>
        <tr role="row" class="odd">
          <td class="dt-center">
            <nuxt-link to="/">
              Accommodations
            </nuxt-link>
          </td><td class=" dt-center">
            <nuxt-link to="/" />
          </td>
          <td class=" dt-center">
            <nuxt-link to="" />
          </td>
          <td class=" dt-center">
            <nuxt-link to="/" />
          </td>
          <td class="dt-center sorting_1">
            <span class="hide" style="display: none;">0</span><i class="icon inactive fas fa-ban" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Table'
}
</script>

<style>
.fa-circle{
    color: #2AE809;
}
</style>
