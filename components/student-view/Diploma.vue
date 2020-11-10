<template>
  <div class="row">
    <div class="col-md-6">
      <h4 class="page-title">
        <strong>DIPLOMA:</strong> MDAA 18 Credit Diploma
      </h4>
    </div>
    <div class="col-md-6">
      <div class="page-title-right float-right">
        <a class="btn btn-success waves-effect waves-light" href="#">
          <span class="btn-label">
            <i class="mdi mdi-printer" aria-hidden="true" />
          </span>
          Print
        </a>
        <a class="btn btn-primary waves-effect waves-light" href="#">
          <span class="btn-label">
            <i class="mdi mdi-file-export" aria-hidden="true" />
          </span>
          Export in CSV
        </a>
      </div>
    </div>
    <div class="col-md-12 mt-3">
      <div class="card">
        <div class="row">
          <div class="col-sm-6 col-xl-1" />
          <div class="col-sm-6 col-xl-2">
            <div class="p-2 text-center">
              <i class="mdi mdi-account-key text-primary mdi-24px" />
              <p class="text-muted font-15 mb-0">Acceleration ID</p>
              <h5>
                <span>0</span>
              </h5>
            </div>
          </div>

          <div class="col-sm-6 col-xl-2">
            <div class="p-2 text-center">
              <i class="mdi mdi-map text-success mdi-24px" />
              <p class="text-muted font-15 mb-0">Location</p>
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
              <p class="text-muted font-15 mb-0">Phase/Status</p>
              <h5>
                <span>/</span>
              </h5>
            </div>
          </div>
          <div class="col-sm-6 col-xl-2">
            <div class="p-2 text-center">
              <i class="mdi mdi-alert-circle text-info mdi-24px" />
              <p class="text-muted font-15 mb-0">GCA</p>
              <h5>
                <span />
              </h5>
            </div>
          </div>

          <div class="col-sm-6 col-xl-2">
            <div class="p-2 text-center">
              <i class="mdi mdi-certificate text-blue mdi-24px" />
              <p class="text-muted font-15 mb-0">GC Name:</p>
              <h5>
                <span />
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
    <fieldset class="scheduler-border">
      <legend class="scheduler-border">
        <strong>GC Graduation Progress</strong>
      </legend>
      <div class="row">
        <div class="col-xs-12 col-md-8 col-xl-8 row">
          <div class="col-xs-12 col-md-6 col-xl-6">
            <div class="widget-rounded-circle card-box">
              <div class="row">
                <div class="col-4">
                  <div class="avatar-lg rounded-circle bg-hard-blue">
                    <i class="fas fa-paperclip display-5 avatar-title text-" />
                  </div>
                </div>
                <div class="col-8">
                  <div class="text-right">
                    <h3 class="text-dark mt-1">
                      <span data-plugin="counterup">18</span>
                    </h3>
                    <p class="text-muted mb-1 text-truncate">Diploma Credits</p>
                  </div>
                </div>
              </div>
              <!-- end row-->
            </div>
            <!-- end widget-rounded-circle-->
          </div>
          <!-- end col-->

          <div class="col-xs-12 col-md-6 col-xl-6">
            <div class="widget-rounded-circle card-box">
              <div class="row">
                <div class="col-4">
                  <div class="avatar-lg rounded-circle bg-pink">
                    <i
                      class="far fa-check-circle display-5 avatar-title text-"
                    />
                  </div>
                </div>
                <div class="col-8">
                  <div class="text-right">
                    <h3 class="text-dark mt-1">
                      <span data-plugin="counterup">19</span>
                    </h3>
                    <p class="text-muted mb-1 text-truncate">
                      Diploma Credits Earned
                    </p>
                  </div>
                </div>
              </div>
              <!-- end row-->
            </div>
            <!-- end widget-rounded-circle-->
          </div>
          <!-- end col-->
          <div class="col-sm-12col-md-6 col-xl-6">
            <div class="widget-rounded-circle card-box">
              <div class="row">
                <div class="col-4">
                  <div class="avatar-lg rounded-circle bg-info">
                    <i class="fas fa-paperclip display-5 avatar-title text-" />
                  </div>
                </div>
                <div class="col-8">
                  <div class="text-right">
                    <h3 class="text-dark mt-1">
                      <span data-plugin="counterup">0</span>
                    </h3>
                    <p class="text-muted mb-1 text-truncate">
                      Diploma Credits Needed
                    </p>
                  </div>
                </div>
              </div>
              <!-- end row-->
            </div>
            <!-- end widget-rounded-circle-->
          </div>
          <!-- end col-->
          <div class="col-sm-12 col-md-6 col-xl-6">
            <div class="widget-rounded-circle card-box">
              <div class="row">
                <div class="col-4">
                  <div class="avatar-lg rounded-circle bg-orange">
                    <i
                      class="mdi mdi-filter-variant vertical-flipped display-5 avatar-title text-"
                    />
                  </div>
                </div>
                <div class="col-8">
                  <div class="text-right">
                    <h3 class="text-dark mt-1">
                      <span data-plugin="counterup">5</span>
                    </h3>
                    <p class="text-muted mb-1 text-truncate">Tier</p>
                  </div>
                </div>
              </div>
              <!-- end row-->
            </div>
            <!-- end widget-rounded-circle-->
          </div>
          <!-- end col-->

          <div class="col-sm-12 col-md-6 col-xl-6">
            <div class="form-group">
              <label for="district">Status</label>
              <select
                id="district"
                disabled="disabled"
                class="form-control custom-select"
                name="district"
              >
                <option value="Clark County">Inactive</option>
              </select>
            </div>
          </div>
          <div class="col-sm-12col-md-6 col-xl-6">&nbsp;&nbsp;</div>

          <div class="col-md-12 col-xl-12 with-border" />
          <div class="clear" />
          <div class="col-md-6 col-xl-6" style="float: left;">
            <label for="district">Cohort Year</label>
            <select
              id="district"
              disabled="disabled"
              class="form-control custom-select"
              name="cohort_year"
            >
              <option value="Clark County" selected="selected" />
            </select>
          </div>
          <div class="col-md-6 col-xl-6" style="float: left;">
            <label for="district">Target Graduation Date</label>
            <select
              id="district"
              disabled="disabled"
              class="form-control custom-select"
              name="district"
            >
              <option value="Clark County" selected="selected">Fall</option>
            </select>
            <br />
            <br />
            <select
              id="district"
              disabled="disabled"
              class="form-control custom-select"
              name="district"
            >
              <option value="Clark County" selected="selected" />
            </select>
          </div>
          <div class="col-md-6 col-xl-6 card-box" style="float: right;">
            <div class="form-group col-md-12 bg-white">
              <label for="credits">Special Programs</label>

              <div class="custom-control custom-checkbox">
                <input
                  class="custom-control-input"
                  type="checkbox"
                  disabled
                  name="special_programs[]"
                  value="1"
                />
                <label class="custom-control-label">ELL/ESOL</label>
              </div>
              <br />

              <div class="custom-control custom-checkbox">
                <input
                  class="custom-control-input"
                  type="checkbox"
                  disabled
                  name="special_programs[]"
                  value="2"
                />
                <label class="custom-control-label">NONE</label>
              </div>
              <br />

              <div class="custom-control custom-checkbox">
                <input
                  class="custom-control-input"
                  type="checkbox"
                  disabled
                  name="special_programs[]"
                  value="3"
                />
                <label class="custom-control-label">NOT DISCLOSED</label>
              </div>
              <br />

              <div class="custom-control custom-checkbox">
                <input
                  class="custom-control-input"
                  type="checkbox"
                  disabled
                  name="special_programs[]"
                  checked
                  value="4"
                />
                <label class="custom-control-label">IEP</label>
              </div>
              <br />

              <div class="custom-control custom-checkbox">
                <input
                  class="custom-control-input"
                  type="checkbox"
                  disabled
                  name="special_programs[]"
                  value="5"
                />
                <label class="custom-control-label">504 PLAN</label>
              </div>
              <br />

              <div class="custom-control custom-checkbox">
                <input
                  class="custom-control-input"
                  type="checkbox"
                  disabled
                  name="special_programs[]"
                  value="6"
                />
                <label class="custom-control-label">FREE LUNCH</label>
              </div>
              <br />

              <div class="custom-control custom-checkbox">
                <input
                  class="custom-control-input"
                  type="checkbox"
                  disabled
                  name="special_programs[]"
                  value="7"
                />
                <label class="custom-control-label">GT</label>
              </div>
              <br />
            </div>

            <label for="district">Post Grad Pathways</label>
            <select
              id="district"
              disabled="disabled"
              class="form-control custom-select"
              name="district"
            >
              <option value="Clark County">Career</option>
            </select>
          </div>

          <div class="col-md-6 col-xl-6" style="float: left;">
            <div class="widget-rounded-circle card-box">
              <div class="row">
                <div class="col-4">
                  <div class="avatar-lg rounded-circle bg-hard-blue">
                    <i
                      class="far fa-check-circle display-5 avatar-title text-"
                    />
                  </div>
                </div>
                <div class="col-8">
                  <div class="text-right">
                    <h3 class="text-dark mt-1">
                      <span data-plugin="counterup">20</span>
                    </h3>
                    <p class="text-muted mb-1 text-truncate">
                      Total Credits Earned
                    </p>
                  </div>
                </div>
              </div>
              <!-- end row-->
            </div>
            <!-- end widget-rounded-circle-->
          </div>
          <!-- end col-->
          <div class="col-md-6 col-xl-6" style="float: left;">
            <div class="widget-rounded-circle card-box">
              <div class="row">
                <div class="col-4">
                  <div class="avatar-lg rounded-circle bg-secondary">
                    <i
                      class="mdi mdi-file-document-box-outline display-5 avatar-title text-"
                    />
                  </div>
                </div>
                <div class="col-8">
                  <div class="text-right">
                    <h3 class="text-dark mt-1">
                      <span data-plugin="counterup">4</span>
                    </h3>
                    <p class="text-muted mb-1 text-truncate">GPA</p>
                  </div>
                </div>
              </div>
              <!-- end row-->
            </div>
            <!-- end widget-rounded-circle-->
          </div>
          <!-- end col-->
        </div>
        <div class="col-xs-12 col-md-4 bg-white border-it">
          <div class="card-box text-center bg-secondary row">
            <div class="col-md-4">
              <div class="col-12">
                <div class="avatar-md rounded-circle bg-light text-muted">
                  <i
                    class="mdi mdi-filter-variant vertical-flipped display-5 text-muted"
                  />
                </div>
              </div>
            </div>
            <div class="col-md-8">
              <div class="text-right">
                <h3 class="text-dark mt-1" />
                <p class="mb-1 text-truncate text-light">Tier Definitions</p>
              </div>
            </div>
          </div>
          <div class="col-md-12">
            <div class="mt-3">
              <p class="m-b-10 with-border">
                <strong>Tier 1 =</strong>
                <strong>
                  &nbsp;&nbsp;&nbsp;&nbsp; 15.5+
                </strong>
              </p>
              <p class="m-b-10 with-border">
                <strong>Tier 2 =</strong>
                <strong>
                  &nbsp;&nbsp;&nbsp;&nbsp; 10-15.5
                </strong>
              </p>
              <p class="m-b-10 with-border">
                <strong>Tier 3 =</strong>
                <strong>
                  &nbsp;&nbsp;&nbsp;&nbsp; 5.5-10
                </strong>
              </p>
              <p class="m-b-10 with-border">
                <strong>Tier 4 =</strong>
                <strong>
                  &nbsp;&nbsp;&nbsp;&nbsp; 0-5
                </strong>
              </p>
              <p class="m-b-10 with-border">
                <strong>Tier 5 =</strong>
                <strong>
                  &nbsp;&nbsp;&nbsp;&nbsp; Test only
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </fieldset>
  </div>
</template>

<script>
export default {
  name: "Diploma"
};
</script>

<style scoped></style>
