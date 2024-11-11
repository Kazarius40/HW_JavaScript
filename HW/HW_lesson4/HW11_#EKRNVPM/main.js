// створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

let arr = [1, 2, 10, 12];
let arr1 = [1, 2, 10, 12, 8];


// // Один із способів викликати цю функцію
function sum(arr) {
    let a = 0;
    for (let i = 0; i < arr.length; i++) {
        a = a + arr[i];
    }
    return a;
}

console.log(sum(arr1));


// Другий спосіб викликати цю функцію
function sum1(arr) {
    let a = 0;
    for (let i of arr) {
        a = a + i;
    }
    return a;
}

console.log(sum1(arr));