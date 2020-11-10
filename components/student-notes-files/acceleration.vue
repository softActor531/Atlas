<template>
  <div class="card">
    <div class="row">
      <div class="col-sm-6 col-xl-1" />
      <div class="col-sm-6 col-xl-2">
        <div class="p-2 text-center">
          <i class="mdi mdi-account-key text-primary mdi-24px" />
          <p class="text-muted font-15 mb-0">
            Acceleration ID
          </p>
          <h5>
            <span>0</span>
          </h5>
        </div>
      </div>

      <div class="col-sm-6 col-xl-2">
        <div class="p-2 text-center">
          <i class="mdi mdi-map text-success mdi-24px" />
          <p class="text-muted font-15 mb-0">
            Location
          </p>
          <h5>
            <span>/</span>
          </h5>
        </div>
      </div>
      <div class="col-sm-6 col-xl-2">
        <div class="p-2 text-center">
          <i
            class="fas fa-spinner text-success mdi-24px text-warning"
            style="font-size: 24px;margin-top:10px;"
          />
          <p class="text-muted font-15 mb-0">
            Phase/Status
          </p>
          <h5>
            <span>/</span>
          </h5>
        </div>
      </div>
      <div class="col-sm-6 col-xl-2">
        <div class="p-2 text-center">
          <i class="mdi mdi-alert-circle text-info mdi-24px" />
          <p class="text-muted font-15 mb-0">
            GCA
          </p>
          <h5>
            <span />
          </h5>
        </div>
      </div>

      <div class="col-sm-6 col-xl-2">
        <div class="p-2 text-center">
          <i class="mdi mdi-certificate text-blue mdi-24px" />
          <p class="text-muted font-15 mb-0">
            Tier
          </p>
          <h5>
            <span>
              N/A
            </span>
          </h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Acceleration'
}
</script>

<style>
</style>
