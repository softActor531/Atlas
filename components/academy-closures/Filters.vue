<template>
  <div class="card pb-3">
    <div class="card-body">
      <h4 class="header-title float-left">
        <i class="mdi mdi-filter" />
        Filter Closures
      </h4>
      <nuxt-link
        to="/academy-closures/create"
        class="btn btn-primary btn-rounded waves-effect waves-light float-right"
      >
        <i class="fa fa-plus-circle" /> Create New Closure
      </nuxt-link>
    </div>

    <div class="container mt-3">
      <div class="row">
        <div class="col-md-6 mb-2">
          <label>Districts</label>
          <v-select
            :options="
              districts.map((district, index) => {
                return district.name;
              })
            "
            @input="
              selectedDistrict = districts.find(
                district => district.name == $event
              ).id
            "
          />
        </div>
        <div class="col-md-6 mb-2">
          <label>Sites</label>
          <v-select
            v-model="selectedSites"
            :options="
              selectedDistrictSites.map(site => {
                return site.name;
              })
            "
            taggable
            multiple
          />
        </div>
        <InputSelectGroup
          :id="this.$route.query.type"
          width="6"
          :important="true"
          label="Type"
          type="text"
          name="closure_types"
          :array="closureTypes"
          @closure_typesChanged="filter.type = $event"
        />
        <InputGroup
          :id="this.$route.query.name"
          :width="6"
          :important="true"
          label="Name"
          type="text"
          placeholder="please insert the name"
          name="closure_name"
          @closure_nameChanged="filter.name = $event"
        />
        <div class="col-md-6 col-12">
          <label>Start Date</label>
          <!--flat picker for time -->
          <flat-pickr
            v-model="filter.start_date"
            :value="this.$route.query.name"
            :config="dateConfig"
            class="date-picker form-control flatpickr-input"
          />
        </div>
        <div class="col-md-6 col-12">
          <label>End Date</label>
          <!--flat picker for time -->
          <flat-pickr
            v-model="filter.end_date"
            :config="dateConfig"
            class="date-picker form-control flatpickr-input"
          />
        </div>
        <div class="col-md-6 col-12 mt-2">
          <div class="form-group">
            <label>Start Time</label>
            <!--flat picker for time -->
            <flat-pickr
              v-model="filter.start_time"
              class="date-picker form-control flatpickr-input"
              :config="config"
            />
          </div>
        </div>
        <div class="col-md-6 col-12 mt-2">
          <div class="form-group">
            <label>End Time</label>
            <!--flat picker for time -->
            <flat-pickr
              v-model="filter.end_time"
              class="date-picker form-control flatpickr-input"
              :config="config"
            />
          </div>
        </div>
        <div class="col-xs-12 col-md-3">
          <div class="form-group pt-2">
            <input
              id="active"
              v-model="filter.active"
              type="checkbox"
              name="active"
              :true-value="parseInt(1)"
              :false-value="parseInt(0)"
            >
            <label for="active">Active?</label>
          </div>
        </div>
        <div class="col-xs-12 col-md-3">
          <div class="form-group pt-2">
            <input
              id="All-Day"
              v-model="filter.all_day"
              type="checkbox"
              name="All-Day"
              :true-value="parseInt(1)"
              :false-value="parseInt(0)"
            >
            <label for="All-Day">All Day? </label>
          </div>
        </div>
        <div class="col-xs-12 col-md-3">
          <div class="form-group pt-2">
            <input
              id="available"
              v-model="filter.available_on_site"
              type="checkbox"
              name="available"
              :true-value="parseInt(1)"
              :false-value="parseInt(0)"
            >
            <label for="available">Available On Site?</label>
          </div>
        </div>
        <div class="col-xs-12 col-md-3">
          <div class="form-group pt-2">
            <input
              id="Virtually"
              v-model="filter.available_virtually"
              type="checkbox"
              name="Virtually"
              :true-value="parseInt(1)"
              :false-value="parseInt(0)"
            >
            <label for="Virtually">Available Virtually?</label>
          </div>
        </div>
        <div class="col-xs-12 col-md-12">
          <div class="float-right">
            <button
              id="reset"
              type="button"
              class="btn btn-blue waves-effect waves-light mb-2"
              @click="reset"
            >
              <i class="mdi mdi-filter-outline" /> Reset
            </button>
            <button
              type="submit"
              class="btn btn-blue waves-effect waves-light mb-2"
              @click="applyfilter"
            >
              <i class="mdi mdi-filter-outline" /> Filter
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import flatPickr from 'vue-flatpickr-component'
import InputGroup from '../../components/UI/InputGroup'
import InputSelectGroup from '../../components/UI/InputSelectGroup'

export default {
  name: 'Filters',

  components: {
    InputGroup,
    InputSelectGroup,
    flatPickr
  },

  data () {
    return {
      date: '',
      startTime: '',
      endTime: '',
      config: {
        noCalendar: true,
        enableTime: true,
        dateFormat: 'H:i'
      },
      dateConfig: {
        dateFormat: 'm/d/Y'
      },
      filter: {
        name: '',
        type: '',
        start_date: this.$route.query['start-date'] ?? '',
        end_date: this.$route.query['end-date'] ?? '',
        start_time: this.$route.query['start-time'] ?? '',
        end_time: this.$route.query['end-time'] ?? '',
        active: this.$route.query.active ?? 0,
        all_day: this.$route.query['all-day'] ?? 0,
        available_on_site: this.$route.query['available-on-site'] ?? 0,
        available_virtually: this.$route.query['available-virtually'] ?? 0,
        sites: []
      },
      selectedDistrict: [],
      selectedSites: [],
      selectedDistrictSites: [],
      sites: []
    }
  },

  computed: {
    districts () {
      return this.$store.getters['academyClosures/districts']
    },
    closureTypes () {
      return this.$store.getters['academyClosures/closureTypes']
    }
  },

  watch: {
    selectedDistrict (val) {
      const selectedDistrict = this.districts.find((obj) => {
        return obj.id === val
      })
      this.selectedDistrictSites = selectedDistrict
        ? selectedDistrict.sites
        : []
    },
    selectedSites (val) {
      this.$store.dispatch('academyClosures/getSelectedSitedIds', {
        val,
        sites: this.sites
      })

      this.filter.sites = this.$store.getters[
        'academyClosures/selectedSitedIds'
      ]
    },
    districts () {
      this.setInitialSelectedSites()
    }
  },

  mounted () {
    this.getAcademyClosureDistrects()
  },

  methods: {
    setInitialSelectedSites () {
      this.sites = this.districts.map(district => district.sites)
      this.sites = [].concat(...this.sites)

      if (!this.$route.query.sites) { return }

      this.selectedSites = this.$route.query.sites.map(
        siteId => this.sites.find(site => site.id == siteId).name
      )
    },
    getAcademyClosureDistrects () {
      this.$store.dispatch('academyClosures/getDistricts')
    },
    applyfilter () {
      console.log(this.filter)

      const {
        type,
        name,
        start_date,
        end_date,
        start_time,
        end_time,
        active,
        all_day,
        sites,
        available_on_site,
        available_virtually
      } = this.filter

      const url = 'http://atlas-rebuild-api.mtcdevsite.com/api/v1/academy-closures'

      const typeStr = type.length ? `&filter[type]=${type}` : ''
      const nameStr = name.length ? `&filter[name]=${name}` : ''
      const startDate = start_date ? `&filter[start-date]=${start_date}` : ''
      const endDate = end_date ? `&filter[end_date]=${end_date}` : ''
      const startTime = start_time ? `&filter[start-time]=${start_time}` : ''
      const endTime = end_time ? `&filter[end-time]=${end_time}` : ''
      const activeStr = active ? `&filter[active]=${active}` : ''
      const allDay = all_day ? `&filter[all-day]=${all_day}` : ''
      const sitesArr = sites.length ? `&filter[sites]=${sites}` : ''
      const onSite = available_on_site ? `&filter[available-on-site]=${available_on_site}` : ''
      const virtual = available_virtually ? `&filter[available-virtually]=${available_virtually}` : ''

      const fullStringlink = url + typeStr + nameStr + startDate + endDate + startTime + endTime + activeStr + allDay + sitesArr + onSite + virtual
      this.$emit('click-filter', fullStringlink)
    },
    reset () {
      this.$router.push({ query: {} })
    }
  }
}
</script>

<style>
@import url("https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css");
</style>
