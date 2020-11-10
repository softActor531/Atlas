<template>
  <div class>
    <div class="row">
      <div class="col-12">
        <div class="page-title-box">
          <h4 class="page-title">Reset Password</h4>
        </div>
      </div>
    </div>

    <div class="row right-to-left">
      <div class="col-xs-12 col-md-4 left-to-right">
        <div class="card">
          <div class="card-body">
            <form action method="post">
              <fieldset>
                <label for="student_id">New Password</label>
                <b-form-input
                  id="student_id-9"
                  type="password"
                  v-model="form.password"
                  :state="validateState($v.form.password)"
                ></b-form-input>
              </fieldset>
              <br />
              <div class="form-group col-xs-12 col-md-12 mb-3 clear">
                <input
                  class="btn btn-primary waves-effect waves-light save_btn"
                  type="submit"
                  value="Save"
                  name="submit"
                  @click="submit"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],

  data() {
    return {
      form: {
        password: ""
      }
    };
  },
  validations: {
    form: {
      password: {
        required
      }
    }
  },
  mounted() {
    if (!this.$store.state.permissions.includes("Edit Scanner")) {
      this.$router.push("/unauthorized");
    }
    $("form").submit(false);
  },
  methods: {
    validateState(item) {
      const { $dirty, $error } = item;
      return $dirty ? !$error : null;
    },
    async submit() {
      this.$v.form.$touch();
      if (this.$v.form.$anyError) return false;
    }
  }
};
</script>
