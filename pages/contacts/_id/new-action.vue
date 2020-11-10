<template>
  <div>
    <div class="row">
      <div class="col-md-12 col-xs-12">
        <div class="page-title-box">
          <div class="page-title-right">
            <nuxt-link
              class="btn btn-danger waves-effect waves-light"
              :to="`/contacts/${$route.params.id}`"
            >
              <span class="btn-label">
                <i class="fa fa-ban" />
              </span>
              Cancel
            </nuxt-link>
          </div>
          <h1 class="page-title">
            New Action
          </h1>
        </div>
      </div>
    </div>
    <form action method="post">
      <div class="card">
        <div class="card-body">
          <p class="sub-header"><code>*</code> Required.</p>
          <div class="row">
            <div class="col-12" />
            <InputSelectGroup2
              :id="phase.id"
              label="Phase"
              :array="phases"
              width="4"
              :important="true"
              name="phase"
              placeholder="Choose Phase"
              @phaseChanged="updatePhase"
            />
            <InputSelectGroup2
              :id="status.id"
              label="Status"
              :array="statuses"
              width="4"
              :important="true"
              name="selectedStatus"
              placeholder="Choose Status"
              @selectedStatusChanged="status.id = $event"
            />

            <div
              v-if="status.id !== '' && phase.id !== ''"
              class="form-group col-md-4"
            >
              <label>Schdeuled Date</label>
              <flat-pickr
                v-model="scheduled_date"
                class="date-picker form-control flatpickr-input"
              />
            </div>

            <InputSelectGroup2
              :id="priority.id"
              label="Priority"
              :array="priorities"
              width="4"
              :important="true"
              name="priority"
              placeholder="Choose Priority"
              @priorityChanged="priority.id = $event"
            />

            <InputSelectGroup
              :id="category"
              label="Category"
              :array="categories"
              placeholder="Choose Category"
              width="4"
              :important="true"
              name="category"
              @categoryChanged="category = $event"
            />
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <div class="mb-3">
            <label>Note</label>
            <textarea v-model="note" rows="7" class="form-control" />
          </div>
          <button
            type="submit"
            class="btn btn-primary waves-effect waves-light"
            @click="createAction"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped>
@import url("https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css");

.form-group {
  float: left;
}
label.error {
  color: #ff0000;
}

.width-100 {
  width: 100%;
}
</style>

<script>
import Swal from "sweetalert2";

import moment from "moment";

import flatPickr from "vue-flatpickr-component";
import Api from "../../../services/api/Api.js";
import { getPhases, createAction } from "../../../Api";

export default {
  components: {
    flatPickr
  },
  async asyncData(context) {
    const api = new Api(context);
    const phases = await api.getPhases();
    const priorities = await api.getPriorities();

    return {
      phases,
      priorities,
      api
    };
  },
  data() {
    return {
      phase: {
        name: "",
        id: ""
      },
      status: {
        name: "",
        id: ""
      },
      priority: {
        name: "",
        id: ""
      },
      scheduled_date: "",
      statuses: [],
      category: "",
      categories: ["Mass Text", "Phone Call", "Mailer", "Home Visit"],
      note: ""
    };
  },
  mounted() {
    $("form").submit(false);
  },
  methods: {
    async createAction() {
      if (
        this.phase.id &&
        this.status.id &&
        this.priority.id &&
        this.category
      ) {
        const payload = {
          type: "contact-actions",
          attributes: {
            category: this.category,
            priority: this.priority.id,
            scheduled_date: moment(new Date()).format("MM/DD/YYYY"),
            note: this.note
          },
          relationships: {
            status: { data: { type: "statuses", id: this.status.id } },
            contact: { data: { type: "contacts", id: this.$route.params.id } }
          }
        };
        await this.api
          .createAction(payload)
          .then(data => {
            console.log(data);
            Swal.fire("Request successful!", "Created Action!", "success");
            this.$router.push(`/contacts/${this.$route.params.id}`);
          })
          .catch(e => {
            console.log(e);
          });
      }
    },
    async updatePhase($event) {
      this.phase.id = $event;
      this.statuses = await this.api.getStatusesByPhase($event);
    }
  }
};
</script>
