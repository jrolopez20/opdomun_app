<template>
    <q-card flat>
        <q-form ref="formUser" @submit="onSubmit">
            <q-card-section>
                <div class="text-h6">Datos personales</div>
            </q-card-section>
            <q-card-section>
                <div class="row">
                    <div class="col-sm-6 col-12 q-pa-xs">
                        <q-input outlined dense required rounded disable
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
                        <q-input outlined dense required rounded
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
                    <div class="col-sm-6 col-12 q-pa-xs q-mb-md">
                        <PhoneNumberInput
                                :telephone="user.telephone"
                                @update="setTelephone"
                        />
                    </div>
                    <div class="col-sm-6 col-12 q-pa-xs">
                        <q-input outlined dense rounded
                                 v-model="user.numid"
                                 :label="this.$t('common.labels.numId')"
                        >
                            <template v-slot:prepend>
                                <q-icon name="las la-id-card"/>
                            </template>
                        </q-input>
                    </div>
                </div>
            </q-card-section>

            <q-separator inset />

            <q-card-actions align="right" class="q-py-md q-pr-md">
                <q-btn no-caps
                       rounded
                       color="primary"
                       class="q-px-lg"
                       :label="this.$t('common.labels.save')"
                       @click="onSubmit"/>
            </q-card-actions>
        </q-form>
    </q-card>
</template>

<script>
import { Loading } from 'quasar'
import { mapGetters, mapActions } from 'vuex'
import Notification from '../../services/notification.service'
import PhoneNumberInput from '../../components/common/PhoneNumberInput'

export default {
  name: 'UserDetail',
  components: {
    PhoneNumberInput
  },
  data () {
    return {
      user: {},
      loading: false
    }
  },
  computed: {
    ...mapGetters('auth', [
      'loggedUser'
    ])
  },
  methods: {
    ...mapActions('auth', [
      'setUserDetail'
    ]),
    onSubmit () {
      this.$refs.formUser.validate().then(success => {
        if (success) {
          Loading.show()
          this.setUserDetail(this.user)
            .then(response => {
              Loading.hide()
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
    setTelephone (telephone) {
      this.user.telephone = telephone
    }
  },
  mounted () {
    this.user = { ...this.loggedUser }
  }
}
</script>
