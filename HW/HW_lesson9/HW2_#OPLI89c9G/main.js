// - Є масив:
//     ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

let ul = document.createElement(`ul`);
document.body.appendChild(ul);

let arr = ['Main', 'Products', 'About us', 'Contacts'];

let li;
for (let item of arr) {
    li = document.createElement(`li`);
    li.innerText = item;
    ul.append(li);
}