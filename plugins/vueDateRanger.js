import Vue from 'vue'
import DateRangePicker from 'vue2-daterange-picker'
import VMdDateRangePicker from "v-md-date-range-picker";

//you need to import the CSS manually (in case you want to override it)
import 'vue2-daterange-picker/dist/vue2-daterange-picker.css'

Vue.use(VMdDateRangePicker);
Vue.use(DateRangePicker)