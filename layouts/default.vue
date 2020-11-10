<template>
  <Fragment>
    <header id="topnav">
      <Topbar />
      <Navbar />
    </header>

    <div class="wrapper">
      <div class="container-fluid">
        <Nuxt />
      </div>
    </div>

    <Footer />
  </Fragment>
</template>

<script>
import { Fragment } from 'vue-fragment'
import Topbar from './partials/topbar'
import Navbar from './partials/navbar'
import Footer from './partials/footer'
import '~/assets/scss/bootstrap.scss'
import '~/assets/scss/app.scss'
import '~/assets/scss/icons.scss'

export default {
  components: { Fragment, Topbar, Navbar, Footer },
  middleware: 'auth'
}
</script>
