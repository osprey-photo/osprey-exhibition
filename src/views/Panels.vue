<template>
  <div class="box has-background-grey-lighter">
    <div class="tile is-ancestor is-vertical">
      <div class="tile">
        <article class="tile is-child notification has-background-grey-lighter">
          <p class="title">Individual Panels</p>
        </article>
      </div>
      <div class="tile is-12">
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
