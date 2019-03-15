<template>
    <div class="container">
        <h1>Products</h1>
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
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import products from '../services/ProductService'

    export default {
        data() {
            return {
                productList: [...products]
            }
        }
    }
</script>