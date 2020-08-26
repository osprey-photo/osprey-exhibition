<template>
  <div>
    <div class="is-transparent">
      <div class="card is-transparent" >
        <div class="card-image">
          <figure class="imgage is-square">
            <img v-bind:src="thumbnail" alt="Placeholder image" class="pt-2" />
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4">{{title}}</p>
              <p class="subtitle is-6">{{author}}</p>
            </div>
          </div>
        </div>
        <footer class="card-footer">
          <div v-if="isError">..errr try again later..</div>
          <div v-else-if="isVoting">
            <spinner class="card-footer-item"></spinner>
          </div>

          <div v-else>
            <div v-if="isFavourite">Favourite !</div>
            <div v-else>
              <a href="#" @click="vote()" class="card-footer-item">Vote as Favourite</a>
            </div>
          </div>
          <a href="#" @click="showModal = true" class="card-footer-item">More Information</a>
        </footer>
      </div>
    </div>

    <div>
      <div v-show="showModal" @close="showModal = false" class="modal is-active">
        <div class="modal-background"></div>
        <div class="modal-content">
          <div class="box">
            <div class="columns">
              <div class="column">
                <figure class="image">
                  <img v-bind:src="large" alt="Placeholder image" />
                </figure>
              </div>
              <div class="column">
                <p class="title">{{title}}</p>
                <p class="subtitle">{{author}}</p>
                <p class>{{notes}}</p>
                <table class="table has-text-left">
                  <tr :key="index" v-for="(value, name,index) in exif">
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
import Spinner from "vue-simple-spinner";
export default {
  name: "CatalogEntry",
  props: ["entryid", "thumbnail", "author", "title", "notes", "large", "exif"],
  components: { Spinner },
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
    }
  },
  methods: {
    async vote() {
      try {
        this.isVoting = true;
        const { data } = await this.$http.post(
          "https://8d06c43d.eu-gb.apiconnect.appdomain.cloud/api/vote",
          {
            entryid: this.entryid
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
.t-img {
  width: 200;
  height: 200;
}
.card {
    display:flex;
    flex-direction: column;
}
.cart-footer {
    margin-top: auto;
}
</style>