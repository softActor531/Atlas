<template>
  <div class>
    <div class="row">
      <GcSideBar :id="$route.params.id" />
      <div class="col-md-10 col-xs-12">
        <h1>Grad Calculator</h1>
        <div class="card">
          <div class="card-body">
            <form
              autocomplete="off"
              method="post"
              id="form_date"
              action="#form_date"
            >
              <fieldset>
                <div class="col-xs-12">
                  <div class="form-group input birthdate">
                    <label for="target_date">Target Graduation Date</label>
                    <flat-pickr
                      class="date-picker form-control flatpickr-input"
                      :config="config"
                      v-model="target_date"
                    ></flat-pickr>
                  </div>
                </div>
                <InputGroup
                  label="# of courses to complete"
                  type="number"
                  name="courses_complete"
                  :id="courses_complete"
                  @courses_completeChanged="courses_complete = $event"
                />

                <div class="clear"></div>

                <div class="form-group">
                  <label>% of course per week</label>
                  <input
                    class="form-control"
                    type="text"
                    name="percent_week"
                    disabled
                    v-model="getPercentWeek"
                  />
                </div>

                <div class="form-group">
                  <label>% of course per day</label>
                  <input
                    class="form-control"
                    type="text"
                    name="percent_day"
                    disabled
                    v-model="getPercentDay"
                  />
                </div>

                <div class="clear"></div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import flatPickr from "vue-flatpickr-component";

export default {
  data() {
    return {
      config: {
        dateFormat: "m/d/Y"
      },
      target_date: "",
      courses_complete: ""
    };
  },
  computed: {
    getPercentDay: function() {
      if (this.target_date !== "" && this.courses_complete !== "") {
        const diffTime = Math.abs(new Date() - new Date(this.target_date));
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return ((this.courses_complete / diffDays) * 100).toFixed(2);
      }
      return "";
    },
    getPercentWeek: function() {
      if (this.target_date !== "" && this.courses_complete !== "") {
        return (this.getPercentDay * 5).toFixed(2);
      }
      return "";
    }
  },
  mounted: function() {
    if (!this.$store.state.modules.includes("graduation_calculator")) {
      throw new Error();
    }
    $("form").submit(false);
  },
  components: {
    flatPickr
  }
};
</script>
