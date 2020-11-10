<template>
  <div class>
    <div class>
      <div class="row">
        <div class="col-md-3 mt-3">
          <Studentsidenav :student-id="$route.params.id" />
        </div>
        <div class="col-md-9 col-xs-12">
          <div class="page-title-box">
            <div class="page-title-right">
              <nuxt-link
                class="btn btn-danger waves-effect waves-light"
                :to="`/student-contact/${$route.params.id}`"
              >
                <span class="btn-label">
                  <i class="mdi mdi-cancel" />
                </span>
                Cancel
              </nuxt-link>
            </div>

            <h4 class="page-title">
              Editing:
              <mark>{{ naming }}</mark>
            </h4>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="thinner-box card-box widget-inline">
                <div class="row">
                  <div class="col-sm-6 col-xl-1" />
                  <GcIconBox
                    label="Acceleration ID"
                    :value="$route.params.id"
                    icon-style="mdi mdi-account-key text-primary mdi-24px"
                  />
                  <GcIconBox
                    label="Location"
                    :value="location"
                    icon-style="mdi mdi-map text-success mdi-24px"
                  />
                  <div class="col-sm-6 col-xl-2">
                    <div class="p-2 text-center">
                      <i
                        class="fas fa-spinner text-success mdi-24px text-warning"
                        style="font-size: 24px; margin-top: 10px"
                      />
                      <p class="text-muted font-15 mb-0">Phase/Status</p>
                      <h5>
                        <span>{{ showPhase }}</span
                        >/
                        <span>{{ showStatus }}</span>
                      </h5>
                    </div>
                  </div>
                  <GcIconBox
                    label="GCA"
                    :value="showAdvocate"
                    icon-style="mdi mdi-alert-circle text-info mdi-24px"
                  />
                  <GcIconBox
                    label="Tier"
                    value="N/A"
                    icon-style="mdi mdi-certificate text-blue mdi-24px"
                  />
                </div>
              </div>
            </div>
          </div>
          <!-- ./row -->
          <!-- form here -->
          <b-row>
            <b-col>
              <b-form @submit.stop.prevent="onSubmit">
                <Requirements
                  :phases="phases"
                  :statuses="statuses"
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
                  :programs="programs"
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
                  :diseases="diseases"
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
                      <b-button type="submit" variant="success">
                        Submit
                      </b-button>
                    </b-card>
                  </b-col>
                </b-row>
              </b-form>
            </b-col>
          </b-row>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css");
</style>

<script>
import { validationMixin } from "vuelidate";
import {
  required,
  email,
  numeric,
  minLength,
  maxLength,
  alphaNum,
} from "vuelidate/lib/validators";
import moment from "moment";
import Requirements from "../../../components/student-contact/edit/Requirements";
import ContactInfo from "../../../components/student-contact/edit/ContactInfo";
import EeocInfo from "../../../components/student-contact/edit/EeocInfo";
import LocationInfo from "../../../components/student-contact/edit/LocationInfo";
import PastSchoolInfo from "../../../components/student-contact/edit/PastSchoolInfo";
import CurrentLife from "../../../components/student-contact/edit/CurrentLife";
import EmergencyContact from "../../../components/student-contact/edit/EmergencyContact";
import MedicalInfo from "../../../components/student-contact/edit/MedicalInfo";
import AdditionalInfo from "../../../components/student-contact/edit/AdditionalInfo";
import GcSideBar from "../../../components/student-contact/GcSideBar";
import Api from "../../../services/api/Api.js";
import { states, yesNoArray } from "../../../store/constants/defaultValues";

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
  return /^[a-z]|[A-z](AND[a-zA-Z0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])*$/.test(
    value
  );
};

export default {
  components: {
    GcSideBar,
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
    const users = await api.getUsers();
    const hasWifis = await api.getWifis();
    const hasDevices = await api.getDevices();
    const transportations = await api.getTransportations();
    const lastYears = await api.getLastYears();
    const lastGrades = await api.getLastGrades();
    const diseases = await api.getDiseases();
    const student = await api.getStudent(context.params.id);
    const token = await api.uploadFile1({ type: "student.profile_picture" });

    console.log(student);
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
      diseases,
      student,
      api,
      token: token.id,
      form: {
        requirements: {
          first_name: student.first_name,
          middle_name: student.middle_name,
          last_name: student.last_name,
          district_id: student.district_id,
          phase:
            student.status && student.status.phase && student.status.phase.id,
          status: student.status && student.status.id,
          profile_picture_id: null,
          gcImage: student.profile_picture,
          username: "",
          password: "",
          workflowException: "",
        },
        contactInfo: {
          street_address: student.street_address,
          city: student.city,
          state: student.state,
          county: student.county,
          zip_code: String(student.zip_code),
          primary_phone: student.phone_1,
          phone_1_type: student.phone_1_type,
          phone_2_type: student.phone_2_type,
          secondary_phone: student.phone_2,
          email: student.email,
          has_wifi: student.has_wifi,
          has_device: student.has_device,
        },
        eeocInfo: {
          birthdate: new Date(student.birthdate),
          gender: student.gender,
          race: student.race && student.race.id,
          primary_language:
            student.primary_language && student.primary_language.id,
        },
        locationInfo: {
          district:
            student.site && student.site.district && student.site.district.id,
          site: student.site && student.site.id,
          graduate_candidate_advocate:
            student.graduate_candidate_advocate &&
            student.graduate_candidate_advocate.id,
          content_coach: student.content_coach && student.content_coach.id,
          career_life_coach:
            student.career_life_coach && student.career_life_coach.id,
          transportation: student.transportation,
        },
        pastSchoolInfo: {
          last_year_enrolled: String(student.last_year_enrolled),
          last_school: student.last_school_attended,
          last_grade_completed: student.last_grade_completed,
          enroll_date: "",
          cohort_year: String(student.cohort_year),
          selectedPrograms: student.special_programs.map(
            (element) => element.id
          ),
        },
        currentLife: {
          parole_officer_name: student.parole_officer_name,
          parole_officer_phone: student.parole_officer_phone,
          parole_officer_email: student.parole_officer_email,
          marital_status: student.marital_status,
          has_children: student.has_children,
          legal_status: student.legal_status && student.legal_status.id,
          living_situation:
            student.living_situation && student.living_situation.id,
        },
        emergencyContact: {
          emergency_contact_1_name: student.emergency_contact_1_name,
          emergency_contact_1_relationship: student.emergency_contact_1_relation
            ? student.emergency_contact_1_relation.id
            : null,
          emergency_contact_1_email: student.emergency_contact_1_email,
          emergency_contact_1_phone_1: student.emergency_contact_1_phone_1,
          emergency_contact_1_phone_2: student.emergency_contact_1_phone_2,
          legal_guardian_1: student.emergency_contact_1_legal_guardian,
          emergency_contact_2_name: student.emergency_contact_2_name,
          emergency_contact_2_relationship: student.emergency_contact_2_relation
            ? student.emergency_contact_2_relation.id
            : null,
          emergency_contact_2_email: student.emergency_contact_2_email,
          emergency_contact_2_phone_1: student.emergency_contact_2_phone_1,
          emergency_contact_2_phone_2: student.emergency_contact_2_phone_2,
          legal_guardian_2: student.emergency_contact_2_legal_guardian,
        },
        medicalInfo: {
          code_word: student.code_word,
          has_issues: student.has_medical_issues,
          allergy: "",
          medical_info_other: "",
          selectedAllergies: student.allergies.map((element) => element.id),
          selectedDiseases: student.diseases.map((element) => element.id),
        },
        additionalInfo: {
          special_instruction: student.special_instructions,
          student_referred: student.hear_about,
          referral_code: "",
          referral_name: student.referred_by_name,
          student_referred_input: "",
          can_redeem: false,
        },
      },
    };
  },
  data() {
    return {
      yesNoArray,
      states,
      emailErrors: [],
    };
  },
  mounted() {
    if (!this.$store.state.permissions.includes("Edit GC Profile")) {
      this.$router.push("/unauthorized");
    }
    if (this.$store.state.user !== null) {
      this.$router.push("/not-allowed");
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
          required,
          alphaNumericWithSpace,
          minLength: minLength(3),
          maxLength: maxLength(15),
        },
        phase: { required },
        status: { required },
        username: { required },
        password: { required },
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
        city: {
          required,
        },
        state: {
          required,
        },
        county: {
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
        has_wifi: { required },
        has_device: { required },
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
        living_situation: { required },
        legal_status: { required },
        has_children: { required },
        marital_status: { required },
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
        graduate_candidate_advocate: { required },
        content_coach: { required },
        career_life_coach: { required },
        transportation: { required },
      },
      pastSchoolInfo: {
        last_school: {
          minLength: minLength(3),
          maxLength: maxLength(50),
        },
        last_grade_completed: { required },
        last_year_enrolled: { required },
        last_school: { required },
        selectedPrograms: { required },
        cohort_year: { required },
      },
      emergencyContact: {
        emergency_contact_1_name: {
          required,
          alphaWithSpecialCharacter,
          minLength: minLength(5),
          maxLength: maxLength(50),
        },
        emergency_contact_1_email: {
          email,
          minLength: minLength(7),
          maxLength: maxLength(100),
        },
        emergency_contact_1_relationship: { required },
        emergency_contact_1_phone_1: {
          required,
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
        has_issues: { required },
      },
      additionalInfo: {
        referral_name: { minLength: minLength(3), maxLength: maxLength(50) },
        student_referred: { required },
      },
    },
  },

  computed: {
    naming() {
      if (this.form) {
        return (
          this.form.requirements.first_name +
          " " +
          this.form.requirements.last_name
        );
      }
      return "";
    },

    location() {
      if (this.student) {
        return this.student.site !== null
          ? this.student.site.district.name
          : "N/A";
      }
      return "N/A";
    },

    showPhase() {
      if (this.student) {
        return this.student.status ? this.student.status.phase.name : "N/A";
      }
      return "N/A";
    },

    showStatus() {
      if (this.student) {
        return this.student.status ? this.student.status.name : "N/A";
      }
      return "N/A";
    },

    showAdvocate() {
      if (this.student) {
        return this.student.graduate_candidate_advocate
          ? this.student.graduate_candidate_advocate.first_name
          : "N/A";
      }
      return "N/A";
    },
  },

  methods: {
    onSubmit() {},
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

    onFileChange(e) {
      const files = e.target.files || e.dataTransfer.files;
      if (!files.length) {
        return;
      }
      this.gcImage = files[0];
    },
    async onSubmit($event) {
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        console.log(this.$v);
      } else {
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
          profile_picture_id,
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
          special_instruction,
          referral_code,
        } = additionalInfo;

        const payload = {
          type: "students",
          id: this.$route.params.id,
          attributes: {
            emergency_contact_1_name,
            emergency_contact_1_phone_1,
            first_name,
            last_name,
            district_id,
            street_address,
            city,
            state,
            zip_code,
            email,
            has_wifi,
            has_device,
            phone_1_type,
            birthdate: moment(birthdate).format("MM/DD/YYYY"),
            gender,
            marital_status,
            has_children,
            last_year_enrolled,
            last_grade_completed,
            phone_1: contactInfo.primary_phone,
            has_medical_issues: medicalInfo.has_issues === "Yes" ? 1 : 0,
            last_school_attended: pastSchoolInfo.last_school,
            hear_about: student_referred,
            // minor: 1,
            county,
            cohort_year,
            transportation,
          },
          relationships: {
            phase: { data: { type: "phases", id: phase } },
            status: {
              data: { type: "statuses", id: status },
            },
            district: {
              data: { type: "districts", id: district && String(district) },
            },
            site: { data: { type: "sites", id: site && String(site) } },
            race: { data: { type: "races", id: race && String(race) } },
            legal_status: {
              data: {
                type: "legal-statuses",
                id: legal_status,
              },
            },
            living_situation: {
              data: {
                type: "living-situations",
                id: living_situation,
              },
            },
            primary_language: {
              data: {
                type: "primary-languages",
                id: primary_language,
              },
            },
            graduate_candidate_advocate: {
              data: {
                type: "users",
                id: graduate_candidate_advocate,
              },
            },
            content_coach: {
              data: {
                type: "users",
                id: content_coach,
              },
            },
            career_life_coach: {
              data: {
                type: "users",
                id: career_life_coach,
              },
            },
            emergency_contact_1_relation: {
              data: {
                type: "emergency-contact-relations",
                id: emergency_contact_1_relationship,
              },
            },
            special_programs: {
              data: selectedPrograms
                ? selectedPrograms.map((element) => {
                    return {
                      type: "special-programs",
                      id: element,
                    };
                  })
                : null,
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
          payload.attributes.emergency_contact_2_legal_guardian = legal_guardian_1;
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
        if (special_instruction !== "" && special_instruction !== null) {
          payload.attributes.special_instructions = special_instruction;
        }
        if (referral_code !== "" && referral_code !== null) {
          payload.attributes.referred_by_code = referral_code;
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
        if (selectedAllergies !== null && selectedAllergies.length > 0) {
          payload.relationships.allergies = {
            data: selectedAllergies.map((element) => {
              return {
                type: "allergies",
                id: element,
              };
            }),
          };
        }
        if (selectedDiseases !== null && selectedDiseases.length > 0) {
          payload.relationships.diseases = {
            data: selectedDiseases.map((element) => {
              return {
                type: "diseases",
                id: element,
              };
            }),
          };
        }
        console.log(payload);
        this.api
          .updateStudent(this.$route.params.id, payload)
          .then((data) => {
            console.log(data);
            this.$router.push(`/student-contact/${this.$route.params.id}`);
            if (data.status === 422) {
              for (const err in data) {
                if (err.status === 422) {
                  this.emailErrors.push(data);
                }
              }
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
};
</script>
