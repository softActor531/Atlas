<template>
  <div class>
    <h1>Setup Tenant's Phases & Statuses</h1>
    <div class="card mt-3">
      <div class="card-body">
        <h2>Phases and Status</h2>
        <button class="btn btn-primary ml-4" @click="onCreateNewPhase">Add New Phase</button>
        <b-form-group v-for="phase in phases_status" :key="phase.id">
          <div class="mt-3">
            <div class="ml-4">
              <hr style="border-bottom: 3px solid #acb3d2" />
              <b-form-group label="Name of Phase">
                <div class="row">
                  <div class="col-md-3 d-flex flex-row">
                    <b-form-input type="text" v-model="phase.name"></b-form-input>
                    <button class="btn btn-danger" @click="onRemovePhase(phase.id)">-</button>
                  </div>
                </div>
                <div class="row m-0 mt-2 d-flex justify-content-between">
                  <h5>Statuses that apply to this phase:</h5>
                  <button
                    class="btn btn-primary"
                    @click="onCreateNewStatus(phase.id)"
                  >Add New Status</button>
                </div>
                <div class="row mt-2" v-for="status in phase.status" :key="status.id">
                  <div class="col-md-3 d-flex flex-row">
                    <b-form-input type="text" v-model="status.name"></b-form-input>
                    <button class="btn btn-danger" @click="onRemoveStatus(phase.id, status.id)">-</button>
                  </div>
                </div>
              </b-form-group>
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
        @click="onSavePhasesAndStatus"
      />
    </div>
  </div>
</template>

<script>
import Api from "../../services/api/Api";
export default {
  asyncData(context) {
    const api = new Api(context);
    return {
      api
    };
  },
  mounted() {
    if (!this.$store.state.can_edit) {
      this.$router.push("/unauthorized");
    }
  },
  data() {
    return {
      phases_status: []
    };
  },
  methods: {
    onCreateNewPhase(e) {
      e.preventDefault();
      // Update model
      let phase_id = 0;
      if (this.phases_status.length === 0) phase_id = 0;
      else {
        this.phases_status.forEach(element => {
          if (element.id >= phase_id) phase_id = element.id + 1;
        });
      }

      this.phases_status.push({
        name: `Phase ${phase_id}`,
        id: phase_id, // id of phase created
        status: []
      });
      console.log(this.phases_status);
    },
    onCreateNewStatus(phaseId) {
      let status_id = 0;
      if (this.phases_status[phaseId].status.length === 0) status_id = 0;
      else {
        this.phases_status[phaseId].status.forEach(element => {
          if (element.id >= status_id) status_id = element.id + 1;
        });
      }
      this.phases_status
        .find(phase => phase.id === phaseId)
        .status.push({
          id: status_id,
          name: `Status ${status_id}`,
          description: `Status ${phaseId}-${this.phases_status[phaseId].length -
            1}`
        });
      console.log(this.phases_status);
    },
    onRemovePhase(phaseId) {
      this.phases_status = this.phases_status.filter(item => {
        return item.id !== phaseId;
      });
    },
    onRemoveStatus(phaseId, statusId) {
      let tmp = [];
      this.phases_status.forEach(element => {
        if (element.id === phaseId) {
          tmp.push({
            id: element.id,
            name: element.name,
            status: element.status.filter(item => {
              return item.id !== statusId;
            })
          });
        } else tmp.push(element);
      });
      this.phases_status = tmp;
    },
    onSavePhasesAndStatus() {
      console.log(this.phases_status);
      this.$router.push("/tenant-setup/workflow");
      //   this.phases_status.forEach(async element => {
      //     await this.api
      //       .createPhase({
      //         type: "phases",
      //         attributes: {
      //           name: element.name
      //         }
      //       })
      //       .then(async new_phase => {
      //         console.log("new phase", new_phase);
      //         element.status.forEach(async status => {
      //           await this.api
      //             .createStatus({
      //               type: "statuses",
      //               attributes: {
      //                 name: status.name,
      //                 description: status.description
      //               },
      //               relationships: {
      //                 phase: {
      //                   data: { type: "phases", id: new_phase.id }
      //                 }
      //               }
      //             })
      //             .then(new_status => {
      //               console.log("new status: ", new_status);
      //               this.$router.push("/tenant-setup");
      //             })
      //             .catch(error => {
      //               console.log(error);
      //             });
      //         });
      //       })
      //       .catch(e => {
      //         console.log(e);
      //       });
      //   });
    }
  }
};
</script>