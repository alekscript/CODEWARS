function getSum( a,b ) {
    //Good luck!
   let sum = 0;
   let small, big;
   if ( a == b) {
    return sum = a;
   } else {
    if (a < b){
        small = a;
        big = b;
    } else {
        small = b;
        big = a;
    }
    for(let i = small; i <= big; i++){
        sum += i; 
    }
    return sum;
   }
 }
console.log(getSum(2,4));
console.log(getSum(0,1));
console.log(getSum(0,-1));