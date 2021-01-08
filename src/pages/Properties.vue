<template>
  <q-page class="">
    <Header :title="title"/>
    <FilterProperty
            class="q-mb-lg full-width"
    />

    <q-table
            grid
            hide-header
            :data="data"
            :columns="columns"
            row-key="id"
            :pagination.sync="pagination"
            :loading="loading"
            :filter="filter"
            @request="onRequest"
            binary-state-sort
            class="q-pb-lg full-width"
    >
      <template v-slot:item="props">
        <div class="q-pa-sm col-xs-12 col-sm-6 col-md-4">
          <SingleProperty :property="props.row"/>
        </div>
      </template>
    </q-table>
  </q-page>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Header from 'layouts/Header.vue'
import SingleProperty from 'components/property/SingleProperty.vue'
import FilterProperty from 'components/property/FilterProperty.vue'

export default {
  name: 'PageProperties',
  components: {
    Header,
    SingleProperty,
    FilterProperty
  },
  data () {
    return {
      title: 'Casas en venta',
      filter: null,
      loading: false,
      pagination: {
        page: 1,
        rowsPerPage: 24,
        rowsNumber: 10
      },
      columns: [
        { name: 'address', label: 'url', field: 'address' },
        { name: 'price', label: 'default', field: 'price' },
        { name: 'bathrooms', label: 'default', field: 'bathrooms' },
        { name: 'bedrooms', label: 'default', field: 'bedrooms' }
      ],
      data: []
    }
  },
  computed: {
    ...mapGetters('post', [
      'filters',
      'posts'
    ])
  },
  watch: {
    filters: 'search'
  },
  methods: {
    ...mapActions('post', [
      'loadPosts'
    ]),
    search () {
      this.updateFilter()
    },
    onRequest (props) {
      const { page, rowsPerPage } = props.pagination
      this.loading = true

      this.loadPosts({ rowsPerPage, page, filter: this.filter }).then(response => {
        this.pagination.rowsNumber = Number(this.posts.total)
        this.pagination.page = Number(this.posts.page)
        this.data = this.posts.data
        this.loading = false
      })
    },
    updateFilter () {
      if (this.filters) {
        const { provincia, municipio, ...attrs } = this.filters
        const filtersCleaned = {
          provincia: provincia?.id,
          municipio: municipio?.id,
          ...attrs
        }
        this.filter = { ...filtersCleaned }
      }
    }
  },
  created () {
    this.updateFilter()
    this.onRequest({
      pagination: this.pagination
    })
  },
  meta () {
    return {
      titleTemplate: title => `${this.title} - ${title}`
    }
  }
}
</script>
