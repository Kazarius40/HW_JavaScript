// створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// 2πR(h+R) - площа циліндру

function cylinder(r, h) {
    return 2*3.14 * r * (h+r);
}
let a = cylinder(4,2);
console.log(a);