<template>
  <Fragment>
    <tr>
      <td>{{ checkIn }}</td>
      <td>{{ checkOut }}</td>
      <td>{{ absence }}</td>
      <td>{{ nextDateCommited }}</td>
      <td class="v-middle noPrint" rowspan="2">
        <nuxt-link class="btn btn-blue waves-effect waves-light" to="#">
          <i class="mdi mdi-calendar-edit" aria-hidden="true"></i>
        </nuxt-link>
      </td>
    </tr>
    <tr>
      <td colspan="4">
        <span class="title">Note: {{ note }}</span>
      </td>
    </tr>
  </Fragment>
</template>

<script>
import { Fragment } from "vue-fragment";
export default {
  props: {
    checkIn: String,
    checkOut: String,
    absence: String,
    nextDateCommited: String,
    note: String
  },
  components: { Fragment }
};
</script>
