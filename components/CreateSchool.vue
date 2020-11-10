<template>
  <div class="card my-4">
    <div class="card-body">
      <div class="row">
        <InputGroup
          :id="email"
          :width="width"
          :important="false"
          :label="label"
          :type="type"
          :placeholder="placeholder"
        />
        <div class="col-md-2 offset-md-4 align-self-center mt-1">
          <a href="#" class="btn btn-secondary btn-xs btn-confirmed">Edit</a>
          <a href="#" class="btn btn-primary btn-xs btn-confirmed">Create</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InputGroup from "../components/UI/InputGroup.vue";

export default {
  name: "CreateSchool",
  components: {
    InputGroup
  },
  props: {
    width: {
      type: Number,
      default: 6
    },
    important: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: 'Email'
    },
    id: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: 'Email'
    },
    type: {
      type: String,
      default: 'email'
    }
  }
};
</script>

<style scoped>
</style>
