<template>
  <q-page class="flex flex-block">
    <Header>
      {{title}}
    </Header>
    <div class="full-width q-pa-sm">
      <PremiumBanner/>
    </div>
    <div class="row wrap full-width q-px-sm">
      <div class="col-sm-8 col-12 q-pa-sm">
        <div class="text-h5 q-py-lg">Datos de la vivienda</div>
        <FreePropertyForm/>
      </div>
      <div class="col-sm-4 col-12 q-pa-sm">
        <FeaturedPosts/>
      </div>
    </div>
  </q-page>
</template>

<script>
import Header from 'layouts/Header.vue'
import FreePropertyForm from 'components/property/FreePropertyForm.vue'
import FeaturedPosts from 'components/property/FeaturedPosts.vue'
import PremiumBanner from 'components/PremiumBanner.vue'

export default {
  name: 'AddFreePostPage',
  components: {
    Header,
    FreePropertyForm,
    FeaturedPosts,
    PremiumBanner
  },
  data () {
    return {
      title: 'Pubicar casa gratis'
    }
  },
  meta () {
    return {
      titleTemplate: title => `${this.title} - ${title}`
    }
  }
}
</script>
