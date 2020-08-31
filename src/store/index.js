import Vue from "vue";
import Vuex from "vuex";
import data from './data.js';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    entries: data.entries,
    imgdata: data.imgdata,

    currentEntry: 0,
    favouriteEntry: [],
    live: false,
    showWiners: false
  },
  getters: {
    getAll: state => gallery => {
      console.log("Vuex getting gallery" + gallery);
      return state.entries
        .map(e => {
          return state.imgdata[e];
        })
        .filter(e => {
          return e.categories.filter(x => gallery.includes(x)).length > 0;
          // e.categories.includes(gallery)
        }
        );
    },
    isFavourite: state => id => {
      return state.favouriteEntry.includes(id);
    },
    isLive: state => state.live,
    showWiners: state => state.showWiners

  },
  mutations: {
    setCurrent(state, entry) {
      state.currentEntry = entry;
    },
    addFavourite(state, favouriteId) {
      state.favouriteEntry.push(favouriteId);
    },
    setLive(state) {
      state.isLive = true;
    },
    showWiners(state) {
      state.showWiners = true;
    }
  },
  actions: {},
  modules: {}
});
