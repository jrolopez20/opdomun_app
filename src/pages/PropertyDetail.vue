<template>
  <q-page class="">
    <Header :title="title"/>

      <div class="q-pa-md">
          <div class="row">
              <section class="col-md-6 col-12">
                  <q-carousel
                          animated
                          v-model="slide"
                          arrows
                          navigation
                          infinite
                          autoplay
                          :fullscreen.sync="fullscreen"
                          style="border-radius: 5px;"
                  >
                      <q-carousel-slide
                              v-for="image in post.images"
                              :key="image.id"
                              :name="image.id"
                              :img-src="pictureBasePath + image.url"
                      />

                      <template v-slot:control>
                          <q-carousel-control
                                  position="top-right"
                                  :offset="[18, 18]"
                          >
                              <q-btn
                                      round outline color="white"
                                      :icon="fullscreen ? 'fullscreen_exit' : 'fullscreen'"
                                      @click="fullscreen = !fullscreen"
                              />
                          </q-carousel-control>
                      </template>
                  </q-carousel>
              </section>
              <section class="col-md-6 col-12 q-pa-md text-body2">
                  <div class="text-h5 q-px-sm">{{ postHeader }}</div>
                  <div class="text-body1 q-px-sm">
                      <strong><i class="las la-map-marker"></i></strong> {{ post.address }}
                  </div>

                  <div class="row q-py-md q-px-sm">
                      <div class="col-6 text-h5">{{ post.opdo }} Op</div>
                      <div class="col-6 text-h6 text-primary">{{ post.price | toCurrency }}</div>
                  </div>

                  <div class="row">
                      <div class="col-sm-6 col-12 q-px-sm">
                          <div class="row">
                              <div class="col">
                                  <i class="las la-bed"></i> Habitaciones
                              </div>
                              <div class="col-auto">{{ post.bedrooms }}</div>
                          </div>
                          <q-separator class="q-my-sm"/>
                      </div>
                      <div class="col-sm-6 col-12 q-px-sm">
                          <div class="row">
                              <div class="col">
                                  <i class="las la-bath"></i> Baños
                              </div>
                              <div class="col-auto">{{ post.bathrooms }}</div>
                          </div>
                          <q-separator class="q-my-sm"/>
                      </div>
                      <div class="col-sm-6 col-12 q-px-sm">
                          <div class="row">
                              <div class="col">
                                  <i class="las la-crop"></i> Área
                              </div>
                              <div class="col-auto">{{ post.area }} m2</div>
                          </div>
                          <q-separator class="q-my-sm"/>
                      </div>
                      <div class="col-sm-6 col-12 q-px-sm">
                          <div class="row">
                              <div class="col">
                                  <i class="las la-calendar"></i> Año de construcción
                              </div>
                              <div class="col-auto text-right">{{ post.built_year }}</div>
                          </div>
                          <q-separator class="q-my-sm"/>
                      </div>
                      <div class="col-sm-6 col-12 q-px-sm">
                          <div class="row">
                              <div class="col">
                                  <i class="lar la-heart"></i> Estado
                              </div>
                              <div class="col-auto">{{ post.build_status }}</div>
                          </div>
                          <q-separator class="q-my-sm"/>
                      </div>
                      <div class="col-sm-6 col-12 q-px-sm">
                          <div class="row">
                              <div class="col">
                                  <i class="las la-landmark"></i> Tipo de vivienda
                              </div>
                              <div class="col-auto text-right">{{ post.homeType ? post.homeType.title : '' }}</div>
                          </div>
                          <q-separator class="q-my-sm"/>
                      </div>
                      <div class="col-12 q-px-sm">
                          <div class="q-px-sm">Otros espacios:</div>
                          <q-chip square v-for="place in post.postPlaces" :key="place.id">
                              {{ place.title }}
                          </q-chip>
                      </div>
                  </div>
              </section>
          </div>

      <div class="row bg-white">
        <div class="col-sm-8 q-pa-sm">
          <div class="text-h5 q-py-lg">Detalles</div>
          <p class="q-my-sm">{{ post.summary }}</p>
          <!--<div class="row bg-grey-1 text-body2 q-pa-md">
            <div class="col-sm-6 q-pa-sm">
              <span class="col text-bold">Índice Op</span>
              <span class="col">{{ post.opdo }} Op</span>
            </div>
            <div class="col-sm-6 q-pa-sm">
              <div class="col text-bold">Calificación</div>
              <div class="col">{{ post.evi }} Ptos</div>
            </div>
            <div class="col-sm-6 q-pa-sm">
              <span class="col text-bold">Precio</span>
              <span class="col">{{ post.price | toCurrency }}</span>
            </div>
            <div class="col-sm-6 q-pa-sm">
              <div class="col text-bold">Área</div>
              <div class="col">{{ post.area }} m2</div>
            </div>
            <div class="col-sm-6 q-pa-sm">
              <div class="col text-bold">Habitaciones</div>
              <div class="col">{{ post.bedrooms }}</div>
            </div>
            <div class="col-sm-6 q-pa-sm">
              <div class="col text-bold">Baños</div>
              <div class="col">{{ post.bathrooms }}</div>
            </div>
            <div class="col-sm-6 q-pa-sm">
              <div class="col text-bold">Año construcción</div>
              <div class="col">{{ post.built_year }}</div>
            </div>
            <div class="col-sm-6 q-pa-sm">
              <div class="col text-bold">Estado</div>
              <div class="col">{{ post.build_status }}</div>
            </div>
            <div class="col-sm-6 q-pa-sm">
              <div class="col text-bold">Tipo de vivienda</div>
              <div class="col">{{ post.homeType ? post.homeType.title : '' }}</div>
            </div>
            <div class="col-sm-6 q-pa-sm">
              <div class="col text-bold">Publicado</div>
              <div class="col">{{ date().formatDate(post.published_at, 'DD/MM/YYYY') }}</div>
            </div>
            <div class="col-12 q-pa-sm">
              <div class="text-bold">Otros espacios</div>
              <q-chip square v-for="place in post.postPlaces" :key="place.id">
                {{ place.title }}
              </q-chip>
            </div>
          </div>-->

          <div class="text-h5 q-py-lg">Información del Propietario</div>
          <div class="bg-grey-1 text-body2 q-pa-md">
            <div class="text-h6">{{ post.owner ? post.owner.fullname : '' }}</div>
            <div class="text-body2">
              <q-icon name="las la-phone" size="sm"/> {{ post.owner ? post.owner.phone : '' }}
            </div>
            <div class="text-body2" v-if="post.owner && post.owner.email">
              <q-icon name="las la-envelope" size="sm"/> {{ post.owner ? post.owner.email : ''}}
            </div>
          </div>

          <q-separator inset class="q-my-md"/>

          <div class="text-h6">Actividad</div>
          <div>Cantidad de visitas: {{ post.postVisit ? post.postVisit.total : '' }}</div>
          <div>Días en Opdomun: {{ daysOnOpdomun }} días</div>
        </div>

        <div class="col-sm-4 col-12 q-pa-sm">
          <FeaturedPosts/>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { date } from 'quasar'
import { config } from 'boot/axios'
import Header from 'layouts/Header.vue'
import FeaturedPosts from 'components/property/FeaturedPosts.vue'

export default {
  name: 'PageProperties',
  components: {
    Header,
    FeaturedPosts
  },
  data () {
    return {
      title: 'Casa en venta',
      slide: null,
      fullscreen: false
    }
  },
  computed: {
    ...mapGetters('post', [
      'post'
    ]),
    pictureBasePath () {
      return config.pathPostPicture
    },
    postHeader () {
      return this.post && this.post.municipio ? this.post.municipio?.provincia?.cod + ',' + this.post.municipio?.title : ''
    },
    daysOnOpdomun () {
      return date.getDateDiff(new Date(), this.post.published_at)
    }
  },
  watch: {
    post: 'onPostChange'
  },
  methods: {
    ...mapActions('post', [
      'getPost'
    ]),
    date () {
      return date
    },
    onPostChange () {
      if (this.post.images) {
        this.slide = this.post.images[0].id
      }
    }
  },
  mounted () {
    this.getPost({ id: this.$route.params.id })
  },
  meta () {
    return {
      titleTemplate: title => `${this.title} - ${title}`
    }
  }
}
</script>
