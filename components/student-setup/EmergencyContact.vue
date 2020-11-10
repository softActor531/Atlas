<template>
  <b-card class="student-setup-card">
    <b-card-text class="text-uppercase">EMERGENCY CONTACT</b-card-text>
    <div>
      <b-row>
        <b-col md="4" sm="12">
          <VInputGroup
            :label="name_label"
            id="emergency_contact_1_name"
            type="text"
            :value="emergency_contact_1_name"
            :v="v['emergency_contact_1_name']"
            @emergency_contact_1_nameChanged="
              handleChange(
                'emergencyContact',
                'emergency_contact_1_name',
                $event
              )
            "
          />
        </b-col>
        <b-col md="4" sm="12">
          <VSelectGroup
            :label="relationship_label"
            id="emergency_contact_1_relationship"
            :placeholder="`Choose ${relationship_label}`"
            :options="emergencyContactRelations"
            :selected="emergency_contact_1_relationship"
            :v="v['emergency_contact_1_relationship']"
            @emergency_contact_1_relationshipChanged="
              handleChange(
                'emergencyContact',
                'emergency_contact_1_relationship',
                $event
              )
            "
          />
        </b-col>
        <b-col md="4" sm="12">
          <VInputGroup
            :label="email_label"
            id="emergency_contact_1_email"
            type="email"
            :value="emergency_contact_1_email"
            :v="v['emergency_contact_1_email']"
            @emergency_contact_1_emailChanged="
              handleChange(
                'emergencyContact',
                'emergency_contact_1_email',
                $event
              )
            "
          />
        </b-col>
      </b-row>
      <b-row>
        <b-col md="4" sm="12">
          <VInputGroup
            :label="phone_1_label"
            id="emergency_contact_1_phone_1"
            type="text"
            :value="emergency_contact_1_phone_1"
            :v="v['emergency_contact_1_phone_1']"
            @emergency_contact_1_phone_1Changed="
              handleChange(
                'emergencyContact',
                'emergency_contact_1_phone_1',
                $event
              )
            "
          />
        </b-col>
        <b-col md="4" sm="12">
          <VInputGroup
            :label="phone_2_label"
            id="emergency_contact_1_phone_2"
            type="text"
            :value="emergency_contact_1_phone_2"
            :v="v['emergency_contact_1_phone_2']"
            @emergency_contact_1_phone_2Changed="
              handleChange(
                'emergencyContact',
                'emergency_contact_1_phone_2',
                $event
              )
            "
          />
        </b-col>
        <b-col md="4" sm="12">
          <VSelectGroup
            label="Emergency Contact 1 - Legal Guardian"
            id="legal_guardian_1"
            placeholder="Choose Answer"
            :options="legalGuardianOptions"
            :selected="legal_guardian_1"
            @legal_guardian_1Changed="handleChange('emergencyContact', 'legal_guardian_1', $event)"
          />
        </b-col>
      </b-row>
      <b-row>
        <b-col md="4" sm="12">
          <VInputGroup
            :label="name_label_2"
            id="emergency_contact_2_name"
            type="text"
            :value="emergency_contact_2_name"
            :v="v['emergency_contact_2_name']"
            @emergency_contact_2_nameChanged="
              handleChange(
                'emergencyContact',
                'emergency_contact_2_name',
                $event
              )
            "
          />
        </b-col>
        <b-col md="4" sm="12">
          <VSelectGroup
            :label="relationship_label_2"
            id="emergency_contact_2_relationship"
            :placeholder="`Choose ${relationship_label}`"
            :options="emergencyContactRelations"
            :selected="emergency_contact_2_relationship"
            :v="v['emergency_contact_2_relationship']"
            @emergency_contact_2_relationshipChanged="
              handleChange(
                'emergencyContact',
                'emergency_contact_2_relationship',
                $event
              )
            "
          />
        </b-col>
        <b-col md="4" sm="12">
          <VInputGroup
            :label="email_label_2"
            id="emergency_contact_2_email"
            type="email"
            :value="emergency_contact_2_email"
            :v="v['emergency_contact_2_email']"
            @emergency_contact_2_emailChanged="
              handleChange(
                'emergencyContact',
                'emergency_contact_2_email',
                $event
              )
            "
          />
        </b-col>
      </b-row>
      <b-row>
        <b-col md="4" sm="12">
          <VInputGroup
            :label="phone_1_label_2"
            id="emergency_contact_2_phone_1"
            type="text"
            :value="emergency_contact_2_phone_1"
            :v="v['emergency_contact_2_phone_1']"
            @emergency_contact_2_phone_1Changed="
              handleChange(
                'emergencyContact',
                'emergency_contact_2_phone_1',
                $event
              )
            "
          />
        </b-col>
        <b-col md="4" sm="12">
          <VInputGroup
            :label="phone_2_label_2"
            id="emergency_contact_2_phone_2"
            type="text"
            :value="emergency_contact_2_phone_2"
            :v="v['emergency_contact_2_phone_2']"
            @emergency_contact_2_phone_2Changed="
              handleChange(
                'emergencyContact',
                'emergency_contact_2_phone_2',
                $event
              )
            "
          />
        </b-col>
        <b-col md="4" sm="12">
          <VSelectGroup
            label="Emergency Contact 2 - Legal Guardian"
            id="legal_guardian_2"
            placeholder="Choose Answer"
            :options="legalGuardianOptions"
            :selected="legal_guardian_2"
            @legal_guardian_2Changed="handleChange('emergencyContact', 'legal_guardian_2', $event)"
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
    emergencyContactRelations: Array,
    form: Object,
    v: Object
  },

  data() {
    return {
      legalGuardianOptions: [
        {
          name: "Yes",
          id: 1
        },
        {
          name: "No",
          id: 0
        }
      ],
      ...this.form,
      name_label: this.$store.state.fields.length > 0 ? this.$store.state.fields.find(element => {
        return element.base_name == "Emergency Contact 1 - Name";
      }).custom_name : "Emergency Contact 1 - Name",
      phone_1_label: this.$store.state.fields.length > 0 ? this.$store.state.fields.find(element => {
        return element.base_name == "Emergency Contact 1 - Phone 1";
      }).custom_name : "Emergency Contact 1 - Phone 1",
      phone_2_label: this.$store.state.fields.length > 0 ? this.$store.state.fields.find(element => {
        return element.base_name == "Emergency Contact 1 - Phone 2";
      }).custom_name : "Emergency Contact 1 - Phone 2",
      email_label: this.$store.state.fields.length > 0 ? this.$store.state.fields.find(element => {
        return element.base_name == "Emergency Contact 1 - Email";
      }).custom_name : "Emergency Contact 1 - Email",
      relationship_label: this.$store.state.fields.length > 0 ? this.$store.state.fields.find(element => {
        return element.base_name == "Emergency Contact 1 - Relationship";
      }).custom_name : "Emergency Contact 1 - Relationship",
      name_label_2: this.$store.state.fields.length > 0 ? this.$store.state.fields.find(element => {
        return element.base_name == "Emergency Contact 2 - Name";
      }).custom_name : "Emergency Contact 2 - Name",
      phone_1_label_2: this.$store.state.fields.length > 0 ? this.$store.state.fields.find(element => {
        return element.base_name == "Emergency Contact 2 - Phone 1";
      }).custom_name : "Emergency Contact 2 - Phone 1",
      phone_2_label_2: this.$store.state.fields.length > 0 ? this.$store.state.fields.find(element => {
        return element.base_name == "Emergency Contact 2 - Phone 2";
      }).custom_name : "Emergency Contact 2 - Phone 2",
      email_label_2: this.$store.state.fields.length > 0 ? this.$store.state.fields.find(element => {
        return element.base_name == "Emergency Contact 2 - Email";
      }).custom_name : "Emergency Contact 2 - Email",
      relationship_label_2: this.$store.state.fields.length > 0 ? this.$store.state.fields.find(element => {
        return element.base_name == "Emergency Contact 2 - Relationship";
      }).custom_name : "Emergency Contact 2 - Relationship"
    };
  }
};
</script>