<template>
  <div id="app">
    <app-layout></app-layout>
  </div>
</template>

<script>
import Layout from './layouts/Layout'

export default {
  name: 'app',
  components: {
    appLayout: Layout
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
