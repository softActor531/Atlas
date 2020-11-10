<template>
  <main>
    <div>
      <h1>Note Category Options</h1>
      <div class="col-12">
        <div class="row">
          <div class="col-sm-12 col-md-3">
            <div class="form-group">
              <label class="required">Category</label>
              <select
                id="groups"
                v-model="category"
                class="form-control options-notes-category"
                @change="getSubCategories"
              >
                <option value disabled selected>
                  --Select--
                </option>
                <option
                  v-for="(category, key) in categories"
                  :key="key"
                  :value="category.id"
                >
                  {{ category.name }}
                </option>
              </select>
            </div>
          </div>
          <div class="col-sm-12 col-md-3">
            <div class="form-group">
              <label class="required">Sub Category</label>
              <select
                id="groups"
                v-model="sub_category"
                class="form-control sub-cat"
                name="sub_category_id"
                @change="getRelativeDescriptors"
              >
                <option value disabled selected>
                  --Select--
                </option>
                <option
                  v-for="(subCategory, key) in subCategories"
                  :key="key"
                  :value="subCategory.id"
                >
                  {{ subCategory.name }}
                </option>
              </select>
            </div>
          </div>
          <div class="form-group col-md-3">
            <label>Active</label>
            <select v-model="active" class="form-control" name="active">
              <option disabled value>
                -- Select --
              </option>
              <option value="1">
                Active
              </option>
              <option value="0">
                Disabled
              </option>
            </select>
          </div>
          <div class="form-group col-md-3" />
          <div class="col-sm-12 col-md-3">
            <div class="form-group">
              <label class="required">Descriptor</label>
              <select
                id="descriptor"
                v-model="descriptor"
                class="form-control descriptor"
                name="descriptor_id"
                @change="getRelativeActions"
              >
                <option value disabled selected>
                  --Select--
                </option>
                <option
                  v-for="(descriptor, key) in descriptors"
                  :key="key"
                  :value="descriptor.id"
                >
                  {{ descriptor.name }}
                </option>
              </select>
            </div>
          </div>
          <div class="col-sm-12 col-md-3">
            <div class="form-group">
              <label class="required">Action</label>
              <select
                id="descriptor"
                v-model="action"
                class="form-control descriptor"
                name="descriptor_id"
              >
                <option value disabled>
                  --Select--
                </option>
                <option
                  v-for="(action, key) in actions"
                  :key="key"
                  :value="action.id"
                >
                  {{ action.name }}
                </option>
              </select>
            </div>
          </div>
          <div class="col-md-12">
            <input
              type="submit"
              class="btn btn-success"
              value="Apply Filters"
              @click="applyFilters"
            >
          </div>
        </div>
      </div>
    </div>
    <div class="card mt-3">
      <div class="card-body">
        <nuxt-link
          class="btn btn-primary btn-rounded waves-effect waves-light mb-2"
          style="float: left"
          to="/admin-option-note-category-create"
        >
          <i class="fas fa-plus-circle" aria-hidden="true" />
          Create New
        </nuxt-link>
        <div
          id="DataTables_Table_0_wrapper"
          class="dataTables_wrapper dt-bootstrap4 no-footer"
        >
          <div class="row">
            <div class="col-sm-12">
              <table
                id="DataTables_Table_0"
                class="noSearch noSort clickable zebra table mt-4 schedule dataTable no-footer"
                role="grid"
                aria-describedby="DataTables_Table_0_info"
              >
                <thead>
                  <tr role="row">
                    <th
                      class="dt-center sorting_asc"
                      tabindex="0"
                      aria-controls="DataTables_Table_0"
                      rowspan="1"
                      colspan="1"
                      aria-sort="ascending"
                      aria-label="Category: activate to sort column descending"
                      style="width: 262px;"
                    >
                      Category
                    </th>
                    <th
                      class="dt-center sorting"
                      tabindex="0"
                      aria-controls="DataTables_Table_0"
                      rowspan="1"
                      colspan="1"
                      aria-label="Sub Category: activate to sort column ascending"
                      style="width: 259.6px;"
                    >
                      Sub Category
                    </th>
                    <th
                      class="dt-center sorting"
                      tabindex="0"
                      aria-controls="DataTables_Table_0"
                      rowspan="1"
                      colspan="1"
                      aria-label="Descriptor: activate to sort column ascending"
                      style="width: 262px;"
                    >
                      Descriptor
                    </th>
                    <th
                      class="dt-center sorting"
                      tabindex="0"
                      aria-controls="DataTables_Table_0"
                      rowspan="1"
                      colspan="1"
                      aria-label="Action: activate to sort column ascending"
                      style="width: 210px;"
                    >
                      Action
                    </th>
                    <th
                      class="dt-center sorting"
                      tabindex="0"
                      aria-controls="DataTables_Table_0"
                      rowspan="1"
                      colspan="1"
                      aria-label="Active: activate to sort column ascending"
                      style="width: 62px;"
                    >
                      Active
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <NoteCategoryTableRow
                    v-for="(noteCategory, index) of noteCategories"
                    :id="noteCategory.id"
                    :key="index"
                    :note-category="noteCategory"
                    :category="noteCategory.name"
                    :active="noteCategory.is_active === 1"
                  />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Table from '../../components/shared/Table.vue'
import NoteCategoryOptions from '../../components/admin-option-note-category/NoteCategoryOptions'

import Api from '../../services/api/Api'

export default {
  name: 'Index',
  components: {
    NoteCategoryOptions,
    Table
  },
  async asyncData (context) {
    const api = new Api(context)
    const categories = await api.getCategories()
    const noteCategories = await api.getNoteCategories()
    return {
      categories,
      noteCategories,
      api
    }
  },
  data () {
    return {
      subCategories: [],
      descriptors: [],
      actions: [],
      category: '',
      active: '',
      sub_category: '',
      descriptor: '',
      action: ''
    }
  },
  mounted () {
    // if (!this.$store.state.permissions.includes("Edit GC Notes")) {
    //   this.$router.push("/unauthorized");
    // }
    // if (!this.$store.state.modules.includes("case_management_notes")) {
    //   throw new Error();
    // }
    $('form').submit(false)
    const script = document.createElement('script')
    script.setAttribute(
      'src',
      'https://cdn.datatables.net/1.10.21/js/jquery.dataTables.min.js'
    )
    document.head.appendChild(script)

    const script2 = document.createElement('script')
    script2.setAttribute(
      'src',
      'https://cdn.datatables.net/1.10.21/js/dataTables.bootstrap4.min.js'
    )
    document.head.appendChild(script2)

    const script3 = document.createElement('script')
    script3.setAttribute(
      'src',
      'https://cdn.datatables.net/responsive/2.1.0/js/dataTables.responsive.js'
    )
    document.head.appendChild(script3)

    $(document).ready(function () {
      $('#DataTables_Table_0').DataTable({
        responsive: true,
        sScrollX: '100%',
        sScrollXInner: '110%'
      })
    })
  },
  methods: {
    handleRowClick (record, index) {
      this.$router.push({
        name: 'admin-option-note-category-edit-id',
        params: { id: `${index}`, record }
      })
    },
    async getSubCategories () {
      this.subCategories = await this.api.getSubCategories(this.category)
    },
    async getRelativeDescriptors () {
      this.descriptors = await this.api.getDescriptors(this.sub_category)
    },
    async getRelativeActions () {
      this.actions = await this.api.getListActions(this.sub_category)
    },
    async applyFilters () {
      // category_id=&sub_category_id=&active=0&descriptor_id=&action_id=
      let filters = ''
      if (this.active !== '') {
        filters += `filter[active]=${this.active}`
      }
      if (this.active !== '' && this.category !== '') {
        filters += '&'
      }
      if (this.category !== '') {
        filters += `filter[ids][]=${this.category}`
      }
      if (this.sub_category !== '') {
        filters += `,${this.sub_category}`
      }
      if (this.descriptor !== '') {
        filters += `,${this.descriptor}`
      }
      if (this.action !== '') {
        filters += `,${this.action}`
      }
      console.log(filters)
      console.log(this.noteCategories)
      this.noteCategories = []
      const res = await this.api.getFilteredNoteCategories(filters)
      for (let index = 0; index < res.length; index++) {
        const element = res[index]
        this.noteCategories.push(res[index])
      }
      console.log(this.noteCategories)
    }
  }
}
</script>

<style></style>
