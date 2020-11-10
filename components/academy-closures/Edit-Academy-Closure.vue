<template>
  <div class="card">
    <div class="card-body">
      <h4 class="mb-3 header-title">
        <i class="fa fa-plus-circle" />
        Create New Closure
      </h4>

      <div v-if="Object.keys(filter).length > 0" class="row">
        <div class="col-md-6 mb-2">
          <label>Districts</label>
          <v-select
            v-model="selectedDistrict"
            :options="
              districts.map((district, index) => {
                return district.name;
              })
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
        <InputGroup
          v-if="filter.name"
          :id="filter.name"
          width="6"
          :important="true"
          label="Name"
          type="text"
          name="closure_name"
          placeholder="please insert the name"
          @closure_nameChanged="filter.name = $event"
        />
        <InputSelectGroup
          v-if="filter.closure_type"
          :id="filter.closure_type"
          width="6"
          :important="true"
          label="Type"
          type="text"
          :array="closureTypes"
          name="closure_type"
          @closure_typeChanged="filter.closure_type = $event"
        />
        <div class="col-md-6">
          <div class="form-group mb-0">
            <label>Start Date</label>
            <!--flat picker for time -->
            <flat-pickr
              v-model="filter.start_date"
              :config="dateConfig"
              class="date-picker form-control flatpickr-input"
            />
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label>End Date</label>
            <!--flat picker for time -->
            <flat-pickr
              v-model="filter.end_date"
              :config="dateConfig"
              class="date-picker form-control flatpickr-input"
            />
          </div>
        </div>
        <div class="col-md-6">
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
        <div class="col-md-6">
          <div class="form-group mb-0">
            <label>End Time</label>
            <!--flat picker for time -->
            <flat-pickr
              v-model="filter.end_time"
              class="date-picker form-control flatpickr-input"
              :config="config"
            />
          </div>
        </div>
        <div class="col-md-12 mt-3">
          <div class="form-group">
            <label for="name">Reason</label>
            <textarea
              v-model="filter.reason"
              class="form-control"
              name="reason"
              spellcheck="false"
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
              true-value="1"
              false-value="0"
            >
            <label for="active">Active?</label>
          </div>
        </div>
        <div class="col-xs-12 col-md-3">
          <div class="form-group pt-2">
            <input
              id="all_day"
              v-model="filter.all_day"
              type="checkbox"
              name="all_day"
              true-value="1"
              false-value="0"
            >
            <label for="all_day">All-Day?</label>
          </div>
        </div>
        <div class="col-xs-12 col-md-3">
          <div class="form-group pt-2">
            <input
              id="availableOnSite"
              v-model="filter.available_on_site"
              type="checkbox"
              name="Available-On-Site"
              true-value="1"
              false-value="0"
            >
            <label for="availableOnSite"> Available On-Site?</label>
          </div>
        </div>
        <div class="col-xs-12 col-md-3">
          <div class="form-group pt-2">
            <input
              id="availableVirtually"
              v-model="filter.available_virtually"
              type="checkbox"
              name="Available_Virtually"
              true-value="1"
              false-value="0"
            >
            <label for="availableVirtually"> Available Virtually?</label>
          </div>
        </div>
        <div class="col-xs-12 col-md-12">
          <div class="float-right">
            <button
              type="submit"
              class="btn btn-blue waves-effect waves-light mb-2"
              @click="save"
            >
              <i class="mdi mdi-circle-edit-outline" /> Save
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import flatPickr from 'vue-flatpickr-component'
// import Vue from "vue";
import InputGroup from '../../components/UI/InputGroup'
import InputSelectGroup from '../../components/UI/InputSelectGroup'

export default {
  name: 'CreateClosure',

  components: {
    InputGroup,
    InputSelectGroup,
    flatPickr
  },

  props: {
    academyClosure: {
      type: Object,
      default: {}
    }
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
        dateFormat: 'd/m/Y'
      },
      filter: { ...this.academyClosure },
      selectedSites: [],
      selectedDistrict: '',
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
    academyClosure (val) {
      this.filter = { ...val }
      if (this.filter.sites.length > 0) {
        this.selectedDistrict = this.filter.sites[0].district.name
      }
    },
    selectedDistrict (val) {
      const selectedDistrict = this.districts.find((obj) => {
        return obj.name === val
      })

      this.selectedDistrictSites = selectedDistrict
        ? selectedDistrict.sites
        : []

      this.selectedSites = this.filter.sites.map(site => site.name)
    },
    selectedSites (val) {
      this.$store.commit('academyClosures/getSelectedSitedIds', {
        val,
        sites: this.sites
      })

      this.filter.sites = this.$store.getters[
        'academyClosures/selectedSitedIds'
      ]
    },
    districts () {
      this.setInitialSites()
    }
  },

  mounted () {
    this.getAcademyClosureDistrects()
  },

  methods: {
    setInitialSites () {
      this.sites = this.districts.map(district => district.sites)
      this.sites = [].concat(...this.sites)
    },
    getAcademyClosureDistrects () {
      this.$store.dispatch('academyClosures/getDistricts')
    },
    save () {
      let {
        id,
        sites,
        type,
        relationshipNames,
        links,
        ...attributes
      } = this.filter
      // return console.log(sites, attributes);
      sites = this.selectedSites.map((siteName) => {
        return {
          type: 'sites',
          id: this.sites.find(site => site.name === siteName).id
        }
      })

      const data = {
        data: {
          type: 'academy-closures',
          id: this.$route.params.id,
          attributes,
          relationships: {
            sites: {
              data: sites
            }
          }
        }
      }

      this.$axios
        .patch(`http://atlas-rebuild-api.mtcdevsite.com/api/v1/academy-closures/${this.$route.params.id}`, data)
        .then((res) => {
          Swal.fire(
            'Request Success!',
            'Closure Updated!',
            'success'
          )
          this.$router.back()
        })
        .catch((e) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Cannot progress request! Please contact administrator'
          })
        })
    }
  }
}
</script>

<style>
@import url("https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css");
</style>
