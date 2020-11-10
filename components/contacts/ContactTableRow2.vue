<template>
  <tr role="row" class="odd">
    <td class="center dt-center sorting_1">{{ date }}</td>
    <td class="center dt-center">
      {{ action }}
    </td>
    <td class="center dt-center">{{ note }}</td>
    <td class="center dt-center">{{ phase }}</td>
    <td class="center dt-center">{{ status }}</td>
    <td class="center dt-center">{{ created_by }}</td>
    <td class="center dt-center">{{ sent_to }}</td>
  </tr>
</template>

<script>
export default {
  props: {
    date: String,
    action: String,
    note: String,
    phase: String,
    status: String,
    created_by: String,
    sent_to: String
  }
};
</script>
