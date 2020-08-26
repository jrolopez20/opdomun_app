import axios from 'axios'
import Notification from '../services/notification.service'
const baseUrl = 'http://localhost:3334'
const axiosInstance = axios.create({
  baseURL: `${baseUrl}/api/`
})

const config = {
  pathPostPicture: `${baseUrl}/images/post_pictures/`,
  pathArticlePicture: `${baseUrl}/images/article_pictures/`,
  portalUrl: 'https://opdomun:com'
}

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
      store.dispatch('auth/logout')
      Notification.showError('Su sesión ha expirado. Por favor auntentíquese nuevamente')
    } else {
      Object.keys(data).forEach(property => {
        Notification.showError(data[property])
      })
    }
    return Promise.reject(error)
  })

  Vue.prototype.$axios = axiosInstance
}

export { axiosInstance, config }
