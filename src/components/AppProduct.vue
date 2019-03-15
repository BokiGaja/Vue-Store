<template>
    <div class="container">
        <h1>{{ product.name }}</h1>
        <h2>Price: {{ product.price }}$</h2>
        <h2>On lager: {{ product.quantity }}</h2>
        <select class="form-control"  style="width: 300px; margin: 10px auto;" v-model="buyer">
            <option v-for="(customer, index) in customersList" :key="index">{{ customer.firstName }} {{ customer.lastName}}</option>
        </select>
        <button class="btn btn-success" @click="confirmPurchase">Confirm</button>
        <button class="btn btn-danger">
            <router-link :to="{name: 'products'}" style="color: white">Cancel</router-link>
        </button>
    </div>
</template>

<script>
    import { findProduct, removeQuantity } from "../services/ProductService";
    import customers, { addProduct } from '../services/CustomerService'
    export default {
        data() {
            return {
                product: {
                    name: '',
                    price: '',
                    quantity: 0,
                    buyer: ''
                },
                customersList: [...customers],
                buyer: ''
            }
        },

        created() {
            this.product = findProduct(this.$route.params.id)
        },

        methods: {
            confirmPurchase() {
                if (this.product.quantity > 0) {
                    if (this.buyer === '') {
                        alert(`Please select customer`)
                    } else {
                        let product = {...this.product};
                        product.quantity = 1;
                        addProduct(this.buyer, product);
                        removeQuantity(this.product);
                    }
                } else {
                    alert(`We dont have any ${this.product.name}'s left`)
                }
            }
        }
    }
</script>