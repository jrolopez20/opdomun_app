<template>
  <q-page class="flex flex-block">
    <Header :title="title"/>
    <div class="q-pa-md row full-width">
      <SingleProperty v-for="property in 2" :key="`xs-${property}`" class="col-sm-6 col-md-4 col-lg-3 col-12"/>
    </div>
  </q-page>
</template>

<script>
import Header from 'layouts/Header.vue'
import SingleProperty from 'components/property/SingleProperty.vue'

export default {
  name: 'PageProperties',
  components: {
    Header,
    SingleProperty
  },
  data () {
    return {
      title: 'Casas en venta'
    }
  },
  meta () {
    return {
      titleTemplate: title => `${this.title} - ${title}`
    }
  }
}
</script>
