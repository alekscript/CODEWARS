function findAverage(array) {
    let sum = 0;
    let avg = 0;
    if (array.length > 0){
    for (let i = 0; i < array.length; i ++) {
      sum=sum + array[i];
    }
    avg = sum/array.length;
    return avg;
      } else {
        return 0;
      }
  }

  findAverage([1,1,1]); // 1;