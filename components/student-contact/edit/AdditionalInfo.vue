<template>
  <b-card class="student-setup-card">
    <b-card-text class="text-uppercase">ADDITIONAL INFO</b-card-text>
    <div>
      <b-row>
        <b-col>
          <b-form-group
            id="groupstudent_additionalinfo"
            label-for="student_additionalinfo"
            label="Please share any other personal information that you would like us to know."
          >
            <b-form-textarea
              id="student_additionalinfo"
              v-model="special_instruction"
              @input="
                handleChange('additionalInfo', 'special_instruction', $event)
              "
            ></b-form-textarea>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="6" sm="12">
          <VSelectGroup
            label="How did you find out about Acceleration Academies?"
            id="student_referred"
            :options="options"
            :selected="student_referred"
            :v="v['student_referred']"
            @student_referredChanged="
              handleChange('additionalInfo', 'student_referred', $event)
            "
            required
          />
          <b-form-input
            id="student_referred_input"
            v-model="student_referred_input"
            @input="
              handleChange('additionalInfo', 'student_referred_input', $event)
            "
            placeholder="If Other, Please input how you found out about us."
            style="margin-bottom: 1rem; margin-top: -1rem"
          ></b-form-input>
        </b-col>
        <b-col md="6" sm="12">
          <VInputGroup
            label="Name of person who referred you:"
            id="referral_name"
            type="text"
            :value="referral_name"
            @referral_nameChanged="
              handleChange('additionalInfo', 'referral_name', $event)
            "
          />
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-form-group>
            <b-form-checkbox
              id="can_redeem"
              class="can_redeem-checkbox"
              v-model="can_redeem"
              name="can_redeem"
              value="accepted"
              unchecked-value="not_accepted"
              >Can Redeem</b-form-checkbox
            >
          </b-form-group>
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
    form: Object,
    v: Object,
  },

  data() {
    return {
      ...this.form,
      options: [
        { value: null, text: "-- Choose An Option --" },
        {
          label: "Call",
          options: [{ value: "Call/Text", text: "Call/Text" }],
        },
        {
          label: "Home Visit",
          options: [],
        },
        {
          label: "Local Event",
          options: [
            { value: "Community Event", text: "Community Event" },
            { value: "Mall", text: "Mall" },
            { value: "Movie Theater", text: "Movie Theater" },
            { value: "Parade", text: "Parade" },
          ],
        },
        {
          label: "Other",
          options: [],
        },
        {
          label: "Print Ad",
          options: [
            { value: "Billboard", text: "Billboard" },
            { value: "Bus Ad", text: "Bus Ad" },
            { value: "Door Hanger", text: "Door Hanger" },
            { value: "Flyer", text: "Flyer" },
            { value: "Newspaper", text: "Newspaper" },
            { value: "Postcard/Letter", text: "Postcard/Letter" },
          ],
        },
        {
          label: "Referral",
          options: [
            { value: "AA Staff", text: "AA Staff" },
            {
              value: "Case Manager/Probation Officer/DJJ",
              text: "Case Manager/Probation Officer/DJJ",
            },
            { value: "District Staff/AO", text: "District Staff/AO" },
            { value: "Family/Friend", text: "Family/Friend" },
          ],
        },
      ],
    };
  },
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
