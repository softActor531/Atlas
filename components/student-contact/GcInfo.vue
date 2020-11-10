<template>
  <p class="text-muted mb-2 font-13">
    <strong>{{ label }}:</strong>
    <span class="ml-2">{{ id }}</span>
  </p>
</template>

<script>
export default {
  props: {
    label: String,
    id: String
  }
};
</script>
