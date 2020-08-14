<template>
  <div class="container">
    <div v-if="!guided && !selfGuided" class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child notification">
          <p class="title">Guided Tour</p>
          <div class="content">All Members' images in an automatic slideshow</div>
          <button class="button is-large" @click="guided = true">Enter...</button>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child notification">
          <p class="title">Self-Guided Tour</p>
          <div class="content">All Members' images, you choose when to move on</div>
          <button class="button is-large" @click="selfGuided">Enter...</button>
        </article>
      </div>
    </div>
    <GalleryComp ref="selfGuided" />
    <GalleryComp3 v-if="guided" />
  </div>
</template>

<script>
// @ is an alias to /src
import GalleryComp from "@/components/GalleryComp2";
import GalleryComp3 from "@/components/GalleryComp3";
export default {
  name: "Gallery",
  data() {
    return {
      guided: false,
      selfGuided: false
    };
  },
  components: {
    GalleryComp,
    GalleryComp3
  },
  methods: {

  }
};
</script>

<style lang="scss" scoped>
</style>
