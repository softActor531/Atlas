<template>
  <div class="col-sm-6 col-xl-2">
    <div class="p-2 text-center">
      <i :class="iconStyle"></i>
      <p class="text-muted font-15 mb-0">{{ label }}</p>
      <h5>
        <span>{{ value }}</span>
      </h5>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    value: String,
    iconStyle: String
  }
};
</script>