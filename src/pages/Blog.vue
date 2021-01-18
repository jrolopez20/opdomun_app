<template>
  <q-page class="flex flex-block">
    <Header>
      {{title}}
    </Header>
    <div class="row wrap full-width q-px-sm">
      <div class="col-sm-8 col-12 q-pa-sm">
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
            <div class="full-width q-my-sm">
              <SingleArticle :article="props.row"/>
            </div>
          </template>
        </q-table>
      </div>
      <div class="col-sm-4 col-12 q-pa-sm">
        <FeaturedPosts/>
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Header from 'layouts/Header.vue'
import FeaturedPosts from 'components/property/FeaturedPosts.vue'
import SingleArticle from 'components/article/SingleArticle.vue'

export default {
  name: 'PageBlog',
  components: {
    Header,
    FeaturedPosts,
    SingleArticle
  },
  data () {
    return {
      title: 'Blog',
      filter: '',
      loading: false,
      pagination: {
        page: 1,
        rowsPerPage: 10,
        rowsNumber: 0
      },
      columns: [
        { name: 'title', label: 'title', field: 'title' },
        { name: 'summary', label: 'summary', field: 'summary' },
        { name: 'text', label: 'text', field: 'text' },
        { name: 'picture', label: 'picture', field: 'picture' }
      ],
      data: []
    }
  },
  computed: {
    ...mapGetters('article', [
      'articles'
    ])
  },
  methods: {
    ...mapActions('article', [
      'loadArticles'
    ]),
    onRequest (props) {
      const { page, rowsPerPage } = props.pagination
      this.loading = true

      this.loadArticles({ rowsPerPage, page, filter: this.filter }).then(response => {
        this.pagination.rowsNumber = Number(this.articles.total)
        this.pagination.page = Number(this.articles.page)
        this.data = this.articles.data
        this.loading = false
      })
    }
  },
  meta () {
    return {
      titleTemplate: title => `${this.title} - ${title}`
    }
  },
  mounted () {
    this.onRequest({
      pagination: this.pagination
    })
  }
}
</script>
