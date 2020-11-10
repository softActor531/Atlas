<template>
  <tr onclick="" role="row" class="odd">
    <td class="center dt-center sorting_1">
      {{ first_name }}
    </td>
    <td class="center dt-center">{{ last_name }}</td>
    <td class="center dt-center">{{ district }}</td>
    <td class="center dt-center">{{ school }}</td>
    <td class="center dt-center">
      <nuxt-link title="Activate Student." to="#"
        ><i class="fas fa-check-circle"></i
      ></nuxt-link>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    first_name: String,
    last_name: String,
    district: String,
    school: String
  }
};
</script>
