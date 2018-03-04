<template>
  <div class="home">
    <img src="../assets/logo.png">
    <repo-list :repos="repos"/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

// components
import RepoList from "@/components/RepoList.vue";

export default Vue.extend({
  name: "home",
  components: {
    RepoList
  },
  data() {
    return {
      repos: []
    };
  },
  methods: {
    async fetchData(): Promise<void> {
      const source = "https://api.github.com/orgs/vuejs/repos";

      let response = await fetch(source);
      const json = await response.json();
      this.repos = json;
    }
  },
  mounted(): void {
    this.fetchData();
  }
});
</script>
