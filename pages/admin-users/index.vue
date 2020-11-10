<template>
  <b-container>
    <h4 class="title">
      User Info / Access
    </h4>
    <b-col offset-md="10" class="mb-3">
      <b-button
        variant="primary"
        pill
        @click="
          $router.push({ name: 'admin-users-edit-id', params: { id: 'new' } })
        "
      >
        <span class="btn-label">
          <i class="fa fa-plus-circle" />
        </span>
        Add New
      </b-button>
    </b-col>

    <!-- Datatable -->
    <Table
      :items="items"
      :fields="fields"
      hoverable
      enable-search
      edit-btn
      disable-delete-btn
      :activate-btn="activate"
      :deactivate-btn="deactivate"
      @activate-entry="handleActivateEntry"
      @deactivate-entry="handleDeactivateEntry"
      @edit-entry="handleEditEntry"
      @delete-entry="handleDeleteEntry"
    >
      <template v-slot:cell(active)="row">
        <i
          :class="
            row.item.active === false
              ? 'fas fa-ban fa-sm text-danger'
              : 'fas fa-circle text-success'
          "
        />
      </template>
      <template v-slot:cell(created_at)="data">
        {{ data.value | moment("DD/MM/YYYY, h:mm:ss a") }}
      </template>
    </Table>
  </b-container>
</template>

<script>
import Swal from 'sweetalert2'
import Table from '../../components/shared/Table.vue'

export default {
  components: {
    Table
  },
  async asyncData ({ $api, $axios, $formatter, error, $emit }) {
    const usersPayload = await $api
      .getUsers()
      .then(data => data)
      .catch(err => console.log(err))
    console.log(usersPayload)

    return {
      users: usersPayload
    }
  },
  data () {
    console.log('store ', this.$store.state.fields)
    return {
      district_label: this.$store.state.fields.length > 0 ? this.$store.state.fields.find((element) => {
        return element.base_name === 'District'
      }).custom_name : "Distrcit",
      fields: [
        { key: 'first_name', label: 'First', sortable: true },
        { key: 'last_name', label: 'Last', sortable: true },
        { key: 'email', label: 'Email', sortable: true },
        {
          key: 'districts[0].name',
          label: 'district',
          sortable: true
        },
        { key: 'role.name', label: 'User Role', sortable: true },
        { key: 'title', label: 'Title', sortable: true },
        { key: 'active', label: 'Active', sortable: true },
        { key: 'created_at', label: 'Created At', sortable: true },
        { key: 'actions', label: 'Actions' }
      ],
      isBusy: true,
      items: [],
      activate: false,
      deactivate: false
    }
  },
  mounted () {
    if (this.users.length) {
      this.items = this.users
      // this.isBusy = false
      this.items.forEach((item) => {
        if (item.active === false) {
          this.activate = true
          this.deactivate = false
        } else {
          this.activate = false
          this.deactivate = true
        }
      })
    }

    this.$on('users', (usersPayload) => {
      console.log(usersPayload)
    })
  },
  methods: {
    handleEditEntry (record, index) {
      this.$router.push({
        name: 'admin-users-edit-id',
        params: { id: `${record.id}` }
      })
    },
    handleActivateEntry (record, index) {
      console.log(record)
    },
    handleDeactivateEntry (record, index) {
      console.log(record)
    },
    // DO NOT REMOVE! This is if we need Deletion in the future
    handleDeleteEntry (x) {
      Swal.fire({
        title: `This will delete user (${x.first_name})?`,
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(async (result) => {
        if (result.value) {
          await this.$axios
            .$delete(
              `http://atlas-rebuild-api.mtcdevsite.com/api/v1/users/${x.id}`
            )
            .then(async () => {
              Swal.fire(
                'Deleted!',
                `User (${x.first_name}) has been deleted!`,
                'success'
              )
              await this.$axios
                .$get('http://atlas-rebuild-api.mtcdevsite.com/api/v1/users')
                .then((payload) => {
                  this.items = payload.data
                })
                .catch((err) => {
                  Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `could not retreive data! => ${err}`
                  })
                })
            })
            .catch((err) => {
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `Delete request failed! => ${err}`
              })
            })
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
