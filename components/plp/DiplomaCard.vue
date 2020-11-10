<template>
  <div class="card col-md-4">
    <div class="card-header bg-blue py-3 text-white">
      <div class="card-widgets">
        <a
          data-toggle="collapse"
          href="#cardCollpase160631"
          role="button"
          aria-expanded="true"
          aria-controls="cardCollpase2"
          class=""
          ><i class="mdi mdi-minus"></i
        ></a>
      </div>
      <h5 class="card-title mb-0 text-white">{{ name }}</h5>
    </div>
    <div id="cardCollpase160631" class="collapse show" style="">
      <div class="card-body">
        <label for="district">Diploma Credits Earned</label>
        <select
          disabled="disabled"
          class="form-control custom-select"
          name="district"
          id="district"
        >
          <option> {{ creditsEarned }} </option>
        </select>
        <label for="district">Completed with</label>
        <select
          disabled="disabled"
          class="form-control custom-select"
          name="district"
          id="district"
        >
          <option value="Clark County" selected="selected">
            {{ school }}
          </option>
        </select>
        <br /><br />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    creditsEarned: Number,
    school: String
  }
};
</script>
