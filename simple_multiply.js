function simpleMultiplication(number) {
    let even = 0;
    let odd = 0;
    let testNumber = number % 2;
    if ( testNumber === 0){
        even = number * 8;
        return even;
    } else {
        odd = number * 9;
        return odd;
    }
}

console.log(simpleMultiplication(2));