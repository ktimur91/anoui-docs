<script setup>
// NPM
import { useI18n } from 'vue-i18n'
import { AnoIcon, AnoDropdown } from '@ano-vue3/ui/components'
import { onMounted, ref } from 'vue'

// Local
// import pjson from '../../../package.json'

// Data:imports
const i18n = useI18n()

// Data:base
const isDarkTheme = ref(false)
const currentLang = ref(i18n.locale.value)
// const searchText = ref('')

// Mounted
onMounted(() => {
  init()
})

// Methods
function init() {
  if (localStorage.getItem('isDarkTheme')) {
    isDarkTheme.value = true
    document.documentElement.classList.add('dark')
  }
}
function toggleLang() {
  const lang = currentLang.value === 'ru' ? 'en' : 'ru'
  i18n.locale.value = lang
  currentLang.value = lang
  localStorage.setItem('current_lang', lang)
}
function toggleTheme() {
  isDarkTheme.value = !isDarkTheme.value
  document.documentElement.classList.toggle('dark')

  if (isDarkTheme.value) localStorage.setItem('isDarkTheme', true)
  else localStorage.removeItem('isDarkTheme')
}
</script>

<template>
  <header class="base-header">
    <div class="container mx-auto flex items-center gap-6 h-full">
      <!-- Logo -->
      <RouterLink to="/" class="flex items-center gap-1">
        <img src="/img/logo.svg" alt="Ano ui" class="h-5" />
        <b class="text-2xl text-secondary-800 dark:text-gray-100">ano</b>
      </RouterLink>

      <!-- Search -->
      <button class="base-search">
        <AnoIcon pack="bi" icon="search" size="16" />
        Search
        <small class="box px-2 ml-3">Alt + S</small>
      </button>

      <!-- Right -->
      <div class="ml-auto flex items-center gap-7 h-full">
        <nav class="base-nav flex items-center gap-10 h-full">
          <RouterLink to="/" class="base-nav__item">
            <AnoIcon pack="bi" icon="play-circle-fill" size="16" /> {{ $t('nav.base.gettingStarted') }}
          </RouterLink>
          <RouterLink to="/docs" class="base-nav__item">
            <AnoIcon pack="bi" icon="file-earmark-code-fill" size="16" />{{ $t('nav.base.docs') }}
          </RouterLink>
          <RouterLink to="/icons" class="base-nav__item">
            <AnoIcon pack="bi" icon="emoji-kiss-fill" size="16" />{{ $t('nav.base.icons') }}
          </RouterLink>
          <RouterLink to="/config" class="base-nav__item">
            <AnoIcon pack="bi" icon="gear-fill" size="16" /> {{ $t('nav.base.config') }}
          </RouterLink>
        </nav>

        <span class="text-gray-300 dark:text-gray-700 text-xs">|</span>

        <div class="flex items-center gap-3">
          <button class="btn sm" v-tippy="'Русский / English'" @click="toggleLang()">
            <img src="/img/lang.svg" class="w-4 h-4" />
            {{ currentLang === 'ru' ? 'Рус' : 'Eng' }}
          </button>
          <button class="btn cube md" @click="toggleTheme()">
            <AnoIcon pack="bi" :icon="isDarkTheme ? 'sun-fill' : 'moon-stars-fill'" size="16" color="fill-gray-400" />
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.base-header {
  @apply h-16 grid items-center;
  @apply bg-gray-50;
  @apply dark:bg-wrapper-900;
}
.base-search {
  @apply flex items-center gap-3 px-3 h-8 font-medium;
  @apply rounded-md outline-0;
  @apply bg-gray-200 text-gray-400 fill-gray-400;

  @apply dark:bg-wrapper-800 dark:text-gray-500 dark:fill-gray-500;

  @apply hover:bg-gray-100;

  @apply dark:hover:bg-wrapper-950;
}
.base-nav {
  &__item {
    @apply text-base border-b-2 border-transparent font-medium;
    @apply flex items-center gap-2 h-full;
    @apply text-gray-400 fill-gray-400;
    @apply hover:text-secondary-700 hover:fill-primary-500;
    @apply dark:text-gray-500 dark:fill-gray-500;
    @apply dark:hover:text-gray-200 dark:hover:fill-gray-200;

    &.active {
      @apply border-primary-500 text-black fill-primary-500;
      @apply border-primary-500 dark:text-white dark:fill-primary-500;
    }
  }
}
</style>
