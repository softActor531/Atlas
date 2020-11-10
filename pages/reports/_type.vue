<template>
  <div class="row">
    <div class="col-md-12">
      <h1 class="mt-0 pt-0">{{ reportName }}</h1>
      <Table
        :items="reports"
        :fields="fields"
        downloadBtn
        :disableDeleteBtn="true"
        :enableSearch="true"
        @download-entry="downloadReport"
      />
    </div>
  </div>
</template>

<script>
import Table from "../../components/shared/Table.vue";
import Api from "../../services/api/Api.js";

export default {
  name: "Reports.Edit",
  components: {
    Table,
  },
  data() {
    return {
      reports: [],
      reportName: this.$route.params.type.split("-").join(" "),
      fields: [
        {
          key: "report_type.name",
          label: "Type",
          sortable: true,
          class: "text-center",
        },
        {
          key: "filename",
          label: "File",
          sortable: true,
          class: "text-center",
        },
        {
          key: "created_at",
          label: "Created",
          sortable: true,
          class: "text-center",
        },
        { key: "actions", sortable: false },
      ],
    };
  },
  fetch() {
    this.$axios
      .get(
        `http://atlas-rebuild-api.mtcdevsite.com/api/v1/reports?filter[type]=${this.$route.params.type}`,
        {
          headers: {
            Accept: "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json",
            "X-Tenant-Id": this.$store.state.tenant_id,
            Authorization: `Bearer ${this.$store.state.token}`,
          },
        }
      )
      .then((res) => {
        this.reports = this.$formatter.deserialize(res.data);
      })
      .catch((err) => console.log(err));
  },
  methods: {
    downloadReport(record, index) {
      window.open(record.link, "_blank");
    },
  },
};
</script>
