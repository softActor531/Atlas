<template>
  <tr role="row" class="odd">
    <td class="center dt-center sorting_1">{{ id }}</td>
    <td class="center dt-center">{{ name }}</td>
    <td class="center dt-center">{{ email }}</td>
    <td class="dt-center">
      <a type="button" class="btn btn-primary" @click="impersonate"
        >Impersonate</a
      >
    </td>
  </tr>
</template>

<script>
import Api from "../../services/api/Api";

export default {
  props: {
    id: Number,
    name: String,
    email: String,
    api: Object,
  },
  methods: {
    impersonate() {
      const payload = {
        type: "impersonation-auth-tokens",
        attributes: { user_id: this.id },
      };
      this.api
        .impersonate(
          this.$store.state.token,
          this.$store.state.tenant_id,
          payload
        )
        .then(async ({ access_token, expires_in }) => {
          this.$store.dispatch("setToken", { access_token, expires_in });
          this.$store.dispatch("setUser", this.name);

          this.api
            .getUserMe(access_token)
            .then((data) => {
              console.log(data);
              const permNames = data.permissions.map((p) => p.name);
              this.$store.dispatch("fetchUserPermissions", permNames);

              let modules = [];
              if (data.tenant.config.modules.dashboard.active) {
                modules.push("dashboard");
              }
              if (data.tenant.config.modules.reports.active) {
                modules.push("reports");
              }
              if (
                data.tenant.config.modules.student_profile_management.active
              ) {
                modules.push("student_profile_management");
              }
              if (data.tenant.config.modules.plp.active) {
                modules.push("plp");
              }
              if (data.tenant.config.modules.courseware_integration.active) {
                modules.push("courseware_integration");
              }
              if (data.tenant.config.modules.graduation_calculator.active) {
                modules.push("graduation_calculator");
              }
              if (data.tenant.config.modules.automated_workflow.active) {
                modules.push("automated_workflow");
              }
              if (data.tenant.config.modules.scheduling.active) {
                modules.push("scheduling");
              }
              if (data.tenant.config.modules.document_storage.active) {
                modules.push("document_storage");
              }
              if (data.tenant.config.modules.case_management_notes.active) {
                modules.push("case_management_notes");
              }
              if (data.tenant.config.modules.apps.compass_web) {
                modules.push("compass_web");
              }
              if (data.tenant.config.modules.apps.compass_mobile) {
                modules.push("compass_mobile");
              }
              if (data.tenant.config.modules.apps.navigator_mobile) {
                modules.push("navigator_mobile");
              }
              const fields = data.tenant.config.fields;

              this.$store.dispatch("fetchTenantModules", modules);
              this.$store.dispatch("fetchTenantFields", fields);
            })
            .catch((e) => {
              console.log(e);
            });
          this.$router.push({ path: "/dashboard" });
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>
