// Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.


let arr = [];

arr[arr.length]= 1;
arr[arr.length]= `Okten`;
arr[arr.length]= true;
arr[arr.length]= 19;

for (let i of arr){
    console.log(i);
}