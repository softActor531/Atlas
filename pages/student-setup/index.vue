<template>
  <div>
    <h1>Graduation Candidate | Set-Up</h1>
    <!-- Form row -->
    <b-row>
      <b-col>
        <b-form @submit.stop.prevent="onSubmit">
          <Requirements
            :phases="phases"
            :form="form.requirements"
            :v="$v.form.requirements"
            @handleChange="handleChange"
          />
          <ContactInfo
            :has-devices="hasDevices"
            :has-wifis="hasWifis"
            :phone-types="phoneTypes"
            :states="states"
            :form="form.contactInfo"
            :v="$v.form.contactInfo"
            @handleChange="handleChange"
          />
          <EeocInfo
            :genders="genders"
            :primary-languages="languages"
            :races="races"
            :form="form.eeocInfo"
            :v="$v.form.eeocInfo"
            @handleChange="handleChange"
          />
          <LocationInfo
            :districts="districts"
            :advocates="advocates"
            :content-coaches="contentCoaches"
            :life-coaches="lifeCoaches"
            :transportations="transportations"
            :form="form.locationInfo"
            :v="$v.form.locationInfo"
            @handleChange="handleChange"
          />
          <PastSchoolInfo
            :last-years="lastYears"
            :last-grades="lastGrades"
            :cohort-years="cohortYears"
            :form="form.pastSchoolInfo"
            :v="$v.form.pastSchoolInfo"
            @handleChange="handleChange"
          />
          <CurrentLife
            :marital-statuses="maritalStatuses"
            :parental-statuses="parentalStatuses"
            :legal-statuses="legalStatuses"
            :living-situations="livingSituations"
            :form="form.currentLife"
            :v="$v.form.currentLife"
            @handleChange="handleChange"
          />
          <EmergencyContact
            :emergency-contact-relations="emergencyContactRelations"
            :form="form.emergencyContact"
            :v="$v.form.emergencyContact"
            @handleChange="handleChange"
          />
          <MedicalInfo
            :allergies="allergies"
            :yes-no-array="yesNoArray"
            :form="form.medicalInfo"
            :v="$v.form.medicalInfo"
            @handleChange="handleChange"
          />
          <AdditionalInfo
            :form="form.additionalInfo"
            :v="$v.form.additionalInfo"
            @handleChange="handleChange"
          />

          <b-row v-if="emailErrors.length">
            <b-alert show variant="danger" align-h="center">
              <b-list-group>
                <b-list-group-item
                  v-for="(err, i) in emailErrors"
                  :key="i"
                  variant="danger"
                >
                  {{ err.detail }}
                </b-list-group-item>
              </b-list-group>
            </b-alert>
          </b-row>

          <b-row>
            <b-col>
              <b-card class="text-center">
                <b-button type="submit" variant="success"> Submit </b-button>
              </b-card>
            </b-col>
          </b-row>
        </b-form>
      </b-col>
    </b-row>
  </div>
</template>

<style scoped>
@import url("https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css");
</style>

<script>
import flatPickr from "vue-flatpickr-component";
import { validationMixin } from "vuelidate";
import {
  required,
  email,
  numeric,
  minLength,
  maxLength,
  helpers,
  alphaNum,
  and,
  alpha,
  or,
} from "vuelidate/lib/validators";
import moment from "moment";
import GC from "../../models/GC";

import Requirements from "../../components/student-setup/Requirements";
import ContactInfo from "../../components/student-setup/ContactInfo";
import EeocInfo from "../../components/student-setup/EEOCInfo";
import LocationInfo from "../../components/student-setup/LocationInfo";
import PastSchoolInfo from "../../components/student-setup/PastSchoolInfo";
import CurrentLife from "../../components/student-setup/CurrentLife";
import EmergencyContact from "../../components/student-setup/EmergencyContact";
import MedicalInfo from "../../components/student-setup/MedicalInfo";
import AdditionalInfo from "../../components/student-setup/AdditionalInfo";

// import { helpers } from 'vuelidate/lib/validators'

import Api from "../../services/api/Api.js";
import { states, yesNoArray } from "../../store/constants/defaultValues";
import student from "../../services/api/mock/student";

const alphaNumericWithSpace = (value) => {
  if (typeof value === "undefined" || value === null || value === "") {
    return true;
  }
  return /^[a-zA-Z0-9 ]*$/.test(value);
};

const alphaWithSpecialCharacter = (value) => {
  if (typeof value === "undefined" || value === null || value === "") {
    return true;
  }
  return /^[a-z]|[A-z](AND[a-zA-Z!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])*$/.test(
    value
  );
};

const compareType = (a, b) => {
  if (a.role == null) {
    return 1;
  }
  if (b.role == null) {
    return -1;
  }
  return a.role.id - b.role.id;
};

export default {
  components: {
    Requirements,
    ContactInfo,
    EeocInfo,
    LocationInfo,
    PastSchoolInfo,
    CurrentLife,
    EmergencyContact,
    MedicalInfo,
    AdditionalInfo,
  },
  mixins: [validationMixin],

  async asyncData(context) {
    const api = new Api(context);
    const phases = await api.getPhases();
    const allergies = await api.getAllergies();
    const diseases = await api.getDiseases();
    const programs = await api.getPrograms();
    const statuses = await api.getStatuses();
    const districts = await api.getDistricts();
    const sites = await api.getSites();
    const races = await api.getRaces();
    const languages = await api.getPrimaryLanguages();
    const legalStatuses = await api.getLegalStatuses();
    const livingSituations = await api.getLivingSituations();
    const emergencyContactRelations = await api.getEmergencyContactRelations();
    const phoneTypes = await api.getPhoneTypes();
    const genders = await api.getGenders();
    const cohortYears = await api.getCohortYears();
    const maritalStatuses = await api.getMartialStatuses();
    const parentalStatuses = await api.getParentalStatuses();
    let users = await api.getUsers();
    const hasWifis = await api.getWifis();
    const hasDevices = await api.getDevices();
    const transportations = await api.getTransportations();
    const lastYears = await api.getLastYears();
    const lastGrades = await api.getLastGrades();
    const specialPrograms = await api.getSpecialPrograms();
    const token = await api.uploadFile1({ type: "student.profile_picture" });

    return {
      phases,
      allergies,
      diseases,
      programs,
      statuses,
      districts,
      sites,
      advocates: users,
      cohortYears,
      phoneTypes,
      maritalStatuses,
      parentalStatuses,
      legalStatuses,
      livingSituations,
      emergencyContactRelations,
      contentCoaches: users,
      lifeCoaches: users,
      races,
      genders,
      languages,
      hasWifis,
      hasDevices,
      transportations,
      lastYears,
      lastGrades,
      specialPrograms,
      api,
      token: token.id,
    };
  },

  data() {
    return {
      emailErrors: [],
      profile_picture_id: "",
      form: {
        requirements: {
          first_name: "",
          middle_name: null,
          last_name: "",
          district_id: "",
          phase: null,
          status: null,
          gcImage: null,
        },
        contactInfo: {
          street_address: "",
          city: "",
          state: null,
          zip_code: "",
          county: "",
          primary_phone: "",
          phone_1_type: null,
          phone_2_type: null,
          secondary_phone: "",
          email: "",
          has_wifi: null,
          has_device: null,
        },
        eeocInfo: {
          birthdate: "",
          gender: null,
          race: null,
          primary_language: null,
        },
        locationInfo: {
          district: null,
          site: null,
          graduate_candidate_advocate: null,
          content_coach: null,
          career_life_coach: null,
          transportation: null,
        },
        pastSchoolInfo: {
          last_year_enrolled: null,
          last_school: "",
          last_grade_completed: null,
          enroll_date: "",
          cohort_year: null,
          selectedPrograms: null,
        },
        currentLife: {
          parole_officer_name: "",
          parole_officer_phone: "",
          parole_officer_email: "",
          marital_status: null,
          has_children: null,
          legal_status: null,
          living_situation: null,
        },
        emergencyContact: {
          emergency_contact_1_name: "",
          emergency_contact_1_relationship: null,
          emergency_contact_1_email: "",
          emergency_contact_1_phone_1: "",
          emergency_contact_1_phone_2: "",
          legal_guardian_1: null,
          emergency_contact_2_name: "",
          emergency_contact_2_relationship: null,
          emergency_contact_2_email: "",
          emergency_contact_2_phone_1: "",
          emergency_contact_2_phone_2: "",
          legal_guardian_2: null,
        },
        medicalInfo: {
          code_word: "",
          has_issues: null,
          selectedAllergies: null,
          selectedDiseases: null,
        },
        additionalInfo: {
          special_instruction: "",
          student_referred: null,
          referral_code: "",
          referral_name: "",
          student_referred_input: "",
        },
      },
      yesNoArray,
      states,
    };
  },

  mounted() {
    if (!this.$store.state.permissions.includes("View Create New GC")) {
      this.$router.push("/unauthorized");
    }
  },

  validations: {
    form: {
      requirements: {
        first_name: {
          required,
          alphaWithSpecialCharacter,
          minLength: minLength(3),
          maxLength: maxLength(50),
        },
        middle_name: {
          alphaWithSpecialCharacter,
          minLength: minLength(3),
          maxLength: maxLength(50),
        },
        last_name: {
          required,
          alphaWithSpecialCharacter,
          minLength: minLength(3),
          maxLength: maxLength(50),
        },
        district_id: {
          alphaNumericWithSpace,
          minLength: minLength(3),
          maxLength: maxLength(15),
        },
        phase: { required },
        status: { required },
      },
      contactInfo: {
        street_address: {
          required,
          minLength: minLength(3),
          maxLength: maxLength(100),
        },
        zip_code: {
          required,
          numeric,
          minLength: minLength(5),
          maxLength: maxLength(5),
        },
        county: {
          required,
        },
        city: {
          required,
        },
        state: {
          required,
        },
        primary_phone: {
          required,
          numeric,
          minLength: minLength(10),
          maxLength: maxLength(10),
        },
        secondary_phone: {
          numeric,
          minLength: minLength(10),
          maxLength: maxLength(10),
        },
        phone_1_type: { required },
        email: {
          required,
          email,
          minLength: minLength(7),
          maxLength: maxLength(100),
        },
      },
      currentLife: {
        parole_officer_email: {
          email,
          minLength: minLength(7),
          maxLength: maxLength(100),
        },
        parole_officer_phone: {
          numeric,
          minLength: minLength(10),
          maxLength: maxLength(10),
        },
      },
      eeocInfo: {
        gender: { required },
        birthdate: { required },
        race: { required },
        primary_language: { required },
      },
      locationInfo: {
        district: { required },
        site: { required },
      },
      pastSchoolInfo: {
        last_school: {
          minLength: minLength(3),
          maxLength: maxLength(50),
        },
      },
      emergencyContact: {
        emergency_contact_1_name: {
          alphaWithSpecialCharacter,
          minLength: minLength(5),
          maxLength: maxLength(50),
        },
        emergency_contact_1_email: {
          email,
          minLength: minLength(7),
          maxLength: maxLength(100),
        },
        emergency_contact_1_phone_1: {
          numeric,
          minLength: minLength(10),
          maxLength: maxLength(10),
        },
        emergency_contact_1_phone_2: {
          numeric,
          minLength: minLength(10),
          maxLength: maxLength(10),
        },
        emergency_contact_1_legal_guardian: {
          numeric,
        },
        emergency_contact_2_name: {
          alphaWithSpecialCharacter,
          minLength: minLength(5),
          maxLength: maxLength(50),
        },
        emergency_contact_2_email: {
          email,
          minLength: minLength(7),
          maxLength: maxLength(100),
        },
        emergency_contact_2_phone_1: {
          numeric,
          minLength: minLength(10),
          maxLength: maxLength(10),
        },
        emergency_contact_2_phone_2: {
          numeric,
          minLength: minLength(10),
          maxLength: maxLength(10),
        },
        emergency_contact_2_legal_guardian: {
          numeric,
        },
      },
      medicalInfo: {
        code_word: {
          // required,
          alphaNumericWithSpace,
          minLength: minLength(5),
          maxLength: maxLength(50),
        },
      },
      additionalInfo: {
        referral_name: {
          minLength: minLength(3),
          maxLength: maxLength(50),
          alphaWithSpecialCharacter,
        },
        student_referred: { required },
      },
    },
  },

  methods: {
    async handleChange(data) {
      const { parent, variable_name, event } = data;
      this.form[parent][variable_name] = event;
      console.log(variable_name);

      if (variable_name === "gcImage") {
        const formData = new FormData();
        formData.append("file", event);
        console.log(this.token);
        console.log(event);
        this.$api.uploadFile2(this.token, formData).then((data) => {
          this.profile_picture_id = data[0].id;
        });
      }
    },

    async onSubmit() {
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        console.log(this.$v.form);
        return;
      }
      const {
        requirements,
        contactInfo,
        eeocInfo,
        locationInfo,
        pastSchoolInfo,
        currentLife,
        emergencyContact,
        medicalInfo,
        additionalInfo,
      } = this.form;

      const {
        emergency_contact_1_name,
        emergency_contact_1_phone_1,
        emergency_contact_1_phone_2,
        emergency_contact_1_email,
        emergency_contact_1_relationship,
        legal_guardian_1,
        emergency_contact_2_name,
        emergency_contact_2_phone_1,
        emergency_contact_2_phone_2,
        emergency_contact_2_email,
        emergency_contact_2_relationship,
        legal_guardian_2,
      } = emergencyContact;

      const {
        first_name,
        middle_name,
        last_name,
        district_id,
        phase,
        status,
        gcImage,
      } = requirements;

      const {
        street_address,
        city,
        state,
        zip_code,
        county,
        email,
        has_wifi,
        has_device,
        phone_1_type,
        phone_2_type,
      } = contactInfo;

      const { code_word, selectedAllergies, selectedDiseases } = medicalInfo;

      const { birthdate, gender, race, primary_language } = eeocInfo;

      const {
        parole_officer_name,
        parole_officer_phone,
        parole_officer_email,
        marital_status,
        has_children,
        legal_status,
        living_situation,
      } = currentLife;

      const {
        last_year_enrolled,
        last_grade_completed,
        cohort_year,
        selectedPrograms,
      } = pastSchoolInfo;

      const {
        district,
        site,
        transportation,
        graduate_candidate_advocate,
        content_coach,
        career_life_coach,
      } = locationInfo;

      const {
        referral_name,
        student_referred,
        referral_code,
        special_instruction,
      } = additionalInfo;

      const payload = {
        type: "students",
        attributes: {
          first_name,
          last_name,
          street_address,
          city,
          state,
          zip_code,
          email,
          phone_1_type,
          birthdate: moment(birthdate).format("MM/DD/YYYY"),
          gender,
          phone_1: contactInfo.primary_phone,
          phone_2: contactInfo.secondary_phone,
          hear_about: student_referred,
          // minor: 1,
          county,
        },
        relationships: {
          phase: { data: { type: "phases", id: phase && String(phase) } },
          status: {
            data: { type: "statuses", id: status && String(status) },
          },
          district: {
            data: { type: "districts", id: district && String(district) },
          },
          site: { data: { type: "sites", id: site && String(site) } },
          race: { data: { type: "races", id: race && String(race) } },
          primary_language: {
            data: {
              type: "primary-languages",
              id: primary_language && String(primary_language),
            },
          },
        },
      };
      if (
        this.profile_picture_id !== "" &&
        this.profile_picture_id !== null
      ) {
        payload.attributes.photo = this.profile_picture_id;
      }
      if (
        emergency_contact_1_name !== "" &&
        emergency_contact_1_name !== null
      ) {
        payload.attributes.emergency_contact_1_name = emergency_contact_1_name;
      }
      if (
        emergency_contact_1_phone_1 !== "" &&
        emergency_contact_1_phone_1 !== null
      ) {
        payload.attributes.emergency_contact_1_phone_1 = emergency_contact_1_phone_1;
      }
      if (
        emergency_contact_1_phone_2 !== "" &&
        emergency_contact_1_phone_2 !== null
      ) {
        payload.attributes.emergency_contact_1_phone_2 = emergency_contact_1_phone_2;
      }
      if (
        emergency_contact_1_email !== "" &&
        emergency_contact_1_email !== null
      ) {
        payload.attributes.emergency_contact_1_email = emergency_contact_1_email;
      }
      if (legal_guardian_1 !== "" && legal_guardian_1 !== null) {
        payload.attributes.emergency_contact_1_legal_guardian = legal_guardian_1;
      }
      if (
        emergency_contact_2_name !== "" &&
        emergency_contact_2_name !== null
      ) {
        payload.attributes.emergency_contact_2_name = emergency_contact_2_name;
      }
      if (
        emergency_contact_2_phone_1 !== "" &&
        emergency_contact_2_phone_1 !== null
      ) {
        payload.attributes.emergency_contact_2_phone_1 = emergency_contact_2_phone_1;
      }
      if (
        emergency_contact_2_phone_2 !== "" &&
        emergency_contact_2_phone_2 !== null
      ) {
        payload.attributes.emergency_contact_2_phone_2 = emergency_contact_2_phone_2;
      }
      if (
        emergency_contact_2_email !== "" &&
        emergency_contact_2_email !== null
      ) {
        payload.attributes.emergency_contact_2_email = emergency_contact_2_email;
      }
      if (legal_guardian_2 !== "" && legal_guardian_2 !== null) {
        payload.attributes.emergency_contact_2_legal_guardian = legal_guardian_2;
      }
      if (middle_name !== "" && middle_name !== null) {
        payload.attributes.middle_name = middle_name;
      }
      if (district_id !== "" && district_id !== null) {
        payload.attributes.district_id = district_id;
      }
      if (has_wifi !== "" && has_wifi !== null) {
        payload.attributes.has_wifi = has_wifi;
      }
      if (has_device !== "" && has_device !== null) {
        payload.attributes.has_device = has_device;
      }
      if (phone_2_type !== "" && phone_2_type !== null) {
        payload.attributes.phone_2_type = phone_2_type;
      }
      if (code_word !== "" && code_word !== null) {
        payload.attributes.code_word = code_word;
      }
      if (referral_name !== "" && referral_name !== null) {
        payload.attributes.referred_by_name = referral_name;
      }
      if (parole_officer_name !== "" && parole_officer_name !== null) {
        payload.attributes.parole_officer_name = parole_officer_name;
      }
      if (parole_officer_phone !== "" && parole_officer_phone !== null) {
        payload.attributes.parole_officer_phone = parole_officer_phone;
      }
      if (parole_officer_email !== "" && parole_officer_email !== null) {
        payload.attributes.parole_officer_email = parole_officer_email;
      }
      if (marital_status !== "" && marital_status !== null) {
        payload.attributes.marital_status = marital_status;
      }
      if (has_children !== "" && has_children !== null) {
        payload.attributes.has_children = has_children;
      }
      if (last_year_enrolled !== "" && last_year_enrolled !== null) {
        payload.attributes.last_year_enrolled = last_year_enrolled;
      }
      if (last_grade_completed !== "" && last_grade_completed !== null) {
        payload.attributes.last_grade_completed = last_grade_completed;
      }
      if (medicalInfo.has_issues !== "" && medicalInfo.has_issues !== null) {
        payload.attributes.has_medical_issues =
          medicalInfo.has_issues === "Yes" ? 1 : 0;
      }
      if (
        pastSchoolInfo.last_school !== "" &&
        pastSchoolInfo.last_school !== null
      ) {
        payload.attributes.last_school_attended = pastSchoolInfo.last_school;
      }
      if (special_instruction !== "" && special_instruction !== null) {
        payload.attributes.special_instructions = special_instruction;
      }
      if (cohort_year !== "" && cohort_year !== null) {
        payload.attributes.cohort_years = cohort_year;
      }
      if (referral_code !== "" && referral_code !== null) {
        payload.attributes.referred_by_code = referral_code;
      }
      if (transportation !== "" && transportation !== null) {
        payload.attributes.transportation = transportation;
      }
      if (legal_status !== "" && legal_status !== null) {
        payload.relationships.legal_status = {
          data: {
            type: "legal-statuses",
            id: legal_status,
          },
        };
      }
      if (living_situation !== "" && living_situation !== null) {
        payload.relationships.living_situation = {
          data: {
            type: "living-situations",
            id: living_situation,
          },
        };
      }
      if (
        graduate_candidate_advocate !== "" &&
        graduate_candidate_advocate !== null
      ) {
        payload.relationships.graduate_candidate_advocate = {
          data: {
            type: "users",
            id: graduate_candidate_advocate,
          },
        };
      }
      if (content_coach !== "" && content_coach !== null) {
        payload.relationships.content_coach = {
          data: {
            type: "users",
            id: content_coach,
          },
        };
      }
      if (career_life_coach !== "" && career_life_coach !== null) {
        payload.relationships.career_life_coach = {
          data: {
            type: "users",
            id: career_life_coach,
          },
        };
      }
      if (
        emergency_contact_1_relationship !== "" &&
        emergency_contact_1_relationship !== null
      ) {
        payload.relationships.emergency_contact_1_relation = {
          data: {
            type: "emergency-contact-relations",
            id: emergency_contact_1_relationship,
          },
        };
      }
      if (
        emergency_contact_2_relationship !== "" &&
        emergency_contact_2_relationship !== null
      ) {
        payload.relationships.emergency_contact_2_relation = {
          data: {
            type: "emergency-contact-relations",
            id: emergency_contact_2_relationship,
          },
        };
      }
      if (selectedAllergies !== "" && selectedAllergies !== null) {
        payload.relationships.allergies = {
          data: selectedAllergies.map((element) => {
            return {
              type: "allergies",
              id: element,
            };
          }),
        };
      }
      if (selectedDiseases !== "" && selectedDiseases !== null) {
        payload.relationships.diseases = {
          data: selectedDiseases.map((element) => {
            return {
              type: "diseases",
              id: element,
            };
          }),
        };
      }
      if (selectedPrograms !== "" && selectedPrograms !== null) {
        payload.relationships.special_programs = {
          data: selectedPrograms.map((element) => {
            return {
              type: "special-programs",
              id: element,
            };
          }),
        };
      }

      console.log(payload);

      this.api
        .createStudent(payload)
        .then((data) => {
          console.log(data);
          if (data.status === 201) {
            this.$router.push(`/student-contact/${data.data.data.id}`);
          } else {
            for (const err in data) {
              if (err.status === 422) {
                this.emailErrors.push(data);
              }
            }
          }
        })
        .catch((errors) => {
          console.log(errors);
        });
    },
  },
};
</script>

<style scoped>
h1 {
  font-size: 22px;
  padding: 22px 0 20px;
  text-transform: uppercase;
}
h2 {
  font-size: 20px;
  text-transform: uppercase;
}
</style>

