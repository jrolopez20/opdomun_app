<template>
  <div class="full-width">
    <q-table flat
             binary-state-sort
             :data="data"
             :columns="columns"
             row-key="id"
             :pagination.sync="pagination"
             :loading="loading"
             :filter="filter"
             @request="onRequest"
    >
      <template v-slot:top>
        <div class="text-h6">Anuncios de compra</div>
        <q-space />
        <q-btn rounded no-caps
               icon="add"
               color="primary"
               :disable="loading"
               label="Nuevo anuncio de compra"
               to="/compro-casa/nuevo" />
      </template>
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="provincia" :props="props">{{ props.row.provincia.title }}</q-td>
          <q-td key="price" :props="props">{{ props.row.minPrice | toCurrency }} - {{ props.row.maxPrice | toCurrency
            }}
          </q-td>
          <q-td key="closedAt" :props="props">{{ date().formatDate(props.row.closedAt, 'DD/MM/YYYY') }}</q-td>
          <q-td key="action_col" :props="props" class="q-gutter-x-sm">
            <q-btn no-caps outline round
                   icon="las la-edit"
                   size="sm"
                   :to="`compro-casa/${props.row.id}`">
              <q-tooltip>{{ $t('common.labels.edit') }}</q-tooltip>
            </q-btn>
            <q-btn no-caps outline round icon="las la-trash" size="sm"
                   @click="onRemoveClick(props.row)">
              <q-tooltip>{{ $t('common.labels.delete') }}</q-tooltip>
            </q-btn>
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>

<script>
import { date, Loading } from 'quasar'
import { mapActions, mapGetters } from 'vuex'
import Notification from '../../services/notification.service'

export default {
  name: 'Subscriptions',
  components: {
  },
  data () {
    return {
      filter: null,
      loading: false,
      pagination: {
        page: 1,
        rowsPerPage: 24,
        rowsNumber: 0
      },
      columns: [
        {
          name: 'provincia',
          required: true,
          label: 'Provincia',
          align: 'left',
          field: 'provincia',
          sortable: true
        },
        { name: 'price', align: 'left', label: 'Rango de precio', field: 'minPrice' },
        { name: 'closedAt', align: 'left', label: this.$t('common.labels.endDate'), field: 'closedAt' },
        { name: 'action_col', label: '', align: 'center', style: 'width: 30px' }
      ],
      data: []
    }
  },
  mounted () {
    // get initial data from server (1st page)
    this.onRequest({
      pagination: this.pagination,
      filter: null
    })
  },
  computed: {
    ...mapGetters('subscription', [
      'subscriptions'
    ])
  },
  methods: {
    ...mapActions('subscription', [
      'loadSubscriptions',
      'removeSubscription'
    ]),
    date () {
      return date
    },
    onRequest (props) {
      const { page, rowsPerPage } = props.pagination
      const filter = props.filter

      this.loading = true

      this.loadSubscriptions({ rowsPerPage, page, filter }).then(response => {
        this.pagination.rowsNumber = Number(this.subscriptions.total)
        this.pagination.page = Number(this.subscriptions.page)
        this.data = this.subscriptions.data
        this.loading = false
      })
    },
    onSearch (filter) {
      // if (filter) {
      //   const { provincia, municipio, ...attrs } = filter
      //   const filtersCleaned = {
      //     provincia: provincia?.id,
      //     municipio: municipio?.id,
      //     ...attrs
      //   }
      //   this.filter = { ...filtersCleaned }
      // }
    },
    onRemoveClick (row) {
      this.$q.dialog({
        title: this.$t('common.labels.confirm'),
        message: this.$t('common.confirm.delete'),
        cancel: true
      }).onOk(() => {
        Loading.show()
        this.removeSubscription(row.id)
          .then(response => {
            this.onRequest({
              pagination: this.pagination,
              filter: null
            })
            Loading.hide()
            Notification.showSucces(this.$t('common.messages.deleteSuccessfully'))
          })
          .catch(e => {
            Loading.hide()
          })
      })
    }
  }
}
</script>
