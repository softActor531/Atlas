<template>
  <div class="container-fluid">
    <h3 class="page-title">
      {{ newEntry === true ? "Create New" : "Edit" }} User
    </h3>

    <b-button variant="secondary" pill @click="$router.back()">
      <span class="btn-label">
        <i class="fas fa-arrow-left" />
      </span>
      Go back
    </b-button>

    <div class="card mt-2">
      <div class="card-body">
        <p><code>*</code> Required</p>

        <b-row>
          <!-- email -->
          <b-col cols="6">
            <label for="input-live">Email:</label>
            <b-form-input
              v-model="$v.formFields.email.$model"
              placeholder="Enter your email"
              :state="validateState('email')"
              aria-describedby="email-live-feedback"
            />
            <b-form-invalid-feedback
              id="email-live-feedback"
            >
              Email required!
            </b-form-invalid-feedback>
          </b-col>
          <!-- title -->
          <b-col cols="6">
            <label for="input-live">Title:</label>
            <b-form-input
              v-model="$v.formFields.title.$model"
              placeholder="Enter your title"
              :state="validateState('title')"
              aria-describedby="title-live-feedback"
            />
            <b-form-invalid-feedback
              id="title-live-feedback"
            >
              Title required!
            </b-form-invalid-feedback>
          </b-col>

          <b-col cols="6">
            <label for="input-live">First Name:</label>
            <b-form-input
              v-model="$v.formFields.first_name.$model"
              placeholder="Enter your first name"
              :state="validateState('first_name')"
              aria-describedby="first_name-live-feedback"
            />
            <b-form-invalid-feedback
              id="first_name-live-feedback"
            >
              First Name required!
            </b-form-invalid-feedback>
          </b-col>

          <b-col cols="6">
            <label for="input-live">Last Name:</label>
            <b-form-input
              v-model="$v.formFields.last_name.$model"
              placeholder="Enter your first name"
              :state="validateState('last_name')"
              aria-describedby="last_name-live-feedback"
            />
            <!-- validation message -->
            <b-form-invalid-feedback
              id="last_name-live-feedback"
            >
              Last Name required!
            </b-form-invalid-feedback>
          </b-col>

          <b-col cols="6">
            <label>Timezone:</label>
            <b-form-select
              v-model="$v.formFields.timezone.$model"
              :state="validateState('timezone')"
              class="mb-3"
              aria-describedby="timezone-live-feedback"
            >
              <!-- This slot appears above the options from 'options' prop -->
              <template v-slot:first>
                <b-form-select-option
                  :value="null"
                  disabled
                >
                  -- Please select a timezone --
                </b-form-select-option>
              </template>

              <b-form-select-option
                v-for="time in timezones"
                :key="time.id"
                :value="time.id"
              >
                {{ time.attributes.value }}
              </b-form-select-option>
              <!-- validation message -->
              <b-form-invalid-feedback
                id="timezone-live-feedback"
              >
                Timezone required!
              </b-form-invalid-feedback>
            </b-form-select>
          </b-col>

          <b-col cols="6">
            <label>Role:</label>
            <b-form-select
              v-model="$v.formFields.role.$model"
              :state="validateState('role')"
              class="mb-3"
              aria-describedby="role-live-feedback"
            >
              <!-- This slot appears above the options from 'options' prop -->
              <template v-slot:first>
                <b-form-select-option
                  :value="null"
                  disabled
                >
                  -- Please select a role --
                </b-form-select-option>
              </template>

              <b-form-select-option
                v-for="role in rolesOptions"
                :key="role.id"
                :value="role.id"
              >
                {{ role.attributes.name }}
              </b-form-select-option>
              <!-- validation message -->
              <b-form-invalid-feedback
                id="role-live-feedback"
              >
                Role required!
              </b-form-invalid-feedback>
            </b-form-select>
          </b-col>

          <b-col v-if="!newEntry" cols="12">
            <b-button
              variant="blue"
              @click="
                $router.push({
                  name: 'user-id-view-permissions',
                  params: { id: userId },
                })
              "
            >
              View Permissions
            </b-button>
            <b-button
              variant="blue"
              @click="
                $router.push({
                  name: 'user-id-edit-permissions',
                  params: { id: userId },
                })
              "
            >
              Edit Permissions
            </b-button>
          </b-col>

          <b-col cols="6">
            <label>Active:</label>
            <b-form-select
              v-model="$v.formFields.active.$model"
              :state="validateState('active')"
              :options="[
                { value: null, text: '-- please select a status --' },
                { value: '0', text: 'inactive' },
                { value: '1', text: 'active' }
              ]"
              class="mb-3"
              aria-describedby="active-live-feedback"
            >
              <b-form-invalid-feedback
                id="active-live-feedback"
              >
                Active required!
              </b-form-invalid-feedback>
            </b-form-select>
          </b-col>

          <div class="col-md-5 mt-3 ml-2">
            <input
              id="inputGroupFile04"
              type="file"
              class="custom-file-input"
            >
            <label
              class="custom-file-label"
              for="inputGroupFile04"
            >Choose file</label>
            <img
              class="profileImage"
              src="https://dev.accelerationacademy.net/images/placeholder.jpg"
              alt="Profile Image"
            >
          </div>
        </b-row>
      </div>

      <b-form-checkbox-group
        v-model="$v.formFields.districts.$model"
        :options="districtCheckboxes"
        :state="validateState('districts')"
        class="mb-3"
        aria-describedby="districts-live-feedback"
        value-field="id"
        text-field="attributes.name"
        disabled-field="notEnabled"
      >
        <!-- validation message -->
        <b-form-invalid-feedback
          id="districts-live-feedback"
        >
          {{ district_label }} required!
        </b-form-invalid-feedback>
      </b-form-checkbox-group>
      <b-button
        variant="primary"
        @click="requestCreation(newEntry === true ? 'create' : 'save')"
      >
        <i class="fa fa-save mr-2" />
        {{ newEntry === true ? "Create" : "Save" }} user info
      </b-button>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import { validationMixin } from 'vuelidate'
import { required, email } from 'vuelidate/lib/validators'

export default {
  mixins: [validationMixin],
  props: {
    profile: {
      type: Object,
      default: null
    },
    newEntry: {
      type: Boolean,
      default: false
    },
    rolesOptions: {
      type: Array,
      required: true
    },
    districtCheckboxes: {
      type: Array,
      default: () => []
    },
    timezones: {
      type: Array,
      default: null
    },
    userId: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      district_label: this.$store.state.fields.length > 0 ? this.$store.state.fields.find((element) => {
        return element.base_name === 'District'
      }).custom_name : "District",
      formFields: {
        email: '',
        title: '',
        first_name: '',
        last_name: '',
        districts: [],
        timezone: null,
        role: null,
        active: null
      },
      selectedDistricts: []
    }
  },
  validations: {
    formFields: {
      email: {
        required,
        email
      },
      title: {
        required
      },
      first_name: {
        required
      },
      last_name: {
        required
      },
      districts: {
        required
      },
      timezone: {
        required
      },
      role: {
        required
      },
      active: {
        required
      }
    }
  },
  async mounted () {
    if (!this.newEntry && this.userId !== null) {
      try {
        const user = await this.$axios.$get(
          `http://atlas-rebuild-api.mtcdevsite.com/api/v1/users/${this.userId}?include=timezone,role,districts`
        )
        console.log(user.data)
        const payload = user.data.attributes

        this.formFields = {
          email: payload.email,
          first_name: payload.first_name,
          last_name: payload.last_name,
          title: payload.title,
          districts: [user.data.relationships.districts.data[0].id] || [],
          role: user.data.relationships.role.data.id,
          timezone: user.data.relationships.timezone.data.id || null,
          active: user.data.active || null
        }
      } catch (e) {
        console.log(e)
      }
    }
  },
  methods: {
    validateState (arg) {
      const { $dirty, $anyError } = this.$v.formFields[arg]
      return $dirty ? !$anyError : null
    },
    requestCreation (status) {
      this.$v.formFields.$touch()
      if (this.$v.formFields.$anyError) {
        return
      }

      // this mechanic will be used in payload
      const dists = this.formFields.districts.map((d) => {
        return {
          type: 'districts',
          id: d
        }
      })

      const role = {
        data: {
          type: 'roles',
          id: this.formFields.role
        }
      }

      const districts = {
        data: dists
      }

      const timezone = {
        data: {
          type: 'timezones',
          id: this.formFields.timezone
        }
      }

      if (status === 'create') {
        console.log('create req')
        const obj = {
          data: {
            type: 'users',
            attributes: {
              title: this.formFields.title,
              first_name: this.formFields.first_name,
              last_name: this.formFields.last_name,
              email: this.formFields.email,
              password: '123456'
            },
            relationships: {
              role,
              districts,
              timezone
            },
            included: [role.data, districts.data, timezone.data]
          }
        }

        this.$axios({
          method: 'POST',
          url: 'http://atlas-rebuild-api.mtcdevsite.com/api/v1/users',
          headers: {
            'Content-Type': 'application/vnd.api+json',
            Accept: 'application/vnd.api+json'
            /**
             * TODO: Add this once it is available at the API
             */
            // Authorization: `Bearer ${this.$store.state.token}`
          },
          data: obj
        })
          .then((data) => {
            console.log(data)
            Swal.fire('Request Successful!', 'User Created!', 'success')
            this.$router.back()
          })
          .catch((err) => {
            Swal.fire({
              icon: 'error',
              title: 'Request failed!',
              text: `${err.message}`
            })
          })
      } else if (status === 'save') {
        const obj = {
          data: {
            type: 'users',
            id: this.userId,
            attributes: {
              title: this.formFields.title,
              first_name: this.formFields.first_name,
              last_name: this.formFields.last_name,
              email: this.formFields.email,
              password: '123456'
            },
            relationships: {
              role,
              districts,
              timezone
            },
            included: [role.data, districts.data, timezone.data]
          }
        }
        console.log(obj)

        this.$axios({
          method: 'PATCH',
          url: `http://atlas-rebuild-api.mtcdevsite.com/api/v1/users/${this.userId}?include=timezone,role,districts`,
          headers: {
            'Content-Type': 'application/vnd.api+json',
            Accept: 'application/vnd.api+json'
          },
          data: obj
        })
          .then(() => {
            Swal.fire('Request Successful!', 'User Updated!', 'success')
            this.$router.back()
          })
          .catch((err) => {
            Swal.fire({
              icon: 'error',
              title: 'Request failed!',
              text: `${err.message}`
            })
          })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
