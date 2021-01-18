<template>
  <q-layout view="lHh Lpr fff" class="background">

    <Menu/>

    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>
import Menu from './Menu'

export default {
  name: 'AuthLayout',
  components: {
    Menu
  }
}
</script>

<style lang="sass" scoped>
  .background
    background: linear-gradient(rgba(25, 24, 29, 0.4), rgba(25, 24, 29, 0.7)), url(/images/header_background.jpg)
    background-position: center center !important
    background-size: cover !important
    background-repeat: no-repeat !important
</style>
