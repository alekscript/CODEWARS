function strCount(str, letter){  
    let count = 0;
    let length = str.length;
    for (let i=0; i<length; i++) {
      if(str[i] == letter) {
        count = count + 1;
      } else {
        count = count;
      }
    }
    return count;
  }

  strCount('Hello', 'o');