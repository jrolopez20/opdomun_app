<template>
  <q-page class="flex flex-block">
    <Header :title="title"/>
    <div class="row wrap full-width q-px-sm">
      <div class="col-sm-8 col-12 q-pa-sm">
        <q-form ref="formTaxCalculator">
            <div class="text-h5 q-pt-lg q-pb-sm">Calcule el impuesto a pagar</div>
          <div class="row">
            <div class="col-xs-12 col-md-4 q-pa-xs">
              <q-select outlined dense required
                        v-model="provincia"
                        :options="provincias"
                        :label="this.$t('common.labels.provincia')"
                        option-value="id"
                        option-label="title"
                        @input="onProvinciaChange"
                        :rules="[
                            val => val || this.$t('common.errors.required')
                          ]"
              >
              </q-select>
            </div>
            <div class="col-xs-12 col-md-4 q-pa-xs">
              <q-select outlined dense required
                        v-model="municipio"
                        :options="municipios"
                        :label="this.$t('common.labels.municipio')"
                        option-value="id"
                        option-label="title"
                        @input="onMunicipioChange"
                        :rules="[
                            val => val || this.$t('common.errors.required')
                          ]"
              >
              </q-select>
            </div>
            <div class="col-xs-12 col-md-4 q-pa-xs">
              <q-select outlined dense required
                        v-model="localidad"
                        :options="localidades"
                        :label="this.$t('common.labels.localidad')"
                        option-value="id"
                        option-label="title"
                        :rules="[
                            val => val || this.$t('common.errors.required')
                          ]"
              >
              </q-select>
            </div>
            <div class="col-12 q-pa-xs">
              <q-select outlined dense required emit-value map-options
                        v-model="params.architecturalTypologyId"
                        :options="architecturalTypologies"
                        :label="this.$t('common.labels.architecturalTypology')"
                        option-value="id"
                        option-label="title"
                        :rules="[
                          val => val || this.$t('common.errors.required')
                        ]"
              >
              </q-select>
            </div>
            <div class="col-xs-12 col-md-4 q-pa-xs">
              <q-input
                      outlined dense
                      v-model.number="params.rooms"
                      type="number"
                      :label="this.$t('common.labels.bedrooms')"
                      :rules="[
                      val => val || this.$t('common.errors.required'),
                      val => val > 0 || this.$t('common.errors.greatherThan', {value: 0})
                    ]"
              >
              </q-input>
            </div>
            <div class="col-xs-12 col-md-4 q-pa-xs">
              <q-toggle
                      label="Garaje / Valla de parqueo"
                      v-model="params.garage"
              />
            </div>
            <div class="col-xs-12 col-md-4 q-pa-xs">
              <q-toggle
                      label="Jardín / Patio"
                      v-model="params.garden"
              />
            </div>

            <div class="col-12 q-mb-md" v-if="taxes">
              <q-card class="bg-secondary text-white">
                <q-card-section class="text-center text-body1">
                  Valoración
                </q-card-section>
                <q-card-section>
                  <div class="row">
                    <div class="col-sm-6 col-12 q-px-sm">
                      <div class="row">
                        <div class="col">
                          <q-icon name="las la-dollar-sign" size="xs"/>
                          Mínimo referencial
                        </div>
                        <div class="col-auto text-right text-weight-medium">{{ taxes.referenceValue | toCurrency }}</div>
                      </div>
                      <q-separator class="q-my-sm" dark/>
                    </div>
                    <div class="col-sm-6 col-12 q-px-sm">
                      <div class="row">
                        <div class="col">
                          <q-icon name="las la-dollar-sign" size="xs"/>
                          Impuesto a pagar
                        </div>
                        <div class="col-auto text-right text-weight-medium">{{ taxes.tax | toCurrency }}</div>
                      </div>
                      <q-separator class="q-my-sm" dark/>
                    </div>
                  </div>
                </q-card-section>
              </q-card>
            </div>

            <div class="col-12 q-gutter-sm text-right">
              <q-btn outline no-caps color="primary" label="Limpiar" @click="clearForm()"/>
              <q-btn no-caps color="primary" label="Calcular" @click="calculate()"/>
            </div>
          </div>

        </q-form>

        <p class="text-center q-pt-lg">Para más información consulte la <a href="https://www.gacetaoficial.gob.cu/es/decreto-ley-343-de-2016-de-consejo-de-estado" target="_blank" class="text-primary">Gaceta Oficial</a>.</p>
      </div>
      <div class="col-sm-4 col-12 q-pa-sm">
        <FeaturedPosts/>
      </div>
    </div>
  </q-page>
</template>

<script>
import { Loading } from 'quasar'
import { mapGetters, mapActions } from 'vuex'
import Header from 'layouts/Header.vue'
import FeaturedPosts from 'components/property/FeaturedPosts.vue'
import Notification from '../services/notification.service'

export default {
  name: 'TaxCalculator',
  components: {
    Header,
    FeaturedPosts
  },
  data () {
    return {
      title: 'Calculadora de impuestos',
      provincia: null,
      municipio: null,
      localidad: null,
      params: {
        locationCategoryId: null,
        architecturalTypologyId: null,
        rooms: null,
        garage: false,
        garden: false
      }
    }
  },
  computed: {
    ...mapGetters('taxCalculator', [
      'taxes'
    ]),
    ...mapGetters('provincia', [
      'provincias'
    ]),
    ...mapGetters('municipio', [
      'municipios'
    ]),
    ...mapGetters('localidad', [
      'localidades'
    ]),
    ...mapGetters('architecturalTypology', [
      'architecturalTypologies'
    ])
  },
  methods: {
    ...mapActions('taxCalculator', [
      'calculateTax',
      'clearTaxes'
    ]),
    ...mapActions('provincia', [
      'loadProvincias'
    ]),
    ...mapActions('municipio', [
      'loadMunicipios'
    ]),
    ...mapActions('localidad', [
      'loadLocalidades',
      'clearLocalidades'
    ]),
    ...mapActions('architecturalTypology', [
      'loadArchitecturalTypologies'
    ]),
    onProvinciaChange (provincia) {
      this.localidad = null
      this.municipio = null
      this.clearLocalidades()
      this.loadMunicipios({ provinciaId: provincia.id })
    },
    onMunicipioChange (municipio) {
      this.localidad = null
      this.loadLocalidades({ municipioId: municipio.id })
    },
    calculate () {
      this.$refs.formTaxCalculator.validate().then(success => {
        if (success) {
          Loading.show()
          this.params.locationCategoryId = this.localidad.locationCategory.id
          this.calculateTax({ params: this.params })
            .then((response) => {
              Loading.hide()
            })
            .catch(() => {
              Loading.hide()
            })
        } else {
          Notification.showWarning(this.$t('common.errors.incompleteForm'))
        }
      })
    },
    clearForm () {
      this.clearTaxes()
      this.provincia = null
      this.municipio = null
      this.localidad = null
      this.clearLocalidades()
      this.params = {
        locationCategoryId: null,
        architecturalTypologyId: null,
        rooms: null,
        garage: false,
        garden: false
      }
    }
  },
  mounted () {
    this.loadProvincias()
    this.loadArchitecturalTypologies()
  },
  meta () {
    return {
      titleTemplate: title => `${this.title} - ${title}`
    }
  }
}
</script>
