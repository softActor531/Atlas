<template>
  <main>
    <h1 class="py-2">
      New Note Category Option
    </h1>
    <nuxt-link class="btn btn-secondary btn-rounded waves-effect waves-light my-2" to="/admin-option-note-category">
      <i class="fas fa-plus-circle" aria-hidden="true" /> Cancel
    </nuxt-link>
    <div class="row">
      <div class="col-sm-12">
        <div class="form-group">
          <label>Type</label>
          <div class="input-group text-center mt-1 pl-3">
            <div class="radio radio-info form-check-inline">
              <input id="1" type="radio" value="category" name="type" checked="">
              <label for="1"> Category </label>
            </div>
            <div class="radio radio-info form-check-inline">
              <input id="2" type="radio" value="sub category" name="type">
              <label for="2"> Sub Category </label>
            </div>
            <div class="radio radio-info form-check-inline">
              <input id="3" type="radio" value="descriptor" name="type">
              <label for="3"> Descriptor </label>
            </div>
            <div class="radio radio-info form-check-inline">
              <input id="4" type="radio" value="action" name="type">
              <label for="4"> Action </label>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-6">
        <div class="form-group">
          <label class="required">Category</label>
          <select id="groups" v-model="selected.category" class="form-control options-notes-category">
            <option value="" disabled selected>
              --Select--
            </option>
            <option v-for="(category, key) in Categories" :key="key" :value="key">
              {{ category }}
            </option>
          </select>
        </div>
      </div>
      <div class="col-sm-12 col-md-6">
        <div class="form-group">
          <label class="required">Sub Category</label>
          <select id="groups" v-model="selected.subCategory" class="form-control sub-cat" name="sub_category_id">
            <option value="" disabled selected>
              --Select--
            </option>
            <option v-for="(subCategory,key) in subCategories[selected.category]" :key="key" :value="key">
              {{ subCategory }}
            </option>
          </select>
        </div>
      </div>
      <div class="form-group col-md-6">
        <label>Note Category</label>
        <input
          class="form-control"
          type="text"
          maxlength="50"
          name="note_category"
          value="Progress"
          aria-invalid="false"
        >
      </div>
      <div class="form-group col-md-6">
        <label>Active</label>
        <select class="form-control" name="active" aria-invalid="false">
          <option value="1" selected="">
            Active
          </option>
          <option value="0">
            Disabled
          </option>
        </select>
      </div>
      <div class="form-group col-md-12">
        <input class="btn btn-primary btn-rounded waves-effect waves-light" type="submit" name="save" value="Save Referral Option">
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'EditedForm',
  data () {
    return {
      Categories: [
        'Academics',
        'Alumni Network',
        'Attendance',
        'Enrollment',
        'For Test',
        'HIII',
        'New Category',
        'New sub Category',
        'OOO',
        'Site Operations',
        'Social Emotional Learning',
        'Test',
        'Test Sub',
        'Withdrawal',
        'Testing prod'
      ],
      subCategories: [
        ['Coursework', 'Assessment', 'Special Program', 'IEP/504', 'Personalized Learning Plan', 'Postsecondary Planning',
          'Graduation'],
        ['Post-gradudation Follow-up'],
        ['Retention', 'Excused Absence', 'Unexcused Absence', 'Long-Tem Absence', 'Transportation', 'Retention', 'Excused Absence', 'Unexcused Absence', 'Long-Tem Absence', 'Transportation']
      ],
      selected: {
        Categories: undefined,
        subCategories: undefined
      }
    }
  }
}
</script>

<style>
</style>
