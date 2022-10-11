function move (position, roll) {
    let newPos = position + (roll * 2);
    return newPos;
  }
  console.log(move(0, 4));