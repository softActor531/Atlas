<template>
  <div class="app-search">
    <div class="app-search-box">
      <div class="input-group">
        <vue-typeahead-bootstrap
          v-model="query"
          :data="searchResults"
          :serializer="(item) => item.label"
          @input="search"
          input-class="form-control"
          :minMatchingChars="1"
          :maxMatches="70"
          @hit="pushToStudent"
        >
          <template slot="append">
            <button class="btn">
              <i class="fa fa-search" />
            </button>
          </template>
          <template slot="suggestion" slot-scope="{ data, htmlText }">
            <div class="d-flex align-items-center">
              <span
                @click="
                  $router.push({ path: `/student-contact/${data.entity_id}` })
                "
                v-html="htmlText"
              />
            </div>
          </template>
        </vue-typeahead-bootstrap>
      </div>
    </div>
  </div>
</template>

<script>
import VueTypeaheadBootstrap from "vue-typeahead-bootstrap";
import { debounce } from "lodash";

export default {
  components: {
    VueTypeaheadBootstrap,
  },
  data() {
    return {
      query: "",
      addressSearch: "",
      searchResults: [],
      selectedStudent: null,
    };
  },
  methods: {
    async search() {
      await this.$api.search(this.query).then((r) => {
        this.searchResults = r;
      });
    },

    pushToStudent(data) {
      this.$router.push(`/student-contact/${data.entity_id}`);
      console.log(data.entity_id)
    },
  },

  watch: {
    addressSearch: _.debounce(function (addr) {
      this.search(addr);
    }, 500),
  },
};
</script>

<style>
.app-search {
  overflow: auto !important;
  z-index: 50 !important;
}

.vbt-autcomplete-list {
  width: 250px !important;
}
</style>
