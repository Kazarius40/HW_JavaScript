// Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.


// Ми не проходили функцію trim, що застосована у Сергія в роз'ясненнях, тому викручувався без її використання

let str = ' dirty string   ';
// let str1 = '';
// for (let i = str.indexOf('d'); i <= str.lastIndexOf('g'); i++) {
//     str1+= str[i];
// }
let str1 = str.trim();

console.log(str1);
console.log(str.length);
console.log(str1.length);