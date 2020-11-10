<template>
  <div class="row mt-3">
    <div class="col-md-3">
      <Sidenav />
    </div>
    <div class="col-md-9">
      <h1 class="mt-0 mb-3">
        Appointment Categories
      </h1>
      <EditAppointmentCategory />
    </div>
  </div>
</template>
<script>
import Sidenav from '../../../components/schedule/Sidenav'
import EditAppointmentCategory from '../../../components/appointment-categories/EditAppointmentCategory.vue'

export default {
  name: 'Index',
  components: {
    Sidenav,
    EditAppointmentCategory
  }
}
</script>

<style scoped></style>
