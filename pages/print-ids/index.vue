<template>
  <b-container>
    <h3 class="page-title">
      Print ID Report
    </h3>

    <b-button
      variant="secondary"
      pill
      class="mb-3"
      @click="$router.back()"
    >
      <span class="btn-label">
        <i class="fas fa-arrow-left" />
      </span>
      Go back
    </b-button>

    <div class="container">
      <b-row>
        <b-col cols="3">
          <b-form-select
            v-model="filters.role"
            :options="roles"
            class="mb-3"
            aria-describedby="role-live-feedback"
          />
        </b-col>

        <b-col cols="3">
          <b-form-select
            v-model="filters.acceleration"
            :options="accelerations"
            class="mb-3"
            aria-describedby="acceleration-live-feedback"
          />
        </b-col>

        <b-col cols="3">
          <b-form-select
            v-model="filters.phase"
            :options="phases"
            class="mb-3"
            aria-describedby="phase-live-feedback"
          />
        </b-col>

        <b-col cols="3">
          <b-form-select
            v-model="filters.statusOption"
            :options="statusOptions"
            class="mb-3"
            aria-describedby="option-live-feedback"
          />
        </b-col>

        <b-col cols="3">
          <b-form-select
            v-model="filters.district"
            :options="districts"
            class="mb-3"
            aria-describedby="option-live-feedback"
          />
        </b-col>

        <b-col cols="3">
          <b-form-select
            v-model="filters.activation"
            :options="activations"
            class="mb-3"
            aria-describedby="option-live-feedback"
          />
        </b-col>

        <b-col cols="3">
          <b-form-select
            v-model="filters.profileImage"
            :options="profileImages"
            class="mb-3"
            aria-describedby="option-live-feedback"
          />
        </b-col>

        <b-col cols="3">
          <b-form-select
            v-model="filters.createdAt"
            :options="createdAts"
            class="mb-3"
            aria-describedby="option-live-feedback"
          />
        </b-col>

        <b-col cols="3">
          <b-form-select
            v-model="filters.uploadDate"
            :options="uploadDates"
            class="mb-3"
            aria-describedby="option-live-feedback"
          />
        </b-col>

        <b-col cols="3">
          <b-form-input
            v-model="filters.first_name"
            placeholder="Enter your first_name"
            aria-describedby="first_name-live-feedback"
          />
        </b-col>

        <b-col cols="3">
          <b-form-input
            v-model="filters.last_name"
            placeholder="Enter your last_name"
            aria-describedby="last_name-live-feedback"
          />
        </b-col>
      </b-row>
      <b-button
        variant="primary"
        class="mb-3"
        size="sm"
      >
        <span class="btn-label">
          <i class="fas fa-search" />
        </span>
        filter
      </b-button>
    </div>

    <b-row align-h="end">
      <b-button
        variant="primary"
        class="mb-3"
        size="sm"
      >
        <span class="btn-label">
          <i class="fas fa-print" />
        </span>
        Print
      </b-button>
    </b-row>

    <Table :items="items" :fields="printIdsTable" selectable enable-search @selected-rows="logit" />
  </b-container>
</template>

<script>
// import { validationMixin } from 'vuelidate'
// import { required } from 'vuelidate/lib/validators'
import Table from '../../components/shared/Table.vue'

export default {
  components: { Table },
  // mixins: [validationMixin],
  asyncData ({ $api }) {
    return $api.getStudents()
      .then((data) => {
        return {
          items: data
        }
      })
      .catch((error) => {
        console.log(error)
      })
  },
  data () {
    return {
      roles: [
        { value: null, text: '--filter roles--' },
        { value: '1', text: 'role1' },
        { value: '2', text: 'role2' }
      ],
      accelerations: [
        { value: null, text: '--filter accelerations--' },
        { value: '1', text: 'acceleration1' },
        { value: '2', text: 'acceleration,2' }
      ],
      phases: [
        { value: null, text: '--filter phases--' },
        { value: '1', text: 'phase1' },
        { value: '2', text: 'phase2' }
      ],
      statusOptions: [
        { value: null, text: '--filter statusOptions--' },
        { value: '1', text: 'Status Option1' },
        { value: '2', text: 'Status Option2' }
      ],
      districts: [
        { value: null, text: '--filter districts--' },
        { value: '1', text: 'district1' },
        { value: '2', text: 'district2' }
      ],
      activations: [
        { value: null, text: '--filter activations--' },
        { value: '1', text: 'activated' },
        { value: '0', text: 'deactivated' }
      ],
      profileImages: [
        { value: null, text: '--filter profileImages--' },
        { value: '1', text: 'Has Image' },
        { value: '0', text: 'No Image' }
      ],
      createdAts: [
        { value: null, text: '--filter createdAts--' },
        { value: '1', text: 'time1' },
        { value: '2', text: 'time2' },
        { value: '3', text: 'time3' },
        { value: '4', text: 'time4' },
        { value: '5', text: 'time5' },
        { value: '6', text: 'time6' },
        { value: '7', text: 'time7' }
      ],
      uploadDates: [
        { value: null, text: '--filter uploadDates--' },
        { value: '1', text: 'time1' },
        { value: '2', text: 'time2' },
        { value: '3', text: 'time3' },
        { value: '4', text: 'time4' },
        { value: '5', text: 'time5' },
        { value: '6', text: 'time6' },
        { value: '7', text: 'time7' }
      ],
      printIdsTable: [
        'selected',
        { key: 'image', label: 'Image', sortable: true },
        { key: 'role', label: 'role', sortable: true },
        { key: 'first_name', label: 'First Name', sortable: true },
        { key: 'last_name', label: 'Last Name', sortable: true },
        { key: 'status.phase.name', label: 'Phase', sortable: true },
        { key: 'status.name', label: 'Status', sortable: true }
      ],

      filters: {
        role: null,
        acceleration: null,
        phase: null,
        statusOption: null,
        district: null,
        activation: null,
        profileImage: null,
        createdAt: null,
        uploadDate: null,
        first_name: null,
        last_name: null
      }
    }
  },
  methods: {
    validateState (arg) {
      const { $dirty, $anyError } = this.$v.filters[arg]
      return $dirty ? !$anyError : null
    },
    logit (x) {
      console.log(x)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
