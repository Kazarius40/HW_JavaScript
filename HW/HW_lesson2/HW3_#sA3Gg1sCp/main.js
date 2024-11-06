let book1 = {
    title: '2000 лье под водой',
    pageCount: 198,
    genre: 'Фантастика',
    authors: []
}
book1.authors.name = 'Жюль Верн';
book1.authors.age = 78;
console.log(book1);

let book2 = {
    title: 'Три мушкетера',
    pageCount: 144,
    genre: 'Роман',
    authors: []
}
book2.authors.name = 'Александр Дюма';
book2.authors.age = 45;
console.log(book2);

let book3 = {
    title: 'Все о животных',
    pageCount: 234,
    genre: 'Энциклопедия',
    authors: []
}
book3.authors.name = 'Я навіть не знаю, хто там це пише';
book3.authors.age = NaN;
console.log(book3);