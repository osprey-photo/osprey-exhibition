<template>
  <div id="app">
    <section>
      <div class="hero is-fullheight non-has-background">
        <div class="hero-head">
          <nav class="navbar is-info" v-if="isLive">
            <div v-if="isLive" class="container">
              <div class="navbar-brand">
                <span
                  class="navbar-burger burger"
                  data-target="navbarMenuHeroB"
                  v-on:click="showMobileMenu = !showMobileMenu"
                  v-bind:class="{ 'is-active': showMobileMenu }"
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
                <div
                  class="navbar-item"
                  href="https://bishopswalthamphotosociety.co.uk"
                >
                  <img
                    class="image is-128by128"
                    src="logo-img-only-transparent.png"
                  />
                </div>
              </div>
              <div class="navbar-menu">
                <div class="navbar-start">
                  <a
                    class="navbar-item"
                    href="https://bishopswalthamphotosociety.co.uk"
                    >Visit the BWPS Website</a
                  >
                </div>
              </div>
              <div
                id="navbarMenuHeroB"
                class="navbar-menu"
                v-on:click="showMobileMenu = !showMobileMenu"
                v-bind:class="{ 'is-active': showMobileMenu }"
              >
                <div class="navbar-end">
                  <router-link class="navbar-item" to="/">Welcome</router-link>
                  <router-link class="navbar-item" to="/Gallery"
                    >Gallery</router-link
                  >
                  <router-link class="navbar-item" to="/PanelsGallery"
                    >Panels</router-link
                  >
                  <router-link class="navbar-item" to="/Junior"
                    >Junior Competition</router-link
                  >
                  <router-link class="navbar-item" to="/Catalogue"
                    >Catalogue</router-link
                  >
                  <router-link class="navbar-item" to="/Guestbook"
                    >Guest Book</router-link
                  >
                </div>
              </div>
            </div>
          </nav>
        </div>
        <img
          alt="Bishops Waltham Palace"
          v-if="imagebkg"
          class="hero-background is-transparent"
          src="bgd.jpg"
        />
        <div>
          <div class="hero-body py-0">
            <div class="container has-text-centered">
              <transition name="fade" mode="out-in">
                <router-view />
              </transition>
            </div>
          </div>
        </div>

        <div class="hero-foot">
          <nav class="tabs is-boxed is-fullwidth">
            <div class="container">
              <p>All images are copyright of the individual photographers</p>
            </div>
          </nav>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      showMobileMenu: false
    };
  },
  computed: {
    imagebkg() {
      return this.$route.name === "Home";
    },
    isLive() {
      return true;
    }
  }
};
</script>

<style lang="scss" scoped>
#app {
  background: rgb(0, 0, 0);
  background: linear-gradient(
    324deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(2, 0, 36, 0.4374343487394958) 35%,
    rgba(51, 51, 51, 0.91) 100%
  );
  margin: 0;
  padding: 0;
}

.hero-background {
  position: absolute;
  object-fit: cover;
  object-position: center center;
  width: 100%;
  height: 100%;
  overflow: auto;
  opacity: 0.5;
}

.has-image-centered {
  margin-left: auto;
  margin-right: auto;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

body,
html {
  height: 100%;
}
</style>
