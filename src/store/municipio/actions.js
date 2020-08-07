import { axiosInstance } from 'boot/axios'

/**
 * Load all municipios
 * @param commit
 * @returns {Promise<any>}
 */
export function loadMunicipios ({ commit }, { provinciaId }) {
  return new Promise((resolve, reject) => {
    axiosInstance.get(`provincias/${provinciaId}/municipios`)
      .then(response => {
        commit('FETCH_MUNICIPIOS', response.data.data)
        resolve(response)
      })
      .catch((e) => {
        reject(e)
      })
  })
}

export function clearMunicipios ({ commit }) {
  commit('FETCH_MUNICIPIOS', [])
}
