<template>
  <div>
    <div class="catalogentry">
      <div class="card has-background-light">
        <div class="card-image px-2 py-2 ">
          <figure class="image is-200by200">
            <div v-if="tag.show" class="ribbon ribbon-top-right">
              <span class="corner-ribbon" :class="tag.colour">{{
                tag.text
              }}</span>
            </div>

            <img
              v-bind:src="thumbnail"
              alt="Placeholder image"
              class="pt-2 "
            />
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-5">{{ title }}</p>
              <p class="subtitle is-6">{{ author }}</p>
            </div>
          </div>
        </div>
        <div class="card-footer">
          <div class="card-footer-item  ">
            <a v-if="isMembers()"
              class="button"
              @click="vote()"
              v-bind:class="{
                'is-loading': isVoting,
                'is-danger': isFavourite
              }"
              :disabled="isFavourite"
            >
              <i class="fas fa-heart"></i>
            </a>
          </div>
          <div class="card-footer-item">
            <a href="#" @click="showModal = true" class="button is-info">
              <i class="fas fa-info"></i>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div
        v-show="showModal"
        @close="showModal = false"
        class="modal is-active"
      >
        <div class="modal-background"></div>
        <div class="modal-content">
          <div class="box">
            <div class="columns">
              <div class="column">
                <figure class="image">
                  <div class="image-container">
                    <img v-bind:src="large" alt="Placeholder image" />
                  </div>
                </figure>
              </div>
              <div class="column">
                <p class="title">{{ title }}</p>
                <p class="subtitle">{{ author }}</p>
                <p class>{{ notes }}</p>
                <table class="table has-text-left">
                  <tr :key="index" v-for="(value, name, index) in exif">
                    <td>{{ name }}</td>
                    <td>{{ value }}</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
        <button class="modal-close" @click="showModal = false"></button>
      </div>
    </div>
  </div>
</template>

<script>
const colourMap = {
  "1st": "red",
  "2nd": "green",
  "3rd": "blue",
  HC: "yellow"
};

export default {
  name: "CatalogEntry2",
  props: [
    "entryid",
    "thumbnail",
    "author",
    "title",
    "notes",
    "large",
    "exif",
    "position",
    "categories"
  ],
  components: {},
  data() {
    return {
      showModal: false,
      isVoting: false,
      isError: false
    };
  },
  computed: {
    isFavourite() {
      return this.$store.getters.isFavourite(this.entryid);
    },
    tag() {
      if (this.$props.position) {
        return {
          show: true,
          text: this.$props.position,
          colour: colourMap[this.$props.position]
        };
      } else {
        return { show: false };
      }
    }
  },
  methods: {
    isMembers () {
      console.log(this.categories+' ..... '+this.categories.includes('members'))
      return this.categories.includes('members')
    },
    async vote() {
      if (this.isFavourite) return;
      try {
        this.isVoting = true;
        const { data } = await this.$http.post(
          "https://8d06c43d.eu-gb.apiconnect.appdomain.cloud/api/vote",
          {
            entryid: this.entryid,
            author: this.author,
            title: this.title
          }
        );
        this.$store.commit("addFavourite", this.entryid);
        console.log(data);
      } catch (err) {
        this.isError = true;
      } finally {
        this.isVoting = false;
      }
    }
  }
};
</script>


<style lang="scss" scoped>

.catalogentry {

}

/* https://codepen.io/nxworld/pen/oLdoWb */
.ribbon {
  width: 150px;
  height: 150px;
  overflow: hidden;
  position: absolute;
}
.ribbon::before,
.ribbon::after {
  position: absolute;
  z-index: -1;
  content: "";
  display: block;
  border: 5px solid #2980b9;
}
.ribbon span {
  position: absolute;
  display: block;
  width: 225px;
  padding: 15px 0;
  background-color: #3498db;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  color: #fff;
  font: 700 18px/1 "Lato", sans-serif;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  text-transform: uppercase;
  text-align: center;
}

/* top left*/
.ribbon-top-left {
  top: -10px;
  left: -10px;
}
.ribbon-top-left::before,
.ribbon-top-left::after {
  border-top-color: transparent;
  border-left-color: transparent;
}
.ribbon-top-left::before {
  top: 0;
  right: 0;
}
.ribbon-top-left::after {
  bottom: 0;
  left: 0;
}
.ribbon-top-left span {
  right: -25px;
  top: 30px;
  transform: rotate(-45deg);
}

/* top right*/
.ribbon-top-right {
  top: -10px;
  right: -10px;
}
.ribbon-top-right::before,
.ribbon-top-right::after {
  border-top-color: transparent;
  border-right-color: transparent;
}
.ribbon-top-right::before {
  top: 0;
  left: 0;
}
.ribbon-top-right::after {
  bottom: 0;
  right: 0;
}
.ribbon-top-right span {
  left: -25px;
  top: 30px;
  transform: rotate(45deg);
}

/* bottom left*/
.ribbon-bottom-left {
  bottom: -10px;
  left: -10px;
}
.ribbon-bottom-left::before,
.ribbon-bottom-left::after {
  border-bottom-color: transparent;
  border-left-color: transparent;
}
.ribbon-bottom-left::before {
  bottom: 0;
  right: 0;
}
.ribbon-bottom-left::after {
  top: 0;
  left: 0;
}
.ribbon-bottom-left span {
  right: -25px;
  bottom: 30px;
  transform: rotate(225deg);
}

/* bottom right*/
.ribbon-bottom-right {
  bottom: -10px;
  right: -10px;
}
.ribbon-bottom-right::before,
.ribbon-bottom-right::after {
  border-bottom-color: transparent;
  border-right-color: transparent;
}
.ribbon-bottom-right::before {
  bottom: 0;
  left: 0;
}
.ribbon-bottom-right::after {
  top: 0;
  right: 0;
}
.ribbon-bottom-right span {
  left: -25px;
  bottom: 30px;
  transform: rotate(-225deg);
}

/* Colors */
.corner-ribbon.transparent {
  background: none;
  color: #555;
}
.corner-ribbon.white {
  background: #f0f0f0;
  color: #555;
}
.corner-ribbon.black {
  background: #333;
}
.corner-ribbon.grey {
  background: #999;
}
.corner-ribbon.blue {
  background: #39d;
}
.corner-ribbon.green {
  background: #2c7;
}
.corner-ribbon.turquoise {
  background: #1b9;
}
.corner-ribbon.purple {
  background: #95b;
}
.corner-ribbon.red {
  background: #e43;
}
.corner-ribbon.orange {
  background: #e82;
}
.corner-ribbon.yellow {
  background: #ec0;
}
</style>