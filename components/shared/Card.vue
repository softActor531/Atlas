<template>
  <div class="card">
    <div class="card-header bg-white">
      <div class="card-body" :class="headerColor ? `bg-${headerColor}` : 'bg-white'">
        <h4 v-if="cardTitle" class="m-0 pt-0 mb-4">
          <!-- <i class="mdi mdi-format-list-bulleted mr-1 text-primary"/> -->
          {{ cardTitle }}
        </h4>
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    cardTitle: {
      type: String,
      default: null
    },
    headerColor: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
