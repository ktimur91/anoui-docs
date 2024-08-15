<script setup>
// Local
import { BigCode, SmallCode } from '@/components'

// Local:examples
import ExamplePreview from './example/ExamplePreview.vue'
import ExampleCode from './example/ExamplePreview.vue?raw'

// Data:base
const tabs = [
  {
    text: 'Preview',
    value: 'preview',
    type: 'preview',
    icon: 'chrome',
    iconPack: 'fileTypes',
    component: ExamplePreview
  },
  {
    text: 'preview-component.vue',
    value: 'code',
    type: 'code',
    language: 'javascript',
    icon: 'vue',
    iconPack: 'fileTypes',
    component: ExampleCode
  }
]
</script>

<template>
  <div class="grid gap-5">
    <div>Базовое использование</div>
    <div class="flex items-center gap-5">
      <button class="btn md base">Usage</button>
      <button class="btn md base">Props</button>
      <button class="btn md base">Events</button>
      <button class="btn md base">Methods</button>
    </div>
    <BigCode :tabs="tabs" />
  </div>
</template>
