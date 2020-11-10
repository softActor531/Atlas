<template>
  <div class="">
    <div class="row">
      <div class="col-12">
        <div class="page-title-box">
          <h4 class="page-title">Notes</h4>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-md-12 left-to-right">
        <div class="card">
          <div class="card-body">
            <h4>Bulk Import Notes</h4>
            <nuxt-link to="#">Download Import Notes Template</nuxt-link>
            <VueDropify
              class="dropify-height mt-3"
              accept=".csv"
              message="Drop files here or click to upload"
              @upload="upload"
            />
            <div class="clearfix text-right mt-3">
              <button
                type="submit"
                class="btn btn-info waves-effect waves-light"
                @click="importNotes"
              >
                <i class="mdi mdi-send mr-1" /> Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueDropify from "vue-dropify";

import Api from "../../services/api/Api";

import Swal from "sweetalert2";

export default {
  components: {
    VueDropify
  },
  async asyncData(context) {
    const api = new Api(context);
    const token = await api.uploadFile1({ type: "student.notes" });

    return {
      api,
      token
    };
  },
  data() {
    return {
      files: []
    };
  },
  mounted() {
    if (!this.$store.state.modules.includes("case_management_notes")) {
      throw new Error();
    }
  },
  methods: {
    upload(event) {
      for (let file of event) {
        this.files.push(file);
      }
    },
    async importNotes() {
      for (let file of this.files) {
        const formData = new FormData();
        formData.append("file", file);
        this.api
          .uploadFile2(this.token.id, formData)
          .then(data => {
            const file_id = data[0].id;
            const payload = {
              type: "student.notes",
              attributes: { file: file_id }
            };
            this.api
              .importNotes(payload)
              .then(data => {
                console.log(data);
              })
              .catch(e => {
                console.log(e);
                Swal.fire({
                  icon: "error",
                  title: "Oops...",
                  text: `Import Notes failed!`
                });
              });
          })
          .catch(e => {
            console.log(e);
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: `Import Notes failed!`
            });
          });
      }
    }
  }
};
</script>
