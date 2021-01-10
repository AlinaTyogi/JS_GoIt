class Car {
    constructor(speed) {
        this.speed = speed;
    };

    viewSpeed() {
        return `Моя скорость ${this.speed} км/ч`;
         ;
    } 
}

let audi = new Car(200);
console.log(audi.viewSpeed());

console.log(document.querySelector('.car'));

document.querySelector('.car').innerText = audi.viewSpeed();

audi.speed = 300;
document.querySelector('.car2').innerText = audi.viewSpeed();





