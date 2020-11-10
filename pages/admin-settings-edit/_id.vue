<template>
  <b-container>
    <h2 class="title">
      Editing Site Setting
    </h2>
    <b-button
      variant="secondary"
      pill
      @click="$router.back()"
    >
      <span class="btn-label">
        <i class="fas fa-arrow-left" />
      </span>
      Go back
    </b-button>

    <h4>{{ profile.setting }}</h4>

    <b-row class="my-4">
      <b-col cols="6">
        <label for="input-live">Unique Key:</label>
        <b-form-input
          v-model="$v.form.uniqueKey.$model"
          placeholder="Enter your uniqueKey"
          :state="validateState('uniqueKey')"
          aria-describedby="email-live-feedback"
        />

        <div class="mt-2">
          <label for="input-live">Content:</label>
          <b-form-input
            v-model="$v.form.content.$model"
            placeholder="Enter your content"
            :state="validateState('content')"
            aria-describedby="email-live-feedback"
          />
        </div>

        <div class="mt-2">
          <label for="input-live">Description:</label>
          <b-form-input
            v-model="$v.form.description.$model"
            placeholder="Enter your description"
            :state="validateState('description')"
            aria-describedby="email-live-feedback"
          />
        </div>
      </b-col>
    </b-row>

    <b-button
      variant="primary"
      pill
      @click="$router.back()"
    >
      <span class="btn-label">
        <i class="fas fa-save" />
      </span>
      Save Setting
    </b-button>
  </b-container>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required } from 'vuelidate/lib/validators'

export default {
  mixins: [validationMixin],
  data () {
    return {
      profile: {},
      form: {
        uniqueKey: '',
        content: '',
        description: ''
      }
    }
  },
  validations: {
    form: {
      uniqueKey: {
        required
      },
      content: {
        required
      },
      description: {
        required
      }
    }
  },
  mounted () {
    console.log(this.$route.params.record)
    this.profile = this.$route.params.record
  },
  methods: {
    validateState (arg) {
      const { $dirty, $anyError } = this.$v.form[arg]
      return $dirty ? !$anyError : null
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
