<template>
  <b-card class="student-setup-card">
    <b-card-text class="text-uppercase">MEDICAL INFORMATION</b-card-text>
    <div>
      <b-row>
        <b-col md="6" sm="12">
          <VSelectGroup
            label="Do you have any medical issues or concerns?"
            id="has_issues"
            placeholder="Choose Answer"
            :options="yesNoArray"
            :selected="has_issues"
            :v="v['has_issues']"
            @has_issuesChanged="
              handleChange('medicalInfo', 'has_issues', $event)
            "
            required
          />
        </b-col>
        <b-col md="6" sm="12">
          <VInputGroup
            :label="code_word_label"
            v-b-tooltip.hover
            title="Word or phrase provided by the student or their guardian to allow for release of confidential information over the phone"
            id="code_word"
            type="text"
            :v="v['code_word']"
            :value="code_word"
            @code_wordChanged="handleChange('medicalInfo', 'code_word', $event)"
          />
        </b-col>
      </b-row>
      <b-row>
        <b-col md="12">
          <b-form-group label="Allergies">
            <b-form-checkbox-group
              v-model="selectedAllergies"
              text-field="value"
              name="flavour-1a"
              :v="v['selectedAllergies']"
              button-variant="success"
              @input="handleChange('medicalInfo', 'selectedAllergies', $event)"
            >
              <b-form-checkbox
                :key="index"
                v-for="(element, index) in allergies"
                :value="element.id"
                >{{ element.value }}</b-form-checkbox
              >
            </b-form-checkbox-group>
          </b-form-group>
        </b-col>

        <b-col md="12">
          <b-form-group label="Diseases">
            <b-form-checkbox-group
              v-model="selectedDiseases"
              :options="diseases"
              name="flavour-1a"
              :v="v['selectedDiseases']"
              button-variant="success"
              @input="handleChange('medicalInfo', 'selectedDiseases', $event)"
            ></b-form-checkbox-group>
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
    VSelectGroup,
  },

  props: {
    yesNoArray: Array,
    form: Object,
    v: Object,
    allergies: Array,
  },

  data() {
    return {
      ...this.form,
      selectedAllergies: [],
      selectedDiseases: [],
      options: [],
      diseases: [],
      code_word_label:
        this.$store.state.fields.length > 0
          ? this.$store.state.fields.find((element) => {
              return element.base_name == "Code Word";
            }).custom_name
          : "Code Word",
    };
  },

  async fetch() {
    await this.$axios
      .get(`http://atlas-rebuild-api.mtcdevsite.com/api/v1/allergies`, {
        headers: {
          Accept: "application/vnd.api+json",
          "Content-Type": "application/vnd.api+json",
          "X-Tenant-Id": this.$store.state.tenant_id,
          Authorization: `Bearer ${this.$store.state.token}`,
        },
      })
      .then((res) => {
        this.options = res.data.data.map((item) => {
          return {
            text: item.attributes.value,
            value: item.id,
          };
        });
        console.log(this.options);
      })
      .catch((err) => console.log(err));

    await this.$axios
      .get(`http://atlas-rebuild-api.mtcdevsite.com/api/v1/diseases`, {
        headers: {
          Accept: "application/vnd.api+json",
          "Content-Type": "application/vnd.api+json",
          "X-Tenant-Id": this.$store.state.tenant_id,
          Authorization: `Bearer ${this.$store.state.token}`,
        },
      })
      .then((res) => {
        this.diseases = res.data.data.map((item) => {
          return {
            text: item.attributes.value,
            value: item.id,
          };
        });
        console.log(this.options);
      })
      .catch((err) => console.log(err));
  },
};
</script>
