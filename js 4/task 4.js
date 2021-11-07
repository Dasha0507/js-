methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b,
    "/": (a, b) => a / b,
    "*": (a, b) => a * b
}

function calculate(str) {
    let split = str.split(' '),
        a = +split[0],
        op = split[1],
        b = +split[2];

    if (!methods[op] || isNaN(a) || isNaN(b)) {
        return NaN;
    }

    return methods[op](a, b); 
}

let usersent = prompt("Введите выражение типа a * b", "13 * 9");
let result = calculate(usersent);
alert( result );