<template>
  <div class="navbar-custom">
    <div class="container-fluid">
      <ul class="list-unstyled topnav-menu float-right mb-0">
        <li class="dropdown notification-list">
          <a class="navbar-toggle nav-link">
            <div class="lines">
              <span />
              <span />
              <span />
            </div>
          </a>
        </li>

        <li class="d-none d-sm-block">
          <Search />
        </li>
        <li class="dropdown notification-list">
          <b-nav-item-dropdown id="my-nav-dropdown" toggle-class="nav-link-custom" right>
            <template v-slot:button-content>
              <b-avatar badge badge-variant="success" src="https://placekitten.com/300/300" />
            </template>
            <b-dropdown-item @click="$router.push('/user/profile')">
              <span class="btn-label">
                <i class="fas fa-user-alt" />
              </span>
              My profile settings
            </b-dropdown-item>
            <b-dropdown-divider />
            <b-dropdown-item @click.native="logout">
              <span class="btn-label">
                <i class="fas fa-sign-out-alt" />
              </span>
              Logout
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Topbar",
  methods: {
    logout() {
      this.$store.dispatch("logout");
      console.log(this.$store.state);
      this.$router.push("/");
    }
  }
};
</script>
