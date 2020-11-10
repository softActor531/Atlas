<template>
  <tr role="row" class="odd">
    <td class="center dt-center sorting_1">{{ id }}</td>
    <td class="center dt-center">
      <nuxt-link :to="`/plp/student-view/${studentId}/${id}`">{{
        planName
      }}</nuxt-link>
    </td>
    <td class="center dt-center">
      <nuxt-link
        class="btn btn-success waves-effect waves-light"
        title="Edit Student's Plan."
        :to="`/plp/student-edit/${studentId}/${id}`"
      >
        <i class="mdi mdi-square-edit-outline"></i>
      </nuxt-link>
      <nuxt-link
        class="btn btn-blue waves-effect waves-light"
        title="Export Student's Plan in CSV."
        to="#"
      >
        <i class="mdi mdi-file-export"></i>
      </nuxt-link>
      <nuxt-link
        class="btn btn-info waves-effect waves-light"
        title="View Student's Plan."
        :to="`/plp/student-view/${studentId}/${id}`"
      >
        <i class="mdi mdi-eye"></i>
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
    status: String,
    studentId: Number
  }
};
</script>
