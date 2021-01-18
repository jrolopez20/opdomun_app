<template>
    <div>
        <div class="text-white full-width q-px-sm" style="z-index: 1;position: absolute;">
            <q-toolbar class="GPL__toolbar" style="height: 54px">
                <q-btn
                        flat dense round
                        @click="leftDrawerOpen = !leftDrawerOpen"
                        aria-label="Menu"
                        icon="menu"
                        class="q-mr-md"
                />
                <router-link to="/" style="text-decoration: none;">
                    <q-toolbar-title shrink class="row items-center no-wrap" to="/">
                        <img src="images/logo-icon-white.png"
                             style="width:40px;border:1px solid white;border-radius:50%;padding:1px 2px 2px 2px;"/>
                        <h5 class="text-white q-pl-sm">opdomun</h5>
                    </q-toolbar-title>
                </router-link>

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
                    <div v-if="isLoggedIn && loggedUser" class="absolute-bottom bg-transparent">
                        <q-avatar size="62px" class="q-mb-sm bg-primary">

                            <img v-if="loggedUser.picture" :src="loggedUser.picture">
                            <div class="text-h5">{{fullnameInitials}}</div>
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

                    <q-item v-if="!isLoggedIn" class="GPL__drawer-item" to="/login">
                        <q-item-section avatar>
                            <q-icon name="las la-sign-in-alt"/>
                        </q-item-section>
                        <q-item-section>
                            <q-item-label>Iniciar sesión</q-item-label>
                        </q-item-section>
                    </q-item>
                    <q-item v-else class="GPL__drawer-item cursor-pointer" >
                        <q-item-section avatar @click="onLogout">
                            <q-icon name="las la-sign-out-alt"/>
                        </q-item-section>
                        <q-item-section @click="onLogout">
                            <q-item-label>Cerrar sesión</q-item-label>
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
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Menu',
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
        { icon: 'las la-tag', text: 'Crear anuncio de compra', link: '/compro-casa/nuevo' }
      ]
    }
  },
  computed: {
    ...mapGetters('auth', [
      'isLoggedIn',
      'fullnameInitials',
      'loggedUser'
    ])
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
