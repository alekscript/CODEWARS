function remainder(n, m){
    // Divide the larger argument by the smaller argument and return the remainder
    let highNum = Math.max(n,m);
    let lowNum = Math.min(n,m);
    let num = highNum%lowNum;
    console.log(num);
    return num;
  }