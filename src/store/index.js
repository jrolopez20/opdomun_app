import Vue from 'vue'
import Vuex from 'vuex'

import post from './post'
import provincia from './provincia'
import municipio from './municipio'
import hometype from './hometype'
import office from './office'
import subscription from './subscription'
import article from './article'

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
      post,
      provincia,
      municipio,
      hometype,
      office,
      subscription,
      article
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })

  return Store
}
