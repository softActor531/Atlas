<template>
  <main>
    <div class="row mt-4">
      <div class="col-md-3 mt-3">
        <Studentsidenav :student-id="$route.params.id" />
      </div>
      <div class="col-md-9">
        <div class="page-title-right float-right">
          <nuxt-link
            class="btn btn-danger waves-effect waves-light"
            :to="`/student-notes-files-edit/${$route.params.id}`"
          >
            <span class="btn-label">
              <i class="fa fa-ban" />
            </span>
            Cancel
          </nuxt-link>
        </div>
        <h1 class="mt-0">
          New Retention Note:
        </h1>
        <div class="card">
          <div class="row">
            <div class="col-sm-6 col-xl-1" />
            <div class="col-sm-6 col-xl-2">
              <div class="p-2 text-center">
                <i class="mdi mdi-account-key text-primary mdi-24px" />
                <p class="text-muted font-15 mb-0">
                  Acceleration ID
                </p>
                <h5>
                  <span>{{ id }}</span>
                </h5>
              </div>
            </div>

            <div class="col-sm-6 col-xl-2">
              <div class="p-2 text-center">
                <i class="mdi mdi-map text-success mdi-24px" />
                <p class="text-muted font-15 mb-0">
                  Location
                </p>
                <h5>
                  <span>{{ site.district.name }}/{{ site.name }}</span>
                </h5>
              </div>
            </div>
            <div class="col-sm-6 col-xl-2">
              <div class="p-2 text-center">
                <i
                  class="fas fa-spinner text-success mdi-24px text-warning"
                  style="font-size: 24px; margin-top: 10px"
                />
                <p class="text-muted font-15 mb-0">
                  Phase/Status
                </p>
                <h5>
                  <span>{{ status.phase.name }}/{{ status.name }}</span>
                </h5>
              </div>
            </div>
            <div class="col-sm-6 col-xl-2">
              <div class="p-2 text-center">
                <i class="mdi mdi-alert-circle text-info mdi-24px" />
                <p class="text-muted font-15 mb-0">
                  GCA
                </p>
                <h5>
                  <span>
                    {{ graduate_candidate_advocate.first_name }}
                    {{ graduate_candidate_advocate.last_name }}
                  </span>
                </h5>
              </div>
            </div>

            <div class="col-sm-6 col-xl-2">
              <div class="p-2 text-center">
                <i class="mdi mdi-certificate text-blue mdi-24px" />
                <p class="text-muted font-15 mb-0">
                  Tier
                </p>
                <h5>
                  <span>N/A</span>
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="card">
              <h2 class="p-2">
                Required
              </h2>
              <div class="col-md-12 mt-2">
                <div class="form-group">
                  <label class="required">Category <code>*</code> </label>
                  <select
                    id="groups"
                    v-model="form.category"
                    class="form-control options-notes-category"
                    :class="{
                      'is-invalid': submitted && $v.form.category.$error,
                    }"
                    @change="getSubCategories"
                  >
                    <option value disabled>
                      --Select--
                    </option>

                    <option
                      v-for="(category, index) in categories"
                      v-show="category.is_active === 1"
                      :key="index"
                      :value="category.id"
                    >
                      {{ category.name }}
                    </option>
                  </select>
                  <div
                    v-if="submitted && !$v.form.category.required"
                    class="invalid-feedback"
                  >
                    Category is required
                  </div>
                </div>
              </div>
              <div class="col-md-12">
                <div class="form-group">
                  <label class="required">Sub Category <code>*</code> </label>
                  <select
                    id="groups"
                    v-model="form.sub_category"
                    class="form-control sub-cat"
                    name="sub_category_id"
                    :class="{
                      'is-invalid': submitted && $v.form.sub_category.$error,
                    }"
                    @change="getActionDescriptors"
                  >
                    <option value disabled>
                      --Select--
                    </option>
                    <option
                      v-for="(subCategory, index) in subCategories"
                      v-show="subCategory.is_active === 1"
                      :key="index"
                      :value="subCategory.id"
                    >
                      {{ subCategory.name }}
                    </option>
                  </select>
                  <div
                    v-if="submitted && !$v.form.sub_category.required"
                    class="invalid-feedback"
                  >
                    Sub Category is required
                  </div>
                </div>
              </div>
              <div class="col-md-12">
                <div class="form-group">
                  <label class="required">Descriptor <code>*</code> </label>
                  <select
                    id="descriptor"
                    v-model="form.descriptor"
                    class="form-control descriptor"
                    name="descriptor_id"
                    :class="{
                      'is-invalid': submitted && $v.form.descriptor.$error,
                    }"
                  >
                    <option value disabled>
                      --Select--
                    </option>
                    <option
                      v-for="(descriptor, index) in descriptors"
                      v-show="descriptor.is_active === 1"
                      :key="index"
                      :value="descriptor.id"
                    >
                      {{ descriptor.name }}
                    </option>
                  </select>
                  <div
                    v-if="submitted && !$v.form.descriptor.required"
                    class="invalid-feedback"
                  >
                    Descriptor is required
                  </div>
                </div>
              </div>
              <div class="col-md-12">
                <div class="form-group">
                  <label class="required">Action <code>*</code> </label>
                  <select
                    id="descriptor"
                    v-model="form.action"
                    class="form-control descriptor"
                    name="descriptor_id"
                    :class="{
                      'is-invalid': submitted && $v.form.action.$error,
                    }"
                  >
                    <option value disabled>
                      --Select--
                    </option>
                    <option
                      v-for="(action, index) in actions"
                      :key="index"
                      :value="action.id"
                    >
                      {{ action.name }}
                    </option>
                  </select>
                  <div
                    v-if="submitted && !$v.form.action.required"
                    class="invalid-feedback"
                  >
                    Action is required
                  </div>
                </div>
              </div>
              <div class="input-group text-center mt-1 pl-3">
                <div class="radio radio-info form-check-inline">
                  <input
                    id="noneFollowup"
                    v-model="form.radio"
                    data-msg-oneormorechecked="No task was selected. Please select To-Do if assigning an action."
                    type="radio"
                    value="none"
                    class="follow-up auto-tab"
                    name="follow_up"
                  >
                  <label for="noneFollowup">None</label>
                </div>
                <div class="radio radio-info form-check-inline">
                  <input
                    id="completeFollowup"
                    v-model="form.radio"
                    type="radio"
                    value="completed"
                    class="follow-up auto-tab"
                    name="follow_up"
                  >
                  <label for="completeFollowup">Complete</label>
                </div>
                <div class="radio radio-info form-check-inline">
                  <input
                    id="todoFollowup"
                    v-model="form.radio"
                    type="radio"
                    value="to-do"
                    class="follow-up auto-tab"
                    name="follow_up"
                  >
                  <label for="todoFollowup">To Do</label>
                </div>
              </div>

              <Fragment>
                <div class="col-md-12 mt-2">
                  <div class="form-group">
                    <label class="required">Assign To <code>*</code> </label>
                    <select
                      id="descriptor"
                      v-model="form.assignee"
                      class="form-control descriptor"
                      name="descriptor_id"
                      :class="{
                        'is-invalid': submitted && $v.form.assignee.$error,
                      }"
                    >
                      <option value disabled>
                        --Select--
                      </option>
                      <option
                        v-for="(user, index) in users"
                        :key="index"
                        :value="user.id"
                      >
                        {{ user.first_name }} {{ user.last_name }}
                      </option>
                    </select>
                    <div
                      v-if="submitted && !$v.form.action.required"
                      class="invalid-feedback"
                    >
                      Assign To is required
                    </div>
                  </div>
                </div>
                <div class="col-md-12">
                  <b-form-group
                    id="groupbirthate"
                    label-for="birthdate"
                    :label="`customlabel`"
                    invalid-feedback="This field is required. "
                    :state="validateState"
                  >
                    <template v-slot:label>
                      Due Date
                      <span class="text-danger">*</span>
                    </template>
                    <div v-if="form.radio === 'completed'">
                      <DatePicker
                        id="birthdate"
                        v-model="$v.birthdateUTC.$model"
                        required
                        :max-date="new Date()"
                        @input="handleDatePicker"
                      />
                    </div>
                    <div v-if="form.radio === 'to-do'">
                      <DatePicker
                        id="birthdate"
                        v-model="$v.birthdateUTC.$model"
                        required
                        :min-date="new Date()"
                        @input="handleDatePicker"
                      />
                    </div>
                    <div v-if="form.radio === 'none'">
                      <DatePicker
                        id="birthdate"
                        v-model="birthdateUTC"
                        required
                        @input="handleDatePicker"
                      />
                    </div>

                    <p
                      v-if="birthdateUTC"
                      class="text-blue-500 text-xs font-bold mt-1"
                    >
                      We got it. Thanks!
                    </p>
                  </b-form-group>
                </div>
              </Fragment>
            </div>
          </div>
          <div class="col-md-6">
            <div>
              <div class="card">
                <div class="card-body">
                  <div class="form-group row">
                    <label class="required col-sm-12 col-md-3">
                      Audience
                      <code>*</code>
                    </label>
                    <div class="col-sm-12 col-md-9">
                      <div class="input-group">
                        <div class="radio radio-info form-check-inline">
                          <input
                            id="internalAudience"
                            v-model="form.audience"
                            type="radio"
                            class="auto-tab"
                            value="Internal"
                            name="audience"
                          >
                          <label for="internalAudience">Internal</label>
                        </div>
                        <div class="radio radio-info form-check-inline">
                          <input
                            id="externalAudience"
                            v-model="form.audience"
                            type="radio"
                            class="auto-tab"
                            value="External"
                            name="audience"
                          >
                          <label for="externalAudience">External</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="required col-sm-12 col-md-3">
                      Type
                      <code>*</code>
                    </label>
                    <div class="col-sm-12 col-md-9">
                      <div class="input-group">
                        <div class="radio radio-info form-check-inline">
                          <input
                            id="communicationType"
                            v-model="form.noteType"
                            class="auto-tab"
                            type="radio"
                            value="Communication"
                            name="type"
                            checked
                            maxlength="2147483647"
                          >
                          <label for="communicationType">Communication</label>
                        </div>
                        <div class="radio radio-info form-check-inline">
                          <input
                            id="interventionType"
                            v-model="form.noteType"
                            class="auto-tab"
                            type="radio"
                            value="Intervention"
                            name="type"
                            maxlength="2147483647"
                          >
                          <label for="interventionType">Intervention</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tags">
                <div class="form-group mb-3">
                  <at-ta
                    name-key="name"
                    value-key="id"
                    item-key="id"
                    membet-key="id"
                    :members="
                      users.map((user) => {
                        return {
                          name: `${user.first_name} ${user.last_name}`,
                          id: user.id,
                        };
                      })
                    "
                  >
                    Note<code>*</code>
                    <textarea
                      v-model="form.note"
                      contenteditable
                      class="form-control p-2 auto-tab"
                      name="note"
                      rows="18"
                      required
                      placeholder="Write notes here. Use @ to tag users."
                      :class="{
                        'is-invalid': submitted && $v.form.note.$error,
                      }"
                    />
                  </at-ta>
                  <div
                    v-if="submitted && !$v.form.note.required"
                    class="invalid-feedback"
                  >
                    Notes is required
                  </div>
                </div>
              </div>
              <div class="buttons mt-3">
                <div class="float-right">
                  <button
                    type="submit"
                    class="btn btn-success pl-4 pr-4 auto-tab"
                    name="save"
                    value="Save Note"
                    @click="createNote"
                  >
                    Save
                  </button>
                </div>
                <div class="float-left">
                  <nuxt-link
                    class="btn btn-danger waves-effect waves-light"
                    :to="`/student-notes-files-edit/${$route.params.id}`"
                  >
                    <span class="btn-label">
                      <i class="fa fa-ban" />
                    </span>
                    Cancel
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
// import flatPickr from "vue-flatpickr-component";

import Swal from 'sweetalert2'

import moment from 'moment'

import Vuelidate from 'vuelidate'
import { required, requiredIf } from 'vuelidate/lib/validators'

import { Fragment } from 'vue-fragment'

import At from 'vue-at'
import AtTa from 'vue-at/dist/vue-at-textarea'
import DatePicker from 'v-calendar/lib/components/date-picker.umd'
import Api from '../../../services/api/Api'

export default {
  name: 'Index',
  components: {
    DatePicker,
    Fragment,
    At,
    AtTa
  },
  data () {
    return {
      birthdateUTC: null,
      form: {
        category: '',
        sub_category: '',
        action: '',
        descriptor: '',
        due_date: '',
        radio: 'none',
        assignee: '',
        audience: 'Internal',
        noteType: 'Communication',
        note: ''
      },
      subCategories: [],
      actions: [],
      descriptors: [],
      submitted: false
    }
  },
  validations: {
    form: {
      category: { required },
      sub_category: { required },
      action: { required },
      descriptor: { required },
      radio: { required },
      due_date: {
        required: requiredIf(function () {
          return this.form.radio !== 'none'
        })
      },
      assignee: {
        required: requiredIf(function () {
          return this.form.radio !== 'none'
        })
      },
      audience: { required },
      noteType: { required },
      note: { required }
    }
  },
  async asyncData (context) {
    const api = new Api(context)
    const student = await api.getStudent(context.params.id)
    const categories = await api.getCategories()
    const users = await api.getUsers()

    return {
      ...student,
      categories,
      users,
      api
    }
  },
  computed: {
    validateState () {
      if (this.v) {
        const { $dirty, $error } = this.v.birthdate
        return $dirty ? !$error : null
      }
    },
    errorMessage () {
      if (!this.birthdateUTC) { return 'Date is required.' }
      return ''
    }
  },
  mounted () {
    // if (!this.$store.state.modules.includes("case_management_notes")) {
    //   throw new Error();
    // }
    $('form').submit(false)
  },
  methods: {
    async getSubCategories () {
      this.subCategories = await this.api.getSubCategories(this.form.category)
      console.log(this.subCategories)
    },
    async getActionDescriptors () {
      this.actions = await this.api.getListActions(this.form.sub_category)
      this.descriptors = await this.api.getDescriptors(this.form.sub_category)
    },
    cancel () {
      console.log(this.form.note)
    },
    createNote () {
      this.submitted = true

      this.$v.$touch()
      if (this.$v.$invalid) {
        return
      }

      let body = this.form.note

      for (const user of this.users) {
        body = body.replace(
          `@${user.first_name} ${user.last_name}`,
          `[id:${user.id}, label:${user.first_name} ${user.last_name}]`
        )
      }

      let payload

      if (this.form.due_date !== '' && this.form.assignee !== '') {
        payload = {
          type: 'notes',
          attributes: {
            body,
            audience: this.form.audience,
            note_type: this.form.noteType,
            status: this.form.radio,
            due_date: moment(this.form.due_date).format('MM/DD/YYYY')
          },
          relationships: {
            student: { data: { type: 'students', id: this.$route.params.id } },
            note_category: {
              data: { type: 'note-categories', id: this.form.category }
            },
            note_sub_category: {
              data: { type: 'note-categories', id: this.form.sub_category }
            },
            note_action: {
              data: { type: 'note-categories', id: this.form.action }
            },
            note_descriptor: {
              data: { type: 'note-categories', id: this.form.descriptor }
            },
            assignee: { data: { type: 'users', id: this.form.assignee } }
          }
        }
      } else {
        payload = {
          type: 'notes',
          attributes: {
            body,
            audience: this.form.audience,
            note_type: this.form.noteType,
            status: this.form.radio,
            due_date: ''
          },
          relationships: {
            student: { data: { type: 'students', id: this.$route.params.id } },
            note_category: {
              data: { type: 'note-categories', id: this.form.category }
            },
            note_sub_category: {
              data: { type: 'note-categories', id: this.form.sub_category }
            },
            note_action: {
              data: { type: 'note-categories', id: this.form.action }
            },
            note_descriptor: {
              data: { type: 'note-categories', id: this.form.descriptor }
            }
          }
        }
      }

      this.api
        .createNote(payload)
        .then((data) => {
          console.log(data)
          Swal.fire('Created!', 'Note has been created!', 'success')
          this.$router.push(
            `/student-notes-files-edit/${this.$route.params.id}`
          )
        })
        .catch((error) => {
          console.log(error)
        })
    },
    handleDatePicker ($event) {
      // this.validateState()
      if (this.birthdateUTC) {
        this.form.due_date = this.birthdateUTC.toISOString().substring(0, 10)
        this.form.due_date = this.form.due_date.split('-')
        this.form.due_date =
          this.form.due_date[1] +
          '-' +
          this.birthdateUTC.getDate() +
          '-' +
          this.form.due_date[0]
        console.log(this.form.due_date)
      }
      this.v && this.v.birthdate.$touch()
      // this.handleChange("eeocInfo", "birthdate", $event);
    }
  }
}
</script>

<style></style>
