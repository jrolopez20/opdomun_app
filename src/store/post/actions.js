import { axiosInstance } from 'boot/axios'

/**
 * Load all posts
 * @param commit
 * @returns {Promise<any>}
 */
export function loadPosts ({ commit }, { rowsPerPage, page, filter }) {
  return new Promise((resolve, reject) => {
    axiosInstance.get(`posts?plan=1&limit=${rowsPerPage}&page=${page}&filter=${filter}`)
      .then(response => {
        commit('FETCH_POSTS', response.data)
        resolve(response)
      })
      .catch((e) => {
        reject(e)
      })
  })
}

export function loadFeaturedPosts ({ commit }, { rowsPerPage, page }) {
  return new Promise((resolve, reject) => {
    axiosInstance.get(`featured_posts?limit=${rowsPerPage}&page=${page}`)
      .then(response => {
        commit('FETCH_FEATURED_POSTS', response.data.data)
        resolve(response)
      })
      .catch((e) => {
        reject(e)
      })
  })
}

export function getPost ({ commit, state, dispatch }, { id }) {
  return new Promise((resolve, reject) => {
    axiosInstance.get(`posts/${id}`)
      .then(response => {
        commit('SET_POST', response.data)
        resolve(response)
      })
      .catch((e) => {
        reject(e)
      })
  })
}
