<template>
  <b-card class="student-setup-card">
    <b-card-text class="text-uppercase">Contact Information</b-card-text>
    <div>
      <b-row>
        <b-col md="4" sm="12">
          <VInputGroup
            label="Street Address"
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
        <b-col md="4" sm="12">
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
        <b-col md="4" sm="12">
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
        <b-col md="4" sm="12">
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
        <b-col md="4" sm="12">
          <VInputGroup
            label="County"
            id="county"
            type="text"
            :value="county"
            :v="v['county']"
            @countyChanged="handleChange('contactInfo', 'county', $event)"
            required
          />
        </b-col>
        <b-col md="4" sm="12">
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
        </b-col>
      </b-row>
      <b-row>
        <b-col md="4" sm="12">
          <VSelectGroup
            label="Primary Phone Type"
            id="phone_1_type"
            placeholder="Choose Phone Type"
            :options="phoneTypes"
            :selected="phone_1_type"
            :v="v['phone_1_type']"
            @phone_1_typeChanged="
              handleChange('contactInfo', 'phone_1_type', $event)
            "
            required
          />
        </b-col>
        <b-col md="4" sm="12">
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
        </b-col>
        <b-col md="4" sm="12">
          <VSelectGroup
            label="Secondary Phone Type"
            id="phone_2_type"
            :options="phoneTypes"
            :selected="phone_2_type"
            :v="v['phone_2_type']"
            placeholder="Choose Phone Type"
            @phone_2_typeChanged="
              handleChange('contactInfo', 'phone_2_type', $event)
            "
          />
        </b-col>
      </b-row>
      <b-row>
        <b-col md="4" sm="12">
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
        <b-col md="4" sm="12">
          <VSelectGroup
            label="Does the GC have WIFI?"
            id="has_wifi"
            placeholder="Choose Answer"
            :options="hasWifis"
            :selected="has_wifi"
            :v="v['has_wifi']"
            @has_wifiChanged="handleChange('contactInfo', 'has_wifi', $event)"
            required
          />
        </b-col>
        <b-col md="4" sm="12">
          <VSelectGroup
            label="Does the GC have a device?"
            id="has_device"
            placeholder="Choose Answer"
            :options="hasDevices"
            :selected="has_device"
            :v="v['has_device']"
            @has_deviceChanged="
              handleChange('contactInfo', 'has_device', $event)
            "
            required
          />
        </b-col>
      </b-row>
    </div>
  </b-card>
</template>

<script>
import VInputGroup from "@/components/UI/VInputGroup";
import VSelectGroup from "@/components/UI/VSelectGroup";
import { ValidateInputMixin } from "@/mixin/validateInput";

export default {
  mixins: [ValidateInputMixin],
  components: {
    VInputGroup,
    VSelectGroup,
  },

  props: {
    hasDevices: Array,
    hasWifis: Array,
    phoneTypes: Array,
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
