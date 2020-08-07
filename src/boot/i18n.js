import Vue from 'vue'
import VueI18n from 'vue-i18n'
import messages from 'src/i18n'

Vue.use(VueI18n)

Vue.filter('toCurrency', value => {
  if (typeof value !== 'number') {
    return value
  }
  // const number = (num / 1).toFixed(2).replace(',', '.')
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' CUC'
})

const i18n = new VueI18n({
  locale: 'es',
  fallbackLocale: 'es',
  messages
})

export default ({ app }) => {
  // Set i18n instance on app
  app.i18n = i18n
}

export { i18n }
