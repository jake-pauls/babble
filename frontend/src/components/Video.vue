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
    updated() {
      console.log(JSON.stringify(this.stream))

      this.$refs.video.srcObject = this.stream
    }
  }
</script>
