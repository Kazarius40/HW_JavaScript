let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];


// за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration
console.log(coursesAndDurationArray.map(function (value, index) {
    return {id: index + 1, ...value};
}))


//     Зробити все ВИКЛЮЧНО за допомоги інлайн конструкції
console.log(coursesAndDurationArray.map((value, index) => {
    return {id: index + 1, title: value.title, monthDuration: value.monthDuration}
}))


//Саме ось цей, останній метод, підгледів у Сергія. Написав собі для практики (тільки трохи змінив там положення, бо в завданні сказано, що id спочатку бути мусить). Щось я про нього не подумав... Вище два сам писав.
// console.log(coursesAndDurationArray.map((value, index) => ({id: index + 1, ...value})))