<template>
  <div v-if="initialData" class="page-wrapper">
    <PageTitle>Add New Contact</PageTitle>

    <b-row>
      <b-col>
        <b-form @submit.stop.prevent="onSubmit">
          <CRequirements
            :phases="initialData.phases"
            :priorities="initialData.priorities"
            :districts="initialData.districts"
            :form="form.requirements"
            :v="$v.form.requirements"
            @handleChange="handleChange"
          />
          <CContactInfo
            :states="states"
            :form="form.contactInfo"
            :v="$v.form.contactInfo"
            @handleChange="handleChange"
          />
          <CEeocInfo
            :form="form.eeocInfo"
            :v="$v.form.eeocInfo"
            @handleChange="handleChange"
          />
          <CPastSchoolInfo
            :cohort-years="initialData.cohortYears"
            :grade-levels="initialData.gradeLevels"
            :advocates="initialData.advocates"
            :community-advocates="initialData.communityAdvocates"
            :form="form.pastSchoolInfo"
            :v="$v.form.pastSchoolInfo"
            @handleChange="handleChange"
          />
          <CAdditionalInfo
            :form="form.additionalInfo"
            :v="$v.form.additionalInfo"
            @handleChange="handleChange"
          />
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
import Swal from 'sweetalert2'
import CRequirements from '@/components/contacts/create/CRequirements'
import CContactInfo from '@/components/contacts/create/CContactInfo'
import CEeocInfo from '@/components/contacts/create/CEeocInfo'
import CPastSchoolInfo from '@/components/contacts/create/CPastSchoolInfo'
import CAdditionalInfo from '@/components/contacts/create/CAdditionalInfo'

import { validationMixin } from 'vuelidate'
import {
  required,
  email,
  minLength,
  maxLength,
  numeric
} from 'vuelidate/lib/validators'
import moment from 'moment'

export default {
  name: 'Create',
  components: {
    CRequirements,
    CContactInfo,
    CEeocInfo,
    CPastSchoolInfo,
    CAdditionalInfo
  },
  mixins: [validationMixin],
  props: {
    coordinates: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      form: {
        requirements: {
          first_name: '',
          middle_name: '',
          last_name: '',
          district_id: '',
          academy_id: '',
          district: null,
          site: null,
          priority: null,
          student_referred: null,
          student_referred_input: '',
          referralName: '',
          phase: null,
          status: null
        },
        contactInfo: {
          street_address: '',
          street_address_line_2: '',
          city: '',
          state: null,
          zip_code: '',
          country: '',
          primary_phone: '',
          secondary_phone: '',
          primary_phone_bad: false,
          secondary_phone_bad: false,
          email: ''
        },
        eeocInfo: {
          birthdate: ''
        },
        pastSchoolInfo: {
          cohort_year: null,
          grade_level: null,
          past_school: '',
          withdrawal_code: '',
          withdrawal_date: '',
          community_outreach_advocate: null,
          outreach_resource_advocate: null
        },
        additionalInfo: {
          notes: ''
        }
      },
      config: {
        dateFormat: 'm/d/Y'
      },
      states: [
        'Alaska',
        'Alabama',
        'Arkansas',
        'American Samoa',
        'Arizona',
        'California',
        'Colorado',
        'Connecticut',
        'District of Columbia',
        'Delaware',
        'Florida',
        'Georgia',
        'Guam',
        'Hawaii',
        'Iowa',
        'Idaho',
        'Illinois',
        'Indiana',
        'Kansas',
        'Kentucky',
        'Louisiana',
        'Massachusetts',
        'Maryland',
        'Maine',
        'Michigan',
        'Minnesota',
        'Missouri',
        'Mississippi',
        'Montana',
        'North Carolina',
        'North Dakota',
        'Nebraska',
        'New Hampshire',
        'New Jersey',
        'New Mexico',
        'Nevada',
        'New York',
        'Ohio',
        'Oklahoma',
        'Oregon',
        'Pennsylvania',
        'Puerto Rico',
        'Rhode Island',
        'South Carolina',
        'South Dakota',
        'Tennessee',
        'Texas',
        'Utah',
        'Virginia',
        'Virgin Islands',
        'Vermont',
        'Washington',
        'Wisconsin',
        'West Virginia',
        'Wyoming'
      ],
      phases: [],
      statuses: [],
      districts: [],
      priorities: [],
      sites: [],
      advocates: [],
      communityAdvocates: [],
      cohortYears: [],
      gradeLevels: [],
      api: ''
    }
  },
  computed: {
    initialData () {
      return this.$store.getters['contact/initialData']
    }
  },
  mounted () {
    if (!this.$store.state.permissions.includes('Create New Contact')) {
      this.$router.push('/unauthorized')
    }
    $('form').submit(false)
  },
  validations: {
    form: {
      requirements: {
        first_name: { required },
        last_name: { required },
        district_id: { required },
        phase: { required },
        status: { required },
        academy_id: { required },
        priority: { required },
        referralName: { required },
        district: { required },
        site: { required }
      },
      contactInfo: {
        street_address: { required },
        city: { required },
        state: { required },
        zip_code: {
          required,
          numeric,
          minLength: minLength(5),
          maxLength: maxLength(5)
        },
        primary_phone: { required },
        secondary_phone: { required },
        country: { required },
        email: {
          required,
          email
        }
      },
      eeocInfo: {
        birthdate: { required }
      },
      pastSchoolInfo: {
        cohort_year: { required },
        grade_level: { required },
        past_school: { required },
        withdrawal_code: { required },
        withdrawal_date: { required },
        community_outreach_advocate: { required },
        outreach_resource_advocate: { required }
      }
    }
  },
  methods: {
    handleChange (data) {
      const { parent, variable_name, event } = data
      this.form[parent][variable_name] = event
    },

    onSubmit () {
      this.$v.form.$touch()
      if (this.$v.form.$anyError) {
      } else {
        const {
          requirements,
          contactInfo,
          eeocInfo,
          pastSchoolInfo,
          additionalInfo
        } = this.form
        const payload = {
          type: 'contacts',
          attributes: {
            first_name: requirements.first_name,
            middle_name: requirements.middle_name,
            last_name: requirements.last_name,
            district_id: requirements.district_id,
            academy_id: requirements.academy_id,
            priority: requirements.priority,
            city: contactInfo.city,
            state: contactInfo.state,
            county: contactInfo.country,
            lat: this.coordinates ? this.coordinates.lat : '',
            lng: this.coordinates ? this.coordinates.lng : '',
            zip_code: contactInfo.zip_code,
            email: contactInfo.email,
            birthdate: moment(eeocInfo.birthdate).format('MM/DD/YYYY'),
            cohort_year: pastSchoolInfo.cohort_year,
            grade_level: pastSchoolInfo.grade_level,
            past_school_attended: pastSchoolInfo.past_school,
            withdrawal_code: pastSchoolInfo.withdrawal_code,
            withdrawal_date: moment(pastSchoolInfo.withdrawal_date).format(
              'MM/DD/YYYY'
            ),
            notes: additionalInfo.notes,
            hear_about: 'Other',
            referred_by: requirements.referralName,
            street_address_1: contactInfo.street_address,
            street_address_2: contactInfo.street_address_line_2,
            phone_1: contactInfo.primary_phone,
            phone_2: contactInfo.secondary_phone,
            phone_1_bad: contactInfo.primary_phone_bad,
            phone_2_bad: contactInfo.secondary_phone_bad
          },
          relationships: {
            community_outreach_advocate: {
              data: {
                type: 'users',
                id: pastSchoolInfo.community_outreach_advocate
              }
            },
            outreach_resource_advocate: {
              data: {
                type: 'users',
                id: pastSchoolInfo.outreach_resource_advocate
              }
            },
            site: { data: { type: 'sites', id: requirements.site } },
            status: { data: { type: 'statuses', id: requirements.status } }
          }
        }

        $nuxt.$api
          .createContact(payload)
          .then((data) => {
            if (data.status === 201) {
              if (this.$route.name !== 'contacts-map') {
                return this.$router.push('/contacts')
              }

              Swal.fire('Request Passed!', 'Contact Created!', 'success')
              this.$emit('toggleCreateModal')
            }
          })
          .catch((e) => {
            console.log(e)
            $nuxt.error(new Error())
          })
      }
    }
  }
}
</script>
