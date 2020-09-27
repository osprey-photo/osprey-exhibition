<template>
  <div class="has-text-left">
    <p class="subtitle has-background-light" v-if="isLoading">Please wait, just adding up the numbers...</p>
    <b-table :striped="true" :data="data" :columns="columns"></b-table>
  </div>
</template>

<script>
export default {
  methods: {
    async getResult() {
      const { data } = await this.$http.get(
        "https://8d06c43d.eu-gb.apiconnect.appdomain.cloud/api/vote"
      );
      this.isLoading=false;
      this.data = data.results.sort((a,b)=>b.vote-a.vote);
    }
  },
  mounted: async function() {
    this.getResult();
  },
  data() {
    return {
      isLoading: true,
      data: [],
      columns: [
        {
          field: "author",
          label: "Name",
          centered:false
        },
        {
          field: "title",
          label: "Title"
        },
        {
          field: "vote",
          label: "Vote",
          width: "40",
          numeric: true
        }
      ]
    };
  }
};
</script>