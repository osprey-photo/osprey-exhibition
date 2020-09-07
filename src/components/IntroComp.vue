<template>
  <div>
    <div class="tile is-ancestor is-vertical">
      <div class="tile is-parent">
        <div class="is-child tile">
          <p
            class="is-size-3-mobile is-size-1-tablet has-text-light"
          >Bishop's Waltham Photographic Society</p>
          <p class="is-size-3-mobile is-size-1-tablet has-text-light">Exhibition 2020</p>
        </div>
      </div>

      <div class="tile is-parent">
        <div class="box is-child tile has-background-link-light">
          <div class="is-size-6-mobile is-size-5-tablet has-text-justified">
            <p class="py-1">
              <span
                class="has-text-weight-bold"
              >Welcome to the Annual Exhibition of Bishop’s Waltham Photographic Society</span>
              presented online in this unprecedented year. The exhibition consists of a selection of members’ images and panels along with the winning entries in our annual Junior photographic competition.
            </p>

            <div class="level">
              <div class="level-item has-text-centered">
                <div>
                  <a
                    class="mt-3 button is-link is-size-6-mobile is-size-5-tablet"
                    href="#/Gallery/"
                  >Members' Images' Gallery</a>
                </div>
              </div>
              <div class="level-item has-text-centered">
                <div>
                  <a
                    class="mt-3 button is-link is-size-6-mobile is-size-5-tablet"
                    href="#/Gallery/"
                  >Junior Competition Gallery</a>
                </div>
              </div>
            </div>
            <p
              class="py-1"
            >We have an award for the exhibition picture that wins the public vote and should be grateful if you would vote for your favourite image via the voting link on the   <router-link to="/Catalogue">catalogue page.</router-link>
              </p>
            <p class="py-1">Please use our <router-link to="/Guestbook">Guest Book</router-link> to leave any comments about the exhibition.</p>
            <p class="py-1">
              Information about the Society can be found <a href="https://bishopswalthamphotosociety.co.uk/">here</a> and membership enquiries can be made <a href="https://bishopswalthamphotosociety.co.uk/sample-page/joining-the-society/">here</a>. As we are unable to meet in person we are continuing to meet on a regular basis via Zoom where we are conducting our planned programme with additional speakers as they become available.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IntroComp",
  computed: {
    isLive() {
      return this.$store.getters.isLive;
    }
  }
};
</script>

<style lang="scss" scoped>
.has-image-centered {
  margin-left: auto;
  margin-right: auto;
}
</style>