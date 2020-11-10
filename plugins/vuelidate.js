import Vue from 'vue'
import Vuelidate from 'vuelidate'
import VuelidateErrorExtractor, { templates } from "vuelidate-error-extractor";

const messages = {
  required: "This field is required.",
  email: "Email is invalid."
};

Vue.use(Vuelidate)
Vue.use(VuelidateErrorExtractor, {
  messages,
});