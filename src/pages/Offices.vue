<template>
  <q-page class="flex flex-block">
    <Header :title="title"/>
    <div class="full-width q-px-sm">
      <div class="text-h5 q-py-lg">Contacte con nuestra oficina más cercana</div>
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
            <SingleOffice :office="props.row"/>
          </div>
        </template>
      </q-table>
    </div>
  </q-page>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Header from 'layouts/Header.vue'
import SingleOffice from '../components/office/SingleOffice'

export default {
  name: 'PageOffices',

  components: {
    Header,
    SingleOffice
  },
  data () {
    return {
      title: 'Nuestras oficinas',
      filter: '',
      loading: false,
      pagination: {
        page: 1,
        rowsPerPage: 24,
        rowsNumber: 0
      },
      columns: [
        { name: 'province', label: 'url', field: 'province' },
        { name: 'manager', label: 'default', field: 'manager' },
        { name: 'phone', label: 'default', field: 'phone' },
        { name: 'email', label: 'default', field: 'email' }
      ],
      data: []
    }
  },
  computed: {
    ...mapGetters('office', [
      'offices'
    ])
  },
  methods: {
    ...mapActions('office', [
      'loadOffices'
    ]),
    onRequest (props) {
      const { page, rowsPerPage } = props.pagination
      this.loading = true

      this.loadOffices({ rowsPerPage, page, filter: this.filter }).then(response => {
        this.pagination.rowsNumber = Number(this.offices.total)
        this.pagination.page = Number(this.offices.page)
        this.data = this.offices.data
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
