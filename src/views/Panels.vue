<template>
  <div class="tile is-ancestor">
    <div class="tile is-vertical">
      <div class="tile">
        <div :key="index" v-for="(value, name, index) in getpanels" class="tile is-parent">
          <article class="tile is-child notification" @click="panels(name)">
            <p class="title">{{value.title}}</p>
            <p class="subtitle">{{value.author}}</p>
            <a>
              <figure class="image is-200by200">
                <img :src="value.thumbnail" />
              </figure>
            </a>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import IntroComp from "@/components/IntroComp";
export default {
  name: "Panels",
  components: {},
  computed: {
    getpanels() {
      return this.$store.getters.getCategories;
    }
  },
  methods: {
    panels(category) {
      this.$router.push({ name: "Panels", params: { category } });
    }
  }
};
</script>

<style lang="scss" scoped></style>
