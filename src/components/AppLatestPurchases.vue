<template>
    <div class="container">
        <h1>Latest purchases of {{ customer.firstName }} {{ customer.lastName }}</h1>

    </div>
</template>

<script>
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
            this.customer.firstName = this.$route.params.customer.firstName;
            this.customer.lastName = this.$route.params.customer.lastName;
        }
    }
</script>