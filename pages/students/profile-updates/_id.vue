<template>
  <div class>
    <div class="row">
      <div class="col-md-3 mt-3">
        <Studentsidenav :student-id="$route.params.id" />
      </div>
      <div class="col-md-9 col-xs-12">
        <div class="page-title-box">
          <h1 class="page-title">{{ first_name }} {{ last_name }} | Profile Updates</h1>
        </div>
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="table-responsive">
                <table class="history-table wrap table table-sm table-bordered">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>fields number</th>
                      <th>fields</th>
                      <th>Status</th>
                      <th>Created Date</th>
                      <th colspan="3" style="width: 22%;">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <UpdateTableRow
                      v-for="(update, index) in updates"
                      :id="update.id"
                      :key="index"
                      :status="update.status"
                      :fields="update.fields"
                      :fields_number="update.fields.length"
                    />
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

<script>
import Studentsidenav from "../../../components/student-view/studentsidenav.vue";
// import GcSideBar from '../../../components/student-contact/GcSideBar'
// import Table from "../../../components/shared/Table";

import Api from "../../../services/api/Api";

export default {
  components: {
    // GcSideBar
    // Table,
    Studentsidenav
  },
  async asyncData(context) {
    const api = new Api(context);
    const student = await api.getStudent(context.route.params.id);
    const updates = await api.getProfileUpdates(context.route.params.id);

    return {
      ...student,
      updates
    };
  },
  data() {
    return {
      name: "John Doe"
    };
  },
  created() {
    console.log(this.updates);
  }
};
</script>
