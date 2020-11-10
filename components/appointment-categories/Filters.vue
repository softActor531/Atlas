<template>
  <div class="card p-2">
    <div class="mb-3">
      <h4 class="header-title float-left">
        <i class="mdi mdi-filter" />
        Filter Categories
      </h4>
      <div class="float-right">
        <nuxt-link
          to="appointment-categories/create"
          class="btn btn-blue waves-effect waves-light"
        >
          <i class="mdi mdi-plus-box-outline" /> Create New Category
        </nuxt-link>
      </div>
    </div>
    <div class="row">
      <InputSelectGroup
        v-model="filter.included.site"
        width="4"
        :important="true"
        label="Sites"
        type="text"
        :array="sites"
      />
      <InputGroup
        v-model="filter.attributes.name"
        :width="4"
        :important="true"
        label="Name"
        type="text"
        placeholder="name"
      />
      <InputSelectGroup
        v-model="filter.attributes.status"
        width="4"
        :important="true"
        label="Status"
        :array="status"
      />
      <div class="col-md-6">
        <div class="form-group">
          <label>Duration</label>
          <div class="input-group">
            <div class="radio radio-info form-check-inline mr-4">
              <input
                id="inMinutesDuration"
                v-model="filter.attributes.duration"
                type="radio"
                class="duration"
                value="in minutes"
                name="duration"
              >
              <label for="inMinutesDuration">In Minutes</label>
            </div>
            <div class="radio form-check-inline mr-4">
              <input
                id="setTimeDuration"
                v-model="filter.attributes.duration"
                type="radio"
                class="duration"
                value="set time"
                name="duration"
              >
              <label for="setTimeDuration">Set Time</label>
            </div>
            <div class="radio radio-blue form-check-inline">
              <input
                id="recurringDuration"
                v-model="filter.attributes.duration"
                type="radio"
                class="duration"
                value="recurring"
                name="duration"
              >
              <label for="recurringDuration">Recurring</label>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <label>GC Can Select?</label>
          <div class="input-group">
            <div class="radio radio-info form-check-inline mr-4">
              <input
                id="yesGCSelect"
                v-model="filter.attributes.canSelect"
                type="radio"
                value="yes"
                name="gc_self_select"
              >
              <label for="yesGCSelect">Yes</label>
            </div>
            <div class="radio form-check-inline mr-4">
              <input
                id="noGCSelect"
                v-model="filter.attributes.canSelect"
                type="radio"
                value="no"
                name="gc_self_select"
              >
              <label for="noGCSelect">No</label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="text-right">
      <button
        id="reset"
        type="button"
        class="btn btn-blue waves-effect waves-light"
        @click="reset"
      >
        <i class="mdi mdi-filter-outline" /> Reset
      </button>
      <button
        type="submit"
        class="btn btn-blue waves-effect waves-light"
        @click="applyfilter"
      >
        <i class="mdi mdi-filter-outline" /> Filter
      </button>
    </div>
  </div>
</template>

<script>
import InputGroup from '../UI/InputGroup'
import InputSelectGroup from '../UI/InputSelectGroup'
import { getAppointmentSites } from '../../Api'

export default {
  name: 'Filters',

  components: {
    InputGroup,
    InputSelectGroup
  },

  data () {
    return {
      sites: [],
      status: ['Active', 'Inactive'],
      filter: {
        attributes: {
          name: '',
          status: '',
          duration: '',
          canSelect: ''
        },
        included: {
          site: ''
        }
      }
    }
  },

  mounted () {
    this.getAppointmentSites()
  },

  methods: {
    getAppointmentSites () {
      return getAppointmentSites()
        .then((data) => {
          const sites = this.$formatter.deserialize(data)
          this.sites = sites.map(site => site.name)
        })
        .catch((e) => {
          console.log(e)
        })
    },
    applyfilter () {
      const filters = { ...this.filter.attributes, ...this.filter.included }
      const query = {}

      Object.keys(filters).forEach((filterProperty) => {
        if (filters[filterProperty] === '') {
          return
        }

        query[filterProperty] = filters[filterProperty]
      })

      console.log(filters)

      // this.$router.push({ query })
    },
    reset () {
      this.$router.push({ query: {} })
    }
  }
}
</script>
