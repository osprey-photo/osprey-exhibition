<template>
  <div id="app">
      <div class="parallax"></div>
    <section class="hero is-fullheight non-has-background">
      <div class="hero-head">
        <nav class="navbar is-info">
          <div class="container">
            <div class="navbar-brand">
              <span
                class="navbar-burger burger"
                data-target="navbarMenuHeroB"
                v-on:click="showMobileMenu = !showMobileMenu"
                v-bind:class="{'is-active': showMobileMenu}"
              >
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
            <div class="navbar-menu">
              <div class="navbar-start">
                <a
                  class="navbar-item"
                  href="https://bishopswalthamphotosociety.co.uk"
                >Bishop's Waltham Photographic Society</a>
              </div>
            </div>
            <div
              id="navbarMenuHeroB"
              class="navbar-menu"
              v-on:click="showMobileMenu = !showMobileMenu"
              v-bind:class="{'is-active': showMobileMenu}"
            >
              <div class="navbar-end">
                <router-link class="navbar-item" to="/">Home</router-link>
                <router-link class="navbar-item" to="/Gallery">Gallery</router-link>
                <router-link class="navbar-item" to="/Junior">Junior</router-link>
                <router-link class="navbar-item" to="/Panels">Panels</router-link>
                <router-link class="navbar-item" to="/Catalog">Catalog</router-link>
                <router-link class="navbar-item" to="/Guestbook">Guestbook</router-link>
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
      <div >
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
    </section>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      showMobileMenu: false,
      imagebkg: true
    };
  },
  beforeRouteUpdate(to, from, next) {
    this.imagebkg = false;
    console.log("Going to " + to);
    next();
    // react to route changes...
    // don't forget to call next()
  },
  watch: {
    $route(to) {
      //this.imagebkg = to.name == "Home";
      console.log(">>Going to " + JSON.stringify(to));
      // react to route changes...
    }
  }
};
</script>

<style lang="scss" scoped>
// .hero-background  {
//   width: 100%;
//   // height: 90vh;
//   background-repeat: no-repeat;
//   background-position: center center;
//   background-size: cover;
//   background-attachment: fixed;
//   background-image: url("/osprey-exibition/result.png");
// }
// #app {
// background-color: #ffffff;
// background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='32' viewBox='0 0 16 32'%3E%3Cg fill='%23919191' fill-opacity='0.4'%3E%3Cpath fill-rule='evenodd' d='M0 24h4v2H0v-2zm0 4h6v2H0v-2zm0-8h2v2H0v-2zM0 0h4v2H0V0zm0 4h2v2H0V4zm16 20h-6v2h6v-2zm0 4H8v2h8v-2zm0-8h-4v2h4v-2zm0-20h-6v2h6V0zm0 4h-4v2h4V4zm-2 12h2v2h-2v-2zm0-8h2v2h-2V8zM2 8h10v2H2V8zm0 8h10v2H2v-2zm-2-4h14v2H0v-2zm4-8h6v2H4V4zm0 16h6v2H4v-2zM6 0h2v2H6V0zm0 24h2v2H6v-2z'/%3E%3C/g%3E%3C/svg%3E");

#appl {
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

.hero-body {
  position: relative;
  // top: "-15px";
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

body, html {
  height: 100%;
}



</style>
