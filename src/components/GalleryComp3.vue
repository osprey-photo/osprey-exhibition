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
      </template>
      <template v-slot:pagination>

      </template>

      <template v-slot:index>
        <flux-index />
      </template>
    </vue-flux>
    <button @click="$refs.slider.show('next')">NEXT</button>
    <button @click="toggle">FullScreen</button>
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
      vfOptions: {
        autoplay: true,
        enableGestures: true,
        allowFullscreen: true
      },
      vfTransitions: ["fade"]
    };
  },
  computed: {
    vfImages() {
      let i = this.$store.getters.getAll.map(e => {
        return encodeURI(e.large);
      });
      console.log(i);
      return i;
      //  return ['gallery/1_Alistair%20Hood_Larger%20than%20Life_large.png'];
    },
    vfCaptions() {
      return this.$store.getters.getAll.map(e => {
        return e.title;
      });
    }
  },
  mounted() {},
  methods: {
    beforeChange(...args) {
      console.log("beforeChange", ...args); // eslint-disable-line
    },
    toggle() {
      console.log(this.$refs.slider.Display.toggleFullScreen());
      this.$refs.slider.Display.toggleFullScreen();
   }
  }
};
</script>

<style lang="scss" scoped>
.img {
  width: 100%;
  height: auto;
  max-height: 500px;
}
.frame {
}
</style>
