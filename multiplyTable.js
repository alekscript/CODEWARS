function multiTable(number) {
    let multi = '';
    for ( i = 1; i< 10; i++ ){
      multi+= i + " * " + number + " = " + (i * number) + "\n";
    }
    console.log(multi);
    return multi;
  }