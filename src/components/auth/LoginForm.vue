<template>
    <q-form ref="formLogin" v-on:submit.prevent="onSubmit()">
        <q-card flat dark
                class="bg-transparent"
                style="max-width: 380px; min-width: 320px;"
        >
            <q-card-section>
                <div class="text-h6 text-center">
                    Iniciar sesión
                </div>
            </q-card-section>
            <q-card-section class="q-gutter-y-sm q-pa-none">
                <q-input outlined required dense rounded dark
                         v-model.trim="user.email"
                         placeholder="Email"
                         :rules="[
                      val => !!val || this.$t('common.errors.required'),
                      val => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val) || 'Formato inválido'
                    ]"
                >
                    <template v-slot:prepend>
                        <q-icon name="las la-user"/>
                    </template>
                </q-input>
                <q-input outlined required dense rounded dark
                         v-model="user.password"
                         type="password"
                         placeholder="Contraseña"
                         @keyup.enter="onSubmit"
                         :rules="[val => !!val || this.$t('common.errors.required')]"
                >
                    <template v-slot:prepend>
                        <q-icon name="las la-unlock-alt"/>
                    </template>
                </q-input>

                <q-toggle v-model="user.remember" label="Recordarme"/>
            </q-card-section>

            <q-card-actions class="q-ma-none q-gutter-y-sm" align="center">
                <q-btn no-caps unelevated rounded
                       :loading="loading"
                       @click="onSubmit"
                       label="Entrar"
                       color="primary"
                       class="full-width"
                />
<!--                <q-btn no-caps flat rounded-->
<!--                       to="/password-forgot"-->
<!--                       label="Olvidé la contraseña"-->
<!--                       class="full-width"-->
<!--                />-->
                <div>
                    ¿No tienes aún una cuenta?
                    <q-btn no-caps flat rounded class="q-px-sm"
                           @click="signUp"
                           label="Regístrarte!"/>
                </div>
            </q-card-actions>
        </q-card>
        <div class="text-center text-caption q-my-md text-white">Al loguearse usted está aceptando los <br/>
            <router-link to="/condiciones-de-uso" class="text-primary" style="text-decoration: none">Términos y
                Condiciones de uso
            </router-link>
        </div>
    </q-form>
</template>

<script>
import { Loading } from 'quasar'
import { mapActions } from 'vuex'
import Notification from '../../services/notification.service'

export default {
  name: 'LoginForm',
  data () {
    return {
      user: {
        email: '',
        password: '',
        remember: false
      },
      loading: false
    }
  },
  methods: {
    ...mapActions('auth', [
      'login'
    ]),
    onSubmit () {
      this.$refs.formLogin.validate().then(success => {
        if (success) {
          Loading.show()
          this.login(this.user).then(() => {
            Loading.hide()
            this.$router.push('/')
          }).catch(() => {
            Loading.hide()
          })
        } else {
          Notification.showWarning('Por favor completar los campos correctamente')
        }
      })
    },
    signUp () {
      this.$emit('signup')
    }
  }
}
</script>
