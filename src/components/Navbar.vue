<template>
    <nav class="navbar navbar-expand-lg navbar-light">
        <ul class="navbar-nav navigation">
            <li class="nav-item">
                <router-link :to="{name: 'customers'}" class="nav-link routes" active-class="active" exact> Customers </router-link>
            </li>
            <li class="nav-item">
                <router-link :to="{name: 'products'}" class="nav-link routes" active-class="active"> Products </router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
    }
</script>

<style scoped>
    @import "../Styles/Navbar.css";
</style>