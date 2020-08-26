<template>
  <q-item>
    <q-item-section thumbnail class="q-pl-md">
      <img :src="picturePath">
    </q-item-section>

    <q-item-section class="text-body1">
      <q-item-label>
        <strong class="text-dark">{{property.opdo}}</strong>
      </q-item-label>
      <q-item-label class="text-body2">
        <q-icon name="place" color="primary"/> {{property.address}}
      </q-item-label>
      <q-item-label>
        <strong class="text-primary">{{property.price | toCurrency }}</strong>
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
import { config } from 'boot/axios'

export default {
  name: 'SinglePropertyItem',
  props: ['property'],
  data () {
    return {
      picturePath: null
    }
  },
  mounted () {
    this.picturePath = this.property.images && this.property.images.length ? config.pathPostPicture + this.property.images[0].url : ''
  }

}
</script>
