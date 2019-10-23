import Vue from "vue";
import Vuex from "vuex";
import createLogger from "vuex/dist/logger";
import { gridModule } from "./grid";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { gridModule },
  plugins: process.env.NODE_ENV !== 'production' ? [createLogger()] : []
});
