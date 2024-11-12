// створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let arr = [12, 67, `Okten`, true, 87, false, 44];

let nav = (array) => {
    document.write(`<ul>`);
    for (let item of array) {
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`);
}

nav(arr);