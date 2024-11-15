// Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи


let arr = [];

let array = [0, `Okten`, 14, true, 7, `Hello`];

for (let i of array){
    if(typeof i === 'string'){
        arr[arr.length] = i;
    }
}

console.log(arr);