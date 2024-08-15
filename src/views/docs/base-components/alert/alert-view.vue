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
    <BigCode :tabs="tabs" />
  </div>
</template>
