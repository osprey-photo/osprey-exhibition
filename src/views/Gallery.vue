<template>
  <div class="container">
    <div v-if="!showGallery && !showGallery_sg" class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child notification">
          <p class="title">Guided Tour</p>
          <div class="content">All Members' images in an automatic slideshow</div>
          <button class="button is-large" @click="guided()">Enter...</button>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child notification">
          <p class="title">Self-Guided Tour</p>
          <div class="content">All Members' images, you choose when to move on</div>
          <button class="button is-large" @click="selfGuided()">Enter...</button>
        </article>
      </div>
    </div>
    <GalleryComp3 v-if="showGallery" v-bind:autoplay="autoplay" />
    <GalleryComp2 v-if="showGallery_sg" v-bind:autoplay="autoplay" />
  </div>
</template>

<script>
// @ is an alias to /src
import GalleryComp3 from "@/components/GalleryComp3";
import GalleryComp2 from "@/components/GalleryComp2";
export default {
  name: "Gallery",
  data() {
    return {
      showGallery: false,
      showGallery_sg: false,
      autoplay: false
    };
  },
  components: {
    GalleryComp3,
    GalleryComp2
  },
  methods: {
    selfGuided() {
      this.autoplay = false;
      this.showGallery = true;
      this.showGallery_sg = false;
    },
    guided() {
      this.autoplay = true;
      this.showGallery = false;
      this.showGallery_sg = true;
    }
  },
  beforeRouteUpdate() {
    this.showGallery = false;
  }
};
</script>

<style lang="scss" scoped>
</style>
