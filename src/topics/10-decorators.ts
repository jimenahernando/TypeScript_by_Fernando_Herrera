function classDecorator<T extends { new (...args: any[]): {} }> (
    constructor: T
) {
    return class extends constructor {
        newProperty = 'NewProperty';
        hello = 'override';
    }
}


// @module
// @service
@classDecorator
export class SuperClass {
    public myProperty: string = 'Abc123';

    print() {
        console.log('Hola mundo');
    }
}

//imprime la definicion de la clase
console.log(SuperClass);

//instancia de una clase
const myClass = new SuperClass();
console.log(myClass);