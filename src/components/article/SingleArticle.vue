<template>
  <q-card>
    <q-img :src="article.picture" style="max-height: 400px;"/>

    <q-card-section class="q-pb-sm">
      <div class="col text-h6 ellipsis">
        {{ article.title }}
      </div>
      <div class="text-grey-8 text-body2 row no-wrap ">
        {{ article.user.fullname }}
        <span class="q-px-sm">|</span> <q-icon name="la la-calendar" size="xs"/> {{ date().formatDate(article.createdAt, 'DD/MM/YYYY') }}
      </div>
    </q-card-section>

    <q-card-section v-html="article.summary" />

    <q-card-actions align="right" class="q-mt-none">
        <q-btn flat :to="'articulo/' + article.id" color="primary" label="Leer más"/>
    </q-card-actions>
  </q-card>
</template>

<script>
import { date } from 'quasar'

export default {
  name: 'SingleArticle',
  props: ['article'],
  methods: {
    date () {
      return date
    }
  }
}
</script>
