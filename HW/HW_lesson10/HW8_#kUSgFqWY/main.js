// Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.


function letInput(type, placeholder) {
    let input = document.createElement("input");
    input.setAttribute("type", type);
    input.setAttribute("placeholder", placeholder);
    return input;
}

let form = document.createElement(`form`);

let inputLine = letInput(`number`, `кількість рядків`);
let inputCell = letInput(`number`, `кількість ячеєк`);
let inputContents = letInput(`text`, `вміст ячеєк`);

let button = document.createElement("button");
button.innerText = `Сформувари табличку`;

form.append(inputLine, inputCell, inputContents, button);
document.body.append(inputLine, inputCell, inputContents, button);

button.onclick = () => {
    let table = document.createElement("table");
    for (let i = 0; i < inputLine.value; i++) {
        let tr = document.createElement(`tr`);
        for (let i = 0; i < inputCell.value; i++) {
            let td = document.createElement(`td`);
            td.innerText = inputContents.value;
            tr.append(td);
        }
        table.append(tr);
    }
    document.body.append(table);
}