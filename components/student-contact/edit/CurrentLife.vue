<template>
  <b-card class="student-setup-card">
    <b-card-text class="text-uppercase">CURRENT LIFE</b-card-text>
    <div>
      <b-row>
        <b-col md="4" sm="12">
          <VSelectGroup
            label="Marital Status"
            id="marital_status"
            placeholder="Choose Marital Status"
            :options="maritalStatuses"
            :selected="marital_status"
            :v="v['marital_status']"
            @marital_statusChanged="
              handleChange('currentLife', 'marital_status', $event)
            "
            required
          />
        </b-col>
        <b-col md="4" sm="12">
          <VSelectGroup
            label="Children"
            id="has_children"
            placeholder="Choose Parental Status"
            :options="parentalStatuses"
            :selected="has_children"
            :v="v['has_children']"
            @has_childrenChanged="
              handleChange('currentLife', 'has_children', $event)
            "
            required
          />
        </b-col>
        <b-col md="4" sm="12">
          <VSelectGroup
            label="Legal Status"
            id="legal_status"
            placeholder="Choose Legal Status"
            :options="legalStatuses"
            :selected="legal_status"
            :v="v['legal_status']"
            @legal_statusChanged="
              handleChange('currentLife', 'legal_status', $event)
            "
            required
          />
        </b-col>
      </b-row>
      <b-row>
        <b-col md="4" sm="12">
          <VSelectGroup
            label="Living Situation"
            id="living_situation"
            placeholder="Choose Living Situation"
            :options="livingSituations"
            :selected="living_situation"
            :v="v['living_situation']"
            @living_situationChanged="
              handleChange('currentLife', 'living_situation', $event)
            "
            required
          />
        </b-col>
        <b-col md="4" sm="12">
          <VInputGroup
            :label="parole_name_label"
            id="parole_officer_name"
            type="text"
            :value="parole_officer_name"
            :v="v['parole_officer_name']"
            @parole_officer_nameChanged="
              handleChange('currentLife', 'parole_officer_name', $event)
            "
          />
        </b-col>
      </b-row>
      <b-row>
        <b-col md="6" sm="12">
          <VInputGroup
            :label="parole_email_label"
            id="parole_officer_email"
            type="email"
            :value="parole_officer_email"
            :v="v['parole_officer_email']"
            @parole_officer_emailChanged="
              handleChange('currentLife', 'parole_officer_email', $event)
            "
          />
        </b-col>
        <b-col md="6" sm="12">
          <VInputGroup
            :label="parole_phone_label"
            id="parole_officer_phone"
            type="text"
            :value="parole_officer_phone"
            :v="v['parole_officer_phone']"
            @parole_officer_phoneChanged="
              handleChange('currentLife', 'parole_officer_phone', $event)
            "
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
    VSelectGroup
  },

  props: {
    maritalStatuses: Array,
    parentalStatuses: Array,
    legalStatuses: Array,
    livingSituations: Array,
    form: Object,
    v: Object
  },

  data() {
    return {
      ...this.form,
      parole_name_label: this.$store.state.fields.length > 0 ? this.$store.state.fields.find(element => {
        return element.base_name == "Parole Officer Name";
      }).custom_name : "Parole Officer Name",
      parole_phone_label: this.$store.state.fields.length > 0 ? this.$store.state.fields.find(element => {
        return element.base_name == "Parole Officer Phone";
      }).custom_name : "Parole Officer Phone",
      parole_email_label: this.$store.state.fields.length > 0 ? this.$store.state.fields.find(element => {
        return element.base_name == "Parole Officer Email";
      }).custom_name : "Parole Officer Email"
    };
  }
};
</script>
