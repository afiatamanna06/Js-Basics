let x = 10;
let y = x;
x = 20;
console.log(x);
console.log(y);

let a = { value: 10 };
let b = a;
a.value = 20;
console.log(a.value);
console.log(b.value);

let number = 10;

function increase(number) {
    return number++;
}

increase(number);
console.log(number);

let object = { value: 10 };

function increment(object) {
    return object.value++;
}

increment(object);
console.log(object.value);