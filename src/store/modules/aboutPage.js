
import { SET_ABOUT_DATA_STATE } from "../mutation_types";
// initial state
// store.state 来获取状态对象，以及通过 store.commit 方法触发状态变更
const state = () => ({
  aboutData:{}
})
// getters
const getters = {
  homeData: (state) => {
    state.aboutData;
  },
}
// actions
const actions = {
  ACTION_ABOUT_DATA_STATE({ commit }, param) {
    console.log("aboutData_mutations", param);
    commit(SET_ABOUT_DATA_STATE, param);
  }
};
// mutations
const mutations = {
  [SET_ABOUT_DATA_STATE](state, data) {
    console.log("aboutData_mutations", data);
    state.aboutData = data;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}