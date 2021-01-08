import Vue from 'vue'
import Vuex from 'vuex'

import auth from './auth'
import post from './post'
import provincia from './provincia'
import municipio from './municipio'
import localidad from './localidad'
import hometype from './hometype'
import architecturalTypology from './architectural_typology'
import taxCalculator from './tax_calculator'
import office from './office'
import subscription from './subscription'
import article from './article'
import variableAu from './variable_au'
import purchaseAnnouncement from './purchase-announcement'
import ourServices from './our_services'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      auth,
      post,
      provincia,
      municipio,
      localidad,
      hometype,
      architecturalTypology,
      taxCalculator,
      office,
      subscription,
      article,
      variableAu,
      purchaseAnnouncement,
      ourServices
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })

  return Store
}
