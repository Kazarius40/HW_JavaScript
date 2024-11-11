// створити функцію яка повертає найменьше число з масиву

// let a = [1, 4, 6, -10, -11, 0];

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


// console.log(minArr(a));