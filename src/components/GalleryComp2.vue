<template>
  <div class="container">
    <div id="gallery"></div>
  </div>
</template>

<script>
export default {
  name: "GalleryComp2",
  properties: ["autoplay"],
  components: {},
  data() {
    return {};
  },
  computed: {},
  mounted() {
    const items = this.$store.getters.getAll.map(e => {
      return {
        src: e.large,
        w: e.size.width,
        h: e.size.height,
        title: e.title,
        author: e.author
      };
    });
    this.$photoswipe.open(items, {
      showShare: false,
      shareEl:false,
      bgOpacity: 0.7,
      showHideOpacity: true,
      showAnimationDuration: 0,
      timeToIdle: 2000,
      addCaptionHTMLFn: function(item, captionEl) {
        // item      - slide object
        // captionEl - caption DOM element
        // isFake    - true when content is added to fake caption container
        //             (used to get size of next or previous caption)

        if (!item.title) {
          captionEl.children[0].innerHTML = "hello";
          return false;
        }
        captionEl.children[0].innerHTML = `<span class="title has-text-white">"${item.title}"</span><span class="title">&nbsp;&nbsp;|&nbsp;&nbsp;</span> <span class="title has-text-white">${item.author}</span>`;
        return true;
      }
    });
    this.$photoswipe.listen("beforeChange", this.beforeChange);
    setInterval(function(){this.$photoswipe.next();},4000);
  },
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
    show() {}
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
