<script setup>
// NPM
// import { AnoIcon } from '@ano-vue3/ui/components'
// import { ref } from 'vue'

// Local
import { BigCode, SmallCode } from '@/components'

// Local:examples
import ExampleApp from './example/ExampleApp.vue?raw'
import ExampleMain from './example/ExampleMain.js?raw'

// Data:base
const tabs = [
  {
    text: 'your-component.vue',
    value: 'appvue',
    type: 'code',
    language: 'javascript',
    icon: 'vue',
    iconPack: 'fileTypes',
    component: ExampleApp
  },
  {
    text: 'global-import.js',
    value: 'mainjs',
    type: 'code',
    language: 'javascript',
    icon: 'js',
    iconPack: 'fileTypes',
    component: ExampleMain
  }
]
</script>

<template>
  <div class="grid gap-5">
    <div>Вы можете установить Ano UI с помощью npm, другого выбора у вас нет 😋</div>

    <SmallCode code="npm i @ano-vue3/ui">
      <span class="text-red-500 dark:text-yellow-300">npm</span>
      <span>install</span>
      <span class="text-green-600 dark:text-green-500">@ano-vue3/ui</span>
    </SmallCode>

    <div class="mt-5">
      <h2 class="text-2xl font-semibold mb-3 text-gray-700 dark:text-gray-200">Импорт</h2>
      Использовать компоненты <a href="//ano.ui" class="alink">Ano UI</a> можно двумя способами:
      <ol>
        <li>1) Точечно импортируя только в те компоненты где вы их будете использовать</li>
        <li>
          2) Либо глобально чтобы любой компонент был доступен во всем проекте без импорта, обычно для этого используют
          <span class="font-semibold">main.js</span> файл
        </li>
      </ol>
    </div>

    <BigCode :tabs="tabs" />
  </div>
</template>
