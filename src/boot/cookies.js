import { Cookies } from 'quasar'

let cookies = null

export default async ({ store, ssrContext }/* { app, router, Vue ... } */) => {
  cookies = process.env.SERVER
    ? Cookies.parseSSR(ssrContext)
    : Cookies // otherwise we're on client

  store.dispatch('auth/initDefaultCredentials')
}

export class CookieHandler {
  static get (name) {
    return cookies.get(name)
  }

  static set (name, value) {
    cookies.set(name, value)
  }

  static exist (name) {
    return cookies.has(name)
  }

  static remove (name) {
    if (cookies.has(name)) {
      cookies.remove(name)
      return true
    }
    return false
  }
}
