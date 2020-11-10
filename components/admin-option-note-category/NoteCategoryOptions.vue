<template>
  <div>
    <h1>Note Category Options</h1>
    <div class="col-12">
      <div class="row">
        <div class="col-sm-12 col-md-3">
          <div class="form-group">
            <label class="required">Category</label>
            <select id="groups" v-model="selected.category" class="form-control options-notes-category">
              <option value="" disabled selected>
                --Select--
              </option>
              <option v-for="(category,key) in Categories" :key="key" :value="key">
                {{ category }}
              </option>
            </select>
          </div>
        </div>
        <div class="col-sm-12 col-md-3">
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
        <div class="form-group col-md-3">
          <label>Active</label>
          <select class="form-control" name="active">
            <option value="">
              -- Select --
            </option>
            <option value="1">
              Active
            </option>
            <option value="0">
              Disabled
            </option>
          </select>
        </div>
        <div class="form-group col-md-3" />
        <div class="col-sm-12 col-md-3">
          <div class="form-group">
            <label class="required">Descriptor</label>
            <select id="descriptor" v-model="selected.Descriptor" class="form-control descriptor" name="descriptor_id">
              <option value="" disabled selected>
                --Select--
              </option>
              <option v-for="(Descriptor,key) in Descriptors[selected.subCategory]" :key="key" :value="key">
                {{ Descriptor }}
              </option>
            </select>
          </div>
        </div>
        <div class="col-sm-12 col-md-3">
          <div class="form-group">
            <label class="required">Action</label>
            <select id="descriptor" v-model="selected.Action" class="form-control descriptor" name="descriptor_id">
              <option value="" disabled selected>
                --Select--
              </option>
              <option v-for="(Action,key) in Actions[selected.subCategory]" :key="key" :value="key">
                {{ Action }}
              </option>
            </select>
          </div>
        </div>
        <div class="col-md-12">
          <input type="submit" class="btn btn-success" value="Apply Filters">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NoteCategoryOptions',
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
      Descriptors: [
        ['Progress', 'Struggling with Assignment', 'Communication', 'Course Completed']
      ],
      Actions: [['Goal setting', 'Tutoring', 'Small group Instruction', 'Reteaching', 'Coaching', 'Adjust assignment', 'Written communication', 'Meeting', 'Notify Career/Life Coach ', 'Apply credit', 'Enter grade in district SIS'],
        ['dcsdcs', 'sdcscd', 'scsc']],
      selected: {
        Categories: undefined,
        subCategories: undefined,
        Descriptors: undefined,
        Actions: undefined
      }
    }
  }
}
</script>

<style>
</style>
