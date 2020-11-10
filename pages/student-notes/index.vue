<template>
  <div class>
    <div class="row">
      <div class="col-md-3 mt-3">
        <Studentsidenav :student-id="$route.params.id" />
      </div>
      <div class="col-md-9 col-xs-12">
        <div class="page-title-box">
          <div class="page-title-right">
            <nuxt-link class="btn btn-success waves-effect waves-light" to="#">
              <span class="btn-label">
                <i class="mdi mdi-plus-circle" />
              </span>
              Add Note
            </nuxt-link>
          </div>
          <h4 class="page-title">Jackie Testcase | Documents &amp; Files</h4>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="thinner-box card-box widget-inline">
              <div class="row">
                <div class="col-sm-6 col-xl-1" />
                <div class="col-sm-6 col-xl-2">
                  <div class="p-2 text-center">
                    <i class="mdi mdi-account-key text-primary mdi-24px" />
                    <p class="text-muted font-15 mb-0">Acceleration ID</p>
                    <h5>
                      <span>12499</span>
                    </h5>
                  </div>
                </div>

                <div class="col-sm-6 col-xl-2">
                  <div class="p-2 text-center">
                    <i class="mdi mdi-map text-success mdi-24px" />
                    <p class="text-muted font-15 mb-0">Location</p>
                    <h5>
                      <span>Bethel / Bethel</span>
                    </h5>
                  </div>
                </div>
                <div class="col-sm-6 col-xl-2">
                  <div class="p-2 text-center">
                    <i
                      class="fas fa-spinner text-success mdi-24px text-warning"
                      style="font-size: 24px; margin-top: 10px"
                    />
                    <p class="text-muted font-15 mb-0">Phase/Status</p>
                    <h5>
                      <span>Enrolled / Active</span>
                    </h5>
                  </div>
                </div>
                <div class="col-sm-6 col-xl-2">
                  <div class="p-2 text-center">
                    <i class="mdi mdi-alert-circle text-info mdi-24px" />
                    <p class="text-muted font-15 mb-0">GCA</p>
                    <h5>
                      <span>Registration GC Unassigned</span>
                    </h5>
                  </div>
                </div>

                <div class="col-sm-6 col-xl-2">
                  <div class="p-2 text-center">
                    <i class="mdi mdi-certificate text-blue mdi-24px" />
                    <p class="text-muted font-15 mb-0">Tier</p>
                    <h5>
                      <span>2</span>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h4 class="mb-3 header-title">Documents</h4>
            <h5>
              <b>Registration</b>
            </h5>
            <div class="row">
              <div class="col-md-4">
                <div class="card uploadBox">
                  <div class="card-header bg-primary text-white">
                    <div class="card-widgets" />
                    <h5 class="card-title mb-0 text-white">Records Request</h5>
                  </div>
                  <div id="cardCollpase" class="collapse show" style>
                    <div class="card-body">
                      <center style="margin-top: 20px">
                        <center>
                          <form
                            method="post"
                            action="https://dev.accelerationacademy.net/files/upload"
                            enctype="multipart/form-data"
                          >
                            <input
                              type="hidden"
                              name="bucket"
                              value="Registration"
                            />
                            <input type="hidden" name="type" value="35" />
                            <div class="form-group mb-3">
                              <input
                                id="inputGroupFile04"
                                type="file"
                                name="file[document]"
                              />
                            </div>
                            <div class="form-group mb-3">
                              <input
                                type="submit"
                                name="file[submit]"
                                class="btn btn-success waves-effect waves-light"
                                value="Upload"
                              />
                            </div>
                          </form>
                        </center>
                      </center>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card uploadBox" style="border: solid #17e851">
                  <div class="card-header bg-primary text-white">
                    <!-- <div class="card-widgets"></div> -->
                    <h5 class="card-title mb-0 text-white">New Name</h5>
                  </div>
                  <div id="cardCollpase" class="collapse show" style>
                    <div class="card-body">
                      <center style="margin-top: 20px">
                        <center>
                          <form
                            method="post"
                            action="https://dev.accelerationacademy.net/files/upload"
                            enctype="multipart/form-data"
                          >
                            <span>
                              <a
                                href="https://dev.accelerationacademy.net/get-files/3521"
                                target="_blank"
                                >atlasengage-horizontal-color-logo.jpg</a
                              >
                            </span>
                            <br />
                            <br />
                            <input type="hidden" value="3521" name="document" />
                            <input
                              type="hidden"
                              name="bucket"
                              value="Registration"
                            />
                            <input type="hidden" name="type" value="53" />
                            <div class="form-group mb-3">
                              <input
                                id="inputGroupFile04"
                                type="file"
                                name="file[document]"
                              />
                            </div>
                            <div class="form-group mb-3">
                              <input
                                type="submit"
                                name="file[submit]"
                                class="btn btn-success waves-effect waves-light"
                                value="Upload"
                              />
                            </div>
                          </form>
                        </center>
                      </center>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card uploadBox">
                  <div class="card-header bg-primary text-white">
                    <div class="card-widgets" />
                    <h5 class="card-title mb-0 text-white">Add New Document</h5>
                  </div>
                  <div class="collapse show">
                    <div class="card-body">
                      <div class="card-body card-hover">
                        <center style="margin-top: 66px">
                          <span
                            data-parent-category-id="1"
                            data-district-id="1"
                            data-category-name="Registration"
                            class="add_btn"
                          >
                            <i class="fas fa-plus" />
                          </span>
                        </center>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h5>
              <b>Student-Records</b>
            </h5>
            <div class="row">
              <!-- <div class="card-body"> -->
              <div class="col-md-4">
                <div class="card uploadBox">
                  <div class="card-header bg-primary text-white">
                    <div class="card-widgets" />
                    <h5 class="card-title mb-0 text-white">Transcript</h5>
                  </div>
                  <div id="cardCollpase" class="collapse show" style>
                    <div class="card-body">
                      <center style="margin-top: 20px">
                        <center>
                          <form
                            method="post"
                            action="https://dev.accelerationacademy.net/files/upload"
                            enctype="multipart/form-data"
                          >
                            <input
                              type="hidden"
                              name="bucket"
                              value="Student-Records"
                            />
                            <input type="hidden" name="type" value="42" />
                            <div class="form-group mb-3">
                              <input
                                id="inputGroupFile04"
                                type="file"
                                name="file[document]"
                              />
                            </div>
                            <div class="form-group mb-3">
                              <input
                                type="submit"
                                name="file[submit]"
                                class="btn btn-success waves-effect waves-light"
                                value="Upload"
                              />
                            </div>
                          </form>
                        </center>
                      </center>
                    </div>
                  </div>
                </div>
              </div>

              <!-- <div class="card-body"> -->
              <div class="col-md-4">
                <div class="card uploadBox">
                  <div class="card-header bg-primary text-white">
                    <div class="card-widgets" />
                    <h5 class="card-title mb-0 text-white">GT</h5>
                  </div>
                  <div id="cardCollpase" class="collapse show" style>
                    <div class="card-body">
                      <center style="margin-top: 20px">
                        <center>
                          <form
                            method="post"
                            action="https://dev.accelerationacademy.net/files/upload"
                            enctype="multipart/form-data"
                          >
                            <input
                              type="hidden"
                              name="bucket"
                              value="Student-Records"
                            />
                            <input type="hidden" name="type" value="46" />
                            <div class="form-group mb-3">
                              <input
                                id="inputGroupFile04"
                                type="file"
                                name="file[document]"
                              />
                            </div>
                            <div class="form-group mb-3">
                              <input
                                type="submit"
                                name="file[submit]"
                                class="btn btn-success waves-effect waves-light"
                                value="Upload"
                              />
                            </div>
                          </form>
                        </center>
                      </center>
                    </div>
                  </div>
                </div>
              </div>

              <!-- <div class="card-body"> -->
              <div class="col-md-4">
                <div class="card uploadBox">
                  <div class="card-header bg-primary text-white">
                    <div class="card-widgets" />
                    <h5 class="card-title mb-0 text-white">New</h5>
                  </div>
                  <div id="cardCollpase" class="collapse show" style>
                    <div class="card-body">
                      <center style="margin-top: 20px">
                        <center>
                          <form
                            method="post"
                            action="https://dev.accelerationacademy.net/files/upload"
                            enctype="multipart/form-data"
                          >
                            <input
                              type="hidden"
                              name="bucket"
                              value="Student-Records"
                            />
                            <input type="hidden" name="type" value="54" />
                            <div class="form-group mb-3">
                              <input
                                id="inputGroupFile04"
                                type="file"
                                name="file[document]"
                              />
                            </div>
                            <div class="form-group mb-3">
                              <input
                                type="submit"
                                name="file[submit]"
                                class="btn btn-success waves-effect waves-light"
                                value="Upload"
                              />
                            </div>
                          </form>
                        </center>
                      </center>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-4">
                <div class="card uploadBox" style="border: solid #17e851">
                  <div class="card-header bg-primary text-white">
                    <div class="card-widgets" />
                    <h5 class="card-title mb-0 text-white">IEP</h5>
                  </div>
                  <div id="cardCollpase" class="collapse show" style>
                    <div class="card-body">
                      <center style="margin-top: 20px">
                        <center>
                          <form
                            method="post"
                            action="https://dev.accelerationacademy.net/files/upload"
                            enctype="multipart/form-data"
                          >
                            <span>
                              <a
                                href="https://dev.accelerationacademy.net/get-files/3522"
                                target="_blank"
                                >00020886-dummy.pdf</a
                              >
                            </span>
                            <br />
                            <br />
                            <input type="hidden" value="3522" name="document" />
                            <input
                              type="hidden"
                              name="bucket"
                              value="Student-Records"
                            />
                            <input type="hidden" name="type" value="43" />
                            <div class="form-group mb-3">
                              <input
                                id="inputGroupFile04"
                                type="file"
                                name="file[document]"
                              />
                            </div>
                            <div class="form-group mb-3">
                              <input
                                type="submit"
                                name="file[submit]"
                                class="btn btn-success waves-effect waves-light"
                                value="Upload"
                              />
                            </div>
                          </form>
                        </center>
                      </center>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card uploadBox">
                  <div class="card-header bg-primary text-white">
                    <div class="card-widgets" />
                    <h5 class="card-title mb-0 text-white">Add New Document</h5>
                  </div>
                  <div class="collapse show" style>
                    <div class="card-body">
                      <div class="card-body card-hover">
                        <center style="margin-top: 66px">
                          <span
                            data-parent-category-id="2"
                            data-district-id="1"
                            data-category-name="Student-Records"
                            class="add_btn"
                          >
                            <i class="fas fa-plus" />
                          </span>
                        </center>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h5>
              <b>Assessments</b>
            </h5>
            <div class="row">
              <div class="col-md-4">
                <div class="card uploadBox">
                  <div class="card-header bg-primary text-white">
                    <div class="card-widgets" />
                    <h5 class="card-title mb-0 text-white">Add New Document</h5>
                  </div>
                  <div class="collapse show" style>
                    <div class="card-body">
                      <div class="card-body card-hover">
                        <center style="margin-top: 66px">
                          <span
                            data-parent-category-id="3"
                            data-district-id="1"
                            data-category-name="Assessments"
                            class="add_btn"
                          >
                            <i class="fas fa-plus" />
                          </span>
                        </center>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h4 class="mb-3 header-title">General Documents</h4>
            <form
              method="post"
              action="https://dev.accelerationacademy.net/files/upload"
              enctype="multipart/form-data"
            >
              <input type="hidden" name="bucket" value="general" />
              <div class="form-group mb-3">
                <input
                  id="inputGroupFile04"
                  type="file"
                  name="file[document]"
                />
              </div>
              <div class="form-group mb-3">
                <input
                  type="submit"
                  name="file[submit]"
                  class="btn btn-success waves-effect waves-light"
                  value="Upload"
                />
              </div>
            </form>

            <div class="row">
              <div class="table-responsive">
                <table class="table table-sm table-bordered history-table">
                  <thead>
                    <tr>
                      <th>Date Added</th>
                      <th>File Name</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>July 6, 2020 9:04pm</td>
                      <td>
                        <a
                          href="https://dev.accelerationacademy.net/get-files/3497"
                          target="_blank"
                          >windows.jpg</a
                        >
                      </td>
                      <td>
                        <a
                          href="?delete=3497"
                          onclick="return confirm('Are you sure you want to delete?')"
                        >
                          <i class="fa fa-trash" aria-hidden="true" />
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.thinner-box {
  padding: 0 !important;
}
</style>

<script>
import GcSideBar from "../../components/student-contact/GcSideBar";
export default {
  components: {
    GcSideBar,
  },
};
</script>
