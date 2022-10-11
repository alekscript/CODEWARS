function powersOfTwo(n){
    let sum = [];
    for ( let i = 0; i<=n; i++){
          let power = 2**i;
          sum.push(power);
    }
    console.log(sum);
    return sum;
  }
powersOfTwo(5);