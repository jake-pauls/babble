<template>
  <img :class="{ 'cursor-pointer': clickable }" alt="Babble" :src="src" @click="home" />
</template>

<script>
  export default {
    name: 'Logo',
    props: {
      full: Boolean,
      clickable: Boolean
    },
    computed: {
      src() {
        if (this.full) {
          return require('@/assets/logo-full.svg')
        } else {
          return require('@/assets/logo.svg')
        }
      }
    },
    methods: {
      home() {
        if (this.clickable) {
          this.$router.push('/')
        }
      }
    }
  }
</script>
