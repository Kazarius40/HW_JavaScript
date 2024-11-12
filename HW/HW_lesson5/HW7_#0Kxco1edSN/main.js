// створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)


let nav = (textLi, quantityLi) => {
    document.write(`<ul>`);
    for (let a=0; a<quantityLi; a++) {
        document.write(`<li>${textLi}</li>`);
    }
    document.write(`</ul>`);
}

// nav(`Hello, World!`, 6);