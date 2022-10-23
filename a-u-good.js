function betterThanAverage(classPoints, yourPoints) {
    let sum = 0;
    let avg = 0;
    for(let i = 0; i < classPoints.length; i++) {
      sum+= classPoints[i];
    }
    avg = (sum + yourPoints)/(classPoints.length+1);
    if (avg < yourPoints) {
      return true;
    } else {
      return false;
    }
  }
  