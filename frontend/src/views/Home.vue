<template>
  <div class="flex h-full">
    <div class="container m-auto">
      <Logo class="m-auto" full />
      <h1 class="text-white font-light text-4xl pt-10">Pair, speed, and collaborative programming at your fingertips</h1>
      <button
        class="
          mt-20
          w-60
          h-16
          bg-highlight
          font-bold
          text-white text-3xl
          rounded-full
          hover:bg-highlight-dark
          focus:outline-none
        "
        type="button"
        @click="$router.push('/start')"
      >
        Start
      </button>
    </div>
  </div>
</template>

<script>
  import Logo from '@/components/Logo'
  export default {
    name: 'Home',
    components: {
      Logo
    }
  }
</script>
