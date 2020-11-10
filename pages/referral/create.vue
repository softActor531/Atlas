<template>
  <div class>
    <div class="row">
      <div class="col-12">
        <div class="page-title-box">
          <h4 class="page-title">New Referral Option:</h4>
        </div>
      </div>
    </div>
    <nuxt-link to="/referral" class="btn btn-secondary btn-rounded waves-effect waves-light goBack">
      <span class="btn-label">
        <i class="fa fa-ban"></i>
      </span>Cancel
    </nuxt-link>
    <form method="post" action>
      <fieldset>
        <div class="form-group col-md-6">
          <label>Group</label>
          <select class="form-control" name="group_id" required v-model="group">
            <option :key="item" v-for="item in groups">{{ item }}</option>
          </select>
        </div>

        <div class="form-group col-md-6">
          <label>Referral Option</label>
          <input
            class="form-control"
            type="text"
            maxlength="50"
            name="choice"
            required
            v-model="referralOption"
          />
        </div>

        <div class="form-group col-md-6">
          <label>Active</label>
          <select class="form-control" name="active" v-model="active">
            <option value="1">Active</option>
            <option value="0">Disabled</option>
          </select>
        </div>

        <div class="clear"></div>
        <div class="form-group col-md-12">
          <input
            class="btn btn-primary waves-effect waves-light mb-2"
            type="submit"
            name="save"
            value="Save Referral Option"
          />
        </div>
      </fieldset>
    </form>
  </div>
</template>
<style langscoped>
</style>

<script>
export default {
  data() {
    return {
      group: "--Choose A Group--",
      groups: [
        "--Choose A Group--",
        "Call",
        "Digital Ad/Online",
        "Home Visit",
        "Local Event",
        "Other",
        "Print Ad",
        "Referral"
      ],
      referralOption: "",
      active: ""
    };
  },
  moutned: function() {
    $("form").submit(false);
  }
};
</script>