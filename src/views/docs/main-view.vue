<script setup>
// NPM
import { AnoIcon } from '@ano-vue3/ui/components'
import { useRoute } from 'vue-router'
import { ref, computed, watch, onMounted } from 'vue'

// Data:imports
const route = useRoute()

// Data:base
const hasToTopBtn = ref(false)

// Computed
const title = computed(() => route.meta.title)
const sectionName = computed(() => route.meta.sectionName)
const prevNext = computed(() => route.meta.prevNext)

// Watch
watch(
  () => route.fullPath,
  () => {
    scrollToTop()
  },
  { deep: true }
)

// Mounted
onMounted(() => {
  window.onscroll = () => {
    hasToTopBtn.value = window.scrollY >= 500
  }
})

// Methods
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <div class="grid grid-rows-[1fr_auto] min-h-full text-gray-500 dark:text-gray-300">
    <!-- Content -->
    <div class="grid gap-1 self-start">
      <small class="text-xs text-gray-400 dark:text-gray-500">{{ $t(sectionName) }}</small>
      <h1 class="text-4xl font-bold text-gray-700 dark:text-gray-200 mb-8">{{ $t(title) }}</h1>

      <div class="grid gap-10 self-start grid-cols-[1fr_auto]">
        <RouterView />

        <!-- Content nav -->
        <div class="grid gap-1 self-start w-[200px] border-l border-zinc-200 dark:border-zinc-800 pl-5">
          <small class="text-sm text-gray-400 dark:text-gray-500 px-3">{{ $t('base.onThisPage') }}</small>
          <button class="btn md base">Usage</button>
          <button class="btn md base">Props</button>
          <button class="btn md base">Events</button>
          <button class="btn md base">Methods</button>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div class="grid grid-cols-3 gap-5 items-center mt-10 h-[60px] sticky bottom-0 z-10 bg-white dark:bg-zinc-950">
      <div class="grid">
        <RouterLink v-if="prevNext.prev" :to="prevNext.prev.path" class="btn lg base justify-center">
          <AnoIcon pack="bi" icon="arrow-left" size="18" color="fill-current" />
          {{ $t(prevNext.prev.name) }}
        </RouterLink>
      </div>

      <div class="flex items-center justify-center">
        <button v-if="hasToTopBtn" class="btn lg base justify-center cube" @click="scrollToTop()">
          <AnoIcon pack="bi" icon="arrow-up" size="18" color="fill-current" />
        </button>
      </div>

      <div class="grid">
        <RouterLink v-if="prevNext.next" :to="prevNext.next.path" class="btn lg base justify-center">
          {{ $t(prevNext.next.name) }}
          <AnoIcon pack="bi" icon="arrow-right" size="18" color="fill-current" />
        </RouterLink>
      </div>
    </div>
  </div>
</template>
