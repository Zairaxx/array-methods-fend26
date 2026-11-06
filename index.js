// 1. forEach
const names = ["Anna", "Erik", "Sara", "Johan", "Lisa"];

names.forEach((name,i) => {
//   console.log("Index: " +  i + " - Namn: " + name);
});

// 2. map
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map((number, i) => number * 2);
console.log(doubled);

// 3. filter
const tenNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = tenNumbers.filter((number) => number % 2 === 0);
console.log(evenNumbers);

// 4. reduce
const values = [10, 20, 30, 40, 50];

const sum = values.reduce((total, value) => total + value, 0);
console.log(sum);

// 5. find
const mixedNumbers = [5, 12, 8, 21, 3, 35, 18, 42, 7, 15];

const firstOver20 = mixedNumbers.find((number) => number > 20);
console.log(firstOver20);

// 6. findIndex
const people = ["Anna", "Erik", "Sara", "Johan", "Lisa"];

const saraIndex = people.findIndex((person) => person === "Sara");
console.log(saraIndex);

// 7. some
const someNumbers = [4, 8, -3, 15, 6];

const hasNegative = someNumbers.some((number) => number < 0);
console.log(hasNegative);

// 8. every
const positiveNumbers = [3, 7, 12, 1, 9];

const allPositive = positiveNumbers.every((number) => number > 0);
console.log(allPositive);

// 9. push & pop
const myArray = [];

myArray.push(10);
myArray.push(20);
myArray.push(30);
let newNumber = myArray.pop();

console.log(newNumber);

// 10. sort

const unsorted = [7, 42, 19, 3, 25];
//Muterar ej
const sortedArray = unsorted.toSorted((a, b) => a - b)

//Muterar
unsorted.sort((a, b) => a - b);

console.log(unsorted);