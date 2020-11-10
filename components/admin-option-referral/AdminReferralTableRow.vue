<template>
  <tr onclick="#" role="row" class="even">
    <td class="dt-center sorting_1">{{ group }}</td>
    <td class="dt-center">{{option}}</td>
    <td class="dt-center">
      <i v-if="active" class="icon active fas fa-circle"></i>
      <i v-if="!active" class="icon inactive fas fa-ban"></i>
    </td>
    <td class="dt-center">
      <nuxt-link
        type="button"
        class="btn btn-primary"
        onclick="productUpdate();"
        :to="`/admin-option-referral-edit/${id}`"
      >Edit</nuxt-link>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    group: String,
    option: String,
    active: Boolean,
    id: Number
  }
};
</script>