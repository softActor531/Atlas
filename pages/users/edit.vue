<template>
  <div class="container-fluid">
    <div class>
      <div class="row">
        <div class="col-12">
          <div class="page-title-box">
            <h4 class="page-title">Creating New User</h4>
          </div>
        </div>
      </div>
      <nuxt-link
        to="/users"
        class="btn btn-secondary btn-rounded waves-effect waves-light goBack"
      >
        <span class="btn-label">
          <i class="mdi mdi-keyboard-backspace"></i> </span
        >Back to Users
      </nuxt-link>

      <form
        method="post"
        action
        autocomplete="off"
        enctype="multipart/form-data"
      >
        <fieldset>
          <legend>User Info</legend>

          <InputGroup
            width="6"
            label="Email"
            type="email"
            placeholder="user@domain.com"
            :id="email"
            @emailChanged="email = $event"
          />
          <InputGroup
            width="6"
            label="Title"
            type="text"
            placeholder="User Title"
            :id="title"
            @emailChanged="title = $event"
          />
          <InputGroup
            width="6"
            label="First Name"
            type="text"
            placeholder="John"
            :id="firstName"
            @emailChanged="firstName = $event"
          />

          <InputGroup
            width="6"
            label="Last Name"
            type="text"
            placeholder="Doe"
            :id="lastName"
            @emailChanged="lastName = $event"
          />

          <InputSelectGroup
            width="6"
            label="Timezone"
            :id="timezone"
            :array="timezones"
            @emailChanged="timezone = $event"
          />

          <InputSelectGroup
            width="6"
            label="User Role"
            :id="userRole"
            :array="roles"
            @emailChanged="userRole = $event"
          />
          <InputSelectGroup
            width="6"
            label="Active"
            :id="active"
            :array="activeOptions"
            @emailChanged="active = $event"
          />
          <div class="form-group col-md-6 profile_image">
            <label for="profile_image">Profile Image</label>
            <input
              class="form-control"
              type="file"
              name="user[profile_image]"
              accept=".jpg, .jpeg, .png, .gif"
            />
            <img
              class="profileImage"
              src="https://dev.accelerationacademy.net/images/placeholder.jpg"
              alt="Profile Image"
            />
          </div>

          <div class="form-group col-md-6">
            <label class="display-4">District</label>
            <div class="custom-control custom-checkbox">
              <input
                class="custom-control-input"
                type="checkbox"
                value="0"
                id="district_0"
                name="user[district_id][]"
              />
              <label class="custom-control-label" for="district_0"
                >All Districts</label
              >
            </div>
            <br />
            <div class="custom-control custom-checkbox">
              <input
                class="custom-control-input"
                type="checkbox"
                name="user[district_id][]"
                id="district_1"
                v-model="district1"
              />
              <label class="custom-control-label" for="district_1"
                >Bethel</label
              >
            </div>
            <br />
            <div class="custom-control custom-checkbox">
              <input
                class="custom-control-input"
                type="checkbox"
                name="user[district_id][]"
                id="district_9"
                v-model="district2"
              />
              <label class="custom-control-label" for="district_9"
                >Charleston</label
              >
            </div>
            <br />
            <div class="custom-control custom-checkbox">
              <input
                class="custom-control-input"
                type="checkbox"
                name="user[district_id][]"
                id="district_12"
                v-model="district3"
              />
              <label class="custom-control-label" for="district_12"
                >Clark County</label
              >
            </div>
            <br />
            <div class="custom-control custom-checkbox">
              <input
                class="custom-control-input"
                type="checkbox"
                name="user[district_id][]"
                id="district_2"
                disabled
                v-model="district4"
              />
              <label class="custom-control-label" for="district_2"
                >Federal Way</label
              >
            </div>
            <br />
            <div class="custom-control custom-checkbox">
              <input
                class="custom-control-input"
                type="checkbox"
                name="user[district_id][]"
                id="district_11"
                v-model="district5"
              />
              <label class="custom-control-label" for="district_11"
                >Martin County</label
              >
            </div>
            <br />
            <div class="custom-control custom-checkbox">
              <input
                class="custom-control-input"
                type="checkbox"
                name="user[district_id][]"
                id="district_8"
                v-model="district6"
              />
              <label class="custom-control-label" for="district_8"
                >Miami-Dade</label
              >
            </div>
            <br />
            <div class="custom-control custom-checkbox">
              <input
                class="custom-control-input"
                type="checkbox"
                name="user[district_id][]"
                id="district_3"
                disabled
                v-model="district7"
              />
              <label class="custom-control-label" for="district_3"
                >Palm Beach</label
              >
            </div>
            <br />
            <div class="custom-control custom-checkbox">
              <input
                class="custom-control-input"
                type="checkbox"
                name="user[district_id][]"
                id="district_6"
                disabled
                v-model="district8"
              />
              <label class="custom-control-label" for="district_6"
                >Polk County</label
              >
            </div>
            <br />
            <div class="custom-control custom-checkbox">
              <input
                class="custom-control-input"
                type="checkbox"
                name="user[district_id][]"
                id="district_10"
                v-model="district9"
              />
              <label class="custom-control-label" for="district_10"
                >Sarasota</label
              >
            </div>
            <br />
            <div class="custom-control custom-checkbox">
              <input
                class="custom-control-input"
                type="checkbox"
                name="user[district_id][]"
                id="district_4"
                v-model="district10"
              />
              <label class="custom-control-label" for="district_4"
                >St Lucie</label
              >
            </div>
            <br />
            <div class="custom-control custom-checkbox">
              <input
                class="custom-control-input"
                type="checkbox"
                name="user[district_id][]"
                id="district_7"
                v-model="district11"
              />
              <label class="custom-control-label" for="district_7"
                >Test District</label
              >
            </div>
            <br />
            <div class="custom-control custom-checkbox">
              <input
                class="custom-control-input"
                type="checkbox"
                name="user[district_id][]"
                id="district_5"
                disabled
                v-model="district12"
              />
              <label class="custom-control-label" for="district_5"
                >Wake County</label
              >
            </div>
            <br />
          </div>
          <div class="form-group col-md-12">
            <input
              type="submit"
              class="btn btn-primary btn-rounded waves-effect waves-light"
              name="save"
              value="Save User Info"
              @click="updateUser"
            />
          </div>
        </fieldset>
      </form>
    </div>
  </div>
</template>

<style type="text/css">
.form-group {
  float: left;
}
.checkbox-padding {
  padding-top: 47px;
}
</style>

<script>
import InputGroup from "@/components/UI/InputGroup";
import InputSelectGroup from "@/components/UI/InputSelectGroup";
import { getUserInfo, updateUserInfo } from "@/services/api/Api";

export default {
  data() {
    return {
      timezones: [
        "Alaska",
        "Central",
        "Eastern",
        "Hawaii",
        "Hawaii (No DST)",
        "Mountain",
        "Mountain (No DST)",
        "Pacific"
      ],
      roles: [
        "SuperAdmin",
        "Attendance Scanner",
        "Local Staff",
        "Site Leadership",
        "Network Staff",
        "Network Admin",
        "Certificated Staff",
        "Staff Schedule Test Role"
      ],
      activeOptions: ["Active", "Inactive"]
    };
  },
  asyncData(context) {
    return getUserInfo(context.params.id)
      .then(data => {
        return data;
      })
      .catch(e => {
        context.error(new Error());
      });
  },
  methods: {
    updateUser: function() {
      updateUserInfo(this.$route.params.id, {})
        .then(data => {
          this.$router.push({
            path: "/users"
          });
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted: function() {
    if (!this.$store.state.permissions.includes("Create New User")) {
      this.$router.push("/unauthorized");
    }
    $("form").submit(false);
  },
  components: {
    InputGroup,
    InputSelectGroup
  }
};
</script>
