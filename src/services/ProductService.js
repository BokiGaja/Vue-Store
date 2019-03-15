let products = [
    {name: 'Gun', price: 150, quantity: 20},
    {name: 'Car', price: 15000, quantity: 6},
    {name: 'Bike', price: 10, quantity: 200},
    {name: 'Train', price: 20000, quantity: 2}
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
    return products[id-1];
};

export default products;