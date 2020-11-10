<template>
  <div>
    <b-form-group
      label="From"
    >
      <b-form-select
        v-model="computedFromOption"
        :options="list"
        @input="handleFromSelect"
      />
    </b-form-group>
    <b-form-group
      label="To"
    >
      <b-form-select
        v-model="computedToOption"
        :options="list"
        @input="handleToSelect"
      />
    </b-form-group>
    <div v-if="repeat" class="form-group">
      <button
        class="btn btn-blue repeat-day"
        type="button"
        data-day="monday"
        @click="repeatWeek"
      >
        Repeat every weekday
      </button>
    </div>
  </div>
</template>

<script>
import { appointments } from "@/store/constants/defaultValues";

export default {
  props: {
    from: String,
    to: String,
    repeat: Boolean,
    day: String,
  },
  data() {
    return {
      list: appointments,
      fromOption: this.from,
      toOption: this.to
    }
  },
  computed: {
    computedFromOption: {
      get() {
        return this.from;
      },
      set(val) {
        this.fromOption = val;
      }
    },

    computedToOption: {
      get() {
        return this.to;
      },
      set(val) {
        this.toOption = val;
      }
    },
  },
  methods: {
    repeatWeek() {
      this.$emit("repeatWeek", { from: this.fromOption, to: this.toOption });
    },

    handleFromSelect() {
      this.$emit("handleSelect", { type: "from", value: this.fromOption, day: this.day })
    },

    handleToSelect() {
      this.$emit("handleSelect", { type: "to", value: this.toOption, day: this.day })
    },
  }
}
</script>
