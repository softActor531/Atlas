<template>
  <v-select
    v-model="valueCopy"
    :placeholder="placeholder"
    :options="items"
    :reduce="item => item.id"
    label="name"
    value="id"
    item-value="id"
    @input="inputChanged"
  >
    <template #open-indicator="{ attributes }">
      <span v-bind="attributes">
        <slot name="icon">
          <i class="fas fa-chevron-down" />
        </slot>
      </span>
    </template>
  </v-select>
</template>
<script>
export default {
  name: "SelectInput",
  props: {
    items: {
      type: Array,
      default: () => []
    },
    placeholder: {
      type: String,
      default: null
    },
    value: {
      type: String,
      default: ""
    },
    index: {
      type: Number,
      default: -1
    }
  },
  data() {
    return {
      valueCopy: this.value
    };
  },
  methods: {
    inputChanged() {
      this.$emit(`choice${this.index}Changed`, this.valueCopy);
      this.$emit("notifyParent", this.valueCopy);
    }
  }
};
</script>
