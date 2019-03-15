let customers = [
        {firstName: 'John', lastName: 'Snow'},
        {firstName: 'Rob', lastName: 'Stark'},
        {firstName: 'Daenerys', lastName: 'Targaryen'},
        {firstName: 'Tirion', lastName: 'Lanister'}
        ];

export const addCustomer = (customer) => {
    customers.push(customer)
}

export default customers;

