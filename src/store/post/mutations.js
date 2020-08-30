export function FETCH_POSTS (state, posts) {
  state.posts = posts
}

export function FETCH_FEATURED_POSTS (state, posts) {
  state.featuredPosts = posts
}

export function FETCH_RECOMMENDED_POSTS (state, posts) {
  state.recommendedPosts = posts
}

export function SET_POST (state, post) {
  state.post = post
}

export function SET_FILTERS (state, filters) {
  state.filters = { ...filters }
}

export function CLEAR_FILTERS (state) {
  state.filters = null
}
