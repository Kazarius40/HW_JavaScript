let cardSuits = ['spade', 'diamond', 'heart', 'clubs'];
let cardValue = [`6`, `7`, `8`, `9`, `10`, 'ace', 'jack', 'queen', 'king'];

// описати колоду карт (від 6 до туза без джокерів)
let deckOfCards = [];
for (let cardSuit of cardSuits) {
    for (let value of cardValue) {
        let card = {suit: cardSuit, value: value};
        if (cardSuit === `heart` || cardSuit === `diamond`) {
            card.color = `red`;
        } else {
            card.color = `black`;
        }
        deckOfCards.push(card);
    }
}

function filter(arr, callback) {
    let mass = [];
    for (let item of arr) {
        if (callback(item)) {
            mass[mass.length] = item;
        }
    }
    return mass;
}
console.log(deckOfCards);

// - знайти піковий туз
console.log(deckOfCards.find(card => card.suit === 'spade' && card.value === 'ace'));

// - всі шістки
console.log(filter(deckOfCards, (arg) => {
    return arg.value === `6`;
}));

// - всі червоні карти
console.log(filter(deckOfCards, (arg) => {
    return arg.color === `red`;
}));

// - всі буби
console.log(filter(deckOfCards, (arg) => {
    return arg.suit === `diamond`;
}));

// - всі трефи від 9 та більше
console.log(filter(deckOfCards, (arg) => {
    return (arg.suit === `clubs` && arg.value !== `6` && arg.value !== `7` && arg.value !== `8`);
}));

console.log(deckOfCards.filter((arg) => arg.suit === `clubs` && (arg.value !== `6` && arg.value !== `7` && arg.value !== `8`)));