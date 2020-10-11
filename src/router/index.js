//  Copyright Matthew B White 2020 All Rights Reserved.
//  SPDX-License-Identifier: Apache-2.0

import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Gallery from "../views/Gallery.vue";
import Junior from "../views/Junior.vue";
import Catalog2 from "../views/Catalog2.vue";
import Guestbook from "../components/Guestbook.vue";
import TiledGallery from "../components/TiledGallery.vue";
import VotingResults from "../views/votingresults.vue";
import CommentResults from "../views/commentresults";
import Panels from "../views/Panels.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/gallery",
    name: "Gallery",
    component: Gallery
  },
  {
    path: "/panelsgallery",
    name: "PanelsGallery",
    component: Panels
  },
  {
    path: "/catalogue",
    name: "Catalogue",
    component: Catalog2
  },
  {
    path: "/junior",
    name: "Junior",
    component: Junior
  },
  {
    path: "/guestbook",
    name: "Guestbook",
    component: Guestbook
  },
  {
    path: "/vr",
    name: "votingresults",
    component: VotingResults
  },
  {
    path: "/cr",
    name: "commentresults",
    component: CommentResults
  },
  {
    path: "/panels/:category",
    name: "Panels",
    component: TiledGallery
  }
];

const router = new VueRouter({
  routes
});

export default router;
