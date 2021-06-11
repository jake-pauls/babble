<template>
  <video ref="video" autoplay="autoplay" :muted="muted" />
</template>

<script>
  export default {
    name: 'Video',
    props: {
      stream: Object,
      muted: Boolean
    },
    mounted() {
      this.$refs.video.addEventListener('loadeddata', () => {
        this.$emit('loadeddata')
      })
    },
    updated() {
      this.$refs.video.srcObject = this.stream
    }
  }
</script>
