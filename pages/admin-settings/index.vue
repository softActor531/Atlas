<template>
  <div class="">
    <div class="row">
      <div class="col-12">
        <div class="page-title-box">
          <h4 class="page-title">
            Site Settings
          </h4>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <Table hoverable enable-search @row-clicked="handleRowClicked" :items="allSettings" :fields="fields">
          <template v-slot:cell(index)="data">
            {{ data.index + 1 }}
          </template>
        </Table>
      </div>
    </div>
  </div>
</template>

<script>
import factory from 'factoria'
import Table from "../../components/shared/Table";
const define = require('factoria').define
export default {
  components: {
    Table
  },
  asyncData () {
    define('Setting', faker => ({
      setting: faker.lorem.words().split(' ').join('_'),
      value: faker.lorem.slug(),
      description: faker.lorem.words()
    }))

    const settings = factory('Setting', 5)
    return {
      allSettings: settings
    }
  },
  data () {
    return {
      fields: [
        'index',
        { key: 'setting', label: 'Setting' },
        { key: 'value', label: 'Value' },
        { key: 'description', label: 'Description' }
      ]
    }
  },
  methods: {
    handleRowClicked (record, index) {
      this.$router.push({ name: 'admin-settings-edit-id', params: { id: index, record } })
    }
  }
}
</script>
