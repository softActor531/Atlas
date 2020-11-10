<template>
  <main>
    <div class="row mt-4">
      <div class="col-md-3">
        <Studentsidenav :student-id="noteProfile.student.id" />
      </div>
      <div class="col-md-9">
        <div class="row">
          <div class="col-md-8">
            <h1 class="mt-0">
              Note Details
            </h1>
          </div>
          <div class="col-md-4">
            <div class="page-title-right float-right mt-1">
              <label
                v-if="noteProfile.status === 'completed'"
                class="bg-success rounded text-white p-1"
              >
                {{
                  "Completed By " +
                    noteProfile.student.first_name +
                    " " +
                    noteProfile.student.last_name
                }}
              </label>
              <label
                v-else-if="noteProfile.status === 'cancelled'"
                class="bg-danger rounded text-white p-1"
              >
                {{
                  "Canceled By " +
                    noteProfile.student.first_name +
                    " " +
                    noteProfile.student.last_name
                }}
              </label>
              <button
                v-else
                class="btn btn-success waves-effect waves-light"
                @click="showModal = true"
              >
                <span class="btn-label">
                  <i class="fa fa-check-circle" />
                </span>
                Complete
              </button>
            </div>
          </div>
        </div>
        <div v-if="showModal">
          <transition name="modal">
            <div class="modal-mask">
              <div class="modal-wrapper">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title">
                        Modal title
                      </h5>
                      <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span
                          aria-hidden="true"
                          @click="showModal = false"
                        >&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <div class="modal-body">
                        <div class="form-group row">
                          <div class="col-sm-12 col-md-6">
                            <div class="radio radio-info form-check-inline">
                              <input
                                id="completeAction"
                                v-model="radio"
                                type="radio"
                                value="completed"
                                name="action"
                              >
                              <label for="completeAction">Complete Task</label>
                            </div>
                          </div>
                          <div class="col-sm-12 col-md-6">
                            <div class="radio radio-info form-check-inline">
                              <input
                                id="cancelAction"
                                v-model="radio"
                                type="radio"
                                value="cancelled"
                                name="action"
                              >
                              <label for="cancelAction">Cancel Task</label>
                            </div>
                          </div>
                        </div>
                        <div class="form-group row">
                          <label class="col-sm-12 col-md-3">
                            Date
                            <code>*</code>
                          </label>
                          <div class="col-sm-12 col-md-9">
                            <flat-pickr
                              v-model="following_date"
                              :config="calendarConfig"
                              class="date-picker form-control flatpickr-input"
                            />
                          </div>
                        </div>
                        <div class="form-group">
                          <at-ta
                            name-key="name"
                            value-key="id"
                            item-key="id"
                            membet-key="id"
                            :members="
                              users.map(user => {
                                return {
                                  name: `${user.first_name} ${user.last_name}`,
                                  id: user.id
                                };
                              })
                            "
                          >
                            <textarea
                              v-model="following_note"
                              contenteditable
                              name="note"
                              class="form-control p-1"
                              rows="10"
                              placeholder="Write notes here. Use @ to tag users."
                            />
                          </at-ta>
                        </div>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-primary"
                        @click="updateNote"
                      >
                        Save changes
                      </button>
                      <button
                        type="button"
                        class="btn btn-secondary"
                        @click="showModal = false"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </div>
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-sm-12 col-md-8">
                <div class="row mb-1">
                  <div class="col-sm-12 col-md-6">
                    <p class="text-muted mb-2 font-13">
                      <strong>Student Phase :</strong>
                      <span class="ml-2">{{ noteProfile.student_status && noteProfile.student_status.phase ? noteProfile.student_status.phase.name : '' }}</span>
                    </p>
                  </div>
                  <div class="col-sm-12 col-md-6">
                    <p class="text-muted mb-2 font-13">
                      <strong>Audience :</strong>
                      <span class="ml-2">{{ obj.audience }}</span>
                    </p>
                  </div>
                  <div class="col-sm-12 col-md-6">
                    <p class="text-muted mb-2 font-13">
                      <strong>Student Stage :</strong>

                      <span
                        class="ml-2"
                      >{{ noteProfile.student_status ? noteProfile.student_status.name : '' }}
                      </span>
                    </p>
                  </div>
                  <div class="col-sm-12 col-md-6">
                    <p class="text-muted mb-2 font-13">
                      <strong>Type :</strong>
                      <span class="ml-2">{{ obj.note_type }}</span>
                    </p>
                  </div>
                  <div class="col-sm-12 col-md-6">
                    <p class="text-muted mb-2 font-13">
                      <strong>Date :</strong>
                      <span class="ml-2">{{ date }}</span>
                    </p>
                  </div>
                  <div class="col-sm-12 col-md-6">
                    <p class="text-muted mb-2 font-13">
                      <strong>Time :</strong>
                      <span class="ml-2">{{ time }}</span>
                    </p>
                  </div>
                  <Fragment v-if="noteProfile.status === 'completed'">
                    <div class="col-sm-12 col-md-6">
                      <p class="text-muted mb-2 font-13">
                        <strong>Completion Date :</strong>
                        <span class="ml-2">{{
                          noteProfile.following_date
                        }}</span>
                      </p>
                    </div>
                    <div class="col-sm-12 col-md-6">
                      <p class="text-muted mb-2 font-13">
                        <strong>Completion Note :</strong>
                        <span class="ml-2">{{
                          getNote(noteProfile.following_note)
                        }}</span>
                      </p>
                    </div>
                  </Fragment>
                  <Fragment v-if="noteProfile.status === 'cancelled'">
                    <div class="col-sm-12 col-md-6">
                      <p class="text-muted mb-2 font-13">
                        <strong>Cancelation Date :</strong>
                        <span class="ml-2">{{
                          noteProfile.following_date
                        }}</span>
                      </p>
                    </div>
                    <div class="col-sm-12 col-md-6">
                      <p class="text-muted mb-2 font-13">
                        <strong>Cancelation Note :</strong>
                        <span class="ml-2">{{
                          getNote(noteProfile.following_note)
                        }}</span>
                      </p>
                    </div>
                  </Fragment>
                  <div class="col-sm-12">
                    <hr>
                  </div>
                </div>

                <p>{{ getNote(noteProfile.body) }}</p>
              </div>
              <div class="col col-md-4">
                <b-list-group flush>
                  <b-list-group-item class="align-items-center">
                    <b-avatar class="mr-3" />
                    <span class="mr-auto">{{
                      noteProfile.student.first_name +
                        " " +
                        noteProfile.student.last_name
                    }}</span>
                    <small class="ml-5">student</small>
                  </b-list-group-item>

                  <b-list-group flush>
                    <b-list-group-item class="align-items-center">
                      <b-avatar class="mr-3" />
                      <span class="mr-auto">{{
                        noteProfile.creator.first_name +
                          " " +
                          noteProfile.creator.last_name
                      }}</span>
                      <small class="ml-5">Created By</small>
                    </b-list-group-item>

                    <b-list-group flush>
                      <b-list-group-item class="align-items-center">
                        <b-avatar
                          square
                          variant="white"
                          src="https://dev.accelerationacademy.net/assets/images/category.png"
                          class="mr-3"
                        />
                        <span class="mr-auto">{{
                          noteProfile.category.name
                        }}</span>
                        <small class="ml-5">category</small>
                      </b-list-group-item>

                      <b-list-group flush>
                        <b-list-group-item class="align-items-center">
                          <b-avatar
                            square
                            variant="white"
                            src="https://dev.accelerationacademy.net/assets/images/su-category.png"
                            class="mr-3"
                          />
                          <span class="mr-auto">{{
                            noteProfile.sub_category.name
                          }}</span>
                          <small class="ml-5">sub-category</small>
                        </b-list-group-item>

                        <b-list-group flush>
                          <b-list-group-item class="align-items-center">
                            <b-avatar
                              square
                              variant="white"
                              src="https://dev.accelerationacademy.net/assets/images/descriptor.png"
                              class="mr-3"
                            />
                            <span class="mr-auto">{{
                              noteProfile.descriptor.name
                            }}</span>
                            <small class="ml-5">descriptor</small>
                          </b-list-group-item>
                        </b-list-group>

                        <b-list-group flush>
                          <b-list-group-item class="align-items-center">
                            <b-avatar
                              square
                              variant="white"
                              src="https://dev.accelerationacademy.net/assets/images/follow.png"
                              class="mr-3"
                            />
                            <span class="mr-auto">{{
                              noteProfile.action.name
                            }}</span>
                            <small class="ml-5">action</small>
                          </b-list-group-item>
                        </b-list-group>

                        <b-list-group flush>
                          <b-list-group-item class="align-items-center">
                            <b-avatar class="mr-3" />
                            <span class="mr-auto">{{
                              noteProfile.assignee.first_name +
                                " " +
                                noteProfile.assignee.last_name
                            }}</span>
                            <small class="ml-5">assigned to</small>
                          </b-list-group-item>
                        </b-list-group>

                        <b-list-group flush>
                          <b-list-group-item class="align-items-center">
                            <b-avatar
                              square
                              variant="white"
                              src="https://dev.accelerationacademy.net/assets/images/calendar-date.png"
                              class="mr-3"
                            />
                            <span class="mr-auto">{{
                              noteProfile.due_date
                            }}</span>
                            <small class="ml-5">due date</small>
                          </b-list-group-item>
                        </b-list-group>
                      </b-list-group>
                    </b-list-group>
                  </b-list-group>
                </b-list-group>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import moment from 'moment'
import flatPickr from 'vue-flatpickr-component'

import At from 'vue-at'
import AtTa from 'vue-at/dist/vue-at-textarea'
import { Fragment } from 'vue-fragment'
import Studentsidenav from '../../../components/student-view/studentsidenav.vue'

export default {
  name: 'Details',
  components: { Studentsidenav, flatPickr, At, AtTa, Fragment },
  async asyncData (context) {
    const noteProfile = await context.$api.getNoteProfile(context.params.id)
    const users = await context.$api.getUsers()

    return {
      noteProfile,
      users
    }
  },
  data () {
    return {
      radio: 'completed',
      following_note: '',
      following_date: '',
      calendarConfig: {
        minDate: new Date().getMonth() - 1,
        maxDate: 'today'
      },
      showModal: false,
      arr: [
        { key: '1', value: 'neiw' },
        { key: '2', value: 'neiw' },
        { key: '3', value: 'neiw' },
        { key: '4', value: 'neiw' },
        { key: '5', value: 'neiw' },
        { key: '6', value: 'neiw' },
        { key: '7', value: 'neiw' },
        { key: '8', value: 'neiw' },
        { key: '9', value: 'neiw' }
      ],
      obj: {},
      time: null,
      date: null
    }
  },
  created () {
    console.log(this.noteProfile)
  },
  mounted () {
    if (this.noteProfile) {
      this.obj = this.noteProfile
      this.time = moment(this.noteProfile.created_at).format('HH:mm')
      this.date = moment(this.noteProfile.created_at).format('MM/DD/YYYY')
    }
  },
  methods: {
    getNote (note) {
      let body = note
      for (const user of this.users) {
        body = body.replace(
          `[id:${user.id}, label:${user.first_name} ${user.last_name}]`,
          `@${user.first_name} ${user.last_name}`
        )
      }
      return body
    },
    updateNote () {
      let body = this.following_note

      for (const user of this.users) {
        body = body.replace(
          `@${user.first_name} ${user.last_name}`,
          `[id:${user.id}, label:${user.first_name} ${user.last_name}]`
        )
      }
      const payload = {
        type: 'notes',
        id: this.$route.params.id,
        attributes: {
          following_note: body,
          following_date: moment(this.following_date).format('MM/DD/YYYY'),
          status: this.radio,
          due_date: moment(this.noteProfile.due_date).format('MM/DD/YYYY')
        },
        relationships: {
          assignee: {
            data: {
              type: 'users',
              id: this.obj.assignee.id
            }
          },
          student: {
            data: {
              type: 'students',
              id: this.obj.student.id
            }
          }
        }
      }
      this.$api
        .updateNote(this.$route.params.id, payload)
        .then(async (data) => {
          console.log(data)

          // this.$router.push(`/students/details/${this.$route.params.id}`);
          const refreshedNote = await this.$api.getNoteProfile(this.$route.params.id)
          this.obj = refreshedNote
        })
        .catch((e) => {
          console.log(e)
        })
      this.showModal = false
      location.reload()
    }
  }
}
</script>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
</style>
