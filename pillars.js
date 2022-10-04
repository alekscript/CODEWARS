function pillars(numPill, dist, width) {
  // your code here
  let sumPill = 0;
  let sumWidth = 0;
  let sumWidthCorrect = 0;
  for ( let i = 1; i < numPill; i++){
    sumPill+=dist*100;
    sumWidth+=width;
  }
  if (numPill > 1) {
    sumWidthCorrect = sumWidth - width;
  }
  return sumPill + sumWidthCorrect;
}
console.log(pillars(11, 15, 30));
console.log(pillars(1, 10, 10));
console.log(pillars(2, 20, 25));