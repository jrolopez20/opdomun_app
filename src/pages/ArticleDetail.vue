<template>
  <q-page class="flex flex-block">
    <Header :title="title"/>
    <div class="row wrap full-width q-px-sm">
      <div class="col-sm-8 col-12 q-pa-sm">
        <q-card>
          <q-img :src="pictureBasePath + article.picture" style="max-height: 400px;"/>

          <q-card-section class="q-pb-sm">
            <q-btn
                    fab
                    color="primary"
                    icon="lab la-facebook"
                    class="absolute"
                    style="top: 0; right: 12px; transform: translateY(-50%);"
                    @click="shareWithFacebook"
            >
              <q-tooltip>
                Compartir en facebook
              </q-tooltip>
            </q-btn>
            <div class="col text-h6 ellipsis">
              {{ article.title }}
            </div>
            <div class="text-grey-8 text-body2 full-width">
              {{ article.user ? article.user.fullname : ''}}
              <span class="q-px-sm">|</span> <q-icon name="la la-calendar" size="xs"/> {{ date().formatDate(article.created_at, 'DD/MM/YYYY') }}
            </div>
          </q-card-section>

          <q-card-section v-html="article.text" />

          <q-card-actions align="right" class="q-mt-none">
            <q-btn flat @click="$router.back()"  color="primary" label="Regresar"/>
          </q-card-actions>
        </q-card>
      </div>
      <div class="col-sm-4 col-12 q-pa-sm">
        <FeaturedPosts/>
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
  name: 'ArticleDetail',
  components: {
    Header,
    FeaturedPosts
  },
  data () {
    return {
      title: 'Detalles del artículo'
    }
  },
  computed: {
    ...mapGetters('article', [
      'article'
    ]),
    pictureBasePath () {
      return config.pathArticlePicture
    }
  },
  methods: {
    ...mapActions('article', [
      'getArticle'
    ]),
    date () {
      return date
    },
    shareWithFacebook () {
      const url = window.document.URL
      window.open('http://www.facebook.com/sharer.php?u=' + url, 'blank')
    }
  },
  meta () {
    return {
      titleTemplate: title => `${this.title} - ${title}`
    }
  },
  mounted () {
    this.getArticle({ id: this.$route.params.id })
  }
}
</script>
