<template>
    <q-card flat>
        <q-form ref="formPassword" @reset="onResetPasswordForm">
            <q-card-section>
                <div class="text-h6">Cambiar contraseña</div>
            </q-card-section>
            <q-card-section>
                <div class="row">
                    <div class="col-xs-12 col-md-6 q-pa-xs">
                        <q-input outlined dense rounded
                                 v-model="newpassword" :type="isPwd ? 'password' : 'text'"
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
                        <q-input outlined dense rounded
                                 v-model="repassword" :type="isPwd2 ? 'password' : 'text'"
                                 :label="this.$t('common.labels.repeatPassword')"
                                 :rules="[
                                            val => val === newpassword || this.$t('common.errors.passwordMatch')
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
                </div>
            </q-card-section>

            <q-separator inset />

            <q-card-actions align="right" class="q-py-md q-pr-md">
                <q-btn no-caps rounded
                       color="primary"
                       class="q-px-lg"
                       @click="setPassword">Cambiar contraseña</q-btn>
            </q-card-actions>
        </q-form>
    </q-card>
</template>

<script>
import { Loading } from 'quasar'
import { mapGetters, mapActions } from 'vuex'
import Notification from '../../services/notification.service'

export default {
  name: 'ChangePassword',

  data () {
    return {
      newpassword: '',
      repassword: '',
      isPwd: true,
      isPwd2: true
    }
  },
  computed: {
    ...mapGetters('auth', [
      'loggedUser'
    ])
  },
  methods: {
    ...mapActions('auth', [
      'changePassword'
    ]),
    setPassword () {
      // Check if the form is valid
      this.$refs.formPassword.validate().then(success => {
        if (success) {
          Loading.show()
          this.changePassword({ user: this.loggedUser, password: this.newpassword })
            .then(() => {
              Loading.hide()
              this.onResetPasswordForm()
              Notification.showSucces(this.$t('common.messages.saveSuccessfully'))
            })
            .catch(() => {
              Loading.hide()
            })
        } else {
          Notification.showWarning(this.$t('common.errors.incompleteForm'))
        }
      })
    },
    onResetPasswordForm () {
      this.newpassword = null
      this.repassword = null
    }
  }
}
</script>
