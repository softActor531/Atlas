<template>
  <b-card class="student-setup-card">
    <b-card-text class="text-uppercase">
      <VSelectGroup
        id="category"
        label="category"
        placeholder="Choose category"
        :options="categories"
        :selected="category"
        text-field="name"
        value-field="id"
        :v="v['category']"
        required
        @categoryChanged="handleChange('selectors', `category`, $event)"
      />

      <VSelectGroup
        id="subcategory"
        label="subcategory"
        placeholder="Choose subcategory"
        :options="subcategories"
        :selected="subcategory"
        text-field="name"
        value-field="id"
        :v="v['subcategory']"
        required
        @subcategoryChanged="handleChange('selectors', `subcategory`, $event)"
      />
    </b-card-text>
  </b-card>
</template>

<script>
import { ValidateInputMixin } from "../../mixin/validateInput"
export default {
  name: 'Selectors',
  mixins: [ValidateInputMixin],
  props: {
    form: Object,
    v: Object,
    categories: Array,
    subcategories: Array,
  },
  data () {
    return {
      ...this.form
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
