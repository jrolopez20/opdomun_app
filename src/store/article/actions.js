import { axiosInstance } from 'boot/axios'

/**
 * Load all articles
 * @param commit
 * @returns {Promise<any>}
 */
export function loadArticles ({ commit }, { rowsPerPage, page, filter }) {
  return new Promise((resolve, reject) => {
    axiosInstance.get(`articles?limit=${rowsPerPage}&page=${page}&filter=${filter}`)
      .then(response => {
        commit('FETCH_ARTICLES', response.data)
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
