// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let users = [];

users[users.length] = new User(1, `Roman`, `Dotsenko`, `roman@gmail.com`, +380636455478);

users[users.length] = new User(2, `Petro`, `Dotsenko`, `petro@gmail.com`, +380631455478);

users[users.length] = new User(3, `Oleg`, `Dotsenko`, `oleg@gmail.com`, +380632455478);

users[users.length] = new User(4, `vasya`, `Dotsenko`, `vasya@gmail.com`, +380633455478);

users[users.length] = new User(5, `katya`, `Dotsenko`, `katya@gmail.com`, +380634455478);

users[users.length] = new User(6, `masha`, `Dotsenko`, `masha@gmail.com`, +380635455478);

users[users.length] = new User(7, `misha`, `Dotsenko`, `misha@gmail.com`, +380637455478);

users[users.length] = new User(8, `kostya`, `Dotsenko`, `kostya@gmail.com`, +380638455478);

users[users.length] = new User(9, `kolya`, `Dotsenko`, `kolya@gmail.com`, +380639455478);

users[users.length] = new User(10, `zenya`, `Dotsenko`, `zenya@gmail.com`, +380630455478);