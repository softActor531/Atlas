<template>
  <!-- main datatable -->
  <div class="container">
    <h1 class="title">{{district_label}} Page</h1>

    <b-col lg="6" class="my-1" offset="6">
      <b-form-group
        label="Search"
        label-cols-sm="3"
        label-align-sm="right"
        label-size="sm"
        label-for="filterInput"
      >
        <b-input-group size="sm">
          <b-form-input
            id="filterInput"
            v-model="filter"
            type="search"
            placeholder="Type to Search"
          />
          <b-input-group-append>
            <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
          </b-input-group-append>
        </b-input-group>
      </b-form-group>
    </b-col>

    <Table :items="items" :fields="fields" @row-clicked="goToEdit">
      <template v-slot:cell(index)="data">{{ data.index + 1 }}</template>
    </Table>
  </div>
</template>

<script>
import Table from "../../components/shared/Table.vue";
export default {
  components: { Table },
  props: {
    actions: {
      type: Boolean,
      default: false
    }
  },
  asyncData({ $api }) {
    return $api
      .getDistricts()
      .then(data => {
        console.info(data);
        return {
          items: data
        };
      })
      .catch();
  },
  data() {
    return {
      district_label: this.$store.state.fields.length > 0 ? this.$store.state.fields.find(element => {
        return element.base_name == "District";
      }).custom_name : "District",
      // items: [],
      fields: [
        "index",
        { key: "name", label: "Name", sortable: true },
        { key: "name", label: "Name", sortable: true },
        // { key: 'abbr', label: 'Abbr', sortable: true },
        { key: "actions", sortable: false }
      ],
      filter: null,
      totalRows: 1,
      currentPage: 1,
      filterOn: []
    };
  },
  methods: {
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
    goToEdit(record, index) {
      this.$router.push({
        name: "districts-id-edit",
        params: { id: record.id }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
