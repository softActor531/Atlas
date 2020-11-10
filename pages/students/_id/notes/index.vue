<template>
  <main class="students-notes">
    <div class="row mt-4">
      <div class="col-md-3">
        <StudentSideNav />
      </div>
      <div class="col-md-9">
        <div class="page-title-right float-right">
          <nuxt-link class="btn btn-success waves-effect waves-light" to="/Student-Notes-Files-Edit">
            <span class="btn-label">
              <i class="mdi mdi-plus-circle" />
            </span>
            Add Note
          </nuxt-link>
        </div>
        <h1 class="mt-0">
          Case Management Notes
        </h1>
        <Acceleration />
        <Table :items="result" :fields="caseManagementArr">
          <!--  -->
        </Table>
        ssss
      </div>
    </div>
  </main>
</template>

<script>
import Acceleration from '../../../../components/student-notes-files/acceleration.vue'
import StudentSideNav from '../../../../components/student-view/studentsidenav'
import Table from '../../../../components/shared/Table.vue'

export default {
  name: 'Notes',
  components: {
    StudentSideNav,
    Acceleration,
    Table
  },
  data() {
    return {
      caseManagementArr: [
        { key: 'created_at', label: 'Note Date'},
        { key: 'creator.first_name', label: 'Created By' },
        { label: 'Status' },
        { key: 'body', label: 'Notes' },
        { key: 'type', label: 'Type' },
        { key: 'category.name', label: 'Category' },
        { key: 'sub_category.name', label: 'Sub Category' },
        { key: 'descriptor.name', label: 'Descriptor' },
        { key: 'action.name', label: 'Action' },
        'actions'
      ]
    }
  },
  async asyncData ({params, $api}) {
    const result = await $api.getStudentsNotesList(params)
    return {
      result
    }
  }
}
</script>

<style>
</style>
