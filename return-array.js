// Повторіть рядок Повторення рядка
// Повторити заданий рядок str (перший елемент) num разів (другий елемент).
//  Повернути порожній рядок, якщо num не є додатнім числом.
//   Для цього завдання не використовуйте вбудований .repeat() метод.
function repeatStringNumTimes(str, num) {
    let newStr = '';
    for (let i = 1; i <= num; i++) {
      newStr+= str;
    } 
    console.log(newStr);
    return newStr;
  }
  
  repeatStringNumTimes("*", 3);