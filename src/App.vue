<template>
  <div id="app">
    <v-header></v-header>
    <div class="tab">
      I am tab
    </div>
    <div class="content">
      I am content
    </div>
  </div>
</template>

<script>
  import vHeader from './components/header'

  export default {
    name: 'App',
    components: {
      vHeader
    }
  }
</script>

<style lang="stylus">
</style>
