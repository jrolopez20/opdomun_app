<template>
    <q-page class="flex flex-center">
        <q-parallax :height="350" :speed="0.5">
            <template v-slot:media>
                <img src="images/header_background.jpg">
            </template>
            <div class="row items-end full-height">
                <div class="q-gutter-xl q-mb-xl">
                    <div class="col-12 text-white text-center q-pa-md text-branding">
                        Ahora estás más cerca de la casa de tus sueños
                    </div>

                    <div class="col-12 q-gutter-sm text-center">
                        <!--                <q-btn no-caps unelevated rounded color="primary" label="Publicar casa" to="/anuncio/nuevo" style="min-width: 250px"/>-->
                        <q-btn no-caps unelevated rounded color="primary" label="Crear anuncio de compra"
                               to="/compro-casa/nuevo" style="min-width: 250px"/>
                    </div>
                </div>
            </div>
        </q-parallax>

        <div class="q-px-sm full-width q-pb-md q-mt-xl">
            <div class="text-h4 text-center text-dark">¿<span class="text-primary">Recomendaciones</span> del mes?</div>
            <p class="text-h6 text-grey-8 q-mt-sm text-center">
                Mejores anuncios según la relación calidad precio.
            </p>
        </div>

        <div class="full-width row recommended_properties">
            <div class="row full-width">
                <div class="col-sm-4 col-12 q-pa-sm" v-for="property in recommendedPosts" :key="`xs-${property.id}`">
                    <SingleProperty
                            :property="property"
                            class="col-sm-6 col-md-4 col-lg-3 col-12"
                    />
                </div>
            </div>
        </div>

        <AppPromotion class="q-my-xl"/>

        <WhyChooseUs class="q-px-md"/>

    </q-page>
</template>

<script>
import SingleProperty from 'components/property/SingleProperty.vue'
import WhyChooseUs from 'components/WhyChooseUs.vue'
import AppPromotion from 'components/common/AppPromotion.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'PageIndex',
  components: {
    SingleProperty,
    WhyChooseUs,
    AppPromotion
  },
  computed: {
    ...mapGetters('post', [
      'recommendedPosts'
    ])
  },
  methods: {
    search () {
      this.$router.push('/casas-en-venta')
    },
    ...mapActions('post', [
      'clearFilters',
      'loadRecommendedPosts'
    ])
  },
  mounted () {
    this.clearFilters()
    this.loadRecommendedPosts({ limit: 6 })
  }
}
</script>

<style lang="sass">
    .text-branding
        font-size: 1.7rem
        line-height: 1.8rem
        font-family: 'Montserrat SemiBold'

    @media (min-width: 1024px)
        .recommended_properties
            padding-left: 80px !important
            padding-right: 80px !important
</style>
