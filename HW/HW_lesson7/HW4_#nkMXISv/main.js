// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

function Client(id, name, surname, email, phone, ...order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}

function Order(title, price) {
    this.title = title;
    this.price = price;
}

let arr = [];


arr[arr.length] = new Client(1, `Roma`, `Dotsenko`, `abra@gmail.com`, +783432, new Order(`Handy Samsung`, `454 Euro`), new Order(`TV`, `777 $`));

arr[arr.length] = new Client(2, `Roma`, `Dotsenko`, `abra@gmail.com`, +783432, new Order(`Handy Samsung`, `454 Euro`), new Order(`TV`, `777 $`), new Order(`Магнітофон`, `999`));

arr[arr.length] = new Client(3, `Roma`, `Dotsenko`, `abra@gmail.com`, +783432, new Order(`Handy Samsung`, `454 Euro`), new Order(`TV`, `777 $`), new Order(`Магнітофон`, `999`));

arr[arr.length] = new Client(4, `Roma`, `Dotsenko`, `abra@gmail.com`, +783432, new Order(`Handy Samsung`, `454 Euro`), new Order(`TV`, `777 $`), new Order(`Магнітофон`, `999`));

arr[arr.length] = new Client(5, `Roma`, `Dotsenko`, `abra@gmail.com`, +783432, new Order(`Handy Samsung`, `454 Euro`), new Order(`TV`, `777 $`), new Order(`Магнітофон`, `999`));

arr[arr.length] = new Client(6, `Roma`, `Dotsenko`, `abra@gmail.com`, +783432, new Order(`Handy Samsung`, `454 Euro`));

arr[arr.length] = new Client(7, `Roma`, `Dotsenko`, `abra@gmail.com`, +783432, new Order(`Handy Samsung`, `454 Euro`), new Order(`TV`, `777 $`), new Order(`Магнітофон`, `999`), new Order(`Магнітофон`, `999`));

arr[arr.length] = new Client(8, `Roma`, `Dotsenko`, `abra@gmail.com`, +783432, new Order(`Handy Samsung`, `454 Euro`), new Order(`TV`, `777 $`));

arr[arr.length] = new Client(9, `Roma`, `Dotsenko`, `abra@gmail.com`, +783432, new Order(`Handy Samsung`, `454 Euro`), new Order(`TV`, `777 $`));

arr[arr.length] = new Client(10, `Roma`, `Dotsenko`, `abra@gmail.com`, +783432, new Order(`Handy Samsung`, `454 Euro`), new Order(`TV`, `777 $`), new Order(`Магнітофон`, `999`));