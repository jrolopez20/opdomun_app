import { axiosInstance } from 'boot/axios'
import { PaginatedResult } from 'components/utils'

/**
 * Load purchase announcements
 * @param commit
 * @param rowsPerPage
 * @param page
 * @returns {Promise<any>}
 */
export function loadPurchaseAnnouncements ({ commit }, { rowsPerPage, page }) {
  return new Promise((resolve, reject) => {
    axiosInstance.get(`published_subscriptions?limit=${rowsPerPage}&page=${page}`)
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
