<template>
  <div class="card pb-3">
    <div class="card-body">
      <h4 class="mb-3 header-title">
        <i class="mdi mdi-filter" />
        Master Schedule
      </h4>
      <div class="row">
        <div class="col-xs-12 col-md-3" />
        <button
          class="btn btn-primary btn-rounded waves-effect waves-light col-xs-12 col-md-3"
          data-toggle="modal"
          data-target="#locationModal"
        >
          Filter by Location
        </button>
        &nbsp;&nbsp;
        <button
          class="btn btn-primary btn-rounded waves-effect waves-light col-xs-12 col-md-3"
          data-toggle="modal"
          data-target="#categoryModal"
        >
          Filter by Category
        </button>
        <div class="col-xs-12 col-md-3" />
      </div>

      <div class="text-right">
        <a
          class="btn btn-primary btn-rounded waves-effect waves-light float-right"
          href="#"
        >
          <i class="fa fa-plus-circle" aria-hidden="true" /> Schedule GC
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Filters"
};
</script>
<style scoped></style>
