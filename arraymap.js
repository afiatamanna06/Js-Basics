let numbers = [1, -1, -100, 2];
let positiveNumbers = numbers.filter(n => n >= 0);
let listedNumbers = positiveNumbers.map(n => '<li>' + n + '</li>');
let html = listedNumbers.join('');
console.log(html);
let listedObject = positiveNumbers.map(n => {
    let obj = { value: n };
    return obj;
});
console.log(listedObject);
let anotherObject = numbers
    .filter(n => n < 0)
    .map(n => ({ value: n }));
console.log(anotherObject);