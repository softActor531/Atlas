<template>
  <div class="card">
    <div class="card-bod">
      <div class="table-responsive table-bordered ">
        <thead>
          <tr>
            <th>Note Date</th>
            <th>Created By</th>
            <th>Type</th>
            <th>Category</th>
            <th>Sub Category</th>
            <th>Descriptor</th>
            <th>Action</th>
            <th>Assigned To</th>
            <th>Date Due</th>
          </tr>
        </thead>
        <tbody>
          <tr class="top-border">
            <td>
              06/23/2020
            </td>
            <td>
              Frank Cruz
            </td>
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
          </tr>
          <tr class="bottom bottom-border">
            <td colspan="5">
              <b>Notes:</b> Called GC. No answer. Left message &amp; sent text. Good morning Sebastian please return my call ASAP!
            </td>
            <td class="no-border" colspan="4">
              <b>Status:</b>To Do
              <nuxt-link to="/students/details/_id" class="btn btn-blue waves-effect waves-light">
                View
              </nuxt-link>
            </td>
          </tr>
          <tr class="top-border">
            <td>
              06/23/2020
            </td>
            <td>
              Frank Cruz
            </td>
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
          </tr>
          <tr class="bottom bottom-border">
            <td colspan="5">
              <b>Notes:</b> Called GC. No answer. Left message &amp; sent text. Good morning Sebastian please return my call ASAP!
            </td>
            <td class="no-border" colspan="4">
              <b>Status:</b>To Do
              <nuxt-link to="/students/details" class="btn btn-blue waves-effect waves-light">
                View
              </nuxt-link>
            </td>
          </tr>
          <tr class="top-border">
            <td>
              06/23/2020
            </td>
            <td>
              Frank Cruz
            </td>
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
          </tr>
          <tr class="bottom bottom-border">
            <td colspan="5">
              <b>Notes:</b> Called GC. No answer. Left message &amp; sent text. Good morning Sebastian please return my call ASAP!
            </td>
            <td class="no-border" colspan="4">
              <b>Status:</b>To Do
              <nuxt-link to="/students/details/_id" class="btn btn-blue waves-effect waves-light">
                View
              </nuxt-link>
            </td>
          </tr>
        </tbody>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Table'
}
</script>

<style lang="scss" scoped>
.table-bordered th, .table-bordered td{padding: 7px;}
</style>
