import { axiosInstance } from 'boot/axios'

/**
 * Load all posts
 * @param commit
 * @returns {Promise<any>}
 */
export function loadPosts ({ commit }, { rowsPerPage, page, filter }) {
  let params = ''

  if (filter) {
    for (const key in filter) {
      if (filter[key]) {
        params += `&${key}=${filter[key]}`
      }
    }
  }

  return new Promise((resolve, reject) => {
    axiosInstance.get(`published_posts?limit=${rowsPerPage}&page=${page}${params}`)
      .then(response => {
        commit('FETCH_POSTS', response.data)
        resolve(response)
      })
      .catch((e) => {
        reject(e)
      })
  })
}

export function loadFeaturedPosts ({ commit }, { rowsPerPage, page }) {
  return new Promise((resolve, reject) => {
    axiosInstance.get(`featured_posts?limit=${rowsPerPage}&page=${page}`)
      .then(response => {
        commit('FETCH_FEATURED_POSTS', response.data.data)
        resolve(response)
      })
      .catch((e) => {
        reject(e)
      })
  })
}

export function loadRecommendedPosts ({ commit }, { limit }) {
  return new Promise((resolve, reject) => {
    axiosInstance.get(`recommended_posts?limit=${limit}`)
      .then(response => {
        commit('FETCH_RECOMMENDED_POSTS', response.data)
        resolve(response)
      })
      .catch((e) => {
        reject(e)
      })
  })
}

export function getPost ({ commit, state, dispatch }, { id }) {
  return new Promise((resolve, reject) => {
    axiosInstance.get(`posts/${id}`)
      .then(response => {
        commit('SET_POST', response.data)
        resolve(response)
      })
      .catch((e) => {
        reject(e)
      })
  })
}

export function addFreeProperty ({ commit, state, dispatch }, { property }) {
  return new Promise((resolve, reject) => {
    axiosInstance.post('free_post', {
      municipio: property.municipio.id,
      address: property.address,
      price: property.price,
      area: property.area,
      bedrooms: property.bedrooms,
      bathrooms: property.bathrooms,
      home_type: property.homeType,
      other_places: property.otherPlaces,
      summary: property.summary,
      fullname: property.owner.fullname,
      phone: property.owner.phone,
      email: property.owner.email
    })
      .then(response => {
        dispatch('uploadImages', { postId: response.data.id, files: property.images })
        resolve(response)
      })
      .catch((e) => {
        reject(e)
      })
  })
}

export function uploadImages ({ commit }, { postId, files }) {
  const headers = {
    'Content-Type': 'multipart/form-data'
  }
  const formData = new FormData()
  files.map(file => formData.append('post_images', file))
  return new Promise((resolve, reject) => {
    axiosInstance.post(`posts/${postId}/images`, formData, headers)
      .then(response => {
        resolve(response)
      })
      .catch((e) => {
        reject(e)
      })
  })
}

export function setFilters ({ commit }, { filters }) {
  commit('SET_FILTERS', filters)
}

export function clearFilters ({ commit }) {
  commit('CLEAR_FILTERS')
}
