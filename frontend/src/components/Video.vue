<template>
    <div>
        <video width="300" height="300" ref="video" autoplay="autoplay"></video>
    </div>
</template>

<script>
export default {
  props: ["stream"],
  updated() {
      this.$refs.video.srcObject = this.stream;
  },
};
</script>
