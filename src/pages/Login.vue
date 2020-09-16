<template>
  <q-page class="flex flex-center">
    <Header :title="title"/>
    <q-tab-panels v-model="panel" animated class="q-mx-sm q-mt-md bg-transparent">
      <q-tab-panel name="signin" class="q-pa-none">
        <LoginForm @signup="changeActivePanel('signup')"/>
      </q-tab-panel>

      <q-tab-panel name="signup" class="q-pa-none">
        <SignUpForm @signin="changeActivePanel('signin')" />
      </q-tab-panel>
    </q-tab-panels>
  </q-page>
</template>

<script>
import Header from 'layouts/Header.vue'
import LoginForm from '../components/auth/LoginForm'
import SignUpForm from '../components/auth/SignUpForm'

export default {
  name: 'LoginPage',
  components: {
    Header,
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
