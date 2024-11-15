// Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let str1 = 'hello world';
let str2 = 'lorem ipsum';
let str3 = 'javascript is cool';

let strLength = [str1, str2, str3];
for (let strItem of strLength) {
    console.log(`${strItem.length} - довжина ${strItem}`);
}