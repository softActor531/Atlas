<template>
    <div class>
      <div class="row">
        <GcSideBar />
        <div class="col-md-10 col-xs-12">
          <div class="page-title-box">
            <div class="page-title-right">
              <nuxt-link class="btn btn-danger waves-effect waves-light" to="/gc">
                <span class="btn-label">
                  <i class="mdi mdi-cancel"></i>
                </span>
                Cancel
              </nuxt-link>
            </div>

            <h4 class="page-title">
              Editing:
              <mark>{{ name }}</mark>
            </h4>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="thinner-box card-box widget-inline">
                <div class="row">
                  <div class="col-sm-6 col-xl-1"></div>
                  <GcIconBox
                    label="Acceleration ID"
                    :value="accelerationId"
                    iconStyle="mdi mdi-account-key text-primary mdi-24px"
                  />
                  <GcIconBox
                    label="Location"
                    :value="location"
                    iconStyle="mdi mdi-map text-success mdi-24px"
                  />
                  <div class="col-sm-6 col-xl-2">
                    <div class="p-2 text-center">
                      <i
                        class="fas fa-spinner text-success mdi-24px text-warning"
                        style="font-size: 24px;margin-top:10px;"
                      ></i>
                      <p class="text-muted font-15 mb-0">Phase/Status</p>
                      <h5>
                        <span>{{ phaseOrStatus }}</span>
                      </h5>
                    </div>
                  </div>
                  <GcIconBox
                    label="GCA"
                    :value="gca"
                    iconStyle="mdi mdi-alert-circle text-info mdi-24px"
                  />
                  <GcIconBox
                    label="Tier"
                    :value="tier"
                    iconStyle="mdi mdi-certificate text-blue mdi-24px"
                  />
                </div>
              </div>
            </div>
          </div>
          <form>
            <div class="card">
              <div class="card-body">
                <p>
                  <code>*</code> Required
                </p>
                <div class="row">
                  <GcInputGroup
                    label="GC First Name"
                    type="text"
                    :id="firstName"
                    name="firstName"
                    @firstNameChanged="firstName = $event"
                  />
                  <GcInputGroup
                    label="GC Middle Initial"
                    type="text"
                    :id="middleName"
                    name="middleName"
                    @middleNameChanged="middleName = $event"
                  />
                  <GcInputGroup
                    label="GC Last Name"
                    type="text"
                    :id="lastName"
                    name="lastName"
                    @lastNameChanged="lastName = $event"
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
                  <GcInputSelectGroup
                    label="Phase"
                    label2="(Current: Enrolled)"
                    :em="true"
                    :id="phase"
                    name="phase"
                    :array="phases"
                    @phaseChanged="phase = $event"
                  />
                </div>

                <div class="row">
                  <GcInputSelectGroup
                    label="Status"
                    label2="(Current: Active)"
                    :em="true"
                    :id="status"
                    name="status"
                    :array="statuses"
                    @statusChanged="status = $event"
                  />
                  <GcInputGroup
                    label="District ID"
                    type="number"
                    :id="districtId"
                    name="districtId"
                    @districtIdChanged="districtId = $event"
                  />
                </div>
                <div class="row">
                  <div class="col-xs-12 col-md-6">
                    <div class="form-group input workflow_exception">
                      <label for="workflowException">Workflow Exception</label>
                      <select class="form-control" v-model="workflowException">
                        <option value="0">No</option>
                        <option value="1">Yes</option>
                      </select>
                      <span class="help-block">
                        (Removes G.C. from automated status changes until
                        turned off)
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
                      <span class="help-block">(5 MB limit - JPG, JPEG, PNG, &amp; GIF only)</span>
                      <img
                        class="profileImage"
                        src="../../assets/images/profile_image.png"
                        alt="Profile Image"
                        style="cursor:default;max-width: 150px"
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
                      :id="streetAddress"
                      name="streetAddress"
                      @streetAddressChanged="streetAddress = $event"
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
                      :id="zip"
                      name="zip"
                      @zipChanged="zip = $event"
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
                      :id="primaryPhone"
                      name="primaryPhone"
                      @primaryPhoneChanged="primaryPhone = $event"
                    />
                    <GcInputSelectGroup
                      label="GC Phone Type"
                      :array="phoneTypes"
                      :id="phoneType"
                      name="phoneType"
                      @phoneTypeChanged="phoneType = $event"
                    />
                    <GcInputGroup
                      label="Secondary Phone"
                      type="text"
                      :id="secondaryPhone"
                      name="secondaryPhone"
                      @secondaryPhoneChanged="secondaryPhone = $event"
                    />
                    <GcInputSelectGroup
                      label="Secondary Phone Type"
                      :array="phoneTypes"
                      :id="phoneType2"
                      name="phoneType2"
                      @phoneType2Changed="phoneType2 = $event"
                    />
                    <GcInputGroup label="Email" type="email" :id="email" name="email" />
                    <GcInputSelectGroup
                      label="Does the GC have WIFI?"
                      :array="yesNoArray"
                      :id="hasWifi"
                      name="hasWifi"
                      @hasWifiChanged="hasWifi = $event"
                    />
                    <GcInputSelectGroup
                      label="Does the GC have a device?"
                      :array="yesNoArray"
                      :id="hasDevice"
                      name="hasDevice"
                      @hasDeviceChanged="hasDevice = $event"
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
                      <label for="student_birthdate">Date of Birth</label>
                      <flat-pickr class="date-picker form-control flatpickr-input" v-model="date"></flat-pickr>
                    </div>
                  </div>
                  <GcInputSelectGroup
                    label="Gender"
                    :array="genders"
                    :id="gender"
                    name="gender"
                    @genderChanged="gender = $event"
                  />
                  <GcInputSelectGroup
                    label="Race"
                    :array="races"
                    :id="race"
                    name="race"
                    @raceChanged="race = $event"
                  />
                  <GcInputSelectGroup
                    label="primaryLanguage"
                    :array="languages"
                    :id="primaryLanguage"
                    name="primaryLanguage"
                    @primaryLanguageChanged="primaryLanguage = $event"
                  />
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-body">
                <h4 class="mb-3 header-title">AA LOCATION &amp; STAFF ASSIGNMENTS</h4>
                <div class="row">
                  <GcInputSelectGroup
                    label="District Partner"
                    label2="(Bethel)"
                    :em="true"
                    :array="districts"
                    :id="district"
                    name="district"
                    @districtChanged="district = $event"
                  />
                  <GcInputSelectGroup
                    label="Site"
                    label2="(Bethel)"
                    :em="true"
                    :array="sites"
                    :id="site"
                    name="site"
                    @siteChanged="site = $event"
                  />
                  <GcInputSelectGroup
                    label="Graduate Candidate Advocate"
                    :array="advocates"
                    :id="graduateCandidateAdvocate"
                    name="graduateCandidateAdvocate"
                    @graduateCandidateAdvocateChanged="graduateCandidateAdvocate = $event"
                  />
                  <GcInputSelectGroup
                    label="Content Coach"
                    :array="contentCoaches"
                    :id="contentCoach"
                    name="contentCoach"
                    @contentCoachChanged="contentCoach = $event"
                  />
                  <GcInputSelectGroup
                    label="Career Life Coach"
                    :array="lifeCoaches"
                    :id="lifeCoach"
                    name="lifeCoach"
                    @lifeCoachChanged="lifeCoach = $event"
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
                  <GcInputSelectGroup
                    label="Last year enrolled in school"
                    :array="lastYearOptions"
                    :id="lastYearEnrolled"
                    name="lastYearEnrolled"
                    @lastYearEnrolledChanged="lastYearEnrolled = $event"
                  />
                  <GcInputGroup
                    label="Last school attended"
                    type="text"
                    :id="lastSchoolAttended"
                    name="lastSchoolAttended"
                  />
                  <GcInputSelectGroup
                    label="Cohort Year"
                    :array="nextYearOptions"
                    :id="cohortYear"
                    name="cohortYear"
                    @cohortYearChanged="cohortYear = $event"
                  />
                  <GcInputSelectGroup
                    label="Last Grade Completed"
                    :array="grades"
                    :id="lastGradeCompleted"
                    name="lastGradeCompleted"
                    @lastGradeCompletedChanged="lastGradeCompleted = $event"
                  />
                  <div class="col-xs-12 col-md-6">
                    <div class="form-group input first_date">
                      <label for="student_first_date">First date enrolled in A.A.</label>
                      <flat-pickr
                        class="date-picker form-control flatpickr-input"
                        v-model="enrolledDate"
                      ></flat-pickr>
                    </div>
                  </div>
                  <GcInputGroup
                    label="Last school attended"
                    type="text"
                    :id="lastSchoolAttended"
                    name="lastSchoolAttended"
                    @lastSchoolAttendedChanged="lastSchoolAttended = $event"
                  />
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
                <h4 class="mb-3 header-title">CURRENT LIFE</h4>
                <div class="row">
                  <GcInputSelectGroup
                    label="Marital Status"
                    :array="maritalStatuses"
                    :id="maritalStatus"
                    name="maritalStatus"
                    @maritalStatusChanged="maritalStatus = $event"
                  />
                  <GcInputSelectGroup
                    label="Children"
                    :array="parentalStatuses"
                    :id="parentalStatus"
                    name="parentalStatus"
                    @parentalStatusChanged="parentalStatus = $event"
                  />
                  <GcInputSelectGroup
                    label="Legal Status"
                    :array="legalStatuses"
                    :id="legalStatus"
                    name="legalStatus"
                    @legalStatusChanged="legalStatus = $event"
                  />
                  <GcInputSelectGroup
                    label="Living Situation"
                    :array="livingSituations"
                    :id="livingSituation"
                    name="livingSituation"
                    @livingSituationChanged="livingSituation = $event"
                  />
                  <GcInputGroup
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
                <h4 class="mb-3 header-title">EMERGENCY CONTACT</h4>
                <div class="row">
                  <GcInputGroup
                    label="Emergency Contact Name"
                    type="text"
                    :id="emergencyContactName"
                    name="emergencyContactName"
                    @emergencyContactNameChanged="emergencyContactName = $event"
                  />
                  <GcInputSelectGroup
                    label="Emergency Contact Relationship"
                    :array="contactRelationships"
                    :id="emergencyContactRelationship"
                    name="emergencyContactRelationship"
                    @emergencyContactRelationshipChanged="emergencyContactRelationship = $event"
                  />
                  <GcInputGroup
                    label="Emergency Contact Email"
                    type="email"
                    :id="emergencyContactEmail"
                    name="emergencyContactEmail"
                    @emergencyContactEmailChanged="emergencyContactEmail = $event"
                  />
                  <GcInputGroup
                    label="Emergency Contact Phone (Home)"
                    type="text"
                    :id="emergencyContactPhone"
                    name="emergencyContactPhone"
                    @emergencyContactPhoneChanged="emergencyContactPhone = $event"
                  />
                  <GcInputGroup
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
                <h4 class="mb-3 header-title">MEDICAL INFORMATION</h4>
                <div class="row">
                  <GcInputSelectGroup
                    label="Do you have any medical issues or concerns?"
                    :array="yesNoArray2"
                    :id="medicalIssues"
                    name="medicalIssues"
                    @medicalIssuesChanged="medicalIssues = $event"
                  />
                  <div class="col-xs-12 col-md-12">
                    <div class="form-group input">
                      <p for="student_medical_ailments">Ailments</p>
                      <div class="checkbox checkbox-success form-check-inline ml-1">
                        <input
                          id="chck1"
                          type="checkbox"
                          v-model="medical1"
                          name="student[medical_ailments][]"
                        />
                        <label for="chck1">Asthma</label>
                      </div>
                      <div class="checkbox checkbox-success form-check-inline ml-1">
                        <input
                          id="chck2"
                          type="checkbox"
                          v-model="medical2"
                          name="student[medical_ailments][]"
                        />
                        <label for="chck2">Diabetes</label>
                      </div>
                      <div class="checkbox checkbox-success form-check-inline ml-1">
                        <input
                          id="chck3"
                          type="checkbox"
                          v-model="medical3"
                          name="student[medical_ailments][]"
                        />
                        <label for="chck3">Pregnancy</label>
                      </div>
                      <div class="checkbox checkbox-success form-check-inline ml-1">
                        <input
                          id="chck4"
                          type="checkbox"
                          v-model="medical4"
                          name="student[medical_ailments][]"
                        />
                        <label for="chck4">Epilepsy</label>
                      </div>
                      <div class="checkbox checkbox-success form-check-inline ml-1">
                        <input
                          id="chck5"
                          type="checkbox"
                          v-model="medical5"
                          name="student[medical_ailments][]"
                        />
                        <label for="chck5">Hemophilia</label>
                      </div>
                      <div class="checkbox checkbox-success form-check-inline ml-1">
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
                  <div class="col-xs-12 col-md-12">
                    <div class="form-group input additionalinfo">
                      <label
                        for="student_additionalinfo"
                      >Please share any other personal information that you would like us to know.</label>
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
                      <label
                        for="student_referred"
                        class="required"
                      >How did you find out about Acceleration Academies?</label>
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
                          <option value="34">Case Manager/Probation Officer/DJJ</option>
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
                    :id="refferedName"
                    name="refferedName"
                    @refferedNameChanged="refferedName = $event"
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
              <input class="btn btn-success" type="submit" @click="updateGc" />
            </div>
          </form>
        </div>
      </div>
  </div>
</template>

<style>
@import url("https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css");
</style>

<script>
import GcSideBar from "@/components/student-contact/GcSideBar";
import GcInputGroup from "@/components/student-contact/GcInputGroup";
import GcInputSelectGroup from "@/components/student-contact/GcInputSelectGroup";
import flatPickr from "vue-flatpickr-component";

import { getGcProfile2, updateGcProfile } from "@/services/api/Api";

export default {
  data() {
    return {
      phases: [
        "--Phase Options--",
        "Enrolled",
        "Recruitment",
        "Closed - Lost",
        "Registration",
        "Withdrawn",
        "Graduate",
        "Duplicate",
        "Enrolled - Orientation"
      ],
      statuses: [
        "--Status Options--",
        "Active",
        "Retention - Phase 1",
        "Retention - Phase 2",
        "Retention - Phase 3",
        "Retention - Phase 4",
        "Pending Withdrawal",
        "WA ONLY - HB 1418"
      ],
      states: [
        "-- Choose A State --",
        "AK",
        "AL",
        "AR",
        "AZ",
        "CA",
        "CO",
        "CT",
        "DC",
        "DE",
        "FL",
        "GA",
        "HI",
        "IA",
        "ID",
        "IL",
        "IN",
        "KS",
        "KY",
        "LA",
        "MA",
        "MD",
        "ME",
        "MI",
        "MN",
        "MO",
        "MS",
        "MT",
        "NC",
        "ND",
        "NE",
        "NH",
        "NJ",
        "NV",
        "NY",
        "OH",
        "OK",
        "OR",
        "PA",
        "RI",
        "SC",
        "SD",
        "TN",
        "TX",
        "UT",
        "VA",
        "VT",
        "WA",
        "WI",
        "WV",
        "WY"
      ],
      phoneTypes: [
        "-- No Answer --",
        "Mobile",
        "Home",
        "Work",
        "Friend/Family",
        "Unknown"
      ],
      yesNoArray: ["Unknown", "No", "Yes"],
      yesNoArray2: ["N/A", "No", "Yes"],
      genders: ["Male", "Female", "Non-Binary", "Non-Disclosed"],
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
      districts: [
        "-- Choose A District --",
        "Bethel",
        "Charleston",
        "Clark County",
        "Martin County",
        "Miami-Dade",
        "Sarasota",
        "St Lucie",
        "Test District"
      ],
      sites: [
        "-- Choose A Site --",
        "Bethel",
        "Fort Pierce",
        "Port St Lucie",
        "Test School",
        "Central",
        "Homestead",
        "Le Jeune",
        "North Miami Beach",
        "James Island",
        "North County",
        "Martin",
        "East Las Vegas",
        "North Las Vegas"
      ],
      advocates: [
        "Jeanne Courtney",
        "Kiaira Taylor",
        "Maria Serrano",
        "Heather Allen",
        "Jose Flores",
        "Frank Cruz",
        "Erick Velis",
        "Angela Clark Gilmore",
        "Emerald Jamison",
        "Stephanie Santiago",
        "Charles Messinger",
        "Jessica Johnson",
        "Nadiuski Sambrana",
        "Registration GC Unassigned",
        "Timothy Hanson",
        "Amanda Allen",
        "Erik Huey",
        "Carolina Rodriguez",
        "Danielle Timmons",
        "Matthew Baide",
        "Thomas Niemitalo",
        "Terri Gomez"
      ],
      contentCoaches: [
        "--Select a CC--",
        "Amine Brown",
        "Kevin Torres",
        "Dave Caso",
        "Maria Fernandez",
        "Orlando Ashah",
        "Gabriel Wasserman",
        "Jacques Voltaire",
        "Cory Allen",
        "Helen Botelho",
        "Kevin O'Hara",
        "Elizabeth Koutny",
        "Shana Finkelston",
        "Charles Henry",
        "Amanda Matherne",
        "Yenisen Hidalgo",
        "Stephanie Simmons",
        "Faalua Ioane",
        "Luis Moreno",
        "Kris Skrutvold",
        "Jason Graser",
        "Amanda Knatz",
        "Cindi Wessels",
        "Alison Hansen",
        "Lakia Arceneaux",
        "Elesea Page",
        "Ashley Griffiths"
      ],
      lifeCoaches: [
        "--Select a CLC--",
        "Linda Butler",
        "Phyllis Hart",
        "Aida Briceno",
        "Indira Mardis",
        "Jennifer Hyppolite",
        "Grace Vasquez",
        "Natalie Bishop"
      ],
      transportationMethods: [
        "--Select Transportation--",
        "Van/AA Shuttle",
        "Bus Pass",
        "None"
      ],
      lastYearOptions: [
        "-- Choose A Year --",
        "2020",
        "2019",
        "2018",
        "2017",
        "2016",
        "2015",
        "2014",
        "2013",
        "2012",
        "2011",
        "2010"
      ],
      nextYearOptions: [
        "-- Choose A Year --",
        "2020",
        "2021",
        "2022",
        "2023",
        "2024",
        "2025",
        "2026",
        "2027",
        "2028",
        "2029",
        "2030"
      ],
      grades: [
        "-- Select Grade Level --",
        "Not Sure",
        "8th Grade",
        "9th Grade",
        "10th Grade",
        "11th Grade",
        "12th Grade"
      ],
      maritalStatuses: [
        "-- Choose A Marital Status --",
        "Married",
        "Single",
        "Other",
        "Not Disclosed"
      ],
      parentalStatuses: [
        "-- Choose Parental Status --",
        "Parent",
        "Expecting Parent",
        "None",
        "Other",
        "Not Disclosed"
      ],
      legalStatuses: [
        "-- Choose A Legal Status --",
        "On Probation",
        "Parent Incarcerated",
        "Recently or Currently Incarcerated",
        "None",
        "Other",
        "Not Disclosed"
      ],
      livingSituations: [
        "-- Choose A Living Situation --",
        "Living with Parent/Legal Guardian",
        "Living with Other Family/Friend",
        "Living Independently",
        "Temporary Housing",
        "Homeless",
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
      ],
      workflowException: 1
    };
  },
  asyncData(context) {
    return getGcProfile2()
      .then(data => {
        return data;
      })
      .catch(e => {
        context.error(new Error());
      });
  },
  methods: {
    updateGc: function() {
      updateGcProfile()
        .then(data => {
          this.$router.push({
            path: "/gc"
          });
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted: function() {
    $("form").submit(false);
  },
  components: {
    GcSideBar,
    GcInputGroup,
    GcInputSelectGroup,
    flatPickr
  }
};
</script>
