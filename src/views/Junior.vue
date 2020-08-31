<template>
  <div class="container">
    <div class="tile is-ancestor">
      <div class="tile is-6">
        <div class="tile is-parent">
          <article class="tile is-child notification">
            <p class="title">Guided Tour</p>
            <div class="content subtitle">Junior Competition video slideshow</div>
            <button class="button is-large is-link">Play...</button>
          </article>
        </div>
      </div>
            <div class="tile is-6">
        <div class="tile is-parent">
          <article class="tile is-child notification">
            <p class="title">About the competition</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci cupiditate, eaque odit inventore ab fuga nam a, sequi fugit nemo illum placeat tempore quaerat cumque minus repellat totam consequuntur nobis.</p>
          </article>
        </div>
      </div>
    </div>

    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child notification mx-2">
          <p class="title">Under 11s Self Guided Slideshow</p>
          <div class="content subtitle">You choose when to move on</div>
          <button class="button is-large is-link">Enter...</button>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child notification mx-2">
          <p class="title">Over 11s Self Guided Slideshow</p>
          <div class="content subtitle">You choose when to move on</div>
          <button class="button is-large is-link">Enter...</button>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Junior",
  data() {
    return {
      over11: "over 11",
      under11: "under 11"
    };
  },
  props: ["category"],
  components: {}
};
</script>

<style lang="scss" scoped></style>
