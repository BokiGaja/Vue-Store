<template>
    <div class="layout">
        <img alt="Vue logo" src="../assets/logo.png">
        <app-navbar></app-navbar>
        <router-view></router-view>
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
    .layout {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .layout ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: row;
    }

    .layout li {
        margin: 0 15px;
    }
</style>