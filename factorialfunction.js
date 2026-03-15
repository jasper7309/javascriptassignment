function factorial(number) {
    let numFactorial = 1;
    while(number > 0) {
        numFactorial = numFactorial * number;
        number--
    }
    return numFactorial;
}
console.log(factorial(5))