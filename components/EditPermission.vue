<template>
  <div class="row">
    <div v-for="grouping in groups" :key="grouping" class="form-group col-3">
      <div class="custom-control custom-checkbox">
        <input
          :id="grouping.permissions[i]"
          type="checkbox"
          class="custom-control-input"
        >
        <label class="custom-control-label" :for="grouping.permissions[i]">
          <h5 :name="grouping.permissions[i].name">
            {{ grouping.permissions[i].name }}
          </h5>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EditPermission',
  data () {
    return {
      groups: [
        {
          group: 'Group 1',
          permissions: [
            { id: 1, name: 'Permission 1' },
            { id: 2, name: 'Permission 2' }
          ]
        },
        {
          group: 'Group 2',
          permissions: [
            { id: 3, name: 'Permission 1' },
            { id: 4, name: 'Permission 2' }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
h5 {
  margin: 3px;
}
</style>
