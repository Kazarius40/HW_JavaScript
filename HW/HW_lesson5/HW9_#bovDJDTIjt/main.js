// створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.


let users = [
    {id: 1, name: `Olga`, age: 30},
    {id: 2, name: `Petro`, age: 31},
    {id: 3, name: `Oleg`, age: 39},
    {id: 4, name: `Masha`, age: 43},
    {id: 5, name: `Sasha`, age: 13},
]

let analysisArray = (arr) => {
    for (let user of arr) {
        document.write(`<div>${user.id} ${user.name} ${user.age}</div>`);
    }
}

analysisArray(users);