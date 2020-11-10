export const state = () => ({
  districts: [],
  closureTypes: ["Holiday", "Emergency", "Professional Development"],
  selectedSitedIds: []
});

export const getters = {
  districts: state => state.districts,
  closureTypes: state => state.closureTypes,
  selectedSitedIds: state => state.selectedSitedIds
};

export const mutations = {
  SET_DISTRICTS(state, districts) {
    state.districts = districts;
  },
  SET_SELECTED_SITES_ID(state, selectedSitedIds) {
    state.selectedSitedIds = selectedSitedIds;
  }
};

export const actions = {
  getDistricts({ commit }) {
    this.app.$axios.get("http://atlas-rebuild-api.mtcdevsite.com/api/v1/districts?include=sites").then(response => {
      let data = this.$formatter.deserialize(response.data);

      commit("SET_DISTRICTS", data);
    });
  },
  getSelectedSitedIds({ commit }, data) {
    let selectedSitedIds = data.val.map(
      siteName => data.sites.find(site => site.name === siteName).id
    );

    commit("SET_SELECTED_SITES_ID", selectedSitedIds);
  }
};
