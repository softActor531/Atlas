<template>
  <div class="container-fluid">
    <div class>
      <div class="col-md-12 col-xs-12">
        <div class="row">
          <div class="col-12">
            <div class="page-title-box">
              <h4 class="page-title">Graduation Candidate | Set-Up</h4>
            </div>
          </div>
        </div>
        <form>
          <div class="card">
            <div class="card-body">
              <p><code>*</code> Required</p>
              <div class="row">
                <GcInputGroup
                  label="GC First Name"
                  type="text"
                  :id="first_name"
                  name="first_name"
                  @first_nameChanged="first_name = $event"
                />
                <GcInputGroup
                  label="GC Middle Initial"
                  type="text"
                  :id="middle_name"
                  name="middle_name"
                  @middle_nameChanged="middle_name = $event"
                />
                <GcInputGroup
                  label="GC Last Name"
                  type="text"
                  :id="last_name"
                  name="last_name"
                  @last_nameChanged="last_name = $event"
                />
              </div>
              <div class="row">
                <GcInputGroup
                  label="GC Username"
                  type="text"
                  :id="username"
                  name="username"
                  @usernameChanged="username = $event"
                />
                <GcInputGroup
                  label="GC Password"
                  :disabled="true"
                  type="password"
                  :id="password"
                  name="password"
                />
                <GcInputSelectGroup2
                  label="Phase"
                  :em="true"
                  :id="phase.id"
                  name="phase"
                  :array="phases"
                  @phaseChanged="phase.id = $event"
                />
              </div>

              <div class="row">
                <GcInputSelectGroup2
                  label="Status"
                  :em="true"
                  :id="status.id"
                  name="status"
                  :array="statuses"
                  @statusChanged="status.id = $event"
                />
                <GcInputGroup
                  label="District ID"
                  type="number"
                  :id="district_id"
                  name="district_id"
                  @district_idChanged="district_id = $event"
                />
              </div>
              <div class="row">
                <div class="col-xs-12 col-md-6">
                  <div class="form-group input workflow_exception">
                    <label for="workflowException">Workflow Exception</label>
                    <select class="form-control" v-model="workflow_exception">
                      <option value="0">No</option>
                      <option value="1">Yes</option>
                    </select>
                    <span class="help-block">
                      (Removes G.C. from automated status changes until turned
                      off)
                    </span>
                  </div>
                </div>
                <div class="col-xs-12 col-md-6">
                  <div class="form-group mb-0">
                    <label>G.C. Image</label>
                    <div class="input-group">
                      <input
                        type="file"
                        name="student[profile_image]"
                        accept=".jpg, .jpeg, .png, .gif"
                      />
                    </div>
                    <span class="help-block"
                      >(5 MB limit - JPG, JPEG, PNG, &amp; GIF only)</span
                    >
                    <img
                      class="profileImage"
                      src="../../assets/images/profile_image.png"
                      alt="Profile Image"
                      style="cursor: default; max-width: 150px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <h4 class="mb-3 header-title">CONTACT INFORMATION</h4>
              <fieldset class="contact-info">
                <div class="row">
                  <GcInputGroup
                    label="Street Address"
                    type="text"
                    :id="street_address"
                    name="street_address"
                    @street_addressChanged="street_address = $event"
                  />
                  <GcInputGroup
                    label="City"
                    type="text"
                    :id="city"
                    name="city"
                    @cityChanged="city = $event"
                  />
                  <GcInputSelectGroup
                    label="State"
                    :id="state"
                    name="state"
                    :array="states"
                    @stateChanged="state = $event"
                  />
                  <GcInputGroup
                    label="Zip Code"
                    type="text"
                    :id="zip_code"
                    name="zip_code"
                    @zip_codeChanged="zip_code = $event"
                  />
                  <GcInputGroup
                    label="County"
                    type="text"
                    :id="county"
                    name="county"
                    @countyChanged="county = $event"
                  />
                  <GcInputGroup
                    label="Primary Phone"
                    type="text"
                    :id="phone_1"
                    name="phone_1"
                    @phone_1Changed="phone_1 = $event"
                  />
                  <GcInputSelectGroup2
                    label="GC Phone Type"
                    :array="phoneTypes"
                    :id="phone_1_type.id"
                    name="phone_1_type"
                    @phone_1_typeChanged="phone_1_type.id = $event"
                  />
                  <GcInputGroup
                    label="Secondary Phone"
                    type="text"
                    :id="phone_2"
                    name="phone_2"
                    @phone_2Changed="phone_2 = $event"
                  />
                  <GcInputSelectGroup2
                    label="Secondary Phone Type"
                    :array="phoneTypes"
                    :id="phone_2_type.id"
                    name="phone_2_type"
                    @phone_2_typeChanged="phone_2_type.id = $event"
                  />
                  <GcInputGroup
                    label="Email"
                    type="email"
                    :id="email"
                    name="email"
                  />
                  <GcInputSelectGroup2
                    label="Does the GC have WIFI?"
                    :array="hasWifis"
                    :id="has_wifi.id"
                    name="has_wifi"
                    @has_wifiChanged="has_wifi.id = $event"
                  />
                  <GcInputSelectGroup2
                    label="Does the GC have a device?"
                    :array="hasDevices"
                    :id="has_device.id"
                    name="has_device"
                    @has_deviceChanged="has_device.id = $event"
                  />
                </div>
              </fieldset>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <h4 class="mb-3 header-title">EEOC INFORMATION</h4>
              <div class="row">
                <div class="col-xs-12 col-md-4">
                  <div class="form-group input birthdate">
                    <!-- <label for="student_birthdate">Date of Birth</label>
                    <flat-pickr
                      class="date-picker form-control flatpickr-input"
                      v-model="birthdate"
                    ></flat-pickr> -->

                    <b-form-group
                      id="groupbirthate"
                      label-for="birthdate"
                      :label="`customlabel`"
                      invalid-feedback="This field is required. "
                      :state="validateState"
                    >
                      <template v-slot:label>
                        BirthDate
                        <span class="text-danger">*</span>
                      </template>
                      <DatePicker
                        id="birthdate"
                        required
                        v-model="birthdateUTC"
                        @input="handleDatePicker"
                      />
                      <p
                        class="text-blue-500 text-xs font-bold mt-1"
                        v-if="birthdateUTC"
                      >
                        We got it. Thanks!
                      </p>
                    </b-form-group>
                  </div>
                </div>
                <GcInputSelectGroup2
                  label="Gender"
                  :array="genders"
                  :id="gender.id"
                  name="gender"
                  @genderChanged="gender.id = $event"
                />
                <GcInputSelectGroup2
                  label="Race"
                  :array="races"
                  :id="race.id"
                  name="race"
                  @raceChanged="race.id = $event"
                />
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <h4 class="mb-3 header-title">
                AA LOCATION &amp; STAFF ASSIGNMENTS
              </h4>
              <div class="row">
                <GcInputSelectGroup2
                  label="District Partner"
                  :em="true"
                  :array="districts"
                  :id="district.id"
                  name="district"
                  @districtChanged="district.id = $event"
                />
                <GcInputSelectGroup2
                  label="Site"
                  :em="true"
                  :array="sites"
                  :id="site.id"
                  name="site"
                  @siteChanged="site.id = $event"
                />
                <GcInputSelectGroup2
                  label="Graduate Candidate Advocate"
                  :array="advocates"
                  :user="true"
                  :id="graduateCandidateAdvocate.id"
                  name="graduateCandidateAdvocate"
                  @graduateCandidateAdvocateChanged="
                    graduateCandidateAdvocate.id = $event
                  "
                />
                <GcInputSelectGroup2
                  label="Content Coach"
                  :array="contentCoaches"
                  :id="contentCoach.id"
                  :user="true"
                  name="contentCoach"
                  @contentCoachChanged="contentCoach.id = $event"
                />
                <GcInputSelectGroup2
                  label="Career Life Coach"
                  :array="lifeCoaches"
                  :id="lifeCoach.id"
                  :user="true"
                  name="lifeCoach"
                  @lifeCoachChanged="lifeCoach.id = $event"
                />
                <GcInputSelectGroup
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
              <h4 class="mb-3 header-title">PAST SCHOOL INFO</h4>
              <div class="row">
                <GcInputSelectGroup2
                  label="Last year enrolled in school"
                  :array="lastYearOptions"
                  :id="last_year_enrolled.id"
                  name="lastYearEnrolled"
                  @lastYearEnrolledChanged="lastYearEnrolled.id = $event"
                />
                <GcInputGroup
                  label="Last school attended"
                  type="text"
                  :id="last_school"
                  name="last_school"
                  @last_schoolChanged="last_school = $event"
                />
                <GcInputSelectGroup2
                  label="Cohort Year"
                  :array="cohortYears"
                  :id="cohort_year.id"
                  name="cohort_year"
                  @cohort_yearChanged="cohort_year.id = $event"
                />
                <GcInputSelectGroup2
                  label="Last Grade Completed"
                  :array="gradeLeveles"
                  :id="last_grades_completed.id"
                  name="last_grades_completed"
                  @last_grades_completedChanged="
                    last_grades_completed.id = $event
                  "
                />
                <div class="col-xs-12 col-md-6">
                  <div class="form-group input first_date">
                    <label for="student_first_date"
                      >First date enrolled in A.A.</label
                    >
                    <flat-pickr
                      class="date-picker form-control flatpickr-input"
                      v-model="enrolled_date"
                    ></flat-pickr>
                  </div>
                </div>
                <GcInputGroup
                  label="Last school attended"
                  type="text"
                  :id="last_school"
                  name="last_school"
                  @last_schoolChanged="last_school = $event"
                />
                <div class="col-xs-12 col-md-12">
                  <div class="form-group input anyfollowing">
                    <p for="student_anyfollowing">Special Programs</p>
                    <div
                      class="checkbox checkbox-success form-check-inline ml-1"
                    >
                      <input
                        type="checkbox"
                        name="student[anyfollowing][]"
                        id="inlineCheckbox1"
                        v-model="special1"
                      />
                      <label for="inlineCheckbox1">ELL/ESOL</label>
                    </div>
                    <div
                      class="checkbox checkbox-success form-check-inline ml-1"
                    >
                      <input
                        type="checkbox"
                        name="student[anyfollowing][]"
                        id="inlineCheckbox2"
                        v-model="special2"
                      />
                      <label for="inlineCheckbox2">None</label>
                    </div>
                    <div
                      class="checkbox checkbox-success form-check-inline ml-1"
                    >
                      <input
                        type="checkbox"
                        name="student[anyfollowing][]"
                        id="inlineCheckbox3"
                        v-model="special3"
                      />
                      <label for="inlineCheckbox3">Not Disclosed</label>
                    </div>
                    <div
                      class="checkbox checkbox-success form-check-inline ml-1"
                    >
                      <input
                        type="checkbox"
                        name="student[anyfollowing][]"
                        id="inlineCheckbox4"
                        v-model="special4"
                      />
                      <label for="inlineCheckbox4">IEP</label>
                    </div>
                    <div
                      class="checkbox checkbox-success form-check-inline ml-1"
                    >
                      <input
                        type="checkbox"
                        name="student[anyfollowing][]"
                        id="inlineCheckbox5"
                        v-model="special5"
                      />
                      <label for="inlineCheckbox5">504 Plan</label>
                    </div>
                    <div
                      class="checkbox checkbox-success form-check-inline ml-1"
                    >
                      <input
                        type="checkbox"
                        name="student[anyfollowing][]"
                        id="inlineCheckbox6"
                        v-model="special6"
                      />
                      <label for="inlineCheckbox6">Free Lunch</label>
                    </div>
                    <div
                      class="checkbox checkbox-success form-check-inline ml-1"
                    >
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
              <h4 class="mb-3 header-title">CURRENT LIFE</h4>
              <div class="row">
                <GcInputSelectGroup
                  label="Marital Status"
                  :array="maritalStatuses"
                  :id="marital_status"
                  name="marital_status"
                  @marital_statusChanged="marital_status = $event"
                />
                <GcInputSelectGroup
                  label="Children"
                  :array="parentalStatuses"
                  :id="parental_status"
                  name="parental_status"
                  @parental_statusChanged="parental_status = $event"
                />
                <GcInputSelectGroup
                  label="Legal Status"
                  :array="legalStatuses"
                  :id="legal_status"
                  name="legal_status"
                  @legal_statusChanged="legal_status = $event"
                />
                <GcInputSelectGroup
                  label="Living Situation"
                  :array="livingSituations"
                  :id="living_situation"
                  name="living_situation"
                  @living_situationChanged="living_situation = $event"
                />
                <GcInputGroup
                  label="Parole Officer"
                  type="text"
                  :id="parole_officer"
                  name="parole_officer"
                  @parole_officerChanged="parole_officer = $event"
                />
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <h4 class="mb-3 header-title">EMERGENCY CONTACT</h4>
              <div class="row">
                <GcInputGroup
                  label="Emergency Contact Name"
                  type="text"
                  :id="emergency_contact_1_name"
                  name="emergency_contact_1_name"
                  @emergency_contact_1_nameChanged="
                    emergency_contact_1_name = $event
                  "
                />
                <GcInputSelectGroup
                  label="Emergency Contact Relationship"
                  :array="contactRelationships"
                  :id="emergency_contact_1_relationship.id"
                  name="emergency_contact_1_relationship"
                  @emergency_contact_1_relationshipChanged="
                    emergency_contact_1_relationship.id = $event
                  "
                />
                <GcInputGroup
                  label="Emergency Contact Email"
                  type="email"
                  :id="emergency_contact_1_email"
                  name="emergency_contact_1_email"
                  @emergency_contact_1_emailChanged="
                    emergency_contact_1_email = $event
                  "
                />
                <GcInputGroup
                  label="Emergency Contact Phone (Home)"
                  type="text"
                  :id="emergency_contact_1_phone_1"
                  name="emergency_contact_1_phone_1"
                  @emergency_contact_1_phone_1Changed="
                    emergency_contact_1_phone_1 = $event
                  "
                />
                <GcInputGroup
                  label="Emergency Contact Phone (Work)"
                  type="text"
                  :id="emergency_contact_1_phone_2"
                  name="emergency_contact_1_phone_2"
                  @emergency_contact_1_phone_2Changed="
                    emergency_contact_1_phone_2 = $event
                  "
                />
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <h4 class="mb-3 header-title">MEDICAL INFORMATION</h4>
              <div class="row">
                <GcInputSelectGroup
                  label="Do you have any medical issues or concerns?"
                  :array="yesNoArray2"
                  :id="issue"
                  name="issue"
                  @issueChanged="issue = $event"
                />
                <div class="col-xs-12 col-md-12">
                  <div class="form-group input">
                    <p for="student_medical_ailments">Ailments</p>
                    <div
                      class="checkbox checkbox-success form-check-inline ml-1"
                    >
                      <input
                        id="chck1"
                        type="checkbox"
                        v-model="medical1"
                        name="student[medical_ailments][]"
                      />
                      <label for="chck1">Asthma</label>
                    </div>
                    <div
                      class="checkbox checkbox-success form-check-inline ml-1"
                    >
                      <input
                        id="chck2"
                        type="checkbox"
                        v-model="medical2"
                        name="student[medical_ailments][]"
                      />
                      <label for="chck2">Diabetes</label>
                    </div>
                    <div
                      class="checkbox checkbox-success form-check-inline ml-1"
                    >
                      <input
                        id="chck3"
                        type="checkbox"
                        v-model="medical3"
                        name="student[medical_ailments][]"
                      />
                      <label for="chck3">Pregnancy</label>
                    </div>
                    <div
                      class="checkbox checkbox-success form-check-inline ml-1"
                    >
                      <input
                        id="chck4"
                        type="checkbox"
                        v-model="medical4"
                        name="student[medical_ailments][]"
                      />
                      <label for="chck4">Epilepsy</label>
                    </div>
                    <div
                      class="checkbox checkbox-success form-check-inline ml-1"
                    >
                      <input
                        id="chck5"
                        type="checkbox"
                        v-model="medical5"
                        name="student[medical_ailments][]"
                      />
                      <label for="chck5">Hemophilia</label>
                    </div>
                    <div
                      class="checkbox checkbox-success form-check-inline ml-1"
                    >
                      <input
                        id="chck6"
                        type="checkbox"
                        v-model="medical6"
                        name="student[medical_ailments][]"
                      />
                      <label for="chck6">Heart Condition</label>
                    </div>
                    <br />
                    <label for="student_medical_ailments_other">Other</label>
                    <textarea
                      class="form-control"
                      name="student[medical_ailments_other]"
                      id="student_medical_ailments_other"
                      v-model="medicalOthers"
                    ></textarea>
                  </div>
                </div>
                <GcInputGroup
                  label="Allergies"
                  type="text"
                  :id="allergies"
                  name="allergies"
                  @allergiesChanged="allergies = $event"
                />
                <GcInputGroup
                  label="Code Word"
                  type="text"
                  :id="code_word"
                  name="code_word"
                  @code_wordChanged="code_word = $event"
                />
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <h4 class="mb-3 header-title">ADDITIONAL INFO</h4>
              <div class="row">
                <div class="col-xs-12 col-md-12">
                  <div class="form-group input additionalinfo">
                    <label for="student_additionalinfo"
                      >Please share any other personal information that you
                      would like us to know.</label
                    >
                    <textarea
                      class="form-control"
                      id="student_additionalinfo"
                      name="student[additionalinfo]"
                      v-model="special_instruction"
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
                        <option value="34">
                          Case Manager/Probation Officer/DJJ
                        </option>
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

                <GcInputGroup
                  label="Name of person who referred you:"
                  type="text"
                  :id="referral_name"
                  name="referral_name"
                  @referral_nameChanged="referral_name = $event"
                />
                <div class="col-xs-12 col-md-12">
                  <div class="checkbox checkbox-success form-check-inline ml-1">
                    <input
                      type="checkbox"
                      name="student[can_redeem]"
                      id="student_can_redeem"
                      v-model="canRedeem"
                    />
                    <label for="student_can_redeem">Can Redeem</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card-box text-center">
            <input
              class="btn btn-success"
              type="submit"
              @click="createStudentContact"
            />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style>
@import url("https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css");
.sidebar {
  max-height: 350px !important;
}
</style>

<script>
import GcSideBar from "../../components/student-contact/GcSideBar";
import GcInputGroup from "../../components/student-contact/GcInputGroup";
import GcInputSelectGroup from "../../components/student-contact/GcInputSelectGroup";
import flatPickr from "vue-flatpickr-component";
import DatePicker from "v-calendar/lib/components/date-picker.umd";

import Api from "../../services/api/Api.js";

export default {
  data() {
    return {
      birthdateUTC: null,

      first_name: "",
      middle_name: "",
      last_name: "",
      street_address: "",
      city: "",
      state: "",
      zip_code: "",
      phone_1: "",
      phone_2: "",
      email: "",
      code_word: "",
      birthdate: "",
      last_school: "",
      district_id: "",
      has_issues: "",
      issue: "",
      allergies: "",
      special_instruction: "",
      referral_name: "",
      referral_code: "",
      emergency_contact_1_name: "",
      emergency_contact_1_phone_1: "",
      emergency_contact_1_phone_2: "",
      emergency_contact_1_email: "",
      emergency_contact_1_legal_guardian: "",
      emergency_contact_1_legal_guardian: "",
      emergency_contact_2_name: "",
      emergency_contact_2_phone_1: "",
      emergency_contact_2_phone_2: "",
      emergency_contact_2_email: "",
      emergency_contact_2_legal_guardian: "",
      emergency_contact_2_legal_guardian: "",
      parole_officer_name: "",
      parole_officer_phone: "",
      parole_officer_email: "",
      phase: {
        name: "",
        id: "",
      },
      status: {
        name: "",
        id: "",
      },
      district: {
        name: "",
        id: "",
      },
      site: {
        name: "",
        id: "",
      },
      has_device: {
        name: "",
        id: "",
      },
      has_wifi: {
        name: "",
        id: "",
      },
      gender: {
        name: "",
        id: "",
      },
      race: {
        name: "",
        id: "",
      },
      primary_language: {
        name: "",
        id: "",
      },
      marital_status: {
        name: "",
        id: "",
      },
      has_children: {
        name: "",
        id: "",
      },
      legal_status: {
        name: "",
        id: "",
      },
      living_situation: {
        name: "",
        id: "",
      },
      last_year_enrolled: {
        name: "",
        id: "",
      },
      last_grades_completed: {
        name: "",
        id: "",
      },
      cohort_year: {
        name: "",
        id: "",
      },
      phone_1_type: {
        name: "",
        id: "",
      },
      phone_2_type: {
        name: "",
        id: "",
      },
      emergency_contact_1_relationship: {
        name: "",
        id: "",
      },
      emergency_contact_2_relationship: {
        name: "",
        id: "",
      },
      hear_about_us: {
        name: "",
        id: "",
      },
      graduateCandidateAdvocate: {
        name: "",
        id: "",
      },
      contentCoach: {
        name: "",
        id: "",
      },
      lifeCoach: {
        name: "",
        id: "",
      },
      yesNoArray: ["Unknown", "Yes", "No"],
      contactRelationships: [
        "-- Choose An Option --",
        "Parent",
        "Sibling",
        "Other Relative",
        "Friend",
        "Spouse",
        "Other",
      ],
      states: [
        "-- No Answer --",
        "Alaska",
        "Alabama",
        "Arkansas",
        "American Samoa",
        "Arizona",
        "California",
        "Colorado",
        "Connecticut",
        "District of Columbia",
        "Delaware",
        "Florida",
        "Georgia",
        "Guam",
        "Hawaii",
        "Iowa",
        "Idaho",
        "Illinois",
        "Indiana",
        "Kansas",
        "Kentucky",
        "Louisiana",
        "Massachusetts",
        "Maryland",
        "Maine",
        "Michigan",
        "Minnesota",
        "Missouri",
        "Mississippi",
        "Montana",
        "North Carolina",
        "North Dakota",
        "Nebraska",
        "New Hampshire",
        "New Jersey",
        "New Mexico",
        "Nevada",
        "New York",
        "Ohio",
        "Oklahoma",
        "Oregon",
        "Pennsylvania",
        "Puerto Rico",
        "Rhode Island",
        "South Carolina",
        "South Dakota",
        "Tennessee",
        "Texas",
        "Utah",
        "Virginia",
        "Virgin Islands",
        "Vermont",
        "Washington",
        "Wisconsin",
        "West Virginia",
        "Wyoming",
      ],
      transportationMethods: [
        "--Select Transportation--",
        "Van/AA Shuttle",
        "Bus Pass",
        "None",
      ],
    };
  },
  async asyncData(context) {
    const api = new Api(context);
    const phases = await api.getPhases();
    const statuses = await api.getStatuses();
    const districts = await api.getDistricts();
    const sites = await api.getSites();
    const advocates = await api.getAdvocates();
    const cohortYears = await api.getCohortYears();
    const lastYearOptions = await api.getLastYears();
    const gradeLevels = await api.getGradeLevels();
    const phoneTypes = await api.getPhoneTypes();
    const maritalStatuses = await api.getMartialStatuses();
    const parentalStatuses = await api.getParentalStatuses();
    const legalStatuses = await api.getLegalStatuses();
    const livingSituations = await api.getLivingSituations();
    const contentCoaches = await api.getContentCoaches();
    const lifeCoaches = await api.getLifeCoaches();
    const races = await api.getRaces();
    const genders = await api.getGenders();
    const hasWifis = await api.getWifis();
    const hasDevices = await api.getDevices();

    return {
      phases,
      statuses,
      districts,
      sites,
      advocates,
      cohortYears,
      lastYearOptions,
      gradeLevels,
      phoneTypes,
      maritalStatuses,
      parentalStatuses,
      legalStatuses,
      livingSituations,
      contentCoaches,
      lifeCoaches,
      races,
      genders,
      hasWifis,
      hasDevices,
      api,
    };
  },
  methods: {
    createStudentContact: function () {
      const payload = {
        data: {
          type: "students",
          attributes: {
            first_name: this.first_name,
            middle_name: this.middle_name,
            last_name: this.last_name,
            street_address: this.street_address,
            city: this.city,
            state: this.state,
            zip_code: this.zip_code,
            phone_1: this.phone_1,
            phone_2: this.phone_2,
            email: this.email,
            code_word: this.code_word,
            birthdate: this.birthdate,
            last_school: this.last_school,
            district_id: this.district_id,
            has_issues: this.has_issues,
            issue: this.issue,
            allergies: this.allergies,
            special_instruction: this.special_instruction,
            referral_name: this.referral_name,
            referral_code: this.referral_code,
            emergency_contact_1_name: this.emergency_contact_1_name,
            emergency_contact_1_phone_1: this.emergency_contact_1_phone_1,
            emergency_contact_1_phone_2: this.emergency_contact_1_phone_2,
            emergency_contact_1_email: this.emergency_contact_1_email,
            emergency_contact_1_legal_guardian: this
              .emergency_contact_1_legal_guardian,
            emergency_contact_2_name: this.emergency_contact_2_name,
            emergency_contact_2_phone_1: this.emergency_contact_2_phone_1,
            emergency_contact_2_phone_2: this.emergency_contact_2_phone_2,
            emergency_contact_2_email: this.emergency_contact_2_email,
            emergency_contact_2_legal_guardian: this
              .emergency_contact_2_legal_guardian,
            parole_officer_name: this.parole_officer_name,
            parole_officer_phone: this.parole_officer_phone,
            parole_officer_email: this.parole_officer_email,
          },
        },
        relationships: {
          has_device: {
            data: { type: "has_device", id: this.has_device.id },
          },
          has_wifi: {
            data: { type: "has_wifi", id: this.has_wifi.id },
          },
          gender: {
            data: { type: "gender", id: this.gender.id },
          },
          race: {
            data: { type: "race", id: this.race.id },
          },
          primary_language: {
            data: { type: "primary_language", id: this.primary_language.id },
          },
          marital_status: {
            data: { type: "marital_status", id: this.marital_status.id },
          },
          has_children: {
            data: { type: "has_children", id: this.has_children.id },
          },
          legal_status: {
            data: { type: "legal_status", id: this.legal_status.id },
          },
          living_situation: {
            data: { type: "living_situation", id: this.living_situation.id },
          },
          last_year_enrolled: {
            data: {
              type: "last_year_enrolled",
              id: this.last_year_enrolled.id,
            },
          },
          last_grades_completed: {
            data: {
              type: "last_grades_completed",
              id: this.last_grades_completed.id,
            },
          },
          cohort_year: {
            data: { type: "cohort_year", id: this.cohort_year.id },
          },
          phone_1_type: {
            data: { type: "phone_1_type", id: this.phone_1_type.id },
          },
          phone_2_type: {
            data: { type: "phone_2_type", id: this.phone_2_type.id },
          },
          emergency_contact_1_relationship: {
            data: {
              type: "emergency_contact_1_relationship",
              id: this.emergency_contact_1_relationship.id,
            },
          },
          emergency_contact_2_relationship: {
            data: {
              type: "emergency_contact_2_relationship",
              id: this.emergency_contact_2_relationship.id,
            },
          },
          hear_about_us: {
            data: { type: "hear_about_us", id: this.hear_about_us.id },
          },
        },
      };
      this.api
        .createStudentContact(payload)
        .then((data) => {
          this.$router.push({
            path: "/student-contact",
          });
        })
        .catch((e) => {
          console.log(e);
        });
    },
    handleDatePicker($event) {
      if (this.birthdateUTC) {
        this.birthdate = this.birthdateUTC.toISOString().substring(0, 10);
        this.birthdate = this.birthdate.split("-");
        this.birthdate =
          this.birthdate[1] + "-" + this.birthdateUTC.getDate() + "-" + this.birthdate[0];

        console.log(this.birthdate);
      }
      this.v && this.v["birthdate"].$touch();
    },
  },
  mounted: function () {
    $("form").submit(false);
  },
  computed: {
    validateState() {
      if (this.v) {
        const { $dirty, $error } = this.v["birthdate"];
        return $dirty ? !$error : null;
      }
    },
    errorMessage() {
      if (!this.birthdateUTC) return "Date is required.";
      return "";
    },
  },
  components: {
    GcSideBar,
    GcInputGroup,
    GcInputSelectGroup,
    flatPickr,
    DatePicker,
  },
};
</script>
