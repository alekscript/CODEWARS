function updateLight(current) {
    let colorNow = "";
    if (current == "green") {
      colorNow = "yellow";
      return colorNow;
    } else if (current == "yellow") {
      colorNow = "red";
      return colorNow;
    } else {
      colorNow = "green";
      return colorNow;
    }
  }