function processNumber(number, callback) {
    return callback(number);
}

function double(number) {
    return number * 2;
}

function square(number) {
    return number * number;
}

function half(number) {
    return number / 2;
}

console.log(processNumber(8,square))