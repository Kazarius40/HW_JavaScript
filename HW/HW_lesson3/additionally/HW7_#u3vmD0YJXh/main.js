// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

let a = [235, `1223`, true, `90780`, 546, false, true, `76858`, 7869, `122`];
let b = 0;
while (b < a.length) {
    if (typeof (a[b]) === true) {
        console.log(a[b]);
    }
    b += 1;
}