<template>
    <div class="container">
        <form @submit.prevent="addCustomer">
            <h4>Add a new customer</h4>
            <input type="number" v-model="customer.id" placeholder="id" required>
            <br>
            <input type="text" v-model="customer.firstName" placeholder="First name" required>
            <br>
            <input type="text" v-model="customer.lastName" placeholder="Last name" required>
            <br>
            <input type="text" v-model="customer.email" placeholder="Email" required>
            <br>
            <button class="btn btn-success" type="submit" style="margin: 5px;">Add customer</button>
        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                customer: {
                    id: null,
                    firstName: '',
                    lastName: '',
                    email: '',
                    products: []
                }
            }
        },

        methods: {
            clearCustomer() {
                this.customer.id = null;
                this.customer.firstName = '';
                this.customer.lastName = '';
                this.customer.email = '';
            },

            addCustomer() {
                this.$emit('customerAdded', {...this.customer});
                this.clearCustomer();
            }
        }
    }
</script>