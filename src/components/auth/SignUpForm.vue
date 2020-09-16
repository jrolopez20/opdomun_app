<template>
    <q-form ref="formLogin" v-on:submit.prevent="onSubmit()">
        <q-card flat bordered
                style="max-width: 600px; padding: 20px; min-width: 320px;"
        >
            <q-card-section>
                <div class="text-h6 text-center">
                    Regístrate!
                </div>
            </q-card-section>
            <q-card-section class="q-pa-none">
                <div class="row">
                    <div class="col-sm-6 col-12 q-pa-xs">
                        <q-input outlined dense required
                                 v-model="user.numid"
                                 :label="this.$t('common.labels.numId')"
                                 :rules="[
                                        val => val && val.length > 0 || this.$t('common.errors.required'),
                                        val => val.length <= 11 || 'Please use maximum 11 characters'
                                     ]"
                        >
                            <template v-slot:prepend>
                                <q-icon name="las la-id-card"/>
                            </template>
                        </q-input>
                    </div>
                    <div class="col-sm-6 col-12 q-pa-xs">
                        <q-input outlined dense required
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
                        <q-input outlined dense required
                                 :readonly="isEditMode"
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
                    <div class="col-sm-6 col-12 q-pa-xs">
                        <q-input outlined dense required
                                 v-model="user.telephone"
                                 :label="this.$t('common.labels.phone')"
                                 :rules="[
                                        val => val && val.length > 0 || this.$t('common.errors.required'),
                                        val => val.length <= 30 || 'Please use maximum 30 characters'
                                     ]"
                        >
                            <template v-slot:prepend>
                                <q-icon name="las la-phone"/>
                            </template>
                        </q-input>
                    </div>
                    <div class="col-xs-12 col-md-6 q-pa-xs" v-if="!isEditMode">
                        <q-input outlined dense v-model="user.password" :type="isPwd ? 'password' : 'text'"
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
                    <div class="col-xs-12 col-md-6 q-pa-xs" v-if="!isEditMode">
                        <q-input outlined dense v-model="user.repassword" :type="isPwd2 ? 'password' : 'text'"
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
        <div class="text-center text-caption q-my-md">Al registrarse usted está aceptando los <br/>
            <router-link to="/terms" class="text-primary" style="text-decoration: none">Términos y
                Condiciones de uso
            </router-link>
        </div>
    </q-form>
</template>

<script>
export default {
  name: 'SignUpForm',
  data () {
    return {
      isEditMode: false,
      isPwd: true,
      isPwd2: true,
      user: {},
      loading: false
    }
  },
  methods: {
    onSubmit () {
    },
    signIn () {
      this.$emit('signin')
    }
  }
}
</script>
