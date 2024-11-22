// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
let div, h1, p;

for (let item of coursesAndDurationArray) {
    div = document.createElement(`div`);
    h1 = document.createElement(`h1`);
    p = document.createElement(`p`);

    h1.classList.add(`heading`);
    h1.innerText = item.title;

    p.classList.add(`description`);
    p.innerText = item.monthDuration + ' - months';

    div.classList.add(`item`);
    div.append(h1, p);
    document.body.appendChild(div);
}

