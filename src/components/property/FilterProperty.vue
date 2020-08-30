<template>
  <q-card flat dark square class="filter-card-background">
    <q-card-section>
      <q-form ref="filterForm" >
        <div class="row">
          <div class="col-xs-12 col-md">
            <div class="row">
              <div class="col-md-3 col-sm-6 col-12 q-pa-sm">
                <q-select dark outlined dense
                          v-model="property.provincia"
                          :options="provincias"
                          :label="this.$t('common.labels.provincia')"
                          option-value="id"
                          option-label="title"
                          @input="onProvinciaChange"
                >
                  <template v-slot:prepend>
                    <q-icon name="las la-map-marker"/>
                  </template>
                </q-select>
              </div>
              <div class="col-md-3 col-sm-6 col-12 q-pa-sm">
                <q-select dark outlined dense
                          v-model="property.municipio"
                          :options="municipios"
                          :label="this.$t('common.labels.municipio')"
                          option-value="id"
                          option-label="title"
                >
                  <template v-slot:prepend>
                    <q-icon name="las la-map-marker"/>
                  </template>
                </q-select>
              </div>
              <div class="col-md-3 col-sm-6 col-12 q-pa-sm">
                <q-select
                        dark outlined dense emit-value map-options
                        v-model="property.homeType"
                        :label="this.$t('common.labels.homeType')"
                        :options="homeTypes"
                        option-value="id"
                        option-label="title"
                >
                  <template v-slot:prepend>
                    <q-icon name="las la-door-open"/>
                  </template>
                </q-select>
              </div>
              <div class="col-md-3 col-sm-6 col-12 q-pa-sm">
                <q-select
                        dark outlined dense emit-value map-options
                        v-model="property.plan"
                        label="Tipo de anuncio"
                        :options="plans"
                >
                  <template v-slot:prepend>
                    <q-icon name="las la-star"/>
                  </template>
                </q-select>
              </div>
              <div class="col-md-3 col-sm-6 col-12 q-pa-sm">
                <q-input
                        dark outlined dense
                        v-model.number="property.bedrooms"
                        type="number"
                        placeholder="Habitaciones"
                >
                  <template v-slot:prepend>
                    <q-icon name="las la-bed"/>
                  </template>
                </q-input>
              </div>
              <div class="col-md-3 col-sm-6 col-12 q-pa-sm">
                <q-input
                        dark outlined dense
                        v-model.number="property.bathrooms"
                        type="number"
                        placeholder="Baños"
                >
                  <template v-slot:prepend>
                    <q-icon name="las la-bath"/>
                  </template>
                </q-input>
              </div>
              <div class="col-md-3 col-sm-6 col-12 q-pa-sm">
                <q-input
                        dark outlined dense
                        v-model.number="property.minPrice"
                        type="number"
                        placeholder="Precio mínimo"
                >
                  <template v-slot:prepend>
                    <q-icon name="las la-dollar-sign"/>
                  </template>
                </q-input>
              </div>
              <div class="col-md-3 col-sm-6 col-12 q-pa-sm">
                <q-input
                        dark outlined dense
                        v-model.number="property.maxPrice"
                        type="number"
                        placeholder="Precio máximo"
                >
                  <template v-slot:prepend>
                    <q-icon name="las la-dollar-sign"/>
                  </template>
                </q-input>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-md-auto q-pa-sm">
            <q-btn unelevated
                   color="primary"
                   label="Buscar"
                   class="full-width full-height"
                   @click="onSubmit"
            />
          </div>
        </div>
      </q-form>
    </q-card-section>
  </q-card>
</template>

<script>
// import { Loading } from 'quasar'
import { mapGetters, mapActions } from 'vuex'
// import Notification from '../../services/notification.service'

export default {
  name: 'FilterProperty',
  props: [],
  data () {
    return {
      plans: [
        { value: 1, label: 'PREMIUM' },
        { value: 4, label: 'GRATIS' }
      ],
      property: {
        provincia: null,
        municipio: null,
        minPrice: null,
        maxPrice: null,
        bedrooms: null,
        bathrooms: null,
        homeType: null
      }
    }
  },
  computed: {
    ...mapGetters('provincia', [
      'provincias'
    ]),
    ...mapGetters('municipio', [
      'municipios'
    ]),
    ...mapGetters('hometype', [
      'homeTypes'
    ]),
    ...mapGetters('post', [
      'filters'
    ])
  },
  methods: {
    ...mapActions('post', [
      'setFilters'
    ]),
    ...mapActions('provincia', [
      'loadProvincias'
    ]),
    ...mapActions('municipio', [
      'loadMunicipios'
    ]),
    ...mapActions('hometype', [
      'loadHomeTypes'
    ]),
    onProvinciaChange () {
      if (this.property.provincia) {
        this.loadMunicipios({ provinciaId: this.property.provincia.id })
        this.property.municipio = null
      }
    },
    onSubmit () {
      this.$refs.filterForm.validate().then(success => {
        if (success) {
          const filters = { ...this.property }
          this.setFilters({ filters })
          this.$emit('onSearch', filters)
        } else {
          Notification.showWarning('Por favor completar los campos correctamente')
        }
      })
    }
  },
  mounted () {
    this.loadProvincias()
    this.loadHomeTypes()
    if (this.filters) {
      this.property = { ...this.filters }
    }
  }
}
</script>
<style lang="sass" scoped>
  .filter-card-background
    background: #2a303b
</style>
