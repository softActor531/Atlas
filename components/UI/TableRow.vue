<template>
  <tr role="row" v-bind:class="{ 'even': even, 'odd': !even }">
    <td class="center dt-center sorting_1 text-center">{{ name }}</td>
    <td class="center dt-center text-center">
      <nuxt-link :to="`/roles/${id}`" class="btn btn-secondary btn-xs btn-confirmed">View</nuxt-link>
      <nuxt-link :to="`/roles/${id}/edit`" class="btn btn-primary btn-xs btn-confirmed">Edit</nuxt-link>
      <nuxt-link
        :to="`/roles/${id}/delete`"
        :data-role-id="id"
        class="btn btn-danger btn-xs btn-delete-role"
      >Delete</nuxt-link>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    name: String,
    id: Number,
    even: Boolean
  }
};
</script>