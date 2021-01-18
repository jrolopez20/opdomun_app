<template>
    <q-layout view="lHh Lpr fff" class="background">

        <Menu/>

        <q-page-container class="GPL__page-container">
            <router-view/>
        </q-page-container>

        <Footer/>

        <q-page-scroller position="bottom-right" :scroll-offset="154" :offset="[18, 18]">
            <q-btn round icon="keyboard_arrow_up" color="primary"/>
        </q-page-scroller>
    </q-layout>
</template>

<script>
import Footer from './Footer'
import Menu from './Menu'

export default {
  name: 'MainLayout',
  components: {
    Footer,
    Menu
  }
}
</script>

<style lang="sass">
.GPL
  &__toolbar
    height: 64px
  &__page-container
    padding-top: 0px !important
  &__drawer-item
    line-height: 24px
    border-radius: 0 24px 24px 0
    margin-right: 12px
    .q-item__section--avatar
      padding-left: 12px
      .q-icon
        color: #5f6368
    .q-item__label:not(.q-item__label--caption)
      color: #3c4043
      letter-spacing: .01785714em
      font-size: .875rem
      font-weight: 500
      line-height: 1.25rem
    .q-item__label
      color: #3c4043
  &__side-btn
    &__label
      font-size: 12px
      line-height: 24px
      letter-spacing: .01785714em
      font-weight: 500
</style>
