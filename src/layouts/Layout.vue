<template>
    <div class="layout">
        <img alt="Vue logo" src="../assets/logo.png">
        <app-navbar/>
        <router-view/>
    </div>
</template>

<script>
    import Navbar from '../components/Navbar'
    export default {
        components: {
            appNavbar: Navbar
        }
    }
</script>

<style scoped>
    @import "../Styles/Layout.css";
</style>