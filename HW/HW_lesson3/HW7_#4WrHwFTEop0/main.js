let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true},
];

// for (let a of users) {
//     if (a.status){
//         console.log(a);
//     }
// }

for (let a = 0; a < users.length; a++) {
    if (users[a].status) {
        document.write(`<h3>`);
        for (let k in users[a]) {
            document.write(k, ` - `, users[a][k], ` ; `);
        }
        document.write(`</h3>`);
    }
}

// for (let b of users) {
//     if(!b.status) {
//         console.log(b);
//     }
// }
//
// for (let c of users) {
//     if(c.age > 30) {
//         console.log(c);
//     }
// }