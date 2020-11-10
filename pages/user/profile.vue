<template>
  <b-container fluid>
    <h2>Marawan</h2>
    <h4>User Info</h4>
    <b-row class="my-1">
      <label for="input-small">First Name:</label>
      <b-col cols="2">
        <b-form-input id="input-small" size="sm" placeholder="Enter your name" />
      </b-col>
    </b-row>
    <b-row class="my-1 mb-5">
      <label for="input-small">Last Name:</label>
      <b-col cols="2">
        <b-form-input id="input-small" size="sm" placeholder="Enter your name" />
      </b-col>
    </b-row>

    <b-row class="my-5">
      <b-col>
        <label for="input-small">Profile Image:</label>
        <b-col>
          <b-form-file v-model="file" class="mt-3" plain />
        </b-col>
      </b-col>
      <b-col>
        <b-img src="https://picsum.photos/300/300/?image=41" fluid alt="Fluid image" />
      </b-col>
    </b-row>
    <b-button pill variant="primary">
      <span class="btn-label">
        <i class="fas fa-save" />
      </span>
      Update
    </b-button>
  </b-container>
</template>

<script>
export default {
  data: () => ({
    file: null
  })
}
</script>

<style lang="scss" scoped>

</style>
