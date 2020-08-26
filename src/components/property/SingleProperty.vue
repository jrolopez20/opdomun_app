<template>
  <q-card>
    <q-img :src="picturePath" style="max-height: 200px;"/>

    <q-card-section class="q-pb-sm">
      <q-btn
              fab
              color="primary"
              icon="la la-eye"
              class="absolute"
              style="top: 0; right: 12px; transform: translateY(-50%);"
              :to="`casa/${property.id}`"
      />
      <div class="col text-h6 ellipsis">
        {{ property.municipio.provincia.title + ', ' + property.municipio.title }}
      </div>
      <div class="text-grey-8 text-body2 row no-wrap ">
        <q-icon name="las la-map-marker" size="xs"/>
        {{ property.address }}
      </div>
    </q-card-section>

    <q-card-section class="row justify-between q-px-md q-py-sm">
        <span>
          <q-icon name="la la-calendar" size="sm"/> {{ date().formatDate(property.published_at, 'DD/MM/YYYY') }}
        </span>
      <span>
          <q-icon name="la la-bed" size="sm"/> {{ property.bedrooms }}
        </span>
      <span>
          <q-icon name="la la-bath" size="sm"/> {{ property.bathrooms }}
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
import { config } from 'boot/axios'

export default {
  name: 'SingleProperty',
  props: ['property'],
  data () {
    return {
      picturePath: null
    }
  },
  methods: {
    date () {
      return date
    }
  },
  mounted () {
    this.picturePath = this.property.images && this.property.images.length ? config.pathPostPicture + this.property.images[0].url : ''
  }
}
</script>
