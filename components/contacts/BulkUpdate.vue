<template>
  <div class="card">
    <div class="card-body">
      <h5>Bulk Update Contacts</h5>
      <p>
        Update the selected contacts to bulk update their phase and/or status
      </p>
      <div class="row">
        <div class="col-md-4 col-12">
          <div class="form-group">
            <label for>Phase</label>
            <select class="custom-select">
              <option selected>Open this select menu</option>
            </select>
          </div>
        </div>
        <div class="col-md-4 col-12">
          <div class="form-group">
            <label for>Status</label>
            <select class="custom-select">
              <option selected>Open this select menu</option>
            </select>
          </div>
        </div>
        <div class="col-md-4 col-12 align-self-center">
          <button
            type="button"
            class="btn btn-primary waves-effect waves-light mt-2"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BulkUpdate"
};
</script>

<style scoped></style>
