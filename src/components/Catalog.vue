<template>
  <div class="tile is-ancestor is-vertical">
    <CatalogRow :key="row.rowid" v-for="row in entries" v-bind:entries="row" />
  </div>
</template>

<script>
// @ is an alias to /src
import CatalogRow from "@/components/CatalogRow";

/**
 * Returns an array with arrays of the given size.
 *
 * @param myArray {Array} array to split
 * @param chunk_size {Integer} Size of every group
 */
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
  name: "Catalog",
  properties: ["category"],
  components: {
    CatalogRow
  },
  computed: {
    entries() {
      let e = chunkArray(this.$store.getters.getAll(this.$attrs.category), 4);
      console.log(this.$attrs.category);
      return e;
    },
    allentries() {
      return this.$store.getters.getAll(this.$attrs.category);
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
