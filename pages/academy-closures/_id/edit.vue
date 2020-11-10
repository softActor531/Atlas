<template>
  <div class="row mt-3">
    <div class="col-md-3">
      <Sidenav />
    </div>
    <div class="col-md-9">
      <h1 class="mt-0 mb-3">
        Appointment Categories
      </h1>
      <EditAcademyClosure :academyClosure="academyClosure" />
    </div>
  </div>
</template>
<script>
import Sidenav from "@/components/schedule/Sidenav";
import EditAcademyClosure from "@/components/academy-closures/Edit-Academy-Closure";

export default {
  name: "Index",

  data() {
    return {
      academyClosure: {}
    };
  },

  components: {
    Sidenav,
    EditAcademyClosure
  },

  mounted() {
    this.showAcademyClosure();
  },
  methods: {
    showAcademyClosure() {
      this.$axios
        .get(
          `http://atlas-rebuild-api.mtcdevsite.com/api/v1/academy-closures/${this.$route.params.id}?include=sites.district`
        )
        .then(res => {
          this.academyClosure = this.$formatter.deserialize(res.data)
          console.log(this.academyClosure)
        })
        .catch(e => {
          console.log(e)
        })
    }
  }
};
</script>

<style scoped></style>
