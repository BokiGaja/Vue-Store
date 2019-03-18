<template>
    <div class="container">
        <h1>Customers</h1>
        <app-new-customer @customerAdded="addNewCustomer"></app-new-customer>
        <table class="table">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">First name</th>
                    <th scope="col">Last name</th>
                    <th scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(customer, index) in customersList" :key="index">
                    <td>{{ customer.id }}</td>
                    <td>{{ customer.firstName }}</td>
                    <td>{{ customer.lastName }}</td>
                    <td>{{ customer.email }}</td>
                    <button class="btn btn-danger" @click="removeCustomer(index)">Remove</button>
                    <button class="btn btn-info">
                        <router-link :to="{name: 'latestPurchases', params: {id: customer.id}}" style="color: white">To customer</router-link>
                    </button>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import customers, { addCustomer } from '../services/CustomerService';
    import NewCustomer from './AppNewCustomer';
    export default {
        components: {
            appNewCustomer: NewCustomer
        },

        data() {
            return {
                customersList: [...customers]
            }
        },

        methods: {
            removeCustomer(index) {
                this.customersList.splice(index,1);
            },

            addNewCustomer(customer) {
                addCustomer(customer);
                this.customersList = [...customers];
            }
        }
    }
</script>