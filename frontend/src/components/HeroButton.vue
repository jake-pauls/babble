<template>
  <button
    class="
      w-1/5
      min-w-min
      bg-black-light bg-opacity-60
      rounded-2xl
      p-4
      focus:outline-none
      hover:shadow-xl hover:bg-opacity-70
    "
  >
    <div class="flex w-20 h-20 mx-auto bg-highlight rounded-full">
      <i class="flex-auto self-center text-4xl text-white" :class="icon" />
    </div>
    <h2 class="text-white font-bold text-3xl mt-8">
      {{ label }}
    </h2>
  </button>
</template>

<script>
  export default {
    name: 'HeroButton',
    props: {
      label: String,
      icon: String
    }
  }
</script>
