<template>
  <div class="container">
    <article v-if="!showGallery" class="box has-background-grey-lighter">
      <p class="title">Choose which gallery to look around</p>
    </article>
    <div v-if="!showGallery" class="tile is-ancestor">
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
          <div class="content">You choose when to move on</div>
          <button class="button is-large" @click="selfGuided()">Enter...</button>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child notification">
          <p class="title">Junior Competition</p>
          <div class="content">All the images from our Junior Competition</div>
          <button class="button is-large" @click="guided()">Enter...</button>
        </article>
      </div>
    </div>

    <div v-if="!showGallery" class="tile is-ancestor"></div>

    <GalleryComp2
      @hook:beforeDestroy="reset()"
      v-if="showGallery"
      v-bind:autoplay="autoplay"
      v-bind:gallery="gallery"
    />
  </div>
</template>

<script>
// @ is an alias to /src
// import GalleryComp3 from "@/components/GalleryComp3";
import GalleryComp2 from "@/components/GalleryComp2";
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
    GalleryComp2
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
    guided() {
      this.autoplay = true;
      this.gallery = "guided";
      this.showGallery = true;
    },
    reset() {
      this.showGallery = false;
    }
  },
  beforeRouteUpdate() {
    this.showGallery = false;
  }
};
</script>

<style lang="scss" scoped></style>
