<template>
  <q-page class="flex flex-block">
    <Header :title="title"/>
    <p>blog</p>
  </q-page>
</template>

<script>
import Header from 'layouts/Header.vue'

export default {
  name: 'PageBlog',
  components: {
    Header
  },
  data () {
    return {
      title: 'Blog'
    }
  },
  meta () {
    return {
      titleTemplate: title => `${this.title} - ${title}`
    }
  }
}
</script>
