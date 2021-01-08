import { CookieHandler, OPDOMUN_KEY } from 'boot/cookies'

export default function auth ({ next, router }) {
  if (!CookieHandler.get(OPDOMUN_KEY)) {
    return next({ path: '/login' })
  }

  return next()
}
