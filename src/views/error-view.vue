<script setup>
// NPM
import { AnoIcon } from '@ano-vue3/ui/components'

// import { useRoute, useRouter } from 'vue-router'

// // Data:imports
// const route = useRoute()
// const router = useRouter()

// // Created
// init()

// // Methods
// async function init() {
//   if (route.fullPath.includes('/settings')) {
//     router.replace('/settings')
//   }
// }
</script>

<template>
  <div class="flex items-center justify-center h-screen w-screen">
    <div
      class="flex flex-col items-center justify-center gap-1 text-center m-auto p-10 rounded bg-zinc-100 dark:bg-zinc-800"
    >
      <AnoIcon pack="bi" icon="exclamation-triangle-fill" size="50" color="fill-gray-400" />
      <h1 class="text-3xl font-bold mt-3">Ошибка 404</h1>
      <div class="text-lg text-zinc-400">Похоже такой страницы не существует</div>

      <div class="grid grid-cols-2 gap-3 mt-10">
        <button class="btn lg justify-center" @click="$router.back()">Назад</button>
        <button class="btn lg primary justify-center" @click="$router.push('/')">На главную</button>
      </div>
    </div>
  </div>
</template>
