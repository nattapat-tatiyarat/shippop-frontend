import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: false,
    cart: [],
    cartMap: new Map(),
  },
  mutations: {},
  actions: {},
  modules: {},
});
