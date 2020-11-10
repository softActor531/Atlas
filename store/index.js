import cookies from "js-cookie";
import createPersistedState from "vuex-persistedstate";

// import cookieParser from "cookie-parser";

export const state = () => ({
  token: null,
  reserve_token: null,
  user: null,
  tenant_id: null,
  can_edit: 0,
  permissions: [],
  modules: [
    "dashboard",
    "reports",
    "student_profile_management",
    "plp",
    "courseware_integration",
    "graduation_calculator",
    "automated_workflow",
    "scheduling",
    "document_storage",
    "case_management_notes",
    "compass_web",
    "compass_mobile",
    "navigator_mobile"
  ],
  fields: null
});

export const getters = {
  getToken: state => state.token,
  getPermissions: state => state.permissions
};

export const mutations = {
  SET_TOKEN(state, token) {
    state.token = token;
  },
  SET_RESERVE_TOKEN(state, token) {
    state.reserve_token = token;
  },
  USE_RESERVE_TOKEN(state) {
    state.token = state.reserve_token;
  },
  REMOVE_RESERVE_TOKEN(state) {
    state.reserve_token = null;
  },
  REMOVE_TOKEN(state) {
    state.token = null;
  },
  SET_TENANT_ID(state, id) {
    state.tenant_id = id;
  },
  ASSIGN_PERMISSIONS(state, permissions) {
    state.permissions = permissions;
  },
  REMOVE_PERMISSIONS(state) {
    state.permissions = [];
  },
  ASSIGN_MODULES(state, modules) {
    state.modules = modules;
  },
  REMOVE_MODULES(state) {
    state.modules = [];
  },
  ASSIGN_FIELDS(state, fields) {
    state.fields = fields;
  },
  REMOVE_FIELDS(state) {
    state.fields = [];
  },
  CAN_EDIT(state, can_edit) {
    state.can_edit = can_edit;
  },
  REMOVE_EDIT(state) {
    state.can_edit = 0;
  },
  SET_USER(state, user) {
    state.user = user;
  },
  REMOVE_USER(state) {
    state.user = null;
  }
};

export const actions = {
  setToken({
    commit
  }, {
    access_token,
    expiresIn
  }) {
    this.$axios.setToken(access_token, "Bearer");
    const expiryTime = new Date(new Date().getTime() + expiresIn * 1000);
    cookies.set("x-access-token", access_token, {
      expires: expiryTime
    });
    commit("SET_TOKEN", access_token);
  },

  setReserveToken({
    commit
  }, access_token) {
    commit("SET_RESERVE_TOKEN", access_token);
  },

  setTenantId({
    commit
  }, id) {
    commit("SET_TENANT_ID", id);
  },

  useReserveToken({
    commit
  }) {
    commit("USE_RESERVE_TOKEN");
  },

  getTokenFromCookie({
    commit
  }, savedToken) {
    commit("SET_TOKEN", savedToken);
  },

  async refreshToken({
    dispatch
  }) {
    const {
      access_token,
      expiresIn
    } = await this.$axios.$post(
      "refresh-token"
    );
    dispatch("setToken", {
      access_token,
      expiresIn
    });
  },

  async refreshToken({
    dispatch
  }) {
    const {
      access_token,
      expiresIn
    } = await this.$axios.$post(
      "refresh-token"
    );
    dispatch("setToken", {
      access_token,
      expiresIn
    });
  },

  fetchUserPermissions({
    commit
  }, permissions) {
    commit("ASSIGN_PERMISSIONS", permissions);
  },

  fetchTenantModules({
    commit
  }, modules) {
    commit("ASSIGN_MODULES", modules);
  },

  fetchTenantFields({
    commit
  }, fields) {
    commit("ASSIGN_FIELDS", fields);
  },

  can_edit({
    commit
  }, can_edit) {
    commit("CAN_EDIT", can_edit);
  },

  setUser({
    commit
  }, user) {
    commit("SET_USER", user);
  },

  logout({
    commit
  }) {
    if (!process.server) {
      cookies.remove("x-access-token");
      commit("REMOVE_TOKEN");
      commit("REMOVE_RESERVE_TOKEN");
      commit("REMOVE_USER");
      commit("REMOVE_PERMISSIONS");
      commit("REMOVE_MODULES");
      commit("REMOVE_FIELDS");
      commit("REMOVE_EDIT");
      this.$axios.setToken(false);
    }
  },

  superLogout({
    commit
  }) {
    if (!process.server) {
      commit("USE_RESERVE_TOKEN");
      commit("REMOVE_USER");
      commit("REMOVE_PERMISSIONS");
      commit("REMOVE_MODULES");
      commit("REMOVE_FIELDS");
      commit("REMOVE_EDIT");
    }
  }
};
