// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
function Princess(name, age, footSize) {
    this.name = name;
    this.age = age;
    this.footSize = footSize;
}

let manyPrincesses = [
    new Princess(`Оля`, 16, 35),
    new Princess(`Юля`, 17, 36),
    new Princess(`Катя`, 18, 37),
    new Princess(`Женя`, 19, 38),
    new Princess(`Саша`, 20, 39),
    new Princess(`Жанна`, 21, 40),
    new Princess(`Марфа`, 22, 41),
    new Princess(`Клавдія`, 23, 42),
    new Princess(`Параска`, 24, 43),
    new Princess(`Онуфрія`, 'такий вік важко уявити', 56),
];

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
function Prince(name, age, foundShoe) {
    this.name = name;
    this.age = age;
    this.foundShoe = foundShoe;
}

let prince = new Prince(`Петро`, 45, 56);

let wifeOfPrince;

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
for (let item of manyPrincesses) {
    if (prince.foundShoe === item.footSize) {
        wifeOfPrince = item;
    }
}

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
let find = manyPrincesses.find(value => value.footSize === prince.foundShoe);