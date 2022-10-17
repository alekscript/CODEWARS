function amIWilson(p) {    
    p = BigInt(p);
    return ((factorial(p-1n)) + 1n) % (p * p) == 0n;
}

function factorial(x){
    if (x <= 1n) {
        return 1n;
    }
    return x * factorial(x - 1n);
}