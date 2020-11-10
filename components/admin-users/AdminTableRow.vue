<template>
  <tr
    onclick="window.document.location='https://dev.accelerationacademy.net/admin-users-edit.php?id=1485';"
    role="row"
    class="odd"
  >
    <td class="dt-center sorting_1">{{ first }}</td>
    <td class="dt-center">{{ last }}</td>
    <td class="dt-center">{{ email }}</td>
    <td class="dt-center">
      <em>{{ district }}</em>
    </td>
    <td class="dt-center">{{ userRole }}</td>
    <td class="dt-center">{{ title }}</td>
    <td class="dt-center">
      <i v-if="active" class="icon active fas fa-circle" style="color: #2AE809"></i>
      <i v-if="!active" class="icon inactive fas fa-ban" style="color: #B10D0D"></i>
    </td>
  </tr>
</template>

<script>
export default {
  props:{
    first: String,
    last: String,
    email: String,
    district: String,
    userRole: String,
    title: String,
    active: Boolean
  }
};
</script>