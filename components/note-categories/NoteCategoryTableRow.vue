<template>
  <tr role="row" class="odd">
    <td
      v-if="noteCategory.category_type === 'category'"
      class="dt-center sorting_1"
    >
      <nuxt-link :to="`/admin-option-note-category-edit/${noteCategory.id}`">{{
        noteCategory.name
      }}</nuxt-link>
    </td>
    <td v-else></td>
    <td
      class="dt-center"
      v-if="
        noteCategory.category_type === 'action' ||
          noteCategory.category_type === 'descriptor'
      "
    >
      <nuxt-link :to="`/admin-option-note-category-edit/${noteCategory.id}`">{{
        noteCategory.parent.name
      }}</nuxt-link>
    </td>
    <td v-else></td>
    <td class="dt-center" v-if="noteCategory.category_type === 'descriptor'">
      <nuxt-link :to="`/admin-option-note-category-edit/${noteCategory.id}`">{{
        noteCategory.name
      }}</nuxt-link>
    </td>
    <td v-else></td>
    <td class="dt-center" v-if="noteCategory.category_type === 'action'">
      <nuxt-link :to="`/admin-option-note-category-edit/${noteCategory.id}`">{{
        noteCategory.name
      }}</nuxt-link>
    </td>
    <td v-else></td>
    <td class="dt-center">
      <i
        v-if="active"
        class="icon active fas fa-circle"
        style="color: green"
      ></i>
      <i v-if="!active" class="icon inactive fas fa-ban"></i>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    noteCategory: Object,
    // category: String,
    // subCategory: String,
    // descriptor: String,
    // action: String,
    active: Boolean
    // id: Number
  }
};
</script>
