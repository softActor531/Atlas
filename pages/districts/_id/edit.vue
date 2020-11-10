<template>
  <div>
    <h1>Edit District: {{ $route.params.id }}</h1>

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

    <p><em><span class="red">*</span>Required.</em></p>

    <div>
      <div class="form-group">
        <label for="input-live">Abbr:</label>
        <b-form-input
          v-model="form.abbr"
          placeholder="Enter your abbr"
          aria-describedby="abbr-live-feedback"
        />
        <b-form-invalid-feedback id="abbr-live-feedback">
          Abbr required!
        </b-form-invalid-feedback>
        >
      </div>

      <div class="form-group">
        <label for="input-live">District Name:</label>
        <b-form-input
          v-model="$v.form.name.$model"
          placeholder="Enter your name"
          :state="validateState('name')"
          aria-describedby="name-live-feedback"
        />
        <b-form-invalid-feedback id="name-live-feedback">
          District Name required!
        </b-form-invalid-feedback>
        >
      </div>
      <div class="form-group">
        <label for="abbr" class="required">Time Zone</label>
        <select class="form-control" name="timezone">
          <option v-for="option in options" :key="option.id">
            {{ option }}
          </option>
        </select>
      </div>
    </div>

    <input type="submit" class="btn btn-success" value="Save" name="submit">
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required } from 'vuelidate/lib/validators'

export default {
  name: 'Edit',
  mixins: [validationMixin],
  data () {
    return {
      form: {
        name: ''
      },
      options: [
        'America/New_York',
        'America/Chicago',
        'America/Denver',
        'America/Phoenix',
        'America/Los_Angeles',
        'America/Anchorage',
        'America/Adak',
        'Pacific/Honolulu'
      ]
    }
  },
  validations: {
    form: {
      name: {
        required
      }
    }
  },
  methods: {
    validateState (arg) {
      const { $dirty, $anyError } = this.$v.form[arg]
      return $dirty ? !$anyError : null
    }
  }
}
</script>

<style>
</style>
