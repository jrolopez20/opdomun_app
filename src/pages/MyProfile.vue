<template>
    <q-page>
        <Header :title="title" class="q-mb-md"/>
        <div class="q-px-sm q-pb-md full-width">
            <q-card flat bordered class="full-width">
                <q-tabs
                        v-model="tab"
                        dense
                        class="text-grey"
                        active-color="primary"
                        indicator-color="primary"
                        align="justify"
                        narrow-indicator
                >
                    <q-tab name="profile" icon="las la-user" label="Datos personales"/>
                    <q-tab name="subscription" icon="las la-shopping-cart" label="Mis anuncios de compra"/>
                    <q-tab name="security" icon="las la-shield-alt" label="Seguridad"/>
                </q-tabs>

                <q-separator/>

                <q-tab-panels
                        v-model="tab"
                        animated
                        swipeable
                        infinite
                        transition-prev="jump-up"
                        transition-next="jump-up"
                >
                    <q-tab-panel name="profile" class="q-pa-none">
                        <user-detail/>
                    </q-tab-panel>

                    <q-tab-panel name="security" class="q-pa-none">
                        <change-password/>
                    </q-tab-panel>

                    <q-tab-panel name="subscription" class="q-pa-none">
                        <Subscriptions/>
                    </q-tab-panel>
                </q-tab-panels>
            </q-card>
        </div>
    </q-page>
</template>

<script>
import Header from 'layouts/Header.vue'
import ChangePassword from '../components/user/ChangePassword'
import UserDetail from '../components/user/UserDetail'
import Subscriptions from '../components/subscriptions/Subscriptions'

export default {
  name: 'MyProfile',
  components: {
    Header,
    ChangePassword,
    UserDetail,
    Subscriptions
  },
  data () {
    return {
      title: 'Mi Opdomun',
      tab: 'profile',
      splitterModel: 20
    }
  },
  meta () {
    return {
      titleTemplate: title => `${this.title} - ${title}`
    }
  }
}
</script>

<style lang="sass">
@media (min-width: 600px)
    .service-description
        height: 150px
</style>
