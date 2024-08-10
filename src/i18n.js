import { createI18n } from 'vue-i18n'

import ru from './assets/lang/ru.json'
import en from './assets/lang/en.json'

const i18n = createI18n({
  warnHtmlMessage: false,
  legacy: false,
  locale: 'ru',
  fallbackLocale: 'ru',
  messages: {
    ru,
    en
  }
})

export default i18n
