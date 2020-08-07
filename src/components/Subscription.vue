<template>
    <q-card flat bordered>
        <q-card-section>
            <div class="row wrap">
                <div class="col-12 q-pa-sm">
                    <q-select outlined dense required
                              v-model="provinciaSelected"
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
                    <q-select outlined dense required
                              v-model="municipiosSelected"
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
                    <q-select
                            outlined dense
                            v-model="homeCategoriesSelected"
                            :label="this.$t('common.labels.homeType')"
                            :options="homeTypes"
                            option-value="id"
                            option-label="title"
                            :rules="[
                              val => val || this.$t('common.errors.required')
                            ]"
                    >
                        <template v-slot:prepend>
                            <q-icon name="las la-door-open" />
                        </template>
                    </q-select>
                </div>
                <div class="col-sm-6 col-12 q-pa-sm">
                    <q-input
                            outlined dense
                            v-model.number="minPrice"
                            type="number"
                            label="Precio min"
                    >
                        <template v-slot:prepend>
                            <q-icon name="las la-dollar-sign" />
                        </template>
                    </q-input>
                </div>
                <div class="col-sm-6 col-12 q-pa-sm">
                    <q-input
                            outlined dense
                            v-model.number="maxPrice"
                            type="number"
                            label="Precio max."
                    >
                        <template v-slot:prepend>
                            <q-icon name="las la-dollar-sign" />
                        </template>
                    </q-input>
                </div>
                <div class="col-sm-6 col-12 q-pa-sm">
                    <q-input
                            outlined dense
                            v-model.number="bedrooms"
                            type="number"
                            label="Habitaciones"
                    >
                        <template v-slot:prepend>
                            <q-icon name="las la-bed" />
                        </template>
                    </q-input>
                </div>
                <div class="col-sm-6 col-12 q-pa-sm">
                    <q-input
                            outlined dense
                            v-model.number="bathrooms"
                            type="number"
                            label="Baños"
                    >
                        <template v-slot:prepend>
                            <q-icon name="las la-bath" />
                        </template>
                    </q-input>
                </div>
                <div class="col-sm-12 col-12 q-pa-sm">
                    <q-input
                            outlined dense
                            v-model="name"
                            label="Nombre y apellidos"
                    >
                        <template v-slot:prepend>
                            <q-icon name="las la-user" />
                        </template>
                    </q-input>
                </div>
                <div class="col-sm-6 col-12 q-pa-sm">
                    <q-input
                            outlined dense
                            v-model="email"
                            type="email"
                            label="Email"
                    >
                        <template v-slot:prepend>
                            <q-icon name="las la-envelope" />
                        </template>
                    </q-input>
                </div>
                <div class="col-sm-6 col-12 q-pa-sm">
                    <q-input
                            outlined dense
                            v-model="telephone"
                            type="tel"
                            label="Telefono"
                    >
                        <template v-slot:prepend>
                            <q-icon name="las la-phone" />
                        </template>
                    </q-input>
                </div>
            </div>
        </q-card-section>

        <q-separator />

        <q-card-actions align="right" class="q-pr-lg q-py-md">
            <q-btn color="primary" icon="send" label="Enviar subscripción" />
        </q-card-actions>
    </q-card>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Subscription',

  data () {
    return {
      provinciaSelected: null,
      municipiosSelected: null,
      homeCategoriesSelected: null,

      minPrice: null,
      maxPrice: null,
      bathrooms: null,
      bedrooms: null,
      name: null,
      email: null,
      telephone: null
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
    onProvinciaChange (provincia) {
      this.loadMunicipios({ provinciaId: provincia.id })
    }
  },
  mounted () {
    this.loadProvincias()
    this.loadHomeTypes()
  }
}
</script>
