<template>
  <video ref="video" autoplay="autoplay" />
</template>

<script>
  export default {
    name: 'Video',
    props: {
      stream: {
        type: Object
      }
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
