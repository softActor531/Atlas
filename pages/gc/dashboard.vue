<template>
  <div class>
    <div class="row">
      <GcSideBar />
      <div class="col-md-10 col-xs-12">
        <div class="page-title-box">
          <div class="page-title-right">
            <nuxt-link
              class="btn btn-success waves-effect waves-light"
              to="/gc/edit"
            >
              <span class="btn-label">
                <i class="mdi mdi-account-edit"></i>
              </span>
              Edit GC
            </nuxt-link>
          </div>
          <h4 class="page-title">{{ name }} | GC Record</h4>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="thinner-box card-box widget-inline">
              <div class="row">
                <div class="col-sm-6 col-xl-1"></div>
                <GcIconBox
                  label="Acceleration ID"
                  :value="accelerationId"
                  iconStyle="mdi mdi-account-key text-primary mdi-24px"
                />
                <GcIconBox
                  label="Location"
                  :value="location"
                  iconStyle="mdi mdi-map text-success mdi-24px"
                />
                <div class="col-sm-6 col-xl-2">
                  <div class="p-2 text-center">
                    <i
                      class="fas fa-spinner text-success mdi-24px text-warning"
                      style="font-size: 24px;margin-top:10px;"
                    ></i>
                    <p class="text-muted font-15 mb-0">Phase/Status</p>
                    <h5>
                      <span>{{ phaseOrStatus }}</span>
                    </h5>
                  </div>
                </div>
                <GcIconBox
                  label="GCA"
                  :value="gca"
                  iconStyle="mdi mdi-alert-circle text-info mdi-24px"
                />
                <GcIconBox
                  label="Tier"
                  :value="tier"
                  iconStyle="mdi mdi-certificate text-blue mdi-24px"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="card-box">
          <h4 class="mb-3 header-title">Basic Identifiers</h4>
          <div class="row">
            <div class="col-12 text-center">
              <img
                src="../../assets/images/dashboard_image.png"
                alt="image"
                class="img-fluid rounded-circle"
                width="120"
              />
            </div>
            <div class="col-xs-12 col-md-6">
              <div class="text-left mt-3">
                <p class="text-muted mb-2 font-13">
                  <strong>Acceleration ID:</strong> {{ accelerationId }}
                </p>
                <p class="text-muted mb-2 font-13">
                  <strong>District ID:</strong>
                  <span class="ml-2"> {{ districtId }}</span>
                </p>
                <p class="text-muted mb-2 font-13">
                  <strong>District Partner:</strong>
                  <span class="ml-2">{{ districtPartner }} </span>
                </p>
                <nuxt-link class="btn btn-info waves-effect waves-light" to="#">
                  <span class="btn-label">
                    <i class="mdi mdi-format-list-checks"></i>
                  </span>
                  PLP Progress
                </nuxt-link>
              </div>
            </div>
            <div class="col-xs-12 offset-md-2 col-md-4">
              <div class="text-left mt-3">
                <p class="text-muted mb-2 font-13">
                  <strong>Site:</strong> <span class="ml-2">{{ site }} </span>
                </p>
                <p class="text-muted mb-2 font-13">
                  <strong>Phase:</strong>
                  <span class="ml-2"> {{ phase }} </span>
                </p>
                <p class="text-muted mb-2 font-13">
                  <strong>Status:</strong>
                  <span class="ml-2"> {{ status }} </span>
                </p>
                <p class="text-muted mb-2 font-13">
                  <strong>Special Program: </strong>
                  <span class="ml-2"> {{ specialProgram }}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12 col-md-12">
            <div class="card-box widget-inline">
              <h4 class="mb-3 header-title">OVERALL HEALTH</h4>
              <div class="row">
                <div class="col-xs-12 col-md-4">
                  <div class="p-2 text-center">
                    <i class="mdi mdi-alert-circle text-info mdi-24px"></i>
                    <p class="text-muted font-15 mb-0">Last Date Attended</p>
                    <h5>
                      <span>{{ lastDateAttended }}</span>
                    </h5>
                  </div>
                </div>

                <div class="col-xs-12 col-md-4">
                  <div class="p-2 text-center">
                    <i class="mdi mdi-alert-circle text-info mdi-24px"></i>
                    <p class="text-muted font-15 mb-0">Days Lapsed</p>
                    <h5>
                      <span>{{ daysLapsed }}</span>
                    </h5>
                  </div>
                </div>
                <div class="col-xs-12 col-md-4">
                  <div class="p-2 text-center">
                    <i class="mdi mdi-alert-circle text-info mdi-24px"></i>
                    <p class="text-muted font-15 mb-0">Next Day Expected</p>
                    <h5>
                      <span>{{ nextDayExpected }}</span>
                    </h5>
                  </div>
                </div>
                <div class="col-xs-12 col-md-4">
                  <div class="p-2 text-center">
                    <i class="mdi mdi-alert-circle text-info mdi-24px"></i>
                    <p class="text-muted font-15 mb-0">Last Login</p>
                    <h5>
                      <span>{{ lastLogin }}</span>
                    </h5>
                  </div>
                </div>
                <div class="col-xs-12 col-md-4">
                  <div class="p-2 text-center">
                    <i class="mdi mdi-alert-circle text-info mdi-24px"></i>
                    <p class="text-muted font-15 mb-0">Current Course</p>
                    <h5>
                      <span>{{ currentCourse }}</span>
                    </h5>
                  </div>
                </div>
                <div class="col-xs-12 col-md-4">
                  <div class="p-2 text-center">
                    <i class="mdi mdi-alert-circle text-info mdi-24px"></i>
                    <p class="text-muted font-15 mb-0">
                      Time Online (week to date Sunday-Saturday)
                    </p>
                    <h5>
                      <span>{{ timeOnline }}</span>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xs-12 col-md-12">
            <div class="card">
              <div class="card-body">
                <h4 class="mb-3 header-title">G.C. BARCODE</h4>
                <input type="hidden" name="uid" id="uid" value="12499" />
                <div class="row">
                  <div class="co-xs-12 col-md-6">
                    <nuxt-link to="#">
                      <img
                        id="labelImage"
                        src="../../assets/images/barcode.png"
                        alt="Barcode Preview"
                      />
                    </nuxt-link>
                  </div>
                  <div class="col-xs-12 col-md-6">
                    <div class="form-group">
                      <label for="printersSelect">Printer:</label>
                      <select class="form-control" id="printersSelect"></select>
                    </div>
                    <button
                      class="btn btn-blue waves-effect waves-light"
                      id="printButton"
                    >
                      Print
                    </button>
                  </div>
                  <div class="col-xs-12 col-md-12">
                    <div class="box">
                      <nuxt-link
                        class="btn btn-blue waves-effect waves-light"
                        to="#"
                        target="_blank"
                        >Generate ID to print</nuxt-link
                      >
                      <a
                        class="btn btn-blue waves-effect waves-light"
                        to="#"
                        target="_blank"
                        >Label Print</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GcSideBar from "../../components/student-contact/GcSideBar";
import GcIconBox from "../../components/student-contact/GcIconBox";

import { getGcDashboard } from "../../Api";

export default {
  asyncData(context) {
    return getGcDashboard()
      .then(data => {
        return data;
      })
      .catch(e => {
        context.error(new Error());
      });
  },
  components: {
    GcSideBar,
    GcIconBox
  }
};
</script>
