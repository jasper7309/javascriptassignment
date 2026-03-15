function reverseNumber(number) {
    let reverse = 0;
    if (number < 10) {
         return number;
    }
     else {
        while(number > 0) {
            digit = number % 10
            reverse = reverse * 10 + digit;
            number = number / 10 | 0
        }
     }
     return reverse;
}
 console.log(reverseNumber(123456789))