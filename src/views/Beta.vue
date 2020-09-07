<template>
  <div>
    <button class="button" @onclick="setLive()">Test Live</button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Beta",
  components: {},
  methods: {
    setLive() {
      this.$store.comit("setLive");
      this.$router.push({name:"Home"});
    }
  }
};
</script>

<style lang="scss" scoped></style>
