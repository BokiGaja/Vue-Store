<template>
  <div id="app">
    <app-layout/>
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
  @import "./Styles/App.css";
</style>
