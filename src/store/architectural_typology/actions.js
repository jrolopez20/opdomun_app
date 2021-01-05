import { axiosInstance } from 'boot/axios'

/**
 * Load all architectural typologies
 * @param commit
 * @returns {Promise<any>}
 */
export function loadArchitecturalTypologies ({ commit }) {
  return new Promise((resolve, reject) => {
    axiosInstance.get('architectural_typologies')
      .then(response => {
        commit('FETCH_ARCHITECTURAL_TYPOLOGIES', response.data)
        resolve(response)
      })
      .catch((e) => {
        reject(e)
      })
  })
}
