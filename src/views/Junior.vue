<template>
  <div>
    <div v-if="!showGallery && !showModal" class="container">
      <div class="box has-background-grey-lighter">
        <div class="tile is-ancestor">
          <div class="tile is-6">
            <div class="tile is-parent">
              <article class="tile is-child notification">
                <p class="title">Guided Tour</p>
                <div class="content subtitle">Junior Competition video slideshow</div>
                <button class="button is-large is-link">Play...</button>
              </article>
            </div>
          </div>
          <div class="tile is-6">
            <div class="tile is-parent">
              <article class="tile has-background-grey-lighter is-child notification">
                <p class="title">About the competition</p>
                <p>Each year we invite local children as well as our Junior Section to enter a competition. We've seen some stunning work, from the next generation of photgraphers!</p>
              </article>
            </div>
          </div>
        </div>

        <div class="tile is-ancestor">
          <div class="tile is-parent">
            <article class="tile is-child notification mx-2">
              <p class="title">Up to 11s Self Guided Slideshow</p>
              <div class="content subtitle">You choose when to move on</div>
              <button class="button is-large is-link">Enter...</button>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child notification mx-2">
              <p class="title">12-16 Self Guided Slideshow</p>
              <div class="content subtitle">You choose when to move on</div>
              <button class="button is-large is-link">Enter...</button>
            </article>
          </div>
        </div>
      </div>
    </div>

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
            <my-video ref="video" :sources="video.sources" :options="video.options"></my-video>
          </div>
        </div>
      </div>
      <button class="modal-close" @click="reset()"></button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Junior",
  data() {
    return {
      over11: "over 11",
      under11: "under 11",
      showModal: false,
      showGallery: false,
      video: {
        sources: [
          {
            src:
              "https://www.dropbox.com/s/83ks5lom1lkeiie/Bishop%27s%20Waltham%20Photographic%20Society%20-%20Exhibition%202019.mp4?raw=1",
            type: "video/mp4"
          }
        ],
        options: {
          autoplay: false,
          volume: 0.0
          // poster: 'http://covteam.u.qiniudn.com/poster.png'
        }
      }
    };
  },
  props: ["category"],
  components: {},
  methods: {
    reset() {
      this.showGallery = false;
      this.showModal = false;
      if (this.$refs.video) {
        this.$refs.video.play();
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
