<template>
  <component :is="wrapper" :card-title="parentTitle">
    <b-row>
      <b-col
        v-for="(widget, index) in cards"
        :key="`${widget.choice}${index}`"
        cols="4"
      >
        <b-card
          header-bg-variant="secondary"
          header-text-variant="white"
          style="box-shadow: 0.2px 0.2px 8px; min-height: 230px"
        >
          <template v-slot:header>
            <h6 v-if="!studentPlp" class="mb-0 text-white header-title">
              {{ widgetTitle }}
            </h6>
            <h6 v-if="studentPlp" class="mb-0 text-white header-title">
              {{ widget.choice }}
            </h6>
          </template>
          <b-card-text align-h="center" align-v="center" class="text-center">
            <Fragment v-if="!(studentPlp && widget.choice !== '')">
              <label
                >{{
                  assessment ? "Assessment" : type ? "Type" : "Course"
                }}
                Name</label
              >
              <SelectInput
                placeholder="-- Select --"
                :items="widget.options.concat(['Other'])"
                :value="widget.choice"
                :index="index"
                @notifyParent="notifyParent"
                @[eventname(index)]="widget.choice = $event"
              />
              <b-input
                v-model="widget.other"
                v-if="widget.choice === 'Other'"
                @change="notifyParent"
              />
            </Fragment>
            <Fragment v-if="hasScore">
              <strong>Minimum Score</strong>
              <div>
                <input
                  v-model="widget.score"
                  class="form-control"
                  type="number"
                  @change="notifyParent"
                />
              </div>
            </Fragment>

            <Fragment v-if="assessment">
              <strong>Minimum Score</strong>
              <div>
                <input
                  v-model="widget.score"
                  class="form-control"
                  type="number"
                  @change="notifyParent"
                />
              </div>
              <b-checkbox v-model="widget.tier5" @input="notifyParent"
                >Tier 5</b-checkbox
              >
            </Fragment>

            <Fragment v-if="studentPlp">
              <label>Diploma Credits Earned</label>
              <SelectInput
                placeholder="-- Select --"
                :items="creditOptions"
                :value="widget.earned_credit"
                :index="index"
                @notifyParent="notifyParent"
                @[eventname(index)]="widget.earned_credit = $event"
              />
              <label>Completed With</label>
              <SelectInput
                placeholder="-- Select --"
                :items="completedWith"
                :value="widget.completed_with"
                :index="index"
                @notifyParent="notifyParent"
                @[eventname(index)]="widget.completed_with = $event"
              />
            </Fragment>

            <b-form-file
              v-if="hasFileUpload"
              class="mt-3"
              plain
              @change="onFileChange($event, index)"
            />
            <Fragment v-if="!(studentPlp && widget.choice !== '')">
              <b-button
                class="mt-2"
                size="sm"
                variant="primary"
                @click="removeArr(index)"
              >
                <i class="fas fa-trash mr-2" />
                Remove
              </b-button>
            </Fragment>
          </b-card-text>
        </b-card>
      </b-col>

      <b-col cols="3">
        <b-card
          header-bg-variant="secondary"
          header-text-variant="white"
          style="box-shadow: 0.2px 0.2px 8px; height: 230px"
        >
          <template v-slot:header>
            <h6 class="mb-0 text-white header-title">{{ widgetTitle }}</h6>
          </template>
          <b-row tag="b-card-text" align-h="center" align-v="center">
            <b-button href="#" variant="light" @click="openNew">
              <i class="fas fa-plus fa-5x text-secondary" />
            </b-button>
          </b-row>
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
      default: "parentTitle",
    },
    widgetTitle: {
      type: String,
      default: "",
    },
    options: {
      type: Array,
      default: () => [],
    },
    wrapper: {
      type: String,
      default: "div",
    },
    hasScore: {
      type: Boolean,
      default: false,
    },
    hasFileUpload: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      default: "",
    },
    chosenCards: {
      type: Array,
      default: () => [],
    },
    studentPlp: {
      type: Boolean,
      default: false,
    },
    assessment: {
      type: Boolean,
      default: false,
    },
    type: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    cards: [],
    creditOptions: [0, 0.125, 0.25, 0.375, 0.5, 0.625, 0.75, 0.875, 1],
    completedWith: ["District", "AA"],
  }),
  mounted() {
    for (let c of this.chosenCards) {
      if (this.hasScore) {
        this.cards.push({
          options: this.options,
          choice: c.choice,
          score: c.score,
          other: "",
        });
      } else if (this.assessment) {
        this.cards.push({
          options: this.options,
          choice: c.choice,
          score: c.score,
          tier5: c.tier5,
          other: "",
        });
      } else if (this.hasFileUpload) {
        this.cards.push({
          options: this.options,
          choice: c.choice,
          file: c.file,
          other: "",
        });
      } else if (this.studentPlp) {
        this.cards.push({
          options: this.options,
          choice: c.choice,
          earned_credit: c.earned_credit,
          completed_with: c.completed_with,
          other: "",
        });
      } else {
        this.cards.push({
          options: this.options,
          choice: c,
          other: "",
        });
      }
    }
  },
  watch: {
    chosenCards: function (newVal, oldVal) {
      this.cards = [];
      for (const c of newVal) {
        if (this.hasScore) {
          this.cards.push({
            options: this.options,
            choice: c.choice,
            score: c.score,
            other: c.other,
          });
        } else if (this.assessment) {
          this.cards.push({
            options: this.options,
            choice: c.choice,
            score: c.score,
            tier5: c.tier5,
            other: c.other,
          });
        } else if (this.hasFileUpload) {
          this.cards.push({
            options: this.options,
            choice: c.choice,
            file: c.file,
            other: c.other,
          });
        } else if (this.studentPlp) {
          this.cards.push({
            options: this.options,
            choice: c.choice,
            earned_credit: c.earned_credit,
            completed_with: c.completed_with,
            other: c.other,
          });
        } else {
          this.cards.push({
            options: this.options,
            choice: c,
            other: "",
          });
        }
      }
    },
  },
  methods: {
    eventname(index) {
      return `choice${index}Changed`;
    },
    openNew() {
      if (this.hasScore) {
        this.cards.push({
          options: this.options,
          choice: "",
          score: "",
          other: "",
        });
      } else if (this.assessment) {
        this.cards.push({
          options: this.options,
          choice: "",
          score: "",
          tier5: false,
          other: "",
        });
      } else if (this.hasFileUpload) {
        this.cards.push({
          options: this.options,
          choice: "",
          file: null,
          other: "",
        });
      } else if (this.studentPlp) {
        this.cards.push({
          options: this.options,
          choice: "",
          earned_credit: 0,
          completed_with: null,
          other: "",
        });
      } else {
        this.cards.push({ options: this.options, choice: "", other: "" });
      }
    },
    notifyParent() {
      if (this.hasScore) {
        this.$emit(
          `${this.name}Updated`,
          this.cards.map((element) => {
            return {
              choice: element.choice,
              score: element.score,
              other: element.other,
            };
          })
        );
      } else if (this.assessment) {
        this.$emit(
          `${this.name}Updated`,
          this.cards.map((element) => {
            return {
              choice: element.choice,
              score: element.score,
              tier5: element.tier5,
              other: element.other,
            };
          })
        );
      } else if (this.hasFileUpload) {
        this.$emit(
          `${this.name}Updated`,
          this.cards.map((element) => {
            return {
              file: element.file,
              choice: element.choice,
              other: element.other,
            };
          })
        );
      } else if (this.studentPlp) {
        this.$emit(
          `${this.name}Updated`,
          this.cards.map((element) => {
            return {
              earned_credit: element.earned_credit,
              choice: element.choice,
              completed_with: element.completed_with,
              other: element.other,
            };
          })
        );
      } else if (this.hasFileUpload && this.hasScore) {
        this.$emit(
          `${this.name}Updated`,
          this.cards.map((element) => {
            return {
              choice: element.choice,
              score: element.score,
              file: element.file,
              other: element.other,
            };
          })
        );
      } else {
        this.$emit(
          `${this.name}Updated`,
          this.cards.map((element) => {
            return { choice: element.choice, other: element.other };
          })
        );
      }
    },
    removeArr(index) {
      const element = this.cards[index];
      this.cards.splice(this.cards.indexOf(element), 1);
      this.notifyParent();
    },
    onFileChange(e, index) {
      var files = e.target.files || e.dataTransfer.files;
      this.cards[index].file = files[0];
      this.notifyParent();
    },
  },
};
</script>

<style lang="scss" scoped></style>
