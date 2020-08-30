<template>
  <q-card>
    <q-img :src="picturePath + property.image" style="max-height: 200px;"/>

    <span class="status premium" v-if="property.plan === 1">{{property.plan_title}}</span>
    <span class="post-sold" v-if="property.sold === 1">VENDIDA</span>

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
        {{ property.provincia + ', ' + property.municipio }}
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
    this.picturePath = config.pathPostPicture
  }
}
</script>

<style lang="sass" scoped>

  .status
    position: absolute
    top: 12px
    left: -7px
    color: #fff
    padding: 10px 17px 10px 17px
    font-weight: bold
    font-size: 12px
    z-index: 99
    text-transform: uppercase

    &::before
      position: absolute
      top: -5px
      left: 0
      content: ''
      width: 0
      height: 0
      border-style: solid
      border-width: 0px 0px 5px 7px
      z-index: 99

    &.premium
      background: #008ffc
      &::before
        border-color: transparent transparent #008ffc transparent

  .post-sold
    position: absolute
    top: 60px
    left: 0px
    color: #fff
    background: #008ffc
    padding: 10px 30px 10px 10px
    font-weight: bold
    font-size: 20px
    z-index: 99
</style>
