<script setup>
// NPM
import { RouterView } from 'vue-router'

// Local
import { BaseHeader } from '@/components'
</script>

<template>
  <BaseHeader />
  <div class="container mx-auto grid grid-cols-[auto_1fr] gap-10">
    <aside class="grid w-[350px] py-5">
      <div class="grid self-start gap-2">
        <small class="text-sm text-gray-400 px-3">Base</small>
        <RouterLink to="/docs/base/install" class="btn md">Install</RouterLink>
        <RouterLink to="/docs/base/modal" class="btn md">Modal</RouterLink>
      </div>
    </aside>

    <main class="py-5">
      <RouterView />
    </main>
  </div>
</template>
