<template>
  <q-layout view="lHh Lpr fff" class="background">
    <div class="text-white full-width q-px-sm" style="z-index: 1;position: absolute;">
      <q-toolbar class="GPL__toolbar" style="height: 54px">
        <router-link to="/" style="text-decoration: none;">
        <q-toolbar-title shrink class="row items-center no-wrap" to="/">
          <img src="images/logo-icon-white.png" style="width:40px;border:1px solid white;border-radius:50%;padding:1px 2px 2px 2px;"/>
          <h5 class="text-white q-pl-sm">opdomun</h5>
        </q-toolbar-title>
        </router-link>
        <q-btn
                flat
                dense
                round
                @click="leftDrawerOpen = !leftDrawerOpen"
                aria-label="Menu"
                icon="menu"
                class="q-ml-sm"
        />

        <q-space/>

        <q-tabs v-if="$q.screen.gt.xs" style="height: 54px">
          <q-route-tab no-caps
                       v-for="item in links1"
                       :key="item.text"
                       :to="item.link"
                       :label="item.textAbreviate || item.text"
          />
          <q-btn stretch flat no-icon
                 icon="las la-user"
                 v-if="isLoggedIn">
            <q-menu>
              <q-list>
                <q-item clickable to="/profile">
                  <q-item-section>Mi Opdomun</q-item-section>
                </q-item>

                <q-item clickable @click="onLogout">
                  <q-item-section>Cerrar sesión</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
          <q-route-tab no-caps label="Entrar" to="/login" v-if="!isLoggedIn"/>
        </q-tabs>
      </q-toolbar>
    </div>

    <q-drawer
            v-model="leftDrawerOpen"
            elevated
            behavior="mobile"
            @click="leftDrawerOpen = false"
    >
        <q-scroll-area class="fit">
            <q-img src="images/header_background.jpg" style="height: 150px">
                <div v-if="isLoggedIn" class="absolute-bottom bg-transparent">
                    <q-avatar size="62px" class="q-mb-sm bg-primary">
                        <img v-if="loggedUser.picture" :src="loggedUser.picture">
                        <div v-else class="text-h5">{{userInitials}}</div>
                    </q-avatar>
                    <div class="text-weight-bold">{{loggedUser.fullname}}</div>
                    <div class="text-grey-5">{{loggedUser.email}}</div>
                </div>
                <div v-else class="fullscreen flex flex-center bg-transparent">
                    <img
                            src="images/logo-icon-white.png"
                            style="width:80px;border:1px solid white;border-radius:50%;padding:1px 2px 2px 2px;"
                    />
                </div>
            </q-img>
            <q-list padding>
                <q-item v-for="item in links1" :key="item.text" clickable class="GPL__drawer-item" :to="item.link">
                    <q-item-section avatar>
                        <q-icon :name="item.icon"/>
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>{{ item.text }}</q-item-label>
                    </q-item-section>
                </q-item>

                <q-separator class="q-my-md"/>

                <q-item v-for="item in links2" :key="item.text" clickable class="GPL__drawer-item" :to="item.link">
                    <q-item-section avatar>
                        <q-icon :name="item.icon"/>
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>{{ item.text }}</q-item-label>
                    </q-item-section>
                </q-item>

                <q-separator class="q-my-md"/>

                <a href="https://backoffice.opdomun.com" target="_blank" style="text-decoration: none;">
                    <q-item clickable class="GPL__drawer-item">
                        <q-item-section avatar>
                            <q-icon name="las la-user-shield"/>
                        </q-item-section>
                        <q-item-section>
                            <q-item-label>Area de agentes</q-item-label>
                        </q-item-section>
                    </q-item>
                </a>

            </q-list>
        </q-scroll-area>
    </q-drawer>

    <q-page-container class="GPL__page-container">
      <router-view/>
    </q-page-container>

    <Footer></Footer>

    <q-page-scroller position="bottom-right" :scroll-offset="154" :offset="[18, 18]">
      <q-btn round icon="keyboard_arrow_up" color="primary"/>
    </q-page-scroller>
  </q-layout>
</template>

<script>
import Footer from './Footer'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'MainLayout',
  components: {
    Footer
  },
  data () {
    return {
      leftDrawerOpen: false,
      showLoginDialog: false,
      links1: [
        { icon: 'las la-shopping-bag', text: 'Casas en venta', link: '/casas-en-venta' },
        { icon: 'las la-shopping-cart', text: 'Compro casa', link: '/compro-casa' },
        { icon: 'las la-building', text: 'Oficinas Opdomun', link: '/oficinas' },
        { icon: 'las la-book', text: 'Blog', link: '/blog' },
        { icon: 'las la-users', text: 'Quienes somos', link: '/quienes-somos' },
        { icon: 'las la-question-circle', text: 'Preguntas frecuentes', textAbreviate: 'FAQ', link: '/faq' }
      ],
      links2: [
        { icon: 'las la-calculator', text: 'Calculadora de impuestos', link: '/calcular-impuesto' },
        { icon: 'las la-tag', text: 'Crear anuncio de compra', link: '/nuevo-anuncio-de-compra' },
        { icon: 'las la-sign-in-alt', text: 'Iniciar sesión', link: '/login' }
      ]
    }
  },
  computed: {
    ...mapGetters('auth', [
      'isLoggedIn',
      'loggedUser'
    ]),
    userInitials () {
      let str = ''
      if (this.loggedUser) {
        const arr = this.loggedUser.fullname.split(' ')
        if (arr.length > 1) {
          str = this.loggedUser.fullname[0] + '' + arr[1][0]
        } else {
          str = this.loggedUser.fullname[0]
        }
      }
      return str
    }
  },
  methods: {
    ...mapActions('auth', [
      'logout'
    ]),
    onLogout () {
      this.$q.dialog({
        title: this.$t('common.labels.confirm'),
        message: this.$t('auth.logout.logout_confirmation'),
        cancel: true
      }).onOk(() => {
        this.logout()
      })
    }
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
