// створити функцію яка повертає найменьше число з масиву


let arr = [7, 10, 22, -22, 34, -111, 0, -222];

let smallestNumber = (array) => {
    let numberArray = 0;
    for (let item of array) {
        if (item < numberArray) {
            numberArray = item;
        }
    }
    console.log(numberArray);
}

smallestNumber(arr);
