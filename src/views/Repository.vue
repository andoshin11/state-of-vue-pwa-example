<template>
  <div class="repository">
    <div class="repository__name">{{ repo.name }}</div>
    <stats :repo="repo" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

// components
import Stats from "@/components/Stats.vue";

export default Vue.extend({
  components: {
    Stats
  },
  data() {
    return {
      repo: {
        name: "",
        stargazers_count: 0,
        forks_count: 0,
        watchers: 0
      }
    };
  },
  methods: {
    async fetchData(): Promise<void> {
      const source = `https://api.github.com/repos/vuejs/${
        this.$route.params.name
      }`;

      console.log("start fetching");

      try {
        let response = await fetch(source);
        console.log("response");
        console.log(response);
        const json = await response.json();
        this.repo = json;
      } catch (e) {
        alert("エラーが発生しました");
      }
    }
  },
  mounted() {
    this.fetchData();
  }
});
</script>

<style lang="scss" scoped>
.repository {
  &__name {
    font-size: 5rem;
    color: #42b983;
    font-weight: bold;
    text-transform: uppercase;
  }
}
</style>
