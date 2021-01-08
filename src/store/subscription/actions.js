import { axiosInstance } from 'boot/axios'
import { PaginatedResult } from 'components/utils'

export function addSubscription ({ commit, state, dispatch }, subscription) {
  return new Promise((resolve, reject) => {
    axiosInstance.post('subscriptions/', subscription)
      .then(response => {
        resolve(response)
      })
      .catch((e) => {
        reject(e)
      })
  })
}

export function editSubscription ({ commit, state, dispatch }, subscription) {
  return new Promise((resolve, reject) => {
    axiosInstance.put(`subscriptions/${subscription.id}`, subscription)
      .then(response => {
        resolve(response)
      })
      .catch((e) => {
        reject(e)
      })
  })
}

/**
 * Load all subscriptions
 * @param commit
 * @returns {Promise<any>}
 */
export function loadSubscriptions ({ commit }, { rowsPerPage, page, filter }) {
  let params = ''

  if (filter) {
    for (const key in filter) {
      if (filter[key]) {
        params += `&${key}=${filter[key]}`
      }
    }
  }
  return new Promise((resolve, reject) => {
    axiosInstance.get(`subscriptions?limit=${rowsPerPage}&page=${page}${params}`)
      .then(response => {
        const result = PaginatedResult(response)
        commit('FETCH_SUBSCRIPTIONS', result)
        resolve(response)
      })
      .catch((e) => {
        reject(e)
      })
  })
}

/**
 * Load subscription
 * @param commit
 * @returns {Promise<any>}
 */
export function loadSubscription ({ commit }, { id }) {
  return new Promise((resolve, reject) => {
    axiosInstance.get(`subscriptions/${id}`)
      .then(response => {
        commit('SET_SUBSCRIPTION', response.data)
        resolve(response)
      })
      .catch((e) => {
        reject(e)
      })
  })
}

/**
 * Remove subscription
 * @param commit
 * @returns {Promise<any>}
 */
export function removeSubscription ({ commit }, id) {
  return new Promise((resolve, reject) => {
    axiosInstance.delete(`subscriptions/${id}`)
      .then(response => {
        resolve(response)
      })
      .catch((e) => {
        reject(e)
      })
  })
}
