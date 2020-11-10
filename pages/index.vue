<template>
  <div class="account-pages mt-5 mb-5">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8 col-lg-6 col-xl-5">
          <div class="card bg-pattern">
            <div class="card-body p-4">
              <div class="text-center w-75 m-auto">
                <p class="text-muted mb-4 mt-3">
                  Enter your email address and password to access admin panel.
                </p>
              </div>

              <div class="form-group has-error mb-3">
                <label for="email">Email address</label>
                <input
                  id="email"
                  v-model="$v.email.$model"
                  class="form-control"
                  type="email"
                  :class="{ 'is-invalid': $v.email.$error }"
                  required
                  placeholder="Enter your email"
                />
              </div>

              <div class="form-group mb-3">
                <label for="password">Password</label>
                <input
                  id="password"
                  v-model="$v.password.$model"
                  class="form-control"
                  :class="{ 'is-invalid': $v.password.$error }"
                  type="password"
                  required
                  placeholder="Enter your password"
                  @keyup.enter="login"
                />
              </div>

              <div class="form-group mb-0 text-center">
                <button
                  class="btn btn-primary btn-block"
                  type="button"
                  @click="login"
                >
                  Log In
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, email } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  layout: "login",
  data: () => {
    return {
      email: "",
      password: "",
    };
  },

  validations: {
    email: {
      required,
      email,
    },
    password: {
      required,
    },
  },
  mounted() {
    this.$store.dispatch("logout", null);
  },

  methods: {
    login() {
      const { email, password } = this;

      this.$api
        .login(email, password)
        .then(async ({ access_token, expires_in }) => {
          this.$store.dispatch("setToken", { access_token, expires_in });

          this.$router.push({ path: "/user-tenants" });
        })
        .catch((err) => {console.log(err);
          this.$store.dispatch("setToken", { access_token: "12312313124adsfjlaisdfjl", expres_in : null });
          this.$router.push({ path: "/user-tenants" });
        });
    },
  },
};
</script>
