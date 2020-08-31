<template>
  <div class="tile is-ancestor">
    <div class="tile is-vertical">
      <div class="tile">
        <div class="tile is-parent">
          <article class="tile is-child notification">
            <p class="title">Close-up</p>
            <p class="subtitle">Matthew White</p>
            <figure class="image is-200by200" @click="panels('Close-up-selected')">
              <img src="gallery/seKsAT8gCZD_tb.png" />
            </figure>
          </article>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child notification">
            <p class="title">Square Images</p>
            <p class="subtitle">Matthew White</p>
            <figure class="image is-200by200" @click="panels('Square Images')">
              <img src="gallery/Rl28d5Pz0hb_tb.png" />
            </figure>
          </article>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child notification">
            <p class="title">Lockdown Makes</p>
            <p class="subtitle">Matthew White</p>
            <figure class="image is-200by200" @click="panels('lockdown-makes')">
              <img src="gallery/-Cc6cCvkfzy_tb.png" />
            </figure>
          </article>
        </div>
                <div class="tile is-parent">
          <article class="tile is-child notification">
            <p class="title">Flowers</p>
            <p class="subtitle">Matthew White</p>
            <figure class="image is-200by200" @click="panels('flowers')">
              <img src="gallery/-Cc6cCvkfzy_tb.png" />
            </figure>
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
  methods: {
    panels(category){
      this.$router.push({ name: 'Panels', params: { category } })
    }
  }
};
</script>

<style lang="scss" scoped></style>
