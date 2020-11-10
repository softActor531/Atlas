<template>
  <div class="">
    <div class="row">
      <div class="col-12">
        <div class="page-title-box">
          <h4 class="page-title">
            All Badges
          </h4>
        </div>
      </div>
    </div>
    <nuxt-link
      to="/badges/add-custom"
      class="btn btn-primary btn-rounded waves-effect waves-light goBack"
    >
      <span class="btn-label"><i class="fa fa-plus-circle"/></span>Add Custom
      Challenge
    </nuxt-link>
    <br />
    <br />
    <div class="card">
      <div class="card-body">
        <Table :items="[]" :fields="fields" />
      </div>
    </div>
  </div>
</template>

<script>
import Table from "../../components/shared/Table";
export default {
  components: {
    Table
  },
  mounted() {
    if (!this.$store.state.modules.includes("navigator_mobile")) {
      throw new Error();
    }
  },
  data() {
    return {
      fields: [
        { key: "id", label: "ID" },
        { key: "name", label: "Name" },
        { key: "image", label: "Image" },
        { key: "control", label: "Control" },
        { key: "status", label: "Status" }
      ]
    };
  }
};
</script>

<style scoped>
.tooltipLabel {
  height: 13px;
  width: 13px;
  background-color: #31c6cc;
  border-radius: 50%;
  display: inline-block;
  line-height: 13px;
  color: white;
  font-size: 10px;
  text-align: center;
}
</style>
