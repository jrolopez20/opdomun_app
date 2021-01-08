import Vue from 'vue'
import VueI18n from 'vue-i18n'
import messages from 'src/i18n'

Vue.use(VueI18n)

Vue.filter('toCurrency', price => {
  if (typeof price !== 'object') {
    return price
  }
  if (!price.value) {
    return 'Gratis'
  }
  const value = price.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
  return `${value} ${price.currency}`
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
