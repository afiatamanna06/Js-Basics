function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('draw');
        }
    };
}

let circle = createCircle(1);
console.log(circle);
circle.draw();