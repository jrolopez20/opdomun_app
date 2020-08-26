<template>
  <q-page class="flex flex-block">
    <Header :title="title"/>
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
            class="q-pb-lg"
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

export default {
  name: 'PageProperties',
  components: {
    Header,
    SingleProperty
  },
  data () {
    return {
      title: 'Casas en venta',
      filter: '',
      loading: false,
      pagination: {
        page: 1,
        rowsPerPage: 20,
        rowsNumber: 0
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
      'posts'
    ])
  },
  methods: {
    ...mapActions('post', [
      'loadPosts'
    ]),
    onRequest (props) {
      const { page, rowsPerPage } = props.pagination
      this.loading = true

      this.loadPosts({ rowsPerPage, page, filter: this.filter }).then(response => {
        this.pagination.rowsNumber = this.posts.total
        this.pagination.page = this.posts.page
        this.data = this.posts.data
        this.loading = false
      })
    }
  },
  mounted () {
    // get initial data from server (1st page)
    this.onRequest({
      pagination: this.pagination,
      filter: ''
    })
  },
  meta () {
    return {
      titleTemplate: title => `${this.title} - ${title}`
    }
  }
}
</script>
