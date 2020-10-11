<template>
  <div>
    <div class="box" v-if="!showGallery">
      <div class="level">
        <div class="level-item">
          <span class="title">{{ title }}</span>
          <span class="is-size-4 is-italic px-5">by</span>
          <span class="title">{{ author }}</span>
        </div>
        <div class="level-item">
          <button class="button is-outline" @click="showModal = true">
            More information
          </button>
        </div>
      </div>
    </div>
    <div class="tile is-ancestor is-vertical" v-if="!showGallery">
      <div :key="row.rowid" v-for="row in entries">
        <div class="tile">
          <div :key="entry.entryid" v-for="entry in row" class="tile is-parent">
            <div class="tile is-child">
              <div class="card is-shadowless has-transparent-background">
                <div class="card-image">
                  <a class="image" @click="galleryUp()">
                    <img
                      v-if="width > 3"
                      :src="entry.thumbnail"
                      alt="Placeholder image"
                    />
                    <img v-else :src="entry.large" alt="Placeholder image" />
                  </a>
                </div>
                <div class="card-content">
                  <div class="content">
                    <div class="has-text-white">{{ entry.title }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <GalleryComp2
      @hook:beforeDestroy="reset()"
      v-if="showGallery"
      v-bind:gallery="gallery"
    />
    <div>
      <b-modal v-model="showModal" class="modal is-active">
        <div class="modal-background"></div>
        <div class="modal-content">
          <div class="box">
            <div class="columns">
              <div class="column">
                <p class="title">{{ title }}</p>
                <p class="subtitle">{{ author }}</p>
                <p class>{{ description }}</p>
              </div>
            </div>
          </div>
        </div>
      </b-modal>
    </div>
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
      showModal: false,
      gallery: this.$route.params.category,
      width: 4,
      title: "",
      description: "",
      category: "",
      author: ""
    };
  },
  properties: ["category"],
  components: { GalleryComp2 },
  computed: {
    imgsArr() {
      return (
        this.$store.getters
          .getAll([this.$route.params.category])
          // .sort((a,b) => {console.log("--> "+ a); return a.order - b.order})
          .map(e => e.large)
      );
    },
    entries() {
      return chunkArray(
        this.$store.getters.getAll([this.$route.params.category]).sort((a,b) => {console.log("--> "+ a); return a.order - b.order}),
        this.width
      );
    }
  },
  mounted() {
    this.$photoswipe.listen("close", this.reset);
    let info = this.$store.getters.getCategoryInfo(this.gallery);
    this.title = info.title;
    this.description = info.description;
    this.width = info.options.width;
    this.author = info.author;
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