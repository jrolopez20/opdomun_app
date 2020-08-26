<template>
    <q-card flat bordered>
        <q-card-section>
            <q-form ref="formSubscription" @submit.prevent="onSubmit">
                <div class="row wrap">
                    <div class="col-12 q-pa-sm">
                        <q-select outlined dense required emit-value map-options
                                  v-model="subscription.provincia"
                                  :options="provincias"
                                  :label="this.$t('common.labels.provincia')"
                                  option-value="id"
                                  option-label="title"
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
                                outlined dense required multiple use-chips emit-value map-options
                                v-model="subscription.municipio"
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
                                outlined dense multiple use-chips emit-value map-options
                                v-model="subscription.homeType"
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
                    <div class="col-sm-6 col-12 q-pa-sm">
                        <q-input
                                outlined dense required
                                v-model.number="subscription.minPrice"
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
                    <div class="col-sm-6 col-12 q-pa-sm">
                        <q-input
                                outlined dense required
                                v-model.number="subscription.maxPrice"
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
                    <div class="col-sm-6 col-12 q-pa-sm">
                        <q-input
                                outlined dense required
                                v-model.number="subscription.bedrooms"
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
                                outlined dense required
                                v-model.number="subscription.bathrooms"
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
                                outlined dense required
                                v-model="subscription.fullname"
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
                        <q-input outlined dense required
                                 v-model="subscription.telephone"
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
                                outlined dense
                                v-model="subscription.email"
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

        <q-separator />

        <q-card-actions align="right" class="q-pr-lg q-py-md">
            <q-btn outline color="primary" icon="send" label="Enviar subscripción" @click="onSubmit"/>
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
      subscription: {
        provincia: null,
        municipio: null,
        homeType: null,
        minPrice: null,
        maxPrice: null,
        bedrooms: null,
        bathrooms: null,
        fullname: null,
        telephone: null,
        email: null
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
    ...mapActions('subscription', [
      'addSubscription'
    ]),
    onProvinciaChange () {
      if (this.subscription.provincia) {
        this.loadMunicipios({ provinciaId: this.subscription.provincia })
      }
    },
    onSubmit () {
      this.$refs.formSubscription.validate().then(success => {
        if (success) {
          Loading.show()
          this.addSubscription(this.subscription).then(() => {
            Loading.hide()
            Notification.showSucces('La subscripción ha sido registrada satisfactoriamente')
            this.$router.push('/')
          }).catch(() => {
            Loading.hide()
          })
        } else {
          Notification.showWarning('Por favor completar los campos correctamente')
        }
      })
    }
  },
  watch: {
    'subscription.provincia': 'onProvinciaChange'
  },
  mounted () {
    this.loadProvincias()
    this.loadHomeTypes()
  }
}
</script>
