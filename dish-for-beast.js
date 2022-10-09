// Напишите функцию чтобы при передаче строк в аргументы функции при совпадении первой и последней буквы слов - выводило true, в других случаях false

function feast(beast, dish) {
    let beastLength = beast.length; // длина строки
    let dishLength = dish.length; // длина строки
    if ( beast[0] == dish[0] && beast[beastLength-1] == dish[dishLength-1]) {  // сравниваем первый и последний символ строк
        return true; // совпали и вернули тру
    } 
        return false; // условие не выполнилось и вернули фолс
    }

   let beastDish =  feast("great blue heron", "garlic naan");
   console.log(beastDish);