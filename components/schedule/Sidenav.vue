<template>
  <nav>
    <!-- <ul class="list-unstyled menu-elements"> -->
    <li class="sub-menu">
      <a href="#">
        Acceleration Academy
      </a>
      <ul class="nav-second-level ml-2" aria-expanded="false">
        <li>
          <nuxt-link to="/appointment-categories">
            Appointment Categories
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/academy-closures">
            Academy Closures
          </nuxt-link>
        </li>
      </ul>
    </li>
    <li class="sub-menu">
      <a href="#">
        Location
      </a>
      <ul class="nav-second-level ml-2" aria-expanded="false">
        <li>
          <nuxt-link to="/site-capacity">
            Site Capacity
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/site-hours">
            Site Hours
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/staff-schedules">
            Staff Schedule
          </nuxt-link>
        </li>
      </ul>
    </li>
    <li class="sub-menu">
      <a href="#">
        User
      </a>
      <ul class="nav-second-level ml-2" aria-expanded="false">
        <li>
          <nuxt-link to="/logs/user-schedule-archive">
            View My Schedule
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/logs/gc-schedule-archive">
            View My Scheduled GCs
          </nuxt-link>
        </li>
      </ul>
    </li>
    <!-- </ul> -->
  </nav>
</template>

<script>
export default {
  name: 'Sidenav'
}
</script>

<style lang="scss">
nav {
  width: 100%;
  padding: 15px 15px 50px;
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
}
</style>
