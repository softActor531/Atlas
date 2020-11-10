<template>
  <nav class="sidebar col-xs-12 col-sm-12 col-md-3">
    <ul class="list-unstyled menu-elements">
      <div class="sub-menu">
        <li>
          <nuxt-link to="javascript:void;" class="link-item">Acceleratoin Academy</nuxt-link>
        </li>
        <ul class="nav-second-level ml-2" aria-expanded="false">
          <li>
            <nuxt-link
              to="https://dev.accelerationacademy.net/appointments/categories"
              class="link-item"
            >Appointment Types</nuxt-link>
          </li>
          <li>
            <nuxt-link
              to="https://dev.accelerationacademy.net/closures/academy"
              class="link-item"
            >Academy closures</nuxt-link>
          </li>
        </ul>
      </div>
      <div class="sub-menu">
        <li>
          <nuxt-link to="javascript:void;" class="link-item">Location</nuxt-link>
        </li>
        <ul class="nav-second-level ml-2" aria-expanded="false">
          <li>
            <nuxt-link
              to="https://dev.accelerationacademy.net/schools/capacity"
              class="link-item"
            >Site Capacity</nuxt-link>
          </li>
          <li>
            <nuxt-link
              to="https://dev.accelerationacademy.net/appointments/site/onsite-hours"
              class="link-item"
            >Site Hours</nuxt-link>
          </li>
          <li>
            <nuxt-link
              to="https://dev.accelerationacademy.net/appointments/staff-schedule"
              class="link-item"
            >Staff Schedule</nuxt-link>
          </li>
        </ul>
      </div>
      <div class="sub-menu">
        <li>
          <nuxt-link to="javascript:void;" class="link-item">User</nuxt-link>
        </li>
        <ul class="nav-second-level ml-2" aria-expanded="false">
          <li style="list-style:none;">
            <nuxt-link
              to="/logs/user-schedule-archive/"
              class="link-item"
            >View My Schedule</nuxt-link>
          </li>
          <li style="list-style:none;">
            <nuxt-link
              to="/logs/gc-schedule-archive/"
              class="link-item"
            >View My Schedule GCs</nuxt-link>
          </li>
        </ul>
      </div>
    </ul>
  </nav>
</template>


<style>
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