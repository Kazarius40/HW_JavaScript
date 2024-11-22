// - створити блок,
let div = document.createElement(`div`);

// - додати йому класи wrap, collapse, alpha, beta
div.classList.add(`wrap`);
div.classList.add(`collapse`);
div.classList.add(`alpha`);
div.classList.add(`beta`);

// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
div.style.background = `orange`;
div.style.color = `blue`;
div.style.fontSize = `60px`;

// - додати цей блок в body.
document.body.appendChild(div);

// - клонувати його повністю, та додати клон в body.
let div1 = div.cloneNode(true);
document.body.appendChild(div1);


