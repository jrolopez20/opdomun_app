<template>
  <q-card>
    <q-card-section>
      <div class="text-h6 text-center">Compro casa en: {{ announcement.provincia.title }}</div>
    </q-card-section>

    <q-card-section class="q-py-none">
      <div class="row">
        <div class="col-auto">
          <q-icon name="las la-map-marker" size="sm" /> Ubicación
        </div>
        <div class="col text-right text-weight-medium">
          {{ municipios }}
        </div>
      </div>
      <q-separator class="q-my-sm"/>

      <div class="row">
        <div class="col-auto">
          <q-icon name="las la-map-marker" size="sm" /> Tipo de edificación
        </div>
        <div class="col text-right text-weight-medium">
          {{ homeTypes }}
        </div>
      </div>
      <q-separator class="q-my-sm"/>

      <div class="row justify-around q-px-md q-mb-sm">
        <div>
          <q-icon name="las la-bed" size="sm"/>
          {{ announcement.bedrooms }}
        </div>
        <div>
          <q-icon name="las la-bath" size="sm"/>
          {{ announcement.bathrooms }}
        </div>
      </div>
    </q-card-section>

    <q-card-actions class="row justify-center text-h6 q-px-md q-pt-none">
      <span v-if="announcement.minPrice.value">{{ announcement.minPrice | toCurrency }} - </span>
      <span v-else>Hasta &nbsp;</span>
      <span>{{ announcement.maxPrice | toCurrency }}</span>
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  name: 'SinglePurchaseAnnouncement',
  props: ['announcement'],
  computed: {
    municipios () {
      const temp = []
      this.announcement.municipios.slice(0, 3).forEach(m => {
        temp.push(m.title)
      })
      return temp.join(' / ')
    },
    homeTypes () {
      const temp = []
      this.announcement.homeTypes.slice(0, 2).forEach(m => {
        temp.push(m.title)
      })
      return temp.join(' / ')
    }
  }
}
</script>
