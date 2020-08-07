<template>
  <q-page class="flex flex-block ">
    <Header :title="title"/>
    <div class="full-width q-px-sm">
      <div class="text-h5 q-py-lg">Contacte con nuestra oficina más cercana</div>
      <div class="row q-pb-lg">
        <div class="col-sm-4 col-12 q-pa-sm">
          <SingleOffice v-for="office in offices" :key="office.id" :office="office"/>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import Header from 'layouts/Header.vue'
import SingleOffice from '../components/office/SingleOffice'

export default {
  name: 'PageOffices',

  components: {
    Header,
    SingleOffice
  },
  data () {
    return {
      title: 'Nuestras oficinas',
      offices: [
        {
          provincia: 'Matanzas',
          address: 'Reparto Armando Mestre, Matanzas',
          phone: '53568978',
          email: 'jhon.doe@gmail.com'
        }
      ]
    }
  },
  meta () {
    return {
      titleTemplate: title => `${this.title} - ${title}`
    }
  }
}
</script>
