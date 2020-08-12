<template>
  <div class="columns">
    <div :key="entry.id" v-for="entry in entries" class="column is-3">
      <CatalogEntry
        v-bind:title="entry.title"
        v-bind:thumbnail="entry.thumbnail"
        v-bind:notes="entry.notes"
        v-bind:author="entry.author"
        v-bind:large="entry.large"
        v-bind:entryid="entry.id"
        v-bind:exif="entry.exif"
      ></CatalogEntry>
    </div>
  </div>
</template>

<script>
import CatalogEntry from "@/components/CatalogEntry";
export default {
  name: "CatalogRow",
  components: {
    CatalogEntry
  },
  props: ["entries"]
};
</script>