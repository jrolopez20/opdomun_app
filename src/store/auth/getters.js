export function roles () {
  return {
    ADMIN: 'ADMIN',
    MANAGER: 'MANAGER',
    AGENT: 'AGENT',
    USER: 'USER'
  }
}

export function entryPoint () {
  return 'portal'
}

export function availableRoles (state) {
  return state.roles
}

export function isLoggedIn (state) {
  return !!state.accessToken
}

export function accessToken (state) {
  return state.accessToken
}

export function loggedUser (state) {
  return state.user
}

export function isAdmin (state) {
  return state.user.role === roles().ADMIN
}

export function isManager (state) {
  return state.user.role === roles().MANAGER
}

export function isAgent (state) {
  return state.user.role === roles().AGENT
}
