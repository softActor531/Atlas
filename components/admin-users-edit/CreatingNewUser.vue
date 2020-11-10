<template>
  <div>
    <h1>Creating New User</h1>
    <nuxt-link to="/" class="btn btn-secondary btn-rounded waves-effect waves-light goBack">
      <span class="btn-label"><i class="mdi mdi-keyboard-backspace" /></span>Back to Users
    </nuxt-link>
    <div class="row">
      <InputGroup :id="Email" width="6" :important="true" label="Email" type="text" />
      <InputGroup :id="Title" width="6" :important="true" label="Title" type="text" />
      <InputGroup :id="firstName" width="6" :important="true" label="First Name" type="text" />
      <InputGroup :id="lastName" width="6" :important="true" label="Last Name" type="text" />
      <div class="form-group col-md-6">
        <label>Timezone</label>
        <select class="form-control" name="group_id">
          <option v-for="option in Timezoneoptions" :key="option.id">
            {{ option }}
          </option>
        </select>
      </div>
      <div class="form-group col-md-6">
        <label>User Role</label>
        <select class="form-control" name="group_id">
          <option v-for="option in UserRole" :key="option.id">
            {{ option }}
          </option>
        </select>
      </div>
      <div class="form-group col-md-6">
        <label>Active</label>
        <select class="form-control" name="active" aria-invalid="false">
          <option value="1" selected="">
            Active
          </option>
          <option value="0">
            Disabled
          </option>
        </select>
      </div>
      <div class="form-group col-md-6">
        <label for="Profile Image">Profile Image</label>
        <InputImage />
      </div>
    </div>
    <div>
      <h3>Districts</h3>
      <div class="custom-control custom-checkbox">
        <input id="district.id" type="checkbox" class="custom-control-input">
        <label v-for="(label,key) in labels" :value="key" for="district.id" class="custom-control-label">{{ label }} </label>
      </div>
    </div>
  </div>
</template>

<script>
import InputGroup from '../../components/UI/InputGroup'
import InputImage from '../../components/UI/InputImage'
export default {
  name: 'CreatingNewUser',
  components: {
    InputGroup,
    InputImage
  },
  data () {
    return {
      Timezoneoptions: [
        'Alaske',
        'Central',
        'Eastern',
        'Hawaii',
        'Hawaii (No DST)',
        'Mountain',
        'Mountain (No DST)',
        'Pacific'
      ],
      UserRole: [' --Select Role --',
        'Super Admin',
        'Attendance Scanner ',
        'Local Staff ',
        'Site Leadership',
        'Network Staff',
        'Network Admin',
        'Certificated Staff', 'Staff Schedule Test Role'
      ],
      labels: [
        'All Districts',
        'Bethel',
        'Charleston',
        'Clark County',
        'Federal Way',
        'Martin County',
        'Miami-Dade',
        'Palm Beach',
        'Polk County',
        'Sarasota',
        'St Lucie',
        'Test District',
        'Wake County'
      ]
    }
  }
}
</script>

<style>
.custom-control label{
  display: block;
  margin-bottom: 20px;
}
</style>
