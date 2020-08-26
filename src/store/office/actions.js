import { axiosInstance } from 'boot/axios'

/**
 * Load all offices
 * @param commit
 * @returns {Promise<any>}
 */
export function loadOffices ({ commit }, { rowsPerPage, page, filter }) {
  return new Promise((resolve, reject) => {
    axiosInstance.get(`offices?limit=${rowsPerPage}&page=${page}&filter=${filter}`)
      .then(response => {
        commit('FETCH_OFFICES', response.data)
        resolve(response)
      })
      .catch((e) => {
        reject(e)
      })
  })
}
