<template>
  <div class="row">
    <div class="col-md-12">
      <h1 class="mt-0 pt-0">Standard Reports</h1>
      <Table
        :items="standardReport"
        :fields="fields"
        editBtn
        downloadBtn
        :disableDeleteBtn="true"
        :enableSearch="true"
        @edits-entry="goToEdit"
        @download-entry="downloadReport"
      />
    </div>
  </div>
</template>

<script>
import Table from "../../components/shared/Table.vue";
import Api from "../../services/api/Api.js";

export default {
  name: "Reports.Index",
  components: {
    Table,
  },
  data() {
    return {
      standardReport: [],
      fields: [
        {
          key: "name",
          label: "Name",
          sortable: true,
          class: "text-center",
        },
        { key: "actions", sortable: false },
      ],
    };
  },
  fetch() {
    this.$axios
      .get(`http://atlas-rebuild-api.mtcdevsite.com/api/v1/report-types`, {
        headers: {
          Accept: "application/vnd.api+json",
          "Content-Type": "application/vnd.api+json",
          "X-Tenant-Id": this.$store.state.tenant_id,
          Authorization: `Bearer ${this.$store.state.token}`,
        },
      })
      .then((res) => {
        this.standardReport = this.$formatter.deserialize(res.data);
      })
      .catch((err) => console.log(err));
  },
  methods: {
    goToEdit(record, index) {
      this.$router.push({
        name: "reports-id-create",
        params: { id: record.id },
      });
    },
    downloadReport(record, index) {
      this.$router.push({ name: "reports-type", params: { type: record.id } });
    },
  },
};
</script>

