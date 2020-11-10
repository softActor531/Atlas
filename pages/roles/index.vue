<template>
  <div>
    <h3 class="title">
      Roles
    </h3>
    <b-button
      variant="primary"
      class="mb-3"
      pill
      @click="$router.push('/roles/create')"
    >
      <span class="btn-label">
        <i class="fa fa-plus-circle" />
      </span>
      Add Role
    </b-button>

    <Table
      hoverable
      :items="items"
      :fields="fields"
      @row-clicked="handleRowClicked"
      @delete-entry="handleDeleteEntry"
    />
  </div>
</template>

<style scoped>
@import url("https://cdn.datatables.net/responsive/2.1.1/css/dataTables.responsive.css");
@import url("https://cdn.datatables.net/1.10.21/css/jquery.dataTables.min.css");
@import url("https://cdn.datatables.net/1.10.21/css/dataTables.bootstrap4.min.css");
</style>

<script>
import Swal from 'sweetalert2'
import Table from '../../components/shared/Table.vue'

export default {
  components: {
    Table
  },
  async asyncData ({ $axios }) {
    try {
      const roles = await $axios.$get('http://atlas-rebuild-api.mtcdevsite.com/api/v1/roles')
      return {
        items: roles.data
      }
    } catch (e) {
      console.log(e)
    }
  },
  data () {
    return {
      fields: [
        { key: 'attributes.name', label: 'Name' },
        'actions'
      ]
    }
  },
  methods: {
    handleRowClicked (record, index) {
      this.$router.push({ name: 'roles-id-edit', params: { id: `${record.id}`, record } })
    },
    handleDeleteEntry (x) {
      console.log(x)
      // const roleName = x.attributes.name
      Swal.fire({
        title: `This will delete role (${x.attributes.name})`,
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(async (result) => {
        if (result.value) {
          await this.$axios.$delete(`http://atlas-rebuild-api.mtcdevsite.com/api/v1/roles/${x.id}`)
            .then(async () => {
              Swal.fire(
                'Request successful!',
                `Deleted role (${x.attributes.name})!`,
                'success'
              )
              await this.$axios.$get('http://atlas-rebuild-api.mtcdevsite.com/api/v1/roles')
                .then((p) => {
                  this.items = p.data
                })
                .catch((err) => {
                  Swal.fire({
                    icon: 'error',
                    title: 'Could not refresh table',
                    text: `${err}`
                  })
                })
            })
        }
      })
        .catch((err) => {
          Swal.fire({
            icon: 'error',
            title: 'Could not process request',
            text: `${err}`
          })
        })
    }
  }
}
</script>
