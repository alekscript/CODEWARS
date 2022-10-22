function century(year) {
    let century = year / 100;
    let fullNum = Math.trunc(century);
     if(century == fullNum){
       return century;
     } else {
       century = fullNum + 1;
       return century;
     }
   }

console.log("Событие было в: " + century(1905) + " столетии");
//    Introduction
// The first century spans from the year 1 up to and including the year 100, 
// the second century - from the year 101 up to and including the year 200, etc.
// Task
// Given a year, return the century it is in.