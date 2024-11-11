// створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
//
// let f = [
//     {id: 1, name: 'kokos', age: 123},
//     {id: 2, name: 'kokos', age: 123},
//     {id: 3, name: 'kokos', age: 123},
//     {id: 4, name: 'kokos', age: 123},
//     {id: 5, name: 'kokos', age: 123},
// ];

function a(users) {
    for (let b of users) {
        document.write(`<div>`);
        for (let c in b) {
            document.write(`${c}: `);
            document.write(`${b[c]}; `);
        }
        document.write(`</div>`);
    }
}

// a(f);

