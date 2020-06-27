let numbers = [1, -1, 2, -100, 3];
let positiveNumbers = numbers.filter(function(value) {
    return value >= 0;
});
let negativeNumbers = numbers.filter(n => n < 0);
console.log(positiveNumbers);
console.log(negativeNumbers);