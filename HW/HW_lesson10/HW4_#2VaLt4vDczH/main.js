// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1


let div = document.createElement('div');
let number = JSON.parse(localStorage.getItem(`number`));
number ++;
localStorage.setItem(`number`, number);
div.innerText = number;
document.body.appendChild(div);