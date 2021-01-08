import { axiosInstance } from 'boot/axios'

/**
 * Load all our services
 * @param commit
 * @returns {Promise<any>}
 */
export function loadOurServices ({ commit }) {
  return new Promise((resolve, reject) => {
    axiosInstance.get('our_services')
      .then(response => {
        commit('FETCH_OUR_SERVICES', response.data)
        resolve(response)
      })
      .catch((e) => {
        reject(e)
      })
  })
}
