function addNumbers(a: number, b: number): number {
    return a + b;
}

//lambda functions
const addNumberArrows = (a: number, b: number): string => {
    return `${a + b}`;
}

function multiply(firstNumber: number, secondNumber?: number, base: number = 2) {
    return firstNumber * base;
}

// const result: number = addNumbers(1,3);
// const result2: string = addNumberArrows(1,3);
// const multiplyResult: number = multiply(5);

// console.log({result});
// console.log(result);

// console.log({result2});
// console.log(result2);

// console.log({multiplyResult});
// console.log(multiplyResult);

interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}

const healCharacter = (character: Character, amount: number) => {
    character.hp += amount;
}

const strider: Character = {
    name: 'Strider',
    hp: 50,
    showHp: function() {
        console.log(`Puntos de via ${ this.hp }`);
    }
}

strider.showHp();
healCharacter(strider, 10);
healCharacter(strider, 30);
strider.showHp();

export { };