import Vue from "vue";
import Vuex from "vuex";
import imgdata from "../assets/data.json";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    entries: imgdata.entries,
    currentEntry: 0,
    favouriteEntry: []
  },
  getters: {
    getAll: function (state) {
      return state.entries;
    },
    isFavourite: (state) => (e) => {
      return state.favouriteEntry.includes(e);
    }
  },
  mutations: {
    setCurrent(state, entry) {
      state.currentEntry = entry;
    },
    addFavourite(state, favourite) {
      state.favouriteEntry.push(favourite);
    }
  },
  actions: {},
  modules: {}
});
