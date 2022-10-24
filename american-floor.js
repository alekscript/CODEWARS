function getRealFloor(n) {
    let floor = 0;
    if (n == 0 || n == 1) {
      return floor=0;
    } else if(n>1 && n<13){
      floor = n -1;
    } else if(n>=13){
      floor = n-2;
    } else if (n<0){
      floor = n;
    }
    return floor;
  }
  
  console.log(getRealFloor(15));