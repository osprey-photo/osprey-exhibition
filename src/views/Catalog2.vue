// Copyright Matthew B White 2020 All Rights Reserved. 
// SPDX-License-Identifier: Apache-2.0
<template>
  <div class="" style="padding-bottom: 400px;">
    <div class="container py-1 mb-4">
      <div class="buttons">
        <a
          class="button"
          v-bind:class="isActive('members')"
          @click="toggle('members')"
          >Members</a
        >

        <a
          class="button"
          v-bind:class="isActive('under 11')"
          @click="toggle('under 11')"
          >Junior Up 11</a
        >

        <a
          class="button"
          v-bind:class="isActive('over 11')"
          @click="toggle('over 11')"
          >Junior 12-16</a
        >

        <a
          class="button"
          v-bind:class="isActive('panels')"
          @click="toggle('panels')"
          >Panels</a
        >
      </div>
    </div>
    <div class="container">
      <Catalog2 :category="category" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Catalog2 from "@/components/Catalog2";
export default {
  name: "MembersCatalog",
  data() {
    return {
      category: ["members"]
    };
  },
  components: { Catalog2 },
  methods: {
    toggle(c) {
      this.category.pop();
      this.category.push(c);
    },
    isActive(c) {
      return this.category.includes(c) ? "has-background-link" : "";
    }
  }
};
</script>

<style lang="scss" scoped></style>
