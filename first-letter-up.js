function titleCase(str) {
    let splitStr = str.split(" ");
    let  newStr = "";
    for (let i = 0; i < splitStr.length; i++) {
      let word = splitStr[i];
      let firstLetter = word.substring(0, 1).toUpperCase();
      let leftLetters = word.substring(1, word.length).toLowerCase();
      newStr += firstLetter + leftLetters + " ";
    }
    return newStr;
  }
  console.log(titleCase("sHoRt AnD sToUt"));