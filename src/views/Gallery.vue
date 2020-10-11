<template>
  <div>
    <div v-if="!showGallery && !showModal">
      <div class>
        <div class="box has-background-grey-lighter">
          <div class="tile is-ancestor">
            <div class="tile is-parent is-vertical">
              <div class="tile ">
                <article
                  class="tile is-child notification has-background-grey-lighter"
                >
                  <p class="title">Main Gallery</p>
                </article>
              </div>
              <div class="tile is-child has-text-centered">
                <p class="is-size-4">
                  Don't forget to vote for your favourite image!
                </p>
                <p class="is-size-4">
                  Click the <i class="fas fa-heart"></i> in the
                  <router-link to="/Catalogue">catalogue page.</router-link>
                </p>
              </div>
              <div class="tile">
                <div class="tile is-vertical">
                  <div class="tile is-parent">
                    <article class="tile is-child notification">
                      <p class="title">Guided Tour</p>
                      <div class="content subtitle">
                        All Members' images in a video slideshow
                      </div>
                      <button
                        class="button is-large is-link"
                        @click="video_members()"
                      >
                        Play...
                      </button>
                    </article>
                  </div>

                  <div class="tile is-parent">
                    <article class="tile is-child notification">
                      <p class="title">Self-Guided Tour</p>
                      <div class="content subtitle">
                        You choose when to move on
                      </div>
                      <button
                        class="button is-large is-link"
                        @click="selfGuided()"
                      >
                        Enter...
                      </button>
                    </article>
                  </div>
                </div>
              </div>
            </div>
            <div class="tile is-4 is-parent is-vertical">
              <div class="tile is-child">
                <img
                  src="gallery_img.jpg"
                  alt="Placeholder image"
                  class="image mt-5"
                  style="height:50vh;  margin-left: auto; margin-right: auto;"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <GalleryComp2
      @hook:beforeDestroy="reset()"
      v-if="showGallery && !showModal"
      v-bind:gallery="gallery"
    />

    <div
      v-show="showModal"
      ref="gg"
      @close="showModal = false"
      @hook:beforeDestroy="reset()"
      class="modal is-active"
    >
      <div class="modal-background"></div>
      <div id="videoWrapper" class="modal-content">
        <div class="container">
          <div class="videoWrapper">
            <my-video
              ref="video"
              :sources="video.sources"
              :options="video.options"
            ></my-video>
          </div>
        </div>
      </div>
      <button class="modal-close" @click="reset()"></button>
    </div>
  </div>
</template>

<script>
import myVideo from "vue-video";
import GalleryComp2 from "@/components/GalleryComp2";

export default {
  name: "Gallery",
  data() {
    return {
      videoPlaying: false,
      videoID: "382890997",
      showGallery: false,
      gallery: "",
      autoplay: false,
      showModal: false,
      video: {
        sources: [
          {
            src:
              "https://www.dropbox.com/s/h60j9yoeheutd51/2020Members%20003.mp4?raw=1",
            type: "video/mp4"
          }
        ],
        options: {
          autoplay: false,
          volume: 0.0
        }
      }
    };
  },
  components: {
    GalleryComp2,
    myVideo
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
      console.log("RESET GALLE");
      this.showGallery = false;
      this.showModal = false;
      if (this.videoPlaying) {
        if (this.$refs.video) {
          this.$refs.video.play();
        }
        this.videoPlaying = false;
      }
    },
    video_junior() {
      this.videoID = "372182220";
      this.showModal = true;
    },
    video_members() {
      this.$refs.video.play();
      this.showModal = true;
      this.videoPlaying = true;
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
.has-image-centered {
  margin-left: auto;
  margin-right: auto;
}
</style>
