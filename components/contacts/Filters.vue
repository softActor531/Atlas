<template>
  <div class="card">
    <div class="card-body">
      <h2>Filter Contacts</h2>
      <div class="row">
        <InputGroup label="First Name" type="text" width="4" id="firstName" />
        <InputGroup label="Last Name" type="text" width="4" id="lastName" />
        <InputGroup label="Academy Id" type="text" width="4" id="academyId" />
        <InputSelectGroup
          label="Phase"
          :array="phases.map(element => element.name)"
          width="4"
          id="phase"
          v-model="phase.name"
        />
        <InputSelectGroup
          label="Status"
          :array="phases.find(element => element.name == phase.name).statuses"
          width="4"
          id="selectedStatus"
        />

        <InputSelectGroup
          label="District"
          :array="districts"
          width="4"
          id="district"
        />
        <InputSelectGroup label="Site" :array="sites" width="4" id="site" />
        <InputGroup label="District Id" type="text" width="4" id="districtId" />
        <DatePicker label="Created Date (From)" width="4" id="createdFrom" />
        <DatePicker label="Created Date (To)" width="4" id="createdTo" />
        <InputSelectGroup
          label="Outreach Resource Advocate"
          :array="advocates"
          width="4"
          id="outreachResourceAdvocate"
        />
        <InputSelectGroup
          label="Community Outreach Advocate"
          :array="communityAdvocates"
          width="4"
          id="communityOutreachAdvocates"
        />

        <div class="col-xs-12 col-md-12">
          <h4 class="mb-3 header-title">Exclude</h4>
        </div>
        <CheckboxGroup width="4" label="Bad Address" :id="badAddress" />
        <CheckboxGroup width="4" label="Bad Phone" :id="badPhone" />
        <CheckboxGroup width="4" label="None" :id="none" />

        <div class="col-md-12">
          <div class="float-right">
            <button
              type="button"
              class="btn btn-primary waves-effect waves-light mb-2"
            >
              Filter
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InputGroup from "../UI/InputGroup";
import InputSelectGroup from "../UI/InputSelectGroup";
import DatePicker from "../UI/DatePicker";
import CheckboxGroup from "../UI/CheckboxGroup";

import {
  getPhases,
  getDistricts,
  getAdvocates,
  getOutreachAdvocates
} from "../../Api";

export default {
  name: "ContactsForm",
  data() {
    return {
      phase: {
        name: "--Choose Phase--"
      }
    };
  },
  components: {
    InputGroup,
    InputSelectGroup,
    DatePicker,
    CheckboxGroup
  }
};
</script>

<style scoped>
h2 {
  font-size: 15px !important;
  margin-bottom: 20px !important;
}
</style>
