function add(num1: number, num2: number) {
    return num1 + num2;
}

function printValue(num: number): void {
    console.log('Result', num);
}

// combinedValues is specified as type Function and can take any function as the value
let combinedValues: Function;
combinedValues = add;
combinedValues = printValue;

// To specify the exact function to be taken by the variables, we define it as
let anotherFunction: (n1: number, n2: number) => number;
// In the above example anotherFunction can only accept a function which will take 2 number variables
// and return a number
anotherFunction = add;

// Below statement will not work as it is accepting only one number and returning void
// anotherFunction = printValue;