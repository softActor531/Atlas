<template>
  <component :is="wrapper" :card-title="parentTitle">
    <b-row>
      <b-col v-for="(widget, index) in cards" :key="`${widget.choice}${index}`" cols="3">
        <b-card
          header-bg-variant="secondary"
          header-text-variant="white"
          style="box-shadow: 0.2px 0.2px 8px; min-height: 230px;"
        >
          <template v-slot:header>
            <h6 v-if="!studentPlp" class="mb-0 text-white header-title">{{ widgetTitle }}</h6>
            <h6 v-if="studentPlp" class="mb-0 text-white header-title">{{ widget.choice }}</h6>
          </template>
          <b-card-text align-h="center" align-v="center" class="text-center">
            <Fragment v-if="!(studentPlp && widget.choice !== '')">
              <label>{{assessment ? 'Assessment' : 'Course'}} Name</label>
              <p :value="widget.choice">{{ widget.choice }}</p>
            </Fragment>
            <Fragment v-if="hasScore">
              <strong>Minimum Score</strong>
              <div>
                <input v-model="widget.score" class="form-control" type="number" disabled />
              </div>
            </Fragment>

            <Fragment v-if="assessment">
              <strong>Minimum Score</strong>
              <div>
                <input v-model="widget.score" class="form-control" type="number" disabled />
              </div>
              <b-checkbox v-model="widget.tier5" disabled>Tier 5</b-checkbox>
            </Fragment>

            <Fragment v-if="studentPlp">
              <label>Diploma Credits Earned</label>
              <p>{{ widget.earned_credit }}</p>
              <label>Completed With</label>
              <p>{{widget.completed_with}}</p>
            </Fragment>

            <b-form-file v-if="hasFileUpload" class="mt-3" plain />
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </component>
</template>

<script>
import { Fragment } from "vue-fragment";
import SelectInput from "./SelectInput.vue";
import SelectInput2 from "./SelectInput2.vue";
import Card from "./Card.vue";

export default {
  name: "CardWidget",
  components: { Card, SelectInput, SelectInput2, Fragment },
  props: {
    parentTitle: {
      type: String,
      default: "parentTitle"
    },
    widgetTitle: {
      type: String,
      default: ""
    },
    options: {
      type: Array,
      default: () => []
    },
    wrapper: {
      type: String,
      default: "div"
    },
    hasScore: {
      type: Boolean,
      default: false
    },
    hasFileUpload: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ""
    },
    chosenCards: {
      type: Array,
      default: () => []
    },
    studentPlp: {
      type: Boolean,
      default: false
    },
    assessment: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    cards: [],
    creditOptions: [0, 0.125, 0.25, 0.375, 0.5, 0.625, 0.75, 0.875, 1],
    completedWith: ["District", "AA"]
  }),
  mounted() {
    for (let c of this.chosenCards) {
      if (this.hasScore) {
        this.cards.push({
          options: this.options,
          choice: c.choice,
          score: c.score,
          other: ""
        });
      } else if (this.assessment) {
        this.cards.push({
          options: this.options,
          choice: c.choice,
          score: c.score,
          tier5: c.tier5,
          other: ""
        });
      } else if (this.hasFileUpload) {
        this.cards.push({
          options: this.options,
          choice: c.choice,
          file: c.file,
          other: ""
        });
      } else if (this.studentPlp) {
        this.cards.push({
          options: this.options,
          choice: c.choice,
          earned_credit: c.earned_credit,
          completed_with: c.completed_with,
          other: ""
        });
      } else {
        this.cards.push({
          options: this.options,
          choice: c,
          other: ""
        });
      }
    }
  },
  watch: {
    chosenCards: function(newVal, oldVal) {
      this.cards = [];
      for (const c of newVal) {
        if (this.hasScore) {
          this.cards.push({
            options: this.options,
            choice: c.choice,
            score: c.score,
            other: c.other
          });
        } else if (this.assessment) {
          this.cards.push({
            options: this.options,
            choice: c.choice,
            score: c.score,
            tier5: c.tier5,
            other: c.other
          });
        } else if (this.hasFileUpload) {
          this.cards.push({
            options: this.options,
            choice: c.choice,
            file: c.file,
            other: c.other
          });
        } else if (this.studentPlp) {
          this.cards.push({
            options: this.options,
            choice: c.choice,
            earned_credit: c.earned_credit,
            completed_with: c.completed_with,
            other: c.other
          });
        } else {
          this.cards.push({
            options: this.options,
            choice: c.choice,
            other: c.other
          });
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
