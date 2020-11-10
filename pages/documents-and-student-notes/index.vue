<template>
  <main>
    <div class="row mt-4">
      <div class="col-md-3">
        <Studentsidenav />
      </div>
      <div class="col-md-9">
        <div class="page-title-right float-right">
          <nuxt-link class="btn btn-success waves-effect waves-light" to="/Student-Notes-Files-Edit">
            <span class="btn-label">
              <i class="mdi mdi-plus-circle" />
            </span>
            Add Note
          </nuxt-link>
        </div>
        <h1 class="mt-0">
          Documents & Files
        </h1>
        <Acceleration />
        <Documents />
        <div class="card">
          <div class="card-body">
            <h4 class="mb-3 header-title">
              General Documents
            </h4>
            <form method="post" action="">
              <input type="hidden" name="bucket" value="general">
              <div class="form-group mb-3">
                <input id="inputGroupFile04" type="file">
              </div>
              <div class="form-group mb-3">
                <input type="submit" class="btn btn-success waves-effect waves-light" value="Upload">
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
                      <td>May 20, 2019 1:53pm</td>
                      <td><a href="#">s-paiz-lease.pdf</a></td><td><a href="#"><i class="fa fa-trash" /></a></td>
                    </tr><tr><td>April 10, 2019 3:15pm</td><td><a href="#" target="_blank">randy-hudson-transcripts.pdf</a></td><td><a href="#"><i class="fa fa-trash" /></a></td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Documents from '../../components/student-notes-files/documents.vue'
import Studentsidenav from '../../components/student-view/studentsidenav.vue'
import Acceleration from '../../components/student-notes-files/acceleration.vue'
export default {
  name: 'Index',
  components: {
    Acceleration, Studentsidenav, Documents
  }
}
</script>

<style>
</style>
