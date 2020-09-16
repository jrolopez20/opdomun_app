<template>
    <q-page class="flex flex-block">
        <Header :title="title" class="q-mb-md"/>

        <q-card
                flat bordered
                class="q-pa-none q-my-md q-mx-lg full-width"
                style="height: min-content;"
        >
            <q-card-section class="q-pa-none">
                <q-splitter
                        v-model="splitterModel"
                >
                    <template v-slot:before>
                        <q-tabs
                                v-model="tab"
                                vertical
                                class="text-primary"
                        >
                            <q-tab name="profile" icon="person" label="Informacion" />
                            <q-tab name="security" icon="shield" label="Seguridad" />
                            <q-tab name="subscription" icon="alarm" label="Suscripciones" />
                        </q-tabs>
                    </template>

                    <template v-slot:after>
                        <q-tab-panels
                                v-model="tab"
                                animated
                                swipeable
                                vertical
                                transition-prev="jump-up"
                                transition-next="jump-up"
                        >
                            <q-tab-panel name="profile" class="q-pa-none">
                                <user-detail />
                            </q-tab-panel>

                            <q-tab-panel name="security" class="q-pa-none">
                                <change-password />
                            </q-tab-panel>

                            <q-tab-panel name="subscription">
                                <div class="text-h4 q-mb-md">Movies</div>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
                            </q-tab-panel>
                        </q-tab-panels>
                    </template>

                </q-splitter>
            </q-card-section>
        </q-card>
    </q-page>
</template>

<script>
import Header from 'layouts/Header.vue'
import ChangePassword from '../components/user/ChangePassword'
import UserDetail from '../components/user/UserDetail'

export default {
  name: 'MyProfile',
  components: {
    Header, ChangePassword, UserDetail
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
