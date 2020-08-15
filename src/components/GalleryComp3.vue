<template>
  <div>
    <vue-flux
      :options="vfOptions"
      :transitions="vfTransitions"
      :images="vfImages"
      :captions="vfCaptions"
      ref="slider"
    >
      <template v-slot:preloader>
        <flux-preloader />
      </template>

      <template v-slot:caption>
        <flux-caption />
      </template>

      <template v-slot:controls>
        <flux-controls />

        <!--  -->
      </template>
      <template v-slot:pagination></template>

      <template v-slot:index>
        <flux-index />
      </template>
    </vue-flux>
    <div class="navbar is-transparent">
      <div class="navbar-menu">
        <div class="navbar-start">
          <div class="navbar-item">
            <button @click="toggle">Full Screen</button>
          </div>
          <!-- <div class="navbar-item">
            <button @click="showGallery=false">Leave Gallery</button>
          </div> -->
        </div>
        <!-- navbar items -->
      </div>
    </div>
  </div>
</template>

<script>
import {
  VueFlux,
  FluxCaption,
  FluxControls,
  FluxIndex,
  // FluxPagination,
  FluxPreloader
} from "vue-flux";

export default {
  name: "GalleryComp3",
  properties: ["autoplay"],
  components: {
    VueFlux,
    FluxCaption,
    FluxControls,
    FluxIndex,
    // FluxPagination,
    FluxPreloader
  },
  data() {
    return {
      mounted: false,
      vfTransitions: ["fade"]
    };
  },

  computed: {
    vfImages() {
      let i = this.$store.getters.getAll.map(e => {
        return encodeURI(e.large);
      });
      // console.log(i);
      return i;
    },
    vfCaptions() {
      return this.$store.getters.getAll.map(e => {
        return `"${e.title}" by ${e.author}`;
      });
    },
    vfOptions() {
      let opts = {
        autoplay: this.$attrs.autoplay,
        enableGestures: true,
        allowFullscreen: true,
        bindKeys: true
      };
      return opts;
    }
  },
  mounted() {
    this.mounted = true;
  },
  methods: {
    toggle() {
      this.$refs.slider.Display.toggleFullScreen();
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
