<template>
  <ul class="repos">
    <Repo :repo="repo" v-for="repo in repos" :key="repo.id" />
  </ul>
</template>

<script lang="ts">
import Vue from "vue";

// components
import Repo from "@/components/Repo.vue";

export default Vue.extend({
  name: "RepoList",
  components: {
    Repo
  },
  props: {
    repos: {
      typs: Array,
      required: true
    }
  }
});
</script>

<style lang="scss" scoped>
.repos {
  padding-left: 0;
}
</style>
