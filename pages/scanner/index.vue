<template>
  <div class>
    <div class="row">
      <div class="col-12">
        <div class="page-title-box">
          <h4 class="page-title">
            <i class="mdi mdi-barcode-scan" />
            Scan Barcode
          </h4>
        </div>
      </div>
    </div>

    <div class="row right-to-left">
      <div class="col-xs-12 col-md-4 left-to-right">
        <div class="card">
          <div class="card-body">
            <form action method="post">
              <fieldset>
                <legend>Clock In/Out</legend>

                <label for="student_id">Scan G.C. Badge Barcode</label>
                <b-form-input
                  id="student_id-9"
                  v-model="$v.form.barcode.$model"
                  type="text"
                  placeholder="###########"
                  aria-describedby="barcode-live-feedback"
                  :state="validateState($v.form.barcode)"
                />
                <b-form-invalid-feedback id="barcode-live-feedback" v-if="$v.form.$anyError">
                  {{
                    !$v.form.barcode.required ? 'Required'
                    :!$v.form.barcode.numeric ? 'must be numeric'
                      : !$v.form.barcode.maxLength ? `must not exceed ${$v.form.barcode.$params.maxLength.max} chars`
                        : !$v.form.barcode.minlength ? `must be at least ${$v.form.barcode.$params.minLength.min} chars`
                          : null
                  }}
                </b-form-invalid-feedback>
              </fieldset>
              <br>
              <div class="form-group col-xs-12 col-md-12 mb-3 clear">
                <input
                  class="btn btn-primary waves-effect waves-light save_btn"
                  type="submit"
                  value="Add"
                  name="submit"
                  @click="submit"
                >
              </div>
            </form>

            <b-alert v-if="beErrors.length" variant="danger" show>
              <span v-for="err in beErrors" :key="err.status">
                {{ err.title }}
              </span>
            </b-alert>
            <b-alert v-if="feedback" variant="success" show>
              {{ feedback }}
            </b-alert>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, numeric, minLength, maxLength } from 'vuelidate/lib/validators'

export default {
  mixins: [validationMixin],

  data () {
    return {
      form: {
        barcode: ''
      },
      feedback: null,
      beErrors: []
    }
  },
  validations: {
    form: {
      barcode: {
        required,
        numeric,
        minLength: minLength(1),
        maxLength: maxLength(50)
      }
    }
  },
  mounted () {
    if (!this.$store.state.permissions.includes('Edit Scanner')) {
      this.$router.push('/unauthorized')
    }
    $('form').submit(false)
  },
  methods: {
    validateState (item) {
      const { $dirty, $error } = item
      return $dirty ? !$error : null
    },
    submit () {
      this.feedback = null
      this.beErrors = []
      this.$v.form.$touch()
      if (this.$v.form.$anyError) { return false }
      const payload = {
        type: 'student-attendance-entries',
        attributes: { note: '....' },
        relationships: {
          student: { data: { type: 'students', id: this.form.barcode } }
        }
      }
      this.$api
        .createAttendanceEntry(payload)
        .then((data) => {
          console.log(data);
          if(data.data){
            this.beErrors = data.data.errors
          }
          else{
          if (!data.check_out) {
            this.feedback = `Student ${data.student.first_name + ' ' + data.student.last_name} logged in`
          } else {
            this.feedback = `logged out student ${data.student.first_name + ' ' + data.student.last_name}`
          }
          }
        })
        .catch((error) => {
          console.warn(error)
        })
    }
  }
}
</script>
