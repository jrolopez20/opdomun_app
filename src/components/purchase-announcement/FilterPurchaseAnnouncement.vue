<template>
  <q-card flat dark square class="filter-card-background">
    <q-card-section>
      <q-form ref="filterForm" >
        <div class="row">
          <div class="col-xs-12 col-md">
            <div class="row">
              <div class="col-md-4 col-sm-6 col-12 q-pa-sm">
                <q-select dark outlined dense emit-value map-options rounded
                          v-model="property.provinciaId"
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
              <div class="col-md-4 col-sm-6 col-12 q-pa-sm">
                <q-select dark outlined dense emit-value map-options rounded
                          v-model="property.municipioId"
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
              <div class="col-md-4 col-sm-6 col-12 q-pa-sm">
                <q-select dark outlined dense emit-value map-options rounded
                        v-model="property.homeTypeId"
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
                <q-input
                        dark outlined dense rounded
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
                        dark outlined dense rounded
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
                        dark outlined dense rounded
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
                        dark outlined dense rounded
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
            <q-btn unelevated no-caps rounded
                   color="primary"
                   label="Buscar"
                   class="full-width text-body1"
                   style="margin-bottom: 14px;"
                   @click="onSubmit"
            />
            <q-btn outline unelevated no-caps rounded
                   color="primary"
                   label="Limpiar"
                   class="full-width text-body1"
                   @click="clearForm"
            />
          </div>
        </div>
      </q-form>
    </q-card-section>
  </q-card>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Notification from '../../services/notification.service'

export default {
  name: 'FilterPurchaseAnnouncement',
  data () {
    return {
      property: {
        provinciaId: null,
        municipioId: null,
        homeTypeId: null,
        minPrice: null,
        maxPrice: null,
        bedrooms: null,
        bathrooms: null
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
    ])
  },
  methods: {
    ...mapActions('provincia', [
      'loadProvincias'
    ]),
    ...mapActions('municipio', [
      'loadMunicipios',
      'clearMunicipios'
    ]),
    ...mapActions('hometype', [
      'loadHomeTypes'
    ]),
    onProvinciaChange (provinciaId) {
      if (this.property.provinciaId) {
        this.property.municipioId = null
        this.clearMunicipios()
        this.loadMunicipios({ provinciaId })
      }
    },
    onSubmit () {
      this.$refs.filterForm.validate().then(success => {
        if (success) {
          const filters = { ...this.property }
          this.$emit('onSearch', filters)
        } else {
          Notification.showWarning('Por favor completar los campos correctamente')
        }
      })
    },
    clearForm () {
      this.property = {
        provinciaId: null,
        municipioId: null,
        homeTypeId: null,
        minPrice: null,
        maxPrice: null,
        bedrooms: null,
        bathrooms: null
      }
      this.clearMunicipios()
    }
  },
  mounted () {
    this.loadProvincias()
    this.loadHomeTypes()
    if (this.purchaseFilters) {
      this.property = { ...this.purchaseFilters }
    }
  }
}
</script>
<style lang="sass" scoped>
  .filter-card-background
    background: #2a303b
</style>
