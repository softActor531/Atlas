<template>
  <div class="col-12" :class="`col-md-${width} d-flex`" align-items:center>
    <div class="form-group mb-3">
      <div class="custom-control custom-checkbox">
        <input
          :id="label"
          type="checkbox"
          class="custom-control-input"
          :value="idCopy"
          v-model="idCopy"
          @change="checkboxChanged"
          checked="false"
        />
        <label class="custom-control-label" :for="label">{{ label }}</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    width: Number,
    id: Boolean,
    label: String
  },
  data() {
    return {
      idCopy: this.id
    };
  },
  methods: {
    checkboxChanged: function($event) {
      this.$emit(`${this.id}Changed`, this.idCopy);
    }
  }
};
</script>
