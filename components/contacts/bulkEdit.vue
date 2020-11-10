<template>
  <div class="page-wrapper">
    <div class="row">
      <div class="col-12">
        <div class="page-title-box" />
      </div>
    </div>
    <b-row>
      <b-col>
        <b-form @submit.prevent="onSubmit">
          <b-card class="student-setup-card">
            <b-card-text class="text-uppercase">
              Requirments
              <code>*</code>
            </b-card-text>
            <div>
              <b-row>
                <b-col md="4" sm="12">
                  <VSelectGroup
                    id="phase"
                    label="Phase"
                    placeholder="Choose Phase"
                    :options="initialData.phases"
                    :v="$v.phase"
                    required
                    @phaseChanged="phaseChanged($event)"
                  />
                </b-col>
                <b-col md="4" sm="12">
                  <VSelectGroup
                    id="status"
                    label="Status"
                    placeholder="Choose Status"
                    :options="statuses"
                    :v="$v.status"
                    required
                    @statusChanged="form.relationships.status.data.id = $event"
                  />
                </b-col>
              </b-row>

              <b-row>
                <b-col md="6" sm="12">
                  <VSelectGroup
                    id="district"
                    label="District"
                    :placeholder="`Choose a District`"
                    :options="initialData.districts"
                    :v="$v.district"
                    required
                    @districtChanged="onDistrictChanged($event)"
                  />
                </b-col>
                <b-col md="6" sm="12">
                  <VSelectGroup
                    id="site"
                    label="Site"
                    :placeholder="`Choose a Site`"
                    :options="sites"
                    :v="$v.site"
                    required
                    @siteChanged="form.relationships.site.data.id = $event"
                  />
                </b-col>
                <b-col md="4" sm="12">
                  <VSelectGroup
                    id="priority"
                    label="Priority"
                    placeholder="Choose Priority"
                    :options="initialData.priorities"
                    :v="$v.priority"
                    required
                    @priorityChanged="form.attributes.priority = $event"
                  />
                </b-col>
              </b-row>
              <b-row>
                <b-col sm="12">
                  <VSelectGroup
                    id="community_outreach_advocate"
                    label="Assign to (Enrollment Coach)"
                    placeholder="Choose User"
                    :options="initialData.communityAdvocates"
                    :v="$v.community_outreach_advocate"
                    required
                    @community_outreach_advocateChanged="
                      form.relationships.community_outreach_advocate.data.id = $event
                    "
                  />
                </b-col>
                <b-col sm="12">
                  <VSelectGroup
                    id="outreach_resource_advocate"
                    label="Assign to (Outreach Resource Advocate)"
                    placeholder="Choose User"
                    :options="initialData.advocates"
                    :v="$v.outreach_resource_advocate"
                    required
                    @outreach_resource_advocateChanged="
                      form.relationships.outreach_resource_advocate.data.id = $event
                    "
                  />
                </b-col>
              </b-row>
            </div>
          </b-card>

          <b-row>
            <b-col>
              <b-card class="text-center">
                <b-button type="submit" variant="success">
                  Submit
                </b-button>
              </b-card>
            </b-col>
          </b-row>
        </b-form>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
import Swal from 'sweetalert2'

export default {
  name: 'BulkEdit',

  props: {
    contactsIds: {
      type: Array,
      default: () => []
    }
  },

  data () {
    return {
      sites: [],
      statuses: [],
      form: {
        attributes: {
          priority: ''
        },
        relationships: {
          community_outreach_advocate: {
            data: {
              type: 'users',
              id: ''
            }
          },
          outreach_resource_advocate: {
            data: {
              type: 'users',
              id: ''
            }
          },
          site: {
            data: {
              type: 'sites',
              id: ''
            }
          },
          status: {
            data: {
              type: 'statuses',
              id: ''
            }
          },
          contacts: []
        }
      }
    }
  },

  computed: {
    initialData () {
      return this.$store.getters['contact/initialData']
    }
  },

  mounted () {
    if (!this.$store.state.permissions.includes('Edit Contact Profile')) {
      this.$router.push('/unauthorized')
    }
    $('form').submit(false)
  },

  validations: {
    form: {
      attributes: {
        priority: { required }
      },
      relationships: {
        community_outreach_advocate: { required },
        outreach_resource_advocate: { required },
        site: { required },
        status: { required }
      }
    }
  },

  methods: {
    onSubmit () {
      if (!this.contactsIds.length) {
        return
      }

      this.$v.form.$touch()
      if (this.$v.form.$anyError) {
        return console.log(this.$v.form)
      } else {
        const { attributes, relationships } = this.form
        relationships.contacts = {
          data: this.contactsIds.map(marker => ({
            type: 'contacts',
            id: marker
          }))
        }

        const payload = {
          type: 'bulk-update-contacts',
          attributes,
          relationships
        }

        $nuxt.$api
          .bulkUpdateContact(payload)
          .then((data) => {
            if (data.status === 200) {
              Swal.fire('Request Passed!', 'Contacts Edited!', 'success')

              if (this.$route.name !== 'contacts-map') {
                return this.$router.push(`/contacts/${this.contactId}`)
              }

              this.$emit('toggleEditModal')
            }
          })
          .catch((e) => {})
      }
    },
    async phaseChanged ($event) {
      this.statuses = await this.$api.getStatusesByPhase($event)
    },
    async onDistrictChanged ($event) {
      this.sites = await this.$api.getSitesByDistrict($event)
    }
  }
}
</script>
