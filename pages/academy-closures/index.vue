<template>
  <div class="row mt-3">
    <div class="col-md-3">
      <Sidenav />
    </div>
    <div class="col-md-9">
      <h1 class="mt-0 pt-0">
        Academy Closures
      </h1>
      <Filters @click-filter="handleFilter" />
      <Table
        :items="items"
        :fields="fields"
        hoverable
        edit-btn
        @edits-entry="handleEditEntry"
        @delete-entry="handleDeleteEntry"
      >
        <template v-slot:cell(sites)="data">
          <span v-for="(item, index) in data.value" :key="index">
            {{ item.district.name }}
          </span>,
        </template>

        <template v-slot:cell(all_day)="data">
          {{ data.value === 0 ? 'No' : 'Yes' }}
        </template>
        <template v-slot:cell(available_on_site)="data">
          {{ data.value === 0 ? 'No' : 'Yes' }}
        </template>
        <template v-slot:cell(available_virtually)="data">
          {{ data.value === 0 ? 'No' : 'Yes' }}
        </template>
        <template v-slot:cell(active)="data">
          {{ data.value === 0 ? 'No' : 'Yes' }}
        </template>
      </Table>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import Sidenav from '../../components/schedule/Sidenav'
import Filters from '../../components/academy-closures/Filters'
import Table from '../../components/shared/Table'

export default {
  components: {
    Table
  },
  async asyncData ({ $axios, $formatter }) {
    return await $axios.$get('http://atlas-rebuild-api.mtcdevsite.com/api/v1/academy-closures?include=sites.district')
      .then((data) => {
        const des = $formatter.deserialize(data)
        console.log(des)
        return {
          academyClosures: des
        }
      })
      .catch(e => console.log(e))
  },
  data () {
    return {
      fields: [
        { key: 'sites', label: 'District' },
        { key: 'name', label: 'Name' },
        { key: 'type', label: 'Type' },
        { key: 'start_date', label: 'Start Date' },
        { key: 'end_date', label: 'End Date' },
        { key: 'start_time', label: 'Start Time' },
        { key: 'end_time', label: 'End Time' },
        { key: 'all_day', label: 'All Day' },
        { key: 'available_on_site', label: 'Available on Site' },
        { key: 'available_virtually', label: 'Available Virtually' },
        { key: 'active', label: 'Active' },
        'Actions'
      ],
      items: []
    }
  },
  mounted () {
    if (this.academyClosures) {
      this.items = this.academyClosures
    }
  },
  methods: {
    handleFilter (link) {
      this.$axios({
        method: 'GET',
        url: link,
        headers: {
          Accept: 'application/vnd.api+json',
          'Content-Type': 'application/vnd.api+json'
        }
      })
        .then((data) => {
          const des = this.$formatter.deserialize(data)
          this.items = des
        })
        .catch((e) => {
          this.items = []
          console.log(e)
        })
    },
    handleEditEntry (record, index) {
      this.$router.push({ name: 'academy-closures-id-edit', params: { id: record.id } })
    },
    handleDeleteEntry (record) {
      Swal.fire({
        title: `This will delete user (${record.name})?`,
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(async (result) => {
        await this.$axios({
          method: 'DELETE',
          url: `http://atlas-rebuild-api.mtcdevsite.com/api/v1/academy-closures/${record.id}`
        }).then(async () => {
          Swal.fire(
            'Request Success!',
          `Deleted Closure ${record.name}!`,
          'success'
          )

          await this.$axios.$get('http://atlas-rebuild-api.mtcdevsite.com/api/v1/academy-closures?include=sites.district')
            .then((data) => {
              const des = this.$formatter.deserialize(data)
              console.log(des)
              this.items = des
            })
            .catch(e => console.log(e))
        })
      })
        .catch((e) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: e.message
          })
        })
    }
  }
}
</script>
