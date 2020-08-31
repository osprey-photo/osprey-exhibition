<template>
  <div>
    <div class="tile is-ancestor is-vertical" v-if="!showGallery">
      <div :key="row.rowid" v-for="row in entries">
        <div class="tile">
          <div :key="entry.entryid" v-for="entry in row" class="tile is-parent">
            <div class="tile is-child">
              <div class="card is-shadowless has-transparent-background">
                <div class="card-image">
                  <figure class="image is-200by200" @click="galleryUp()">
                    <img :src="entry.thumbnail" alt="Placeholder image" />
                  </figure>
                </div>
                <div class="card-content">
                  <div class="content">
                    <div class="has-text-white">{{entry.title}}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <GalleryComp2 @hook:beforeDestroy="reset()" v-if="showGallery" v-bind:gallery="gallery" />
  </div>
</template>
<script>
// import ES6 style
import GalleryComp2 from "@/components/GalleryComp2";

function chunkArray(myArray, chunk_size) {
  var index = 0;
  var arrayLength = myArray.length;
  var tempArray = [];
  var rowid = 0;
  for (index = 0; index < arrayLength; index += chunk_size) {
    let myChunk = myArray.slice(index, index + chunk_size);
    myChunk.rowid = rowid++;
    // Do something if you want with the group
    tempArray.push(myChunk);
  }

  return tempArray;
}
export default {
  name: "TiledGafllery",
  data() {
    return {
      showGallery: false,
      gallery: this.$route.params.category,
      entries: chunkArray(
        this.$store.getters.getAll([this.$route.params.category]),
        4
      )
    };
  },
  properties: ["category"],
  components: { GalleryComp2 },
  computed: {
    imgsArr() {
      return this.$store.getters
        .getAll([this.$route.params.category])
        .map(e => e.large);
    }
  },
  mounted() {
    this.$photoswipe.listen("close", this.reset);
  },
  methods: {
    reset() {
      this.showGallery = false;
    },
    galleryUp() {
      this.showGallery = true;
    }
  }
};
</script>
<style scoped>
.has-transparent-background {
  background: none;
}
</style>