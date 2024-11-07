let first_number = +prompt('Введіть перше число для порівняння');
let second_number = +prompt('Введіть друге число для порівняння');
if (first_number > second_number) {
    console.log(first_number);
}
else {
    if (second_number > first_number) {
        console.log(second_number);
    }
    else {
        console.log('Введені вами числа рівні: ' + first_number + ' = ' + second_number);
    }
}