<template>
    <q-parallax :height="200" :speed="0.5">
        <template v-slot:media>
            <img src="images/header_background.jpg">
        </template>

        <div class="row items-end full-height full-width q-px-lg q-mb-xl text-white">
            <div class="col">
                <div class="text-h4 text-white text-left full-width">
                    <slot></slot>
                </div>
            </div>
        </div>
    </q-parallax>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
    }
  }
}
</script>

<style lang="sass">
</style>
