<template>
  <UserCreateEdit
    :district-checkboxes="districts"
    :timezones="timezones"
    :roles-options="roles"
    :profile="profile"
    :new-entry="$route.params.id === 'new' ? true : false"
    :user-id="$route.params.id"
  />
</template>

<script>
import UserCreateEdit from "@/components/admin/UserCreateEdit.vue";

export default {
  components: {
    UserCreateEdit
  },
  async asyncData({ $axios, params }) {
    try {
      const roles = await $axios.$get(
        "http://atlas-rebuild-api.mtcdevsite.com/api/v1/roles"
      );
      const districts = await $axios.$get(
        "http://atlas-rebuild-api.mtcdevsite.com/api/v1/districts"
      );
      const timezones = await $axios.$get(
        "http://atlas-rebuild-api.mtcdevsite.com/api/v1/timezones"
      );
      // const user = await $axios.$get(`http://atlas-rebuild-api.mtcdevsite.com/api/v1/users/${params.id}`)

      return {
        roles: roles.data,
        districts: districts.data,
        timezones: timezones.data
        // user: user.data
      };
    } catch (error) {
      console.log(error);
    }
  },
  data: () => ({
    profile: {}
  }),
  mounted() {
    // if (this.user && this.roles && this.timezones && this.districts) {
    //   const user = this.user
    //   const roles = this.roles
    //   const targetRoles = roles.filter(role => role.id === user.id)
    //   if (targetRoles.length) {
    //     user.attributes.role = targetRoles[0].attributes.name
    //   }
    //   this.profile = user.attributes
    //   console.log(user)
    // }
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
</style>
