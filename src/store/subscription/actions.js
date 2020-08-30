import { axiosInstance } from 'boot/axios'

export function addSubscription ({ commit, state, dispatch }, subscription) {
  return new Promise((resolve, reject) => {
    axiosInstance.post('subscriptions/', {
      provincia_id: subscription.provincia,
      municipio: subscription.municipio,
      home_type: subscription.homeType,
      min_price: subscription.minPrice,
      max_price: subscription.maxPrice,
      bedrooms: subscription.bedrooms,
      bathrooms: subscription.bathrooms,
      fullname: subscription.fullname,
      telephone: subscription.telephone,
      email: subscription.email
    })
      .then(response => {
        resolve(response)
      })
      .catch((e) => {
        reject(e)
      })
  })
}
