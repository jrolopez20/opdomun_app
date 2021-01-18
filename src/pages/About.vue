<template>
    <q-page class="flex flex-block">
        <Header class="q-mb-md">
            {{title}}
        </Header>

        <div class="q-px-md">
            <div class="full-width">
                <h3 class="text-h4 text-dark text-center">Hola! Bienvenido a <span class="text-primary">Opdomun</span></h3>
                <p class="text-body1 text-grey-8 q-mt-sm">
                    Somos una empresa basada en el negocio colaborativo entre profesionales relacionados con el sector
                    inmobiliario. Con el objetivo de ofrecer los resultados que usted desea nos apoyamos en un
                    procedimiento
                    procedimiento
                    científico desarrollado por nuestro equipo.
                </p>
            </div>

            <div class="full-width row">
                <div class="col-sm-6 col-md-4 col-lg-3 col-12 q-pa-sm">
                    <q-card flat>
                        <q-img src="images/mision-bg.jpg"/>
                        <q-card-section>
                            <div class="text-h6">MISIÓN</div>
                        </q-card-section>

                        <q-card-section class="q-pt-none">
                            Asesorar y ayudar de forma profesional y técnica en la búsqueda de casas e inmuebles para
                            comprar y/o rentar. Estamos comprometidos con la seriedad y la profesionalidad, buscando
                            inspirar a otros para hacerlo también.
                        </q-card-section>
                    </q-card>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-3 col-12 q-pa-sm">
                    <q-card flat>
                        <q-img src="images/vision-bg.jpg"/>

                        <q-card-section>
                            <div class="text-h6">VISIÓN</div>
                        </q-card-section>

                        <q-card-section class="q-pt-none">
                            Ser la plataforma web más completa para asesorar en la compra venta de inmuebles.
                            Desarrollar
                            una red de trabajo para crear un valor común y duradero.
                        </q-card-section>
                    </q-card>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-3 col-12 q-pa-sm">
                    <q-card flat>
                        <q-img src="images/quality-bg.jpg"/>

                        <q-card-section>
                            <div class="text-h6">VALORES</div>
                        </q-card-section>

                        <q-card-section class="q-pt-none">
                            Liderazgo / Colaboración / Profesionalidad / Seriedad / Imparcialidad / Pasión / Calidad.
                        </q-card-section>
                    </q-card>
                </div>
            </div>

            <div class="full-width q-py-md">
                <div class="text-h4 text-dark text-center q-py-md">Nuestros servicios</div>

                <div class="full-width row" style="font-size: 0.8rem;">
                    <div  v-for="service in ourServices" :key="service.id"
                            class="col-sm-6 col-md-3 col-12 q-pa-sm">
                        <q-card>
                            <q-card-section>
                                <div class="text-h6 text-center">
                                    {{ service.title }}
                                </div>
                            </q-card-section>

                            <q-card-section class="q-py-none" v-html="service.description">
                            </q-card-section>

                            <q-card-section class="text-center text-h6 q-py-sm">
                                <strong>{{ service.price | toCurrency }}</strong>
                            </q-card-section>

                            <q-card-actions class="q-pt-none q-pb-md" align="center">
                                <q-btn no-caps rounded
                                       color="primary"
                                       class="q-px-lg"
                                       @click="onSelectService(service.type)"
                                >
                                    <span class="text-body1 text-bold">Elegir</span>
                                </q-btn>
                            </q-card-actions>
                        </q-card>
                    </div>
                </div>
            </div>

            <WhyChooseUs class="q-px-md q-mb-xl"/>

        </div>

    </q-page>
</template>

<script>
import Header from 'layouts/Header.vue'
import { mapActions, mapGetters } from 'vuex'
import WhyChooseUs from 'components/WhyChooseUs.vue'

export default {
  name: 'PageAbout',
  components: {
    Header,
    WhyChooseUs
  },
  data () {
    return {
      title: 'Quienes somos'
    }
  },
  computed: {
    ...mapGetters('ourServices', [
      'ourServices',
      'ourServicesType'
    ])
  },
  methods: {
    ...mapActions('ourServices', [
      'loadOurServices'
    ]),
    onSelectService (type) {
      if (type === this.ourServicesType.PREMIUM_POST) {
      } else {
      }
    }
  },
  mounted () {
    this.loadOurServices()
  },
  meta () {
    return {
      titleTemplate: title => `${this.title} - ${title}`
    }
  }
}
</script>

<style lang="sass">
@media (min-width: 600px)
    .service-description
        height: 150px
</style>
