let movieTitle: string = '3 Idiots';

movieTitle = 'Arrival';

// movieTitle = 9; // error can't be number as defined string

// movieTitle.upper() // can't use function which is not eligible for strings 

movieTitle.toUpperCase();

let numCatLives: number = 9;

numCatLives+= 1;

// numCatLives = 'hj'; // nada as it is number

let gameOver: boolean = false;

gameOver = true;

// gameOver = 'bjk'; // nada

const rando = (num: number, name: string): number | string => {
    if(num >18){
        return num
    }else {
        return name
    }
}

console.log(rando(19, 'Jake Sully'));

const twoFer = (name: string = 'you'): string => {
    return `one for ${name}`;
}

console.log(twoFer('Jake'));

const isLeapYear = (year: number): boolean => {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)
}

console.log(isLeapYear(1900));

const array: string[] = ['a', 'b'];

type Person = {
    readonly name: String,
    age?: number,
}

const Charlie: Person = {
    name: 'Charlie',
    age: 21
};

const Jason = {
    name: 'Jason'
}

// Union

let num: number | string = '';
num = 9;
num = 'name'

function multiply(num: number | string): number | string {
    if(typeof num === 'number'){
        return num * num;
    }
    return num;
} 

let arr: (number | string)[] = [];

arr = [1,2,3, 'abc'];

// Tuples
// Very rigid arrays
const tup: [number, number] = [1, 2];

// they are flexible with push and pop only
tup.push(1,2)

const exam: [string, number] = ['Charlie', 90];

// Enums
// Defined constant Values
enum OrderStatus {
    PENDING,
    SHIPPED,
    DELIVERED,
    RETURNED
}

const myStatus = OrderStatus.DELIVERED;

// can assign values
enum WeekDay {
    MON = 10,
    TUES = 20,
    WED = 30,
}

enum ArrowKeys {
    UP = 'up',
    DOWN = 'down',
    LEFT = 'left',
    RIGHT = 'right',
}