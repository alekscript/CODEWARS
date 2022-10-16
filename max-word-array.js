// Знайдіть найдовше слово в рядку

// Поверніть довжину найдовшого слова у даному реченні.

// Ваша відповідь повинна бути числом.

function findLongestWordLength(str) {
    let newArray = [];
    newArray = str.split(" ");
    let maxWord = [];
    let max = 0;
    for (let i=0; i<newArray.length; i++) {
      maxWord.push(newArray[i].length);
    }
    max = Math.max.apply(null, maxWord);
    console.log("Максимальное число: " + max);
    return max;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");