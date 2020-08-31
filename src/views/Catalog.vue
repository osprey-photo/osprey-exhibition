<template>
  <div>
    <div class="container py-1 mb-4">
      <div class="tabs">
        <ul>
          <li class="px-2">
            <a
              class="has-text-light"
              v-bind:class="isActive('members')"
              @click="toggle('members')"
            >Members</a>
          </li>
          <li class="px-2">
            <a
              class="has-text-light"
              v-bind:class="isActive('under 11')"
              @click="toggle('under 11')"
            >Junior Under 11</a>
          </li>
          <li class="px-3">
            <a
              class="has-text-light"
              v-bind:class="isActive('over 11')"
              @click="toggle('over 11')"
            >Junior Over 11</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="container">
      <Catalog :category="category" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Catalog from "@/components/Catalog";
export default {
  name: "MembersCatalog",
  data() {
    return {
      category: ["members"]
    };
  },
  components: { Catalog },
  methods: {
    toggle(c) {
      let i = this.category.indexOf(c);
      if (i > -1) {
        this.category.splice(i, 1);
      } else {
        this.category.push(c);
      }
      if (this.category.length === 0) {
        this.category.push("members");
      }
    },
    isActive(c) {
      return this.category.includes(c) ? "has-background-link" : "";
    }
  }
};
</script>

<style lang="scss" scoped></style>