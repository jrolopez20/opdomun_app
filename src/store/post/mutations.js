export function FETCH_POSTS (state, posts) {
  state.posts = posts
}

export function FETCH_FEATURED_POSTS (state, posts) {
  state.featuredPosts = posts
}

export function SET_POST (state, post) {
  state.post = post
}
