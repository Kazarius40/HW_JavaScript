// Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'


let str1 = 'hello world';
let str2 = 'lorem ipsum';
let str3 = 'javascript is cool';

let strUpperCase = [str1, str2, str3];
for(let item of strUpperCase){
    console.log(item.toUpperCase());
}