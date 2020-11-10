<template>
  <div class="row mt-3">
    <div class="col-md-3">
      <Sidenav />
    </div>
    <div class="col-md-9">
      <h1 class="mt-0 pt-0">Site Capacity</h1>
      <app-table
        @delete-entry="deleteSite"
        @edit-entry="editSite"
        :editBtn="true"
        :disableDeleteBtn="true"
        :items="sites"
        :fields="fields"
        add-btn
      />
    </div>
  </div>
</template>

<script>
import AppTable from "../../components/shared/Table.vue";
import Sidenav from "../../components/schedule/Sidenav";
import Api from "../../services/api/Api.js";
import Swal from "sweetalert2";

export default {
  name: "SiteCapacity.Index",
  components: {
    Sidenav,
    AppTable,
  },
  data() {
    return {
      sites: [],
      fields: [
        { key: "type", label: "Site", sortable: false, sortDirection: "desc" },

        {
          key: "gc_onsite_limit_per_week",
          label: "Limit Per week",
          sortable: true,
          class: "text-center",
        },
        {
          key: "people_per_site",
          label: "People Per site",
          sortable: true,
          class: "text-center",
        },
        // { key: "personsPerSite", label: "Persons Per Site" },
        { key: "actions", label: "Actions", sortable: false },
      ],
    };
  },
  fetch() {
    this.$axios
      .get("http://atlas-rebuild-api.mtcdevsite.com/api/v1/site-capacities", {
        headers: {
          Accept: "application/vnd.api+json",
          "Content-Type": "application/vnd.api+json",
          "X-Tenant-Id": this.$store.state.tenant_id,
          Authorization: `Bearer ${this.$store.state.token}`,
        },
      })
      .then((res) => {
        this.sites = this.$formatter.deserialize(res.data);
        console.log("sites ", this.sites);
      })
      .catch((err) => console.log(err));
  },
  mounted() {
    console.log(this.$formatter);
  },
  methods: {
    deleteSite(e) {
      console.log("delete event", e);
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "Cancel",
      }).then((value) => {
        if (value.isConfirmed == true) {
          //the delete request
          Swal.fire({
            title: "Comfirmed",
            icon: "success",
          });
        } else {
          Swal.fire({
            title: "Canceled",
            icon: "success",
          });
        }
      });
    },
    editSite(e) {
      console.log("edit event", e);
      this.$router.push("site-capacity/create/" + e.id);
    },
  },
};
</script>

<style scoped>
h1 {
  padding-top: 0 !important;
}
</style>
