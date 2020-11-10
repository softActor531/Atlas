<template>
  <div>
    <h1 class="pt-0 pb-1 mt-0">On-Site Hours</h1>
    <div class="card">
      <div class="card-body">
        <div class="row">
          <h2 class="col-md-6 mt-0">
            <i class="mdi mdi-clock mr-1 text-primary" /> Site Schedule
          </h2>
          <div v-show="showTable" class="col-md-6">
            <div class="form-group float-right">
              <input
                id="allow_schedule_blocks"
                v-model="showScheduleBlock"
                type="checkbox"
                name="allow_schedule_blocks"
                value="1"
              />
              <label for="allow_schedule_blocks">Set Schedule Blocks</label>
            </div>
          </div>
        </div>
        <div class="row my-3">
          <div class="col-md-6">
            <label>Districts</label>
            <select2 v-model="district" :options="districts" />
          </div>
          <div class="col-md-6">
            <label>Sites</label>
            <select2 v-model="site" :options="getSites" />
          </div>
        </div>
        <div v-if="showTable">
          <FormTable :week="primaryDays" keyV="primary" />
        </div>
      </div>
    </div>
    <div v-if="showTable">
      <div v-if="showScheduleBlock" class="card mt-4">
        <div class="card-header bg-white">
          <h4 class="float-left">
            <i class="mdi mdi-clock mr-1 text-primary" />
            Schedule Blocks
          </h4>
          <div class="float-right">
            <button class="btn btn-blue add-schedule-block" type="button" @click="createBlock">
              <i class="mdi mdi-plus-box-outline" /> Add New Schedule Block
            </button>
          </div>
        </div>
        <div class="card-body">
          <div v-for="(day, index) in days" :key="'second'+index">
            <h4>Schedule Block {{ alpha[index] }}</h4>
            <FormTable :week="days[index]" :keyV="'second'+index" />
            <div class="text-center mb-3" v-if="index > 1">
              <button
                type="button"
                class="btn btn-danger w-100 remove-schedule-block"
                @click="removeBlock(index)"
              >
                <i class="mdi mdi-close-circle-outline" /> Remove
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-footer bg-white text-center">
          <button class="btn btn-success" type="button" @click="onSubmit">
            <i class="mdi mdi-content-save-all" /> Save
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Select2 from "v-select2-component";
import FormTable from "./Form-table";
import Api from "@/services/api/Api.js";

export default {
  name: "Form",
  components: {
    FormTable,
    Select2
  },

  props: {
    districts: Array,
    districtList: Array
  },
  data() {
    return {
      choice: "",
      choice2: "",
      activate: false,
      bethal: "",
      district: null,
      site: null,
      showScheduleBlock: false,
      alpha: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"],
      primaryDays: {
        sat: {
          from: null,
          to: null
        },
        sun: {
          from: null,
          to: null
        },
        mon: {
          from: "14:00",
          to: "16:00"
        },
        tue: {
          from: "14:00",
          to: "16:00"
        },
        wed: {
          from: "14:00",
          to: "16:00"
        },
        thu: {
          from: "14:00",
          to: "16:00"
        },
        fri: {
          from: "14:00",
          to: "16:00"
        }
      },
      days: []
    };
  },
  created() {
    for (let i = 0; i < 2; i++) {
      this.days.push({
        sat: {
          from: null,
          to: null
        },
        sun: {
          from: null,
          to: null
        },
        mon: {
          from: "14:00",
          to: "16:00"
        },
        tue: {
          from: "14:00",
          to: "16:00"
        },
        wed: {
          from: "14:00",
          to: "16:00"
        },
        thu: {
          from: "14:00",
          to: "16:00"
        },
        fri: {
          from: "14:00",
          to: "16:00"
        }
      });
    }
  },
  computed: {
    showTable() {
      if ((this.district !== null) & (this.site !== null)) {
        return true;
      }
      return false;
    },
    getSites() {
      if (this.district === null) {
        return [];
      } else {
        let sites = this.districtList
          .find(item => item.id === this.district)
          .sites.map(item => {
            return {
              id: item.id,
              text: item.name
            };
          });
        sites.unshift({ id: null, text: "--Select Site--" });
        return sites;
      }
    }
  },
  methods: {
    createBlock() {
      this.days.push({
        sat: {
          from: null,
          to: null
        },
        sun: {
          from: null,
          to: null
        },
        mon: {
          from: "14:00",
          to: "16:00"
        },
        tue: {
          from: "14:00",
          to: "16:00"
        },
        wed: {
          from: "14:00",
          to: "16:00"
        },
        thu: {
          from: "14:00",
          to: "16:00"
        },
        fri: {
          from: "14:00",
          to: "16:00"
        }
      });
    },

    removeBlock(index) {
      this.days = this.days.filter((_, i) => i !== index);
    },

    async onSubmit() {
      const payload = {
        type: "schedule-blocks",
        attributes: {
          days: this.primaryDays,
          primary: 1
        },
        relationships: {
          site: {
            data: { type: "sites", id: this.site }
          }
        }
      };
      this.$axios
        .post(
          "http://atlas-rebuild-api.mtcdevsite.com/api/v1/schedule-blocks",
          {
            data: payload
          },
          {
            headers: {
              Accept: "application/vnd.api+json",
              "Content-Type": "application/vnd.api+json"
            }
          }
        )
        .then(data => {
          console.log(data);
        })
        .catch(e => {
          console.log(e.response);
        });
      if (this.showScheduleBlock) {
        for (let day of this.days) {
          const secondaryPayload = {
            type: "schedule-blocks",
            attributes: {
              days: day,
              primary: 0
            },
            relationships: {
              site: {
                data: { type: "sites", id: this.site }
              }
            }
          };
          this.$axios
            .post(
              "http://atlas-rebuild-api.mtcdevsite.com/api/v1/schedule-blocks",
              {
                data: secondaryPayload
              },
              {
                headers: {
                  Accept: "application/vnd.api+json",
                  "Content-Type": "application/vnd.api+json"
                }
              }
            )
            .then(data => {
              console.log(data);
            })
            .catch(e => {
              console.log(e.response);
            });
        }
      }
    }
  },
  head: {
    script: [
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"
      }
    ]
  }
};
</script>
<style>
</style>
