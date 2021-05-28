function roundToNext5(n) {
    while (n % 5 != 0) {
        n++
    }
    return n;
}
let n = -2;
console.log(roundToNext5(n))

// Prototype Method
Math.__proto__.roundFive = roundToNext5;

console.log(Math.roundFive(11))