
/**
 * Get the post list
 * @param state
 * @returns {Array}
 */
export function posts (state) {
  return state.posts
}

export function featuredPosts (state) {
  return state.featuredPosts
}

export function recommendedPosts (state) {
  return state.recommendedPosts
}

export function post (state) {
  return state.post
}

export function filters (state) {
  return state.filters
}

export function currencies (state) {
  return ['CUP', 'USD']
}
