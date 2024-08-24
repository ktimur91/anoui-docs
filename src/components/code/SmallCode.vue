<script setup>
// NPM
import { AnoIcon } from '@ano-vue3/ui/components'
import { ref } from 'vue'

// Props
const props = defineProps(['code'])

// Data:base
const isCopied = ref(false)

// Methods
function copyCode() {
  isCopied.value = true
  console.log(props.code)
  setTimeout(() => {
    isCopied.value = false
  }, 2000)
}
</script>

<template>
  <code class="flex items-center gap-2 pl-5 pr-3 py-3 bg-zinc-100 dark:bg-zinc-800 rounded">
    <slot />

    <button class="btn md cube ml-auto" v-tippy="isCopied ? $t('base.copied') : $t('base.copy')" @click="copyCode()">
      <AnoIcon
        pack="bi"
        :icon="isCopied ? 'check-circle-fill' : 'copy'"
        size="16"
        :color="isCopied ? 'fill-green-600' : 'fill-gray-400'"
      />
    </button>
  </code>
</template>
