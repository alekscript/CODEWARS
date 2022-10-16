// Алгоритм Truncate a String (Скорочення рядка)
// Скоротіть рядок якщо перший аргумент довший ніж задана максимальна довжина рядка (другий аргумент). 
// Перетворіть скорочений рядок на ....

function truncateString(str, num) {
    let newString = str.slice(0, num);
    if (str.length > num) {
      newString = newString + '...';
      return newString;
    } else if (str.length == num) {
      newString = newString;
      return newString;
    } else {
      return newString;
    }
  }
  
  truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);