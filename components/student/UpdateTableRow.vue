<template>
  <tr onclick="" role="row" class="odd">
    <td class="center dt-center sorting_1">
      {{ id }}
    </td>
    <td class="center dt-center">{{ fields_number }}</td>
    <td class="center dt-center">{{ fields }}</td>
    <td class="center dt-center">{{ status }}</td>
    <td class="center dt-center">{{ createed_date }}</td>
    <td class="center dt-center">{{ action }}</td>
  </tr>
</template>

<script>
export default {
  props: {
    fields_number: String,
    fields: String,
    status: String,
    created_date: String,
    id: String,
    action: String
  }
};
</script>
