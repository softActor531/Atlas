<template>
  <tr onclick role="row" class="odd">
    <td class="center dt-center sorting_1">{{ student }}</td>
    <td class="center dt-center">{{ site }}</td>
    <td class="center dt-center">{{ notification_type }}</td>
    <td class="center dt-center">{{ created_at }}</td>
    <td class="center dt-center">{{ sent }}</td>
  </tr>
</template>

<script>
export default {
  props: {
    site: String,
    notification_type: String,
    created_at: String,
    sent: String,
    student: String
  }
};
</script>
