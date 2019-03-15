<template>
    <div class="container">
        <form action="" @submit.prevent="addCustomer">
            <h4>Add a new customer</h4>
            <input type="text" v-model="customer.firstName" placeholder="First name" required>
            <br>
            <input type="text" v-model="customer.lastName" placeholder="Last name" required>
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
                    firstName: '',
                    lastName: '',
                    products: []
                }
            }
        },

        methods: {
            clearCustomer() {
                this.customer.firstName = '';
                this.customer.lastName = ''
            },

            addCustomer() {
                this.$emit('customerAdded', {...this.customer});
                this.clearCustomer();
            }
        }
    }
</script>