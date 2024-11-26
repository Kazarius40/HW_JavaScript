// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається


let date = JSON.parse(localStorage.getItem(`sessionsList`)) || [];
let now = new Date();
date[date.length] = now.getTime();
localStorage.setItem(`sessionsList`, JSON.stringify(date));

let a = 100;
let number;

let div = document.createElement("div");
div.innerText = a + JSON.parse(localStorage.getItem(`number`)) + ` грн`;
document.body.append(div);

window.onload = () => {
    let time = JSON.parse(localStorage.getItem(`sessionsList`));
    if ((time[time.length - 1] - time[time.length - 2]) >= 10000) {
        number = JSON.parse(localStorage.getItem(`number`));
        number += 10;
        localStorage.setItem(`number`, number);
    }
}