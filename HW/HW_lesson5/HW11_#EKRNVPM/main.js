// створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13


let arrayOfNumbers = [1, 2, 10, 5];


let sum = (arrayNumbers) => {
    let sumNumbers = 0;
    for (let item of arrayNumbers) {
        sumNumbers = item + sumNumbers;
    }
    return sumNumbers;
}

console.log(sum(arrayOfNumbers));
