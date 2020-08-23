<template>
  <div class="container" style="overflow-y: auto; overflow-x: hidden; max-height: 90vh; ">
    <div v-if="!showGallery && !autoplay">
      <article class="box has-background-link-light">
        <p class="title">Choose which gallery to look around</p>
      </article>
      <div class="tile is-ancestor is-vertical">
        <div class="tile is-12">
          <div class="tile is-parent">
            <article class="tile is-child notification">
              <p class="title">Guided Tour</p>
              <div class="content subtitle">All Members' images in a video slideshow</div>
              <video-embed
                class="video"
                css="embed-responsive-16by9"
                src="https://vimeo.com/382890997"
              ></video-embed>
              <!-- <button class="button is-large" @click="guided()">Enter...</button> -->
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

        <div class="tile is-12">
          <div class="tile is-parent">
            <article class="tile is-child notification">
              <p class="title">Junior Competition</p>
              <div class="content subtitle">All Junior Competition images in a video slideshow</div>
              <video-embed
                class="video"
                css="embed-responsive-16by9"
                src="https://vimeo.com/372182220"
              ></video-embed>
              <!-- <button class="button is-large" @click="guided()">Enter...</button> -->
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child notification">
              <p class="title">Junior Self-Guided Tour</p>
              <div class="content subtitle">You choose when to move on</div>
              <button class="button is-large is-link" @click="junior()">Enter...</button>
            </article>
          </div>
        </div>
      </div>
    </div>
    <div v-if="!showGallery" class="tile is-ancestor"></div>

    <GalleryComp2
      @hook:beforeDestroy="reset()"
      v-if="showGallery && !autoplay"
      v-bind:autoplay="autoplay"
      v-bind:gallery="gallery"
    />

    <div class="container">
      <video-embed
        class="video"
        v-if="autoplay"
        css="embed-responsive-16by9"
        src="https://vimeo.com/382890997"
      ></video-embed>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import GalleryComp3 from "@/components/GalleryComp3";
import GalleryComp2 from "@/components/GalleryComp2";
// import { vueVimeoPlayer } from "vue-vimeo-player";
export default {
  name: "Gallery",
  data() {
    return {
      showGallery: false,
      gallery: "",
      autoplay: false
    };
  },
  components: {
    // GalleryComp3,
    GalleryComp2,
    
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
</style>
