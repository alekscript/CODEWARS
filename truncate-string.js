function truncateString(str, num) {
    let strLen = str.length;
    let newStr = "";
    if(strLen <= num) {
      return str;
    } else {
      newStr = str.slice(0, num) + "...";
      return newStr;
    }
  }
  
  let test = truncateString("A-tisket a-tasket A green and yellow basket", 8);
  console.log("Строка после сокращения: " + test);