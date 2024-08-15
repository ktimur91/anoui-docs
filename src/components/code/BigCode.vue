<script setup>
// NPM
import hljs from 'highlight.js'
import { AnoIcon, AnoTabSwipe } from '@ano-vue3/ui/components'
import { ref, toRefs, computed } from 'vue'

// Props
const props = defineProps({
  tabs: {
    type: Array,
    default: () => []
  }
})

// Data:base
const { tabs } = toRefs(props)
const isCopied = ref(false)
const currentTab = ref('')
const vHighlight = {
  created: handler,
  updated: handler
}

// Computed
const currentData = computed(() => {
  return tabs.value.find((el) => el.value === currentTab.value)
})

// Created
init()

// Methods
function init() {
  if (tabs.value.length && !currentTab.value) {
    currentTab.value = tabs.value[0].value
  }
}
function handler(el, binding) {
  if (currentData.value.type === 'code') {
    el.innerHTML = hljs.highlight(binding.value, { language: currentData.value.language }).value
    el.className = `hljs ${currentData.value.language}`
  }
}
function copyCode() {
  isCopied.value = true
  setTimeout(() => {
    isCopied.value = false
  }, 2000)
}
</script>

<template>
  <div class="bg-zinc-100 dark:bg-zinc-800 rounded grid">
    <AnoTabSwipe
      v-model="currentTab"
      :items="tabs"
      default-class="px-5 border-b border-zinc-200 dark:border-zinc-700"
      default-class-btns="flex h-full gap-5"
      btn-class="tab-swipe__item"
    />

    <!-- Preview -->
    <div v-if="currentData.type === 'preview'" class="p-5">
      <component :is="currentData.component" />
    </div>

    <!-- Code -->
    <div v-if="currentData.type === 'code'" class="grid relative z-0">
      <button
        class="btn md cube absolute right-2 top-2"
        v-tippy="isCopied ? $t('base.copied') : $t('base.copy')"
        @click="copyCode('install')"
      >
        <AnoIcon
          pack="bi"
          :icon="isCopied ? 'check-circle-fill' : 'copy'"
          size="16"
          :color="isCopied ? 'fill-green-600' : 'fill-gray-400'"
        />
      </button>
      <!-- <button class="docs-code__copy btn md cube outline pos-a z-1" v-tippy="$t('base.copy')">
        <AnoIcon icon="copy" color="grey" size="18" />
      </button> -->
      <pre class="m-0">
        <code v-highlight="currentData.component" />
      </pre>
    </div>
  </div>
</template>

<style lang="scss">
@use 'sass:meta';

html {
  @include meta.load-css('highlight.js/styles/atom-one-light.css');

  .hljs {
    background-color: var(--box-l);
  }
}
html.dark {
  @include meta.load-css('highlight.js/styles/atom-one-dark.css');
  .hljs {
    background-color: var(--box-l);
  }
}
pre {
  display: contents;

  .hljs {
    overflow: auto;
    padding: 20px;
    line-height: 24px;
    border-radius: 0 0 var(--br) var(--br);
  }
}

// Tab swipe
.tab-swipe {
  &__item {
    @apply grid grid-cols-[auto_1fr] gap-2 items-center h-[50px] font-semibold text-zinc-900 dark:text-zinc-300;

    &.active {
      @apply shadow-[0_2px_0_0] shadow-primary-500;
    }
  }
}
</style>
