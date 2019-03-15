let customers = [
        {firstName: 'John', lastName: 'Snow', products: []},
        {firstName: 'Rob', lastName: 'Stark', products: []},
        {firstName: 'Daenerys', lastName: 'Targaryen', products: []},
        {firstName: 'Tyrion', lastName: 'Lannister', products: []}
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

