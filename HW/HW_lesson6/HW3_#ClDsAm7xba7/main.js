// Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'


let str1 = 'HELLO WORLD';
let str2 = 'LOREM IPSUM';
let str3 = 'JAVASCRIPT IS COOL';

let strLowerCase = [str1, str2, str3];
for(let i of strLowerCase){
    console.log(i.toLowerCase());
}