// Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400

// let ExchangeRateUSD = 25;
// let ExchangeRateEUR = 42;

function exchange(sumUAH, currencyValues, exchangeCurrency) {
    let result;
    for (let value of currencyValues) {
        if (value.currency === exchangeCurrency) {
            result = sumUAH / value.value;
        }
    }
    return result;
}

console.log(exchange(10000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}], 'USD',));
