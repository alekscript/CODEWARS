function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
    let mySpeedPontoon = pontoonDistance / youSpeed;
    let sharkSpeedDistance = 0;
    if( dolphin == true){
      sharkSpeedDistance = sharkDistance / (sharkSpeed / 2);
    } else {
       sharkSpeedDistance = sharkDistance / sharkSpeed;
    }
    if (mySpeedPontoon < sharkSpeedDistance) {
      return "Alive!";
    } else if (mySpeedPontoon == sharkSpeedDistance) {
      return "Shark Bait!";
    } else {
      return "Shark Bait!";
    }
  }
  console.log(shark(12, 50, 4, 8, false));
  