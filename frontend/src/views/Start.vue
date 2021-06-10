<template>
  <div class="flex w-full h-full">
    <Logo class="absolute m-2 w-24 h-24" clickable />
    <div class="container m-auto">
      <template v-if="$route.path === '/start'">
        <HeroButton class="mx-12 my-5" label="Create" icon="ri-add-fill" @click="$router.push('/room')" />
        <HeroButton class="mx-12 my-5" label="Join" icon="ri-login-box-line" @click="$router.push('/start/join')" />
      </template>
      <router-view />
    </div>
  </div>
</template>

<script>
  import Logo from '@/components/Logo'
  import HeroButton from '@/components/HeroButton'

  export default {
    name: 'Start',
    components: {
      Logo,
      HeroButton
    },
    data() {
      return {
        form: ''
      }
    }
  }
</script>
