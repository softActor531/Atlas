<template>
  <div class="card">
    <div class="card-body">
      <h4>Bulk Import Notes</h4>
      <a href="#">Download Import Notes Template</a>

      <VueFileAgent
        ref="vueFileAgent"
        v-model="fileRecords"
        :theme="'list'"
        :multiple="true"
        :deletable="true"
        :meta="true"
        :accept="'.csv, .png'"
        :max-size="'10MB'"
        :max-files="14"
        :help-text="'Choose csv files'"
        :error-text="{
          type: 'Invalid file type. Only csv Allowed',
          size: 'Files should not exceed 10MB in size',
        }"
        @select="filesSelected($event)"
        @beforedelete="onBeforeDelete($event)"
        @delete="fileDeleted($event)"
      />
      <button :disabled="!fileRecordsForUpload.length" @click="uploadFiles()">
        Upload {{ fileRecordsForUpload.length }} files
      </button>
      <!-- <Dropify v-model="file" :multiple="false" accept=".csv" @input="meow" /> -->
      <!-- <div class="clearfix text-right mt-3">
        <button type="submit" class="btn btn-info waves-effect waves-light">
          <i class="mdi mdi-send mr-1" /> Submit
        </button>
      </div> -->
    </div>
  </div>
</template>

<script>
// import Dropify from '../UI/Dropify'

export default {
  name: 'BulkContacts',
  components: {
    // Dropify
  },
  data () {
    return {
      fileRecords: [],
      uploadUrl: 'http://atlas-rebuild-api.mtcdevsite.com/api/v1/notes/bulk-upload',
      uploadHeaders: {},
      fileRecordsForUpload: []
    }
  },
  methods: {
    async uploadFiles () {
      /**
       * This sends for a token retrievement
       * @param token
       */
      const token = await this.$axios({
        method: 'POST',
        url: 'http://atlas-rebuild-api.mtcdevsite.com/api/v1/file-upload-tokens',
        headers: {
          Accept: 'application/vnd.api+json',
          'Content-Type': 'application/vnd.api+json'
        },
        data: { type: 'contact.import' }
      })

      /**
       * This updates the headers with token
       * @param uploadHeaders
       */
      this.uploadHeaders = {
        'X-FILE-UPLOAD-TOKEN': token.data.data.id,
        'Content-Type': 'multipart/form-data',
        Accept: 'application/vnd.api+json'
      }

      /**
       * This should upload file to temporary file upload to get ref
       * @param fileRes.id
       */

      const fileRes = await this.$axios({
        method: 'POST',
        url: 'http://atlas-rebuild-api.mtcdevsite.com/api/v1/temporary-files',
        headers: this.uploadHeaders, // returns err: { statusCode: 500 }
        data: this.fileRecordsForUpload[0].file
      })
        .then(res => console.log('done', res))
        .catch(err => console.log(err))

      console.log(this.fileRecordsForUpload[0].file)
      console.log('file id is: ', fileRes)

      /**
       * This sends the id captured to bulk upload
       * @param id
       */
      // await this.$axios({
      //   method: 'POST',
      //   url: this.uploadUrl,
      //   headers: this.uploadHeaders,
      //   data: {
      //     attrubutes: {
      //       file: {
      //         id: fileRes.id
      //       }
      //     }
      //   }
      // })
      //   .then(() => console.log('done!'))
      //   .catch(e => console.log(e))

      this.fileRecordsForUpload = []
    },
    deleteUploadedFile (fileRecord) {
      // Using the default uploader. You may use another uploader instead.
      this.$refs.vueFileAgent.deleteUpload(this.uploadUrl, this.uploadHeaders, fileRecord)
    },
    filesSelected (fileRecordsNewlySelected) {
      const validFileRecords = fileRecordsNewlySelected.filter(fileRecord => !fileRecord.error)
      this.fileRecordsForUpload = this.fileRecordsForUpload.concat(validFileRecords)
    },
    onBeforeDelete (fileRecord) {
      const i = this.fileRecordsForUpload.indexOf(fileRecord)
      if (i !== -1) {
        this.fileRecordsForUpload.splice(i, 1)
      } else if (confirm('Are you sure you want to delete?')) {
        this.$refs.vueFileAgent.deleteFileRecord(fileRecord) // will trigger 'delete' event
      }
    },
    fileDeleted (fileRecord) {
      const i = this.fileRecordsForUpload.indexOf(fileRecord)
      if (i !== -1) {
        this.fileRecordsForUpload.splice(i, 1)
      } else {
        this.deleteUploadedFile(fileRecord)
      }
    }
  }
}
</script>
