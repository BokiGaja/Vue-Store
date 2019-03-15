<template>
    <div class="container">
        <h1>Latest purchases of {{ customer.firstName }} {{ customer.lastName }}</h1>
        <button class="btn btn-success">
            <router-link :to="{name: 'customers'}">Go back</router-link>
        </button>
    </div>
</template>

<script>
    import { findCustomer} from "../services/CustomerService";

    export default {
        data() {
            return {
                customer: {
                    firstName: '',
                    lastName: ''
                }
            }
        },
        created() {
            this.customer = findCustomer(this.$route.params.id);
        }
    }
</script>