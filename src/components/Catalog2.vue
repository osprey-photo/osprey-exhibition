<template>
  <div>
    <div class="tile is-ancestor is-vertical">
      <div :key="row.rowid" v-for="row in entries">
        <div class="tile">
          <div :key="entry.entryid" v-for="entry in row" class="tile is-parent">
            <div class="tile is-child">
              <CatalogEntry2
                v-bind:title="entry.title"
                v-bind:thumbnail="entry.thumbnail"
                v-bind:notes="entry.notes"
                v-bind:author="entry.author"
                v-bind:large="entry.large"
                v-bind:entryid="entry.id"
                v-bind:exif="entry.exif"
                v-bind:position="entry.position"
                v-bind:categories="entry.categories"
              ></CatalogEntry2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CatalogEntry2 from "./CatalogEntry2";
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
  console.log(tempArray);
  return tempArray;
}
export default {
  name: "Catalog2",
  data() {
    return {
      showGallery: false,
      showModal: false,
      gallery: this.$attrs.category,
      width: 4,
      title: "",
      description: "",
      category: "",
      author: ""
    };
  },
  properties: ["category"],
  components: { CatalogEntry2 },
  computed: {
    imgsArr() {
      console.log(this.$attrs.category);
      return this.$store.getters
        .getAll([this.$attrs.category])
        .map(e => e.large);
    },
    entries() {
      console.log(this.$attrs.category);
      return chunkArray(
        this.$store.getters.getAll(this.$attrs.category),
        this.width
      );
    }
  },
  mounted() {
    this.$photoswipe.listen("close", this.reset);
    let info = this.$store.getters.getCategoryInfo(this.gallery);
    if (info) {
      this.title = info.title;
      this.description = info.description;
      this.width = info.options.width;
      this.author = info.author;
    }
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