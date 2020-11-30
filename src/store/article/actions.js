import { axiosInstance } from 'boot/axios'
import { PaginatedResult } from 'components/utils'

/**
 * Load all articles
 * @param commit
 * @returns {Promise<any>}
 */
export function loadArticles ({ commit }, { rowsPerPage, page, filter }) {
  return new Promise((resolve, reject) => {
    axiosInstance.get(`articles?limit=${rowsPerPage}&page=${page}&filter=${filter}`)
      .then(response => {
        const result = PaginatedResult(response)
        commit('FETCH_ARTICLES', result)
        resolve(response)
      })
      .catch((e) => {
        reject(e)
      })
  })
}

/**
 * Get article
 * @param commit
 * @returns {Promise<any>}
 */
export function getArticle ({ commit }, { id }) {
  return new Promise((resolve, reject) => {
    axiosInstance.get(`articles/${id}`)
      .then(response => {
        commit('SET_ARTICLE', response.data)
        resolve(response)
      })
      .catch((e) => {
        reject(e)
      })
  })
}
