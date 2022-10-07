function countSheeps(arrayOfSheep) {
   let count = 0;
   for ( let i = 0; i < arrayOfSheep.length; i++){
     if ( arrayOfSheep[i] == true) {
       count+= 1;
     } else {
       count = count;
     } 
   }
   return count;
 }
let array = [ true, true, false, false,
              false, false, true, false];
let sum = countSheeps(array);
console.log(sum);
