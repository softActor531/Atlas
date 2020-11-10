<template>
  <main>
    <div class="row mt-4">
      <div class="col-md-3 mt-3">
        <Studentsidenav :student-id="$route.params.id" />
      </div>
      <div class="col-md-9">
        <div class="page-title-right float-right">
          <nuxt-link
            class="btn btn-success waves-effect waves-light"
            :to="`/Student-Notes-Files-Edit/${$route.params.id}/new`"
          >
            <span class="btn-label">
              <i class="mdi mdi-plus-circle" />
            </span>
            Add Note
          </nuxt-link>
        </div>
        <h1 class="mt-0">
          Case Management Notes
        </h1>
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
                  <span>{{ id }}</span>
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
                  <span>{{ site.district.name }}/{{ site.name }}</span>
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
                  <span>{{ status.phase.name }}/{{ status.name }}</span>
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
                  <span>
                    {{ graduate_candidate_advocate.first_name }}
                    {{ graduate_candidate_advocate.last_name }}
                  </span>
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
                  <span>N/A</span>
                </h5>
              </div>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-body">
            <b-table-simple hover small caption-top responsive bordered>
              <colgroup>
                <col />
                <col />
              </colgroup>
              <colgroup>
                <col />
                <col />
                <col />
              </colgroup>
              <colgroup>
                <col />
                <col />
              </colgroup>
              <b-thead>
                <b-tr>
                  <b-th>Note Date</b-th>
                  <b-th>Created By</b-th>
                  <b-th>Type</b-th>
                  <b-th>Category</b-th>
                  <b-th>Sub Category</b-th>
                  <b-th>Descriptor</b-th>
                  <b-th>Action</b-th>
                  <b-th>Assigned To</b-th>
                  <b-th>Date Due</b-th>
                </b-tr>
              </b-thead>
              <b-tbody v-for="item in notes" :key="item.id">
                <b-tr>
                  <b-td>{{ getDate(item.created_at) }}</b-td>
                  <b-td>
                    {{ item.creator.first_name }}
                    {{ item.creator.last_name }}
                  </b-td>
                  <b-td>{{ item.type }}</b-td>
                  <b-td>{{ item.category.name }}</b-td>
                  <b-td>{{ item.sub_category.name }}</b-td>
                  <b-td>{{ item.descriptor.name }}</b-td>
                  <b-td>{{ item.action.name }}</b-td>
                  <b-td>
                    {{
                      item.assignee.first_name + " " + item.assignee.last_name
                    }}
                  </b-td>
                  <b-td>{{ item.due_date }}</b-td>
                </b-tr>
                <b-tr>
                  <b-th class="text-right">
                    Notes
                  </b-th>
                  <b-td colspan="4">
                    {{ getNoteBody(item.body) }}
                  </b-td>
                  <b-td colspan="4">
                    <strong>Status:</strong>
                    {{ item.status }}
                    <b-button
                      variant="blue"
                      @click="
                        $router.push({
                          name: 'students-details-id',
                          params: { id: item.id }
                        })
                      "
                    >
                      View
                    </b-button>
                  </b-td>
                </b-tr>
              </b-tbody>
            </b-table-simple>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import moment from "moment";
import StudentSideNav from "~/components/student-view/studentsidenav";

export default {
  name: "Id",
  components: {
    StudentSideNav
  },
  async asyncData(context) {
    const notes = await context.$api.getAllStudentsNotes(context.params.id);
    const student = await context.$api.getStudent(context.params.id);
    const users = await context.$api.getUsers();
    return {
      notes,
      ...student,
      users
    };
  },
  mounted() {
    // if (!this.$store.state.modules.includes("case_management_notes")) {
    //   throw new Error();
    // }
  },
  methods: {
    getDate(date) {
      if (date !== null) {
        return moment(date).format("MM/DD/YYYY");
      } else {
        return "";
      }
    },
    getNoteBody(note) {
      let body = note;
      for (const user of this.users) {
        body = body.replace(
          `[id:${user.id}, label:${user.first_name} ${user.last_name}]`,
          `@${user.first_name} ${user.last_name}`
        );
      }
      return body;
    }
  }
};
</script>

<style></style>
