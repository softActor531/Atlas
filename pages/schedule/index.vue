<template>
  <main>
    <div class="row mt-3">
      <div class="col-md-3">
        <Sidenav />
      </div>
      <div class="col-md-9">
        <h1 class="mt-0">Master Schedule</h1>
        <Filters />
        <Calendar />
      </div>
    </div>
  </main>
</template>

<script>
import Sidenav from "../../components/schedule/Sidenav";
import Filters from "../../components/schedule/Filters";
import Calendar from "../../components/schedule/Calendar";

export default {
  name: "Index",
  components: {
    Sidenav,
    Filters,
    Calendar
  }
};
</script>

<style scoped>
h1 {
  padding-top: 0 !important;
}
</style>
