<template>
    <q-parallax :height="200" :speed="0.5">
        <template v-slot:media>
            <img src="images/header_background.jpg">
        </template>

        <h3 class="text-white text-left q-px-lg full-width">{{title}}</h3>
    </q-parallax>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="sass">
</style>
