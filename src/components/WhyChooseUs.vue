<template>
    <div class="full-width bg-white q-py-xl">
        <div class="full-width ">
            <div class="text-h3 text-center text-dark">¿<span class="text-primary">Por qué</span> elegirnos?</div>
            <p class="text-h6 text-grey-8 q-mt-sm text-center">
                Proponemos un nuevo punto de vista para elegir la vivienda apropiada.
            </p>
        </div>

        <div class="full-width row">
            <div class="col-sm-4 col-12 q-pa-sm">
                <q-card flat class="text-center bg-grey-2">
                    <q-card-section class="q-pb-none">
                        <div class="text-h4">
                            <i class="las la-edit"></i>
                        </div>
                    </q-card-section>

                    <q-card-section class="text-bold">
                        Registramos los aspectos de la casa que quieres comprar y te notificamos cuando tengamos ofertas
                        para ti
                    </q-card-section>

                    <q-separator inset/>

                    <q-card-actions>
                        <q-btn flat no-caps
                               color="primary"
                               class="full-width"
                               to="/suscribirse"
                        >
                            <span class="text-body2 text-bold">Subscripción de oferta</span>
                        </q-btn>
                    </q-card-actions>
                </q-card>
            </div>

            <div class="col-sm-4 col-12 q-pa-sm">
                <q-card flat class="text-center bg-grey-2">
                    <q-card-section class="q-pb-none">
                        <div class="text-h4">
                            <i class="las la-bullhorn"></i>
                        </div>
                    </q-card-section>

                    <q-card-section class="text-bold">
                        Publicamos y promocionamos tu casa en venta de forma seria y profesional, notificamos tu oferta
                        a nuestros compradores
                    </q-card-section>

                    <q-separator inset/>

                    <q-card-actions>
                        <q-btn flat no-caps
                               color="primary"
                               class="full-width"
                               to="/oficinas"
                        >
                            <span class="text-body2 text-bold">Publicar anuncio</span>
                        </q-btn>
                    </q-card-actions>
                </q-card>
            </div>

            <div class="col-sm-4 col-12 q-pa-sm">
                <q-card flat class="text-center bg-grey-2">
                    <q-card-section class="q-pb-none">
                        <div class="text-h4">
                            <i class="las la-calculator"></i>
                        </div>
                    </q-card-section>

                    <q-card-section class="text-bold">
                        Calculamos el valor real de tu casa utilizando la sapiencia de un arquitecto y un novedoso
                        sistema informático
                    </q-card-section>

                    <q-separator inset/>

                    <q-card-actions>
                        <q-btn flat no-caps
                               color="primary"
                               class="full-width"
                               to="/oficinas"
                        >
                            <span class="text-body2 text-bold">Tasar mi casa</span>
                        </q-btn>
                    </q-card-actions>
                </q-card>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'WhyChooseUs'
}
</script>
