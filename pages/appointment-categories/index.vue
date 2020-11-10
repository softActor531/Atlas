<template>
  <div class="row mt-3">
    <div class="col-md-3">
      <Sidenav />
    </div>
    <div class="col-md-9">
      <h1 class="mt-0">
        Appointment Categories
      </h1>
      <Filters />
      <Table
        :items="items"
        :fields="fields"
        edit-btn
        @edits-entry="handleEditEntry"
        @delete-entry="removeItem"
      >
        <template v-slot:cell(sites)="data">
          <p v-if="!data.item.sites.length">
            N/A
          </p>
          <p v-for="site in data.item.sites" v-else :key="site.id">
            {{ site.district.name }}, {{ site.name }}
          </p>
        </template>

        <template v-slot:cell(duration)="data">
          <p v-if="data.item.duration.type === 'minutes'">
            {{ data.item.duration.payload.minutes }}
            minutes
          </p>
          <p v-for="(text, i) in data.item.duration.payload" v-else :key="i">
            {{ text }}
          </p>
        </template>

        <template v-slot:cell(gc_can_select)="data">
          {{ data.item.gc_can_select === 1 ? 'Yes' : 'No' }}
        </template>

        <template v-slot:cell(active)="data">
          {{ data.item.active === 1 ? 'active' : 'inactive' }}
        </template>
      </Table>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import Sidenav from '../../components/schedule/Sidenav'
import Filters from '../../components/appointment-categories/Filters'
import Table from '../../components/shared/Table'

export default {
  name: 'Appointment',

  components: {
    Sidenav,
    Filters,
    Table
  },
  async asyncData ({ $api }) {
    return await $api.getAppointmentCategories()
      .then((res) => {
        console.log(res)
        return {
          appointmentCategories: res
        }
      })
      .catch(err => console.log(err))
  },
  data () {
    return {
      items: [],
      fields: [
        { key: 'name', label: 'Name' },
        { key: 'sites', label: 'Location(s)' },
        { key: 'duration', label: 'duration' },
        { key: 'gc_can_select', label: 'GC Can Select' },
        { key: 'active', label: 'Active' },
        'Actions'
      ]
    }
  },
  mounted() {
    if (this.appointmentCategories) {
      this.items = this.appointmentCategories
    }
  },
  methods: {
    handleEditEntry (record, index) {
      this.$router.push({ name: 'appointment-categories-id-edit', params: { id: record.id } })
    },
    removeItem (x) {
      Swal.fire({
        title: `This will delete user (${x.first_name})?`,
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.value) {
          this.$axios({
            method: 'DELETE',
            url: `http://atlas-rebuild-api.mtcdevsite.com/api/v1/appointment-categories/${x.id}`
          }).then(async () => {
            await this.$api.getAppointmentCategories()
              .then((res) => {
                console.log(res)
                this.items = res
              })
              .catch(err => console.log(err))
          })
        }
      })
    }
  }
}
</script>

<style scoped>
h1 {
  padding-top: 0 !important;
}
</style>
