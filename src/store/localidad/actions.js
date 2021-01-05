import { axiosInstance } from 'boot/axios'

/**
 * Load all localidades
 * @param commit
 * @returns {Promise<any>}
 */
export function loadLocalidades ({ commit }, { municipioId }) {
  return new Promise((resolve, reject) => {
    axiosInstance.get(`municipios/${municipioId}/localidades`)
      .then(response => {
        commit('FETCH_LOCALIDADES', response.data)
        resolve(response)
      })
      .catch((e) => {
        reject(e)
      })
  })
}

export function clearLocalidades ({ commit }) {
  commit('FETCH_LOCALIDADES', [])
}
