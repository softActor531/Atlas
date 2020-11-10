<template>
  <main class="mt-3">
    <div class="row">
      <div class="col-md-3">
        <StudentSideNav />
      </div>
      <div class="col-md-9">
        <StudentsDiplomas />
        <StudentsTable />
      </div>
    </div>
  </main>
</template>

<script>
import StudentSideNav from '../../components/student-view/studentsidenav'
import StudentsDiplomas from '../../components/Students-Diplomas/StudentsDiplomas'
import StudentsTable from '../../components/Students-Diplomas/StudentsTable'

export default {
  name: 'Index',
  components: {
    StudentSideNav,
    StudentsDiplomas,
    StudentsTable
  }
}
</script>

<style>
</style>
