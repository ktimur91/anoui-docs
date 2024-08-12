<script setup>
// NPM
// import { AnoIcon } from '@ano-vue3/ui/components'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

// Data:imports
const route = useRoute()

// Computed
const title = computed(() => route.meta.title)
const sectionName = computed(() => route.meta.sectionName)
</script>

<template>
  <small class="text-xs text-gray-400 dark:text-gray-500">{{ $t(sectionName) }}</small>
  <h1 class="text-4xl font-bold text-gray-700 dark:text-gray-200">{{ $t(title) }}</h1>

  <main class="mt-8 text-gray-500 dark:text-gray-300">
    <RouterView />
  </main>
</template>
