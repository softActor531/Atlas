<template>
  <div class="card">
    <h2 class="p-2">
      Required
    </h2>
    <div class="col-md-12 mt-2">
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
    <div class="col-md-12">
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
    <div class="col-md-12">
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
    <div class="col-md-12">
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
    <div class="input-group text-center mt-1 pl-3">
      <div class="radio radio-info form-check-inline">
        <input
          id="noneFollowup"
          data-msg-oneormorechecked="No task was selected. Please select To-Do if assigning an action."
          type="radio"
          value="none"
          class="follow-up auto-tab"
          name="follow_up"
        >
        <label for="noneFollowup"> None </label>
      </div>
      <div class="radio radio-info form-check-inline">
        <input
          id="completeFollowup"
          type="radio"
          value="complete"
          class="follow-up auto-tab"
          name="follow_up"
        >
        <label for="completeFollowup"> Complete </label>
      </div>
      <div class="radio radio-info form-check-inline">
        <input
          id="todoFollowup"
          type="radio"
          value="to do"
          class="follow-up auto-tab"
          name="follow_up"
        >
        <label for="todoFollowup"> To Do </label>
      </div>
    </div>

    <div class="col-md-12 mt-2">
      <div class="form-group">
        <label class="required">Assign To</label>
        <select id="descriptor" v-model="selected.Action" class="form-control descriptor" name="descriptor_id">
          <option value="" disabled selected>
            --Select--
          </option>
          <option v-for="option in assigns" :key="option" :value="key">
            {{ option }}
          </option>
        </select>
      </div>
    </div>
    <div class="col-md-12">
      <div class="form-group input date">
        <label for="student_birthdate">Due Date</label>
        <flat-pickr v-model="date" class="date-picker form-control flatpickr-input" />
      </div>
    </div>
  </div>
</template>

<script>
import flatPickr from 'vue-flatpickr-component'

export default {
  name: 'RequiredCategory',
  components: {
    flatPickr
  },
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
      assigns: [
        'Self',
        'Jeanne Courtney',
        'Chip Smith',
        'David Sundstrom',
        'Frederick Thomas',
        'Gin Hooks'],
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
