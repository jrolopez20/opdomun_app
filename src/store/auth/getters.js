export function roles () {
  return {
    ADMIN: 'ADMIN',
    MANAGER: 'MANAGER',
    AGENT: 'AGENT',
    USER: 'USER'
  }
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
export function fullnameInitials (state) {
  console.log('asd')
  let str = ''

  if (state.user && state.user.fullname) {
    const arr = state.user.fullname.split(' ')
    if (arr.length > 1) {
      str = state.user.fullname[0] + '' + arr[1][0]
    } else {
      str = state.user.fullname[0]
    }
  }
  console.log(str)
  return str
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
