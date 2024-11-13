// створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

let array = [`Okten`, 22, 19, `Hello`];

let swap = (arr, index1, index2) => {
    let itemArr = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = itemArr;
    return arr;
}

console.log(swap(array, 1, 3));