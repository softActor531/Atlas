<template>
  <div class="container">
    <h4 class="m-0 pt-0 page-title mb-3 mt-3">
      <!-- <i class="mdi mdi-format-list-bulleted mr-1 text-primary" /> -->
      User Info / Access
    </h4>
    <div class="card">
      <div class="card-body">
        <div class="text-right">
          <a class="btn text-white btn-primary btn-rounded waves-effect waves-light" @click="createUser">
            <i class="fa fa-plus-circle" /> Create new User
          </a>
        </div>

        <!-- main datatable -->
        <div class="container">
          <div id="basic-datatable_wrapper" class="dataTables_wrapper dt-bootstrap4 no-footer">
            <div class="row mt-2">
              <div class="col-sm-12">
                <table id="basic-datatable" class="table dt-responsive nowrap w-100">
                  <!-- head -->
                  <thead>
                    <tr role="row" style="height: 0px;">
                      <th
                        v-for="field in fields"
                        :key="field.key"
                      >
                        {{ field.label }}
                      </th>
                      <!-- if user required actions -->
                      <th
                        v-if="actions"
                      >
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <!-- ./head -->
                  <!-- body -->
                  <tbody>
                    <tr
                      v-for="item in items"
                      :key="item.id"
                      role="row"
                      @click="navigateToEl(item)"
                    >
                      <td v-for="field in fields" :key="field.key">
                        {{ item[field.key] }}
                      </td>
                      <td v-if="actions">
                        <a class="btn btn-primary btn-xs btn-confirmed text-white">
                          <i class="mdi mdi-square-edit-outline" />
                        </a>
                        <a class="btn btn-danger text-white btn-xs btn-confirmed btn-delete-capacity" data-capacity-id="15" @click="deleteEntry(item)">
                          <i class="fa fa-trash" />
                        </a>
                      </td>
                    </tr>
                  </tbody>
                  <!-- ./body -->
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: null
    },
    fields: {
      type: Array,
      default: null
    },
    actions: {
      type: Boolean,
      default: false
    }
  },
  mounted () {
    $('#basic-datatable').DataTable({
      responsive: true
    })
  },
  methods: {
    navigateToEl (x) {
      this.$router.push(`admin-users-edit/${x.id}`)
    },
    createUser () {
      this.$router.push('admin-users-edit/new')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
