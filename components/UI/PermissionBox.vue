<template>
  <div
    class="custom-control custom-checkbox"
    :class="{ 'col-3 float-left': small }"
    :style="{ clear: both }"
  >
    <input
      type="checkbox"
      class="custom-control-input chkChild"
      :class="group"
      :id="label"
      :value="idCopy"
      v-model="idCopy"
      @change="checkboxChanged"
    />
    <label
      class="custom-control-label"
      :class="{ bolder: !small }"
      :for="label"
    >
      <h5>{{ label }}</h5>
    </label>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    id: Boolean,
    small: Boolean,
    name: String,
    group: String
  },
  data() {
    return {
      both: this.small ? "" : "both",
      idCopy: this.id
    };
  },
  methods: {
    checkboxChanged: function($event) {
      this.$emit(`${this.name}Changed`, this.idCopy);
    }
  }
};
</script>
