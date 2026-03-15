function ispalindrome(number) {
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
    if (reverse === number) {
        return true;
    } else {
        return false;
    }
}
 console.log(ispalindrome(123456789))