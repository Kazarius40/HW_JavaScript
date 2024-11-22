// - створити блок,
let div = document.createElement(`div`);
let p = document.createElement(`p`);
p.innerText = `Це щоб перевірити з наповненням!`;
div.appendChild(p);

// - додати йому класи wrap, collapse, alpha, beta
div.classList.add(`wrap`, `collapse`, `alpha`, `beta`);

// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
div.style.background = `orange`;
div.style.color = `blue`;
div.style.fontSize = `60px`;

// - додати цей блок в body.
document.body.appendChild(div);

// - клонувати його повністю, та додати клон в body.
let div1 = div.cloneNode(true);
document.body.appendChild(div1);



