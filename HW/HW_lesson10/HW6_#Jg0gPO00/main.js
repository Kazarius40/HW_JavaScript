// створити конвертор ваги з кг в фунти. данні заповнюються через інпут. При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок

let input = document.createElement("input");
input.type = "number";
input.placeholder = `kg`;
document.body.appendChild(input);

let calculus = document.createElement("div");
document.body.appendChild(calculus);
input.oninput = () => {
    calculus.innerText = JSON.stringify(input.value * 2.2);
};