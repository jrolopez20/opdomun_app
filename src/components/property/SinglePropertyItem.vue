<template>
  <q-item>
    <q-item-section thumbnail class="q-pl-md">
      <img :src="baseImageUrl + property.images[0].url">
    </q-item-section>

    <q-item-section class="text-body1">
      <q-item-label>
        <strong class="text-dark">{{property.opdo}}</strong>
      </q-item-label>
      <q-item-label class="text-body2">
        <q-icon name="place" color="primary"/> {{property.address}}
      </q-item-label>
      <q-item-label>
        <strong class="text-primary">{{property.price}}</strong>
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
import { globalConfig } from 'boot/axios'

export default {
  name: 'SinglePropertyItem',
  props: ['property'],
  computed: {
    baseImageUrl: () => {
      return `${globalConfig.baseImageUrl}post_pictures/`
    }
  }
}
</script>
