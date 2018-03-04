<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-link to="/" class="title">State of Vue</router-link>
    <a href="https://github.com/andoshin11/state-of-vue-pwa-example" target="_blank">GitHub Link</a>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.title {
  font-size: 2em;
  color: black;
  transition: 0.3s;
  text-decoration: none;
  font-weight: bold;
  display: block;
}

.title:hover {
  opacity: 0.6;
}
</style>
