<template>
  <div class>
    <div class="row">
      <div class="col-12">
        <div class="page-title-box">
          <h4 class="page-title">All Plans</h4>
        </div>
      </div>
    </div>
    <nuxt-link class="btn btn-primary btn-rounded waves-effect waves-light" to="/plp/add">
      <i class="fas fa-plus-circle" aria-hidden="true"></i> Add New Plan
    </nuxt-link>
    <br />
    <br />
    <div class="form-group col-md-6 firstname">
      <label for="district">Edit Default Plan For {{ district_label }}</label>
      <select class="form-control" name="district" id="district" v-model="district">
        <option disabled value>Choose {{ district_label }}</option>
        <option :key="item" :value="item.id" v-for="item in districts">
          {{
          item.name
          }}
        </option>
      </select>
    </div>
    <div class="form-group col-md-12 firstname">
      <button
        class="btn btn-primary waves-effect waves-light"
        type="button"
        id="edit_default"
        @click="editPlp"
      >Edit</button>
    </div>
    <div class="card mb-5">
      <div class="card-body">
        <div class="table-responsive" data-pattern="priority-columns">
          <div id="DataTables_Table_0_wrapper" class="dataTables_wrapper dt-bootstrap4 no-footer">
            <div class="row">
              <div class="col-sm-12">
                <table
                  class="clickable zebra table mt-4 schedule dataTable no-footer"
                  id="DataTables_Table_0"
                  role="grid"
                  aria-describedby="DataTables_Table_0_info"
                >
                  <thead>
                    <tr role="row">
                      <th
                        class="header dt-center sorting_asc"
                        tabindex="0"
                        aria-controls="DataTables_Table_0"
                        rowspan="1"
                        colspan="1"
                        aria-sort="ascending"
                        aria-label="ID: activate to sort column descending"
                        style="width: 211.4px;"
                      >ID</th>
                      <th
                        class="header dt-center sorting"
                        tabindex="0"
                        aria-controls="DataTables_Table_0"
                        rowspan="1"
                        colspan="1"
                        aria-label="Plan Name: activate to sort column ascending"
                        style="width: 397.4px;"
                      >Plan Name</th>
                      <th
                        class="header dt-center sorting"
                        tabindex="0"
                        aria-controls="DataTables_Table_0"
                        rowspan="1"
                        colspan="1"
                        aria-label="District : activate to sort column ascending"
                        style="width: 163.4px;"
                      >{{ district_label }}</th>
                      <th
                        class="header dt-center sorting"
                        tabindex="0"
                        aria-controls="DataTables_Table_0"
                        rowspan="1"
                        colspan="1"
                        aria-label="Control: activate to sort column ascending"
                        style="width: 149.4px;"
                      >Control</th>
                      <th
                        class="header dt-center sorting"
                        tabindex="0"
                        aria-controls="DataTables_Table_0"
                        rowspan="1"
                        colspan="1"
                        aria-label="Status: activate to sort column ascending"
                        style="width: 136.4px;"
                      >Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <PlpTableRow
                      v-for="(plan, index) in plans"
                      :key="index"
                      :id="plan.id"
                      :planName="plan.name"
                      :district="plan.district.name"
                      :status="plan.status"
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
import PlpTableRow from "../../components/plp/PlpTableRow";

import Api from "../../services/api/Api";

export default {
  async asyncData(context) {
    const api = new Api(context);
    const districts = await api.getDistricts();
    const plans = await api.getPlpPlans();

    return {
      districts,
      plans
    };
  },
  data() {
    return {
      district: "",
      district_label: this.$store.state.fields.length > 0 ? this.$store.state.fields.find(element => {
        return element.base_name == "District";
      }).custom_name : "District"
    };
  },
  methods: {
    editPlp: function() {
      this.$router.push({
        path: `/plp/edit-default/${this.district}`
      });
    }
  },
  mounted() {
    // if (!this.$store.state.modules.includes("plp")) {
    //   throw new Error();
    // }
    let script = document.createElement("script");
    script.setAttribute(
      "src",
      "https://cdn.datatables.net/1.10.21/js/jquery.dataTables.min.js"
    );
    document.head.appendChild(script);

    let script2 = document.createElement("script");
    script2.setAttribute(
      "src",
      "https://cdn.datatables.net/1.10.21/js/dataTables.bootstrap4.min.js"
    );
    document.head.appendChild(script2);

    let script3 = document.createElement("script");
    script3.setAttribute(
      "src",
      "https://cdn.datatables.net/responsive/2.1.0/js/dataTables.responsive.js"
    );
    document.head.appendChild(script3);

    $(document).ready(function() {
      $("#DataTables_Table_0").DataTable({
        responsive: true
      });
    });
  },
  components: {
    PlpTableRow
  }
};
</script>
