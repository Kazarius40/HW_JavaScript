// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:

function Car(model, manufacturer, yearOfProduction, maximumSpeed, engineCapacity) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.yearOfProduction = yearOfProduction;
    this.maximumSpeed = maximumSpeed;
    this.engineCapacity = engineCapacity;

    // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`

    this.info = function () {
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

    // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`

    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maximumSpeed} на годину`);
    }

    // -- changeYear (newValue) - змінює рік випуску на значення newValue

    this.changeYear = function (newValue) {
        if (newValue !== this.yearOfProduction) {
            this.yearOfProduction = newValue;
        }
    }

    // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
    // Не зміг зрозуміти, нащо Сергій вписав в розв'язку ще if (driver), а вирішив я завдання лише після консультації, тому немає можливості спитати його.
    this.addDriver = function (driver) {
        this.driver = driver;
    }
}

const car = new Car('Ferrari', 'Ferrari N.V.', 1987, 355, 6);
car.info();
car.increaseMaxSpeed(400);
console.log("");
car.drive();
car.changeYear(1988);
car.addDriver({name: `Roman`, age: 40})
console.log("");
car.info();