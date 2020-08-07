import { axiosInstance } from 'boot/axios'

/**
 * Load all provincias
 * @param commit
 * @returns {Promise<any>}
 */
export function loadProvincias ({ commit }) {
  return new Promise((resolve, reject) => {
    axiosInstance.get('provincias')
      .then(response => {
        commit('FETCH_PROVINCIAS', response.data.data)
        resolve(response)
      })
      .catch((e) => {
        reject(e)
      })
  })
}
