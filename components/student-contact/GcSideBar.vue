<template>
  <nav class="sidebar col-xs-12 col-sm-12 col-md-2">
    <ul class="list-unstyled menu-elements">
      <li class>
        <nuxt-link class="link-item" :to="`/student-record/${id}`">
          <i class="mdi mdi-speedometer"></i>
          Dashboard
        </nuxt-link>
      </li>
      <li class="active">
        <nuxt-link class="link-item" :to="`/student-contact/${id}`">
          <i class="far fa-user"></i> Profile
        </nuxt-link>
      </li>
      <li class>
        <nuxt-link class="link-item" :to="`/plp/student/${id}`">
          <i class="mdi mdi-school"></i> Academics
        </nuxt-link>
      </li>
      <li class>
        <nuxt-link class="link-item" :to="`/student-attendance/${id}`">
          <i class="fas fa-user-clock"></i> Engagement
        </nuxt-link>
      </li>
      <li class>
        <nuxt-link
          class="link-item"
          :to="`/logs/st-notifications-archive/${id}`"
        >
          <i class="mdi mdi-notification-clear-all"></i> Navigator (Mobile)
        </nuxt-link>
      </li>
      <li class>
        <nuxt-link class="link-item" to="#">
          <i class="far fa-file-alt"></i> Documents &amp; Files
        </nuxt-link>
      </li>
      <li class>
        <nuxt-link class="link-item" :to="`/students/profile-updates/${id}`">
          <i class="far fa-file-alt"></i> Profile &amp; Updates
        </nuxt-link>
      </li>

      <li class>
        <nuxt-link class="link-item" to="#">
          <i class="far fa-file-alt"></i> Case Management Notes
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.sidebar {
  background-color: white;
  margin-top: 1.7rem;
  cursor: pointer;
  font-size: 16px;
}

.menu-elements li {
  padding: 8px;
}

.menu-elements .link-item:link,
.menu-elements .link-item:visited {
  color: #3f3f4e;
}

.menu-elements li:hover {
  background-color: #0a5495;
}

.menu-elements li:hover .link-item {
  color: white;
}
</style>

<script>
export default {
  props: {
    id: Number
  }
};
</script>
