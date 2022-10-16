// Зворотний рядок
// Переверніть заданий рядок.
// За необхідності перетворіть рядок у масив до того, як вносити зміни.
// У результаті ви повинні отримати рядок.
function reverseString(str) {
    let revStr = str.split(''); // превращаем строку в массив
    console.log(revStr);
    let newStr = []; // создаем новый массив
    let newPop = ''; // переменная для удаленного элемента из массива

    for (let i = 0; i<str.length; i++){  // цикл для пробега по всему массиву
      newPop = revStr.pop(); // удалаем последний элемент
      newStr.push(newPop); // добавляем удаленный элемент в новый массив
    }
    console.log(newStr);
    str = newStr.join('');  // превращаем массив в строку
    console.log(str);
    return str; // ответ строка в обратном формате
  }
  
  reverseString("hello");