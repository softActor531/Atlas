<template>
  <div>
    <div class="card">
      <div class="card-body">
        <h2>* Required.</h2>
        <div class="row">
          <InputGroup :id="firstName" width="4" :important="true" label="GC First Name" type="text" />
          <InputGroup :id="middleName" width="4" :important="true" label="GC Middle Name" type="text" />
          <InputGroup :id="lastName" width="4" :important="true" label="GC last Name" type="text" />
          <InputSelectGroup :id="district" width="6" :important="true" label="District " type="text" />
          <InputSelectGroup :id="site" width="6" :important="true" label="Site  " type="text" />
          <InputGroup :id="districtID" width="6" :important="true" label="District ID" type="text" />
          <InputGroup :id="academyName" width="6" :important="true" label="Academy ID" type="text" />
          <InputSelectGroup :id="site" width="4" :important="true" label="Phase" type="text" />
          <InputSelectGroup :id="site" width="4" :important="true" label="Status" type="text" />
          <InputSelectGroup :id="site" width="4" :important="true" label="Priority" type="text" />
          <InputSelectGroup :id="opinion" width="6" :important="true" label="How did you find out about Acceleration Academies?" type="text" />
          <InputGroup :id="namePerson" width="6" :important="true" label="Name of person who referred you:" type="text" />
          <InputGroup :id="foundUS" width="6" :important="true" label="If Other, please input how you found out about us." type="text" />
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <h3>CONTACT INFORMATION</h3>
        <div class="row">
          <InputGroup id="address1" width="6" :important="true" label="Street Address Line 1 " type="text" />
          <InputGroup id="address2" width="6" :important="true" label="Street Address Line 2" type="text" />
          <InputGroup id="city" width="6" :important="true" label="Street Address Line 2" type="text" />
          <InputSelectGroup id="opinion" width="6" :important="true" label="State  " type="text" />
          <InputGroup id="country" width="6" :important="true" label="Country" type="country" />
          <InputGroup id="zipCode" width="6" :important="true" label="Zip Code" type="text" />
          <div class="form-group col-xs-12 col-md-6 mb-3">
            <label for="phone1" class="required">Phone 1 <code>*</code></label>
            <div class="float-right">
              <div class="custom-control custom-checkbox">
                <input id="invalid_phone2" class="custom-control-input" type="checkbox" value="2" name="invalid_phone2">
                <label class="custom-control-label" for="invalid_phone2">Bad Phone</label>
              </div>
            </div>
            <div class="input-group">
              <input
                id="phone2"
                class="form-control"
                type="text"
                value=""
                name="phone2"
                maxlength="15"
                required=""
              >
              <div class="input-group-append">
                <button id="btn-phone2" class="btn btn-primary waves-effect waves-light" type="button">
                  <i class="fa fa-phone" />
                </button>
              </div>
            </div>
          </div>
          <div class="form-group col-xs-12 col-md-6 mb-3">
            <label for="phone1" class="required">Phone 1 <code>*</code></label>
            <div class="float-right">
              <div class="custom-control custom-checkbox">
                <input id="invalid_phone1" class="custom-control-input" type="checkbox" value="1" name="invalid_phone1">
                <label class="custom-control-label" for="invalid_phone1">Bad Phone</label>
              </div>
            </div>
            <div class="input-group">
              <input
                id="phone1"
                class="form-control"
                type="text"
                value=""
                name="phone1"
                maxlength="15"
                required=""
              >
              <div class="input-group-append">
                <button id="btn-phone1" class="btn btn-primary waves-effect waves-light" type="button">
                  <i class="fa fa-phone" />
                </button>
              </div>
            </div>
          </div>
          <InputGroup :id="email" width="6" :important="true" label="Email" type="text" />
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <h4>EEOC INFORMATION</h4>
        <div class="form-group col-md-6">
          <label for="birth-date" class="col-form-label">Birth Date</label>
          <input id="birth-date" class="form-control" type="date" name="date">
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <h4>PAST SCHOOL INFO</h4>
        <div class="row">
          <div class="form-group col-md-4">
            <label for="cohort-year">Cohort Year</label>
            <select id="cohort-year" class="form-control custom-select" name="cohort_year">
              <option v-for="year in years" :key="year.id" :value="year">
                {{ year }}
              </option>
            </select>
          </div>
          <div class="form-group col-md-4">
            <label for="student_grade_level" class="required"> Grade Level <code>*</code></label>
            <select id="student_grade_level" class="form-control">
              <option value="">
                Grade Level
              </option>
              <option value="Not Sure">
                Not Sure
              </option>
              <option value="8th Grade">
                8th Grade
              </option>
              <option value="9th Grade">
                9th Grade
              </option>
              <option value="10th Grade">
                10th Grade
              </option>
              <option value="11th Grade">
                11th Grade
              </option>
              <option value="12th Grade">
                12th Grade
              </option>
            </select>
          </div>
          <InputGroup :id="attendSchool" width="4" :important="true" label="Past School Attended" type="text" />
          <InputGroup :id="withdrawlCode" width="6" :important="true" label="Withdrawl Code" type="text" />
          <InputGroup :id="withdrawlDate" width="6" :important="true" label="Withdrawl Date" type="text" />
          <InputSelectGroup :id="communityAdvocate" width="6" :important="true" label="Community Outreach Advocate" type="text" />
          <InputSelectGroup :id="resourceAdvocate" width="6" :important="true" label="Outreach Resource Advocate" type="text" />
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <h4>ADDITIONAL INFO</h4>
        <div class="form-group">
          <label>Textarea</label>
          <textarea rows="7" required="" class="form-control" />
        </div>
        <button type="submit" class="btn btn-primary waves-effect waves-light">
          Submit
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import InputGroup from '../UI/InputGroup'
import InputSelectGroup from '../UI/InputSelectGroup'
export default {
  name: 'Form',
  components: {
    InputGroup,
    InputSelectGroup
  }
}
</script>
