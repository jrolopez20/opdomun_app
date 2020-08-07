<template>
  <div>
    <div class="text-h5 q-py-lg">Anuncios destacados</div>
    <q-list>
      <SinglePropertyItem
              v-for="property in featuredPosts" :key="property.id"
              :property="property"
      />
    </q-list>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import SinglePropertyItem from 'components/property/SinglePropertyItem.vue'

export default {
  name: 'FeaturedPosts',
  components: {
    SinglePropertyItem
  },

  data () {
    return {
    }
  },
  computed: {
    ...mapGetters('post', [
      'featuredPosts'
    ])
  },
  methods: {
    ...mapActions('post', [
      'loadFeaturedPosts'
    ])
  },
  mounted () {
    this.loadFeaturedPosts({
      rowsPerPage: 3,
      page: 1
    })
  }
}
</script>
