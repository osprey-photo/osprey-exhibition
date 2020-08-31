<template>
  <div>
    <div v-if="!showGallery && !showModal">
      <div>
        <div class="tile is-ancestor is-vertical">
          <div class="tile is-12">
            <div class="tile is-parent">
              <article class="tile is-child notification">
                <p class="title">Guided Tour</p>
                <div class="content subtitle">All Members' images in a video slideshow</div>
                <button class="button is-large is-link" @click="video_members()">Play...</button>
              </article>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child notification">
                <p class="title">Self-Guided Tour</p>
                <div class="content subtitle">You choose when to move on</div>
                <button class="button is-large is-link" @click="selfGuided()">Enter...</button>
              </article>
            </div>
          </div>
        </div>
        <Panels/>
      </div>
    </div>

    <GalleryComp2
      @hook:beforeDestroy="reset()"
      v-if="showGallery && !showModal"
      v-bind:gallery="gallery"
    />

    <div
      v-show="showModal"
      @close="showModal = false"
      @hook:beforeDestroy="reset()"
      class="modal is-active"
    >
      <div class="modal-background"></div>
      <div id="videoWrapper" class="modal-content">
        <div class="container">
          <div class="videoWrapper">
            <vueVimeoPlayer ref="player" :video-id="videoID" :autoplay="true" />
          </div>
        </div>
      </div>
      <button class="modal-close" @click="showModal = false"></button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import GalleryComp3 from "@/components/GalleryComp3";
import GalleryComp2 from "@/components/GalleryComp2";
import Panels from "@/views/Panels";
import { vueVimeoPlayer } from "vue-vimeo-player";
export default {
  name: "Gallery",
  data() {
    return {
      videoID: "382890997",
      showGallery: false,
      gallery: "",
      autoplay: false,
      showModal: false
    };
  },
  components: {
    // GalleryComp3,
    GalleryComp2,
    vueVimeoPlayer,
    Panels
  },
  mounted() {
    this.$photoswipe.listen("close", this.reset);
  },
  methods: {
    selfGuided() {
      this.autoplay = false;
      this.showGallery = true;
      this.gallery = "members";
    },
    junior() {
      this.autoplay = false;
      this.showGallery = true;
      this.gallery = "junior";
    },
    guided() {
      this.autoplay = true;
      this.showGallery = false;
    },
    reset() {
      this.showGallery = false;
      this.showModal = false;
    },
    video_junior() {
      this.videoID = "372182220";
      this.showModal = true;
    },
    video_members() {
      this.videoID = "382890997";
      this.showModal = true;
    }
  },
  beforeRouteUpdate(to, from, next) {
    this.showGallery = false;
    next();
    // react to route changes...
    // don't forget to call next()
  }
};
</script>

<style lang="scss" scoped>
#videoWrapper {
  max-height: 100vh !important;
}
</style>
