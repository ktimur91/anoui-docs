<script setup>
// NPM
import { useI18n } from 'vue-i18n'
import { RouterView, useRoute } from 'vue-router'
import { watch } from 'vue'

// Data:imports
const i18n = useI18n()
const route = useRoute()

// Data:base
const currentLang = localStorage.getItem('current_lang')

// Watch
watch(route, (val) => setDocumentTitle(val?.meta?.title))
watch(i18n.locale, () => setDocumentTitle(route?.meta?.title))

// Created
init()

// Methods
function init() {
  if (currentLang) i18n.locale.value = currentLang

  if (localStorage.getItem('isDarkTheme')) {
    document.documentElement.classList.add('dark')
  }
}
function setDocumentTitle(title) {
  document.title = title ? `Ano | ${i18n.t(title)}` : 'Ano | Error 404'
}
</script>

<template>
  <RouterView />
</template>
