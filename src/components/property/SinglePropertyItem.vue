<template>
  <q-item>
    <q-item-section thumbnail class="q-pl-xs" style="justify-content: flex-start;">
      <router-link
              :to="`/casas-en-venta/${property.id}`"
              style="text-decoration: none"
      >
        <q-img
                v-if="property.images && property.images.length"
                :src="property.images[0].url">
          <template v-slot:error>
            <div style="background-color: #ededed"
                 class="text-grey-9 absolute-full flex flex-center">
              <q-icon name="las la-camera" size="120px" class="flex-center"/>
            </div>
          </template>
        </q-img>
        <div v-else style="background-color: #ededed"
             class="text-grey-9 flex flex-center">
          <q-icon name="las la-camera" size="120px" class="flex-center"/>
        </div>
      </router-link>
    </q-item-section>

    <q-item-section>
      <q-item-label class="text-body1">
        <router-link
                :to="`casas-en-venta/${property.id}`"
                style="text-decoration: none"
                class="text-dark"
        >
          <div class="text-weight-medium">
            {{property.address.localidad.municipio.provincia.cod}}, {{property.address.localidad.municipio.title}}
          </div>
          <div class="text-body2">
            {{property.address.localidad.title}}, {{property.address.description}}
          </div>
        </router-link>
      </q-item-label>
      <q-item-label class="text-body2">
        <div class="row text-weight-medium">
          <div class="col-6">
            {{property.opdo}}
          </div>
          <div class="col-6">
            {{property.price | toCurrency}}
          </div>
        </div>
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  name: 'SinglePropertyItem',
  props: ['property'],
  data () {
    return {
    }
  },
  mounted () {
  }
}
</script>
