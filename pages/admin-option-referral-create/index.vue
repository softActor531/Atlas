<template>
  <main>
    <h1 class="my-3">Create New Referral Option:</h1>
    <b-button class="btn btn-secondary btn-rounded" @click="$router.back()">
      <span class="btn-label">
        <i class="fa fa-ban" /> </span
      >Cancel
    </b-button>
    <fieldset class="mt-3">
      <div class="form-group col-md-6">
        <label>Group</label>
        <select class="form-control" name="group_id" v-model="group">
          <option v-for="option in options" :key="option.id">
            {{ option }}
          </option>
        </select>
      </div>

      <div class="form-group col-md-6">
        <label>Referral Option</label>
        <input
          v-model="name"
          class="form-control"
          type="text"
          maxlength="50"
          name="choice"
          required
          value
        />
      </div>

      <div class="form-group col-md-6">
        <label>Active</label>
        <select v-model="active" class="form-control" name="active">
          <option value="1">Active</option>
          <option value="0">Disabled</option>
        </select>
      </div>

      <div class="clear" />
      <div class="form-group col-md-12">
        <input
          class="btn btn-primary waves-effect waves-light mb-2"
          type="submit"
          name="save"
          value="Save Referral Option"
          @click="createReferralOption"
        />
      </div>
    </fieldset>
  </main>
</template>

<script>
import Api from "@/services/api/Api";

export default {
  async asyncData(context) {
    const api = new Api(context);
    return {
      api
    };
  },
  mounted() {
    if (!this.$store.state.permissions.includes("Edit Referral Options")) {
      this.$router.push("/unauthorized");
    }
  },
  data() {
    return {
      name: "",
      active: 1,
      group: "",
      options: [
        " --Choose A Group--",
        "Call",
        "Digital Ad/Online",
        "Home Visit",
        "Local Event",
        "Other",
        "Print Ad",
        "Referral"
      ]
    };
  },
  methods: {
    createReferralOption: function() {
      const payload = {
        type: "referral-options",
        attributes: {
          group: this.group,
          name: this.name,
          active: this.active
        }
      };
      if (!(this.group === "" || this.name === "")) {
        this.api
          .createReferralOption(payload)
          .then(data => {
            this.$router.push(`/admin-option-referral`);
          })
          .catch(error => {
            console.log(error);
          });
      }
    }
  }
};
</script>

<style></style>
