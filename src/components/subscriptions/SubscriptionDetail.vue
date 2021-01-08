<template>
    <q-card flat>
        <q-card-section>
            <q-form ref="formSubscription" @submit.prevent="onSubmit">
                <div class="row wrap">
                    <div class="col-12 q-pa-sm">
                        <q-select outlined dense required rounded
                                  v-model="property.provincia"
                                  :options="provincias"
                                  :label="this.$t('common.labels.provincia')"
                                  option-value="id"
                                  option-label="title"
                                  @input="onProvinciaChange"
                                  :rules="[
                                    val => val || this.$t('common.errors.required')
                                  ]"
                        >
                            <template v-slot:prepend>
                                <q-icon name="las la-map-marker"/>
                            </template>
                        </q-select>
                    </div>
                    <div class="col-12 q-pa-sm">
                        <q-select
                                outlined dense required multiple use-chips rounded
                                v-model="property.municipios"
                                :options="municipios"
                                :label="this.$t('common.labels.municipio')"
                                option-value="id"
                                option-label="title"
                                :rules="[
                                  val => !!val || this.$t('common.errors.required')
                                ]"
                        >
                            <template v-slot:prepend>
                                <q-icon name="las la-map-marker"/>
                            </template>
                        </q-select>
                    </div>
                    <div class="col-12 q-pa-sm">
                        <q-select
                                outlined dense multiple use-chips rounded
                                v-model="property.homeTypes"
                                :label="this.$t('common.labels.homeType')"
                                :options="homeTypes"
                                option-value="id"
                                option-label="title"
                                :rules="[
                                  val => val || this.$t('common.errors.required')
                                ]"
                        >
                            <template v-slot:prepend>
                                <q-icon name="las la-door-open"/>
                            </template>
                        </q-select>
                    </div>
                    <div class="col-sm-5 col-12 q-pa-sm">
                        <q-input
                                outlined dense required rounded
                                v-model.number="property.minPrice"
                                type="number"
                                label="Precio min"
                                :rules="[
                                  val => val || this.$t('common.errors.required')
                                ]"
                        >
                            <template v-slot:prepend>
                                <q-icon name="las la-dollar-sign"/>
                            </template>
                        </q-input>
                    </div>
                    <div class="col-sm-5 col-12 q-pa-sm">
                        <q-input
                                outlined dense required rounded
                                v-model.number="property.maxPrice"
                                type="number"
                                label="Precio max."
                                :rules="[
                                  val => val || this.$t('common.errors.required')
                                ]"
                        >
                            <template v-slot:prepend>
                                <q-icon name="las la-dollar-sign"/>
                            </template>
                        </q-input>
                    </div>
                    <div class="col-sm-2 col-12 q-pa-sm">
                        <q-select
                                outlined dense required rounded
                                v-model="currency"
                                :options="currencies"
                                :label="this.$t('common.labels.currency')"
                        />
                    </div>
                    <div class="col-sm-6 col-12 q-pa-sm">
                        <q-input
                                outlined dense required rounded
                                v-model.number="property.bedrooms"
                                type="number"
                                label="Habitaciones"
                                :rules="[
                                  val => val || this.$t('common.errors.required')
                                ]"
                        >
                            <template v-slot:prepend>
                                <q-icon name="las la-bed"/>
                            </template>
                        </q-input>
                    </div>
                    <div class="col-sm-6 col-12 q-pa-sm">
                        <q-input
                                outlined dense required rounded
                                v-model.number="property.bathrooms"
                                type="number"
                                label="Baños"
                                :rules="[
                                  val => val || this.$t('common.errors.required')
                                ]"
                        >
                            <template v-slot:prepend>
                                <q-icon name="las la-bath"/>
                            </template>
                        </q-input>
                    </div>
                    <div class="col-sm-12 col-12 q-pa-sm">
                        <q-input
                                outlined dense required rounded
                                v-model="property.owner.fullname"
                                label="Nombre y apellidos"
                                :rules="[
                                  val => !!val || this.$t('common.errors.required')
                                ]"
                        >
                            <template v-slot:prepend>
                                <q-icon name="las la-user"/>
                            </template>
                        </q-input>
                    </div>
                    <div class="col-sm-6 col-12 q-pa-sm">
                        <q-input outlined dense required rounded
                                 v-model="property.owner.telephone"
                                 type="tel"
                                 label="Teléfono móvil"
                                 prefix="+(53)"
                                 :rules="[
                                  val => !!val || this.$t('common.errors.required')
                                ]"
                        >
                            <template v-slot:prepend>
                                <q-icon name="las la-phone"/>
                            </template>
                        </q-input>
                    </div>
                    <div class="col-sm-6 col-12 q-pa-sm">
                        <q-input
                                outlined dense rounded
                                v-model="property.owner.email"
                                type="email"
                                label="Email"
                                :rules="[
                                    val => !!val || this.$t('common.errors.required'),
                                    val => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val)|| 'Formato de correo incorrecto'
                                ]"
                        >
                            <template v-slot:prepend>
                                <q-icon name="las la-envelope"/>
                            </template>
                        </q-input>
                    </div>
                </div>
            </q-form>
        </q-card-section>
        <q-card-actions align="right" class="q-pr-lg q-mb-lg">
            <q-btn no-caps rounded class="q-px-sm" color="primary" label="Guardar" @click="onSubmit"/>
        </q-card-actions>
    </q-card>
</template>

<script>
import { Loading } from 'quasar'
import { mapGetters, mapActions } from 'vuex'
import Notification from '../services/notification.service'

export default {
  name: 'Subscription',

  data () {
    return {
      currency: 'CUP',
      property: {
        provincia: null,
        municipios: null,
        homeTypes: null,
        minPrice: 500,
        maxPrice: 1500,
        bedrooms: null,
        bathrooms: null,
        owner: {
          fullname: 'javier',
          telephone: 5478455,
          email: 'example@gmail.com'
        }
      }
    }
  },
  computed: {
    ...mapGetters('post', [
      'currencies'
    ]),
    ...mapGetters('provincia', [
      'provincias'
    ]),
    ...mapGetters('municipio', [
      'municipios'
    ]),
    ...mapGetters('hometype', [
      'homeTypes'
    ]),
    ...mapGetters('subscription', [
      'subscription'
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
    ...mapActions('subscription', [
      'addSubscription',
      'loadSubscription'
    ]),
    onProvinciaChange () {
      if (this.property.provincia) {
        this.loadMunicipios({ provinciaId: this.property.provincia.id })
        this.property.municipios = null
      }
    },
    onSubmit () {
      this.$refs.formSubscription.validate().then(success => {
        if (success) {
          Loading.show()
          this.property = {
            ...this.property,
            minPrice: {
              value: this.property.minPrice,
              currency: this.currency
            },
            maxPrice: {
              value: this.property.maxPrice,
              currency: this.currency
            }
          }
          this.addSubscription(this.property).then(() => {
            Loading.hide()
            Notification.showSucces('La subscripción ha sido modificada satisfactoriamente')
            this.$router.push('/compro-casa')
          }).catch(() => {
            Loading.hide()
          })
        } else {
          Notification.showWarning('Por favor completar los campos correctamente')
        }
      })
    }
  },
  mounted () {
    this.loadProvincias()
    this.loadHomeTypes()
    this.loadSubscription({ id: this.$route.params.id })
  }
}
</script>
