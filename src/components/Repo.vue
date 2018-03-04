<template>
  <li class="repo" @click="moveToRepo">
    <div class="repo__name">{{ repo.name }}</div>
    <div class="repo__stars">⭐️ {{ repo.stargazers_count }}</div>
  </li>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Repo",
  props: {
    repo: {
      type: Object,
      required: true
    }
  },
  methods: {
    moveToRepo(): void {
      this.$router.push({ path: `/repo/${this.repo.name}` });
    }
  }
});
</script>

<style lang="scss" scoped>
.repo {
  list-style: none;
  background-color: #42b983;
  width: 50%;
  margin: auto;
  margin-bottom: 20px;
  height: 50px;
  border-radius: 50px;
  line-height: 50px;
  color: white;
  font-size: 1.2rem;
  padding: 0 20px;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
  &__name {
    display: inline-block;
    width: 60%;
    text-align: left;
  }
  &__stars {
    display: inline-block;
    width: 40%;
    text-align: right;
  }
}
</style>
