import Vue from "vue";
import Vuex from "vuex";
import data from './data.js';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    entries: data.entries,
    imgdata: data.imgdata,

    currentEntry: 0,
    favouriteEntry: []
  },
  getters: {
    getAll: state => gallery => {
      console.log("Vuex getting gallery" + gallery);
      return state.entries
        .map(e => {
          return state.imgdata[e];
        })
        .filter(e => e.categories.includes(gallery));
    },
    isFavourite: state => id => {
      return state.favouriteEntry.includes(id);
    }
  },
  mutations: {
    setCurrent(state, entry) {
      state.currentEntry = entry;
    },
    addFavourite(state, favouriteId) {
      state.favouriteEntry.push(favouriteId);
    }
  },
  actions: {},
  modules: {}
});
