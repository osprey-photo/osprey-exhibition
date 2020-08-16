import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./assets/sass/main.scss";
// import VuePictureSwipe from "vue-picture-swipe";

// Vue.component("vue-picture-swipe", VuePictureSwipe);
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
// import VueAwesomeSwiper from 'vue-awesome-swiper'

// // import style
// // import 'swiper/css/swiper.css'
// // If you use Swiper 6.0.0 or higher
// import 'swiper/swiper-bundle.css'

// Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

import PhotoSwipe from 'vue-photoswipe.js';
import 'vue-photoswipe.js/dist/static/css/photoswipe.css';
Vue.use(PhotoSwipe);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
