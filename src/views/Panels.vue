<template>
  <div class="box has-background-grey-lighter">
    <div class="tile is-ancestor is-vertical">
      <div class="tile">
        <article class="tile is-child notification has-background-grey-lighter">
          <p class="title">Individual Panels</p>
        </article>
        <div class="tile is-6">
          <div class="tile is-parent">
            <article
              class="tile has-background-grey-lighter is-child notification"
            >
              <p class="subtitle">
                A Panel is a collection of images to be viewed as a whole, with
                all images being coherent in some way, visually, stylistical, or
                via a shared narrative.
              </p>
              <span @click="showModal = true" class="button outline"
                >Read More</span
              >
            </article>
          </div>
        </div>
      </div>
      <div class="tile is-12">
        <div class="container" :key="row.rowid" v-for="row in getpanels">
          <div :key="p.author" v-for="p in row" class="tile is-parent">
            <article
              class="tile is-child notification"
              @click="panels(p.author)"
            >
              <p class="title">{{ p.title }}</p>
              <p class="subtitle">{{ p.author }}</p>
              <a>
                <figure class="image ">
                  <img :src="p.large" />
                </figure>
              </a>
            </article>
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
            <p class="title ">Panels</p>
            <div class="has-text-left">
              <p>
                Most of us (photographers) start thinking about panels in terms
                of RPS distinctions.
              </p>
              <p></p>
              <p>
                But this is a very narrow view of what constitutes “a panel” –
                it is subject to clearly stated rules and often unstated
                convention. Principal among these are the number of pictures and
                that it “should look like a panel” - which in practical terms
                means consistency of style and presentation … and a visual
                balance that need have nothing to do with content. For example,
                the arrangement of the images is expected to balance colour
                across the panel and to “point inwards”. That’s all very well if
                you are preoccupied with appearances.
              </p>
              <p>
                I would say, however, that the joy of panels lies mainly in the
                extra dimension of creativity it brings over the single image. -
                the opportunity to explore the subject in more depth.
              </p>
              <p>
                I It is relatively easy to create visual coherence by applying
                similar post-exposure processing, but conceptual coherence
                requires thought. In my opinion the most satisfying panels – for
                the photographer and for the viewer are those that are about
                something. That something may be a place, a thing, an idea, an
                emotion … whatever. If it is a narrative, it will probably be
                chronological, in which case the order of the images is
                important. But it is possible to create narratives, without a
                linear chronology. Photography is closely related to memory, and
                our memories often exist as non-linear fragments./p>
              </p>

              <p>
                Identifying that something, and thinking about it, is your
                starting point.
              </p>

              <p>
                Editing is the most important step … and the hardest. Sometimes
                your strongest visual images need to be sacrificed to avoid
                distraction. Your final panel may be only two images, but you
                will know when it is right. A final thought – don’t worry if
                your ideas are not immediately obvious from you panel – there
                really is nothing wrong with having to explain it! This is not a
                competition!! Even the RPS have recognised the value of the
                “statement of intent”. Everyone will be interested in why you
                have chosen this particular set of images and presented them in
                this way.
              </p>

              <p>Words: Chris Morris</p>
            </div>
          </div>
        </div>
        <button class="modal-close" @click="showModal = false"></button>
      </div>
    </div>
  </div>
</template>

<script>
// s

function chunkArray(myArray, chunk_size) {
  var index = 0;
  var arrayLength = myArray.length;
  var tempArray = [];
  var rowid = 0;
  for (index = 0; index < arrayLength; index += chunk_size) {
    let myChunk = myArray.slice(index, index + chunk_size);
    myChunk.rowid = rowid++;
    // Do something if you want with the group
    tempArray.push(myChunk);
  }

  return tempArray;
}

// @ is an alias to /src
// import IntroComp from "@/components/IntroComp";
export default {
  name: "Panels",
  components: {},
  data() {
    return {
      showModal: false
    };
  },
  computed: {
    getpanels() {
      let ca = Object.values(this.$store.getters.getCategories);
      ca = chunkArray(ca, 3);
      console.log(ca);
      return ca;
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
