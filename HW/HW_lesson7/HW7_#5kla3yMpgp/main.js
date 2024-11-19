// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:

class Car {
    constructor(model, manufacturer, yearOfProduction, maximumSpeed, engineCapacity) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.yearOfProduction = yearOfProduction;
        this.maximumSpeed = maximumSpeed;
        this.engineCapacity = engineCapacity;
        // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
        this.drive = function () {
            console.log(`їдемо зі швидкістю ${this.maximumSpeed} на годину`);
        }
        // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
        this.information = function () {
            for (let item in this) {
                if (item === `model` || item === `manufacturer` || item === `yearOfProduction` || item === `maximumSpeed` || item === `engineCapacity`) {
                    console.log(item, this[item]);
                }
            }
        }
        // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
        this.increaseMaxSpeed = function (newSpeed) {
            if (newSpeed > this.maximumSpeed) {
                this.maximumSpeed = newSpeed;
            }
        }
        // -- changeYear (newValue) - змінює рік випуску на значення newValue
        this.changeYear = function (newValue) {
            if (newValue !== this.yearOfProduction) {
                this.yearOfProduction = newValue;
            }
        }
        // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
        this.addDriver = function (driver) {
            this.driver = driver;
        }
    }
}

const car1 = new Car('Ferrari', 'Ferrari N.V.', 1987, 355, 6);
console.log(car1);
console.log("");
car1.drive();
console.log("");
car1.information();
car1.changeYear(2000);
car1.increaseMaxSpeed(400);
car1.addDriver({name: `Roman`, age: 40, status: `married`});
console.log("");
console.log(car1);
console.log("");
car1.drive();