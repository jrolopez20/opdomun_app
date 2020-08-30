import { axiosInstance } from 'boot/axios'

/**
 * Load all places
 * @param commit
 * @returns {Promise<any>}
 */
export function loadAllPlaces ({ commit }) {
  return new Promise((resolve, reject) => {
    axiosInstance.get('otherplaces')
      .then(response => {
        commit('FETCH_ALL_PLACES', response.data)
        resolve(response)
      })
      .catch((e) => {
        reject(e)
      })
  })
}
