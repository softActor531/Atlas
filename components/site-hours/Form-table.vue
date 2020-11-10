<template>
  <div class="table-responsive my-4 times-table" data-index="0" data-select2-id="218">
    <table class="basic-table full-width">
      <thead>
        <tr>
          <th v-for="(day, i) in filterDays" :key="i">{{ day }}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <TimeSelect
              :from="days['sun']['from']"
              :to="days['sun']['to']"
              :key="keyV"
              day="sun"
              @handleSelect="handleSelect($event)"
            />
          </td>
          <td>
            <TimeSelect
              :from="days['mon']['from']"
              :to="days['mon']['to']"
              :key="keyV"
              day="mon"
              repeat
              @handleSelect="handleSelect($event)"
              @repeatWeek="repeatWeek($event)"
            />
          </td>
          <td>
            <TimeSelect
              :from="days['tue']['from']"
              :to="days['tue']['to']"
              :key="keyV"
              day="tue"
              repeat
              @handleSelect="handleSelect($event)"
              @repeatWeek="repeatWeek($event)"
            />
          </td>
          <td>
            <TimeSelect
              :from="days['wed']['from']"
              :to="days['wed']['to']"
              day="wed"
              repeat
              @handleSelect="handleSelect($event)"
              @repeatWeek="repeatWeek($event)"
            />
          </td>
          <td>
            <TimeSelect
              :from="days['thu']['from']"
              :to="days['thu']['to']"
              day="thu"
              repeat
              @handleSelect="handleSelect($event)"
              @repeatWeek="repeatWeek($event)"
            />
          </td>
          <td>
            <TimeSelect
              :from="days['fri']['from']"
              :to="days['fri']['to']"
              day="fri"
              repeat
              @handleSelect="handleSelect($event)"
              @repeatWeek="repeatWeek($event)"
            />
          </td>
          <td>
            <TimeSelect
              :from="days['sat']['from']"
              :to="days['sat']['to']"
              day="sat"
              @handleSelect="handleSelect($event)"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import TimeSelect from "./FormTimeSelect";
import moment from "moment";

export default {
  name: "FormTable",
  props: {
    week: Object,
    keyV: String
  },
  components: {
    TimeSelect
  },
  data() {
    return {
      days: this.week
    };
  },
  methods: {
    repeatWeek($event) {
      const { from, to } = $event;
      Object.keys(this.days).forEach((day, i) => {
        if (day !== "sun" && day !== "sat" && day !== "fri") {
          this.days[day]["from"] = from;
          this.days[day]["to"] = to;
        }

        if (day === "fri") {
          this.days[day]["from"] = from;
        }
      });
    },

    handleSelect($event) {
      const { type, value, day } = $event;
      this.days[day][type] = value;
    }
  },
  computed: {
    filterDays() {
      const days = [
        "sunday",
        "monday",
        "tuesday",
        "wednsday",
        "thursday",
        "friday",
        "saturday"
      ];

      for (const i in days) {
        days[i] = moment(new Date())
          .add(i, "days")
          .format("ddd D/MM");
      }

      return days;
    }
  }
};
</script>

<style scoped>
.basic-table {
  padding: 5px;
}
.basic-table tbody tr td,
.basic-table thead tr th {
  border: 1px solid #ada8a845;
}
th {
  padding: 10px;
}
td {
  padding: 20px 10px;
  width: 100px;
}
.form-group button {
  width: 140px;
  padding: 10px 0;
  margin-left: 11%;
}

td:first-child,
td:last-child {
  padding: 10px;
}
td .form-group {
  width: 160px;
}
</style>
