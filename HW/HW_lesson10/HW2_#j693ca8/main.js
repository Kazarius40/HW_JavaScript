// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

let input = document.createElement(`input`);
input.setAttribute(`type`, `number`);
document.body.appendChild(input);

let button = document.createElement(`button`);
button.innerText = `Введіть свій вік`;
document.body.appendChild(button);

let createP = function (text) {
    let p = document.createElement(`p`);
    p.innerText = text;
    document.body.appendChild(p);
}

button.onclick = () => {
    let age = input.value;
    if (age >= 18) {
        createP(`Ваш вік підтверджено. Можете далі користуватися послугами цього ресурсу`);
    } else {
        createP(`Ваш вік не відповідає вимогам нашого сервісу. Гарного дня!`);
        input.remove();
        button.remove();
    }
}


