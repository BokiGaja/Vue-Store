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
    .navigation {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-content: center;
        border-radius: 50%;
        background-color: transparent !important;
        margin-bottom: 30px;
    }
    .routes {
        padding-top: 50px;
        padding-bottom: 5px;
        margin-left: 80px;
        margin-right: 80px;
        font-size: 20px;
        text-align: center;
    }
    .routes:hover {
        border-bottom: #ffc80c 4px solid;
    }
    .active {
        border-bottom: #ffc80c 4px solid;
    }
</style>