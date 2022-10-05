function expressionMatter(a, b, c) {
    let resultMax = []; // array resultMax
    let num1 = a*(b + c);
    resultMax.push(num1); // push number to array
    let num2 = a * b * 3;
    resultMax.push(num2);
    let num3 = a + (b * 3);
    resultMax.push(num3);
    let num4 = (a + b) * c;
    resultMax.push(num4);
    let result = Math.max.apply(null,resultMax); // find Max number in array
    return result;
}
console.log(expressionMatter(2, 1, 2));
console.log(expressionMatter(2, 1, 1));
console.log(expressionMatter(1, 2, 3));
console.log(expressionMatter(1, 3, 1));
console.log(expressionMatter(2, 2, 2));
