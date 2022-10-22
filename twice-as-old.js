function twiceAsOld(dadYearsOld, sonYearsOld) {
    let years = dadYearsOld;
    let twice = sonYearsOld*2;
    console.log("Возраст сына дважды:" + twice);
    let sum = 0;
    for ( let i = 0; i <=dadYearsOld; i++ ) {
      if (years == twice){
        sum = dadYearsOld - years;
        return sum;
      } else if (twice > dadYearsOld) {
        sum = twice - dadYearsOld;
        return sum;
      }
       years = years - 1;
       console.log(years);
    }
  }
  
  console.log("В этом возврасте отец был в два раза старше сына: " + twiceAsOld(55, 30) + " лет.");