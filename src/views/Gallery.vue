<template>
  <div class="container">
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
          <div class="content">All Members' images, you choose when to move on</div>
          <button class="button is-large" @click="selfGuided()">Enter...</button>
        </article>
      </div>
    </div>
    <GalleryComp3 v-if="showGallery" v-bind:autoplay="autoplay" />
    
  </div>
</template>

<script>
// @ is an alias to /src
import GalleryComp3 from "@/components/GalleryComp3";
export default {
  name: "Gallery",
  data() {
    return {
      showGallery: false,
      autoplay: false
    };
  },
  components: {
    GalleryComp3
  },
  methods: {
    selfGuided() {
      this.autoplay = false;
      this.showGallery = true;
    },
    guided() {
      this.autoplay = true;
      this.showGallery = true;
    }
  },
   beforeRouteUpdate() {
    this.showGallery = false;  
  }
};
</script>

<style lang="scss" scoped>

</style>
