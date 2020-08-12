import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Panels from "../views/Panels.vue";
import Gallery from "../views/Gallery.vue";
import Junior from "../views/Junior.vue";
import Catalog from "../views/Catalog.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/panels",
    name: "Panels",
    component: Panels
  },
  {
    path: "/gallery",
    name: "Gallery",
    component: Gallery
  },
  {
    path: "/catalog",
    name: "Catalog",
    component: Catalog
  },
  {
    path: "/junior",
    name: "Junior",
    component: Junior
  }
];

const router = new VueRouter({
  routes
});

export default router;
