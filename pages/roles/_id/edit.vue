<template>
  <div class>
    <h1>{{ name }} Role</h1>
    <br />
    <b-button class="mb-3" pill variant="secondary" @click="$router.back()">
      <span class="btn-label">
        <i class="fa fa-arrow-left" />
      </span>
      Go back
    </b-button>
    <br />
    <div class="card">
      <div class="card-body">
        <div class="form-group col-xs-12 col-md-4 mb-3">
          <label for="scheduled-date" class="required bolder">
            Role Name:
            <code>*</code>
          </label>
          <input v-model="name" class="form-control" type="text" name="name" />
        </div>

        <PermissionsGroup
          :key="index"
          :elementId="index"
          v-for="(group, index) of this.groups"
          :checkbox-label="group.group"
          :userPreSelected="group.choices"
          :options="group.items.map(element => element.name)"
          @checked-new="processChoices"
        />
        <br />
        <br />
        <br />
        <br />
        <b-form-group label="User Types:">
          <b-form-checkbox-group
            v-model="userTypes.choices"
            :options="userTypes.items.map(element => element.name)"
            name="flavour-2a"
            stacked
          />
        </b-form-group>
        <br />
        <br />
        <b-form-group label="User Scope:">
          <b-form-radio v-model="selectedScope" name="local-team" value="1"
            >Local Team</b-form-radio
          >
          <b-form-radio v-model="selectedScope" name="corporate-team" value="2"
            >Corporate Team</b-form-radio
          >
        </b-form-group>
        <br />
        <br />
        <div class="form-group col-xs-12 col-md-12 mb-3 clear">
          <input
            class="btn btn-primary waves-effect waves-light save_btn"
            type="submit"
            value="Save"
            name="submit"
            @click="updateRole"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import PermissionsGroup from "../../../components/shared/PermissionsGroup.vue";

import Api from "../../../services/api/Api";

export default {
  components: { PermissionsGroup },
  async asyncData(context) {
    const api = new Api(context);
    const permissions = await api.getPermissions();
    const role = await api.getRolePermissions(context.params.id);

    return {
      permissions,
      name: role.name,
      userPermissions: role.permissions,
      api
    };
  },
  mounted() {
    if (!this.$store.state.permissions.includes("Edit Role")) {
      this.$router.push("/unauthorized");
    }
    for (let permission of this.permissions) {
      const permissionGroups = this.groups.map(element => element.group);
      if (!permissionGroups.includes(permission.group)) {
        if (permission.group !== "User (Staff) Accounts") {
          this.groups.push({ group: permission.group, items: [], choices: [] });
        } else {
          this.userTypes = { group: permission.group, items: [], choices: [] };
        }
      }
      if (permission.group == "User (Staff) Accounts") {
        this.userTypes.items.push(permission);
      }
      for (let group of this.groups) {
        if (permission.group == group.group) {
          group.items.push(permission);
          break;
        }
      }
    }

    for (let permission of this.userPermissions) {
      if (permission.group === "User (Staff) Accounts") {
        this.userTypes.choices.push(permission.name);
      }
      for (let group of this.groups) {
        if (permission.group === group.group) {
          group.choices.push(permission.name);
          break;
        }
      }
    }
    console.log(this.groups);
    console.log(this.userTypes);
  },
  data() {
    return {
      name: "",
      groups: [],
      userTypes: { group: "", items: [], choices: [] }
    };
  },
  methods: {
    processChoices(x) {
      console.log("parent captured payload: ", event);
      for (let group of this.groups) {
        if (group.group === event.group) {
          group.choices = event.data;
          break;
        }
      }
      console.log(this.groups);
    },
    async updateRole() {
      let chosen = [];
      for (let group of this.groups) {
        chosen = chosen.concat(group.choices);
      }
      chosen = chosen.concat(this.userTypes.choices);

      let chosen_ids = [];

      for (let choice of chosen) {
        for (let permission of this.permissions) {
          if (choice === permission.name) {
            chosen_ids.push(permission.id);
            break;
          }
        }
      }

      const dataArray = chosen_ids.map(element => {
        return { type: "permissions", id: element };
      });

      const payload = {
        type: "roles",
        id: this.$route.params.id,
        attributes: { name: this.name },
        relationships: {
          permissions: {
            data: dataArray
          }
        }
      };

      this.api
        .updateRole(this.$route.params.id, payload)
        .then(data => {
          console.log(data);
          Swal.fire(
            "Request successful!",
            `Updated role (${this.name})!`,
            "success"
          );
          this.$router.push("/");
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
};
</script>
