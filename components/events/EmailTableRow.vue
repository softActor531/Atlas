<template>
  <tr role="row" class="odd">
    <td class="center dt-center sorting_1">{{ datetime }}</td>
    <td class="center dt-center">{{ page }}</td>
    <td class="center dt-center">{{ user }}</td>
    <td class="center dt-center">{{ to }}</td>
    <td class="center dt-center">{{ from }}</td>
    <td class="center dt-center">{{ subject }}</td>
  </tr>
</template>

<script>
export default {
  props: {
    datetime: String,
    page: String,
    user: String,
    to: String,
    from: String,
    subject: String
  }
};
</script>