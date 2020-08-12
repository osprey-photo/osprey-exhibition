<template>
  <div>
    <CatalogRow :key="row.rowid" v-for="row in entries" v-bind:entries="row" />
  </div>
</template>

<script>
// @ is an alias to /src
import CatalogRow from "@/components/CatalogRow";
import imgdata from "../assets/data.json";


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
  name: "Gallery",
  components: {
    CatalogRow
  },
  computed: {
    entries() {
      let e = chunkArray(imgdata.entries, 4);
      console.log(e);
      return e;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
