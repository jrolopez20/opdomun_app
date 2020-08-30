<template>
    <q-card flat bordered>
        <q-card-section>
            <q-form ref="formAddFreePost" @submit.prevent="onSubmit">
                <div class="row wrap">
                    <div class="col-sm-6 col-12 q-pa-sm">
                        <q-select outlined dense required
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
                    <div class="col-sm-6 col-12 q-pa-sm">
                        <q-select outlined dense required
                                  v-model="property.municipio"
                                  :options="municipios"
                                  :label="this.$t('common.labels.municipio')"
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
                        <q-input outlined dense required
                                 v-model="property.address"
                                 :label="this.$t('common.labels.address')"
                                 :rules="[
                                    val => val && val.length > 0 || this.$t('common.errors.required'),
                                    val => val.length <= 110 || 'Please use maximum 110 characters'
                                 ]"
                        >
                            <template v-slot:prepend>
                                <q-icon name="las la-map-marker" />
                            </template>
                        </q-input>
                    </div>
                    <div class="col-md-3 col-sm-6 col-12 q-pa-sm">
                        <q-input
                                outlined dense required
                                v-model.number="property.price"
                                type="number"
                                :label="this.$t('common.labels.price')"
                                :rules="[
                                  val => val || this.$t('common.errors.required'),
                                  val => val > 1000 || this.$t('common.errors.greatherThan', {value: 1000})
                                ]"
                        >
                            <template v-slot:prepend>
                                <q-icon name="las la-dollar-sign" />
                            </template>
                        </q-input>
                    </div>
                    <div class="col-md-3 col-sm-6 col-12 q-pa-sm">
                        <q-input
                                outlined dense
                                v-model.number="property.area"
                                type="number"
                                :label="this.$t('common.labels.area')"
                                :rules="[
                                  val => val || this.$t('common.errors.required'),
                                  val => val > 0 || this.$t('common.errors.greatherThan', {value: 0})
                                ]"
                        >
                            <template v-slot:prepend>
                                <q-icon name="las la-crop" />
                            </template>
                        </q-input>
                    </div>
                    <div class="col-md-3 col-sm-6 col-12 q-pa-sm">
                        <q-input
                                outlined dense required
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
                    <div class="col-md-3 col-sm-6 col-12 q-pa-sm">
                        <q-input
                                outlined dense required
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
                    <div class="col-12 q-pa-sm">
                        <q-select
                                outlined dense required emit-value map-options
                                v-model="property.homeType"
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
                    <div class="col-12 q-pa-sm">
                        <q-select
                                outlined dense multiple use-chips
                                v-model="property.otherPlaces"
                                :label="this.$t('common.labels.otherPlaces')"
                                :options="allPlaces"
                                option-value="id"
                                option-label="title"
                                :rules="[
                                  val => val && val.length > 0 || this.$t('common.errors.required')
                                ]"
                        />
                    </div>
                    <div class="col-12 q-pa-sm">
                        <q-file
                                counter outlined use-chips multiple required
                                v-model="property.images"
                                label="Imágenes..."
                                :counter-label="counterLabelFn"
                                max-files="3"
                                max-file-size="1048576"
                                accept=".png, .jpg, .jpeg, image/*"
                                @rejected="onRejected"
                                :rules="[
                                  val => val && val.length > 0 || this.$t('common.errors.required')
                                ]"
                        >
                            <template v-slot:prepend>
                                <q-icon name="attach_file"/>
                            </template>
                        </q-file>
                    </div>
                    <div class="col-12 q-pa-sm">
                        <q-input
                                outlined dense required
                                type="textarea"
                                v-model="property.summary"
                                :label="this.$t('common.labels.summary')"
                        />
                    </div>

                    <div class="col-12 text-h6 q-pa-sm">
                        Datos del propietario
                    </div>

                    <div class="col-sm-4 col-12 q-pa-sm">
                        <q-input
                                outlined dense required
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
                    <div class="col-sm-4 col-12 q-pa-sm">
                        <q-input outlined dense required
                                 v-model="property.owner.phone"
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
                    <div class="col-sm-4 col-12 q-pa-sm">
                        <q-input
                                outlined dense
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

        <q-separator />

        <q-card-actions align="right" class="q-pr-lg q-py-md">
            <q-btn outline color="primary" icon="save" label="Crear anuncio" @click="onSubmit"/>
        </q-card-actions>
    </q-card>
</template>

<script>
import { Loading } from 'quasar'
import { mapGetters, mapActions } from 'vuex'
import Notification from '../../services/notification.service'

export default {
  name: 'FreePropertyForm',
  data () {
    return {
      property: {
        provincia: null,
        municipio: null,
        address: null,
        price: null,
        area: null,
        bedrooms: null,
        bathrooms: null,
        homeType: null,
        otherPlaces: null,
        summary: null,
        images: null,
        owner: {
          fullname: null,
          phone: null,
          email: null
        }
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
    ...mapGetters('variableAu', [
      'allPlaces'
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
    ...mapActions('post', [
      'addFreeProperty'
    ]),
    ...mapActions('variableAu', [
      'loadAllPlaces'
    ]),
    onProvinciaChange () {
      if (this.property.provincia) {
        this.loadMunicipios({ provinciaId: this.property.provincia.id })
        this.property.municipio = null
      }
    },
    onSubmit () {
      this.$refs.formAddFreePost.validate().then(success => {
        if (success) {
          Loading.show()
          this.addFreeProperty({ property: this.property }).then(() => {
            Loading.hide()
            Notification.showSucces('El anuncio ha sido creado satisfactoriamente')
            // this.$router.push('/')
          }).catch(() => {
            Loading.hide()
          })
        } else {
          Notification.showWarning('Por favor completar los campos correctamente')
        }
      })
    },
    counterLabelFn ({ totalSize, filesNumber, maxFiles }) {
      return `${filesNumber} files of ${maxFiles} | ${totalSize}`
    },
    onRejected (rejectedEntries) {
      // Notify plugin needs to be installed
      // https://quasar.dev/quasar-plugins/notify#Installation
      this.$q.notify({
        type: 'negative',
        message: `${rejectedEntries.length} fichero(s) no pasaron las restricciones de validación`
      })
    }
  },
  mounted () {
    this.loadProvincias()
    this.loadHomeTypes()
    this.loadAllPlaces()
  }
}
</script>
