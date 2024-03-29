import { axiosInstance } from 'boot/axios'
import { PaginatedResult } from 'components/utils'

/**
 * Load all offices
 * @param commit
 * @returns {Promise<any>}
 */
export function loadOffices ({ commit }, { rowsPerPage, page, filter }) {
  return new Promise((resolve, reject) => {
    axiosInstance.get(`offices?limit=${rowsPerPage}&page=${page}&filter=${filter}`)
      .then(response => {
        const result = PaginatedResult(response)
        commit('FETCH_OFFICES', result)
        resolve(response)
      })
      .catch((e) => {
        reject(e)
      })
  })
}
