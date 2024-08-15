<script setup>
// NPM
import { useI18n } from 'vue-i18n'
import { AnoIcon } from '@ano-vue3/ui/components'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

// Data:imports
const i18n = useI18n()
const router = useRouter()

// Data:base
const isDarkTheme = ref(false)
const currentLang = ref(i18n.locale.value)
const currentNav = ref([])

// Created
init()

// Methods
function init() {
  isDarkTheme.value = localStorage.getItem('isDarkTheme')
  currentNav.value = router.options.routes.find((el) => el.path === '/docs').children
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
  <aside class="base-sidebar bg-zinc-100 dark:bg-zinc-900 grid grid-rows-[auto_1fr] h-screen sticky top-0 z-0">
    <!-- Head -->
    <div class="h-[130px] grid gap-5 p-5">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <RouterLink to="/" class="flex items-center gap-1 no-underline">
          <img src="/img/logo.svg" alt="Ano ui" class="h-5" />
          <b class="text-2xl text-secondary-800 dark:text-gray-100">ano</b>
        </RouterLink>

        <!-- Actions -->
        <div class="flex items-center gap-2">
          <button class="btn sm" v-tippy="'Русский / English'" @click="toggleLang()">
            <AnoIcon pack="bi" icon="translate" size="16" color="fill-gray-400" />
            {{ currentLang === 'ru' ? 'Рус' : 'Eng' }}
          </button>
          <button class="btn cube md" @click="toggleTheme()">
            <AnoIcon pack="bi" :icon="isDarkTheme ? 'sun-fill' : 'moon-stars-fill'" size="16" color="fill-gray-400" />
          </button>
        </div>
      </div>

      <!-- Search -->
      <button class="base-search">
        <AnoIcon pack="bi" icon="search" size="16" />
        {{ $t('base.search') }}
      </button>
    </div>

    <!-- Body -->
    <div class="base-sidebar__body">
      <!-- Navigation -->
      <div class="grid gap-12 self-start p-5">
        <section class="grid gap-2 self-start">
          <small class="text-sm text-gray-400 dark:text-gray-500 px-4">{{ $t('nav.section.main') }}</small>
          <nav class="base-nav grid gap-2">
            <RouterLink to="/" class="base-nav__item">
              {{ $t('nav.main.home') }}
            </RouterLink>
            <RouterLink to="/changelog" class="base-nav__item">
              {{ $t('nav.main.changelog') }}
              <small class="px-2 rounded-full text-gray-400 bg-zinc-200/50 dark:text-gray-400 dark:bg-zinc-600"
                >2.0.12</small
              >
            </RouterLink>
          </nav>
        </section>

        <section v-for="navItem of currentNav" :key="navItem.path" class="grid gap-2 self-start">
          <!-- <small class="text-sm text-gray-400 dark:text-gray-500 px-4">{{ $t('nav.section.start') }}</small> -->
          <small class="text-sm text-gray-400 dark:text-gray-500 px-4">{{ $t(navItem.meta.sectionName) }}</small>
          <nav class="base-nav grid gap-2">
            <RouterLink
              v-for="childrenItem of navItem.children"
              :key="`${navItem.path}-${childrenItem.path}`"
              :to="`/docs/${navItem.path}/${childrenItem.path}`"
              class="base-nav__item"
            >
              {{ $t(childrenItem.meta.title) }}
            </RouterLink>
          </nav>
        </section>

        <!-- <section class="grid gap-2 self-start">
          <small class="text-sm text-gray-400 dark:text-gray-500 px-4">{{ $t('nav.section.baseComponents') }}</small>
          <nav class="base-nav grid gap-2">
            <RouterLink to="/docs/base/alert" class="base-nav__item">
              {{ $t('nav.baseComponents.alert') }}
            </RouterLink>
            <RouterLink to="/docs/base/dropdown" class="base-nav__item">
              {{ $t('nav.baseComponents.dropdown') }}
            </RouterLink>
            <RouterLink to="/docs/base/modal" class="base-nav__item">
              {{ $t('nav.baseComponents.modal') }}
            </RouterLink>
            <RouterLink to="/docs/base/toast" class="base-nav__item">
              {{ $t('nav.baseComponents.toast') }}
            </RouterLink>
            <RouterLink to="/docs/base/icon" class="base-nav__item">
              {{ $t('nav.baseComponents.icon') }}
            </RouterLink>
          </nav>
        </section>

        <section class="grid gap-2 self-start">
          <small class="text-sm text-gray-400 dark:text-gray-500 px-4">{{ $t('nav.section.formComponents') }}</small>
          <nav class="base-nav grid gap-2">
            <RouterLink to="/docs/form/input" class="base-nav__item">
              {{ $t('nav.formComponents.input') }}
            </RouterLink>
            <RouterLink to="/docs/form/textarea" class="base-nav__item">
              {{ $t('nav.formComponents.textarea') }}
            </RouterLink>
            <RouterLink to="/docs/form/select" class="base-nav__item">
              {{ $t('nav.formComponents.select') }}
            </RouterLink>
            <RouterLink to="/docs/form/autocomplete" class="base-nav__item">
              {{ $t('nav.formComponents.autocomplete') }}
            </RouterLink>
            <RouterLink to="/docs/form/checkbox" class="base-nav__item">
              {{ $t('nav.formComponents.checkbox') }}
            </RouterLink>
            <RouterLink to="/docs/form/radio" class="base-nav__item">
              {{ $t('nav.formComponents.radio') }}
            </RouterLink>
          </nav>
        </section> -->
      </div>

      <!-- Social buttons -->
      <div class="base-sidebar__social">
        <button class="btn lg justify-center" v-tippy="$t('soc.github')">
          <img :src="`/img/brands/${isDarkTheme ? 'github' : 'github-dark'}.svg`" alt="Github logo" />
        </button>
        <button class="btn lg justify-center" v-tippy="$t('soc.figma')">
          <img src="/img/brands/figma.svg" alt="Figma logo" />
        </button>
        <button class="btn lg justify-center" v-tippy="$t('soc.telegram')">
          <img src="/img/brands/telegram.svg" alt="Telegram logo" />
        </button>
      </div>
    </div>
  </aside>
</template>

<style lang="scss">
.base-sidebar {
  &__body {
    @apply overflow-auto grid grid-rows-[1fr_auto];
    height: calc(100vh - 130px);
  }

  &__social {
    @apply grid grid-cols-3 items-center gap-3 p-5 sticky bottom-0 z-10;
    @apply bg-gradient-to-t from-zinc-100 via-zinc-100 to-transparent;
    @apply dark:bg-gradient-to-t dark:from-zinc-900 dark:via-zinc-900 dark:to-transparent;
  }
}

.base-search {
  @apply flex items-center gap-3 px-4 h-10 font-medium;
  @apply rounded-md outline-0;

  @apply bg-zinc-200/50 text-gray-400 fill-gray-400;
  @apply hover:bg-zinc-200;

  @apply dark:bg-zinc-950/50 dark:text-gray-500 dark:fill-gray-500;
  @apply dark:hover:bg-zinc-950;
}

.base-nav {
  &__item {
    @apply px-4 py-1 rounded-md flex items-center gap-2 no-underline text-zinc-800 dark:text-zinc-100;

    @apply hover:bg-white;
    @apply active:bg-gray-50;
    @apply dark:hover:bg-zinc-700;
    @apply dark:active:bg-zinc-800;

    &.active {
      @apply bg-white text-primary-500;
      @apply dark:bg-zinc-700 dark:text-primary-300;
    }
  }
}
</style>
