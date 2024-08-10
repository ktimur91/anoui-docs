<script setup>
// // NPM
// import { UiLoading } from '@aistim/vue3-ui/components'
// import { useRoute, useRouter } from 'vue-router'

// // Local
// import { useAuthStore } from '@/stores'

// // Data
// const router = useRouter()
// const route = useRoute()
// const authStore = useAuthStore()

// // Created
// checkRedirect()

// // Methods
// function checkRedirect() {
//   if (route?.fullPath === '/') {
//     if (authStore.tokenGetter) router.push('/orders')
//     else router.push('/auth/sign-in')
//   }
// }
</script>

<template>
  <div class="redirect flex fd-c ai-c jc-c p-50 ggap-10">
    <UiLoading position="pos-r" />
    <b>ждите перенаправляю</b>
  </div>
</template>
