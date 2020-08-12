<template>
  <vue-picture-swipe :items="items">
      llll
  </vue-picture-swipe>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          src: "gallery/Yellow Flower_4510x2987.jpg",
          thumbnail: "gallery/flower_sml.png",
          w: 1200,
          h: 900,
          alt: "some numbers on a grey background" // optional alt attribute for thumbnail image
        },
        {
          src: "http://via.placeholder.com/1200x900",
          thumbnail: "gallery/uncovered_sign_sml.png",
          w: 1200,
          h: 900
        }
      ]
    };
  }
};
</script>