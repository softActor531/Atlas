<template>
  <div class>
    <div class="row">
      <GcSideBar />
      <div class="col-md-10 col-xs-12">
        <div class="page-title-box">
          <div class="page-title-right">
            <nuxt-link
              class="btn btn-success waves-effect waves-light"
              to="/gc/edit"
            >
              <span class="btn-label">
                <i class="mdi mdi-account-edit"></i>
              </span>
              Edit GC
            </nuxt-link>
          </div>
          <h4 class="page-title">Graduation Candidate | GC Record</h4>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="thinner-box card-box widget-inline">
              <div class="row">
                <div class="col-sm-6 col-xl-1"></div>
                <GcIconBox
                  label="Acceleration ID"
                  value="12499"
                  iconStyle="mdi mdi-account-key text-primary mdi-24px"
                />
                <GcIconBox
                  label="Location"
                  value="Bethel / Bethel"
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
                      <span>Enrolled / Active</span>
                    </h5>
                  </div>
                </div>
                <GcIconBox
                  label="GCA"
                  value="Registration GC Unassigned"
                  iconStyle="mdi mdi-alert-circle text-info mdi-24px"
                />
                <GcIconBox
                  label="Tier"
                  value="N/A"
                  iconStyle="mdi mdi-certificate text-blue mdi-24px"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="card-box">
          <h4 class="mb-3 header-title">Contact Info</h4>
          <div class="row">
            <div class="col-xs-12 col-md-6">
              <div class="text-left mt-3">
                <GcInfo label="Name" :id="name" />
                <GcInfo label="Phone 1" :id="phone1" />
                <GcInfo label="Phone 2" :id="phone2" />
                <GcInfo label="Has WIFI?" :id="hasWifi" />
                <GcInfo label="Has a device?" :id="hasDevice" />
              </div>
            </div>
            <div class="col-xs-12 offset-md-2 col-md-4">
              <div class="text-left mt-3">
                <GcInfo label="Code Word" :id="codeWord" />
                <GcInfo label="Email" :id="email" />
                <GcInfo label="Address" :id="address" />
                <GcInfo label="County" :id="county" />
              </div>
            </div>
          </div>
        </div>
        <div class="card-box">
          <h4 class="mb-3 header-title">Demographics</h4>
          <div class="row">
            <div class="col-xs-12 col-md-6">
              <div class="text-left mt-3">
                <GcInfo label="Age" :id="age" />
                <GcInfo label="Date of Birth" :id="dateOfBirth" />
                <GcInfo label="Gender" :id="gender" />
                <GcInfo label="Race" :id="race" />
                <GcInfo label="Primary Language" :id="primaryLanguage" />
              </div>
            </div>
            <div class="col-xs-12 offset-md-2 col-md-4">
              <div class="text-left mt-3">
                <GcInfo label="Marital Status" :id="maritalStatus" />
                <GcInfo label="Children" :id="children" />
                <GcInfo label="Legal Status" :id="legalStatus" />
                <GcInfo label="Living Situation" :id="livingSituation" />
                <GcInfo label="Parole Officer" :id="paroleOfficer" />
              </div>
            </div>
          </div>
        </div>
        <div class="card-box">
          <h4 class="mb-3 header-title">Medical</h4>
          <div class="row">
            <div class="col-xs-12 col-md-12">
              <div class="text-left mt-3">
                <GcInfo label="Issues/Concerns" :id="medicalIssues" />
              </div>
            </div>
          </div>
        </div>
        <div class="card-box">
          <h4 class="mb-3 header-title">Academy Info</h4>
          <div class="row">
            <div class="col-xs-12 col-md-6">
              <div class="text-left mt-3">
                <GcInfo
                  label="Graduate Candidate Advocate"
                  :id="graduateCandidateAdvocate"
                />
                <GcInfo label="Content Coach" :id="contentCoach" />
                <GcInfo label="Career Life Coach" :id="careerLifeCoach" />
                <GcInfo label="Date Enrolled" :id="dateEnrolled" />
              </div>
            </div>
            <div class="col-xs-12 offset-md-2 col-md-4">
              <div class="text-left mt-3">
                <GcInfo label="Special Program" :id="specialProgram" />
                <GcInfo label="Transportation" :id="transportation" />
              </div>
            </div>
          </div>
        </div>
        <div class="card-box">
          <h4 class="mb-3 header-title">Past School Info</h4>
          <div class="row">
            <div class="col-xs-12 col-md-6">
              <div class="text-left mt-3">
                <GcInfo label="Cohort Year" :id="cohortYear" />
                <GcInfo label="Last Year Enrolled" :id="lastYearEnrolled" />
                <GcInfo label="Last School Attended" :id="lastSchoolAttended" />
              </div>
            </div>
            <div class="col-xs-12 offset-md-2 col-md-4">
              <div class="text-left mt-3">
                <GcInfo label="Last Grade Completed" :id="lastGradeCompleted" />
                <GcInfo label="District ID" :id="districtId" />
              </div>
            </div>
          </div>
        </div>
        <div class="card-box">
          <h4 class="mb-3 header-title">Other Contacts</h4>
          <div class="row">
            <div class="col-xs-12 col-md-6">
              <div class="text-left mt-3">
                <GcInfo
                  label="Emergency Contact Name ID"
                  :id="emergencyContactNameId"
                />
                <GcInfo label="Emergency Contact 1" :id="emergencyContact1" />
                <GcInfo label="Emergency Contact 2" :id="emergencyContact2" />
              </div>
            </div>
            <div class="col-xs-12 offset-md-2 col-md-4">
              <div class="text-left mt-3">
                <GcInfo label="Legal Guardian" :id="legalGuardian" />
                <GcInfo label="Parole Officer" :id="paroleOfficer" />
              </div>
            </div>
          </div>
        </div>

        <div class="card-box">
          <div class="card-header bg-white">
            <div class="float-left">
              <h4 class="mb-3 header-title">GC Schedule</h4>
            </div>
            <div class="float-right">
              <a
                href="https://dev.accelerationacademy.net/appointments/gc-schedule/12499"
                class="btn btn-blue waves-effect waves-light"
              >
                <i class="mdi mdi-plus-box-outline"></i> New GC Schedule
              </a>
            </div>
          </div>
          <div class="card-body" style="clear: both">
            <div
              id="DataTables_Table_0_wrapper"
              class="dataTables_wrapper dt-bootstrap4 no-footer"
            >
              <div class="row">
                <div class="col-sm-12">
                  <table
                    class="table table-sm clickable zebra closures dataTable no-footer"
                    style="width: 100%;"
                    id="DataTables_Table_0"
                    role="grid"
                    aria-describedby="DataTables_Table_0_info"
                  >
                    <thead>
                      <tr role="row">
                        <th
                          class="header dt-center sorting_asc"
                          tabindex="0"
                          aria-controls="DataTables_Table_0"
                          rowspan="1"
                          colspan="1"
                          style="width: 150px;"
                          aria-sort="ascending"
                          aria-label="Date: activate to sort column descending"
                        >
                          Date
                        </th>
                        <th
                          class="header dt-center sorting"
                          tabindex="0"
                          aria-controls="DataTables_Table_0"
                          rowspan="1"
                          colspan="1"
                          style="width: 186px;"
                          aria-label="From Time: activate to sort column ascending"
                        >
                          From Time
                        </th>
                        <th
                          class="header dt-center sorting"
                          tabindex="0"
                          aria-controls="DataTables_Table_0"
                          rowspan="1"
                          colspan="1"
                          style="width: 145px;"
                          aria-label="To Time: activate to sort column ascending"
                        >
                          To Time
                        </th>
                        <th
                          class="header dt-center sorting"
                          tabindex="0"
                          aria-controls="DataTables_Table_0"
                          rowspan="1"
                          colspan="1"
                          style="width: 142px;"
                          aria-label="Reason: activate to sort column ascending"
                        >
                          Reason
                        </th>
                        <th
                          class="header dt-center sorting"
                          tabindex="0"
                          aria-controls="DataTables_Table_0"
                          rowspan="1"
                          colspan="1"
                          style="width: 128px;"
                          aria-label="Action: activate to sort column ascending"
                        >
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <TableRow
                        :key="row.id"
                        v-for="row in Rows"
                        :name="row.name"
                        :id="row.id"
                        :even="true"
                      />
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@import url("https://cdn.datatables.net/responsive/2.1.1/css/dataTables.responsive.css");
@import url("https://cdn.datatables.net/1.10.21/css/jquery.dataTables.min.css");
@import url("https://cdn.datatables.net/1.10.21/css/dataTables.bootstrap4.min.css");

.thinner-box {
  padding: 0 !important;
}
</style>

<script>
import GcSideBar from "@/components/student-contact/GcSideBar";
import GcIconBox from "@/components/student-contact/GcIconBox";
import GcInfo from "@/components/student-contact/GcInfo";
import TableRow from "@/components/UI/TableRow";
import { getGcProfile } from "@/services/api/Api";

export default {
  data() {
    return {
      Rows: []
    };
  },
  asyncData(context) {
    return getGcProfile()
      .then(data => {
        return data;
      })
      .catch(e => {
        context.error(new Error());
      });
  },
  components: {
    GcSideBar,
    GcIconBox,
    GcInfo,
    TableRow
  },

  mounted() {
    let script = document.createElement("script");
    script.setAttribute(
      "src",
      "https://cdn.datatables.net/1.10.21/js/jquery.dataTables.min.js"
    );
    document.head.appendChild(script);

    let script2 = document.createElement("script");
    script2.setAttribute(
      "src",
      "https://cdn.datatables.net/1.10.21/js/dataTables.bootstrap4.min.js"
    );
    document.head.appendChild(script2);

    let script3 = document.createElement("script");
    script3.setAttribute(
      "src",
      "https://cdn.datatables.net/responsive/2.1.0/js/dataTables.responsive.js"
    );
    document.head.appendChild(script3);

    $(document).ready(function() {
      $("#DataTables_Table_0").DataTable({
        responsive: true
      });
    });
  }
};
</script>
