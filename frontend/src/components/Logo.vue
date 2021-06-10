<template>
  <img alt="Babble" :src="src" />
</template>

<script>
  export default {
    name: 'Logo',
    props: {
      full: Boolean
    },
    computed: {
      src() {
        if (this.full) {
          return require('@/assets/logo-full.svg')
        } else {
          return require('@/assets/logo.svg')
        }
      }
    }
  }
</script>
