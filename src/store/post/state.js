export default () => ({
  filters: null,
  post: {
    plan: {},
    address: {
      description: '',
      localidad: {
        id: null,
        title: '',
        municipio: {
          id: null,
          title: '',
          provincia: {
            id: null,
            cod: '',
            title: ''
          }
        }
      }
    },
    owner: {
      fullname: '',
      email: '',
      telephone: ''
    },
    postVisit: {
      total: 0,
      lastVisit: ''
    }
  },
  posts: [],
  featuredPosts: [],
  recommendedPosts: []
})
