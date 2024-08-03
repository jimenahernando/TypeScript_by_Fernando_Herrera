export class Person {
    //propiedades
    public name: string;
    private address: string;

    //metodos
    constructor(name: string, address: string){
        this.name = name,
        this.address = address
    }
}

//manera corta 

export class PersonShort {
 
    constructor(
        public name: string, 
        public surname: string, 
        public address: string = 'No address'
    ){}
}


const ironman = new Person('Marc','Valencia');
const linternaVerde = new PersonShort('Marc','Valencia');

console.log(ironman);
console.log(ironman.name);

console.log(linternaVerde);
console.log(linternaVerde.name);

export class Hero extends PersonShort {

    constructor(
        public alterEgo: string,
        public age:number, 
        public realName: string 
    ){
        super(realName, 'New York' )
    }
}

const ironman2 = new Hero('Ironman',45, 'Tony');
console.log(ironman2);

//Priorizar composicion

export class Hero1 {

    public person: PersonShort

    constructor(
        public alterEgo: string,
        public age:number, 
        public realName: string,
    ){
        this.person = new PersonShort(realName, '');
    }
}
const gatubela = new Hero1('Gatubela',45, 'Cat');
console.log(gatubela);

export class Hero2 {

    constructor(
        public alterEgo: string,
        public age:number, 
        public realName: string,
        public person: PersonShort
    ){
    }
}

const hope = new PersonShort('Hope', ' Van Dyne', 'Dallas');
const laAvispa = new Hero2('La avispa', 20, 'Hope', hope);
console.log(laAvispa);
