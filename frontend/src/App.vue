<template>
  <div>
    <div id="nav">
      <router-link to="/">Babble</router-link> |
      <router-link to="/start">Get Started</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #0A0A0A;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #0A0A0A;
}

#nav a.router-link-exact-active {
  color: #DB25A8;
}
</style>
