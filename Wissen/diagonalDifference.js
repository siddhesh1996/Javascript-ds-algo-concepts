function diagonalDifference(arr) {
    // Write your code here
    let ltorSum = 0;
    let rtolSum = 0;
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i == j) {
                ltorSum = ltorSum + arr[i][j];
            }

            if (i + j === n - 1) {
                rtolSum = rtolSum + arr[i][j];
            }
        }
    }

    return Math.abs(ltorSum - rtolSum);
}

let arr = [[11, 2, 4], [4, 5, 6], [10, 8, -12]];

console.log(diagonalDifference(arr));