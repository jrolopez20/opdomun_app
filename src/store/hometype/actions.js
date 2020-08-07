import { axiosInstance } from 'boot/axios'

/**
 * Load all hometypes
 * @param commit
 * @returns {Promise<any>}
 */
export function loadHomeTypes ({ commit }) {
  return new Promise((resolve, reject) => {
    axiosInstance.get('hometypes')
      .then(response => {
        commit('FETCH_HOMETYPES', response.data)
        resolve(response)
      })
      .catch((e) => {
        reject(e)
      })
  })
}
