<template>
    <div class="container">
        <h1>Latest purchases of {{ customer.firstName }} {{ customer.lastName }}</h1>
        <table class="table">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Quantity</th>
                </tr>
            </thead>
            <tbody>
            <tr v-for="(product, index) in customer.products" :key="index">
                <th scope="row">{{ (index+1) }}</th>
                <td>{{ product.name }}</td>
                <td>{{ product.quantity }}</td>
            </tr>
            </tbody>
        </table>
        <button class="btn btn-success">
            <router-link :to="{name: 'customers'}" style="color: white">Go back</router-link>
        </button>
    </div>
</template>

<script>
    import { findCustomer } from "../services/CustomerService";
    export default {
        created() {
            this.customer = findCustomer(this.$route.params.id);
        }
    }
</script>