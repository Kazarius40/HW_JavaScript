// створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write


// let a = [1, 2, 5, 6, `Okten`, 6];
// let c = [7, 2, 6, `School`];

function e(d) {
    document.write(`<ul>`);
    for (b of d) {
        document.write(`<li>${b}</li>`);
    }
    document.write(`</ul>`);
}

// e(c);