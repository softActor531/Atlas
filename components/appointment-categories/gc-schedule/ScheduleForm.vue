<template>
  <b-card>
    <b-row>
      <b-col cols="4">
        <VSelectGroup
          id="gcs"
          label="gcs"
          placeholder="Choose GC"
          :options="gcs"
          :selected="gc"
          required
          @gcsChanged="handleChange('scheduleForm', `gcs`, $event)"
        />
      </b-col>

      <b-col>
        <b-form-group label="Appointment Type">
          <b-form-radio v-model="typeOption" name="Appointment" value="on_site">
            On Site
          </b-form-radio>
          <b-form-radio v-model="typeOption" name="Appointment" value="virtual">
            Virtual
          </b-form-radio>
        </b-form-group>
      </b-col>

      <b-col>
        <b-form-group label=" What are you looking to schedule? ">
          <b-form-radio v-model="taskOption" name="task" value="meet">
            I want to meet with...
          </b-form-radio>
          <b-form-radio v-model="taskOption" name="task" value="come">
            I want to come in on...
          </b-form-radio>
          <b-form-radio v-model="taskOption" name="task" value="work">
            I want to work on...
          </b-form-radio>
        </b-form-group>
      </b-col>

      <b-col cols="12">
        <VSelectGroup
          id="appointCat"
          label="Appointment Categories"
          placeholder="Choose GC"
          :options="appointCats"
          :selected="appointment"
          required
          @appointCatChanged="handleChange('scheduleForm', `appointCat`, $event)"
        />
      </b-col>

      <b-col>
        <FullCalendar :options="calendarOptions" />
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import { ValidateInputMixin } from '~/mixin/validateInput'
import FullCalendar from "@fullcalendar/vue";
import dayGridPlugin from "@fullcalendar/daygrid";
// import timeGridPlugin from "@fullcalendar/timegrid";
// import listPlugin from "@fullcalendar/list";
// import interactionPlugin from "@fullcalendar/interaction";

export default {
  name: 'ScheduleForm',
  mixins: [ValidateInputMixin],
  components: {
    FullCalendar
  },
  props: {
    gcs: Array,
    form: Object,
    appointCats: Array
  },
  data () {
    return {
      ...this.form,
      calendarOptions: {
        plugins: [dayGridPlugin],
        headerToolbar: {
          // left: "prev,next today",
          // center: "title",
          // right: "dayGridMonth,timeGridWeek,timeGridDay,list"
        },
        initialView: 'dayGridWeek',
        weekends: false // initial value
      },
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
