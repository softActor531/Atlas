<template>
  <div>
    <div class="fields width-100">
      <div class="form-group col-xs-12 col-md-6 mb-3">
        <label class="required">{{fromTextLabel}} <code v-if="important">*</code></label>
        <DatePicker />
      </div>
    </div>
    <div class="fields width-100">
      <div class="form-group col-xs-12 col-md-6 mb-3">
        <label class="required">{{toTextLabel}} <code v-if="important">*</code></label>
        <DatePicker />
      </div>
    </div>
  </div>
</template>

<script>
import DatePicker from "../UI/DatePicker";

export default {
  props: ["fromTextLabel", "toTextLabel"],
  components: {
    DatePicker
  }
};
</script>
