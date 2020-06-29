let numbers = [1, -2, -3, 9, 10];
let sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);
console.log(sum);