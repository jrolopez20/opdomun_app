import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routes'

Vue.use(VueRouter)

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default function (/* { store, ssrContext } */) {
  const Router = new VueRouter({
    scrollBehavior: () => ({
      x: 0,
      y: 0
    }),
    routes,

    // Leave these as they are and change in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
  })

  // Creates a `nextMiddleware()` function which not only
  // runs the default `next()` callback but also triggers
  // the subsequent Middleware function.
  function nextFactory (context, middleware, index) {
    const subsequentMiddleware = middleware[index]
    // If no subsequent Middleware exists,
    // the default `next()` callback is returned.
    if (!subsequentMiddleware) return context.next

    return (...parameters) => {
      // Run the default Vue Router `next()` callback first.
      context.next(...parameters)
      // Then run the subsequent Middleware with a new
      // `nextMiddleware()` callback.
      const nextMiddleware = nextFactory(context, middleware, index)

      subsequentMiddleware({
        ...context,
        next: nextMiddleware
      })
    }
  }

  Router.beforeEach((to, from, next) => {
    if (to.meta.middleware) {
      const middleware = Array.isArray(to.meta.middleware)
        ? to.meta.middleware
        : [to.meta.middleware]

      const context = {
        from,
        next,
        Router,
        to
      }
      const nextMiddleware = nextFactory(context, middleware, 1)

      return middleware[0]({
        ...context,
        next: nextMiddleware
      })
    }

    return next()
  })

  return Router
}
