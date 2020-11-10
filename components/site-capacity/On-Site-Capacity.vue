<template>
  <div class="card">
    <div class="card-body">
      <h4 class="mb-3 header-title">
        <i class="mdi mdi-square-edit-outline" />
        On-Site Capacity
      </h4>
      <form @submit.prevent="saveData">
        <div class="row">
          <div class="col-md-6">
            <label for="districts">District</label>
            <b-form-select required v-model="district">
              <option
                v-for="item in districts"
                :value="{ id: item.id, text: item.name }"
                :key="item.id"
              >
                {{ item.name }}
              </option>
            </b-form-select>
          </div>
          <div class="col-md-6">
            <label for="sites">Site</label>
            <b-form-select required v-model="site">
              <option
                v-for="item in sites"
                :value="{ id: item.id, text: item.name }"
                :key="item.id"
              >
                {{ item.name }}
              </option>
            </b-form-select>
          </div>
          <div class="col-xs-12 col-md-6">
            <label>Persons Per Site</label>
            <b-input
              label="Persons Per Site"
              type="text"
              v-model="people_per_site"
              required
            />
          </div>
          <div class="col-xs-12 col-md-6">
            <label>GC Limit Onsite Appointments Per Week</label>
            <b-input
              label="GC Limit Onsite Appointments Per Week"
              type="text"
              v-model="gc_onsite_limit_per_week"
              required
            />
          </div>
          <div class="col-xs-12 col-md-12">
            <div class="form-group">
              <b-form-checkbox
                v-model="no_capacity_restrictions"
                required
                type="checkbox"
                value="1"
                unchecked-value="0"
                name="no_restriction"
                >No Capacity Restrictions</b-form-checkbox
              >
            </div>
          </div>
          <div class="col-xs-12 col-md-12">
            <div class="float-right">
              <button
                type="submit"
                class="btn btn-blue waves-effect waves-light mb-2"
              >
                <i class="mdi mdi-circle-edit-outline" /> Save
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import InputGroup from ".././UI/InputGroup";
import InputSelectGroup from ".././UI/InputSelectGroup2";
import Select2 from "v-select2-component";
import Swal from "sweetalert2";

export default {
  name: "OnSiteCapacity",
  components: {
    InputGroup,
    Select2,
  },

  data() {
    return {
      gc_onsite_limit_per_week: "",
      people_per_site: "",
      no_capacity_restrictions: "",
      id: null,
      payload: {
        type: "site-capacities",
        attributes: {
          people_per_site: 5,
          gc_onsite_limit_per_week: 2,
          no_capacity_restrictions: 1,
        },
        relationships: {
          site: {
            data: {
              type: "sites",
              id: "",
            },
          },
        },
        links: {
          self:
            "http://atlas-rebuild-api.mtcdevsite.com/api/v1/site-capacities/1",
        },
      },
      district_label: "District",
      site_label: "Site",
      district: null,
      sites: [],
      site: null,
      districts: [],
    };
  },
  async fetch() {
    if (this.$route.params.index) {
      this.id = this.$route.params.index;
      await this.$axios
        .get(
          "http://atlas-rebuild-api.mtcdevsite.com/api/v1/site-capacities/" +
            this.id,
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
          console.log(res.data);
          this.people_per_site = res.data.data.attributes.people_per_site;
          this.gc_onsite_limit_per_week =
            res.data.data.attributes.gc_onsite_limit_per_week;
          this.no_capacity_restrictions =
            res.data.data.attributes.no_capacity_restrictions;
          this.site = res.data.data.id;
        });
    }

    this.getDistricts();
    this.getSites();
  },
  methods: {
    getDistricts() {
      this.$axios
        .get("http://atlas-rebuild-api.mtcdevsite.com/api/v1/districts", {
          headers: {
            Accept: "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json",
            "X-Tenant-Id": this.$store.state.tenant_id,
            Authorization: `Bearer ${this.$store.state.token}`,
          },
        })
        .then((data) => {
          this.districts = this.$formatter.deserialize(data.data);
        })
        .catch((e) => {
          console.log(e.response);
        });
    },
    getSites() {
      this.$axios
        .get("http://atlas-rebuild-api.mtcdevsite.com/api/v1/sites", {
          headers: {
            Accept: "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json",
            "X-Tenant-Id": this.$store.state.tenant_id,
            Authorization: `Bearer ${this.$store.state.token}`,
          },
        })
        .then((data) => {
          this.sites = this.$formatter.deserialize(data.data);
        })
        .catch((e) => {
          console.log(e.response);
        });
    },
    saveData() {
      console.log(this.payload);
      this.payload.attributes.people_per_site = this.people_per_site;
      this.payload.attributes.gc_onsite_limit_per_week = this.gc_onsite_limit_per_week;
      this.payload.attributes.no_capacity_restrictions = this.no_capacity_restrictions;
      this.payload.relationships.site.data.id = this.site.id;

      this.$axios
        .post(
          `http://atlas-rebuild-api.mtcdevsite.com/api/v1/site-capacities?include=site`,
          {
            data: this.payload,
          },
          {
            headers: {
              Accept: "application/vnd.api+json",
              "Content-Type": "application/vnd.api+json",
              "X-Tenant-Id": this.$store.state.tenant_id,
              Authorization: `Bearer ${this.$store.state.token}`,
            },
          }
        )
        .then((data) => {
          console.log(data.status);
          if (data.status == 201 || 200) {
            Swal.fire({
              title: "Comfirmed",
              icon: "success",
            });
            location.reload();
          }
        })
        .catch((e) => {
          console.log(e.response);
        });
    },
  },
  async districtChanged($event) {
    districts = $event;
    sites = await this.$api.getSitesByDistrict($event);
  },
};
</script>

<style scoped></style>
