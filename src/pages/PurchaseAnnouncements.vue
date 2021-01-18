<template>
  <q-page class="flex flex-block">
    <Header>
      {{title}}
    </Header>
    <FilterPurchaseAnnouncement
            class="q-mb-lg full-width"
            @onSearch="updateFilter"
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
          <SinglePurchaseAnnouncement :announcement="props.row"/>
        </div>
      </template>
    </q-table>
  </q-page>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Header from 'layouts/Header.vue'
import SinglePurchaseAnnouncement from '../components/purchase-announcement/SinglePurchaseAnnouncement.vue'
import FilterPurchaseAnnouncement from 'components/purchase-announcement/FilterPurchaseAnnouncement.vue'

export default {
  name: 'PurchaseAnnouncements',
  components: {
    Header,
    SinglePurchaseAnnouncement,
    FilterPurchaseAnnouncement
  },
  data () {
    return {
      title: 'Anuncios de compra',
      filter: null,
      loading: false,
      pagination: {
        page: 1,
        rowsPerPage: 24,
        rowsNumber: 0
      },
      columns: [
        { name: 'provincia', label: 'default', field: 'provincia' },
        { name: 'municipios', label: 'default', field: 'municipios' },
        { name: 'homeTypes', label: 'default', field: 'homeTypes' },
        { name: 'minPrice', label: 'default', field: 'minPrice' },
        { name: 'maxPrice', label: 'default', field: 'maxPrice' }
      ],
      data: []
    }
  },
  computed: {
    ...mapGetters('purchaseAnnouncement', [
      'purchaseAnnouncements'
    ])
  },
  methods: {
    ...mapActions('purchaseAnnouncement', [
      'loadPurchaseAnnouncements'
    ]),
    onRequest (props) {
      const { page, rowsPerPage } = props.pagination
      this.loading = true

      this.loadPurchaseAnnouncements({ rowsPerPage, page, filter: this.filter }).then(response => {
        this.pagination.rowsNumber = Number(this.purchaseAnnouncements.total)
        this.pagination.page = Number(this.purchaseAnnouncements.page)
        this.data = this.purchaseAnnouncements.data
        this.loading = false
      })
    },
    updateFilter (purchaseFilters) {
      this.filter = { ...purchaseFilters }
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
