// створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах. Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

function swap(arr, index1, index2) {
    if ((index1 && index2) < arr.length) {
        let a = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = a;
        return arr;
    }
    return `Значення як мінімум одного з індексів більше за довжину масива`
}

console.log(swap([11,22,33,44],3,0));

