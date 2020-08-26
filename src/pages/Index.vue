<template>
    <q-page class="flex flex-center">
        <q-parallax :height="250" :speed="0.5" class="q-mb-lg">
            <template v-slot:media>
                <img src="images/header_background.jpg">
            </template>

<!--            <h3 class="text-white text-left q-px-lg full-width">Miles de compradores registrados esperan por tu anuncio</h3>-->

            <div class="q-pa-md q-gutter-sm text-center">
                <q-btn unelevated color="primary" label="Casas en venta" to="/casas-en-venta" style="min-width: 250px"/>
                <q-btn unelevated color="primary" label="Publicar casa" to="/anuncio/nuevo" style="min-width: 250px"/>
                <q-btn unelevated color="primary" label="Subscripción de ofertas" to="/suscribirse" style="min-width: 250px"/>
            </div>
        </q-parallax>

        <div class="full-width q-pb-md">
            <div class="text-h3 text-center text-dark">¿<span class="text-primary">Recomendaciones</span> del mes?</div>
            <p class="text-h6 text-grey-8 q-mt-sm text-center">
                Mejores anuncios según la relación calidad precio.
            </p>
        </div>

        <div class="full-width row recommended_properties">
            <div class="row full-width">
                <div class="col-sm-4 col-12 q-pa-sm" v-for="property in 3" :key="`xs-${property}`">
<!--                    <SingleProperty-->
<!--                            :property="property"-->
<!--                            class="col-sm-6 col-md-4 col-lg-3 col-12"-->
<!--                    />-->
                    sssd
                </div>
            </div>
        </div>

        <div class="full-width q-pt-xl q-pb-sm">
            <div class="text-h3 text-center text-dark">¿<span class="text-primary">Por qué</span> elegirnos?</div>
            <p class="text-h6 text-grey-8 q-mt-sm text-center">
                Proponemos un nuevo punto de vista para elegir la vivienda apropiada.
            </p>
        </div>

        <div class="row wrap full-width q-px-sm">
            <div class="col-sm-4 col-12 q-pa-md">
                <q-card flat bordered>
                    <q-card-section>
                        <div>
                            <q-icon name="las la-search" size="xl" color="primary" />
                        </div>
                        <div class="text-h6 q-my-sm">Fácil de usar</div>
                        <p class="text-body1">OPDOMUN ordena las ofertas de casas de acuerdo al Índice Opdo, el cual
                            representa el balance costo-beneficio de cada inmueble.</p>
                    </q-card-section>
                </q-card>
            </div>
            <div class="col-sm-4 col-12 q-pa-md">
                <q-card flat bordered>
                    <q-card-section>
                        <div>
                            <q-icon name="las la-building" size="xl" color="primary"/>
                        </div>
                        <div class="text-h6 q-my-sm">Vivienda + entorno</div>
                        <p class="text-body1">Se apoya en un procedimiento científico para evaluar una casa de acuerdo a
                            sus características y a las del entorno donde se encuentra.</p>
                    </q-card-section>
                </q-card>
            </div>
            <div class="col-sm-4 col-12 q-pa-md">
                <q-card flat bordered>
                    <q-card-section>
                        <div>
                            <q-icon name="la la-address-book" size="xl" color="primary"/>
                        </div>
                        <div class="text-h6 q-my-sm">Equipo competente</div>
                        <p class="text-body1">OPDOMUN es posible gracias a su equipo profesional que trabaja con pasión
                            para brindar la ayuda que usted necesita.</p>
                    </q-card-section>
                </q-card>
            </div>
        </div>
    </q-page>
</template>

<script>
// import SingleProperty from 'components/property/SingleProperty.vue'

export default {
  name: 'PageIndex',
  components: {
    // SingleProperty
  }
}
</script>

<style lang="sass">
@media (min-width: 1024px)
    .recommended_properties
        padding-left: 80px !important
        padding-right: 80px !important
</style>
