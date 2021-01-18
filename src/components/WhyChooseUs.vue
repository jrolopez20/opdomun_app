<template>
    <div class="full-width q-py-xl choose-us-background">
        <div class="full-width ">
            <div class="text-h4 text-center text-dark">¿<span class="text-primary">Por qué</span> elegirnos?</div>
            <p class="text-h6 text-grey-8 q-mt-sm text-center">
                Proponemos un nuevo punto de vista para elegir la vivienda apropiada.
            </p>
        </div>

        <div class="full-width row">
            <div class="col-md-4 col-12 q-pa-sm">
                <q-card flat class="text-center bg-transparent">
                    <q-card-section class="q-pb-none">
                        <div class="text-h4 text-primary">
                            <i class="las la-edit"></i>
                        </div>
                    </q-card-section>

                    <q-card-section>
                        Registramos los aspectos de la casa que quieres comprar y te notificamos cuando tengamos ofertas
                        para ti.
                    </q-card-section>

                    <q-card-actions align="center" class="q-pb-lg">
                        <q-btn rounded outline no-caps
                               color="primary"
                               class="q-px-md"
                               to="/compro-casa/nuevo"
                        >
                            <span class="text-body2 text-bold">Crear anuncio de compra</span>
                        </q-btn>
                    </q-card-actions>
                </q-card>
            </div>

            <div class="col-md-4 col-12 q-pa-sm">
                <q-card flat class="text-center bg-transparent">
                    <q-card-section class="q-pb-none">
                        <div class="text-h4 text-primary">
                            <i class="las la-bullhorn"></i>
                        </div>
                    </q-card-section>

                    <q-card-section>
                        Publicamos y promocionamos tu casa en venta de forma seria y profesional, notificamos tu oferta
                        a nuestros compradores.
                    </q-card-section>

                    <q-card-actions align="center" class="q-pb-lg">
                        <q-btn rounded outline no-caps
                               color="primary"
                               class="q-px-md"
                               to="/oficinas"
                        >
                            <span class="text-body2 text-bold">Publicar anuncio</span>
                        </q-btn>
                    </q-card-actions>
                </q-card>
            </div>

            <div class="col-md-4 col-12 q-pa-sm">
                <q-card flat class="text-center bg-transparent">
                    <q-card-section class="q-pb-none">
                        <div class="text-h4 text-primary">
                            <i class="las la-calculator"></i>
                        </div>
                    </q-card-section>

                    <q-card-section>
                        Calculamos el valor real de tu casa utilizando la sapiencia de un arquitecto y un novedoso
                        sistema informático.
                    </q-card-section>

                    <q-card-actions align="center" class="q-pb-lg">
                        <q-btn rounded outline no-caps
                               color="primary"
                               class="q-px-md"
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
<style lang="sass">
    .choose-us-background
        background: #f5f8fa
</style>
