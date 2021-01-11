import axios from 'axios'
import Notification from '../services/notification.service'

const axiosInstance = axios.create({
  baseURL: `${process.env.API}/api/`
})

export default async ({ Vue, store }) => {
  /**
   * Http interceptor for server side error
   */
  axiosInstance.interceptors.response.use((response) => {
    return response
  }, (error) => {
    if (!error.response) {
      Notification.showError('Server error. Please try again and if problem persist contact administrator.')
      return
    }
    const { response: { status, data } } = error
    if (status === 401) {
      if (data.message.indexOf('E_PASSWORD_MISMATCH') !== -1) {
        Notification.showError('Contraseña incorrecta')
      } else {
        store.dispatch('auth/logout')
        Notification.showError('Su sesión ha expirado. Por favor auntentíquese nuevamente')
      }
    } else if (Array.isArray(data)) {
      data.map(error => {
        Notification.showError(error.message)
      })
    } else {
      Object.keys(data).forEach(property => {
        Notification.showError(data[property])
      })
    }
    return Promise.reject(error)
  })

  Vue.prototype.$axios = axiosInstance
}

export { axiosInstance }
