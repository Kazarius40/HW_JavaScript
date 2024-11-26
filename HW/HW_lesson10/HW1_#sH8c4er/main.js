// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".


let div = document.createElement(`div`);
div.setAttribute(`id`, `text`);
div.style.background = "orange";
div.style.width = "200px";
div.style.height = "200px";
document.body.appendChild(div);

let button = document.createElement(`button`);
button.innerText = `removeFilling`;
document.body.appendChild(button);

button.onclick = function () {
   div.style.display = "none";
}