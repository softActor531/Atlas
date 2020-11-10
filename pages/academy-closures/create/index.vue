<template>
  <div class="row mt-3">
    <div class="col-md-3">
      <Sidenav />
    </div>
    <div class="col-md-9">
      <h1 class="mt-0 pt-0">
        Create New Closure
      </h1>
      <CreateClosure />
    </div>
  </div>
</template>

<script>

import Sidenav from '../../../components/schedule/Sidenav'
import CreateClosure from '../../../components/academy-closures/create-closure'

export default {
  name: 'Index',
  components: {
    Sidenav,
    CreateClosure
  }
}
</script>
