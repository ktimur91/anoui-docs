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
  <div class="child-page">
    <h2 id="ancor" data-id="install" class="title">Установка</h2>
    <p>Вы можете установить Ano UI с помощью npm, другого выбора у вас нет 😋</p>

    <SmallCode code="npm i @ano-vue3/ui">
      <span class="text-red-500 dark:text-yellow-300">npm</span>
      <span>install</span>
      <span class="text-green-600 dark:text-green-500">@ano-vue3/ui</span>
    </SmallCode>

    <h2 id="ancor" data-id="import" class="title mt-8">Базовое использование</h2>
    <p>Использовать компоненты <a href="//ano.ui" class="alink">Ano UI</a> можно двумя способами:</p>
    <ol>
      <li>1) Точечно импортируя только в те компоненты где вы их будете использовать</li>
      <li>
        2) Либо глобально чтобы любой компонент был доступен во всем проекте без импорта, обычно для этого используют
        <span class="font-semibold">main.js</span> файл
      </li>
    </ol>

    <BigCode :tabs="tabs" />

    <h2 id="ancor" data-id="import2" class="title mt-8">Some title</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, commodi placeat. In cupiditate error nihil
      esse. Nam, vero veniam aut eius adipisci animi, voluptas ipsam inventore blanditiis tempora voluptatibus saepe?
    </p>
  </div>
</template>
