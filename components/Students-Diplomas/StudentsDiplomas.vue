<template>
  <div>
    <div class="page-title-box">
      <div class="page-title-right">
        <a class="btn btn-info waves-effect waves-light" href="#">
          <span class="btn-label">
            <i class="mdi mdi-calculator" />
          </span>
          Grad Calculator
        </a>
      </div>
      <h1 class="page-title">
        Student's Diplomas
      </h1>
    </div>
    <div class="thinner-box card-box widget-inline">
      <div class="row">
        <div class="col-sm-6 offset-md-1 col-xl-2">
          <div class="p-2 text-center">
            <i class="mdi mdi-account-key text-primary mdi-24px" />
            <p class="text-muted font-15 mb-0">
              Acceleration ID
            </p>
            <h5><span>17489</span></h5>
          </div>
        </div>

        <div class="col-sm-6 col-xl-2">
          <div class="p-2 text-center">
            <i class="mdi mdi-map text-success mdi-24px" />
            <p class="text-muted font-15 mb-0">
              Location
            </p>
            <h5><span>Test District                                / Test School</span></h5>
          </div>
        </div>
        <div class="col-sm-6 col-xl-2">
          <div class="p-2 text-center ">
            <i class="fas fa-spinner text-success mdi-24px text-warning" style="font-size: 24px;margin-top:10px;" />
            <p class="text-muted font-15 mb-0">
              Phase/Status
            </p>
            <h5><span>Withdrawn                                / Do Not Contact</span></h5>
          </div>
        </div>
        <div class="col-sm-6 col-xl-2">
          <div class="p-2 text-center">
            <i class="mdi mdi-alert-circle text-info mdi-24px" />
            <p class="text-muted font-15 mb-0">
              GCA
            </p>
            <h5><span>Registration GC Unassigned</span></h5>
          </div>
        </div>

        <div class="col-sm-6 col-xl-2">
          <div class="p-2 text-center">
            <i class="mdi mdi-certificate text-blue mdi-24px" />
            <p class="text-muted font-15 mb-0">
              GC Name:
            </p>
            <h5><span>Test User</span></h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StudentsDiplomas'
}
</script>

<style>
</style>
