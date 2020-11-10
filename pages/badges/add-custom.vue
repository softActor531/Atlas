<template>
  <div>
    <div class="row">
      <div class="col-12">
        <div class="page-title-box">
          <h4 class="page-title">Add Custom Challenge</h4>
        </div>
      </div>
      <b-button variant="secondary" pill class="mb-4" @click="$router.back()">
        <span class="btn-label">
          <i class="fas fa-arrow-left" />
        </span>
        Go back
      </b-button>
    </div>
    <form
      method="post"
      action="https://dev.accelerationacademy.net/badges/save/"
      class="strict"
      enctype="multipart/form-data"
    >
      <InputGroup
        :id="name"
        width="6"
        label="Name"
        type="text"
        name="name"
        @nameChanged="name = $event"
      />
      <div class="form-group col-md-6 middlename">
        <label for="active">Status</label>
        <select class="form-control" name="active" id="active" v-model="status">
          <option value="0">Inactive</option>
          <option value="1">Active</option>
        </select>
      </div>
      <br />
      <div class="form-group col-md-6 firstname">
        <label for="image">Image</label>

        <input
          class="form-control-file required"
          required
          type="file"
          placeholder
          name="img"
          maxlength="50"
          id="img"
          @change="onFileChange"
        />
      </div>
      <br />
      <div class="custom-control custom-checkbox col-md-6 course_progress">
        <input
          type="checkbox"
          class="custom-control-input toggle_checkbox"
          placeholder
          name="course_progress"
          maxlength="50"
          data-toggle="course_progress_div"
          id="course_progress_checkbox"
          v-model="progress_based"
        />
        <label class="custom-control-label" for="course_progress_checkbox"
          >Progress Based</label
        >
      </div>
      <br />
      <div id="course_progress_div" v-if="isProgressBased">
        <InputGroup
          width="6"
          label="Progress Success Percentage"
          name="progress_success_percentage"
          :id="progress_success_percentage"
          type="Number"
          @progress_success_percentageChanged="
            progress_success_percentage = $event
          "
        />

        <InputSelectGroup
          width="6"
          label="Course Progress"
          name="course_progress"
          :id="course_progress"
          :array="['Multiplier', 'Fixed Points']"
          @course_progressChanged="course_progress = $event"
        />

        <InputGroup
          :id="course_progress_bonus_value"
          width="6"
          label="Course Progress Bonus Value"
          type="text"
          name="course_progress_bonus_value"
          @course_progress_bonus_valueChanged="
            course_progress_bonus_value = $event
          "
        />
      </div>
      <div class="custom-control custom-checkbox col-md-6 course_progress">
        <input
          type="checkbox"
          class="custom-control-input toggle_checkbox"
          name="attendence"
          maxlength="50"
          id="attendence_checkbox"
          v-model="attendance_based"
        />
        <label class="custom-control-label" for="attendence_checkbox"
          >Attendance Based</label
        >
      </div>
      <br />

      <br />
      <div id="attendence_div" v-if="isAttendanceBased">
        <InputGroup
          :id="attendence_success_number"
          width="6"
          label="Attendence Success Number"
          type="number"
          name="attendence_success_number"
          @attendence_success_numberChanged="attendence_success_number = $event"
        />
        <InputSelectGroup
          width="6"
          label="Attendence"
          name="attendance_bonus_type"
          :id="attendance_bonus_type"
          :array="['Multiplier', 'Fixed Points']"
          @attendance_bonus_typeChanged="attendance_bonus_type = $event"
        />
        <InputGroup
          :id="attendance_bonus_value"
          width="6"
          label="Attendence Bonus Value"
          type="number"
          name="attendance_bonus_value"
          @attendance_bonus_valueChanged="attendance_bonus_value = $event"
        />
      </div>

      <div class="clear"></div>
      <div class="form-group col-md-12">
        <b-button variant="primary" @click="$router.back()">
          Save
        </b-button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      progress_based: false,
      attendance_based: false,
      progress_success_percentage: null,
      course_progress: "",
      course_progress_bonus_value: "",
      attendence_success_number: null,
      attendance_bonus_type: "",
      attendance_bonus_value: "",
      image: null
    };
  },
  computed: {
    isProgressBased: function() {
      return this.progress_based;
    },
    isAttendanceBased: function() {
      return this.attendance_based;
    }
  },
  methods: {
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.image = files[0];
    },
    addChallenge() {
      const payload = {
        data: {
          type: "badges",
          attributes: {
            progress_based: this.progress_based,
            attendance_based: this.attendance_based,
            progress_success_percentage: this.progress_success_percentage,
            course_progress: this.course_progress,
            course_progress_bonus_value: this.course_progress_bonus_value,
            attendence_success_number: this.attendence_success_number,
            attendance_bonus_type: this.attendance_bonus_type,
            attendance_bonus_value: this.attendance_bonus_value,
            image: this.image
          }
        }
      };
    }
  },
  mounted: function() {
    if (!this.$store.state.modules.includes("navigator_mobile")) {
      throw new Error();
    }
    $("form").submit(false);
  }
};
</script>
