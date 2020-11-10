export const state = () => ({
  initialData: {},
  contact: {}
});

export const getters = {
  contact: state => state.contact,
  initialData: state => state.initialData
};

export const mutations = {
  SET_CONTACT(state, contact) {
    state.contact = contact;
  },
  SET_INITIAL_DATA(state, initialData) {
    state.initialData = initialData;
  }
};

export const actions = {
  async getInitialData({ commit }) {
    commit("SET_INITIAL_DATA", {
      phases: await $nuxt.$api.getPhases(),
      statuses: await $nuxt.$api.getStatuses(),
      districts: await $nuxt.$api.getDistricts(),
      sites: await $nuxt.$api.getSites(),
      advocates: await $nuxt.$api.getUsers(),
      communityAdvocates: await $nuxt.$api.getUsers(),
      cohortYears: await $nuxt.$api.getCohortYears(),
      gradeLevels: await $nuxt.$api.getLastGrades(),
      priorities: await $nuxt.$api.getPriorities()
    });
  },
  async getContactData({ commit }, contactId) {
    let contact = contactId ? await $nuxt.$api.getContact(contactId) : "";
    commit("SET_CONTACT", contact);
  }
};
