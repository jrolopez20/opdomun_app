<template>
    <q-page class="flex flex-block">
        <Header :title="title" class="q-mb-md"/>

        <div class="q-px-md">
            <div class="full-width q-py-md">
                <div class="text-h3 text-dark">Hola! Bienvenido a <span class="text-primary">OPDOMUN</span></div>
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
                    <div class="col-sm-6 col-md-3 col-12 q-pa-sm">
                        <q-card flat class="text-center bg-grey-4">
                            <q-card-section>
                                <div class="text-h6">
                                    <i class="las la-bullhorn"></i> Anuncio Premium
                                </div>
                            </q-card-section>

                            <q-card-section class="q-py-none service-description">
                                <div>Visita de un arquitecto.</div>
                                <div>Publicación de su anuncio en Opdomun.</div>
                                <div>Notificación de compradores interesados.</div>
                                <div>Entrega de informe técnico.</div>
                                <div>Publicidad en las Redes Sociales.</div>
                                <div class="q-my-md text-body1">
                                    <strong>30 cuc / 3 meses</strong>
                                </div>
                            </q-card-section>

                            <q-separator inset/>

                            <q-card-actions>
                                <q-btn flat no-caps
                                       color="primary"
                                       class="full-width"
                                >
                                    <span class="text-body1 text-bold">Seleccionar</span>
                                </q-btn>
                            </q-card-actions>
                        </q-card>
                    </div>

                    <div class="col-sm-6 col-md-3 col-12 q-pa-sm">
                        <q-card flat class="text-center bg-grey-4">
                            <q-card-section>
                                <div class="text-h6">
                                    <i class="las la-building"></i> Tasación de Inmuebles
                                </div>
                            </q-card-section>

                            <q-card-section class="q-py-none service-description">
                                <div>Visita de un arquitecto.</div>
                                <div>Cálculo del precio de la casa utilizando la metodología de Opdomun.</div>
                                <div>Entrega de informe técnico.</div>
                                <div class="q-my-md text-body1">
                                    <strong>40 cuc</strong>
                                </div>
                            </q-card-section>

                            <q-separator inset/>

                            <q-card-actions>
                                <q-btn flat no-caps
                                       color="primary"
                                       class="full-width"
                                >
                                    <span class="text-body1 text-bold">Seleccionar</span>
                                </q-btn>
                            </q-card-actions>
                        </q-card>
                    </div>

                    <div class="col-sm-6 col-md-3 col-12 q-pa-sm">
                        <q-card flat class="text-center bg-grey-4">
                            <q-card-section>
                                <div class="text-h6">
                                    <i class="las la-edit"></i> Subscripción de ofertas
                                </div>
                            </q-card-section>

                            <q-card-section class="q-py-none service-description">
                                <div>Registro de las caracteristicas de la casa que usted desea comprar.</div>
                                <div>Notificación de anuncios de casas de acuerdo a sus preferencias.</div>
                                <div class="q-my-md text-body1">
                                    <strong>Gratis / 3 meses</strong>
                                </div>
                            </q-card-section>

                            <q-separator inset/>

                            <q-card-actions>
                                <q-btn flat no-caps
                                       color="primary"
                                       class="full-width"
                                       to="/suscribirse"
                                >
                                    <span class="text-body1 text-bold">Seleccionar</span>
                                </q-btn>
                            </q-card-actions>
                        </q-card>
                    </div>

                    <div class="col-sm-6 col-md-3 col-12 q-pa-sm">
                        <q-card flat class="text-center bg-grey-4">
                            <q-card-section>
                                <div class="text-h6">
                                    <i class="las la-bullhorn"></i> Anuncio Gratis
                                </div>
                            </q-card-section>

                            <q-card-section class="q-py-none service-description">
                                <div>Publicación de su anuncio en Opdomun</div>
                                <div>Activo por un mes</div>
                                <div class="q-my-md text-body1">
                                    <strong>Gratis / 1 meses</strong>
                                </div>
                            </q-card-section>

                            <q-separator inset/>

                            <q-card-actions>
                                <q-btn flat no-caps
                                       color="primary"
                                       class="full-width"
                                >
                                    <span class="text-body1 text-bold">Seleccionar</span>
                                </q-btn>
                            </q-card-actions>
                        </q-card>
                    </div>
                </div>
            </div>
        </div>

    </q-page>
</template>

<script>
import Header from 'layouts/Header.vue'

export default {
  name: 'PageAbout',
  components: {
    Header
  },
  data () {
    return {
      title: 'Quienes somos'
    }
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
