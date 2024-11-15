// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи


let arr = [];

let array = [235, `1223`, true, `90780`, 546, false, true, `76858`, 7869, `122`];

for (let i of array) {
    if (typeof i === `boolean`) {
        arr[arr.length] = i;
    }
}

console.log(arr);