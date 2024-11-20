// Створити функцію, яка робить глибоку копію об'єкту.
// Додати перевірки на undefined, null, NaN.
//     Подумати і реалізувати логіку, в якій кінцевий об'єкт буде мати функції,які в нього були до цього моменту.


let user = {
    name: `Roman`,
    surname: `Dotsenko`,
    age: 40,
    func() {
        console.log(`Здоровенькі були,`);
    },
    greet() {
        console.log(`як ся маєтесь?)))`);
    },
}

let cloneCreating = function (entity) {
    if (entity) {
        let copy = JSON.parse(JSON.stringify(entity));
        for (let item in entity) {
            if (typeof entity[item] === `function`) {
                copy[item] = entity[item].bind();
            }
        }
        return copy;
    } else {
        console.log(`Сталася якась помилка. Потрібно викликати підмогу`);
    }
}
console.log(cloneCreating(user));
