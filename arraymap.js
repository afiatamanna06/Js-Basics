let numbers = [1, -1, -100, 2];
let positiveNumbers = numbers.filter(n => n >= 0);
let listedNumbers = positiveNumbers.map(n => '<li>' + n + '</li>');
let html = listedNumbers.join('');
console.log(html);