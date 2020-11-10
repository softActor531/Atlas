<template>
  <div class="col-xs-12" :class="`col-md-${width}`">
    <div class="form-group input birthdate">
      <label :for="id">
        {{ label }}
        <code v-if="important">*</code>
      </label>
      <flat-pickr
        class="date-picker form-control flatpickr-input"
        v-model="idCopy"
        :config="config"
        @change="inputChanged"
      ></flat-pickr>
    </div>
  </div>
</template>

<style scoped></style>

<script>
import flatPickr from "vue-flatpickr-component";
export default {
  props: {
    width: Number,
    label: String,
    id: String,
    name: String,
    important: Boolean
  },
  data() {
    return {
      idCopy: this.id,
      config: {
        dateFormat: "d/m/Y"
      }
    };
  },
  methods: {
    inputChanged: function($event) {
      this.$emit(`${this.name}Changed`, this.idCopy);
    }
  },
  components: {
    flatPickr
  }
};
</script>
