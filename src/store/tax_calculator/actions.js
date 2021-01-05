import { axiosInstance } from 'boot/axios'

/**
 * Calculate tax
 * @param commit
 * @returns {Promise<any>}
 */
export function calculateTax ({ commit }, { params }) {
  let stringParams = ''
  if (params) {
    for (const key in params) {
      stringParams += `&${key}=${params[key]}`
    }
  }

  return new Promise((resolve, reject) => {
    axiosInstance.get(`tax_calculator?${stringParams}`)
      .then(response => {
        commit('SET_TAXES', response.data)
        resolve(response)
      })
      .catch((e) => {
        reject(e)
      })
  })
}

export function clearTaxes ({ commit }) {
  commit('SET_TAXES', null)
}
