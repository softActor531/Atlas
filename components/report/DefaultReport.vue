<template>
  <b-row class="mb-4">
    <b-col md="4" sm="12">
      <VSelectGroup
        label="District"
        id="district"
        placeholder="All/Any Districts"
        :options="districts"
        :selected="district"
        :v="v['district']"
        @districtChanged="handleChange('default', 'district', $event)"
        required
      />
    </b-col>
  </b-row>
</template>
<script>
import { ValidateInputMixin } from "~/mixin/validateInput"
import VSelectGroup from "../UI/VSelectGroup";

export default {
  mixins: [ValidateInputMixin],
  components: {
    VSelectGroup
  },
  props: {
    form: Object,
    districts: Array,
    v: Object,
  },
  data() {
    return {
      ...this.form,
    }
  },
}
</script>