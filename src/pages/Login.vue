<template>
  <q-page class="flex flex-center">
    <div class="q-pt-lg">
        <div class="full-width text-center q-mt-xl">
            <img src="images/logo-icon-white.png"
                    style="width:85px;border:1px solid white;border-radius:50%;padding:1px 2px 2px 2px;" />
        </div>

      <q-tab-panels v-model="panel" animated class="q-mx-sm bg-transparent">
        <q-tab-panel name="signin" class="q-pa-none">
          <LoginForm @signup="changeActivePanel('signup')"/>
        </q-tab-panel>

        <q-tab-panel name="signup" class="q-pa-none">
          <SignUpForm @signin="changeActivePanel('signin')" />
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </q-page>
</template>

<script>
import LoginForm from '../components/auth/LoginForm'
import SignUpForm from '../components/auth/SignUpForm'

export default {
  name: 'LoginPage',
  components: {
    LoginForm,
    SignUpForm
  },
  data () {
    return {
      title: 'Iniciar sesión',
      panel: 'signin'
    }
  },
  methods: {
    changeActivePanel (panel) {
      this.panel = panel
      this.title = this.panel === 'signin' ? 'Iniciar sesión' : 'Regristrarme'
    }
  },
  meta () {
    return {
      titleTemplate: title => `${this.title} - ${title}`
    }
  },
  mounted () {
  }
}
</script>
