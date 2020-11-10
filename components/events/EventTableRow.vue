<template>
  <tr role="row" class="odd">
    <td class="center dt-center sorting_1">{{ student }}</td>
    <td class="center dt-center">{{ site }}</td>
    <td class="center dt-center">{{ event }}</td>
    <td class="center dt-center">{{ created_at }}</td>
  </tr>
</template>

<script>
export default {
  props: {
    student: String,
    site: String,
    event: String,
    created_at: String
  }
};
</script>