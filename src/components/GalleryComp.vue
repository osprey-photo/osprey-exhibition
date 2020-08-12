<template>
  <div class="container" v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper">
      <div class="swiper-slide" :key="banner" v-for="banner in banners">
        <div class="frame">
          <img :src="banner.src" />
        </div>
      </div>
    </div>

    <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
    <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
  </div>
</template>

<script>
import { directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import imgdata from "../assets/data.json";
export default {
  name: "GalleryComp",
  directives: {
    swiper: directive
  },
  data() {
    return {
      swiperOption: {
   
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        autoHeight: true,
        mousewheel: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
        // ...
      }
    }
  },
  computed: {
    banners() {
      return imgdata.entries.map((e)=> { return {src:e.large,w:1400 };}
      );
    }
  },
  mounted() {
    console.log("Current Swiper instance object", this.mySwiper);
    // this.mySwiper.slideTo(3, 1000, false)
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
