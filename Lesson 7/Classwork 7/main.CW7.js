// // - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function Car(model, manufacturer, manufYear, maxSpeed, engineCapacity) {
//     this.model = model;
//     this.manufacture = manufacturer;
//     this.Year = manufYear;
//     this.maxSpeed = maxSpeed;
//     this.engineCapacity = engineCapacity;
//
//     this.drive = function () {
//         console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     };
//
//     this.info = function () {
//         console.log(`Model: ${this.model}`, `Manufacture: ${this.manufacture}`, `Manufacture year: ${this.Year}`, `Maximum speed: ${this.maxSpeed}`, `Engine capacity: ${this.engineCapacity}`);
//     };
//
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed = newSpeed;
//     };
//
//     this.changeYear = function (newYear) {
//         this.Year = newYear;
//     };
//
//     this.addDriver = function (driver) {
//         this.driver = driver;
//     };
// }
//
// let car = new Car('Toyota', 'Japan', 2015, 300, 2.0);
// console.log(car);
// car.info();
// car.drive();
// car.increaseMaxSpeed(320);
// car.drive();
// car.changeYear(2020);
// car.info();
// car.addDriver('John');
// console.log(car);

//======================================================================================================================
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class Car {
//     constructor(model, manufacturer, manufYear, maxSpeed, engineCapacity) {
//         this.model = model;
//         this.manufacture = manufacturer;
//         this.Year = manufYear;
//         this.maxSpeed = maxSpeed;
//         this.engineCapacity = engineCapacity;
//     }
//     drive () {
//         console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     }
//     info  () {
//         console.log(`Model: ${this.model}`, `Manufacture: ${this.manufacture}`, `Manufacture year: ${this.Year}`, `Maximum speed: ${this.maxSpeed}`, `Engine capacity: ${this.engineCapacity}`);
//     }
//     increaseMaxSpeed (newSpeed){
//         this.maxSpeed = newSpeed;
//     }
//     changeYear (newYear) {
//         this.Year = newYear;
//     }
//     addDriver (driver) {
//         this.driver = driver;
//     }
// }
// let car = new Car('Toyota', 'Japan', 2015, 300, 2.0);
// console.log(car);
// car.info();
// car.drive();
// car.increaseMaxSpeed(350);
// car.drive();
// car.changeYear(2021);
// car.info();
// car.addDriver('Denys');
// console.log(car);

// ==============================================================================================================

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

class Popelushka {
    constructor (popName, age, footSize) {
        this.popName = popName;
        this.age = age;
        this.footSize = footSize;
    }
}

const popelushkaArr =[
    new Popelushka('Masha', 17, 37),
    new Popelushka('Katia', 37, 38),
    new Popelushka('Katy', 25, 36),
    new Popelushka('Lily', 30, 39),
    new Popelushka('Eva', 45, 35),
    new Popelushka('Vika', 50, 36),
    new Popelushka('Lena', 85, 40),
    new Popelushka('Toma', 34, 39),
    new Popelushka('Iren', 77, 38),
    new Popelushka('Nafania', 150, 25)
];
console.log(popelushkaArr);

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

class Prince {
    constructor(prName, age, fShoe) {
        this.prName = prName;
        this.age = age;
        this.fShoe = fShoe;
    }
}
const newPrince = new Prince('Kuzia', 160, 25);
console.log(newPrince);

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.

const princeLove = (popelushkaArr, newPrince) => {
    for (const popArrElement of popelushkaArr) {
        if (popArrElement.footSize === newPrince.fShoe){
            return `Your love is ${popArrElement.popName}!`
        }
    }
};
console.log(princeLove(popelushkaArr, newPrince));

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

const emptyPrincess = popelushkaArr.find((popArrElement) => popArrElement.footSize === newPrince.fShoe);
console.log(emptyPrincess);



