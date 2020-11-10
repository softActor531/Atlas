<template>
  <Fragment>
    <tr>
      <td>{{ day }}</td>
      <td>{{ dateSubmitted }}</td>
      <td>{{ followUpDate }}</td>
      <td>{{ commitDate }}</td>
      <td>{{ retentionAction }}</td>
      <td>{{ specialFollowUp }}</td>
      <td>{{ createdBy }}</td>
      <td>
        <span :key="item" v-for="item in sentTo">{{ item }}<br /></span>
      </td>
    </tr>
    <tr class="bottom">
      <td colspan="8">{{ note }}</td>
    </tr>
  </Fragment>
</template>

<script>
import { Fragment } from "vue-fragment";

export default {
  props: {
    day: Number,
    dateSubmitted: String,
    followUpDate: String,
    commitDate: String,
    retentionAction: String,
    specialFollowUp: String,
    createdBy: String,
    sentTo: Array,
    note: String
  },
  components: { Fragment }
};
</script>
