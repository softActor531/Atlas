<template>
  <div>
    <h1 class="pt-0 pb-1 mt-0">Staff Schedule</h1>
    <div class="card">
      <div class="card-body">
        <div class="row mt-1 mb-3">
          <div class="col-md-4">
            <label>Districts</label>
            <select2
              v-model="district.name"
              :options="
                districts.map((district, index) => {
                  return district.name;
                })
              "
            />
          </div>
          <div class="col-md-4">
            <label for>Sites</label>
            <select2
              v-model="district.site"
              :options="
                districts.length > 0
                  ? districts.find((obj) => obj.name === district.name) !==
                    undefined
                    ? districts.find((obj) => obj.name === district.name).sites
                    : []
                  : []
              "
              @change="findIndexOfDistrict()"
            />
          </div>
          <div class="col-md-4">
            <label>Staff</label>
            <select2
              v-model="staffSelected"
              :options="
                staff.map(
                  (element) => `${element.first_name} ${element.last_name}`
                )
              "
              @change="findIndexOfStaff"
            />
          </div>
        </div>
        <StaffScheduleTable
          v-if="staffSelected !== '' && district.name !== ''"
          :staff="staffSelected"
          :district="district"
          :staffSelectedIndex="staffSelectedIndex"
          :districtSelectedIndex="districtSelectedIndex"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Select2 from "v-select2-component";
import StaffScheduleTable from "./StaffScheduleTable";
export default {
  name: "Onsitehours",
  components: {
    StaffScheduleTable,
    Select2,
  },
  data() {
    return {
      district: { name: "", site: "" },
      staffSelected: "",
      districts: [],
      staff: [],
      staffSelectedIndex: 0,
      districtSelectedIndex: 0,
    };
  },
  fetch() {
    this.$api.getUsers().then((data) => {
      this.staff = data;
    });
    this.$axios
      .get(
        "http://atlas-rebuild-api.mtcdevsite.com/api/v1/districts?include=sites",
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
        this.$axios
          .get("http://atlas-rebuild-api.mtcdevsite.com/api/v1/sites", {
            headers: {
              Accept: "application/vnd.api+json",
              "Content-Type": "application/vnd.api+json",
              "X-Tenant-Id": this.$store.state.tenant_id,
              Authorization: `Bearer ${this.$store.state.token}`,
            },
          })
          .then((results) => {
            let tmp = [];
            res.data.data.forEach((element) => {
              if (element.relationships.sites.data.length > 0) {
                element.relationships.sites.data.forEach((dist_site) => {
                  let tmp_sites = [];
                  results.data.data.forEach((site) => {
                    if (site.id === dist_site.id) {
                      tmp_sites.push({
                        text: site.attributes.name,
                        id: dist_site.id,
                      });
                    }
                  });
                  tmp.push({
                    name: element.attributes.name,
                    sites: tmp_sites,
                  });
                });
              }
            });

            this.districts = tmp;
          });
      });
  },
  computed: {
    showTable() {
      if (
        this.district.name !== "" &&
        this.district.name !== "--District Options--" &&
        this.district.site !== "" &&
        this.district.site !== "Select Site" &&
        this.staffSelected !== "-- Select --" &&
        this.staffSelected !== ""
      ) {
        return true;
      }
      return false;
    },
  },
  head: {
    script: [
      {
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js",
      },
    ],
  },
  methods: {
    findIndexOfDistrict: function () {
      // for (let i = 0 ; i < this.districts.length ; i++)
      //   if ( this.districts[i].sites.indexof( value ) != -1) {
      //     this.districtSelectedIndex = this.districts[i].sites.indexof( value ) + 1;
      //     return;
      //   }

      if (this.districts.length > 0)
        if (
          this.districts.find((obj) => obj.name === this.district.name) !==
          undefined
        )
          this.districtSelectedIndex =
            this.districts
              .find((obj) => obj.name === this.district.name)
              .sites.indexOf(this.district.site) + 1;
    },
    findIndexOfStaff: function () {
      this.staffSelectedIndex = this.staff.indexOf(this.staffSelected);
    },
  },
};
</script>

<style scoped></style>
