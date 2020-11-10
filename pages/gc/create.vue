<template>
  <div>
    <h1>Graduation Candidate | Set-Up</h1>
    <!-- Form row -->
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h2>
              Requirments
              <code>*</code>
            </h2>
            <form class="mt-3">
              <div class="form-row">
                <InputGroup
                  width="4"
                  :important="true"
                  label="GC First Name"
                  :id="firstName"
                  type="text"
                  name="firstName"
                  @firstNameChanged="firstName = $event"
                />
                <InputGroup
                  width="4"
                  :important="false"
                  label="GC Middle Name"
                  :id="middleName"
                  type="text"
                  name="middleName"
                  @middleNameChanged="middleName = $event"
                />
                <InputGroup
                  width="4"
                  :important="true"
                  label="GC Last Name"
                  :id="lastName"
                  type="text"
                  name="lastName"
                  @lastNameChanged="lastName = $event"
                />
              </div>
              <div class="form-row">
                <InputSelectGroup
                  width="4"
                  :important="true"
                  label="Phase"
                  :id="selectedPhase"
                  :array="phases"
                  name="selectedPhase"
                  @selectedPhaseChanged="selectedPhase = $event"
                />
                <InputSelectGroup
                  width="4"
                  :important="true"
                  label="Status"
                  :id="selectedStatus"
                  :array="statuses"
                  name="selectedStatus"
                  @selectedStatusChanged="selectedStatus = $event"
                />
                <InputGroup
                  width="4"
                  label="District ID"
                  :id="districtId"
                  type="text"
                  name="districtId"
                  @districtIdChanged="districtId = $event"
                />
              </div>
              <div class="form-row">
                <div class="form-group profile_image col-12">
                  <label>G.C. Image</label>
                  <div class="input-group">
                    <div class="custom-file">
                      <input
                        class="custom-file-input"
                        type="file"
                        name="student[profile_image]"
                        @change="onFileChange"
                      />
                      <label class="custom-file-label" for="inputGroupFile04"
                        >Choose file</label
                      >
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h2>CONTACT INFORMATION</h2>
            <form>
              <div class="form-row">
                <InputGroup
                  width="6"
                  :important="true"
                  label="Street Address"
                  :id="streetAddress"
                  type="text"
                  name="streetAddress"
                  @streetAddressChanged="streetAddress = $event"
                />
                <InputGroup
                  width="6"
                  :important="true"
                  label="City"
                  :id="city"
                  type="text"
                  name="city"
                  @cityChanged="city = $event"
                />
              </div>
              <div class="form-row">
                <InputSelectGroup
                  width="6"
                  :important="true"
                  label="State"
                  :id="selectedState"
                  :array="states"
                  name="selectedState"
                  @selectedStateChanged="selectedState = $event"
                />
                <InputGroup
                  width="6"
                  :important="true"
                  label="Zip Code"
                  :id="zip"
                  type="text"
                  name="zip"
                  @zipChanged="zip = $event"
                />
              </div>
              <div class="form-row">
                <InputGroup
                  width="6"
                  :important="true"
                  label="Primary Phone"
                  :id="primaryPhone"
                  type="text"
                  name="primaryPhone"
                  @primaryPhoneChanged="primaryPhone = $event"
                />
                <InputSelectGroup
                  width="6"
                  :important="true"
                  label="GC Phone Type"
                  :id="phoneType"
                  :array="phones"
                  name="phoneType"
                  @phoneTypeChanged="phoneType = $event"
                />
              </div>
              <div class="form-row">
                <InputGroup
                  width="6"
                  label="Secondary Phone"
                  :id="secondaryPhone"
                  type="text"
                  name="secondaryPhone"
                  @secondaryPhoneChanged="secondaryPhone = $event"
                />
                <InputSelectGroup
                  width="6"
                  label="GC Phone Type"
                  :id="secondaryPhoneType"
                  :array="phones"
                  name="secondaryPhoneType"
                  @secondaryPhoneTypeChanged="secondaryPhoneType = $event"
                />
              </div>
              <div class="form-row">
                <InputGroup
                  width="6"
                  label="Email"
                  :id="email"
                  type="email"
                  name="email"
                  @emailChanged="email = $event"
                />
                <InputSelectGroup
                  width="6"
                  label="Does the GC have WIFI?"
                  :id="hasWifi"
                  :array="yesNoArray"
                  name="hasWifi"
                  @hasWifiChanged="hasWifi = $event"
                />
              </div>
              <div class="form-row">
                <InputSelectGroup
                  width="6"
                  label="Does the GC have a device?"
                  :id="hasDevice"
                  :array="yesNoArray"
                  name="hasDevice"
                  @hasDeviceChanged="hasDevice = $event"
                />
              </div>
            </form>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h2>EEOC INFORMATION</h2>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label>
                  Date Of Birth
                </label>
                <flat-pickr
                  class="date-picker form-control flatpickr-input"
                  v-model="dateOfBirth"
                ></flat-pickr>
              </div>
              <InputSelectGroup
                width="6"
                label="Gender"
                :id="gender"
                :array="genders"
                name="gender"
                @genderChanged="gender = $event"
              />
            </div>
            <div class="form-row">
              <InputSelectGroup
                width="6"
                label="Race"
                :id="race"
                :array="races"
                name="race"
                @raceChanged="race = $event"
              />

              <InputSelectGroup
                width="6"
                label="Primary Language"
                :id="primaryLanguage"
                :array="languages"
                name="gender"
                @genderChanged="gender = $event"
              />
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h2>AA LOCATION &amp; STAFF ASSIGNMENTS</h2>
            <div class="form-row">
              <InputSelectGroup
                width="6"
                :important="true"
                label="District Partner"
                :array="districts"
                :id="district"
                name="district"
                @districtChanged="district = $event"
              />
              <InputSelectGroup
                width="6"
                :important="true"
                label="Site"
                :array="sites"
                :id="site"
                name="site"
                @siteChanged="site = $event"
              />
            </div>
            <div class="form-row">
              <InputSelectGroup
                width="6"
                label="Graduate Candidate Advocate"
                :array="advocates"
                :id="graduateCandidateAdvocate"
                name="graduateCandidateAdvocate"
                @graduateCandidateAdvocateChanged="
                  graduateCandidateAdvocate = $event
                "
              />
              <InputSelectGroup
                width="6"
                label="Content Coach"
                :array="contentCoaches"
                :id="contentCoach"
                name="contentCoach"
                @contentCoachChanged="contentCoach = $event"
              />
            </div>
            <div class="form-row">
              <InputSelectGroup
                width="6"
                label="Career Life Coach"
                :array="lifeCoaches"
                :id="lifeCoach"
                name="lifeCoach"
                @lifeCoachChanged="lifeCoach = $event"
              />
              <InputSelectGroup
                width="6"
                label="Transportation?"
                :array="transportationMethods"
                :id="transportation"
                name="transportation"
                @transportationChanged="transportation = $event"
              />
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h2>PAST SCHOOL INFO</h2>
            <div class="form-row">
              <InputSelectGroup
                width="6"
                :important="true"
                label="Last year enrolled in school"
                :array="years"
                :id="lastYearEnrolled"
                name="lastYearEnrolled"
                @lastYearEnrolledChanged="lastYearEnrolled = $event"
              />
              <InputGroup
                width="6"
                :important="true"
                label="Last school attended"
                type="text"
                :id="lastSchoolAttended"
                name="lastSchoolAttended"
                @lastSchoolAttendedChanged="lastSchoolAttended = $event"
              />
            </div>
            <div class="form-row">
              <InputSelectGroup
                width="6"
                :important="true"
                label="Last Grade Completed"
                :array="gradeLevels"
                :id="lastGradeCompleted"
                name="lastGradeCompleted"
                @lastGradeCompletedChanged="lastGradeCompleted = $event"
              />
              <div class="col-xs-12 col-md-6">
                <div class="form-group input first_date">
                  <label for="student_first_date"
                    >First date enrolled in A.A.<code v-if="important"
                      >*</code
                    ></label
                  >
                  <flat-pickr
                    class="date-picker form-control flatpickr-input"
                    v-model="enrolledDate"
                  ></flat-pickr>
                </div>
              </div>

              <div class="col-xs-12 col-md-12">
                <div class="form-group input anyfollowing">
                  <p for="student_anyfollowing">Special Programs</p>
                  <div class="checkbox checkbox-success form-check-inline ml-1">
                    <input
                      type="checkbox"
                      name="student[anyfollowing][]"
                      id="inlineCheckbox1"
                      v-model="special1"
                    />
                    <label for="inlineCheckbox1">ELL/ESOL</label>
                  </div>
                  <div class="checkbox checkbox-success form-check-inline ml-1">
                    <input
                      type="checkbox"
                      name="student[anyfollowing][]"
                      id="inlineCheckbox2"
                      v-model="special2"
                    />
                    <label for="inlineCheckbox2">None</label>
                  </div>
                  <div class="checkbox checkbox-success form-check-inline ml-1">
                    <input
                      type="checkbox"
                      name="student[anyfollowing][]"
                      id="inlineCheckbox3"
                      v-model="special3"
                    />
                    <label for="inlineCheckbox3">Not Disclosed</label>
                  </div>
                  <div class="checkbox checkbox-success form-check-inline ml-1">
                    <input
                      type="checkbox"
                      name="student[anyfollowing][]"
                      id="inlineCheckbox4"
                      v-model="special4"
                    />
                    <label for="inlineCheckbox4">IEP</label>
                  </div>
                  <div class="checkbox checkbox-success form-check-inline ml-1">
                    <input
                      type="checkbox"
                      name="student[anyfollowing][]"
                      id="inlineCheckbox5"
                      v-model="special5"
                    />
                    <label for="inlineCheckbox5">504 Plan</label>
                  </div>
                  <div class="checkbox checkbox-success form-check-inline ml-1">
                    <input
                      type="checkbox"
                      name="student[anyfollowing][]"
                      id="inlineCheckbox6"
                      v-model="special6"
                    />
                    <label for="inlineCheckbox6">Free Lunch</label>
                  </div>
                  <div class="checkbox checkbox-success form-check-inline ml-1">
                    <input
                      type="checkbox"
                      name="student[anyfollowing][]"
                      id="inlineCheckbox7"
                      v-model="special7"
                    />
                    <label for="inlineCheckbox7">GT</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h2>CURRENT LIFE</h2>
            <div class="row">
              <InputSelectGroup
                width="6"
                label="Marital Status"
                :array="maritalStatuses"
                :id="maritalStatus"
                name="maritalStatus"
                @maritalStatusChanged="maritalStatus = $event"
              />
              <InputSelectGroup
                width="6"
                label="Children"
                :array="parentalStatuses"
                :id="parentalStatus"
                name="parentalStatus"
                @parentalStatusChanged="parentalStatus = $event"
              />
              <InputSelectGroup
                width="6"
                label="Legal Status"
                :array="legalStatuses"
                :id="legalStatus"
                name="legalStatus"
                @legalStatusChanged="legalStatus = $event"
              />
              <InputSelectGroup
                width="6"
                label="Living Situation"
                :array="livingSituations"
                :id="livingSituation"
                name="livingSituation"
                @livingSituationChanged="livingSituation = $event"
              />
              <InputGroup
                width="6"
                label="Parole Officer"
                type="text"
                :id="paroleOfficer"
                name="paroleOfficer"
                @paroleOfficerChanged="paroleOfficer = $event"
              />
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h2>EMERGENCY CONTACT</h2>
            <div class="row">
              <InputGroup
                width="6"
                label="Emergency Contact Name"
                type="text"
                :id="emergencyContactName"
                name="emergencyContactName"
                @emergencyContactNameChanged="emergencyContactName = $event"
              />
              <InputSelectGroup
                width="6"
                label="Emergency Contact Relationship"
                :array="contactRelationships"
                :id="emergencyContactRelationship"
                name="emergencyContactRelationship"
                @emergencyContactRelationshipChanged="
                  emergencyContactRelationship = $event
                "
              />
              <InputGroup
                width="6"
                label="Emergency Contact Email"
                type="email"
                :id="emergencyContactEmail"
                name="emergencyContactEmail"
                @emergencyContactEmailChanged="emergencyContactEmail = $event"
              />
              <InputGroup
                width="6"
                label="Emergency Contact Phone (Home)"
                type="text"
                :id="emergencyContactPhone"
                name="emergencyContactPhone"
                @emergencyContactPhoneChanged="emergencyContactPhone = $event"
              />
              <InputGroup
                width="6"
                label="Emergency Contact Phone (Work)"
                type="text"
                :id="emergencyContactPhone2"
                name="emergencyContactPhone2"
                @emergencyContactPhone2Changed="emergencyContactPhone2 = $event"
              />
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h2>MEDICAL INFORMATION</h2>
            <div class="row">
              <InputSelectGroup
                width="4"
                label="Do you have any medical issues or concerns?"
                :array="yesNoArray"
                :id="medicalIssues"
                name="medicalIssues"
                @medicalIssuesChanged="medicalIssues = $event"
              />
              <InputGroup
                width="6"
                label="Code Word"
                :id="codeWord"
                name="codeWord"
                @codeWordChanged="codeWord = $event"
              />
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-body">
            <h4 class="mb-3 header-title">ADDITIONAL INFO</h4>
            <div class="row">
              <div class="col-xs-12 col-md-6">
                <div class="form-group input additionalinfo">
                  <label for="student_additionalinfo"
                    >Please share any other personal information that you would
                    like us to know.</label
                  >
                  <textarea
                    class="form-control"
                    id="student_additionalinfo"
                    name="student[additionalinfo]"
                    v-model="additionalInfo"
                  ></textarea>
                </div>
              </div>
              <div class="col-xs-12 col-md-6">
                <div class="form-group input referred">
                  <label for="student_referred" class="required"
                    >How did you find out about Acceleration Academies?</label
                  >
                  <select
                    class="form-control"
                    id="student_referred"
                    name="student[referred]"
                    required
                    v-model="refferal"
                  >
                    <option value>-- Choose An Option --</option>
                    <optgroup label="Call">
                      <option value="30">Call/Text</option>
                    </optgroup>
                    <optgroup label="Digital Ad/Online">
                      <option value="63">Email Campaign</option>
                      <option value="50">Facebook</option>
                      <option value="51">Instagram</option>
                      <option value="52">Internet/Google</option>
                      <option value="48">Radio</option>
                      <option value="53">Snapchat</option>
                      <option value="56">Spotify</option>
                      <option value="49">TV</option>
                      <option value="54">Twitter</option>
                      <option value="55">YouTube</option>
                    </optgroup>
                    <optgroup label="Home Visit"></optgroup>
                    <optgroup label="Local Event">
                      <option value="62">Community Event</option>
                      <option value="57">Mall</option>
                      <option value="58">Movie Theater</option>
                      <option value="59">Parade</option>
                    </optgroup>
                    <optgroup label="Other"></optgroup>
                    <optgroup label="Print Ad">
                      <option value="45">Billboard</option>
                      <option value="46">Bus Ad</option>
                      <option value="42">Door Hanger</option>
                      <option value="43">Flyer</option>
                      <option value="47">Newspaper</option>
                      <option value="44">Postcard/Letter</option>
                    </optgroup>
                    <optgroup label="Referral">
                      <option value="61" selected>AA Staff</option>
                      <option value="34"
                        >Case Manager/Probation Officer/DJJ</option
                      >
                      <option value="60">District Staff/AO</option>
                      <option value="32">Family/Friend</option>
                    </optgroup>
                  </select>

                  <input
                    class="form-control"
                    type="text"
                    placeholder="If Other, please input how you found out about us."
                    maxlength="255"
                    name="student[referred_other]"
                    v-model="refferalOther"
                  />
                </div>
              </div>

              <InputGroup
                width="6"
                label="Name of person who referred you:"
                type="text"
                :id="refferedName"
                name="refferedName"
                @refferedNameChanged="refferedName = $event"
              />
              <InputGroup
                width="6"
                label="Referal Code:"
                type="text"
                :id="referalCode"
                name="referalCode"
                @refferedNameChanged="referalCode = $event"
              />
            </div>
          </div>
        </div>
        <div class="card-box text-center">
          <input class="btn btn-success" type="submit" @click="createGc" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css");
</style>

<script>
import InputGroup from "@/components/UI/InputGroup";
import InputSelectGroup from "@/components/UI/InputSelectGroup";
import flatPickr from "vue-flatpickr-component";
import GC from "@/models/GC";

import {
  getStates,
  getPhases,
  getStatuses,
  getGradeLevels,
  getAdvocates,
  getOutreachAdvocates,
  getPhones,
  getYears,
  getDistricts,
  getSites,
  getMaritalStatuses,
  getParentalStatuses,
  getLegalStatuses,
  getLivingSituations,
  getContentCoaches,
  getLifeCoaches,
  getTranportationMethods,
  createGc
} from "@/services/api/Api";

export default {
  components: {
    InputGroup,
    InputSelectGroup
  },
  async asyncData() {
    const states = await getStates();
    const statuses = await getStatuses();
    const phases = await getPhases();
    const gradeLevels = await getGradeLevels();
    const phones = await getPhones();
    const years = await getYears();
    const districts = await getDistricts();
    const sites = await getSites();
    const advocates = await getAdvocates();
    const maritalStatuses = await getMaritalStatuses();
    const parentalStatuses = await getParentalStatuses();
    const legalStatuses = await getLegalStatuses();
    const livingSituations = await getLivingSituations();
    const contentCoaches = await getContentCoaches();
    const lifeCoaches = await getLifeCoaches();
    const transportationMethods = await getTranportationMethods();

    return {
      states: states.data,
      statuses: statuses.data,
      phases: phases.data,
      gradeLevels: gradeLevels.data,
      phones: phones.data,
      years: years.data,
      districts: districts.data,
      sites: sites.data,
      advocates: advocates.data,
      maritalStatuses: maritalStatuses.data,
      parentalStatuses: parentalStatuses.data,
      legalStatuses: legalStatuses.data,
      livingSituations: livingSituations.data,
      contentCoaches: contentCoaches.data,
      lifeCoaches: lifeCoaches.data,
      transportationMethods: transportationMethods.data
    };
  },
  data() {
    return {
      firstName: "",
      middleName: "",
      lastName: "",
      selectedPhase: "-- Choose Phase --",
      selectedStatus: "--Status Options--",
      districtId: "",
      gcImage: null,
      streetAddress: "",
      city: "",
      selectedState: "-- No Answer --",
      zip: "",
      primaryPhone: "",
      phoneType: "-- No Answer --",
      secondaryPhone: "",
      secondaryPhoneType: "-- No Answer --",
      email: "",
      hasWifi: "Unknown",
      hasDevice: "Unknown",
      dateOfBirth: "",
      gender: "Gender",
      race: "-- Choose A Race --",
      primaryLanguage: "-- Choose A Primary Language --",
      district: "-- Choose A District --",
      site: "-- Choose A Site --",
      graduateCandidateAdvocate: "-- Choose User --",
      contentCoach: "--Select a CC--",
      lifeCoach: "--Select a CLC--",
      transportation: "--Select Transportation--",
      lastYearEnrolled: "",
      lastSchoolAttended: "",
      lastGradeCompleted: "Grade Level",
      enrolledDate: "",
      special1: 0,
      special2: 0,
      special3: 0,
      special4: 0,
      special5: 0,
      special6: 0,
      special7: 0,
      maritalStatus: "-- Choose A Marital Status --",
      parentalStatus: "-- Choose Parental Status --",
      legalStatus: "-- Choose A Legal Status --",
      livingSituation: "-- Choose A Living Situation --",
      paroleOfficer: "",
      emergencyContactName: "",
      emergencyContactRelationship: "-- Choose An Option --",
      emergencyContactEmail: "",
      emergencyContactPhone: "",
      emergencyContactPhone2: "",
      medicalIssues: "",
      codeWord: "",
      additionalInfo: "",
      refferal: "",
      refferedName: "",
      refferalOther: "",
      yesNoArray: ["Unknown", "Yes", "No"],
      genders: ["Gender", "Male", "Female", "Non Binary", "Non Disclosed"],
      races: [
        "-- Choose A Race --",
        "African-American",
        "Asian",
        "Caucasian",
        "Hispanic",
        "Native-American",
        "Other",
        "Not Disclosed"
      ],
      languages: [
        "-- Choose A Primary Language --",
        "English",
        "Spanish",
        "Creole",
        "Other",
        "Not Disclosed"
      ],
      contactRelationships: [
        "-- Choose An Option --",
        "Parent",
        "Sibling",
        "Other Relative",
        "Friend",
        "Spouse",
        "Other"
      ]
    };
  },
  methods: {
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.gcImage = files[0];
    },
    async createGc() {
      var gc = new GC(
        this.firstName,
        this.middleName,
        this.lastName,
        this.selectedPhase,
        this.selectedStatus,
        this.districtId,
        this.gcImage,
        this.streetAddress,
        this.city,
        this.selectedState,
        this.zip,
        this.primaryPhone,
        this.phoneType,
        this.secondaryPhone,
        this.secondaryPhoneType,
        this.email,
        this.hasWifi,
        this.hasDevice,
        this.dateOfBirth,
        this.gender,
        this.race,
        this.primaryLanguage,
        this.district,
        this.site,
        this.graduateCandidateAdvocate,
        this.contentCoach,
        this.lifeCoach,
        this.transportation,
        this.lastYearEnrolled,
        this.lastSchoolAttended,
        this.lastGradeCompleted,
        this.enrolledDate,
        this.special1,
        this.special2,
        this.special3,
        this.special4,
        this.special5,
        this.special6,
        this.special7,
        this.maritalStatus,
        this.parentalStatus,
        this.legalStatus,
        this.livingSituation,
        this.paroleOfficer,
        this.emergencyContactName,
        this.emergencyContactRelationship,
        this.emergencyContactEmail,
        this.emergencyContactPhone,
        this.emergencyContactPhone2,
        this.medicalIssues,
        this.codeWord,
        this.additionalInfo,
        this.refferal,
        this.refferedName,
        this.refferalOther
      );
      var json = gc.toJson();
      createGc(json)
        .then(data => {
          this.$router.push("/");
        })
        .catch(e => {
          context.error(new Error());
        });
    }
  },
  components: {
    flatPickr
  }
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
