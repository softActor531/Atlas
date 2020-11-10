<template>
  <div>
    <div class="card">
      <div class="card-body">
        <div class="form-group row">
          <label class="required col-sm-12 col-md-3">Audience <code>*</code></label>
          <div class="col-sm-12 col-md-9">
            <div class="input-group">
              <div class="radio radio-info form-check-inline">
                <input
                  id="internalAudience"
                  type="radio"
                  class="auto-tab"
                  value="internal"
                  name="audience"
                  checked=""
                >
                <label for="internalAudience"> Internal </label>
              </div>
              <div class="radio radio-info form-check-inline">
                <input
                  id="externalAudience"
                  type="radio"
                  class="auto-tab"
                  value="external"
                  name="audience"
                >
                <label for="externalAudience"> External </label>
              </div>
            </div>
          </div>
        </div>
        <div class="form-group row">
          <label class="required col-sm-12 col-md-3">Type <code>*</code></label>
          <div class="col-sm-12 col-md-9">
            <div class="input-group">
              <div class="radio radio-info form-check-inline">
                <input
                  id="communicationType"
                  class="auto-tab"
                  type="radio"
                  value="communication"
                  name="type"
                  checked=""
                  maxlength="2147483647"
                >
                <label for="communicationType"> Communication </label>
              </div>
              <div class="radio radio-info form-check-inline">
                <input
                  id="interventionType"
                  class="auto-tab"
                  type="radio"
                  value="intervention"
                  name="type"
                  maxlength="2147483647"
                >
                <label for="interventionType"> Intervention </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="tags">
      <vue-tags-input
        v-model="tag"
        :tags="tags"
        @tags-changed="newTags => tags = newTags"
      />
      <div class="buttons mt-3">
        <div class="float-right">
          <button type="submit" class="btn btn-success pl-4 pr-4 auto-tab" name="save" value="Save Note">
            Save
          </button>
        </div>
        <div class="float-left">
          <button type="button" class="btn btn-secondary pl-4 pr-4 auto-tab">
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueTagsInput from '@johmun/vue-tags-input'

export default {
  name: 'Audience',
  components: {
    VueTagsInput
  },
  data () {
    return {
      tag: '',
      tags: []
    }
  }
}
</script>

<style>
.vue-tags-input,
.ti-input{
    max-width: 100% !important;
    height: 390px;
    border: none !important;
}
.ti-tag{height: 30px;}
</style>
