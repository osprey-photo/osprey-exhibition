<template>
  <div class="container" id="gallery"></div>
</template>

<script>
import imgdata from "../assets/data.json";
export default {
  name: "GalleryComp2",
  components: {},
  data() {
    return {};
  },
  computed: {},
  mounted() {},
  destroy() {
    this.$photoswipe.close();
  },

  beforeDestroy() {
    this.$photoswipe.unlisten("beforeChange", this.beforeChange);
  },
  methods: {
    beforeChange(...args) {
      console.log("beforeChange", ...args); // eslint-disable-line
    },
    show() {
      const items = imgdata.entries.map(e => {
        return {
          src: e.large,
          w: e.size.width,
          h: e.size.height,
          title: e.title
        };
      });
      this.$photoswipe.open(items, {
        pswpOptions: {
          showShare: false,
          bgOpacity: 0.5,
          showHideOpacity: true
        }
      });
      this.$photoswipe.listen("beforeChange", this.beforeChange);
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
