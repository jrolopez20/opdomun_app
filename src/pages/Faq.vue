<template>
    <q-page class="flex flex-block ">
        <Header :title="title"/>
        <div class="row wrap full-width q-px-sm">
            <div class="col-sm-8 col-12 q-pa-sm">
                <div class="text-h5 q-py-lg">Donde todas sus preguntas serán respondidas</div>
                <q-list bordered>
                    <q-expansion-item
                            expand-separator
                            label="¿QUÉ ES OPDOMUN?"
                    >
                        <q-card>
                            <q-card-section>
                                Opdomun es una plataforma web, cuya misión es asesorar y ayudar en la compra de una casa
                                adecuada a los usuarios. Para ello se apoya en una metodología científica que evalúa
                                cada casa de acuerdo a sus características físicas y al lugar donde se encuentra. Además
                                de asesorar en la compra de casas, también brindamos los servicios de consejero para la
                                renta de viviendas vacacionales y poseemos una sección de clasificados sobre servicios
                                de construcción, donde existen anuncios sobre ventas de materiales, equipos y mano de
                                obra.
                            </q-card-section>
                        </q-card>
                    </q-expansion-item>

                    <q-expansion-item
                            expand-separator
                            label="¿QUÉ ES EL COEFICIENTE OPDO (Op)?"
                    >
                        <q-card>
                            <q-card-section>
                                El coeficiente Opdo (Op) es la relación costo beneficio de la casa, definido por la
                                evaluación de la misma con el precio de venta. Este coeficiente representa la proporción
                                entre las características de la casa y el precio de venta solicitado por el propietario.
                                La Evaluación de la casa se realiza mediante una metodología científica (Método de
                                Evaluación Integral de Viviendas) que analiza al inmueble y al entorno donde está
                                emplazada. De esta manera todas las ofertas siempre se organizan de forma descendiente
                                en base al Coeficiente Opdo, debido a que mientras es mayor el Coeficiente Opdo, la
                                oferta tendrá más características positivas por un precio menor.
                            </q-card-section>
                        </q-card>
                    </q-expansion-item>

                    <q-expansion-item
                            expand-separator
                            label="¿CÓMO PUBLICAR UN ANUNCIO SOBRE LA VENTA Y/O RENTA DE MI CASA EN OPDOMUN?"
                    >
                        <q-card>
                            <q-card-section>
                                Para publicar un anuncio sobre la venta y/o renta de su casa en Opdomun usted debe
                                establecer
                                contacto con el Especialista Opdumun que se encuentre más cercano a su lugar de
                                residencia.
                                Para ello usted puede visitar la página http://www.opdomun.com/nosotros/especialistas
                                opdomun.
                                El Especialista Opdomun es la persona capacitada para identificar correctamente las
                                características de su vivienda, así como del lugar donde se encuentra emplazada,
                                garantizando
                                la veracidad de la información que se publicará en nuestra plataforma.
                            </q-card-section>
                        </q-card>
                    </q-expansion-item>

                    <q-expansion-item
                            expand-separator
                            label="¿CÓMO PUBLICAR UN ANUNCIO SOBRE LA VENTA Y/O RENTA DE MI CASA EN OPDOMUN?"
                    >
                        <q-card>
                            <q-card-section>
                                Para publicar un anuncio sobre la venta y/o renta de su casa en Opdomun usted debe
                                establecer contacto con el Especialista Opdumun que se encuentre más cercano a su lugar
                                de residencia. Para ello usted puede visitar la página
                                http://www.opdomun.com/nosotros/especialistas opdomun. El Especialista Opdomun es la
                                persona capacitada para identificar correctamente las características de su vivienda,
                                así como del lugar donde se encuentra emplazada, garantizando la veracidad de la
                                información que se publicará en nuestra plataforma.
                            </q-card-section>
                        </q-card>
                    </q-expansion-item>

                </q-list>
            </div>
            <div class="col-sm-4 col-12 q-pa-sm">
                <FeaturedPosts/>
            </div>
        </div>
    </q-page>
</template>

<script>
import Header from 'layouts/Header.vue'
import FeaturedPosts from 'components/property/FeaturedPosts.vue'

export default {
  name: 'PageFaq',
  components: {
    Header,
    FeaturedPosts
  },
  data () {
    return {
      title: 'Preguntas frecuentes'
    }
  },
  meta () {
    return {
      titleTemplate: title => `${this.title} - ${title}`
    }
  }
}
</script>
