export function SET_ACCESS_TOKEN (state, accessToken) {
  state.accessToken = accessToken
}

export function SET_AUTH_CREDENTIALS (state, user) {
  state.user = user
}

export function LOGOUT (state) {
  state.accessToken = null
  state.user = {}
}

export function FETCH_ROLES (state, data) {
  state.roles = data
}
