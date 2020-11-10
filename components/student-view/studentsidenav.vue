<template>
  <nav>
    <ul class="nav-second-level ml-2 list-unstyled" aria-expanded="false">
      <li>
        <nuxt-link :to="`/student-record/${studentId}`">
          <i class="mdi mdi-speedometer" />
          Dashboard
        </nuxt-link>
      </li>
      <li>
        <nuxt-link :to="`/student-contact/${studentId}`">
          <i class="far fa-user" />
          Profile
        </nuxt-link>
      </li>
      <li>
        <nuxt-link :to="`/plp/student/${studentId}`">
          <i class="mdi mdi-school" />
          Academics
        </nuxt-link>
      </li>
      <li>
        <nuxt-link :to="`/student-attendance/${studentId}`">
          <i class="fas fa-user-clock" />
          Engagment
        </nuxt-link>
      </li>
      <li>
        <nuxt-link :to="`/logs/st-notifications-archive/${studentId}`">
          <i class="mdi mdi-notification-clear-all" />
          Navigator (Mobile)
        </nuxt-link>
      </li>
      <li>
        <nuxt-link :to="`/student-notes/${studentId}`">
          <i class="far fa-file-alt" />
          Documents & Files
        </nuxt-link>
      </li>
      <li>
        <nuxt-link :to="`/students/profile-updates/${studentId}`">
          <i class="far fa-file-alt" />
          Profile & Updates
        </nuxt-link>
      </li>
      <li>
        <nuxt-link :to="`/student-notes-files-edit/${studentId}`">
          <i class="far fa-file-alt" />
          Case Management Notes
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "StudentSideNav",
  props: {
    studentId: {
      type: String,
      default: null
    }
  }
};
</script>

<style lang="scss" scoped>
nav {
  width: 100%;
  padding: 20px 15px;
  background: #fff;
  border: solid 0.5px #dadada;
  text-align: left;

  li {
    list-style: none;
    margin-bottom: 5px;
  }

  a,
  .submenu {
    display: block;
    padding: 10px 20px;
    border: 0;
    color: #8a8989;
    font-size: 15px;

    &:hover {
      outline: 0;
      background: #0a5495;
      color: #fff;
    }
  }

  .nuxt-link-active {
    background: #5ba4f5;
    color: #eee;
  }
}
</style>
