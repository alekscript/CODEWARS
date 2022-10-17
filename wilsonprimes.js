function amIWilson(p) {
    let numberW = 0;
    let fact = p - 1;
    for(let i = 1; i < p-1; i++){
     fact = fact * i;
    }
    console.log(fact);
    numberW = (fact + 1) / p;
    console.log(numberW);
    if (Number.isInteger(numberW)) {
      return true;
    } else {
      return false;
    }
  }
  
   console.log(amIWilson(5));