let x = (!!(''/[]));
switch (x) {
    case false:
        console.log('default');
        break;
    default:
        console.log('Це значення не дефолтне')
}