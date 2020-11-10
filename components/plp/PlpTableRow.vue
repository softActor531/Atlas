<template>
  <tr role="row" class="odd">
    <td class="center dt-center sorting_1">{{ id }}</td>
    <td class="center dt-center">
      <nuxt-link :to="`/plp/edit/${id}`">{{ planName }}</nuxt-link>
    </td>
    <td class="center dt-center">{{ district }}</td>
    <td v-if="status == 'active'" class="center dt-center">
      <nuxt-link class="link" title="Deactivate Plan." :to="`/plp/edit/${id}`">
        <i class="fas fa-ban"></i>
      </nuxt-link>
    </td>
    <td v-if="status == 'inactive'" class="center dt-center">
      <nuxt-link title="Activate Plan." :to="`/plp/edit/${id}`">
        <i class="far fa-check-circle"></i>
      </nuxt-link>
    </td>
    <td v-if="status == 'draft'" class="center dt-center">
      <nuxt-link title="Edit Plan." :to="`/plp/edit/${id}`">
        <i class="fas fa-pencil-alt"></i>
      </nuxt-link>
      <nuxt-link title="Activate Plan." :to="`/plp/edit/${id}`">
        <i class="far fa-check-circle"></i>
      </nuxt-link>
    </td>
    <td class="center dt-center">{{ status }}</td>
  </tr>
</template>

<script>
export default {
  props: {
    id: Number,
    planName: String,
    district: String,
    status: String
  }
};
</script>
