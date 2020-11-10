<template>
  <b-form-group>
    <template
      v-for="checkboxSlot in Object.keys($scopedSlots)"
      v-slot:[checkboxSlot]="slotScope"
    >
      <slot :name="checkboxSlot" v-bind="slotScope" />
    </template>

    <template v-slot:label>
      <label v-if="wrapperLabel" for="school_id" class="col-6 control-label">
        {{ wrapperLabel }}
      </label>
      <b-form-checkbox
        v-model="allSelectedBoolean"
        :indeterminate="indeterminate"
        aria-describedby="elementId"
        aria-controls="elementId"
        :disabled="disable"
        @change="toggleAll"
        >{{ checkboxLabel }}</b-form-checkbox
      >
    </template>

    <div class="row">
      <b-form-checkbox-group
        :id="elementId"
        v-model="selectedOpts"
        name="elementId"
        class="ml-4"
        aria-label="permissions"
      >
        <b-form-checkbox
          :key="index"
          v-for="(option, index) in options"
          :value="option"
          class="col-md-3"
          >{{ option }}</b-form-checkbox
        >
      </b-form-checkbox-group>
    </div>
  </b-form-group>
</template>

<script>
export default {
  name: "PermissionsGroup",
  props: {
    wrapperLabel: {
      type: String,
      default: null
    },
    checkboxLabel: {
      type: String,
      default: null
    },
    elementId: {
      type: String,
      default: null
    },
    options: {
      type: Array,
      default: null
    },
    userPreSelected: {
      type: Array,
      default: null
    },
    disable: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      allSelectedBoolean: false,
      indeterminate: false,
      selectedOpts: this.userPreSelected || []
    };
  },
  watch: {
    selectedOpts(newVal, oldVal) {
      // Handle changes in individual checkboxes
      if (newVal.length === 0) {
        this.indeterminate = false;
        this.allSelectedBoolean = false;
      } else if (newVal.length === this.options.length) {
        this.indeterminate = false;
        this.allSelectedBoolean = true;
      } else {
        this.indeterminate = true;
        this.allSelectedBoolean = false;
      }
      this.$emit("checked-new", { group: this.checkboxLabel, data: newVal });
    }
  },
  methods: {
    toggleAll(checked) {
      this.selectedOpts = checked ? this.options.slice() : [];
      console.log(this.selectedOpts);
    }
  }
};
</script>

<style lang="scss" scoped></style>
