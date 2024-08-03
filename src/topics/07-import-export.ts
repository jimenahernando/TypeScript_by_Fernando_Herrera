import { Product, taxCalculation } from './06-function-desestructuring'

const shoppingCart: Product[] = [
    {
        description: "Nokia A1",
        price: 150.0
    },
    {
        description: "Ipad Air",
        price: 250.0
    }
];

const [total, tax] = taxCalculation({
    products: shoppingCart,
    tax: 0.30
})

console.log('Total:', total);
console.log('Tax:', tax);

