function repeatStringNumTimes(str, num) {
    let newStr=[];
    for ( let i = 0; i < num; i++){
      newStr.push(str);
    }
      let repeat = newStr.join('');
      console.log(repeat);
      return repeat;
  }
  
  repeatStringNumTimes("abc", 3);