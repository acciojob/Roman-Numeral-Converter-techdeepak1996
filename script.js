function convertToRoman(num) {
    const obj = {
        0: ['M', 1000],
        1: ['D', 500],
        2: ['C', 100],
        3: ['L', 50],
        4: ['X', 10],
        5: ['V', 5],
        6: ['I', 1]
    };

    let result = '';

    for (let i = 0; i < 7; i++) {
        const [symbol, value] = obj[i];
        while (num >= value) {
            result += symbol;
            num -= value;
        }
        if (i % 2 !== 0 && i !== 0) {  // change here
            const nextIndex = i - 1;  // and here
            const [nextSymbol, nextValue] = obj[nextIndex];
            if (num >= value - nextValue) {
                result += nextSymbol + symbol;
                num -= (value - nextValue);
            }
        }
    }

    return result;
}
console.log(convertToRoman(36)); 

module.exports = convertToRoman
