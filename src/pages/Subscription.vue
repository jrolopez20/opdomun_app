<template>
  <q-page class="flex flex-block">
    <Header>
      {{title}}
    </Header>
    <div class="row wrap full-width q-px-sm">
      <div class="col-sm-8 col-12 ">
        <div class="text-h5 q-pt-lg q-pb-md q-pl-lg">Aspectos de la casa que quiero comprar</div>
        <Subscription/>
      </div>
      <div class="col-sm-4 col-12 q-pa-sm">
        <FeaturedPosts/>
      </div>
    </div>
  </q-page>
</template>

<script>
import Header from 'layouts/Header.vue'
import Subscription from 'components/Subscription.vue'
import FeaturedPosts from 'components/property/FeaturedPosts.vue'

export default {
  name: 'PageSubscription',
  components: {
    Header,
    Subscription,
    FeaturedPosts
  },
  data () {
    return {
      title: 'Nuevo anuncio de compra'
    }
  },
  meta () {
    return {
      titleTemplate: title => `${this.title} - ${title}`
    }
  },
  mounted () {
    if (this.$route.params.id) {
      this.title = 'Modificar anuncio de compra'
    }
  }
}
</script>
