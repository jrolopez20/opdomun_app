<template>
  <q-page class="">
      <Header>
          {{postHeader}}
          <div class="text-body1">{{ post.address.localidad.title }}, {{ post.address.description }}</div>
      </Header>
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
                              :img-src="image.url"
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
                  <div class="text-h5 q-px-sm text-weight-medium">{{ postHeader }}</div>
                  <div class="text-body1 q-px-sm">
                      {{ post.address.localidad.title }}, {{ post.address.description }}
                  </div>

                  <div class="row q-py-md q-px-sm">
                      <div class="col-6 text-h6">{{ post.opdo }} Op</div>
                      <div class="col-6 text-h6">{{ post.price | toCurrency }}</div>
                  </div>

                  <div class="row">
                      <div class="col-sm-6 col-12 q-px-sm">
                          <div class="row">
                              <div class="col">
                                  <q-icon name="las la-bed" size="xs"/>
                                  Habitaciones
                              </div>
                              <div class="col-auto text-weight-medium">{{ post.bedrooms }}</div>
                          </div>
                          <q-separator class="q-my-sm"/>
                      </div>
                      <div class="col-sm-6 col-12 q-px-sm">
                          <div class="row">
                              <div class="col">
                                  <q-icon name="las la-bath" size="xs"/>
                                  Baños
                              </div>
                              <div class="col-auto text-weight-medium">{{ post.bathrooms }}</div>
                          </div>
                          <q-separator class="q-my-sm"/>
                      </div>
                      <div class="col-sm-6 col-12 q-px-sm">
                          <div class="row">
                              <div class="col">
                                  <q-icon name="las la-ruler-combined" size="xs"/>
                                  Área
                              </div>
                              <div class="col-auto text-weight-medium">{{ post.area }} m²</div>
                          </div>
                          <q-separator class="q-my-sm"/>
                      </div>
                      <div class="col-sm-6 col-12 q-px-sm">
                          <div class="row">
                              <div class="col">
                                  <q-icon name="las la-calendar" size="xs"/>
                                  Año de construcción
                              </div>
                              <div class="col-auto text-right text-weight-medium">{{ post.builtYear }}</div>
                          </div>
                          <q-separator class="q-my-sm"/>
                      </div>
                      <div class="col-sm-6 col-12 q-px-sm">
                          <div class="row">
                              <div class="col">
                                  <q-icon name="las la-house-damage" size="xs"/>
                                  Estado
                              </div>
                              <div class="col-auto text-weight-medium">{{ post.buildStatus }}</div>
                          </div>
                          <q-separator class="q-my-sm"/>
                      </div>
                      <div class="col-sm-6 col-12 q-px-sm">
                          <div class="row">
                              <div class="col">
                                  <q-icon name="las la-building" size="xs"/>
                                  Tipo de vivienda
                              </div>
                              <div class="col-auto text-right text-weight-medium">{{ post.homeType ? post.homeType.title
                                  : '' }}
                              </div>
                          </div>
                          <q-separator class="q-my-sm"/>
                      </div>
                      <div class="col-12 q-px-sm">
                          <div class="q-px-sm">
                              <q-icon name="las la-door-open" size="sm"/>
                              Otros espacios:
                          </div>
                          <q-chip square v-for="place in post.postPlaces" :key="place.id">
                              {{ place.title }}
                          </q-chip>
                      </div>
                      <div class="col-12 q-px-sm text-center">
                          <q-separator class="q-my-md"/>
                          <q-btn flat rounded no-caps
                                 type="a"
                                 :href="apiURL + `posts/${post.id}/report`"
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 label="Ver informe técnico"
                                 color="primary"
                                 class="q-px-md"
                          />
                      </div>

                  </div>
              </section>
          </div>

          <div class="row bg-white">
              <div class="col-sm-8 q-pa-sm">
                  <div class="text-h6 q-py-lg row">
                      <div class="col-auto text-weight-medium">
                          Descripción
                      </div>
                      <div class="col title-line-separator">
                      </div>
                  </div>
                  <p class="q-my-none">{{ post.summary }}</p>

                  <div class="text-h6 q-py-lg row">
                      <div class="col-auto text-weight-medium">
                          Propietario
                      </div>
                      <div class="col title-line-separator"></div>
                  </div>
                  <div class="row">
                      <div class="col">
                          Nombre
                      </div>
                      <div class="col-auto text-right text-weight-medium">{{ post.owner.fullname }}</div>
                  </div>
                  <q-separator class="q-my-sm"/>
                  <div class="row">
                      <div class="col">
                          Email
                      </div>
                      <div class="col-auto text-right text-weight-medium">{{ post.owner.email }}</div>
                  </div>
                  <q-separator class="q-my-sm"/>
                  <div class="row">
                      <div class="col">
                          Teléfono
                      </div>
                      <div class="col-auto text-right text-weight-medium">{{ post.owner.telephone }}</div>
                  </div>
                  <q-separator class="q-my-sm"/>

                  <div class="text-h6 q-py-lg row">
                      <div class="col-auto text-weight-medium">
                          Servicio
                      </div>
                      <div class="col title-line-separator"></div>
                  </div>
                  <div class="row">
                      <div class="col">
                          Tipo de anuncio
                      </div>
                      <div class="col-auto text-right text-weight-medium">{{ post.plan.type }}</div>
                  </div>
                  <q-separator class="q-my-sm"/>
                  <div class="row">
                      <div class="col">
                          Días en Opdomun
                      </div>
                      <div class="col-auto text-right text-weight-medium">{{ daysOnOpdomun }} días</div>
                  </div>
                  <q-separator class="q-my-sm"/>
                  <div class="row">
                      <div class="col">
                          Cantidad de visitas
                      </div>
                      <div class="col-auto text-right text-weight-medium">
                          {{ post.postVisit.total }}
                      </div>
                  </div>
                  <q-separator class="q-my-sm"/>
                  <div class="row">
                      <div class="col">
                          Última visita
                      </div>
                      <div class="col-auto text-right text-weight-medium">
                          {{ date().formatDate(post.postVisit.lastVisit, 'ddd, DD MMMM YYYY') }}
                      </div>
                  </div>
                  <q-separator class="q-my-sm"/>
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
import Header from 'layouts/Header.vue'
import FeaturedPosts from 'components/property/FeaturedPosts.vue'

export default {
  name: 'PropertyDetail',
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
    postHeader () {
      return this.post.id
        ? this.post.address.localidad?.municipio?.provincia?.cod + ', ' + this.post.address.localidad.municipio?.title
        : ''
    },
    daysOnOpdomun () {
      return date.getDateDiff(new Date(), this.post.publishedAt)
    },
    apiURL () {
      return `${process.env.API}/api/`
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
      if (this.post.images && this.post.images.length) {
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
