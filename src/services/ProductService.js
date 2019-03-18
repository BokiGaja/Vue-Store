let products = [
    {id: 1, name: 'Gun', price: 150, quantity: 20},
    {id: 2, name: 'Car', price: 15000, quantity: 6},
    {id: 3, name: 'Bike', price: 10, quantity: 200},
    {id: 4, name: 'Train', price: 20000, quantity: 2}
];

export const addQuantity = product => {
    products.forEach(productToAdd => {
        if (productToAdd === product) {
            productToAdd.quantity++
        }
    })
};

export const removeQuantity = product => {
    products.forEach(productToAdd => {
        if (productToAdd === product && productToAdd.quantity > 0) {
            productToAdd.quantity--
        }
    })
};

export const findProduct = id => {
    let productFound = null;
    products.forEach(product => {
        if (product.id === id) {
            productFound = product
        }
    });
    return productFound;
};

export default products;