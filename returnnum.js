// Що впало, те пропало
// Створіть функцію, яка переглядає масив arr і повертає перший елемент у ньому,
//  який проходить перевірку на "істинність". Це означає, що даний елемент x пройшов перевірку на "істинність", 
//  якщо func(x) є true. Якщо жодний елемент не проходить перевірку, відповідь буде undefined.

function findElement(arr, func) {
    let num = 0;
   for(let i = 0; i < arr.length; i++) {
     num = arr[i];
     if (func(num) === true) {
       return num;
     }
   }
  
   return undefined;
 }
 
 findElement([1, 2, 3, 4], num => num % 2 === 0);