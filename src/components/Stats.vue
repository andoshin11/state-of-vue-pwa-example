<template>
  <div class="stats">
    <div class="stat">
      <div class="stat__label">Stars</div>
      <div class="stat__count">🌟 {{ repo.stargazers_count }}</div>
    </div>
    <div class="stat">
      <div class="stat__label">Forked</div>
      <div class="stat__count">🍴 {{ repo.forks_count }}</div>
    </div>
    <div class="stat">
      <div class="stat__label">Watchers</div>
      <div class="stat__count">👀 {{ repo.watchers }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    repo: {
      type: Object,
      required: true
    }
  }
});
</script>

<style lang="scss" scoped>
.stat {
  display: inline-block;
  width: calc(100% / 3);
  &__label {
    font-style: italic;
    line-height: 3;
    font-weight: bold;
  }
  &__count {
    text-decoration: underline;
  }
}
</style>
