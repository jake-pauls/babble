<template>
  <div class="home">
    <img alt="Babble Logo" src="../assets/logo.png">
    <Landing msg="Welcome to Babble"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Landing from '@/components/Landing.vue'

export default {
  name: 'Home',
  components: {
   Landing
  }
}
</script>
