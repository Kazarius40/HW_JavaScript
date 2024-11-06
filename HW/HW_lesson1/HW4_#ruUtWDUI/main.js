let firstName;
let middleName;
let lastName;
let age;

firstName = prompt("Ваше ім'я");
middleName = prompt("По-батькові");
lastName = prompt("Фамілія");
age = prompt("вкажіть Ваш вік");

let msg = `${firstName} ${middleName} ${lastName}, ${age}`;

console.log(msg);