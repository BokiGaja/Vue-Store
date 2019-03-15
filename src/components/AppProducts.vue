<template>
    <div class="container">
        <h1>Products</h1>
        <div class="active-cyan-3 active-cyan-4 mb-4">
            <input
                    class="form-control"
                    type="text"
                    placeholder="Search"
                    aria-label="Search"
                    v-model="searchName"
                    @keyup.enter="search">
        </div>
        <table class="table">
            <thead class="thead-dark">
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(product, index) in productList">
                <th scope="row">{{ productList.indexOf(product)+1 }}</th>
                <td>{{ product.name }}</td>
                <td>{{ product.price }}</td>
                <td>{{ product.quantity }}</td>
                <button class="btn btn-success" @click="addToLager(product)">+</button>
                <button class="btn btn-danger" @click="removeFromLager(product)">-</button>
                <button class="btn btn-warning">
                    <router-link :to="{name: 'product', params: {id: index+1}}">Buy</router-link>
                </button>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import products, { addQuantity, removeQuantity } from '../services/ProductService'

    export default {
        data() {
            return {
                productList: [...products],
                searchName: ''
            }
        },
        
        methods: {
            search() {
                let searchFails = 0;
                this.productList.forEach(product => {
                    if (product.name === this.searchName) {
                        this.productList = this.productList.filter(productCurr => productCurr === product);
                    } else {
                        searchFails++;
                    }
                });
                if (this.searchName === '') {
                    this.productList = [...products];
                    return;
                }
                if (searchFails === this.productList.length) {
                    alert(`We don't have ${this.searchName}`);
                    this.searchName = '';
                }
            },

            addToLager(product) {
                addQuantity(product)
            },

            removeFromLager(product) {
                removeQuantity(product)
            }
        }
    }
</script>