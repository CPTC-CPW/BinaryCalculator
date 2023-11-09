function decimalToBinary(decimal) {
    return decimal.toString(2);
}
function binaryConversion(number) {
    const binaryBits = [256, 128, 64, 32, 16, 8, 4, 2, 1];
    let resultString = "";
    while (number > 0) {
        const convertedBits = new Array(binaryBits.length).fill(0);
        for (let i = 0; i < binaryBits.length; i++) {
            if (number >= binaryBits[i]) {
                convertedBits[i] = 1;
                number -= binaryBits[i];
            }
        }
        for (let i = 0; i < convertedBits.length; i++) {
            resultString += convertedBits[i].toString();
        }
    }
    return resultString;
}
