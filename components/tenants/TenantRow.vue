<template>
  <tr role="row" class="odd">
    <td class="center dt-center sorting_1">{{ id }}</td>
    <td class="center dt-center">
      <nuxt-link :to="`/tenant-users/${id}`">{{ tenantName }}</nuxt-link>
    </td>
    <td class="center dt-center">{{ initialUser }}</td>
    <td class="center dt-center">{{ systemHierarchy }}</td>
  </tr>
</template>

<script>
export default {
  props: {
    id: Number,
    tenantName: String,
    initialUser: String,
    systemHierarchy: String,
  },
};
</script>
