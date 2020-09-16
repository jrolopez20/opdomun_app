export function SET_AUTH_CREDENTIALS (state, data) {
  if (typeof data.accessToken !== 'undefined') {
    state.accessToken = data.accessToken
  }
  state.user = data.user
}

export function LOGOUT (state) {
  state.accessToken = null
  state.user = {}
}

export function FETCH_ROLES (state, data) {
  state.roles = data
}
