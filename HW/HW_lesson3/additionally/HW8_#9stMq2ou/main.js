// Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

let arr = [];

let array = [0, `Okten`, 14, true, 7, `Hello`];

for (let item of array) {
    if (typeof item === `number`) {
        arr[arr.length] = item;
    }
}

console.log(arr)

