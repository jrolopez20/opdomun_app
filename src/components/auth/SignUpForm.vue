<template>
    <q-form ref="formSignUp" v-on:submit.prevent="onSubmit()">
        <q-card flat dark
                class="bg-transparent"
                style="max-width: 640px; min-width: 320px;"
        >
            <q-card-section>
                <div class="text-h6 text-center">
                    Regístrate!
                </div>
            </q-card-section>
            <q-card-section class="q-pa-none">
                <div class="row">
                    <div class="col-sm-6 col-12 q-pa-xs">
                        <q-input rounded outlined dense required dark
                                 v-model="user.fullname"
                                 :label="this.$t('common.labels.fullName')"
                                 :rules="[
                                        val => val && val.length > 0 || this.$t('common.errors.required'),
                                        val => val.length <= 50 || 'Please use maximum 50 characters'
                                     ]"
                        >
                            <template v-slot:prepend>
                                <q-icon name="las la-user"/>
                            </template>
                        </q-input>
                    </div>
                    <div class="col-sm-6 col-12 q-pa-xs">
                        <q-input rounded outlined dense required dark
                                 v-model="user.email"
                                 :label="this.$t('common.labels.email')"
                                 :rules="[
                                        val => val && val.length > 0 || this.$t('common.errors.required'),
                                        val => val.length <= 50 || 'Please use maximum 50 characters'
                                     ]"
                        >
                            <template v-slot:prepend>
                                <q-icon name="las la-envelope"/>
                            </template>
                        </q-input>
                    </div>
                    <div class="col-xs-12 col-md-6 q-pa-xs">
                        <q-input rounded outlined dense dark
                                 v-model="user.password"
                                 :type="isPwd ? 'password' : 'text'"
                                 :label="this.$t('common.labels.password')"
                                 required
                                 :rules="[
                                            val => !!val && val.length >= 6 || this.$t('common.errors.minCharLength', {value: 6}),
                                            val => !!val || this.$t('common.errors.required'),
                                         ]"
                        >
                            <template v-slot:append>
                                <q-icon
                                        :name="isPwd ? 'visibility_off' : 'visibility'"
                                        class="cursor-pointer"
                                        @click="isPwd = !isPwd"
                                />
                            </template>
                        </q-input>
                    </div>
                    <div class="col-xs-12 col-md-6 q-pa-xs">
                        <q-input rounded outlined dense dark
                                 v-model="user.repassword"
                                 :type="isPwd2 ? 'password' : 'text'"
                                 :label="this.$t('common.labels.repeatPassword')"
                                 :rules="[
                                            val => val === user.password || this.$t('common.errors.passwordMatch')
                                         ]"
                        >
                            <template v-slot:append>
                                <q-icon
                                        :name="isPwd2 ? 'visibility_off' : 'visibility'"
                                        class="cursor-pointer"
                                        @click="isPwd2 = !isPwd2"
                                />
                            </template>
                        </q-input>
                    </div>
                    <div class="col-xs-12 col-md-6 q-pa-xs">
                        <q-toggle
                                label="Acepto recibir notificaciones"
                                v-model="user.notificationsConsent"
                        />
                    </div>
                </div>
            </q-card-section>

            <q-card-actions class="q-ma-none q-gutter-y-sm" align="right">
                <q-btn no-caps unelevated rounded
                       :loading="loading"
                       @click="onSubmit"
                       label="Aceptar"
                       color="primary"
                       class="full-width"
                />
                <q-btn no-caps unelevated rounded
                       @click="signIn"
                       label="Ya poseo una cuenta"
                       class="full-width"
                />
            </q-card-actions>
        </q-card>
        <div class="text-center text-caption q-my-md text-white">Al registrarse usted está aceptando las <br/>
            <router-link to="/politicas-de-privacidad" class="text-primary" style="text-decoration: none">
                Politícas de privacidad
            </router-link> y
            <router-link to="/condiciones-de-uso" class="text-primary" style="text-decoration: none">
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
  name: 'SignUpForm',
  data () {
    return {
      isPwd: true,
      isPwd2: true,
      user: {
        notificationsConsent: true
      },
      loading: false
    }
  },
  methods: {
    ...mapActions('auth', [
      'signUp'
    ]),
    onSubmit () {
      this.$refs.formSignUp.validate().then(success => {
        if (success) {
          Loading.show()
          this.signUp(this.user).then((response) => {
            Loading.hide()
            this.$q.dialog({
              title: this.$t('common.labels.info'),
              message: response.data.message
            })
            this.$router.push('/')
          }).catch(() => {
            Loading.hide()
          })
        } else {
          Notification.showWarning('Por favor completar los campos correctamente')
        }
      })
    },
    signIn () {
      this.$emit('signin')
    }
  }
}
</script>
