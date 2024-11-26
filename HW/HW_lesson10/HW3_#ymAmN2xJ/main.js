// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом


let inputCreating = function (type, placeholder) {
    let input = document.createElement(`input`);
    input.setAttribute("type", type);
    input.setAttribute("placeholder", placeholder);
    return input;
}

let form = document.createElement(`form`);
document.body.appendChild(form);

let inputName = inputCreating(`text`, `Ваше ім'я`);
let inputSurName = inputCreating(`text`, `Ваше прізвище`);
let inputAge = inputCreating(`number`, `Ваш вік`);

let buttonInput = document.createElement(`button`);
buttonInput.innerText = `send`;

form.append(inputName, inputSurName, inputAge, buttonInput);

buttonInput.onclick = (event) => {
    let p = document.createElement(`p`);
    document.body.appendChild(p);
    p.innerText = `${inputName.value} ${inputSurName.value} - ${inputAge.value} років`;
    event.preventDefault();
}