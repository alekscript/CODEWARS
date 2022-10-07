function countSheeps(arrayOfSheep) {
    TODO May the force be with you
   let count = 0;
   for ( let i = 0; i  arrayOfSheep.length; i++){
     if ( arrayOfSheep[i] == true) {
       count+= 1;
     } else if ( arrayOfSheep[i] == false){
       count = count;
     } else if (arrayOfSheep[i] == null && arrayOfSheep[i] == undefined){
       count = count;
     }
   }
   return count;
 }