import { axiosInstance } from 'boot/axios'
import { CookieHandler } from 'boot/cookies'
const OPDOMUN_KEY = 'opdomun'
/**
 * Execute the login
 * @param dispatch
 * @param commit
 * @param user
 * @returns {Promise<any>}
 */
export function login ({ dispatch, commit, getters }, user) {
  return new Promise((resolve, reject) => {
    axiosInstance.post('login', {
      ...user,
      entry_point: getters.entryPoint
    })
      .then(response => {
        const accessToken = response.data.access_token
        const user = response.data.user
        CookieHandler.set(OPDOMUN_KEY, {
          accessToken,
          user
        })
        dispatch('setAuthorizationHeader', accessToken)

        commit('SET_AUTH_CREDENTIALS', { accessToken, user })
        resolve(response)
      })
      .catch((e) => {
        reject(e)
      })
  })
}

/**
 * Execute the logout
 * @param commit
 * @returns {Promise<any>}
 */
export function logout ({ commit }) {
  return new Promise((resolve, reject) => {
    CookieHandler.remove(OPDOMUN_KEY)
    commit('LOGOUT')
    delete axiosInstance.defaults.headers.common.Authorization
    this.$router.push('/login')
    resolve()
  })
}

/**
 * Change user password
 * @param commit
 * @param user
 * @param newpassword
 * @returns {Promise<any>}
 */
export function changePassword ({ commit }, { user, password }) {
  return new Promise((resolve, reject) => {
    axiosInstance.post(`users/${user.id}/password`, { password })
      .then(response => {
        resolve(response)
      })
      .catch((e) => {
        reject(e)
      })
  })
}

/**
 * Updated user details
 * @param commit
 * @param state
 * @param user
 * @returns {Promise<any>}
 */
export function setUserDetail ({ commit, state }, user) {
  return new Promise((resolve, reject) => {
    axiosInstance.put(`users/${user.id}`, { ...user })
      .then(response => {
        const config = CookieHandler.get(OPDOMUN_KEY)
        const user = response.data
        CookieHandler.set(OPDOMUN_KEY, {
          ...config,
          user
        })
        commit('SET_AUTH_CREDENTIALS', { user })
        resolve(response)
      })
      .catch((e) => {
        reject(e)
      })
  })
}

/**
 * Load all avilable roles
 * @param commit
 * @returns {Promise<any>}
 */
export function getAvailableRoles ({ commit }) {
  return new Promise((resolve, reject) => {
    axiosInstance.get('roles')
      .then(response => {
        commit('FETCH_ROLES', response.data)
        resolve(response)
      })
      .catch((e) => {
        reject(e)
      })
  })
}

export function initDefaultCredentials ({ dispatch, commit }) {
  return new Promise((resolve, reject) => {
    if (CookieHandler.exist(OPDOMUN_KEY)) {
      const accessToken = CookieHandler.get(OPDOMUN_KEY).accessToken
      dispatch('setAuthorizationHeader', accessToken)
      commit('SET_AUTH_CREDENTIALS', {
        accessToken: accessToken,
        user: CookieHandler.get(OPDOMUN_KEY).user
      })
    }
    resolve()
  })
}

export function setAuthorizationHeader ({ commit }, accessToken) {
  axiosInstance.defaults.headers.common.Authorization = `${accessToken.type} ${accessToken.token}`
}
