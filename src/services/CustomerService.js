let customers = [
        {firstName: 'John', lastName: 'Snow'},
        {firstName: 'Rob', lastName: 'Stark'},
        {firstName: 'Daenerys', lastName: 'Targaryen'},
        {firstName: 'Tirion', lastName: 'Lanister'}
        ];

export const addCustomer = customer => {
    customers.push(customer)
};

export const findCustomer = id => {
    return customers[id-1];
};

export default customers;

