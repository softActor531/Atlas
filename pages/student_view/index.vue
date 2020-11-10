<template>
  <main class="mt-3">
    <div class="row">
      <div class="col-md-3">
        <StudentSideNav />
      </div>
      <div class="col-md-9">
        <Diploma />
      </div>
    </div>
  </main>
</template>

<script>
import StudentSideNav from "../../components/student-view/studentsidenav";
import Diploma from "../../components/student-view/Diploma";
export default {
  name: "Index",
  components: {
    StudentSideNav,
    Diploma
  }
};
</script>

<style scoped>
</style>
