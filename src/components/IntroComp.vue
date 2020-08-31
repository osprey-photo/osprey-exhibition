<template>
  <div>
    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <div class="box is-child tile has-background-link-light">
          <img class="image has-image-centered is-128x128" src="BWPSLogo2016.png" alt="Logo" />
          <p class="is-size-2-mobile is-size-1-tablet">Bishop's Waltham Photographic Society</p>
          <p class="is-size-2-mobile is-size-1-tablet">Exhibition 2020</p>
          <p />
          <!-- <p class="is-size-2-mobile is-size-1-tablet is-italic">Coming this autumn...</p> -->
          <a class="button" href="#/Gallery/">Enter the gallery...</a>
        </div>
      </div>
      <div class="tile is-parent">
        <div class="box is-child tile has-background-link-light">
          <div class="is-size-6-mobile is-size-5-tablet has-text-justified">
            <p class="py-1">
              <span
                class="has-text-weight-bold"
              >Welcome to the Annual Exhibition of Bishop’s Waltham Photographic Society</span> which is being presented online due to the ongoing restrictions due to the Coronavirus pandemic.
            </p>
            <p class="py-1">
              The exhibition consists of a selection of members’ images and panels together with the winning entries [and other submissions?] in our annual Junior photographic competition.
              We have an award for the exhibition picture that wins the public vote and we should be grateful if you would vote for your favourite image via the voting link on the catalogue page.
            </p>
            <p class="py-1">Please use our Guest Book to leave any comments about the exhibition.</p>
            <p
              class="py-1"
            >Information about the Society can be found here and membership enquiries can be made here. As we are unable to meet in person we are continuing to meet on a regular basis via Zoom where we are conducting our planned programme with additional speakers as they become available.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IntroComp"
};
</script>

<style lang="scss" scoped>
.has-image-centered {
  margin-left: auto;
  margin-right: auto;
}
</style>