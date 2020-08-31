import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Beta from "../views/Beta.vue";
import Gallery from "../views/Gallery.vue";
import Junior from "../views/Junior.vue";
import Catalog from "../views/Catalog.vue";
import Guestbook from "../components/Guestbook.vue";
import TiledGallery from "../components/TiledGallery.vue"
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/beta",
    name: "Beta",
    component: Beta
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
    component: Junior,
    props: { gallery: 'junior' }
  },
  {
    path: "/guestbook",
    name: "Guestbook",
    component: Guestbook
  },
  { path: '/panels/:category', name:'Panels', component: TiledGallery }
];

const router = new VueRouter({
  routes
});

export default router;
