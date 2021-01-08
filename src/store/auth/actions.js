import { axiosInstance } from 'boot/axios'
import { CookieHandler, OPDOMUN_KEY } from 'boot/cookies'

export function login ({ dispatch, commit, getters }, user) {
  return new Promise((resolve, reject) => {
    axiosInstance.post('login', { ...user })
      .then(response => {
        const accessToken = response.data
        CookieHandler.set(OPDOMUN_KEY, {
          accessToken
        })
        dispatch('setAuthorizationHeader', accessToken)
        dispatch('getAuthenticatedUser')

        commit('SET_ACCESS_TOKEN', accessToken)
        resolve(response)
      })
      .catch((e) => {
        reject(e)
      })
  })
}

export function logout ({ commit }) {
  return new Promise((resolve, reject) => {
    CookieHandler.remove(OPDOMUN_KEY)
    commit('LOGOUT')
    delete axiosInstance.defaults.headers.common.Authorization
    this.$router.push('/login')
    resolve()
  })
}

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
        commit('SET_AUTH_CREDENTIALS', user)
        resolve(response)
      })
      .catch((e) => {
        reject(e)
      })
  })
}

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

export function getAuthenticatedUser ({ commit }) {
  return new Promise((resolve, reject) => {
    axiosInstance.get('authenticated_user')
      .then(response => {
        const config = CookieHandler.get(OPDOMUN_KEY)
        const user = response.data
        CookieHandler.set(OPDOMUN_KEY, {
          ...config,
          user
        })
        commit('SET_AUTH_CREDENTIALS', user)
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
      const config = CookieHandler.get(OPDOMUN_KEY)
      dispatch('setAuthorizationHeader', config.accessToken)
      commit('SET_ACCESS_TOKEN', config.accessToken)
      commit('SET_AUTH_CREDENTIALS', config.user)
    }
    resolve()
  })
}

export function setAuthorizationHeader ({ commit }, accessToken) {
  axiosInstance.defaults.headers.common.Authorization = `${accessToken.type} ${accessToken.token}`
}
