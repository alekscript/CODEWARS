function validatePIN (pin) {
    let pinLength = pin.length;
    let onlyNumbers = pin.match(/^\d+$/);
    if (pinLength == 4 && onlyNumbers) {
        return true;
    } else if (pinLength == 6 && onlyNumbers){
        return true;
    } else {
        return false;
    }
}

console.log(validatePIN('123459999'));