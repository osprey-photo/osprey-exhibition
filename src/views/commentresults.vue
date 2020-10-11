// Copyright Matthew B White 2020 All Rights Reserved. 
// SPDX-License-Identifier: Apache-2.0
<template>
  <div class="has-text-left">
    <p class="subtitle has-background-light" v-if="isLoading">
      Please wait, just looking up the comments...
    </p>
    <b-table :striped="true" :data="data" :columns="columns"></b-table>
  </div>
</template>

<script>
export default {
  methods: {
    async getResult() {
      const { data } = await this.$http.get(
        "https://8d06c43d.eu-gb.apiconnect.appdomain.cloud/api/comment"
      );
      this.isLoading = false;
      this.data = data.entries.sort((a, b) => b.vote - a.vote);
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
          field: "name",
          label: "Name"
        },
        {
          field: "email",
          label: "email"
        },
        {
          field: "comment",
          label: "Comment"
        }
      ]
    };
  }
};
</script>
