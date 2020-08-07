<template>
  <q-layout view="lHh Lpr fff" class="bg-grey-1">
    <q-header elevated dark class="bg-primary text-white" height-hint="54">
      <q-toolbar class="GPL__toolbar" style="height: 54px">
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"
          class="q-mx-md"
        />

        <q-toolbar-title shrink class="row items-center no-wrap">
          <router-link to="/" style="text-decoration: none;">
            <h5 class="text-white">opdomun</h5>
<!--            <img src="images/logo_dark.png" style="max-width: 170px" />-->
          </router-link>
        </q-toolbar-title>

        <q-space />

        <q-tabs v-if="$q.screen.gt.xs" style="height: 54px">
          <q-route-tab  v-for="item in links1"
                        :key="item.text"
                        :to="item.link"
                        :label="item.textAbreviate || item.text"
          />
        </q-tabs>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      behavior="mobile"
      @click="leftDrawerOpen = false"
    >
      <q-scroll-area class="fit">
        <q-toolbar class="GPL__toolbar">
          <q-toolbar-title class="row items-center text-grey-8">
            <router-link to="/">
              <img src="images/logo_dark.png" style="max-width: 170px" />
            </router-link>
          </q-toolbar-title>
        </q-toolbar>

        <q-list padding>
          <q-item v-for="item in links1" :key="item.text" clickable class="GPL__drawer-item" :to="item.link">
            <q-item-section avatar>
              <q-icon :name="item.icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ item.text }}</q-item-label>
            </q-item-section>
          </q-item>

          <q-separator class="q-my-md" />

          <q-item v-for="link in links2" :key="link.text" clickable class="GPL__drawer-item">
            <q-item-section avatar>
              <q-icon :name="link.icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ link.text }}</q-item-label>
            </q-item-section>
          </q-item>

          <q-separator class="q-my-md" />

          <q-item v-for="link in links3" :key="link.text" clickable class="GPL__drawer-item">
            <q-item-section avatar>
              <q-icon :name="link.icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ link.text }}</q-item-label>
            </q-item-section>
          </q-item>

        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container class="GPL__page-container">
      <router-view />
    </q-page-container>

    <Footer></Footer>

    <q-page-scroller position="bottom-right" :scroll-offset="154" :offset="[18, 18]">
      <q-btn round icon="keyboard_arrow_up" color="primary" />
    </q-page-scroller>
  </q-layout>
</template>

<script>
import Footer from './Footer'
export default {
  name: 'MainLayout',
  components: {
    Footer
  },
  data () {
    return {
      leftDrawerOpen: false,
      links1: [
        { icon: 'home', text: 'Casas en venta', link: '/casas-en-venta' },
        { icon: 'people', text: 'Oficinas Opdomun', link: '/oficinas' },
        { icon: 'photo_album', text: 'Blog', link: '/blog' },
        { icon: 'assistant', text: 'Quienes somos', link: '/quienes-somos' },
        { icon: 'help', text: 'Preguntas frecuentes', textAbreviate: 'FAQ', link: '/preguntas-frecuentes' }
      ],
      links2: [
        { icon: 'stars', text: 'Publicar casa', link: '/suscribirse' },
        { icon: 'mail', text: 'Suscríbete', link: '/suscribirse' }
      ],
      links3: [
        { icon: 'security', text: 'Area de agentes' }
      ]
    }
  }
}
</script>

<style lang="sass">
.GPL
  &__toolbar
    height: 64px
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
      font-weight: 540
      line-height: 1.25rem
  &__side-btn
    &__label
      font-size: 12px
      line-height: 24px
      letter-spacing: .01785714em
      font-weight: 540
</style>
