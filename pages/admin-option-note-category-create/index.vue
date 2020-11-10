<template>
  <div class>
    <div class="row">
      <div class="col-12">
        <div class="page-title-box">
          <h4 class="page-title">New Note Category Option</h4>
        </div>
      </div>
    </div>
    <nuxt-link
      class="btn btn-secondary btn-rounded waves-effect waves-light"
      to="/admin-option-note-category"
    >
      <i class="fas fa-ban" aria-hidden="true" /> Cancel
    </nuxt-link>
    <br />
    <br />
    <form method="post" action class="category-form" novalidate="novalidate">
      <fieldset>
        <div class="row">
          <div class="col-sm-12">
            <!-- checkboxs -->
            <div class="form-group">
              <label>Type</label>
              <div class="input-group text-center mt-1 pl-3">
                <div class="radio radio-info form-check-inline">
                  <input
                    id="1"
                    v-model="type"
                    type="radio"
                    value="1"
                    name="type"
                  />
                  <label for="1">Category</label>
                </div>
                <!-- sub category checkbox -->
                <div class="radio radio-info form-check-inline">
                  <input
                    id="2"
                    v-model="type"
                    type="radio"
                    value="2"
                    name="type"
                  />
                  <label for="2">Sub Category</label>
                </div>

                <!-- descriptor  checkbox -->
                <div class="radio radio-info form-check-inline">
                  <input
                    id="3"
                    v-model="type"
                    type="radio"
                    value="3"
                    name="type"
                  />
                  <label for="3">Descriptor</label>
                </div>

                <!-- action checkbox -->
                <div class="radio radio-info form-check-inline">
                  <input
                    id="4"
                    v-model="type"
                    type="radio"
                    value="4"
                    name="type"
                  />
                  <label for="4">Action</label>
                </div>
              </div>
            </div>
          </div>

          <!-- main category dropdown -->
          <div v-if="type != 1" class="col-sm-12 col-md-6">
            <div class="form-group">
              <label class="required">Category</label>
              <select
                id="groups"
                v-model="category"
                class="form-control options-notes-category"
                name="category_id"
                @change="getSubCategories"
              >
                <option disabled value>-- Select --</option>
                <option
                  v-for="(category, index) of categories"
                  v-show="category.is_active === 1"
                  :key="index"
                  :value="category.id"
                >
                  {{ category.name }}
                </option>
              </select>
            </div>
          </div>

          <!-- sub category dropdown -->
          <div v-if="type != 1" class="col-sm-12 col-md-6">
            <div class="form-group">
              <label class="required">Sub Category</label>
              <select
                id="groups"
                v-model="sub_category"
                class="form-control sub-cat"
                name="sub_category_id"
              >
                <option disabled value>-- Select --</option>
                <option
                  v-for="(subCategory, index) of subCategories"
                  v-show="subCategory.is_active === 1"
                  :key="index"
                  :value="subCategory.id"
                >
                  {{ subCategory.name }}
                </option>
              </select>
            </div>
          </div>
          <div class="col-sm-12">
            <hr />
          </div>

          <div class="form-group col-md-6">
            <label>Note Category</label>
            <input
              v-model="note_category"
              class="form-control"
              type="text"
              maxlength="50"
              name="note_category"
              required
            />
          </div>

          <div class="form-group col-md-6">
            <label>Active</label>
            <select v-model="active" class="form-control" name="active">
              <option value="1">Active</option>
              <option value="0">Disabled</option>
            </select>
          </div>
        </div>

        <div class="clear" />
        <div class="form-group col-md-12">
          <input
            class="btn btn-primary btn-rounded waves-effect waves-light"
            type="submit"
            name="save"
            value="Create Note Category"
            @click="createNoteCategory"
          />
        </div>
      </fieldset>
    </form>
  </div>
</template>

<script>
import Api from "../../services/api/Api";
import noteCategory from "../../services/api/mock/note-category";

export default {
  async asyncData(context) {
    const api = new Api(context);
    const categories = await api.getCategories();
    return {
      categories,
      api,
    };
  },
  data() {
    return {
      type: 1,
      filter: "",
      subCategories: [],
      descriptors: [],
      actions: [],
      note_category: "",
      active: 1,
      category: "",
      sub_category: "",
      descriptor: "",
      action: "",
    };
  },
  async mounted() {
    this.descriptors = await this.api.getDescriptors();
    this.actions = await this.api.getListActions(this.action);
    console.log(this.descriptors);

    if (this.type === 1) {
      this.filter = "note-categories";
    } else if (this.type === 2) {
      this.filter = "note-categories?include=parent";
    }
    $("form").submit(false);
  },
  methods: {
    async getSubCategories(event) {
      this.subCategories = await this.api.getSubCategories(this.category);
    },

    async getActions() {
      this.actions = await this.api.getListActions(this.action);
    },

    createNoteCategory() {
      let payload;
      const type = this.type;
      const filter = this.filter;
      if (this.type > 0 && this.note_category !== "") {
        if (this.type == 1 && this.note_category !== "") {
          this.api
            .createNoteCategory(
              (this.filter = "note-categories"),
              (payload = {
                type: "note-categories",
                attributes: {
                  category_type: "category",
                  name: this.note_category,
                  is_active: this.active,
                },
              })
            )
            .then((data) => {
              this.$router.push("/admin-option-note-category");
            })
            .catch((error) => {
              console.log(error);
            });
        } else if (this.type == 2 && this.category !== "") {
          this.api
            .createNoteCategory(
              (this.filter = "note-categories?include=parent"),
              (payload = {
                type: "note-categories",
                attributes: {
                  category_type: "category",
                  name: this.note_category,
                  is_active: this.active,
                },
                relationships: {
                  parent: {
                    data: { type: "note-categories", id: this.category },
                  },
                },
              })
            )
            .then((data) => {
              this.$router.push("/admin-option-note-category");
            })
            .catch((error) => {
              console.log(error);
            });
        } else if (
          this.type == 3 &&
          this.category !== "" &&
          this.sub_category !== ""
        ) {
          this.api
            .createNoteCategory(
              (this.filter = "note-categories?include=parent"),
              (payload = {
                type: "note-categories",
                attributes: {
                  category_type: "descriptor",
                  name: this.note_category,
                  is_active: this.active,
                },
                relationships: {
                  parent: {
                    data: { type: "note-categories", id: this.sub_category },
                  },
                },
              })
            )
            .then((data) => {
              this.$router.push("/admin-option-note-category");
            })
            .catch((error) => {
              console.log(error);
            });
        } else if (
          this.type == 4 &&
          this.category !== "" &&
          this.sub_category !== ""
        ) {
          this.api
            .createNoteCategory(
              (this.filter = "note-categories?include=parent"),
              (payload = {
                type: "note-categories",
                attributes: {
                  category_type: "category",
                  name: this.note_category,
                  is_active: this.active,
                },
                relationships: {
                  parent: {
                    data: { type: "note-categories", id: this.category },
                  },
                },
              })
            )
            .then((data) => {
              this.$router.push("/admin-option-note-category");
            })
            .catch((error) => {
              console.log(error);
            });
        }
      }
    },
  },
};
</script>
