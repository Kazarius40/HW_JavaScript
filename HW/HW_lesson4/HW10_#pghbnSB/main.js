// створити функцію яка повертає найменьше число з масиву

let a =  [10, 25, -2, 7, -30];

function minArr(a) {
    let min = a[0];
    let b = 1;
    while (b < a.length) {
        if (a[b] < min) {
            min = a[b];
        }
        b++;
    }
    return min;
}


console.log(minArr(a));