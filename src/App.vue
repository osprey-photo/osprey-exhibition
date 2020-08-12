<template>
  <div id="app">
    <section class="hero is-fullheight has-background">
      <div class="hero-head">
        <nav class="navbar is-transparent">
          <div class="container">
            <div class="navbar-brand">
              <span class="navbar-burger burger" data-target="navbarMenuHeroB">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
            <div id="navbarMenuHeroB" class="navbar-menu">
              <div class="navbar-end">
                <router-link class="navbar-item is-active" to="/">Home</router-link>
                <router-link class="navbar-item" to="/Gallery">Gallery</router-link>
                <router-link class="navbar-item" to="/Catalog">Catalog</router-link>
                <router-link class="navbar-item" to="/Junior">Junior</router-link>
                <router-link class="navbar-item" to="/Panels">Panels</router-link>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <img
        alt="Bishops Waltham Palace"
        class="hero-background is-transparent"
        src="Bishop_s Waltham Palace.jpg"
      />
      <div class="hero-body"  >
        <div class="container has-text-centered" style="overflow: auto; max-height:800px">
          <transition name="fade" mode="out-in">
            <router-view />
          </transition>
        </div>
      </div>

      <div class="hero-foot">
        <nav class="tabs is-boxed is-fullwidth">
          <div class="container">
            <p></p>
            <!-- <ul>style="overflow: auto; max-height:600px"
              <li class="is-active">
                <a>Overview</a>
              </li>
              <li>
                <a>Modifiers</a>
              </li>
              <li>
                <a>Grid</a>
              </li>
              <li>
                <a>Elements</a>
              </li>
              <li>
                <a>Components</a>
              </li>
              <li>
                <a>Layout</a>
              </li>
            </ul>-->
          </div>
        </nav>
      </div>
    </section>
  </div>
</template>


<style lang="scss" scoped>
.hero.has-backgroundis-primary {
  position: relative;
  overflow: hidden;
}
.hero-background {
  position: absolute;
  object-fit: cover;
  object-position: center center;
  width: 100%;
  height: 100%;
}
.hero-background.is-transparent {
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
</style>


