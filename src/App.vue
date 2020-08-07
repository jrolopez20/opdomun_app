<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      title: 'Opdomun'
    }
  },
  meta () {
    return {
      title: this.title
    }
  }
}
</script>
