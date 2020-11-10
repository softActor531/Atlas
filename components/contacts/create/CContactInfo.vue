<template>
  <b-card class="student-setup-card">
    <b-card-text class="text-uppercase">Contact Information</b-card-text>
    <div>
      <b-row>
        <b-col md="6" sm="12">
          <VInputGroup
            label="Street Address Line 1"
            id="street_address"
            type="text"
            :value="street_address"
            :v="v['street_address']"
            @street_addressChanged="
              handleChange('contactInfo', 'street_address', $event)
            "
            required
          />
        </b-col>
        <b-col md="6" sm="12">
          <VInputGroup
            label="Street Address Line 2"
            id="street_address_line_2"
            type="text"
            :value="street_address_line_2"
            :v="v['street_address_line_2']"
            @street_address_line_2Changed="
              handleChange('contactInfo', 'street_address_line_2', $event)
            "
          />
        </b-col>
      </b-row>
      <b-row>
        <b-col md="6" sm="12">
          <VInputGroup
            label="City"
            id="city"
            type="text"
            :value="city"
            :v="v['city']"
            @cityChanged="handleChange('contactInfo', 'city', $event)"
            required
          />
        </b-col>
        <b-col md="6" sm="12">
          <VSelectGroup
            label="State"
            id="state"
            placeholder="Choose State"
            :options="states"
            :selected="state"
            :v="v['state']"
            @stateChanged="handleChange('contactInfo', 'state', $event)"
            required
          />
        </b-col>
      </b-row>
      <b-row>
        <b-col md="6" sm="12">
          <VInputGroup
            label="Zip Code"
            id="zip_code"
            type="text"
            :value="zip_code"
            :v="v['zip_code']"
            @zip_codeChanged="handleChange('contactInfo', 'zip_code', $event)"
            required
          />
        </b-col>
        <b-col md="6" sm="12">
          <VInputGroup
            label="County"
            id="country"
            type="text"
            :value="country"
            :v="v['country']"
            @countryChanged="handleChange('contactInfo', 'country', $event)"
            required
          />
        </b-col>
      </b-row>
      <b-row>
        <b-col md="6" sm="12">
          <VInputGroup
            label="Primary Phone"
            id="primary_phone"
            type="text"
            :value="primary_phone"
            :v="v['primary_phone']"
            @primary_phoneChanged="
              handleChange('contactInfo', 'primary_phone', $event)
            "
            required
          />
          <b-form-checkbox
            id="primary_phone_bad"
            class="phone-checkbox"
            v-model="primary_phone_bad"
            name="primary_phone_bad"
            @change="
              handleChange(
                'contactInfo',
                'primary_phone_bad',
                $event === 'accepted' ? true : false
              )
            "
            value="accepted"
            unchecked-value="not_accepted"
            >Bad Phone</b-form-checkbox
          >
        </b-col>
        <b-col md="6" sm="12">
          <VInputGroup
            label="Secondary Phone"
            id="secondary_phone"
            type="text"
            :value="secondary_phone"
            :v="v['secondary_phone']"
            @secondary_phoneChanged="
              handleChange('contactInfo', 'secondary_phone', $event)
            "
          />
          <b-form-checkbox
            id="secondary_phone_bad"
            class="phone-checkbox"
            v-model="secondary_phone_bad"
            name="secondary_phone_bad"
            @change="
              handleChange(
                'contactInfo',
                'secondary_phone_bad',
                $event === 'accepted' ? true : false
              )
            "
            value="accepted"
            unchecked-value="not_accepted"
            >Bad Phone</b-form-checkbox
          >
        </b-col>
      </b-row>
      <b-row>
        <b-col md="6" sm="12">
          <VInputGroup
            label="Email"
            id="email"
            type="email"
            :value="email"
            :v="v['email']"
            @emailChanged="handleChange('contactInfo', 'email', $event)"
            required
          />
        </b-col>
      </b-row>
    </div>
  </b-card>
</template>

<script>
import VInputGroup from "../../UI/VInputGroup";
import VInputAddon from "../../UI/VInputAddon";
import VSelectGroup from "../../UI/VSelectGroup";
import { ValidateInputMixin } from "../../../mixin/validateInput";

export default {
  mixins: [ValidateInputMixin],
  components: {
    VInputGroup,
    VSelectGroup,
  },

  props: {
    states: Array,
    form: Object,
    v: Object,
  },

  data() {
    return {
      ...this.form,
    };
  },
};
</script>
<style lang="scss" scoped>
.phone-checkbox {
  position: absolute;
  right: 15px;
  top: 0;
}
</style>
