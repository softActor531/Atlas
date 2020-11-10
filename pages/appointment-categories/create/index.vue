<template>
  <div class="row mt-3">
    <div class="col-md-3">
      <Sidenav />
    </div>
    <div class="col-md-9">
      <h1 class="mt-0 mb-3">Appointment Categories</h1>
      <CreateAppointmentCategory />
    </div>
  </div>
</template>
<script>
import Sidenav from '../../../components/schedule/Sidenav'
import CreateAppointmentCategory from '../../../components/appointment-categories/CreateAppointmentCategory.vue'

export default {
  name: 'Index',
  components: {
    Sidenav,
    CreateAppointmentCategory
  }
}
</script>

<style scoped></style>
