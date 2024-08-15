<script setup>
import { AnoIcon } from '@ano-vue3/ui/components'
</script>

<template>
  <section class="p-8 rounded-xl h-[400px] flex items-center justify-center bg-zinc-100 dark:bg-zinc-900">
    <div class="flex flex-col items-center justify-center gap-2 text-center">
      <h1 class="text-4xl font-extrabold">UI-компоненты для Vue3</h1>
      <span class="text-lg text-gray-400">
        Простые компоненты, легко кастомизировать, подключайте свои стили или используйте TailWind.
      </span>
      <div class="flex mt-7">
        <button class="btn primary lg">
          Начало работы
          <AnoIcon pack="mdi" icon="mdi-arrow-right" size="18" />
        </button>
      </div>
    </div>
  </section>
</template>
