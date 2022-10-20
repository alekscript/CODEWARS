function confirmEnding(str, target) {
    let strLen = str.length;
    let targetLen = target.length;
    let newArr = str.slice(strLen-targetLen);
    console.log(newArr);
    if(newArr == target){
      return true;
    } else {
      return false;
    }
  }
  
  confirmEnding("Congratulation", "on");