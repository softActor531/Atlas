<template>
  <div class="card">
    <div class="card-body">
      <div class="row">
        <div class="col-lg-12">
          <FullCalendar :options="calendarOptions" />
        </div>
        <!-- end col -->
      </div>  <!-- end row -->
    </div> <!-- end card body-->
  </div>
</template>

<script>
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import resourceTimelinePlugin from '@fullcalendar/resource-timeline'

export default {
  name: 'Calendar',
  components: {
    FullCalendar
  },
  data () {
    return {
      calendarOptions: {
        schedulerLicenseKey: 'CC-Attribution-NonCommercial-NoDerivatives',
        plugins: [dayGridPlugin, interactionPlugin, resourceTimelinePlugin],
        initialView: 'dayGridMonth',
        dateClick: this.handleDateClick,
        headerToolbar: {
          start: 'prev,next today',
          center: 'title',
          end: 'dayGridDay,dayGridWeek,dayGridMonth'
        },
        events: [
          { title: 'event 1', date: '2020-09-16' },
          { title: 'event 2', date: '2020-09-17' }
        ]
      }
    }
  },
  methods: {
    handleDateClick (arg) {
      alert('date click! ' + arg.dateStr)
    }
  }
}
</script>
