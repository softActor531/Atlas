<template>
  <div class>
    <h1>Setup Tenant</h1>
    <div class="card">
      <div class="card-body">
        <h2>Workflow</h2>
        <b-form-group>
          <b-form-checkbox v-model="form.workflows.active">Active</b-form-checkbox>
          <div v-if="form.workflows.active" class="mt-3">
            <div
              :key="index"
              v-for="(level, index) in parseInt(
                      form.levels
                    )"
              class="mb-3"
            >
              <div class="row mb-3">
                <h4>System Hierarchy Level {{ level }}</h4>
                <button class="btn btn-primary offset-8" @click="addFlow(index)">Add New Workflow</button>
              </div>
              <div
                class="row"
                :key="wf"
                v-for="(wf, inx) of form.workflows.flows[index].choices.length"
              >
                <div class="col-xs-12 col-md-2">
                  <InputSelectGroup2
                    label="Phase"
                    :array="phases"
                    width="12"
                    :id="form.workflows.flows[index].choices[inx].phase"
                    name="phase"
                    @phaseChanged="phaseChanged(index, inx, $event)"
                    placeholder="Choose Phase"
                  />
                </div>
                <div class="col-xs-12 col-md-2">
                  <InputSelectGroup2
                    label="Status"
                    :array="form.workflows.flows[index].choices[inx].statuses"
                    width="12"
                    :id="form.workflows.flows[index].choices[inx].status"
                    name="status"
                    @statusChanged="form.workflows.flows[index].choices[inx].status = $event"
                    placeholder="Choose Status"
                  />
                </div>
                <div class="form-group col-xs-12 col-md-2">
                  <label for="scheduled-date" class="required bolder">Number of Lapsed Days:</label>
                  <b-form-input
                    id="input-9"
                    v-model="form.workflows.flows[index].choices[inx].lapsed_days"
                    type="number"
                  ></b-form-input>
                </div>
                <div class="my-auto col-md-2">
                  <b-form-checkbox
                    v-model="form.workflows.flows[index].choices[inx].send_notification"
                  >Send Notification</b-form-checkbox>
                </div>
                <div class="my-auto col-md-3">
                  <b-form-checkbox
                    v-model="form.workflows.flows[index].choices[inx].change_phase"
                  >Change Phase/Status</b-form-checkbox>
                </div>
                <div class="my-auto col-md-1">
                  <a
                    class="mdi mdi-delete-empty"
                    style="color: red; font-size: 24px;"
                    @click="removeFlow(index, inx)"
                  ></a>
                </div>
                <Fragment v-if="form.workflows.flows[index].choices[inx].change_phase">
                  <div class="col-xs-12 col-md-2">
                    <InputSelectGroup2
                      label="New Phase"
                      :array="phases"
                      width="12"
                      :id="form.workflows.flows[index].choices[inx].new_phase"
                      name="newPhase"
                      @newStatusChanged="newPhaseChanged(index, inx, $event)"
                      placeholder="Choose Phase"
                    />
                  </div>
                  <div class="col-xs-12 col-md-2">
                    <InputSelectGroup2
                      label="New Status"
                      :array="form.workflows.flows[index].choices[inx].new_statuses"
                      width="12"
                      :id="form.workflows.flows[index].choices[inx].new_status"
                      name="newStatus"
                      @newStatusChanged="form.workflows.flows[index].choices[inx].new_status = $event"
                      placeholder="Choose Status"
                    />
                  </div>
                </Fragment>
              </div>
              <hr style="border-bottom: 3px solid #acb3d2" />
            </div>
          </div>
        </b-form-group>
      </div>
    </div>
    <br />
    <br />
    <div class="form-group col-xs-12 col-md-12 mb-3 clear">
      <input
        class="btn btn-primary waves-effect waves-light save_btn"
        type="submit"
        value="Continue"
        name="submit"
        @click="submit"
      />
    </div>
  </div>
</template>

<script>
import Api from "../../services/api/Api";

export default {
  async asyncData(context) {
    const api = new Api(context);
    const phases = await api.getPhases();
    return {
      api,
      phases
    };
  },
  mounted() {
    if (!this.$store.state.can_edit) {
      this.$router.push("/unauthorized");
    }
  },
  data() {
    return {
      form: {
        levels: 1,
        workflows: {
          active: 0,
          flows: [
            {
              number: 1,
              choices: [
                {
                  phase: "",
                  status: "",
                  statuses: [],
                  lapsed_days: "",
                  send_notification: 0,
                  change_phase: 0
                }
              ]
            },
            {
              number: 1,
              choices: [
                {
                  phase: "",
                  status: "",
                  statuses: [],
                  lapsed_days: "",
                  send_notification: 0,
                  change_phase: 0
                }
              ]
            },
            {
              number: 1,
              choices: [
                {
                  phase: "",
                  status: "",
                  statuses: [],
                  lapsed_days: "",
                  send_notification: 0,
                  change_phase: 0,
                  new_phase: "",
                  new_status: "",
                  new_statuses: []
                }
              ]
            }
          ]
        }
      }
    };
  },
  methods: {
    addFlow(index) {
      this.form.workflows.flows[index].number++;
      this.form.workflows.flows[index].choices.push({
        phase: "",
        status: "",
        statuses: [],
        lapsed_days: "",
        send_notification: "",
        change_phase: "",
        new_phase: "",
        new_status: "",
        new_statuses: []
      });
    },
    removeFlow(index, inx) {
      if (this.form.workflows.flows[index].choices.length > 1) {
        this.form.workflows.flows[index].choices.splice(inx, 1);
        // this.form.workflows.flows[index].number--;
      }
    },
    async phaseChanged(index, inx, $event) {
      this.form.workflows.flows[index].choices[inx].phase = $event;
      this.form.workflows.flows[index].choices[
        inx
      ].statuses = await this.api.getStatusesByPhase($event);
    },
    async newPhaseChanged(index, inx, $event) {
      this.form.workflows.flows[index].choices[inx].new_phase = $event;
      this.form.workflows.flows[index].choices[
        inx
      ].new_statuses = await this.api.getStatusesByPhase($event);
    },
    submit() {
      this.$router.push("/tenant-setup/custom-fields");
    }
  }
};
</script>