let time = +prompt('Введіть хвилини');
if (time >= 0 && time < 15) {
    console.log('Перша чверть години')
}
else {
    if (time >= 15 && time < 30){
        console.log('Друга чверть години')
    }
    else {
        if (time >= 30 && time < 45){
            console.log('Третя частина години')
        }
        else {
            if (time >=45 && time < 59){
                console.log('Четверта частина години')
            }
            else {
                console.log('Уважно перевір, що ти вводиш. Скільки хвилин в годині?')
            }
        }
    }
}