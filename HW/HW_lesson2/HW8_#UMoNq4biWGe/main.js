let day = +prompt();
if (day>=1 && day<=10){
    console.log('Перша декада місяця');
}
else {
    if (day>10 && day<=20){
        console.log('Друга декада місяця');
    }
    else {
        if (day>20 && day<=31){
            console.log('Третя декада місяця');
        }
        else {
            console.log('Уважно перевір ще раз кількість введених днів. Ти ввів:');
            console.log(day + ' ' + 'дні');
        }
    }
}