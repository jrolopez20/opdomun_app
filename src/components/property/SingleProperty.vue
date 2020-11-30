<template>
    <q-card>
        <router-link
                :to="`casas-en-venta/${property.id}`"
                style="text-decoration: none"
        >
            <q-img
                   v-if="property.images && property.images.length"
                   :src="property.images[0].url" style="height: 190px;">
                <template v-slot:error>
                    <div style="background-color: #ededed"
                         class="text-grey-9 absolute-full flex flex-center">
                        <q-icon name="las la-camera" size="120px" class="flex-center"/>
                    </div>
                </template>
            </q-img>
            <div v-else style="height: 190px; background-color: #ededed"
                 class="text-grey-9 flex flex-center">
                <q-icon name="las la-camera" size="120px" class="flex-center"/>
            </div>
            <span class="status flex flex-center" v-if="property.plan.type === 'PREMIUM' || property.sold">
                <i class="lab la-sketch" v-if="property.plan.type === 'PREMIUM'"></i>
                <span v-if="property.sold" class="">Vendido</span>
            </span>
        </router-link>

        <router-link
                :to="`casas-en-venta/${property.id}`"
                style="text-decoration: none"
                class="text-dark"
        >
            <q-card-section class="q-pb-sm">
                <div class="col text-h6 ellipsis">
                    {{ property.address.localidad.municipio.provincia.cod + ', ' +
                    property.address.localidad.municipio.title }}
                </div>
                <div class="text-body2 row no-wrap ">
                    <q-icon name="las la-map-marker" size="xs"/>
                    {{ property.address.localidad.title }}, {{ property.address.description }}
                </div>
            </q-card-section>
        </router-link>

        <q-card-section class="row justify-between q-px-md q-py-sm">
            <span>
              <q-icon name="las la-ruler-combined" size="sm"/> {{ property.area }} m²
            </span>
            <span>
              <q-icon name="las la-bed" size="sm"/> {{ property.bedrooms }}
            </span>
            <span>
              <q-icon name="las la-bath" size="sm"/> {{ property.bathrooms }}
            </span>
        </q-card-section>

        <q-separator inset/>

        <q-card-section class="q-py-sm text-h6">
            <div class="row">
                <div class="col-6 items-center">
                    {{ property.opdo }} Op
                </div>
                <div class="col-6 text-right">
                    {{ property.price | toCurrency }}
                </div>
            </div>
        </q-card-section>
    </q-card>
</template>

<script>
import { date } from 'quasar'

export default {
  name: 'SingleProperty',
  props: ['property'],
  data () {
    return {
    }
  },
  methods: {
    date () {
      return date
    }
  }
}
</script>

<style lang="sass" scoped>
  .status
    position: absolute
    top: 0
    left: 0
    color: #fff
    font-size: 20px
    padding: 7px 10px
    border-radius: 0px 0px 22px
    background: $primary
    box-shadow: 0px 3px 4px 0px rgba(0, 0, 0, 0.25)

    i
      font-size: 24px
    span
      margin-left: 5px
      font-weight: 500
</style>
