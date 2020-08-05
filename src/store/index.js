
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import homePage from "./modules/homePage";
import aboutPage from "./modules/aboutPage";


export default new Vuex.Store({
  strict: process.env.NODE_ENV !== "production",
  modules: {
    homePage,
    aboutPage
  }
});