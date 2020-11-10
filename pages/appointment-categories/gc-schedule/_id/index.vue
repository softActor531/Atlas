<template>
  <b-container tag="b-row">
    <div class="col-md-3">
      <Sidenav />
    </div>
    <div class="col-md-9">
      <h1 class="mt-0">
        GC Schedule
      </h1>

      <ScheduleForm
        :form="form"
        :gcs="gcs"
        :appointCats="appointsCats"
      />
    </div>
  </b-container>
</template>

<script>
import { validationMixin } from 'vuelidate'

export default {
  mixins: [validationMixin],
  async asyncData ({ $api, $axios, $formatter }) {
    const allgcs = await $api.getStudents()
    const filtered = await Promise.resolve(allgcs.map(g => { return { name: g.first_name + ' ' + g.last_name } }))

    const appointsCats = await $axios.$get('http://atlas-rebuild-api.mtcdevsite.com/api/v1/appointment-categories?include=sites.district')
      .then(data => $formatter.deserialize(data))

    console.log(appointsCats)

    return {
      gcs: filtered,
      appointsCats
    }
  },
  data () {
    return {
      form: {
        gc: null,
        typeOption: null,
        taskOption: null,
        appointment: null
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
