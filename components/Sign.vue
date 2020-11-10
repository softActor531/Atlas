/* eslint-disable vue/no-unused-vars */
<template>
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
              />
              <InputGroup
                width="4"
                :important="false"
                label="GC Middle Name"
                :id="middleName"
                type="text"
              />
              <InputGroup
                width="4"
                :important="true"
                label="GC Last Name"
                :id="lastName"
                type="text"
              />
            </div>
            <div class="form-row">
              <InputGroup
                width="4"
                :important="false"
                label="Email"
                :id="email"
                placeholder="Email"
                type="email"
              />
              <InputGroup
                width="4"
                :important="false"
                label="Password"
                :id="password"
                placeholder="Password"
                type="password"
              />
              <InputGroup
                width="4"
                :important="false"
                label="Birth Date"
                :id="birthDate"
                type="date"
              />
            </div>
            <div class="form-row">
              <InputGroup width="6" :important="false" label="County" :id="county" type="text" />
              <InputGroup width="6" :important="false" label="City" :id="city" type="text" />
            </div>
            <div class="form-row">
              <InputSelectGroup
                width="6"
                :important="false"
                label="State"
                :id="selectedState"
                :array="states"
              />
              <InputGroup width="2" :important="false" label="Zip" :id="zip" type="text" />
            </div>
          </form>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h2>CONTACT INFORMATION</h2>
          <form>
            <InputGroup
              :important="true"
              label="Street Address Line 1"
              :id="streetAddressLine1"
              type="text"
              placeholder="1234 Main St"
            />
            <InputGroup
              :important="false"
              label="Street Address Line 2"
              :id="streetAddressLine2"
              type="text"
              placeholder="Apartment, studio, or floor"
            />
            <div class="form-row">
              <InputGroup
                width="6"
                :important="true"
                label="Street Address Line 2"
                :id="phoneNumber1"
                type="text"
              />
              <InputSelectGroup
                width="6"
                :important="false"
                label="State"
                :id="selectedState"
                :array="states"
              />

              <div class="form-group col-md-6 phone_type">
                <label for="phoneType1" class="required">
                  GC Phone Type
                  <code>*</code>
                </label>
                <select
                  id="phoneType1"
                  v-model="phoneType1"
                  class="form-control"
                  name="student[phone_type]"
                  required
                >
                  <option v-for="phone in phones" :key="phone" :value="phone">
                    {{ phone }}
                  </option>
                </select>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="phoneNumber2">GC Phone Number 2</label>
                <input id="phoneNumber2" type="text" class="form-control" v-model="phoneNumber2" />
              </div>
              <div class="form-group col-md-6 phone_type">
                <label for="phoneType2" class="required">
                  GC Phone Type
                  <code>*</code>
                </label>
                <select
                  id="phoneType2"
                  v-model="phoneType2"
                  class="form-control"
                  name="student[phone_type]"
                  required
                >
                  <option v-for="phone in phones" :key="phone" :value="phone">
                    {{ phone }}
                  </option>
                </select>
              </div>
            </div>

            <div class="form-row">
              <div class="form-group col-xs-12 col-md-4 mb-3 phase">
                <label for="phase" class="required">
                  Phase
                  <code>*</code>
                </label>
                <select
                  id="phase"
                  v-model="selectedPhase"
                  class="form-control custom-select valid"
                  name="phase"
                  onchange="getStatusesForContact(this.value);"
                  required
                  aria-invalid="false"
                >
                  <option v-for="phase in phases" :key="phase" :value="phase">
                    {{ phase }}
                  </option>
                </select>
              </div>
              <div class="form-group col-md-4 mb-3 student_stage">
                <label for="status" class="required">
                  Status
                  <code>*</code>
                </label>
                <!-- I removed the id value cause it was adding some css making the element smaller, it was status -->
                <select
                  id
                  v-model="selectedStatus"
                  class="form-control custom-select valid"
                  name="status"
                  required
                  aria-invalid="false"
                >
                  <option v-for="status in statuses" :key="status" :value="status">
                    {{ status }}
                  </option>
                </select>
              </div>
              <div class="form-group col-md-4 student_id">
                <label for="studentId">Student ID</label>
                <input
                  id="studentId"
                  v-model="studentId"
                  class="form-control"
                  type="number"
                  min="000000000000"
                  max="999999999999"
                  name="student[student_id]"
                  placeholder="Student ID"
                >
              </div>
              <div class="form-group col-md-4 grade_level">
                <label for="gradeLevel" class="required">
                  Grade Level
                  <code>*</code>
                </label>
                <select
                  id="gradeLevel"
                  v-model="selectedGradeLevel"
                  class="form-control"
                  name="student[grade_level]"
                  required
                >
                  <option
                    v-for="gradeLevel in gradeLevels"
                    :key="gradeLevel"
                    :value="gradeLevel"
                  >{{ gradeLevel }}</option>
                </select>
              </div>
              <div class="form-group col-md-4 student_stage">
                <label for="priority" class="required">
                  Priority
                  <code>*</code>
                </label>
                <select
                  id="priority"
                  v-model="selectedPriority"
                  class="form-control custom-select valid"
                  name="priority"
                  required
                  aria-invalid="false"
                >
                  <option value="0">
                    Low
                  </option>
                  <option value="1">
                    Normal
                  </option>
                  <option value="2">
                    High
                  </option>
                </select>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h2>PAST SCHOOL INFO</h2>
          <div class="form-row">
            <div class="form-group col-md-4">
              <label for="cohortYear">Cohort Year</label>
              <select
                id="cohortYear"
                class="form-control custom-select"
                name="cohort_year"
                v-model="cohorotYear"
              >
                <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
              </select>
            </div>

            <div class="form-group col-md-4">
              <label for="pastGradeLevel">Grade Level</label>
              <select
                id="pastGradeLevel"
                class="form-control custom-select"
                name="past_grade_level"
                v-model="pastGradeLevel"
              >
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
            </div>

            <div class="form-group col-md-4">
              <label for="pastSchool">Past School Attended</label>
              <input
                id="pastSchool"
                class="form-control"
                type="text"
                value
                name="past_school"
                v-model="pastSchool"
              />
            </div>
          </div>

          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="withdrawalCode">Withdrawal Code</label>
              <input
                id="withdrawalCode"
                v-model="withdrawalCode"
                class="form-control"
                type="text"
                value
                name="withdrawal_code"
              >
            </div>

            <div class="form-group col-md-6">
              <label for="withdrawalDate">Withdrawal Date</label>
              <input
                id="withdrawalDate"
                type="date"
                name="date"
                class="form-control"
                v-model="withdrawalDate"
              />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="communityOutreachAdvocate">Community Outreach Advocate</label>
              <select
                id="communityOutreachAdvocate"
                v-model="communityOutreachAdvocate"
                class="form-control custom-select"
                name="community_outreach_advocate"
              >
                <option
                  v-for="advocate in advocates"
                  :key="advocate"
                  :value="advocate"
                >
                  {{ advocate }}
                </option>
              </select>
            </div>

            <div class="form-group col-md-6">
              <label for="outreachResourceAdvocate">Outreach Resource Advocate</label>
              <select
                id="outreachResourceAdvocate"
                v-model="outreachResourceAdvocate"
                class="form-control custom-select"
                name="outreach_advocate"
              >
                <option value="-1">
                  -- Choose User --
                </option>
                <option value="1299">
                  Rosemary Anguiano
                </option>
                <option value="1363">
                  Jesse Corona
                </option>
                <option value="1462">
                  Ruby Agustin
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h4 class="mb-3 header-title">
            ADDITIONAL INFO
          </h4>
          <div class="row">
            <div class="form-group col-12 mb-3 additionalinfo">
              <div class="form-group mb-3">
                <label for="notes">Notes</label>
                <textarea id="notes" class="form-control" rows="5" v-model="notes" />
              </div>
            </div>
            <div class="mentions width-100" />
            <div class="form-group col-xs-12 col-md-12 mb-3">
              <input
                class="btn btn-primary waves-effect waves-light"
                type="submit"
                value="Save"
                name="submit"
                @click="submit"
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import School from '../models/School'
import InputGroup from './UI/InputGroup.vue'
import InputSelectGroup from './UI/InputSelectGroup.vue'

export default {
  name: 'Sign',
  components: {
    InputGroup,
    InputSelectGroup
  },
  data () {
    return {
      firstName: "",
      middleName: "",
      lastName: "",
      email: "",
      password: "",
      birthDate: "",
      county: "",
      city: "",
      selectedState: "-- No Answer --",
      zip: "",
      streetAddressLine1: "",
      streetAddressLine2: "",
      phoneNumber1: "",
      phoneNumber2: "",
      phoneType1: "-- No Answer --",
      phoneType2: "-- No Answer --",
      selectedPhase: "-- Choose Phase --",
      selectedStatus: "--Status Options--",
      studentId: "",
      selectedGradeLevel: "Grade Level",
      selectedPriority: "0",
      cohorotYear: new Date().getFullYear(),
      pastGradeLevel: "9",
      pastSchool: "",
      withdrawalCode: "",
      withdrawalDate: "",
      communityOutreachAdvocate: "-- Choose User --",
      outreachResourceAdvocate: "-1",
      notes: "",

      states: [
        '-- No Answer --',
        'Alaska',
        'Alabama',
        'Arkansas',
        'American Samoa',
        'Arizona',
        'California',
        'Colorado',
        'Connecticut',
        'District of Columbia',
        'Delaware',
        'Florida',
        'Georgia',
        'Guam',
        'Hawaii',
        'Iowa',
        'Idaho',
        'Illinois',
        'Indiana',
        'Kansas',
        'Kentucky',
        'Louisiana',
        'Massachusetts',
        'Maryland',
        'Maine',
        'Michigan',
        'Minnesota',
        'Missouri',
        'Mississippi',
        'Montana',
        'North Carolina',
        'North Dakota',
        'Nebraska',
        'New Hampshire',
        'New Jersey',
        'New Mexico',
        'Nevada',
        'New York',
        'Ohio',
        'Oklahoma',
        'Oregon',
        'Pennsylvania',
        'Puerto Rico',
        'Rhode Island',
        'South Carolina',
        'South Dakota',
        'Tennessee',
        'Texas',
        'Utah',
        'Virginia',
        'Virgin Islands',
        'Vermont',
        'Washington',
        'Wisconsin',
        'West Virginia',
        'Wyoming'
      ],
      phases: [
        "-- Choose Phase --",
        "Recruitment",
        "Closed - Lost",
        "Registration",
        "Enrolled",
        "Enrolled - Orientation",
        "Graduate",
        "Withdrawn",
        "Duplicate"
      ],
      statuses: [
        "--Status Options--",
        "College Student",
        "Employed",
        "Trade School",
        "Military",
        "Unknown",
        "Other"
      ],
      gradeLevels: [
        'Grade Level',
        'Not Sure',
        '8th Grade',
        '9th Grade',
        '10th Grade',
        '11th Grade',
        '12th Grade'
      ],
      advocates: [
        '-- Choose User --',
        'Chip Smith',
        'David Sundstrom',
        'Gin Hooks',
        'Mark Graves',
        'Margie Sharp'
      ],
      phones: [
        '-- No Answer --',
        'Mobile ',
        'Home',
        'Work',
        'Friend/Family',
        'Unknown'
      ],
      years: [
        '2014',
        '2015',
        '2016',
        '2017',
        '2018',
        '2019',
        '2020',
        '2021',
        '2022',
        '2023',
        '2024',
        '2025',
        '2026'
      ]
    }
  },
  created () {
    const school = new School('Name')
    const json = school.toJson()
    console.log(json)
    console.log(school.fromJson(json))
  },
  methods: {
    submit: function() {
      console.log(this.outreachResourceAdvocate);
    }
  },
  components: {
    InputGroup,
    InputSelectGroup
  },
  created() {
    var school = new School("Name");
    var json = school.toJson();
    console.log(json);
    console.log(school.fromJson(json));
  }
}
</script>

<style scoped>
</style>
