<template>
  <form class="container w-3/12 mx-auto p-8 rounded-xl bg-black bg-opacity-60">
    <h2 class="text-white font-bold text-left text-3xl mb-4">Meeting Code</h2>
    <input class="w-full p-3 rounded-md focus:outline-none" v-model="meetingId" placeholder="Meeting Code" required />
    <button
      class="
        mt-14
        w-full
        h-12
        bg-highlight
        font-bold
        text-white text-2xl
        rounded-md
        hover:bg-highlight-dark
        focus:outline-none
      "
      type="submit"
      @click="joinRoom"
    >
      Join
    </button>
  </form>
</template>

<script>
  export default {
    name: 'JoinRoomForm',
    data() {
      return {
        meetingId: ''
      }
    },
    methods: {
      joinRoom() {
        if (this.meetingId) {
          this.$router.push(`/room/${this.meetingId}`)
        }
      }
    }
  }
</script>
