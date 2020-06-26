const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

const another = Object.assign({ color: 'yellow' }, circle);


const surface = {...circle };
console.log(another);
console.log(surface);