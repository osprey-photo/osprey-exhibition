//  Copyright Matthew B White 2020 All Rights Reserved.
//  SPDX-License-Identifier: Apache-2.0

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Buefy from "buefy";

Vue.use(Buefy);
import "./assets/sass/main.scss";

import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);

import PhotoSwipe from "vue-photoswipe.js";
import "vue-photoswipe.js/dist/static/css/photoswipe.css";
Vue.use(PhotoSwipe);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
