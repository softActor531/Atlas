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
        <Table />
      </div>
    </div>
  </main>
</template>

<script>
import Table from '../../../components/student-notes-files/table.vue'
import Acceleration from '../../../components/student-notes-files/acceleration.vue'
import StudentSideNav from '../../../components/student-view/studentsidenav'

export default {
  name: 'Notes',
  components: {
    StudentSideNav,
    Acceleration,
    Table
  }
}
</script>

<style>
</style>
