<script setup>
// NPM
import { RouterView } from 'vue-router'

// Local
import { BaseSidebar } from '@/components'
</script>

<template>
  <div class="grid grid-cols-[280px_1fr] min-h-screen max-w-[1400px] mx-auto">
    <BaseSidebar />
    <main class="bg-white dark:bg-zinc-950 px-12 grid grid-rows-[auto_1fr]">
      <RouterView />
    </main>
  </div>

  <!-- Background -->
  <div class="bg-gray-500 fixed -z-10 top-0 left-0 right-0 bottom-0 grid grid-cols-2">
    <div class="bg-gray-100 dark:bg-zinc-900">&nbsp;</div>
    <div class="bg-white dark:bg-zinc-950">&nbsp;</div>
  </div>
</template>
