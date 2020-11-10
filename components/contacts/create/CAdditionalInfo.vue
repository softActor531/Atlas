<template>
  <b-card class="student-setup-card">
    <b-card-text class="text-uppercase">ADDITIONAL INFO</b-card-text>
    <div>
      <b-row>
        <b-col>
          <b-form-group id="notes" label-for="notes" label="Note">
            <b-form-textarea
              id="notes"
              v-model="notes"
              @input="handleChange('additionalInfo', 'notes', $event)"
              rows="10"
            ></b-form-textarea>
          </b-form-group>
        </b-col>
      </b-row>
    </div>
  </b-card>
</template>

<script>
import VInputGroup from "../../UI/VInputGroup";
import VSelectGroup from "../../UI/VSelectGroup";
import { ValidateInputMixin } from "../../../mixin/validateInput";

export default {
  mixins: [ValidateInputMixin],
  components: {
    VInputGroup,
    VSelectGroup
  },

  props: {
    form: Object
  },

  data() {
    return {
      ...this.form
    };
  }
};
</script>
<style lang="scss">
.student-setup-card {
  .card-text {
    margin: 10px 0;
    font-weight: 500;
    font-family: "Cerebri Sans,sans-serif";
    color: #343a40;
    font-size: 20px;
  }
}
</style>
