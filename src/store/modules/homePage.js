
import { SET_HOME_DATA_STATE } from "../mutation_types";

// initial state
const state = () => ({
  homeData:{}
})

// getters
const getters = {
  homeData: (state) => {
    state.homeData;
  },
}

// actions
const actions = {
  ACTION_HOME_DATA_STATE({ commit }, param) {
    // console.log("homeData_mutations", param);
    commit(SET_HOME_DATA_STATE, param);
  }
};

// mutations
const mutations = {
  [SET_HOME_DATA_STATE](state, data) {
    // console.log("homeData_mutations", data);
    state.homeData = data;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}