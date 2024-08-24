<script setup>
// NPM
import { AnoIcon } from '@ano-vue3/ui/components'
import { useRoute } from 'vue-router'
import { ref, computed, watch, onMounted, nextTick } from 'vue'

// Data:imports
const route = useRoute()

// Data:base
const hasToTopBtn = ref(false)
const ancorList = ref([])

// Computed
const title = computed(() => route.meta.title)
const sectionName = computed(() => route.meta.sectionName)
const prevNext = computed(() => route.meta.prevNext)

// Watch
watch(
  () => route.fullPath,
  () => {
    scrollToElement()
    nextTick(() => {
      getAncorList()
    })
  },
  { deep: true }
)

// Mounted
onMounted(() => {
  window.onscroll = () => {
    hasToTopBtn.value = window.scrollY >= 500
  }
  getAncorList()
})

// Methods
function scrollToElement(elementName) {
  const element = document.querySelector(elementName)
  const y = element ? element.getBoundingClientRect().top + window.scrollY - 20 : 0
  window.scrollTo({ top: y, behavior: 'smooth' })

  if (element) {
    element.classList.add('active')
    setTimeout(() => {
      element.classList.remove('active')
    }, 1000)
  }
}
function getAncorList() {
  ancorList.value = []
  const contentElement = document.querySelector('#content')
  const list = contentElement.querySelectorAll('#ancor')

  for (let index = 0; index < list.length; index++) {
    const element = list[index]
    ancorList.value.push({
      name: element.innerText,
      id: element.dataset.id,
      element
    })
  }
}
</script>

<template>
  <div class="page-toolbar h-[80px] flex items-center gap-2 text-xs text-gray-400 dark:text-gray-500">
    <span>{{ $t(sectionName) }}</span>
    <span>/</span>
    <span>{{ $t(title) }}</span>
    <!-- <h1 class="title">{{ $t(title) }}</h1> -->
  </div>

  <div class="grid gap-10 grid-cols-[1fr_auto]">
    <!-- Content -->
    <div class="grid grid-rows-[1fr_auto] gap-10">
      <div id="content" class="grid gap-12 self-start description">
        <RouterView />
      </div>

      <!-- Footer -->
      <div class="flex justify-between gap-5 items-center h-[60px] sticky bottom-0 z-10 bg-white dark:bg-zinc-900">
        <div class="grid">
          <RouterLink
            v-if="prevNext.prev"
            :to="prevNext.prev.path"
            class="btn lg base justify-center"
            v-tippy="$t(prevNext.prev.name)"
          >
            <AnoIcon pack="bi" icon="arrow-left" size="18" color="fill-current" />
            <!-- {{ $t(prevNext.prev.name) }} -->
          </RouterLink>
        </div>

        <div class="grid">
          <RouterLink
            v-if="prevNext.next"
            :to="prevNext.next.path"
            class="btn lg base justify-center"
            v-tippy="$t(prevNext.next.name)"
          >
            <!-- {{ $t(prevNext.next.name) }} -->
            <AnoIcon pack="bi" icon="arrow-right" size="18" color="fill-current" />
          </RouterLink>
        </div>
      </div>
    </div>

    <!-- Content nav -->
    <div class="content-nav">
      <div class="content-nav__top">
        <template v-if="ancorList?.length">
          <small class="text-sm text-gray-400 dark:text-gray-500 px-3">{{ $t('base.onThisPage') }}</small>
          <div class="grid gap-1 overflow-auto">
            <button
              v-for="ancor of ancorList"
              :key="ancor.id"
              class="btn md base text-left grid"
              @click="scrollToElement(`#ancor[data-id=${ancor.id}]`)"
            >
              <span class="overflow-ellipsis whitespace-nowrap overflow-hidden">{{ ancor.name }}</span>
            </button>
          </div>
        </template>
      </div>

      <div v-if="hasToTopBtn" class="content-nav__bottom">
        <button class="btn lg outline justify-center" @click="scrollToElement()">
          <AnoIcon pack="bi" icon="arrow-up" size="18" color="fill-current" /> {{ $t('base.totop') }}
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.content-nav {
  @apply grid gap-5 grid-rows-[auto_1fr] self-start w-[250px] h-full;

  &__top {
    @apply sticky top-5 grid grid-rows-[auto_1fr] gap-1 pl-5 border-l border-zinc-200 dark:border-zinc-800;
    max-height: calc(100vh - 140px);
  }

  &__bottom {
    @apply sticky bottom-0 grid items-center self-end h-[60px];
  }
}
</style>
