<template>
  <div class="form-group" :class="`col-md-${width}`">
    <label :for="id" :class="{ 'text-danger': invalid }">
      {{ label }}
      <code v-if="important">*</code>
    </label>
    <select
      :id="id"
      class="form-control"
      v-model="idCopy"
      @change="inputChanged"
      :required="important"
      :class="{ 'is-invalid': invalid }"
      @input="clicks++"
    >
      <option value disabled>{{ placeholder }}</option>
      <option v-for="element in array" :key="element" :value="element">
        {{ element }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    width: String,
    important: Boolean,
    label: String,
    id: String,
    array: Array,
    name: String,
    placeholder: String
  },
  data() {
    return {
      idCopy: this.id,
      clicks: 0
    };
  },
  methods: {
    inputChanged: function($event) {
      this.$emit(`${this.name}Changed`, this.idCopy);
    }
  },
  computed: {
    invalid: function() {
      if (this.important) {
        if (this.clicks > 0) {
          if (this.idCopy === "" || this.idCopy === null) {
            return true;
          }
          return false;
        } else {
          return false;
        }
      }
    }
  }
};
</script>
