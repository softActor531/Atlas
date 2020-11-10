<template>
  <div class="topbar-menu">
    <div class="container-fluid">
      <div id="navigation">
        <ul class="navigation-menu">
          <NavbarLink>
            <i class="fe-airplay" /> Atlas (SIS)
            <template v-slot:submenu>
              <NavbarLink v-if="modules.includes('dashboard')" to="/dashboard"
                >Dashboard</NavbarLink
              >
              <NavbarLink to="/site-attendance">Site Attendance</NavbarLink>
              <!-- <NavbarLink to="/schedule" v-if="modules.includes('scheduling')">Schedule</NavbarLink> -->
              <NavbarLink to="/student-setup">Add New GC</NavbarLink>
              <NavbarLink v-if="modules.includes('reports')" to="/reports"
                >Reports</NavbarLink
              >
              <NavbarLink
                v-if="modules.includes('scheduling')"
                to="/logs/user-schedule-archive"
                >Schedules</NavbarLink
              >
              <NavbarLink>
                Admin
                <template v-slot:submenu>
                  <NavbarLink
                    v-if="
                      permissions.includes('View Print IDs (Batch + Staff)')
                    "
                    to="/print-ids"
                    >Print IDs</NavbarLink
                  >
                  <NavbarLink
                    v-if="permissions.includes('View Status Change History')"
                    to="/admin-workflow-history"
                    >Status Change History</NavbarLink
                  >
                  <NavbarLink
                    v-if="permissions.includes('Scanner')"
                    to="/scanner"
                    >Scanner</NavbarLink
                  >
                  <NavbarLink
                    v-if="
                      permissions.includes('Edit PLP Master Plans') &&
                        modules.includes('plp')
                    "
                    to="/plp"
                    >PLP Plans</NavbarLink
                  >
                  <NavbarLink
                    v-if="permissions.includes('Edit GC Attendance')"
                    to="/logs/events-archive"
                    >Attendance Log</NavbarLink
                  >
                </template>
              </NavbarLink>
            </template>
          </NavbarLink>

          <NavbarLink>
            <i class="fe-users" /> Compass (Recruitment)
            <template v-slot:submenu>
              <NavbarLink
                v-if="permissions.includes('View Contacts')"
                to="/contacts"
                >Contacts</NavbarLink
              >
              <NavbarLink
                v-if="permissions.includes('Import Contacts')"
                to="/contacts"
                >Import Contacts</NavbarLink
              >
              <NavbarLink
                v-if="
                  permissions.includes('View Standard Reports') &&
                    modules.includes('reports')
                "
                to="/rp-tool/reports"
                >Reports</NavbarLink
              >
              <NavbarLink
                v-if="permissions.includes('View Contacts Map')"
                to="contacts/map"
                >Contacts Map</NavbarLink
              >
            </template>
          </NavbarLink>

          <NavbarLink>
            <i class /> Navigator (GC Mobile)
            <template v-slot:submenu>
              <NavbarLink
                v-if="
                  permissions.includes('Edit Challenges') &&
                    modules.includes('navigator_mobile')
                "
                to="/badges"
                >Challenges</NavbarLink
              >
              <NavbarLink to="/admin-settings">App Settings</NavbarLink>
              <NavbarLink v-if="permissions.includes('Edit Notifications')">
                Notifications
                <template v-slot:submenu>
                  <NavbarLink to="/logs/notifications-archive/"
                    >Notifications Log</NavbarLink
                  >
                </template>
              </NavbarLink>
            </template>
          </NavbarLink>

          <NavbarLink>
            <i class="fe-settings" /> Admin
            <template v-slot:submenu>
              <NavbarLink to="/admin-users">Users</NavbarLink>
              <NavbarLink>
                Site Settings
                <template v-slot:submenu>
                  <NavbarLink to="/districts">District Partners</NavbarLink>
                  <NavbarLink
                    v-if="permissions.includes('View Referral Options')"
                    to="/admin-option-referral"
                    >Referral Options</NavbarLink
                  >
                  <NavbarLink
                    v-if="
                      permissions.includes('Edit GC Notes') &&
                        modules.includes('case_management_notes')
                    "
                    to="/admin-option-note-category"
                    >Note Categories</NavbarLink
                  >
                </template>
              </NavbarLink>
              <NavbarLink>
                System Admin
                <template v-slot:submenu>
                  <NavbarLink to="/logs/admin-email-log">Email Log</NavbarLink>
                  <NavbarLink to="/student/duplicate"
                    >Archived Duplicates</NavbarLink
                  >
                  <NavbarLink
                    v-if="
                      permissions.includes('View Notes Category') &&
                        modules.includes('case_management_notes')
                    "
                    to="/admin-option-note-category"
                    >Note Categories</NavbarLink
                  >
                </template>
              </NavbarLink>
              <NavbarLink>
                GC Notes
                <template v-slot:submenu>
                  <NavbarLink
                    v-if="
                      permissions.includes('Bulk Notes Upload') &&
                        modules.includes('case_management_notes')
                    "
                    to="/bulk-note-upload"
                    >Bulk Note Upload</NavbarLink
                  >
                  <NavbarLink
                    v-if="
                      permissions.includes('View GC Documents') &&
                        modules.includes('document_storage')
                    "
                    to="/documents-and-student-notes"
                    >Document and Student Notes</NavbarLink
                  >
                </template>
              </NavbarLink>
              <NavbarLink to="/appointment-categories">
                Appointment Categories System Admin
                <template v-slot:submenu>
                  <NavbarLink to="/logs/admin-email-log">Email log</NavbarLink>
                  <NavbarLink to="/roles">User Roles</NavbarLink>
                </template>
              </NavbarLink>
              <NavbarLink
                v-if="
                  permissions.includes('View Documents Template') &&
                    modules.includes('document_storage')
                "
                to="/documents/template"
                >Document template</NavbarLink
              >
            </template>
          </NavbarLink>
          <NavbarLink v-if="$store.state.user" to="/tenants">
            Tenant Settings
            <template v-slot:submenu>
              <NavbarLink to="#"
                >Impersonating: {{ $store.state.user }}</NavbarLink
              >
              <NavbarLink to="#" @click.native="logout">Logout</NavbarLink>
            </template>
          </NavbarLink>
        </ul>
        <div class="clearfix" />
      </div>
    </div>
  </div>
</template>

<script>
import NavbarLink from "./navbar-link";

export default {
  components: { NavbarLink },
  data() {
    return {
      permissions: this.$store.state.permissions,
      modules: this.$store.state.modules,
      user: this.$store.state.user
    };
  },
  mounted() {
    console.log(this.$store.state);
  },
  methods: {
    logout() {
      this.$store.dispatch("superLogout");
      console.log(this.$store.state);
      this.$router.push("/tenants");
    }
  }
};
</script>
