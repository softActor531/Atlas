<template>
  <div class="row mt-3">
    <div class="col-md-3">
      <Sidenav />
    </div>
    <div class="col-md-9">
      <h1 class="mt-0 mb-3">On-Site Capacity</h1>
      <OnSiteCapacity />
    </div>
  </div>
</template>
<script>
import Sidenav from "../../../components/schedule/Sidenav";
import OnSiteCapacity from "../../../components/site-capacity/On-Site-Capacity";

export default {
  name: "Index",
  components: {
    Sidenav,
    OnSiteCapacity
  }
};
</script>

<style scoped>
</style>
