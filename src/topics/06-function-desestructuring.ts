export interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: "Nokia A1",
    price: 150.0
}

const tablet: Product = {
    description: "Ipad Air",
    price: 250.0
}

const shoppingCart = [phone, tablet];
const tax = 0.15;

interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}

export function taxCalculation(options: TaxCalculationOptions): number[] {
    let total = 0;

    options.products.forEach(product => {
        //total = total + product.price
        total += product.price;
    })

    return [total, total * options.tax];
}

const result = taxCalculation({
    //tax: tax, Si el atributo tiene el mismo nombre que el valor se puede prescindir de el
    tax,
    products: shoppingCart
})

console.log(result);
console.log('Total: ', result[0]);
console.log('Tax: ', result[1]);

//Desestructuracion de result

const [total, taxTotal] = taxCalculation({
    //tax: tax, Si el atributo tiene el mismo nombre que el valor se puede prescindir de el
    tax,
    products: shoppingCart
})

console.log('Total:', total);
console.log('Tax:', taxTotal);


// Desestructurar el producto
// solo quiere el precio
// tambien en el parametro de salida que sean solo 2 numeros
//function taxCalculation1(options: TaxCalculationOptions): [number, number] {
function taxCalculation1(options: TaxCalculationOptions): [number, number] {
    let total = 0;

    //desestructuro options
    const { tax, products } = options;
    products.forEach(({ price }) => {
        //total = total + product.price
        total += price;
    })

    return [total, total * tax];
}
