// *Через Array.prototype. створити власний foreach, filter

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

// Не знайшов в лекціях цього, тому довго розбирався, що ж воно робить (брав з розв'яків) та переписав, поприбиравши зайве. Наскільки я зараз це вже зрозумів, то Array.prototype.(моя довільна назва) створює функцію, яку я буду в подальшому використовувати. Але ж я можу і інші параметри для цього прописати.
Array.prototype.myForEveryone = function (callback) {
    for (let item of this) {
        callback(item);
    }
}
users.myForEveryone(value => console.log(value));

// Вже другий робив не підглядаючи в розв'яки. Можна сказати, що зрозумів. Попрактикуюся ще.
Array.prototype.filterForMe = function (callback) {
    let mass = [];
    for (let item of this) {
        if (callback(item)) {
            mass[mass.length] = item;
        }
    }
    return mass;
}

let filter1 = users.filterForMe(value => value.age > 30);
console.log(filter1);