<template>
  <div class="">
    <div class="row">
      <div class="col-12">
        <div class="page-title-box">
          <h4 class="page-title">
            Standard Reports
          </h4>
        </div>
      </div>
    </div>

    <Table :items="generals" :fields="generalsFields" download-btn edit-btn />

    <div class="row">
      <div class="col-12">
        <div class="page-title-box">
          <h4 class="page-title">
            General Reports
          </h4>
        </div>
      </div>
    </div>
    <Table
      :items="generals"
      :fields="generalsFields"
      download-btn
      disable-delete-btn
    />
    <div class="row">
      <div class="col-12">
        <div class="page-title-box">
          <h4 class="page-title">
            My Reports
          </h4>
        </div>
      </div>
    </div>
    <b-row align-h="end">
      <b-button variant="primary" size="sm">
        <span class="btn-label">
          <i class="fas fa-plus-circle" />
        </span>
        create
      </b-button>
    </b-row>
    <Table
      :items="generals"
      :fields="generalsFields"
      custom-action-btn-title="Regenerate"
      download-btn
      edit-btn
    />
  </div>
</template>

<script>
import Table from "../../../components/shared/Table.vue";
export default {
  components: {
    Table
  },
  mounted() {
    if (!this.$store.state.modules.includes("reports")) {
      throw new Error();
    }
  },
  data() {
    return {
      generalsFields: [
        { key: "name", label: "Name" },
        { key: "actions", label: "Actions" }
      ],
      generals: [
        { name: "test" },
        { name: "test2" },
        { name: "test3" },
        { name: "test4" },
        { name: "test5" }
      ]
    };
  }
};
</script>
