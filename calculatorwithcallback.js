function add(a,b) {
    return a + b;
}

function substract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a / b;
}

function calculate(a,b,operation) {
    return operation(a,b);
}

console.log(calculate(3,4,add))