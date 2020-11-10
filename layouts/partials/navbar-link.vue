<template>
  <li :class="hasSubMenu && 'has-submenu'">
    <nuxt-link :to="to">
      <slot />
      <div v-if="hasSubMenu" class="arrow-down" />
    </nuxt-link>
    <ul v-if="hasSubMenu" class="submenu">
      <slot name="submenu" />
    </ul>
  </li>
</template>
<script>
export default {
  props: {
    to: {
      type: String,
      default: '#'
    }
  },
  computed: {
    hasSubMenu (vm) {
      return !!vm.$slots.submenu?.length
    }
  }
}
</script>
