<template>
  <div class>
    <div class="row">
      <div class="col-12">
        <div class="page-title-box">
          <h4 class="page-title">
            Edit Note Category: {{ name }}
          </h4>
        </div>
      </div>
    </div>
    <nuxt-link
      class="btn btn-secondary btn-rounded waves-effect waves-light"
      to="/admin-option-note-category"
    >
      <i class="fas fa-ban" aria-hidden="true" /> Cancel
    </nuxt-link>
    <br>
    <br>
    <form method="post" class="category-form" novalidate="novalidate" @submit.prevent="updateNoteCategory">
      <fieldset>
        <div class="row">
          <div class="col-sm-12">
            <div class="form-group">
              <label>Type</label>
              <div class="input-group text-center mt-1 pl-3">
                <div class="radio radio-info form-check-inline">
                  <input id="1" v-model="category_type" type="radio" value="category" name="type">
                  <label for="1">Category</label>
                </div>
                <div class="radio radio-info form-check-inline">
                  <input
                    id="2"
                    v-model="category_type"
                    type="radio"
                    value="sub category"
                    name="type"
                  >
                  <label for="2">Sub Category</label>
                </div>
                <div class="radio radio-info form-check-inline">
                  <input id="3" v-model="category_type" type="radio" value="descriptor" name="type">
                  <label for="3">Descriptor</label>
                </div>
                <div class="radio radio-info form-check-inline">
                  <input id="4" v-model="category_type" type="radio" value="action" name="type">
                  <label for="4">Action</label>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-6">
            <div class="form-group">
              <label class="required">Category</label>
              <select
                id="groups"
                v-model="category"
                class="form-control options-notes-category"
                name="category_id"
                @change="getSubCategories"
              >
                <option disabled value>
                  -- Select --
                </option>
                <option
                  v-for="(category, index) of categories"
                  :key="index"
                  :value="category.id"
                >
                  {{ category.name }}
                </option>
              </select>
            </div>
          </div>
          <div class="col-sm-12 col-md-6">
            <div class="form-group">
              <label class="required">Sub Category</label>
              <select
                id="groups"
                v-model="sub_category"
                class="form-control sub-cat"
                name="sub_category_id"
                @change="getActionDescriptors"
              >
                <option disabled value>
                  -- Select --
                </option>
                <option
                  v-for="(subCategory, index) of subCategories"
                  :key="index"
                  :value="subCategory.id"
                >
                  {{ subCategory.name }}
                </option>
              </select>
            </div>
          </div>
          <div class="col-sm-12">
            <hr>
          </div>
          <div class="form-group col-md-6">
            <label>Note Category</label>
            <input
              v-model="name"
              class="form-control"
              type="text"
              maxlength="50"
              name="note_category"
              required
            >
          </div>

          <div class="form-group col-md-6">
            <label>Active</label>
            <select v-model="is_active" class="form-control" name="active">
              <option value="1">
                Active
              </option>
              <option value="0">
                Disabled
              </option>
            </select>
          </div>
        </div>

        <div class="clear" />
        <div class="form-group col-md-12">
          <input
            class="btn btn-primary btn-rounded waves-effect waves-light"
            type="submit"
            name="save"
            value="Edit Note Category"
          >
        </div>
      </fieldset>
    </form>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import Api from '../../../services/api/Api'
import noteCategory from '../../../services/api/mock/note-category'

export default {
  async asyncData (context) {
    const api = new Api(context)
    const categories = await api.getCategories()
    const noteCategory = await api.getNoteCategory(context.params.id)
    return {
      categories,
      ...noteCategory,
      api
    }
  },
  data () {
    return {
      subCategories: [],
      category: '',
      sub_category: ''
    }
  },
  mounted () {
    // if (!this.$store.state.permissions.includes("Edit Notes Category")) {
    //   this.$router.push("/unauthorized");
    // }
    // if (!this.$store.state.modules.includes("case_management_notes")) {
    //   throw new Error();
    // }
    $('form').submit(false)
  },
  created () {
    console.log(this.category_type)
  },
  methods: {
    async getSubCategories (event) {
      this.subCategories = await this.api.getSubCategories(this.category)
    },
    async getActionDescriptors () {
      this.actions = await this.api.getListActions(this.sub_category)
      this.descriptors = await this.api.getDescriptors(this.sub_category)
    },
    updateNoteCategory () {
      let filter = ''
      let payload
      if (
        this.type !== '' &&
        this.noteCategory !== '' &&
        this.category !== ''
      ) {
        switch (this.category_type) {
          case 'category':
            filter = 'note-categories'
            payload = {
              id: this.id,
              type: 'note-categories',
              attributes: {
                category_type: 'category',
                name: this.name,
                is_active: this.is_active
              }
            }
            break
          case 'sub category':
            filter = 'note-categories?include=parent'
            payload = {
              id: this.id,
              type: 'note-categories',
              attributes: {
                category_type: 'category',
                name: this.name,
                is_active: this.is_active
              },
              relationships: {
                parent: {
                  data: { type: 'note-categories', id: this.category }
                }
              }
            }
            break
          case 'descriptor':
            filter = 'note-categories?include=parent'
            payload = {
              id: this.id,
              type: 'note-categories',
              attributes: {
                category_type: 'action',
                name: this.name,
                is_active: this.is_active
              },
              relationships: {
                parent: {
                  data: { type: 'note-categories', id: this.sub_category }
                }
              }
            }
            break
          case 'action':
            filter = 'note-categories?include=parent'
            payload = {
              id: this.id,
              type: 'note-categories',
              attributes: {
                category_type: 'descriptor',
                name: this.name,
                is_active: this.is_active
              },
              relationships: {
                parent: {
                  data: { type: 'note-categories', id: this.sub_category }
                }
              }
            }
            break
        }
        if (!(this.type === 'sub category' && this.sub_category === '')) {
          this.api
            .updateNoteCategory(this.$route.params.id, payload)
            .then((data) => {
              console.log(data)
              Swal.fire(
                'Request success!',
                'Updated note category!',
                'success'
              )
              this.$router.push('/admin-option-note-category')
            })
            .catch((error) => {
              console.log(error)
            })
        }
      }
    }
  }
}
</script>
