import { axiosInstance } from 'boot/axios'
import { PaginatedResult } from 'components/utils'

/**
 * Load purchase announcements
 * @param commit
 * @param rowsPerPage
 * @param page
 * @returns {Promise<any>}
 */
export function loadPurchaseAnnouncements ({ commit }, { rowsPerPage, page, filter }) {
  let params = ''

  if (filter) {
    for (const key in filter) {
      if (filter[key]) {
        params += `&${key}=${filter[key]}`
      }
    }
  }

  return new Promise((resolve, reject) => {
    axiosInstance.get(`published_subscriptions?limit=${rowsPerPage}&page=${page}${params}`)
      .then(response => {
        const result = PaginatedResult(response)
        commit('FETCH_PURCHASE_ANNOUNCEMENTS', result)
        resolve(response)
      })
      .catch((e) => {
        reject(e)
      })
  })
}
