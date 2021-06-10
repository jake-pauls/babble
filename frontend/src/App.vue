<template>
  <div class="w-screen h-screen" id="app">
    <router-view />
  </div>
</template>

<style>
  #app {
    font-family: Roboto, Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #0a0a0a;
    background-image: radial-gradient(#a7a7a73b 7%, #ffffff00 0%), linear-gradient(225deg, #8a24f0 0%, #002863 100%);
    background-repeat: space;
    background-size: 40px 40px, cover;
  }
</style>
