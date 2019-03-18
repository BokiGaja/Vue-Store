let customers = [
        {id: 1, firstName: 'John', lastName: 'Snow', email: 'john@test.com', products: []},
        {id: 2, firstName: 'Rob', lastName: 'Stark', email: 'rob@test.com', products: []},
        {id: 3, firstName: 'Daenerys', lastName: 'Targaryen', email: 'daenerys@test.com', products: []},
        {id: 4, firstName: 'Tyrion', lastName: 'Lannister', email: 'tyrion@test.com', products: []}
];

export const addCustomer = customer => {
    customers.push(customer)
};

export const findCustomer = id => {
    return customers[id-1];
};

export const addProduct = (customerFirstName, product) => {
    customers.forEach(customer => {
        if (customer.firstName + ' ' + customer.lastName === customerFirstName) {
            let inArray = false;
            customer.products.forEach(prod => {
                if (prod.name === product.name) {
                    prod.quantity++;
                    inArray = true;
                }
            });

            if (!inArray) {
                customer.products.push({...product})
            }
        }
    })
};

export default customers;

