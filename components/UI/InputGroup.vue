<template>
  <div :class="`col-md-${width}`">
    <div class="form-group form-group--error">
      <label :for="id" :class="{ 'text-danger': invalid }">
        {{ label }}
        <code v-if="important">*</code>
      </label>
      <input
        :id="idCopy"
        v-model="idCopy"
        :type="type"
        class="form-control"
        :class="{ 'is-invalid': invalid }"
        :placeholder="placeholder"
        :min="min"
        @change="inputChanged"
        :required="important"
        @input="clicks++"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    width: Number,
    important: Boolean,
    label: String,
    id: String,
    placeholder: String,
    type: String,
    name: String,
    min: Number
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
